# Troubleshooting

Most issues fall into one of the four areas below. Find your symptom, apply the fix, and check the linked page for background. Many "problems" are deliberate design behavior — those are marked as normal.

## Power and Battery

!!! warning "Never feed power into the OUT port"
    The **OUT** USB-C port is an output only. Connecting a charger to it is unsupported and can damage the unit. Inputs are the rear USB-C **IN** port and the DC barrel jack.

| Symptom | Likely Cause | Fix |
|---|---|---|
| Display flashes **!** with **BAD PSU / Need PD / 26W min**, rapid beeping | Input power is present but unusable — not a proper USB-C PD source, or voltage out of range | Use a USB-C PD charger (a 27 W supply such as the official Raspberry Pi charger meets the 26 W minimum; 45–65 W recommended) or a DC supply within the supported input range — see [Power](power.md) and [Specifications](reference/specifications.md) |
| Pi shows undervoltage warnings, or the battery charges very slowly under load | Input supply too weak — delivering the full 27 W (5 V / 5 A) output requires a supply rated at least 45 W | Move to a 45 W or 65 W USB-C PD charger |
| Pi throttles even with a strong charger | The cable from **OUT** to the Pi is not e-marked — 5 A output requires an e-marked USB-C cable | Use an e-marked cable (the official Raspberry Pi 27 W supply ships with one) |
| Pi lost power during a battery swap | Hot-swap is only supported while external power is connected | Plug in a charger or DC supply first, then swap the battery |
| Battery percentage reads high while charging, then drops once the charger is removed | State of charge is estimated from battery voltage and reads optimistically during charging | Normal — the reading settles shortly after charging stops |
| Charging stops early; display shows **FUL** then **IDL** | The charger deliberately stops at a gentle ~8.1 V to extend battery lifespan; on external power the Pi is fed from the input, not the battery | Normal behavior — see [Battery](hardware/battery.md) |
| Third-party battery won't charge, or cuts out under load | The pack lacks working built-in protection (BMS) — the UPS relies on the pack's own protection circuit | Use genuine Sony NP-F packs or verified protected compatibles; never use unprotected cells |

## Beep Reference

| Sound | Meaning |
|---|---|
| Ascending melody at power-up | Normal startup |
| Descending three-tone alarm, repeated three times | Input power lost — running on battery |
| Single beep every 30 s | Battery below 20 % (on battery) |
| Double beep every 5 s | Battery below 10 % — critical; expect the host to shut down soon |
| Six rapid beeps, then a double beep every 10 s | Bad power supply detected (see **BAD PSU** above), or a **MODEM** alert (see [Connectivity](#connectivity-and-panel) below) |
| Six rapid beeps, then a double beep every 30 s | **NO UPS** — internal telemetry hiccup; same reminder sound as above, just every 30 s (see [Display](#display-and-buttons) below) |

These alarms are described in context on [Power](power.md) and [Battery](hardware/battery.md).

## Display and Buttons

| Symptom | Likely Cause | Fix |
|---|---|---|
| Long-press doesn't open the menu | The menu opens only from the **Home** screen — hold **LEFT** for 2 s | Wait for the display to auto-return to Home (20 s idle) or step back to it, then hold **LEFT** — see [Display & Menu](hardware/display-menu.md) |
| Display keeps jumping back to the Home screen | Auto-return from the [detail screens](hardware/display-menu.md#detail-screens) after 20 s without a button press | Normal — press a button to browse the screens again |
| Display shows **NO UPS / pwr data lost** with periodic beeps | Internal telemetry link hiccup — power delivery to the Pi is unaffected | Normally self-recovers within a minute; if it persists across a power cycle, contact support |
| **NO MODEM / M.2 card missing?** appears when selecting **Network** | No LTE-M module is fitted, or it didn't respond within a few seconds | Normal without the module — **Network** is the only menu item that needs it. If a module is installed and this persists, contact support |
| No sounds at all — not even power-loss or battery alarms | **Sound** is set to OFF, which mutes everything including alarms, and the setting persists across reboots | Menu → **Sound** → ON |

## Connectivity and Panel

| Symptom | Likely Cause | Fix |
|---|---|---|
| Claiming the device in the web panel fails | ICCID or claim token entered incorrectly | Both are on the setup card included with your UPS — re-enter them exactly; see [Web Panel](connectivity/web-panel.md) |
| OLED shows a flashing **!** with **MODEM** and a reason, beeping every 10 s | The LTE module has failed to get online for over a minute. `NO NETWORK` → weak signal or no LTE-M coverage; `SIM ERROR` → the SIM cannot be read; `MODEM FAIL` → the module itself is not responding | For `NO NETWORK`, try a location with better cellular coverage. For `SIM ERROR` or a persistent `MODEM FAIL`, contact support. The alert clears itself once the device reconnects; any button press silences it |
| Device shows offline right after switching backend mode | A mode switch reboots the LTE module (half a minute to two minutes of telemetry gap); battery backup is unaffected | Wait a couple of minutes for it to reconnect |
| Panel readings lag behind the OLED | Cellular telemetry is uplinked about every 30 s to conserve the metered data plan; power-loss and fault events are sent immediately | Normal |
| A firmware update seems stuck, or the device comes back on the old version | An over-LTE update downloads ~1 MB at cellular speeds — expect ~10 minutes; if the new image can't verify connectivity, the device automatically rolls back | Normal — watch progress on the panel's Events tab, keep the unit powered, and don't switch backend mode meanwhile. If it rolled back, retry with good signal — see [Firmware Updates](firmware-update.md) |
| Arkiv claim code is rejected | The claim code is exactly 4 words and rotates every 15 minutes | Read the current code from the OLED and enter all 4 words in order — see [Arkiv mode](connectivity/arkiv-mode.md) |
| Arkiv telemetry stopped appearing on-chain | The device wallet has no gas — most likely right after a wallet **Regen** or factory reset, before the panel re-funds it | Check menu → **Network** → **Wallet** → Balance; the panel tops the wallet up automatically once the device is claimed — see [Arkiv mode](connectivity/arkiv-mode.md) |
| HTTP mode: your server rejects requests, or no telemetry arrives | Wrong HTTP key, server clock skew breaking signature checks, or the server was started with a `--device-id` that doesn't match the device (defaults to the SIM ICCID) | Re-read the key from menu → **Network** → **HTTP Key** (case and separators don't matter), keep the server clock NTP-synced, check the server's device-id matches the ICCID, and use **New key** if the key may have leaked — see [HTTP mode](connectivity/http-mode.md) |

## Host and USB

| Symptom | Likely Cause | Fix |
|---|---|---|
| No UPS serial device appears on the Pi | Pi connected to the wrong port, or USB data on the Pi 5's USB-C port not enabled | Connect the Pi to the **OUT** port — one cable carries power and data, and the UPS enumerates as `Web3_Pi_UPS`. Web3 Pi vOS supports this out of the box; on other OS images add `dtoverlay=dwc2,dr_mode=host` to `/boot/firmware/config.txt` and reboot — see [Host Integration](host-integration.md) |
| Pi wasn't shut down cleanly before the battery ran out | The UPS never cuts its output on low battery — graceful shutdown is performed by the companion service on the Pi | Install and enable the host service (default: shutdown below 10 % with a 30 s grace period) — see [Host Integration](host-integration.md) |
| A tool such as `send_config.py` can't open the serial port | The `w3p-ups` host service holds the port | `sudo systemctl stop w3p-ups`, run the tool, then `sudo systemctl start w3p-ups` |

## Still Stuck?

Before reaching out, note the **Flt** code from the **SYSTEM** [detail screen](hardware/display-menu.md#detail-screens), which power sources were connected, and (if networked) the active backend mode — then head to [support](../support/contact.md).
