# Troubleshooting

Most issues fall into one of the four areas below. Find your symptom, apply the fix, and check the linked page for background. Many "problems" are deliberate design behavior — those are marked as normal.

## Power and Battery

!!! warning "Never feed power into the OUT port"
    The **OUT** USB-C port is an output only. Connecting a charger to it is unsupported and can damage the unit. Inputs are the rear USB-C **IN** port and the DC barrel jack.

| Symptom | Likely Cause | Fix |
|---|---|---|
| Display flashes **!** with **BAD PSU / Need PD / 26W min**, rapid beeping | Input power is present but unusable — not a proper USB-C PD source, or voltage out of range | Use a USB-C PD charger (a 27 W supply such as the official Raspberry Pi charger meets the 26 W minimum; 45–65 W recommended) or a DC supply within the supported input range — see [Power](power.md) and [Specifications](reference/specifications.md) |
| Pi shows undervoltage warnings, or the battery charges very slowly under load | Input supply too weak — delivering the full 27 W (5.1 V / 5 A) output requires a supply rated at least 45 W | Move to a 45 W or 65 W USB-C PD charger |
| Pi throttles even with a strong charger | The cable from **OUT** to the Pi is not e-marked — 5 A output requires an e-marked USB-C cable | Use an e-marked cable (the official Raspberry Pi 27 W supply ships with one) |
| Pi lost power during a battery swap | Hot-swap is only supported while external power is connected | Plug in a charger or DC supply first, then swap the battery |
| Battery percentage reads high while charging, then drops once the charger is removed | State of charge is estimated from battery voltage and reads optimistically during charging | Normal — the reading settles shortly after charging stops |
| Charging stops early; display shows **FUL** then **IDL** | The charger deliberately stops at a gentle ~8.1 V to extend battery lifespan; on external power the Pi is fed from the input, not the battery | Normal behavior — see [Battery](hardware/battery.md) |
| Third-party battery won't charge, or cuts out under load | The pack lacks working built-in protection (BMS) — the UPS relies on the pack's own protection circuit | Use genuine Sony NP-F packs or verified protected compatibles; never use unprotected cells |

## Beep Reference

| Sound | Meaning |
|---|---|
| Ascending melody at power-up | Normal startup |
| Three descending tones | Input power lost — running on battery |
| Single beep every 30 s | Battery below 20 % (on battery) |
| Double beep every 5 s | Battery below 10 % — critical; expect the host to shut down soon |
| Six rapid beeps, then a double beep every 10 s | Bad power supply detected (see **BAD PSU** above) |

These alarms are described in context on [Power](power.md) and [Battery](hardware/battery.md).

## Display and Buttons

| Symptom | Likely Cause | Fix |
|---|---|---|
| Long-press doesn't open the menu | The menu opens only from the **Home** screen — hold **LEFT** for 2 s | Wait for the display to auto-return to Home (20 s idle) or step back to it, then hold **LEFT** — see [Display & Menu](hardware/display-menu.md) |
| Display keeps jumping back to the Home screen | Auto-return from the [debug screens](hardware/display-menu.md#debug-screens) after 20 s without a button press | Normal — press a button to browse the screens again |
| **NO MODEM / M.2 card missing?** appears when selecting **Network** | No LTE-M module is fitted, or it didn't respond within a few seconds | Normal without the module — **Network** is the only menu item that needs it. If a module is installed and this persists, contact support |
| No sounds at all — not even power-loss or battery alarms | **Sound** is set to OFF, which mutes everything including alarms, and the setting persists across reboots | Menu → **Sound** → ON |

## Connectivity and Panel

| Symptom | Likely Cause | Fix |
|---|---|---|
| Claiming the device in the web panel fails | ICCID or claim token entered incorrectly | The ICCID is printed on the SIM tray, the claim token on the setup card — re-enter both exactly; see [Web Panel](connectivity/web-panel.md) |
| Device shows offline right after switching backend mode | A mode switch reboots the LTE module (~30 s of telemetry gap); battery backup is unaffected | Wait a minute for it to reconnect |
| Panel readings lag behind the OLED | Cellular telemetry is uplinked about every 30 s to conserve the metered data plan; power-loss and fault events are sent immediately | Normal |
| Arkiv claim code is rejected | The claim code is exactly 4 words and rotates every 15 minutes | Read the current code from the OLED and enter all 4 words in order — see [Arkiv mode](connectivity/arkiv-mode.md) |
| Arkiv telemetry stopped appearing on-chain | The device wallet is out of GLM — the device pays its own gas | Check menu → **Wallet** → Balance, then fund the address shown under **Wallet** → Address (QR code) |
| HTTP mode: your server rejects requests, or no telemetry arrives | Wrong HTTP key, or server clock skew breaking signature checks | Re-read the key from menu → **HTTP Key** (case and separators don't matter), keep the server clock NTP-synced, and use **New key** if the key may have leaked — see [HTTP mode](connectivity/http-mode.md) |

## Host and USB

| Symptom | Likely Cause | Fix |
|---|---|---|
| No UPS serial device appears on the Pi | Pi connected to the wrong port, or USB data on the Pi 5's USB-C port not enabled | Connect the Pi to the **OUT** port — one cable carries power and data, and the UPS enumerates as `Web3_Pi_UPS`. Web3 Pi vOS supports this out of the box; on other OS images add `dtoverlay=dwc2,dr_mode=host` to `/boot/firmware/config.txt` and reboot — see [Host Integration](host-integration.md) |
| Pi wasn't shut down cleanly before the battery ran out | The UPS never cuts its output on low battery — graceful shutdown is performed by the companion service on the Pi | Install and enable the host service (default: shutdown below 10 % with a 30 s grace period) — see [Host Integration](host-integration.md) |
| A tool such as `send_config.py` can't open the serial port | The `w3p-ups` host service holds the port | `sudo systemctl stop w3p-ups`, run the tool, then `sudo systemctl start w3p-ups` |

## Still Stuck?

Before reaching out, note the **Flt** code from the **SYSTEM** [debug screen](hardware/display-menu.md#debug-screens) (current firmware), which power sources were connected, and (if networked) the active backend mode — then head to [support](../support/contact.md).
