# Advanced Setup: Firewall Configuration (UFW)

## Understanding the Firewall

Web3 Pi includes and enables **UFW (Uncomplicated Firewall)** by default to provide a baseline level of network security for your node. UFW is a user-friendly frontend for managing the underlying `iptables` firewall rules on Linux systems like Ubuntu.

Its primary purpose is to control incoming and outgoing network traffic, ensuring that only necessary connections are allowed, thus reducing the potential attack surface of your device.

## Default Status and Policy

- **Enabled by Default:** UFW is installed and enabled at the end of the Web3 Pi setup process.
- **Default Incoming Policy:** `DENY` - All incoming connections are blocked unless explicitly allowed by a specific rule.
- **Default Outgoing Policy:** `ALLOW` - All outgoing connections initiated by the Raspberry Pi are permitted.

## Default Allowed Incoming Ports

The Web3 Pi installation script configures UFW to allow incoming traffic on the specific ports required for node operation, management, and monitoring based on your configuration choices during setup. The standard ports opened are:

| Port              | Protocol  | Service                                  | Purpose                                                                          |
| :---------------- | :-------- | :--------------------------------------- | :------------------------------------------------------------------------------- |
| `22`              | TCP       | SSH                                      | Secure remote command-line access                                                |
| `80`              | TCP       | Installation Monitor / Status Page       | [Viewing setup progress and basic status](../monitoring/installation-monitor.md) |
| `3000`            | TCP       | Grafana Dashboard                        | [Viewing node performance and health](../monitoring/grafana.md)                  |
| `5353`            | UDP       | mDNS (Avahi Daemon)                      | Hostname discovery (e.g., `web3pi.local`)                                        |
| `7197`            | TCP       | Basic System Monitor JSON API            | [Programmatic access to monitoring data](../monitoring/system-monitor.md)        |
| `8545`            | TCP       | Execution Client JSON-RPC (Geth)         | Wallet connections                                                               |
| `8546`            | TCP       | Execution Client WebSocket RPC (Geth)    | WebSocket connections for dApps/tools                                            |
| `8551`            | TCP       | Execution Client Engine API (Geth)       | Communication between EL & CL clients                                            |
| `9090`            | TCP       | Cockpit System Dashboard                 | [Web-based system management](../management/cockpit/dashboard.md)                |
| `9000` (default)  | TCP & UDP | Consensus Client P2P (Lighthouse/Nimbus) | Peer discovery and communication                                                 |
| `30303` (default) | TCP & UDP | Execution Client P2P (Geth)              | Peer discovery and communication                                                 |

## Checking Firewall Status and Rules

You can view the current UFW status and the list of active rules by connecting via [SSH](../management/ssh.md) and running the following commands:

```bash
sudo ufw status verbose
```
