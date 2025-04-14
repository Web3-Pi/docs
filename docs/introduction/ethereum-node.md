# What is an Ethereum Node?

Before running your own Ethereum node using Web3 Pi or any other method, it's important to understand what a node is and its role in the Ethereum network.

## The Basics

An Ethereum node is simply a piece of software that connects to the Ethereum network. It downloads a copy of the Ethereum blockchain and follows the network's consensus rules to verify transactions and blocks. Running a node contributes to the decentralization, security, and resilience of the Ethereum network.

For a comprehensive overview, start by reading the documentation provided by the Ethereum Foundation:

- [Running an Ethereum Node Overview](https://ethereum.org/en/run-a-node/)

## Node Components: Execution and Consensus Clients

A modern Ethereum node consists of two main software components running together:

1.  **Execution Client (EL):** Formerly known as the 'Eth1 client'. This client listens for new transactions broadcasted on the network, executes them in the Ethereum Virtual Machine (EVM), and holds the latest state and database of all current Ethereum data. Examples include Geth, Nethermind, Besu, Erigon. Web3 Pi currently uses Geth by default.
2.  **Consensus Client (CL):** Formerly known as the 'Eth2 client'. This client implements the proof-of-stake consensus algorithm. It enables the node to follow the chain correctly by validating blocks received from peers. If configured for staking, it also handles attesting to or proposing new blocks. Examples include Prysm, Lighthouse, Teku, Nimbus.

These two clients communicate with each other using the Engine API. You need both running to have a fully functional Ethereum node. Web3 Pi helps set up these clients, but specific staking configurations require manual steps.

Learn more about clients and nodes:

- [Nodes and Clients Documentation](https://ethereum.org/en/developers/docs/nodes-and-clients/)

## Why Run a Node?

People run Ethereum nodes for various reasons:

- **Support the Network:** Increase the decentralization and security of Ethereum.
- **Trustless Access:** Interact directly with the Ethereum blockchain without relying on third-party services.
- **Development:** Provide a local endpoint for developing and testing decentralized applications (dApps).
- **Foundation for Staking:** Provide the necessary infrastructure (EL/CL clients) that _could_ be configured for staking (see below).

!!! note "What about staking?"

    While running a node is a prerequisite for staking, configuring it specifically for staking duties is a complex process that goes beyond the standard Web3 Pi setup. [You can learn more about staking here.](staking.md)
