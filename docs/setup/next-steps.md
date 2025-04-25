# Post-Installation: Next Steps

Congratulations! You've successfully assembled your hardware, flashed the Web3 Pi image, and completed the initial automated setup process. Your Ethereum node(s) should now be running and synchronizing with the network.

Here’s what to do next to manage, monitor, and utilize your new node:

## 1. Verify Synchronization Status

The most crucial step after installation is blockchain synchronization. This process can take many hours, sometimes even days, depending on your hardware, network speed, and the chosen Ethereum network (Mainnet takes the longest).

- **Check Grafana:** The primary way to monitor sync progress is [through the Grafana dashboard](../monitoring/grafana.md).

## 2. Access Your Node(s)

You have several ways to interact with the underlying system(s):

- **SSH (Command Line):** For direct terminal access, advanced configuration, and troubleshooting.
  <!-- prettier-ignore -->
    - **Guide:** [Connecting via SSH](../management/ssh.md)
    - **Default Credentials:** Username `ethereum`, Password `ethereum`
    - **Action Required:** You **must** change this password on your first SSH login.

- **Cockpit (Web Interface):** For a graphical overview of system resources, logs, services, and basic management tasks.
  <!-- prettier-ignore -->
    - **Guide:** [Cockpit Dashboard](../management/cockpit/dashboard.md)
    - **Access:** `http://<your-pi-hostname-or-ip>:9090`
    - **Login:** Use the `ethereum` username and the password you set via SSH (or the default `ethereum` if you haven't logged in via SSH yet).

!!! note "Dual-Mode Access"

    If you set up a dual-device node, remember that you have **two separate systems**.
    You need to use the specific hostname for each device when connecting via SSH or Cockpit (e.g., `ssh ethereum@eop-1-exec.local` and `ssh ethereum@eop-1-cons.local`).

## 3. Explore Monitoring Tools

Beyond checking sync status, familiarize yourself with the monitoring tools:

- **[Grafana Dashboards](../monitoring/grafana.md):** Detailed performance graphs for EL/CL clients, system resources.
- **[Cockpit Dashboard](../management/cockpit/dashboard.md):** System-level monitoring (CPU, RAM, Disk, Network).
- **[LCD Display](../monitoring/lcd.md):** (Optional Hardware) At-a-glance status directly on the device.
- **[HTTP API](../monitoring/system-monitor.md):** Programmatic access to system metrics.

## 4. Learn About Management Tools

Web3 Pi includes tools within Cockpit to help manage your node:

- **[Web3 Pi Updater](../management/cockpit/web3-pi-updater.md):** Keep your Ethereum clients and Web3 Pi components up-to-date. Check this periodically.
- **[Web3 Pi Link](../management/cockpit/web3-pi-link.md):** Securely expose services (like your node's RPC endpoint) to the internet without complex firewall rules.
- **[Script Runner](../management/cockpit/web3-pi-script-runner.md):** Execute useful pre-installed utility and diagnostic scripts.

## 5. Utilize Your Node

Now that your node is running, you can start using it:

- **[Connect Your Wallet](../use-cases/wallet.md):** Point wallets like MetaMask to your own node's RPC endpoint (`http://<your-pi-hostname-or-ip>:8545`) for enhanced privacy and reliability. Use Web3 Pi Link for access outside your home network.
- **[Transaction Firewall](../use-cases/transaction-firewall.md):** Add an extra layer of security by manually approving transactions initiated from your wallet.
- **Development:** Use the local RPC endpoint for developing and testing decentralized applications (dApps).
- **Staking (Advanced/Unsupported):** While Web3 Pi provides the foundation, configuring for staking is complex and high-risk. Read the [Staking Considerations](../introduction/staking.md) carefully before proceeding independently.

## 6. Bookmark Support Resources

Keep these pages handy for future reference:

- **[Cheatsheet](../support/cheatsheet.md):** Quick reference for commands, ports, and file locations.
- **[Troubleshooting](../support/troubleshooting.md):** Guidance for common issues (needs expansion!).
- **[Contact](../support/contact.md):** How to reach the Web3 Pi community (Discord, GitHub).

## 7. Consider Advanced Setup (Optional)

Explore options to enhance reliability and performance:

- **[Backup Power (UPS)](../advanced-setup/ups.md):** Protect against power outages and data corruption.
- **[Firewall Configuration (UFW)](../advanced-setup/ufw.md):** Understand and customize network security rules.
- **[Overclocking](../advanced-setup/OC.md):** Potentially increase performance (requires caution and cooling).

---

You've taken a significant step towards supporting the Ethereum network and gaining more control over your web3 experience. Keep exploring the documentation, join the community if you have questions, and enjoy running your own node!
