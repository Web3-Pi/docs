# Web3 Pi: Before you start

## The Web3 Pi Project

The Web3 Pi project provides a lightweight image creation suite designed to simplify deploying Ethereum nodes on specific Raspberry Pi devices. Our goal is to make running your own node accessible and efficient.

Currently supported devices (at least 8GB RAM required):

- [Raspberry Pi 5](https://www.raspberrypi.com/products/raspberry-pi-5/)
- [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/)
- [Raspberry Pi Compute Module 4 (CM4)](https://www.raspberrypi.com/products/compute-module-4/)

## Why Web3 Pi?

Web3 Pi images offer several advantages for setting up your Ethereum node:

- **Plug & Play:** Simply flash the image to your storage and power up the Raspberry Pi.
- **Solid Foundation:** Based on Ubuntu 24.04 LTS for ARM64, providing long-term support.
- **Automated Setup:** Handles initial configuration for network, user accounts, etc.
- **Disk Management:** Automatically partitions and formats attached USB storage for node data.
- **Auto-Sync:** Automatically starts the Ethereum Execution Layer sync process (using Geth).
- **Easy Updates:** Includes an APT repository for straightforward installation and upgrades of Ethereum software components.
- **Monitoring Included:** Comes with pre-configured monitoring dashboards using Grafana and InfluxDB.
- **Security Focused:** Includes the UFW firewall configured for basic security.

## Why Raspberry Pi?

Raspberry Pi devices are an excellent platform for running an Ethereum node (Full or Archive) due to several key factors:

- **Affordable:** You can set up the hardware for a Full Ethereum node (EL/CL) for under $350.
- **Efficient:** As a dedicated device, resources are focused solely on running the node.
- **Low Power Consumption:** An ARM64 board typically consumes around 10W, making it cost-effective to run continuously.
- **Small Form Factor:** Its compact size makes it easy to place anywhere in your home.
- **Ideal for 24/7 Operation:** The combination of low cost, low power, and small size makes it perfect for continuous operation.

!!! note "What's Next?"

    - [Learn what exactly is an Ethereum node and how it works](ethereum-node.md).
    - [Get started with running your own Ethereum node on a Raspberry Pi](next-steps.md).
