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

| Port    | Service / Description                 | Access Method |
| :------ | :------------------------------------ | :------------ |
| `22`    | SSH                                   | SSH           |
| `80`    | Installation Monitor / Status Page    | HTTP          |
| `3000`  | Grafana Dashboard                     | HTTP          |
| `5052`  | Lighthouse HTTP REST API              | HTTP          |
| `5353`  | mDNS (Avahi Daemon)                   | mDNS          |
| `7197`  | Basic System Monitor JSON API         | HTTP          |
| `8008`  | InfluxDB HTTP API                     | HTTP          |
| `8545`  | Execution Client JSON-RPC (Geth)      | HTTP          |
| `8546`  | Execution Client WebSocket RPC (Geth) | HTTP          |
| `8551`  | Execution Client Engine API (Geth)    | HTTP          |
| `9000`  | Consensus Client P2P (Lighthouse)     | TCP/UDP       |
| `9000`  | Consensus Client P2P (Nimbus)         | TCP/UDP       |
| `9090`  | Cockpit System Dashboard              | HTTPS         |
| `30303` | Execution Client P2P (Geth)           | TCP/UDP       |

## How to find your nodes ip address or hostname

- **Hostname:** Use the hostname you chose during image creation (e.g., `web3pi.local`, `eop-1.local`). Check via SSH with `hostname`.
- **IP Address:** Check your router's admin panel or use network scanning tools to find the IP address assigned to your Raspberry Pi.
- **LCD Display:** If installed, the [LCD Dashboard](../monitoring/lcd.md) shows the current IP address and hostname.

## Log files

- **Web3 Pi Logs:** `/var/log/web3pi.log`
- **rc.local logs:** `/root/first-run.flag`

## Internet connectivity

### Bandwidth

To achieve optimal synchronization performance, your internet connection should have a download bandwidth of at least 160 Mb/s (20 MB/s). The upload requirement, however, is significantly lower.
The synchronization process with the Ethereum mainnet requires downloading approximately 1.2 TB of data.
[1.1 TB download, 25 GB upload - October 2024] So please be cautious if your internet connection is metered.
A slower internet connection will still function, though the synchronization process will take longer. While upload and download speeds are important, they are only one factor in determining the quality of your connection. Ideally, a stable connection with low latency (ping) is recommended.
For optimal performance, having a static public IP address is beneficial, but it is not strictly necessary.

### WIFI

The default and recommended method for connecting the Raspberry Pi in the Web3 Pi project is via a wired Ethernet connection with automatic DHCP configuration.
However, you can also connect Raspberry Pi 4/5 to the internet using the built-in WiFi module.
To do so, in Raspberry Pi Imager, you must provide the SSID and password for your WiFi network.

Although using WiFi is possible, we strongly recommend using a wired connection. Over time, WiFi may lead to issues with connection stability and bandwidth performance.

!!! note

    If you are using WIFI, do not connect the Ethernet cable to the Raspberry Pi.

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

## InfluxDB

InfluxDB stores device status measurements and serves as the data source for Grafana.

The Influx database is fed by the `basic-eth2-node-monitor` application, which collects data from Ethereum clients. It also receives input from the `basic-system-monitor` application, which gathers operating system statistics and serves them as JSON over HTTP.

### Clearing the Database

To clear the database, run the following commands:

```bash
influx
USE ethonrpi
DROP SERIES FROM /.*/
exit
```

## Nimbus

- **Service name**: `w3p_nimbus-beacon`
- **Default directory**: `/mnt/storage/.nimbus/data/shared_mainnet_0`
- **Startup script**: `/home/ethereum/clients/nimbus/nimbus.sh`

### Clear saved data

```bash
sudo rm -r /mnt/storage/.nimbus/data/shared_mainnet_0
```

## Geth

- **Service name**: `w3p_geth`
- **Default directory**: `/mnt/storage/.ethereum`
- **Startup script**: `/home/ethereum/clients/geth/geth.sh`

### Clear saved data

```bash
sudo rm -r /mnt/storage/.ethereum
```

## Lighthouse

- **Service name**: `w3p_lighthouse-beacon`
- **Default directory**: `/mnt/storage/.lighthouse`
- **Startup script**: `/home/ethereum/clients/lighthouse/lighthouse.sh`

### Clear saved data

```bash
sudo rm -r /mnt/storage/.lighthouse
```

## JWT Secret

The `jwt.hex` file contains the JWT secret used to enable authenticated communication between the execution client and the consensus client. This file is generated by the installation script.

- **Location:** `/home/ethereum/clients/secrets/jwt.hex`

## Storage

### PCIe Generation

By default, Web3 Pi uses PCIe Gen 2, which is the officially supported version. However, if you have a PCIe Gen 3 capable device, you can enable it by editing the [config.txt](../advanced-setup/config.md) file.

Benefits of PCIe Gen 3:

- **Higher Bandwidth:** PCIe Gen 3 offers double the bandwidth compared to PCIe Gen 2. This means faster data transfer rates, which can be especially beneficial for high-speed storage devices like NVMe SSDs or network cards.
- **Improved Performance**: For applications that are bottlenecked by PCIe bandwidth, enabling Gen 3 can significantly improve performance.

While Raspberry Pi 5 is designed for PCIe Gen 2, upgrading to Gen 3 can unlock more potential in compatible devices.

!!! warning

    Enabling PCIe Gen 3 on a Raspberry Pi 5 can cause instability. Only proceed if you know what you're doing and have a compatible device.

## Scripts

The Web3 Pi image comes with several useful scripts pre-installed. These can be found in the home directory of the ethereum user at /home/ethereum/scripts.

Below is a description of each script and how to execute them:

- `sudo ./scripts/shutdown.sh`
  This script gracefully shuts down the device. It first stops the services, allowing them time to finish their tasks, and then powers off the system.

- `sudo ./scripts/reboot.sh`
  This script gracefully reboots the device. It first stops the services, giving them time to complete their tasks, and then restarts the system.

- `sudo ./scripts/formatMe.sh`
  This script marks the mapped storage as "to be formatted" during the next installation. It’s useful when reinstalling the Web3 Pi image.

- `sudo ./scripts/versions.sh`
  This script checks the versions of the currently installed applications and compares them to the latest available online. It covers applications such as Geth, Nimbus, and Lighthouse.

- `sudo ./scripts/update_geth.sh`
  This script updates the Geth application to the latest available version. It stops the service, installs the new version, and then restarts the service.

- `sudo ./scripts/update_nimbus.sh`
  This script updates the Nimbus application to the latest available version. It stops the service, installs the new version, and then restarts the service.

- `sudo ./scripts/check_install.sh`
  This script checks the installation and configuration of Web3 Pi. It verifies installed packages, active services, disk and swap usage, network connectivity, and other important aspects. The output is formatted and color-coded for better readability.

You can also view and execute scripts from the [Cockpit Web3 Pi Script Runner plugin](../management/cockpit/web3-pi-script-runner.md).

## CCZE

Newer version of the Web3 Pi image include CCZE, which enables automatic colorization of logs from applications such as Geth and Nimbus, significantly improving readability.

An example how to use CCZE:

```bash
sudo journalctl -xfu w3p_geth.service | ccze -A

sudo journalctl -xfu w3p_nimbus-beacon.service | ccze -A

cat /var/log/web3pi.log | ccze
```
