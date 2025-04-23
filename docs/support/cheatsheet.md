# Cheatsheet

This cheatsheet provides a quick reference for commonly used commands, ports and configurations.

## SSH Default Credentials

| Username   | Password   |
| ---------- | ---------- |
| `ethereum` | `ethereum` |

You will be required to change the password upon first login.

## Grafana Default Credentials

| Username | Password |
| -------- | -------- |
| `admin`  | `admin`  |

It is **highly recommended** to change the password after the first login.

## Common Ports

| Port   | Description          |
| ------ | -------------------- |
| `9090` | Cockpit Dashboard    |
| `3000` | Grafana Dashboard    |
| `8545` | JSON RPC Client      |
| `80`   | Installation Monitor |

## How to find your node's IP address or hostname

Your Web3 Pi's hostname is the same as the one you chose during the image creation process (e.g., `eop-1.local`). If you're connected via SSH, you can check the hostname by running the following command:

```bash
hostname
```

If you're connected via the Cockpit Dashboard, you can find the hostname in the "Overview" section of the dashboard.

Check your router's admin panel or use network scanning tools to find the IP address assigned to your Raspberry Pi. Note that your router may assign a different IP address to your Pi each time it reboots.

If you have the [LCD Dashboard](../monitoring/lcd.md) installed, it will show the IP address and hostname directly on the display.
