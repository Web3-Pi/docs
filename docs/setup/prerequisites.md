# Web3 Pi: Prerequisites

## Internet Requirements

---

To achieve optimal synchronization performance, your internet connection should have a download bandwidth of **at least 160 Mb/s** (20 MB/s). The upload requirement, however, is significantly lower.

The synchronization process with Ethereum **mainnet** requires downloading approximately 1.2 TB of data. (1.1 TB download, 25 GB upload as of October 2024). So please be cautious if your internet connection is metered.

A slower internet connection will still function, though the synchronization process will take longer. If you're staking Eth, the speed of your connection will directly affect the rewards you're likely to gain.

While upload and download speeds are important, they are only one factor in determining the quality of your connection. Ideally, a stable connection with low latency (ping) is recommended.

For optimal performance, having a static public IP address is beneficial, but it's not strictly necessary.

---

## Lan Requirements

You'll need a gigabit LAN, including a gigabit network switch and Cat5e, Cat6, Cat6A or Cat8 Ethernet cables. The network should have automatic DHCP configuration.

### Wifi Connection

The default and recommended method for connecting the Raspberry Pi in the Web3 Pi project is via a wired Ethernet connection with automatic DHCP configuration.

However, you can also connect Raspberry Pi 4/5 to the internet using the built-in WiFi module. You'd need to provide the SSID and password for your WiFi network during setup. This is documented in the setup guide.

Although using WiFi is possible, we strongly recommend using a wired connection. Over time, WiFi may lead to issues with connection stability and bandwidth performance.

**Note:** If you're using WiFi, do **not** connect the Ethernet cable.

---

## UPS

### Why Use Power Backup for an Ethereum Node?

Running an Ethereum node on Raspberry Pi, especially in projects like **Web3 Pi**, requires consistent and stable power. A power outage or fluctuation can result in corrupted data since the node continuously writes to storage. In addition, even if you live in a region with seemingly stable electricity, brief voltage dips or surges can occur unnoticed, potentially causing instability, freezing, or unexpected reboots of your Raspberry Pi.

For optimal reliability, power backup systems should ideally cover not just the Raspberry Pi but the entire network path, including routers and switches. However, even just powering the Raspberry Pi can significantly enhance stability.

See [UPS Recommendations](./considerations.md)

---

## Hardware Requirements

[The Welcome Box](../welcome-box/index.md) contains all the hardware you need to run a single node or one of a dual node pair.

If you would prefer to use your own existing Raspberry Pi, please read the [Hardware Checklist](./single-mode/hardware-checklist.md) to make sure you have everything you need. If you need to purchase anything further, the [Hardware Recommendations](./single-mode/hardware-recommendations.md) document will help you choose suitable additions to your existing setup.

Optionally, you can also purchase an LCD screen for the Pi. This gives you a quick way of checking that your node is functional. The LCD screen is included in the Welcome Box. [More information](./considerations.md)

---
