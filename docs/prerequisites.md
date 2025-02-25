# Web3 Pi: Prerequisites

## Index

[Internet Requirements](#internet-requirements)

[LAN Requirements](#lan-requirements)

[UPS](#ups)

[Hardware Requirements](#hardware-requirements)

## Internet Requirements

---

To achieve optimal synchronization performance, your internet connection should have a download bandwidth of **at least 160 Mb/s** (20 MB/s). The upload requirement, however, is significantly lower.  

The synchronization process with Ethereum **mainnet** requires downloading approximately 1.2 TB of data.  (1.1 TB download, 25 GB upload as of October 2024). So please be cautious if your internet connection is metered.  

A slower internet connection will still function, though the synchronization process will take longer.  If you're staking Eth, the speed of your connection will directly affect the rewards you're likely to gain.

While upload and download speeds are important, they are only one factor in determining the quality of your connection. Ideally, a stable connection with low latency (ping) is recommended.  

For optimal performance, having a static public IP address is beneficial, but it's not strictly necessary.

[Back to Index](#index)

---

## Lan Requirements

You'll need a gigabit LAN, including a gigabit network switch and  Cat5e, Cat6, Cat6A or Cat8 Ethernet cables.

### Wifi Connection

The default and recommended method for connecting the Raspberry Pi in the Web3 Pi project is via a wired Ethernet connection with automatic DHCP configuration.

However, you can also connect Raspberry Pi 4/5 to the internet using the built-in WiFi module. You'd need to provide the SSID and password for your WiFi network during setup. This is documented in the setup guide.

Although using WiFi is possible, we strongly recommend using a wired connection. Over time, WiFi may lead to issues with connection stability and bandwidth performance.

**Note:** If you're using WiFi, do **not** connect the Ethernet cable.

[Back to Index](#index)

---

## UPS

### Why Use Power Backup for an Ethereum Node?

Running an Ethereum node on Raspberry Pi, especially in projects like **Web3 Pi**, requires consistent and stable power. A power outage or fluctuation can result in corrupted data since the node continuously writes to storage. In addition, even if you live in a region with seemingly stable electricity, brief voltage dips or surges can occur unnoticed, potentially causing instability, freezing, or unexpected reboots of your Raspberry Pi.

For optimal reliability, power backup systems should ideally cover not just the Raspberry Pi but the entire network path, including routers and switches. However, even just powering the Raspberry Pi can significantly enhance stability.

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

[Back to Index](#index)

---

## Hardware Requirements

[The Welcome Box](./welcome-box.md) contains all the hardware you need to run a single node or one of a dual node pair.

Optionally, you can also purchase an LCD screen for the Pi. This gives you a quick way of checking that your node is functional. [More information](./lcd-screen)

If you would prefer to use your own existing Raspberry Pi, please read the [Hardware Checklist](./hardware-checklist) to make sure you have everything you need. If you need to purchase anything further, the [Hardware Recommendations](hardware-recommendations) document will help you choose suitable additions to your existing setup.

[Back to Index](#index)

---