# Self-Hosted HTTP Mode

HTTP mode is the [backend mode](https://docs.web3pi.io/ups/connectivity/index.md) for operators who want UPS data on **their own server** — no cloud account, no third-party services. The UPS POSTs signed telemetry JSON to an endpoint you host, and your server queues commands in return.

## How It Works

The UPS is an **outbound-only HTTP client**, so it works behind cellular carrier NAT — no public IP, port forwarding, or VPN needed. Every ~30 s it POSTs telemetry to `{base}/api/v1/devices/{device_id}/telemetry` (`{device_id}` defaults to the SIM's ICCID); commands ride back **in the POST response**, so command latency is up to ~30 s. **Both directions are HMAC-SHA256 signed**, so nothing can be forged even over plain `http://` — TLS is optional and adds confidentiality only.

```
UPS ── POST /api/v1/devices/<id>/telemetry ──────────────▶ your server
       {"ts":1780047458,"fw_ver":"…","uptime_s":137,
        "power":{…},"host":{…},"net":{…},"acks":[]}

UPS ◀───────────────────────────── 200 OK (signed) ── your server
       {"commands":[{"id":"c-0043","cmd":"ui.beep","args":{}}]}

~30 s later, next POST:
       {"ts":…, …, "acks":["c-0043"]}
```

This page is a quick-start — see the full [HTTP mode specification](https://github.com/Web3-Pi/Web3-Pi-UPS/blob/main/docs/http-control-mode.md) for signature headers, body schema, and replay protection.

## What You Need

| Requirement                           | Notes                                                                                               |
| ------------------------------------- | --------------------------------------------------------------------------------------------------- |
| UPS with LTE-M module                 | HTTP mode runs over the cellular link                                                               |
| A small Linux server with a public IP | Any VPS or always-on host works — [Step 1](#step-1-get-a-server) walks you through a 5-minute setup |
| The device's **HTTP key**             | Read it off the OLED (below) — this is the shared HMAC secret                                       |
| Brief access to the Raspberry Pi      | To send the endpoint URL to the UPS over the USB serial link                                        |

## The HTTP Key

The device generates its own HTTP-mode secret and shows it on the OLED: open the menu (hold **LEFT** for 2 s on the Home screen), then **Network** → **HTTP Key**. It is a 16-character code (Crockford base32, ~80 bits); case and separators don't matter when typing it in. **New key** re-rolls it (after a confirmation screen) — the old key stops working at once, no reboot needed. The key survives reboots and mode switches; only a factory reset clears it. See [Display & Menu](https://docs.web3pi.io/ups/hardware/display-menu/index.md).

## Setup

Four steps in three places: **your server** (steps 1–2), the **Raspberry Pi** (step 3), and the **UPS OLED menu** (step 4).

### Step 1 — Get a Server

Any always-on Linux machine the UPS can reach over the internet works: a VPS you already rent, or a home server with a public IP. If you have one, skip to [Step 2](#step-2-start-the-server).

If you don't, a minimal VPS is set up in about five minutes and the smallest tier is more than enough — the reference server is a single zero-dependency Python script. For example, on [DigitalOcean](https://www.digitalocean.com):

1. Sign up, then choose **Create → Droplets**.
1. Pick a region near you, the **Ubuntu 24.04 (LTS)** image, and the cheapest plan (from a few dollars a month, billed per second up to the monthly cap — destroy the droplet anytime and pay only for the time it existed).
1. Add your SSH key (or choose a root password) and click **Create Droplet**. After about a minute, note the droplet's **public IPv4 address** — that address goes into the device URL in step 3.

Any other provider (Hetzner, AWS Lightsail, OVH, …) works the same way — just make sure the plan includes a **public IPv4 address** (the very cheapest tiers at some providers are IPv6-only, which the UPS's cellular link cannot reach).

Firewall — the port must be open

The UPS connects **to your server** on the port you choose below (**8080** in the examples). A fresh DigitalOcean droplet accepts it out of the box, but:

- if the host firewall is active (`sudo ufw status` says `active`), allow the port: `sudo ufw allow 8080/tcp`
- if your provider has a cloud firewall / security group attached to the server (DigitalOcean *Cloud Firewalls*, AWS *security groups*), add an inbound rule for TCP 8080 there too.

### Step 2 — Start the Server

First read your two values off the hardware:

- **HTTP key** — on the UPS OLED: menu → **Network** → **HTTP Key** ([above](#the-http-key)), e.g. `ABCD EFGH JKMN PQRS`.
- **ICCID** — the SIM's serial number, printed on the SIM card/tray. This is the device ID.

Then SSH into your server and download the reference server:

```
curl -fsSLO https://raw.githubusercontent.com/Web3-Pi/Web3-Pi-UPS/main/examples/http-control-server/server.py
```

It comes from [`examples/http-control-server`](https://github.com/Web3-Pi/Web3-Pi-UPS/tree/main/examples/http-control-server) in the public UPS repository — a single script with **no dependencies** beyond Python 3, which Ubuntu ships with.

Now start it, substituting your HTTP key (quotes matter, spaces inside don't) and ICCID:

```
python3 server.py --secret "<HTTP key>" --device-id <ICCID> --port 8080
```

You should see:

```
listening on http://0.0.0.0:8080
endpoint    POST /api/v1/devices/<ICCID>/telemetry
device_id   <ICCID>
type 'help' for the command menu; Ctrl-C / Ctrl-D to quit
```

Keep it running

The server runs in the foreground — it prints telemetry and takes commands from your keyboard — so it stops when your SSH session drops. Run it inside `tmux` (`sudo apt install -y tmux`, then `tmux`; detach with **Ctrl-B** then **D**, `tmux attach` brings it back) or `screen` (detach with **Ctrl-A** then **D**, `screen -r` brings it back).

### Step 3 — Point the UPS at Your Server

The endpoint URL is sent to the UPS over the USB serial link from the Raspberry Pi it powers — it is stored on the device, no re-flash needed. On the **Raspberry Pi**:

```
curl -fsSLO https://raw.githubusercontent.com/Web3-Pi/Web3-Pi-UPS/main/examples/http-control-server/send_config.py
sudo apt install -y python3-serial
sudo systemctl stop w3p-ups        # frees the UPS serial port
python3 send_config.py --url http://<your-server-ip>:8080
sudo systemctl start w3p-ups
```

The serial port is auto-detected, and success looks like:

```
auto-detected port: /dev/ttyACM0 (Web3_Pi_UPS …)
sent net.config HTTP_URL = "http://<your-server-ip>:8080" (… bytes) to /dev/ttyACM0
device acked: OK
```

`no RESP seen` instead of the ack usually still means the URL was applied (the reply can get lost amid telemetry) — carry on and confirm in [Verify](#verify) below. A permission error opening the port means your user isn't in the `dialout` group — re-run with `sudo`. And if the [host service](https://docs.web3pi.io/ups/host-integration/index.md) isn't installed, the `systemctl` lines report `Unit w3p-ups.service not loaded` — that's fine, the port is already free; skip them.

The URL is stored until factory reset. Optional, as a separate run (the two flags can't be combined): `send_config.py --device-id <id>` overrides the ICCID default; an empty string (`--url ""` / `--device-id ""`) clears the respective setting.

### Step 4 — Switch the UPS to HTTP Mode

On the UPS OLED: menu → **Network** → **Mode** → **HTTP**. The setting is saved and the LTE-M module reboots (~30 s telemetry gap; power to the Pi is unaffected).

### Verify

Within ~30 s of the mode switch, the first telemetry POST shows up in the server terminal. Then test the command path end-to-end: type `beep` at the server prompt — the UPS picks it up on its next POST and sounds the buzzer (up to ~30 s later).

If nothing arrives after a couple of minutes, check in order:

1. **Cellular link** — was the device reporting before the switch (e.g. online in the [web panel](https://docs.web3pi.io/ups/connectivity/web-panel/index.md) in MQTT mode)? If it has never been online in any mode, the problem is cellular coverage, not your server.
1. **Server** — still running, and the port open (firewall — [Step 1](#step-1-get-a-server)).
1. **URL** sent in step 3 — right IP, right port, `http://` prefix, **no trailing slash**.
1. **Key and device ID** — a wrong `--secret` is logged by the server as `! rejected: bad signature`; a wrong `--device-id` is **silent** (the server answers 404 without printing anything), so re-check the ICCID digit-for-digit.

No hardware yet?

`test_client.py` from the same [examples directory](https://github.com/Web3-Pi/Web3-Pi-UPS/tree/main/examples/http-control-server) simulates a correctly-signed device POST, so you can smoke-test the server before touching the UPS.

Adding TLS

Put any reverse proxy (Caddy, nginx) with a certificate in front of the server and re-run `send_config.py` with the `https://` URL.

## Available Commands

Same semantics as the [web panel](https://docs.web3pi.io/ups/connectivity/web-panel/index.md) commands:

| Command          | Effect                                             |
| ---------------- | -------------------------------------------------- |
| `ui.beep`        | Sound the buzzer — a quick end-to-end test         |
| `ui.display_msg` | Show a short text message on the OLED              |
| `host.shutdown`  | Graceful Raspberry Pi shutdown (default 5 s delay) |
| `host.reset`     | Reboot the Raspberry Pi                            |
| `power.cycle`    | Power-cycle the **OUT** port (default 1.5 s off)   |

## Security Notes

- **Guard the HTTP key.** If it leaks, re-roll it on the OLED (**HTTP Key** → **New key**) and update your server.
- **Keep the server clock NTP-synced.** The device timestamps requests from network time; a drifting server clock rejects valid requests as stale.
- The reference server is an **example, not hardened infrastructure**: no operator authentication, persistence, or rate limiting.

Web panel in HTTP mode

HTTP-mode devices still appear on the [web panel](https://docs.web3pi.io/ups/connectivity/web-panel/index.md)'s HTTP page, but your server is the backend — the panel cannot configure the endpoint.
