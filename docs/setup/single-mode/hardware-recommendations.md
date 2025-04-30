# Web3 Pi: Recommended Hardware

## SSD Drive

**2 TB** fast drive is required.

**For the Raspberry Pi 5**, you have three options for storage:

- external USB SSD drive (wide availability)
- m.2 NVMe drive with NVMe HAT for Raspberry Pi 5 (max performance)
- m.2 NVMe drive with USB m.2 adapter

Raspberry Pi 5 has a PCIe x1 connector on board so with a special adapter m.2 NVMe drive can be used.
This option gives the maximum possible performance.

**For the Raspberry Pi 4**, you have two options for storage:

- external USB SSD drive (wide availability)
- m.2 NVMe drive with USB m.2 adapter

You can also use a USB to SATA adapter plus SSD 2.5" drive.

**Note: If you use USB always choose USB 3.0 ports (blue)**

### Recommended SSD Hardware

\*_Sample links result from a quick Google search mainly for the reader's convenience & quick price reference; we invite you to do your own research and find local hardware providers._

#### USB Drive

| Brand   | Storage | Model          | Link\*                                                                                   | Comment                                                              |
| ------- | ------- | -------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Samsung | 2 TB    | T7 2TB USB 3.2 | https://tweakers.net/pricewatch/1560668/samsung-portable-ssd-t7-2tb-grijs/specificaties/ | **Recommended for most users. Compatible with Raspberry Pi 4 and 5** |

**Tip:** Some external disks consume more power than Raspberry Pi can deliver via USB. For Raspberry Pi 5, the max power output of the USB ports is 600mA if you're using a 3A supply, and1600mA if you're using a 5A supply. You can edit `/boot/firmware/config.txt` and add `usb_max_current_enable=1` to disable the current limit. Please read the documentation:

https://www.raspberrypi.com/documentation/computers/raspberry-pi.html

#### NVMe Drive

These drives need adapters.

| Brand/Model                     | Controller                 | Link                                                                                                                                                                                       |
| ------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Micron M.2 2230 2TB**         | Silicon Motion SM2269XT    | [Product page](https://www.micron.com/products/storage/ssd/client-ssd/2400-ssd)<br>[More Info](https://www.techpowerup.com/ssd-specs/micron-2400-2-tb.d810)                                |
| **Sabrent Rocket Q4 2230 2 TB** | Phison PS5021-E21T         | [Product page](https://sabrent.com/products/sb-213q-2tb)<br>[More Info](https://www.techpowerup.com/ssd-specs/sabrent-rocket-q4-2230-2-tb.d1486)                                           |
| **Sabrent Rocket 2280 2TB**     | Phison PS5012-E12S-32      | [Product page](https://sabrent.com/products/sb-rocket-2tb)<br>[More Info](https://www.techpowerup.com/ssd-specs/sabrent-rocket-2-tb.d1821)                                                 |
| **Samsung 980 Pro 2TB**         | Samsung Elpis (S4LV003)    | [Product page](https://www.samsung.com/pl/memory-storage/nvme-ssd/980-pro-2tb-nvme-pcie-gen-4-mz-v8p2t0bw/)<br>[More Info](https://www.techpowerup.com/ssd-specs/samsung-980-pro-2-tb.d52) |
| **Kingston KC3000 2TB**         | Phison PS5018-E18-41       | [Product page](https://www.kingston.com/pl/ssd/kc3000-nvme-m2-solid-state-drive)<br>[More Info](https://www.techpowerup.com/ssd-specs/kingston-kc3000-2-tb.d260)                           |
| **Crucial P5 Plus 2TB**         | Micron<br>DM02A1           | [Product page](https://www.crucial.com/products/ssd/crucial-p5-plus-ssd)<br>[More Info](https://www.techpowerup.com/ssd-specs/crucial-p5-plus-1-tb.d107)                                   |
| **Crucial P3 2TB**              | Phison PS5021-E21T         | [Product page](https://www.crucial.com/ssd/p3/ct2000p3ssd8)<br>[More Info](https://www.techpowerup.com/ssd-specs/crucial-p3-2-tb.d829)                                                     |
| **Kingston NV2 2TB**            | Silicon Motion<br>SM2267XT | [Product page](https://www.kingston.com/pl/ssd/nv2-nvme-pcie-ssd)<br>[More Info](https://www.techpowerup.com/ssd-specs/kingston-nv2-2-tb.d1190)                                            |
| **Teamgroup MP44S 2230 2TB**    | Phison PS5021-E21          | [Product page](https://www.teamgroupinc.com/en/product-detail/ssd/TEAMGROUP/mp44s/mp44s-TM5FF3002T0C101/)<br>[More Info](https://www.techpowerup.com/ssd-specs/teamgroup-mp44s-2-tb.d1724) |

**Note:** Double-sided NVMe M.2 memory modules (with memory chips on both sides of the PCB) may not be fully compatible with every adapter due to physical dimensions, specifically the height of the M.2 slot in the adapter/enclosure.

[Full compatibility list for Ethereum node](https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038)

[Full compatibility list for Pimoroni adapter](https://shop.pimoroni.com/products/nvme-base?variant=41219587178579)

#### NVMe Hat

##### NVMe HAT for Raspberry Pi 5

| Brand                       | Link\*                                                                                              |
| --------------------------- | --------------------------------------------------------------------------------------------------- |
| Pimoroni                    | [NVMe Base for Raspberry Pi 5](https://shop.pimoroni.com/products/nvme-base?variant=41219587178579) |
| Raspberry Pi m.2 Hat        | https://www.raspberrypi.com/products/m2-hat-plus/                                                   |
| Pineboards HatDrive: Bottom | https://pineberrypi.com/products/hatdrive-bottom-2230-2242-2280-for-rpi5                            |
| Pineboards HatDrive: Top    | https://pineboards.io/products/hat-top-2230-2240-for-rpi5                                           |
| Pineboards HatDrive: Nano   | https://pineboards.io/products/hatdrive-nano-nvme-2230-2242-gen-3-for-raspberry-pi-5                |
| Waveshare 26583             | https://www.waveshare.com/pcie-to-m.2-hat-plus.htm                                                  |

We do not recommend the following:

- **KAmodRPi5 PCIe-M.2**

- **Geekworm X1001**

#### USB to NVMe adapters

| Brand   | Link\*                                                                                               |
| ------- | ---------------------------------------------------------------------------------------------------- |
| ZenWire | https://zenwire.eu/pl/p/Adapter-SSD-M2-NVMESATA-kieszen-na-dysk-obudowa-M.2-USB-C-10-GBs-Zenwire/289 |
| RIITOP  | https://www.amazon.nl/dp/B0B1HVGBZ3                                                                  |
| QOLTEC  | https://www.tme.eu/en/details/qoltec-50311/hdd-ssd-accessories/qoltec/50311/                         |

or other similar.

**Note:** Some M.2 disks are not compatible. Please check the availability list on [Pimoroni NVMe Base description](https://shop.pimoroni.com/products/nvme-base?variant=41219587178579).

## SD Card Reader and Writer

You will use this on your PC for flashing the boot card. Since this operation takes time, we recommend a high-speed device such as [Ugreen 2-in-1 USB 3 SD/TF](https://www.ugreen.com/products/ugreen-2-in-1-usb-sd-card-reader?variant=39915662803006)

## MicroSD Card

Flashing a microSD card takes time, but it can be reduced by using a fast device. Additionally, using a fast micro SD card results in a shorter booting time.

You will require at least 32GB capacity.

A few examples:

- [Silicon Power 3D NAND](https://www.tomshardware.com/best-picks/raspberry-pi-microsd-cards#section-best-microsd-card-overall)
- [SanDisk Extreme Pro](https://www.tomshardware.com/best-picks/raspberry-pi-microsd-cards#section-great-speeds-best-for-pi-3)
- [SanDisk Ultra](https://www.westerndigital.com/en-ap/products/memory-cards/sandisk-ultra-uhs-i-microsd-120-mbps?sku=SDSQUA4-064G-GN6MA)
- [SanDisk Max Endurance](https://www.westerndigital.com/en-ap/products/memory-cards/sandisk-max-endurance-uhs-i-microsd?sku=SDSQQVR-064G-GN6IA)
- [Kingston Canvas React](https://www.tomshardware.com/best-picks/raspberry-pi-microsd-cards#section-fastest-booting-raspberry-pi-microsd)
- [Samsung 64 Evo Plus](https://www.samsung.com/pl/memory-storage/memory-card/evo-plus-128gb-microsd-card-2021-mb-mc128ka-eu/)
- [Lexar Professional 1000X](https://www.amazon.com/Lexar-Professional-1000x-UHS-II-LSD64GCRBNA1000/dp/B00PLENZX4)

[**More Information**](https://www.tomshardware.com/best-picks/raspberry-pi-microsd-cards)

## Enclosures

### Enclosures for Raspberry Pi 5

| Brand/Model                  | Link                                                                                                                                                                                                                                                                                                                                |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Argon NEO 5 M.2 NVMe**     | [Product page](https://argon40.com/products/argon-neo-5-m-2-nvme-for-raspberry-pi-5?_pos=1&_psq=Argon+NEO+5+M.2+NVME+PCIE+Case+for+Raspberry+Pi+5&_ss=e&_v=1.0)<br>[Shop](https://botland.store/raspberry-pi-5-cases/24397-argon-neo-5-m2-nvme-pcie-case-for-raspberry-pi-5-with-fan-and-heatsink-aluminum-black-860011360049.html) |
| **Argon NEO 5**(Recommended) | [Product page](https://argon40.com/products/argon-neo-case-for-raspberry-pi-5)<br>[Shop](https://botland.store/raspberry-pi-5-cases/24095-argon-neo-5-bred-case-for-raspberry-pi-5-with-fan-black-and-red-6974297861856.html)                                                                                                       |
| **Argon ONE V3 M.2 NVMe**    | [Product page](https://argon40.com/products/argon-one-v3-m-2-nvme-case?_pos=1&_sid=44da22b52&_ss=r)<br>[Shop](https://botland.store/raspberry-pi-5-cases/24396-argon-one-v3-m2-nvme-pcie-case-for-raspberry-pi-5-with-fan-and-heatsink-aluminum-black-860011360032.html)                                                            |
| **Argon ONE V3**             | [Product page](https://argon40.com/products/argon-one-v3-case-for-raspberry-pi-5?_pos=1&_psq=Argon+ONE+V3+Case+for+Raspberry+Pi+5&_ss=e&_v=1.0)<br>[Shop](https://botland.store/raspberry-pi-5-cases/24395-argon-one-v3-case-for-raspberry-pi-5-with-fan-and-heatsink-aluminum-black-860011360025.html)                             |

### Enclosures for Raspberry Pi 4B

| Brand/Model          | Comment                                                                                                                                                                                              | Link                                                                                                                                                                                                                                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Case justPi**      | [assembly instructions](https://www.youtube.com/watch?v=qEsSK9WIRM4)                                                                                                                                 | [Product page](https://botland.store/raspberry-pi-4b-cases/15106-case-justpi-for-raspberry-pi-4b-aluminum-with-dual-fan-black-lt-4b02-5903351242660.html)<br>[Shop](https://botland.store/raspberry-pi-4b-cases/15106-case-justpi-for-raspberry-pi-4b-aluminum-with-dual-fan-black-lt-4b02-5903351242660.html) |
| **Argon One V2**     | Fan control needs additional configuration as described by the manufacturer [manual](https://cdn.shopify.com/s/files/1/0556/1660/2177/files/AR1_PI4-V2_INSTRUCTION_MANUAL_20200922.pdf?v=1646125923) | [Product page](https://argon40.com/products/argon-one-v2-case-for-raspberry-pi-4)<br>[Shop](https://botland.store/raspberry-pi-4b-cases/15391-raspberry-pi-4-aluminum-case-with-fan-argon-one-v2-grey-5904422301347.html)                                                                                      |
| **Argon One V2 m.2** | Fan control needs additional configuration as described by the manufacturer [manual](https://cdn.shopify.com/s/files/1/0556/1660/2177/files/AR1_NVME_INSTRUCTION_MANUAL_20220531.pdf?v=1659581194)   | [Product page](https://argon40.com/products/argon-one-m-2-case-for-raspberry-pi-4)<br>[Shop](https://botland.store/raspberry-pi-4b-cases/17273-raspberry-pi-4-aluminum-case-with-fan-argon-one-m2-grey-5904422328597.html)                                                                                     |
