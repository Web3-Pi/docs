# Getting Started

The Web3 Pi UPS sits between your USB-C charger and the Raspberry Pi 5. One cable to the Pi carries both power and data — when the power goes out, your node stays up, and when the battery runs low, it shuts down safely. Setup takes about five minutes.

![Web3 Pi UPS with an NP-F battery mounted — Home screen showing charge state, with the OUT port on the front face](img/ups-standalone.png){: .img-center style="max-width: 480px;"}

## What You Need

- A Sony NP-F series battery — **NP-F570**, **NP-F770**, or **NP-F970**; bigger number = more capacity and longer runtime. See [Battery](hardware/battery.md).
- A USB-C PD charger — **45 W or more recommended** so the UPS can run the Pi at full load *and* charge at the same time (26 W is the absolute minimum). Alternatively, a 12–20 V DC barrel supply.
- An e-marked USB-C cable for the Pi (required for 5 A; the official Raspberry Pi 27 W supply includes one).

!!! warning "Before You Cable Up"
    - Never feed power **into** the **OUT** port — it is an output only, and back-feeding it can damage the UPS.
    - Use only NP-F packs with built-in protection. All genuine Sony packs have it; verify third-party packs. Never use raw unprotected cells.

## Setup

1. **Mount the battery.** Set the NP-F pack on the top rail offset by about half its length (the pack engages the rail from roughly its midpoint) and slide it on until the red **PUSH** latch clicks. To remove it, press **PUSH** and slide the pack back. The battery is hot-swappable whenever external power is connected.

2. **Connect input power.** On the rear panel, plug your PD charger into the USB-C **IN** port (12–20 V, auto-negotiated — nothing to configure), or use the DC barrel jack (12–20 V). If both are connected, the higher voltage wins. The OLED lights up and the battery starts charging automatically.

3. **Connect the Raspberry Pi 5.** Run one e-marked USB-C cable from **OUT** to the Pi's power port. The UPS negotiates the native 5.1 V / 5 A Pi 5 profile — full power, no undervoltage warnings — and the Pi boots. The same cable carries USB data for telemetry and safe shutdown.

4. **First boot.** After a short splash, the **Home** screen shows the charge percentage, mode, and voltages — see [Display & Menu](hardware/display-menu.md) for the full screen tour and settings menu.

5. **Optional: install the host service.** On **Web3 Pi vOS** the `w3p-ups` service is preinstalled and already running — verify with `w3p-ups status` and skip this step. On other systems (Ubuntu family), install it on the Pi with:

    ```bash
    curl -fsSL https://raw.githubusercontent.com/Web3-Pi/Web3-Pi-UPS-Service/main/install.sh | sudo bash
    ```

    `w3p-ups` reads UPS telemetry over the USB link and gracefully shuts the Pi down before the battery runs out — strongly recommended for unattended nodes. Configuration details are in [Host Integration](host-integration.md).

6. **Optional: claim your device in the web panel.** Units fitted with the LTE-M module report telemetry independently of the Pi. Claim yours to get live status, event history, and remote commands from any browser — see [Web Panel](connectivity/web-panel.md).

!!! tip "Try It"
    Pull the charger plug — the Pi keeps running from battery without a glitch. Details in [Power & Failover](power.md); if anything looks off, check [Troubleshooting](troubleshooting.md).
