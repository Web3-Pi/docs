# Host Integration

The USB-C cable that powers your Raspberry Pi 5 from the **OUT** port also carries data: the UPS enumerates as a USB serial device (`/dev/ttyACM*`, descriptor `Web3_Pi / Web3_Pi_UPS`), and the open-source service **`w3p-ups`** turns that link into full two-way integration (wire format: [protocol reference](reference/protocol.md)).

## What the Service Does

- **Telemetry** — receives a power status frame every second: power source, battery voltage and charge %, input/output voltage and current, temperature, fault flags.
- **Event logging** — power events (mains lost/restored, charge low/full, fault) are logged to the system journal. (The UPS itself relays them to the [web panel](connectivity/web-panel.md) over its cellular link.)
- **Graceful shutdown** — when running on battery and charge drops below the threshold (default 10 %), a 30 s countdown starts and a cloud event is logged in the web panel (the UPS's own low-battery beeps are typically already sounding). If power returns or the battery recovers, the countdown cancels; otherwise `/etc/w3p-ups/shutdown.sh` runs — it stops the Ethereum clients cleanly, syncs disks, and halts. The sequence is recorded in `/var/log/w3p-ups-shutdown.log`.
- **Host metrics** — every 30 s the Pi reports CPU temperature, memory, disk, load, uptime, and the state of your Ethereum client services back to the UPS, for the OLED and the web panel.
- **Remote commands** — the panel can request a host shutdown, reboot, or start/stop/restart of whitelisted services. Service commands sit behind the `allow_service_restart` kill switch and a unit whitelist; shutdown and reboot requests are always honored while `w3p-ups` is running.

!!! tip "Preinstalled in Web3 Pi vOS"
    Web3 Pi vOS images ship with `w3p-ups` installed and enabled — telemetry and safe shutdown work out of the box, and the vOS control panel (**System → Web3 Pi UPS**) offers install/update, service control, logs, and a live telemetry view.

## Installing on Other Systems

Requirements: Raspberry Pi 5 (or compatible ARM64 board), a systemd-based OS such as Ubuntu 24.04+ or Armbian, and the UPS connected to the Pi's USB-C power port.

```bash
curl -fsSL https://raw.githubusercontent.com/Web3-Pi/Web3-Pi-UPS-Service/main/install.sh | sudo bash
```

This installs the binary to `/usr/local/bin/w3p-ups`, the config to `/etc/w3p-ups/config.toml` (an existing config is preserved), the shutdown script, and a systemd unit, then enables and starts the service. To remove it (config kept):

```bash
curl -fsSL https://raw.githubusercontent.com/Web3-Pi/Web3-Pi-UPS-Service/main/install.sh | sudo bash -s -- --uninstall
```

To build from source, see the [Web3-Pi-UPS-Service repository](https://github.com/Web3-Pi/Web3-Pi-UPS-Service){:target="_blank"}.

!!! note "USB-C Data on the Pi 5 Power Port"
    The Pi 5 only enables data on its USB-C power port when configured. Web3 Pi vOS does this for you; on other OS images add `dtoverlay=dwc2,dr_mode=host` to `/boot/firmware/config.txt` and reboot.

## Verifying the Link

```bash
sudo systemctl status w3p-ups    # service running?
ls -la /dev/ttyACM*              # UPS enumerated as a serial device?
w3p-ups status                   # one-shot telemetry snapshot
w3p-ups watch                    # live view, Ctrl-C to exit
sudo journalctl -u w3p-ups -f    # follow service logs
```

`w3p-ups status` prints power (source, charge %, voltages, currents, last event), host metrics, and Ethereum client states. If no data arrives, see [Troubleshooting](troubleshooting.md).

The **OUT** port also enumerates on a laptop (macOS or Linux) — a handy way to check the UPS is alive without a Pi. The Service repository includes a `ups-live` terminal dashboard (`cargo run --bin ups-live`) for exactly this, and the browser-based [Workbench](firmware-update.md#local-updates-over-usb-workbench) offers the same live view with no install at all.

## Configuration

Edit `/etc/w3p-ups/config.toml`, then `sudo systemctl restart w3p-ups`. The installed config lists every key — change values rather than deleting lines: the `[serial]`, `[battery]`, and `[shutdown]` keys are required, and an unknown key in most sections stops the service from starting. The optional sections (`[host_metrics]`, `[commands]`, `[eth_clients]`, `[ipc]`, `[logging]`) may be omitted entirely.

| Key | Default | Purpose |
| --- | --- | --- |
| `[serial]` `port` | `"auto"` | Auto-detects the UPS by USB descriptor; set e.g. `/dev/ttyACM0` to pin it |
| `[battery]` `shutdown_threshold_pct` | `10` | Battery % that triggers shutdown while on battery |
| `[shutdown]` `delay_seconds` | `30` | Grace period before shutdown; cancelled if power returns |
| `[shutdown]` `script_path` | `/etc/w3p-ups/shutdown.sh` | Shutdown script — customize it for your own services |
| `[host_metrics]` `interval_seconds` | `30` | Host metrics cadence; `0` disables |
| `[commands]` `allow_service_restart` | `true` | Master switch for remote service commands |
| `[commands]` `service_whitelist` | `geth`, `nimbus-beacon-node`, `nimbus-validator` | systemd units remote commands may control (names without `.service`) |
| `[eth_clients]` `execution` / `consensus` / `validator` | `geth` / `nimbus-beacon-node` / `nimbus-validator` | Units monitored for the ETH client status; empty string disables a role |
| `[logging]` `level` | `info` | Set `debug` to trace protocol activity |

Defaults match the stock Web3 Pi vOS Ethereum services. Running different clients? Point `[eth_clients]` and `service_whitelist` at your unit names and add matching stop commands to the shutdown script.
