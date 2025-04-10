# Web3 Pi: Hardware Checklist

**Active cooling** is required to avoid throttling and keep sufficient performance/stability of the system.

As a **power supply**, we recommend using the official Raspberry Pi power supply for your model.

Raspberry Pi + 2TB drive can use a significant amount of power so a sufficient power supply is important for stability.

## Single Device Node Requirements

You can run a single device node on any of the following.

- Raspberry Pi 5 - [see full details](#raspberry-pi-5)

- Raspberry Pi 4 - [see full details](#raspberry-pi-4)

- Raspberry Pi CM4 - [see ful details](#raspberry-pi-cm4)

Optionally, you can add an [LCD display](../considerations.md) for monitoring purposes.

### Raspberry Pi 5

- 1 x [Raspberry Pi 5 (8GB)](https://botland.store/raspberry-pi-5-modules-and-kits/23905-raspberry-pi-5-8gb-5056561803326.html)
- 1 X [2TB SSD drive (external USB SSD or NVMe m.2 with adapter)](./hardware-recommendations.md#ssd-drive)
- 1 X [SD Card reader/writer](./hardware-recommendations.md#sd-card-reader-and-writer)
- 1 x [microSD Card](./hardware-recommendations.md#microsd-card)
- 1 x [Power supply](https://botland.store/raspberry-pi-5-power-supply/23907-raspberry-pi-27w-usb-c-power-supply-official-51v-5a-psu-for-raspberry-pi-5-black-5056561803418.html)
- 1 X [Raspberry Pi 5 Active Cooler]([Raspberry Pi Active Cooler - heatsink + fan for Raspberry Pi 5 Botland - Robotic Shop](https://botland.store/raspberry-pi-5-mounting-elements/23925-raspberry-pi-active-cooler-heatsink-fan-for-raspberry-pi-5-5056561803357.html)

### Raspberry Pi 4

- 1 x [Raspberry Pi 4 (8GB)](https://botland.store/raspberry-pi-4b-modules-and-kits/16579-raspberry-pi-4-model-b-wifi-dualband-bluetooth-8gb-ram-18ghz-5056561800356.html)
- 1 x [2TB SSD drive (external USB SSD or NVMe with m.2 to USB adapter](./hardware-recommendations.md#ssd-drive))
- 1 x [SD Card reader/writer](./hardware-recommendations.md#sd-card-reader-and-writer)
- 1 x [microSD Card](./hardware-recommendations.md#microsd-card)
- 1 X [Raspberry Pi 4 Active Cooler](https://botland.store/raspberry-pi-4b-cases/15106-case-justpi-for-raspberry-pi-4b-aluminum-with-dual-fan-black-lt-4b02-5903351242660.html)
- 1 x [Power supply](https://botland.store/raspberry-pi-4b-power-supply/14348-power-supply-for-raspberry-pi-4-usb-c-51v-3a-original-black-644824914886.html)

### Raspberry Pi CM4

The CM4 module needs a carrier board. There are many on the market.

Minimum requiments are:

- 1 x [Raspberry Pi CM4 (8GB)](https://botland.store/raspberry-pi-cm/18211-raspberry-pi-cm4-compute-module-4-8gb-ram-32gb-emmc-wifibluetooth-cm4108032-5904422368593.html)
- 1 x [2TB fast storage](./hardware-recommendations.md#ssd-drive)
- 1 x Power supply
- 1 X [Raspberry Pi CM4 Active Cooler]((https://botland.store/raspberry-pi-cm/21716-dedicated-all-in-one-3007-cooling-fan-for-raspberry-pi-cm4-waveshare-22096.htm)
- 32GB+ storage for operating system (microSD or eMMC)
- 1 X Motherboard

Installing Web3 Pi on the CM4 requires more knowledge. CM4 modules come with built-in eMMC memory, and in this case, you need to use the **rpiboot** application before using the Raspberry Pi Imager. If your module does not have built-in memory and uses an SD card, the installation process is similar to a standard Raspberry Pi.

More information can be found on the manufacturer's website: [Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/computers/compute-module.html).

In some cases, a bootloader update may be necessary, which is described here: [How to Update the Raspberry Pi Compute Module 4 Bootloader EEPROM](https://www.jeffgeerling.com/blog/2022/how-update-raspberry-pi-compute-module-4-bootloader-eeprom).

## Dual Device Node Requirements

Suggested configurations:

- 2 X Raspberry Pi 5
- 2 X Raspberry Pi 4
- 1 X Raspberry Pi 5 + 1 X Raspberry Pi 4

or any other combination, including CM4.

The default setup requires the following hardware components:

- 2 x Raspberry Pi (8GB) starter kits
- 2 x SSD (one for each device)
- 1 x SD Card reader/writer
- 2 x Fast microSD Card

Optionally, you can add an [LCD display](../considerations.md) to each Raspberry Pi for monitoring purposes.

A device with an execution client needs 2TB+ fast storage. A device with a consensus client needs 256GB+ fast storage.

### Raspberry Pi

You can use:

- [Raspberry Pi 5](https://botland.store/raspberry-pi-5-modules-and-kits/23905-raspberry-pi-5-8gb-5056561803326.html) with [Active cooling](https://botland.store/raspberry-pi-5-mounting-elements/23925-raspberry-pi-active-cooler-heatsink-fan-for-raspberry-pi-5-5056561803357.htm)
- [Raspberry Pi 4](https://botland.store/raspberry-pi-4b-modules-and-kits/16579-raspberry-pi-4-model-b-wifi-dualband-bluetooth-8gb-ram-18ghz-5056561800356.html) with [Active cooling](https://botland.store/raspberry-pi-4b-cases/15106-case-justpi-for-raspberry-pi-4b-aluminum-with-dual-fan-black-lt-4b02-5903351242660.html)
- [Raspberry Pi CM4](https://botland.store/raspberry-pi-cm/18211-raspberry-pi-cm4-compute-module-4-8gb-ram-32gb-emmc-wifibluetooth-cm4108032-5904422368593.html) with [Active cooling](https://botland.store/raspberry-pi-cm/21716-dedicated-all-in-one-3007-cooling-fan-for-raspberry-pi-cm4-waveshare-22096.html) and motherboard

**8GB** RAM is required.
