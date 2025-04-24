# Cheatsheet

This cheatsheet provides a quick reference for commonly used commands, ports, credentials, and configurations for your Web3 Pi node.

## Default Credentials

**SSH Access:**

| Username   | Password   |
| :--------- | :--------- |
| `ethereum` | `ethereum` |

_Note: You are required to change this password upon first SSH login._

**Grafana Dashboard:**

| Username | Password |
| :------- | :------- |
| `admin`  | `admin`  |

_Note: You will be prompted to change this password upon first Grafana login. It is highly recommended to do so._

## Common Network Ports

| Port    | Service / Description              | Access Method |
| :------ | :--------------------------------- | :------------ |
| `80`    | Installation Monitor / Status Page | HTTP          |
| `3000`  | Grafana Dashboard                  | HTTP          |
| `9090`  | Cockpit System Dashboard           | HTTPS         |
| `8545`  | Execution Client JSON-RPC (Geth)   | HTTP          |
| `30303` | Execution Client P2P (Geth)        | TCP/UDP       |
| `9000`  | Consensus Client P2P (Lighthouse)  | TCP/UDP       |
| `9000`  | Consensus Client P2P (Nimbus)      | TCP/UDP       |

## How to find your nodes ip address or hostname

- **Hostname:** Use the hostname you chose during image creation (e.g., `web3pi.local`, `eop-1.local`). Check via SSH with `hostname`.
- **IP Address:** Check your router's admin panel or use network scanning tools to find the IP address assigned to your Raspberry Pi.
- **LCD Display:** If installed, the [LCD Dashboard](../monitoring/lcd.md) shows the current IP address and hostname.

## Common Monitoring & Management Commands (via SSH)

Many system management and logging commands require elevated privileges. Use `sudo` before the command as shown below. You will be prompted for the `ethereum` user's password the first time you use `sudo` in a session.

Replace `<service_name>` with the actual service: `w3p_geth`, `w3p_lighthouse-beacon`, or `w3p_nimbus-beacon`.

### Service Management (systemd)

- **Check Status:** See if a service is running and view recent log snippets.
  ```bash
  sudo systemctl status <service_name>
  # Example: Check Geth status
  sudo systemctl status w3p_geth
  ```
- **Start Service:**
  ```bash
  sudo systemctl start <service_name>
  ```
- **Stop Service:**
  ```bash
  sudo systemctl stop <service_name>
  ```
- **Restart Service:** (Stop and then start)
  ```bash
  sudo systemctl restart <service_name>
  ```
- **Enable Service:** (Start automatically on boot - usually pre-configured)
  ```bash
  sudo systemctl enable <service_name>
  ```
- **Disable Service:** (Prevent starting automatically on boot)
  ```bash
  sudo systemctl disable <service_name>
  ```

### Viewing Logs (journald)

- **View Full Logs:** Show all logs for a service (press `q` to exit).
  ```bash
  sudo journalctl -u <service_name>
  # Example: View all Lighthouse logs
  sudo journalctl -u w3p_lighthouse-beacon
  ```
- **Follow Logs (Live):** Watch logs as they are generated (press `Ctrl+C` to exit).
  ```bash
  sudo journalctl -f -u <service_name>
  # Example: Follow Geth logs
  sudo journalctl -f -u w3p_geth
  ```
- **View Last N Lines:** Show only the most recent log entries.
  ```bash
  sudo journalctl -n 50 -u <service_name> # Shows last 50 lines
  ```
- **View Logs Since Time:** Show logs since a specific time (e.g., "1 hour ago", "2025-04-24 10:00:00").
  ```bash
  sudo journalctl --since "1 hour ago" -u <service_name>
  ```

### System Resource Monitoring

- **Interactive Process Viewer:** Shows CPU, Memory usage, tasks.
  ```bash
  htop
  ```
- **Disk Usage (Overall):** Show usage for all mounted filesystems. (No `sudo` needed)
  ```bash
  df -h
  ```
- **Memory Usage:** Show free and used RAM and Swap. (No `sudo` needed)
  ```bash
  free -h
  ```
- **System Uptime & Load:** (No `sudo` needed)
  ```bash
  uptime
  ```

### Node Specific Checks

- **Geth Console (Sync Status):** Attach to the Geth console. (No `sudo` needed)
  ```bash
  geth attach http://localhost:8545
  # Inside the console, type:
  eth.syncing
  # (Returns 'false' when synced, or sync progress object if syncing)
  eth.blockNumber
  # (Shows the latest block number Geth knows)
  exit
  # (To leave the console)
  ```

### System Updates

- **Check for Available Updates:** Refreshes the package list.
  ```bash
  sudo apt update
  ```
- **List Upgradable Packages:** See what packages have updates available. (No `sudo` needed)
  ```bash
  apt list --upgradable
  ```
- **(Use with Caution) Apply Updates:** Upgrades installed packages. Refer to specific Web3 Pi update guides if available.
  ```bash
  sudo apt upgrade
  ```
