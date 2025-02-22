# Web3 Pi: Before you start

## The Web3 Pi Project

The main goal of this project is to provide a lightweight image creation suite that can be used to deploy Ethereum nodes on various devices from the Raspberry Pi family, including:

- [Raspberry Pi 5](https://www.raspberrypi.com/products/raspberry-pi-5/) with 8GB of RAM
- [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) with 8GB of RAM
- [Raspberry Pi Compute Mode (CM 4)](https://www.raspberrypi.com/products/compute-module-4) with 8GB of RAM

## Running an Ethereum Node

If you've never run an Ethereum node, you should start by gaining a good understanding of the concepts involved.  Start by reading the [overview](https://ethereum.org/en/run-a-node/) provided by Ethereum.org. 

If you're planning to make money from your node, you'll need to look into Ethereum staking, where you stake Ether and gain rewards for work done by your node. You can learn about staking in the [Ethereum Staking Guide.](https://ethereum.org/en/staking/)

Make sure you understand the rewards, risks and responsibilities before you start.

## Why Raspberry Pi?

Raspberry Pi devices are a great choice for running an Ethereum Full/Archive/Staking node.

- Affordable: you can run a Full Ethereum EL / Ethereum CL nodes for less than $350
- Efficient: resources are focused on one task: run the node
- Low power consumption: An ARM64 board consumes ~10W
- Small form factor: Great for running at home as it fits in any corner
- Great for running 24/7: Small, affordable and low power consumption

## Why Web3 Pi Images?

- Plug&Play image, just flash & power up
- Based on Ubuntu 24.04 LTS for ARM64
- Automatic configuration (network, user account, etc)
- Automatic USB disk partitioning and formatting
- Manages and configures swap memory in order to avoid memory problems
- Automatically starts Ethereum 1.0 sync (Geth)
- Includes an APT repository for installing and upgrading Ethereum software
- Includes monitoring dashboards based on Grafana / InfluxDB
- Includes UFW firewall

## Your Choices

Before you start, you'll need to make a few choices.

### Dual or Single Node?

An ethereum node has two components: a Consensus Client and an Execution Client. You can read more about what they are in the [Ethereum node documentation](https://ethereum.org/en/developers/docs/nodes-and-clients/).

You can choose to run both nodes on a single Raspberry Pi (Single device mode) or run them on two separate Raspberry Pi machines (Dual device mode).

Single device mode is obviously cheaper to set up, whereas dual device mode is faster and more resilient. Speed and resilience are important when you're staking Eth.

### Solo Staking or Liquid Pool Staking?

If you're staking Eth, you can choose between solo staking, where you put up the entire stake and reap all the rewards, or liquid pool staking, where you share the stake and the rewards with others. [This article](https://atomicwallet.io/academy/articles/should-i-stake-my-ethereum) on the Atomic Wallet website explains the difference.

Not all liquid pools allow you to use your own hardware to run the node. Examples of those who allow this include [Rocketpool](https://rocketpool.net) and [Ether.fi](https://www.ether.fi).  

### Use your own Hardware or Request the Welcome Box?

Web3 Pi offers a welcome box that contains all the hardware you need to run a node. You may, of course, already have a Raspberry Pi that you wish to use to run your node. This is fine, but you need to check the Prerequisites Guide to make sure you have everything you need.

You can also opt to add an LCD display to your Raspberry Pi. You'll find the details in the Prerequisites Guide.

## Next Steps

- Read the [prerequisites](prerequisites.md) guide to make sure you have everything you need.

- If you have obtained a Welcome Box, refer to the [instructions](welcome-box.md) here.

- If you're tech-savvy and you simply want to set up a standard single node, read the [quickstart guide](quickstart.md).

- For more detailed instructions, see the [full setup guide](full-setup/menu.md).

- When you're ready to connect to Ethereum, read the [connection guide](ethereum-connect.md).

- Refer to the 'Managing your Node' [menu](managing/menu.md) to learn how to configure, manage, monitor and upgrade your node.


