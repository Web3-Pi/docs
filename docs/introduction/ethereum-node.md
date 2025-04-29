# What is an Ethereum Node?

Before running your own Ethereum node using Web3 Pi or any other method, it's important to understand what a node is and its role in the Ethereum network.

## The Basics

An Ethereum node is simply a piece of software that connects to the Ethereum network. It downloads a copy of the Ethereum blockchain and follows the network's consensus rules to verify transactions and blocks. Running a node contributes to the decentralization, security, and resilience of the Ethereum network.

For a comprehensive overview, start by reading the documentation provided by the Ethereum Foundation:

- [Running an Ethereum Node Overview](https://ethereum.org/en/run-a-node/)

## Node Components: Execution and Consensus Clients

A modern Ethereum node consists of **two main software components** running together:

1. **Execution Client (EL):** Sometimes called the Execution Engine or formerly Eth1 client, this software listens for new transactions broadcasted to the network, executes them in the Ethereum Virtual Machine (EVM), and holds the latest state and database of all Ethereum data. It handles the "computation" part of the network.
2. **Consensus Client (CL):** Also known as the Beacon Node or formerly Eth2 client, this software implements the proof-of-stake consensus algorithm. It enables the network to agree on the state of the blockchain based on the validated data received from the Execution Client. It handles the "agreement" part of the network.

These two clients work in tandem to keep the node synchronized with the head of the Ethereum chain and allow users to interact with the network.

Learn more about clients and nodes:

- [Nodes and Clients Documentation](https://ethereum.org/en/developers/docs/nodes-and-clients/)

## Why Run a Node?

People run Ethereum nodes for various reasons:

* **Support the Network:** Increase the decentralization and security of Ethereum.
* **Trustless & Uncensored Access:** Interact directly with the Ethereum blockchain without relying on third-party services, ensuring privacy and avoiding potential censorship or rate limits.
* **High-Performance RPC:** Gain fast, local, and unlimited access to the Ethereum RPC API for wallets and applications.
* **Development:** Provide a local endpoint for developing and testing decentralized applications (dApps).
* **Foundation for Staking:** Provide the necessary infrastructure (EL/CL clients) that *could* be configured for staking.

It is important to clarify: **running an Ethereum node does not require staking 32 ETH.** Anyone can run a full node using Web3 Pi to verify transactions, interact privately with the blockchain, and contribute to network health without any ETH deposit. Staking, which does require 32 ETH per validator, is a separate activity that involves proposing and attesting to new blocks to earn rewards.

!!! note "What about staking?"

    While running a node is a prerequisite for staking, configuring it specifically for staking duties is a complex process that goes beyond the standard Web3 Pi setup. [You can learn more about staking here.](staking.md)
