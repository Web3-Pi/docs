# Web3 Pi: Before you start

## The Web3 Pi Project

Web3 Pi is an open-source project simplifying the operation of a personal Ethereum node using Raspberry Pi devices. We provide a ready-to-use, optimized operating system image and automated tools, making node ownership accessible even without deep technical knowledge. Leveraging the Raspberry Pi's efficient ARM architecture, Web3 Pi ensures reliable blockchain access with very low energy consumption (around 8W), allowing for cost-effective, 24/7 operation. Our goal is to lower the barrier to entry for direct participation in the Ethereum network.

Currently supported devices (at least 8GB RAM required):

- [Raspberry Pi 5](https://www.raspberrypi.com/products/raspberry-pi-5/)
- [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/)
- [Raspberry Pi CM4/CM5](https://www.raspberrypi.com/products/compute-module-5/)

## Why Web3 Pi?

Web3 Pi images offer several advantages for setting up your Ethereum node:

* **Plug & Play:** Simply flash the image to your storage and power up the Raspberry Pi.
* **Solid Foundation:** Based on Ubuntu 24.04 LTS for ARM64, providing long-term support.
* **Automated Setup:** Handles initial configuration for network, user accounts, etc.
* **Disk Management:** Automatically partitions and formats attached storage.
* **Auto-Sync:** Automatically starts the Ethereum sync process.
* **Easy Updates:** Includes an APT repository for straightforward installation and upgrades.
* **Monitoring Included:** Comes with pre-configured monitoring dashboards.
* **Security Focused:** Includes the UFW firewall configured for basic security.

## Why Raspberry Pi?

Raspberry Pi devices are an excellent platform for running an Ethereum node (Full or Archive) due to several key factors:

* **Affordable:** Set up a Full Ethereum node (EL/CL) for under $350.
* **Efficient:** As a dedicated device, resources are focused solely on running the node.
* **Low Power Consumption:** Typically consumes around 8W.
* **Small Form Factor:** Its compact size makes it easy to place anywhere in your home.
* **Ideal for 24/7 Operation:** The combination of low cost, low power, and small size makes it perfect for continuous operation.

!!! note "What now?"

    - [Learn what exactly is an Ethereum node and how it works](ethereum-node.md) (next step).
    - [Get started with running your own Ethereum node on a Raspberry Pi](next-steps.md).
