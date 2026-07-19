# LTE Connectivity

The Web3 Pi UPS accepts an optional plug-in LTE-M module (Cat-M1 / NB-IoT cellular) that gives the UPS its own cellular link — completely independent of your home network and mains power. When the power goes out and your router goes dark, the UPS keeps reporting.

With the module fitted you get:

- **Remote monitoring** — telemetry (battery, inputs, host state) uplinked roughly every 30 seconds, wherever the device is.
- **Instant alerts** — power-state changes (mains lost/restored) and faults are pushed immediately, not on the next 30 s tick.
- **Remote commands** — reboot or shut down the host, power-cycle the output, trigger a beep.
- **No network setup** — the module is an outbound-only client, so it works behind carrier-grade NAT. No public IP, port forwarding, or VPN required.

## Backend Modes

The module reports to one of three backends — exactly **one active at a time**. **MQTT is the default and recommended mode**: zero configuration, and the full [web panel](https://docs.web3pi.io/ups/connectivity/web-panel/index.md) experience. HTTP and Arkiv are alternatives for specific needs. All three use secure, authenticated communication.

| Mode                 | Where your data goes                                                                         | Best for                                                        |
| -------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **MQTT** *(default)* | Web3 Pi cloud + [web panel](https://docs.web3pi.io/ups/connectivity/web-panel/index.md)      | Most users — zero-config remote monitoring and commands         |
| **HTTP**             | Your own server — [HTTP mode](https://docs.web3pi.io/ups/connectivity/http-mode/index.md)    | Self-hosters who want data on their own infrastructure          |
| **Arkiv**            | Arkiv blockchain — [Arkiv mode](https://docs.web3pi.io/ups/connectivity/arkiv-mode/index.md) | Verifiable, tamper-evident records for special/compliance needs |

MQTT and Arkiv devices are fully managed in the [web panel](https://docs.web3pi.io/ups/connectivity/web-panel/index.md). In HTTP mode your own server is the backend — the panel can still list such a device, but its live data and commands go through your server.

## Switching Modes

Modes are switched on the device itself, from the [OLED menu](https://docs.web3pi.io/ups/hardware/display-menu/index.md):

1. On the Home screen, hold **LEFT** for 2 seconds to open the menu.
1. Select **Network** (requires the LTE-M module — shows **NO MODEM** otherwise).
1. Select **Mode**, then pick **MQTT**, **ARKIV**, or **HTTP** — `*` marks the active mode.
1. The setting is saved and the LTE-M module reboots into the new mode.

The choice persists across reboots and power loss. The module reboot only pauses telemetry for about 30 seconds — power to the Pi and battery backup are handled in hardware and are never interrupted.

## Without the Module

The LTE-M module adds remote visibility; it is not required for protection. Without it, the UPS still provides the full power path and battery backup, the OLED display, buttons, buzzer alarms, and the local settings menu — plus telemetry, event logging, and graceful shutdown for the connected Pi over the single USB-C cable (see [Host Integration](https://docs.web3pi.io/ups/host-integration/index.md)).
