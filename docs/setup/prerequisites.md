# Web3 Pi: Prerequisites

## Internet Requirements

* **Speed:**  A download speed of at least **160 Mb/s** (20 MB/s) is required, with 240+ Mb/s (30+ MB/s) recommended for optimal synchronization performance (allowing sync completion in under 24 hours on a Raspberry Pi 5). Slower connections will still work but will result in significantly longer synchronization times. Upload speed requirements are much lower.
* **Stability:** A stable, low-latency (ping) connection is important for reliable node operation.
* **Data:** Initial synchronization requires downloading approximately **1.4 TB** <small>(May 2025)</small> of data from the Ethereum network. An **unmetered internet connection** is essential to avoid unexpected charges. Do not use connections with data caps.

---

## Lan Requirements

You'll need a **gigabit LAN**, including a gigabit network switch and Ethernet cables rated Cat5e or higher. The network must support automatic **DHCP** configuration and have internet access.

## Wifi Connection

The default and recommended method for connecting the Raspberry Pi in the Web3 Pi project is via a **wired Ethernet** connection with automatic DHCP configuration.

However, you can also connect Raspberry Pi 4/5 to the internet using the built-in WiFi module. You'd need to provide the SSID and password for your WiFi network during setup. This is documented in the setup guide.

Although using WiFi is possible, we strongly recommend using a **wired connection**. Over time, WiFi may lead to issues with connection stability and bandwidth performance.

**Note:** If you're using WiFi, do **not** connect the Ethernet cable.

---

## Uninterruptible Power Supply (UPS)

We strongly recommend connecting your Web3 Pi device and essential networking equipment (such as a router/modem/switch) to an uninterruptible power supply (UPS).
A UPS protects against voltage fluctuations and short power outages, which are common causes of node downtime, potential disk data corruption, and may lead to penalties for validator inactivity (in Solo Staking setups).

See [UPS Recommendations](../advanced-setup/ups.md)

---

## Hardware Requirements

**The Easiest Start: The Web3 Pi WelcomeBox**  
For those who prefer a guaranteed-compatible, all-in-one solution, the [Web3 Pi WelcomeBox](../welcome-box/index.md) is the recommended starting point.  This kit contains all the hardware you need to run a single node.

If you would prefer to use your own existing Raspberry Pi, please read the [Hardware Checklist](./single-mode/hardware-checklist.md) to make sure you have everything you need. If you need to purchase anything further, the [Hardware Recommendations](./single-mode/hardware-recommendations.md) document will help you choose suitable additions to your existing setup.

Optionally, you can also purchase an [LCD screen](https://www.waveshare.com/1.69inch-lcd-module.htm) for the Pi. This gives you a quick way of checking that your node is functional. The LCD screen is included in the Welcome Box.

---
