# Wire Protocol (WUPS)

WUPS is the open binary protocol (version 1) that the Web3 Pi UPS speaks with its host over the same USB-C cable that powers the Pi. It is what the companion service uses for telemetry, event logging, graceful shutdown, and whitelisted service restarts — and what you would implement to integrate the UPS with your own software.

!!! note "This is an overview, not the spec"
    This page tells you what the protocol looks like and what it can do. The authoritative, byte-exact specification lives in the source code — see [Authoritative Spec](#authoritative-spec).

## Transport

The UPS enumerates as a USB CDC serial device (`/dev/ttyACM*` on Linux) with the USB product string `Web3_Pi_UPS`. The reference service auto-detects the port by that string and opens it at 115200 baud. See [Host Integration](../host-integration.md) for installing the ready-made service instead of talking to the port yourself.

## Framing

Frames are UBX-style binary (same Fletcher-8 checksum algorithm as u-blox UBX). All multi-byte fields are little-endian.

```text
+------+------+-----+-----+-------+----+-------+-----+-------+-------+ ~~~~~~~~~ +------+------+------+------+
| 0xAA | 0x55 | DST | SRC | CLASS | OP | FLAGS | SEQ | LEN_L | LEN_H |  payload  | CK_A | CK_B | 0x55 | 0xAA |
+------+------+-----+-----+-------+----+-------+-----+-------+-------+ ~~~~~~~~~ +------+------+------+------+
  sync bytes   addressing   message id   flags   seq   LEN, LE u16    0–240 bytes  Fletcher-8    end marker
```

- Checksum covers `DST` through the last payload byte (sync bytes and end marker excluded).
- Total frame size = 14 + `LEN` bytes; maximum 254 bytes.
- `FLAGS` encodes the messaging model: **REQ** (expects a response), **RESP** (echoes the request's `SEQ` for correlation), **EVENT** (unsolicited push). Requests time out after 1 s with up to 3 retries; there is no retransmission layer beyond that.
- `DST`/`SRC` address the nodes in the system (host = `0x01`, `0xFF` = broadcast); as an integrator you only ever see the USB side.

## Message Groups

| Class | Group | What It Carries |
|-------|-------|-----------------|
| `0x01` | System | Ping, boot hello (protocol version + capabilities), log messages, backend-mode change notifications |
| `0x02` | Power | Telemetry pushed at 1 Hz (input/output PD contracts, voltages, currents, battery charge, temperatures, faults) plus output-rail control and power events: mains lost/restored, charge low/full, fault |
| `0x03` | Network | LTE-M modem status (signal, IP, data counters), opaque cloud uplink/downlink, time sync, runtime configuration of [HTTP mode](../connectivity/http-mode.md) — no reflash needed |
| `0x04` | Host | Host metrics for the OLED (CPU temperature, load, disk, Ethereum client states), graceful **shutdown**/**reboot** requests with reason and delay, whitelist-enforced service restart |
| `0x05` | UI | Button events, display and buzzer control, on-device trust confirmations |

## Versioning

The global protocol version (currently **1**) is announced in the hello message. Independently, every payload carries its own version as its **first byte** — for example, the power telemetry payload is currently at payload version 2. Parsers should dispatch on that byte, so payloads can evolve without breaking the framing or other messages.

## Authoritative Spec

The full specification ships with the open firmware source:

- [`common/protocol.h`](https://github.com/Web3-Pi/Web3-Pi-UPS/blob/main/common/protocol.h){:target="_blank"} — the canonical, machine-readable spec (frame constants, all classes/ops, payload structs)
- [`common/protocol_desc.md`](https://github.com/Web3-Pi/Web3-Pi-UPS/blob/main/common/protocol_desc.md){:target="_blank"} — human-readable companion with worked examples

Where the two disagree, `protocol.h` wins. A reference host implementation in Rust is available at [Web3-Pi-UPS-Service](https://github.com/Web3-Pi/Web3-Pi-UPS-Service){:target="_blank"}, and a minimal zero-dependency Python integration example lives in the firmware repo under `examples/http-control-server/`.
