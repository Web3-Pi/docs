# Next Steps

Now that you have a basic understanding of Web3 Pi and Ethereum nodes, here's how to proceed:

## 1. Make Key Decisions

Before you begin the setup process, you need to decide on a few things:

### Single or Dual Device Mode?

An Ethereum node requires both an Execution Client (EL) and a Consensus Client (CL).

- **Single Device:** Run both EL and CL clients on one Raspberry Pi. This is cheaper but shares resources. A **Raspberry Pi 5** with **8GB RAM** is recommended for this configuration.
- **Dual Device:** Run the EL client on one Raspberry Pi and the CL client on a separate Raspberry Pi. This allows you to use two, weaker devices in place of one, more powerful one, at the cost of increased complexity.

If you're unsure, we recommend starting with a single device setup.

## 2. Prepare Your Hardware

Ensure you have all the necessary hardware components (Raspberry Pi, power supply, storage, network cable, etc.).

### Use Your Own Hardware or the Welcome Box?

- [**Welcome Box:**](../welcome-box/index.md) Web3 Pi offers a Welcome Box — an all-in-one solution with pre-selected, compatible hardware to help you get started quickly.
- **Own Hardware:** You can use your existing Raspberry Pi (Model 4, 5, or CM4) and compatible peripherals. Ensure you have everything required by checking the [Prerequisites Guide](../setup/prerequisites.md) and the [Hardware Recommendations](./single-mode/hardware-recommendations.md) document.

### Optional LCD Display?

- You can add an optional LCD display to your setup for at-a-glance monitoring. It's included in the Welcome Box and natively supported by the Web3 Pi system — just plug it in, no installation or configuration needed.  
Details are in the [LCD Monitoring Guide](../monitoring/lcd.md).

## 3. Set Up Your Node

- Follow the **[Full Setup Guide](../setup/supported-configurations.md)** relevant to your configuration for detailed, step-by-step instructions assembling the hardware and booting your Raspberry Pi for the first time.

## 4. Manage Your Node

Web3 Pi includes a set of tools to help you manage and monitor your node:

- The **[Grafana Dashboard](../monitoring/grafana.md)** provides real-time monitoring of your node's performance.
- The **[Cockpit Dashboard](../management/cockpit/dashboard.md)** provides an overview of your node's status and allows you to manage basic settings.
- The **[Web3 Pi Updater](../management/cockpit/web3-pi-updater.md)** allows you to upgrade your node's ethereum dependencies and other software.
- The **[Web3 Pi Link](../management/cockpit/web3-pi-link.md)** allows you to access your node from anywhere in the world.

!!! warning

    Remember: Staking configuration is currently considered an advanced, unsupported procedure. Proceed with extreme caution if exploring this path independently.
