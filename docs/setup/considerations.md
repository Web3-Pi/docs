# Maintenance considerations (optional)

This document provides an overview of maintenance considerations that will help you keep your node running smoothly.

## Web3 Pi: LCD Dashboard

![](../img/lcd-dashboard.jpg)

To add an LCD dashboard to your Raspberry Pi, you will need:

- A dashboard cover for mounting;

- A suitable LCD display;

- Software to run the LCD.

## Dashboard Cover

The Web3 Pi LCD Dashboard project offers a suitable cover available for 3D printing.

This is designed for installation of a colorful LCD in the Argon Neo 5 enclosure. We have designed our own 3D model of the enclosure cover with a space for the display. The assembly is simple, using snap-fits, with no tools required. The models are open-source, so anyone can print them on a 3D printer. The source code is also open-source, allowing users to add new functionalities, customize it to their needs, or add support for new displays.

For more information, see [Web 3 Pi Dashboard](https://github.com/Web3-Pi/web3-pi-dashboard) documentation.

## LCD Display

The LCD display should be 1.69" with ST7789V2 Driver. Suitable models are:

- Waveshare 24382 - [See product page](https://www.waveshare.com/1.69inch-lcd-module.htm)

- Seeed Studio 104990802 - [See product page](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)

## Software

The software is included in the Web3 Pi image, and can also be downloaded separately from the [Web 3 Pi Dashboard Project](https://github.com/Web3-Pi/web3-pi-dashboard).

### Backup Power Options for Raspberry Pi

There are two primary solutions for providing backup power to a Raspberry Pi:

1. **Conventional 230/110V UPS**
2. **Dedicated UPS for Raspberry Pi SBC**

#### Conventional 230/110V UPS

##### Advantages:

- Widely available globally in various models and capacities.
- Can power multiple devices, such as routers, switches, or multiple Raspberry Pis.

##### Disadvantages:

- Larger in size and often equipped with fans, which may produce noise.

##### Recommended Model:

- **Legrand UPS KEOR PDU (EAN: 3414971529380)**
  - Silent operation and tested for reliability.
  - [More details](https://www.legrand.pl/pl/e-katalog/produkty/ups-keor-pdu-fr8xfr-mont-rack-310330)

#### Dedicated Raspberry Pi UPS

##### Advantages:

- Compact and silent.
- Designed specifically for Raspberry Pi, often as a HAT or a small external device.
- Equipped with popular 18650 cells for longer battery life, depending on the number of cells.
- Can interface with Raspberry Pi to detect low battery levels and initiate safe shutdowns.

##### Disadvantages:

- Less commonly available but can be ordered online.
- Suitable for a single Raspberry Pi only. You'd still need further backup power for the network.

##### Recommendations:

###### For Raspberry Pi 5:

- **[Geekworm X1200 2-Cell 18650 5.1V 5A UPS HAT](https://geekworm.com/products/x1200)**

  - Designed specifically for Raspberry Pi 5.
  - Features:
    - Supports two 18650 batteries for extended runtime.
    - Output: 5.1V/5A for consistent power delivery.
    - Compact HAT form factor, easy to install.
  - [More information](https://geekworm.com/products/x1200)

- **[Waveshare UPS Module 3S](https://www.waveshare.com/ups-module-3s.htm?sku=25603)**

  - Features:
    - Supports three 18650 batteries.
    - Smart power management with low-battery alert.
    - Compact external unit, easy to integrate.
  - [More information](https://www.waveshare.com/ups-module-3s.htm?sku=25603)

###### For Raspberry Pi 4:

- **[Geekworm Raspberry Pi X728](https://geekworm.com/products/x728)**
  - Features:
    - Supports three 18650 batteries.
    - Integrated power management for safe shutdown.
    - Output: 5V/6A.
    - Compact design that mounts directly onto Raspberry Pi.
  - [More information](https://geekworm.com/products/x728)

#### Installation and Setup

The installation and configuration processes for these UPS devices are detailed on their respective product pages. Refer to the manufacturer's guides for precise instructions.

#### Recommendation

We highly recommend using a power backup solution to enhance the stability of your Ethereum node and reduce potential problems caused by power interruptions.

For Ethereum **Staking**, power backup is critical. A reliable power supply minimizes downtime, ensures data integrity, and helps avoid penalties related to missed attestations or blocks.
