# Self-Hosted HTTP Mode

HTTP mode is the [backend mode](index.md) for operators who want UPS data on **their own server** — no cloud account, no third-party services. The UPS POSTs signed telemetry JSON to an endpoint you host, and your server queues commands in return.

## How It Works

The UPS is an **outbound-only HTTP client**, so it works behind cellular carrier NAT — no public IP, port forwarding, or VPN needed. Every ~30 s it POSTs telemetry to `{base}/api/v1/devices/{device_id}/telemetry` (`{device_id}` defaults to the SIM's ICCID); commands ride back **in the POST response**, so command latency is up to ~30 s. **Both directions are HMAC-SHA256 signed**, so nothing can be forged even over plain `http://` — TLS is optional and adds confidentiality only.

```text
UPS ── POST /api/v1/devices/<id>/telemetry ──────────────▶ your server
       {"ts":1780047458,"fw_ver":"…","uptime_s":137,
        "power":{…},"host":{…},"net":{…},"acks":[]}

UPS ◀───────────────────────────── 200 OK (signed) ── your server
       {"commands":[{"id":"c-0043","cmd":"ui.beep","args":{}}]}

~30 s later, next POST:
       {"ts":…, …, "acks":["c-0043"]}
```

This page is a quick-start — see the full
[HTTP mode specification](https://github.com/Web3-Pi/Web3-Pi-UPS/blob/main/docs/http-control-mode.md){:target="_blank"}
for signature headers, body schema, and replay protection.

## What You Need

| Requirement | Notes |
|---|---|
| UPS with LTE-M module | HTTP mode runs over the cellular link |
| A reachable HTTP(S) endpoint | Any host with a public IP or domain; TLS optional |
| The device's **HTTP key** | Read it off the OLED (below) — this is the shared HMAC secret |
| Brief access to the Raspberry Pi | To send the endpoint URL to the UPS over the USB serial link |

## The HTTP Key

The device generates its own HTTP-mode secret and shows it on the OLED: open the menu (hold **LEFT** 2 s on the Home screen), then **Network** → **HTTP Key**. It is a 16-character code (Crockford base32, ~80 bits); case and separators don't matter when typing it in. **New key** re-rolls it instantly — the old key stops working at once. The key survives reboots and mode switches; only a factory reset clears it. See [Display & Menu](../hardware/display-menu.md).

## Setup

1. **Read the HTTP key** from the OLED (above) and note your SIM's ICCID (printed on the SIM tray).
2. **Run the reference server** on a publicly reachable host:
   ```bash
   python3 server.py --secret "ABCD EFGH JKMN PQRS" --device-id <ICCID> --port 8080
   ```
   `server.py` is a zero-dependency Python example from
   [`examples/http-control-server`](https://github.com/Web3-Pi/Web3-Pi-UPS/tree/main/examples/http-control-server){:target="_blank"}.
3. **Point the UPS at your server** from the Raspberry Pi with `send_config.py` (same examples directory) — the URL is stored on the device, no re-flash:
   ```bash
   sudo apt install -y python3-serial
   sudo systemctl stop w3p-ups        # frees the UPS serial port
   python3 send_config.py --url http://<your-server>:8080
   sudo systemctl start w3p-ups
   ```
   The serial port is auto-detected; the URL persists until factory reset. Optional: `--device-id <id>` overrides the ICCID default; `--url ""` clears.
4. **Switch the device to HTTP mode**: menu → **Network** → **Mode** → **HTTP**. The setting is saved and the LTE-M module reboots (~30 s telemetry gap; power to the Pi unaffected).
5. **Verify**: the first telemetry POST arrives within ~30 s; queue a `beep` at the server prompt to test commands.

!!! tip "Adding TLS"
    Put any reverse proxy (Caddy, nginx) with a certificate in front of the server and re-run `send_config.py` with the `https://` URL.

## Available Commands

Same semantics as the [web panel](web-panel.md) commands:

| Command | Effect |
|---|---|
| `ui.beep` | Sound the buzzer — a quick end-to-end test |
| `ui.display_msg` | Show a short text message on the OLED |
| `host.shutdown` | Graceful Raspberry Pi shutdown (default 5 s delay) |
| `host.reset` | Reboot the Raspberry Pi |
| `power.cycle` | Power-cycle the **OUT** port (default 1.5 s off) |

## Security Notes

- **Guard the HTTP key.** If it leaks, re-roll it on the OLED (**HTTP Key** → **New key**) and update your server.
- **Keep the server clock NTP-synced.** The device timestamps requests from network time; a drifting server clock rejects valid requests as stale.
- The reference server is an **example, not hardened infrastructure**: no operator authentication, persistence, or rate limiting.

!!! note "Web panel in HTTP mode"
    HTTP-mode devices still appear on the [web panel](web-panel.md)'s HTTP page, but your server is the backend — the panel cannot configure the endpoint.
