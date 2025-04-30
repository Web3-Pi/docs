# Solo Staking on Web3 Pi

## 1. Introduction

### Overview

Solo staking on the Ethereum network involves active participation in the Proof-of-Stake consensus mechanism. By running your own validator node, you help secure the network by proposing and attesting to new blocks. In return for this service, you receive rewards in ETH. Choosing a dedicated, energy-efficient device like the Web3 Pi for solo staking supports network decentralization, provides full control over your keys and operations, and minimizes energy consumption compared to traditional computers.

### Purpose of this Guide

This guide provides detailed, manual, step-by-step instructions on how to configure solo staking on the Web3 Pi device. It assumes that the basic setup of the Web3 Pi has already been completed and the device is accessible on your local network. We will focus on configuration via an SSH connection, using the pre-installed clients: Geth as the Execution Layer (EL) client and Nimbus as the Consensus Layer (CL) client.

### Client Selection

The Web3 Pi comes with pre-installed Ethereum clients: Geth, Nimbus, and Lighthouse. This guide focuses on the preferred combination of Geth + Nimbus.

## 2. Important: Warnings, Recommendations, and Prerequisites

### Warning (Disclaimer)

**Running an Ethereum validator involves significant financial risk and technical responsibility. By following this guide, you acknowledge that you are doing so entirely at your own risk.**

Potential risks include, but are not limited to:

- **Slashing:** Loss of part or all of your deposited ETH due to incorrect validator configuration or actions contrary to the network protocol (e.g., double signing blocks/attestations).
- **Inactivity Penalties:** Gradual loss of deposited ETH if your validator is offline or fails to perform its duties (e.g., attestations) on time.
- **Hardware Failure:** Potential downtime or data loss in case of Raspberry Pi, hard drive/SSD, or SD card failure.
- **Connectivity Issues:** Interruptions in Internet access can lead to inactivity penalties.
- **Software Bugs:** Issues in EL or CL clients can cause unexpected behavior, downtime, or penalties.
- **Security Breaches:** Compromise of the validator machine could lead to loss of funds (if withdrawal keys are compromised in the future) or slashing (if an attacker gains control of the validation process).

The Web3 Pi project nor the authors of this guide bear any responsibility for any losses incurred as a result of using these instructions or running a validator.

### Recommendation: Uninterruptible Power Supply (UPS)

**We strongly recommend connecting your Web3 Pi device and essential network equipment (such as your router/modem) to an uninterruptible power supply (UPS).**

A UPS protects against voltage fluctuations and short power outages, which are common causes of node downtime, potential data corruption on the disk, and can lead to inactivity penalties for your validator (in Solo Staking).

### Prerequisites

Before starting the configuration, ensure you meet the following requirements:

- **32 ETH:** You must have access to exactly 32 ETH for each validator you intend to run. These funds will be locked as your deposit (stake). This is a requirement of the Ethereum protocol.
- **Configured Web3 Pi:** A fully assembled and operational Web3 Pi device, connected to your local network, with the Web3 Pi operating system and Ethereum clients installed. We assume the basic device configuration has already been completed according to the main Web3 Pi documentation.
- **SSH Access:** You need an SSH client installed on your computer (e.g., Terminal on macOS/Linux, PuTTY or Windows Terminal on Windows) and the ability to connect to your Web3 Pi via SSH using its IP address and the `ethereum` user credentials.

## 3. Network Selection

Before you begin synchronization, choose which network you want to sync with. Edit the `config.txt` file:

```bash
sudo nano /boot/firmware/config.txt
```

Find the `eth_network` key and set it to your preferred network (`mainnet`, `holesky`, or `hoodi`). Save the changes (Ctrl+X, then Y, then Enter). Restart the Pi to load the new configuration:

```bash
sudo reboot
```

!!! warning

    If you previously started synchronization with a different network, remove the old downloaded data with the command: `sudo rm -r /mnt/storage/.ethereum`

## 4. Configure the Execution Layer Client (Geth)

The script to run the Geth client is located in the directory:
`/home/ethereum/clients/geth/geth.sh`. Staking does not require any changes to the Geth configuration.

A full list and description of all available Geth command-line options can be found in the official Geth documentation: <https://geth.ethereum.org/docs/interface/command-line-options>

## 5. Configure the Consensus Layer Client (Nimbus)

The script to run the Nimbus client is located in the directory:
`/home/ethereum/clients/nimbus/nimbus.sh`. Properly configured staking requires setting the address where rewards for newly proposed blocks will be sent.

Open the script in a text editor:

```bash
nano /home/ethereum/clients/nimbus/nimbus.sh
```

Find the place where the command is executed (towards the end of the file). Look for the line that starts with `nimbus_beacon_node --non-interactive --tcp-port...`

Add your address as a new argument at the end of the command: ` --suggested-fee-recipient='0xYOUR_ETHEREUM_ADDRESS'`

Replace `0xYOUR_ETHEREUM_ADDRESS` with your actual Ethereum address.

### Saving and Closing the Editor

Save the changes and close the editor (Ctrl+X, then Y, then Enter).

### Fee Recipient Address

Ensure the address provided in `--suggested-fee-recipient` is secure and you have access to it.

More details about Nimbus configuration options can be found in the official Nimbus documentation (Nimbus Book): <https://nimbus.guide/options.html>

## 6. Generate Validator Keys using Ethereum Launchpad

### Official Tool

Validator keys **must** be generated using the official Staking Launchpad website.

### Launchpad Link

Go to the official Staking Launchpad site for the Mainnet:
<https://launchpad.ethereum.org/>

### Process Overview

1.  **Secure Computer:** Perform the key generation process on a secure, trusted computer (preferably offline).
2.  **Launchpad Instructions:** Follow the steps presented on the Launchpad website carefully.
3.  **Number of Validators:** Choose the number of validators you want to run (each requires 32 ETH).
4.  **Client Selection:** Select Geth and Nimbus.
5.  **Generation Method:** Use the command-line tool `staking-deposit-cli` (recommended) or generate keys in the browser. Download `staking-deposit-cli` from: <https://github.com/ethereum/staking-deposit-cli/releases/>

### Critical Security Steps

During key generation, the following will be created:

- **Mnemonic Phrase (Seed Phrase):** This is the master key to your ETH.
  <!-- prettier-ignore -->
    - Write it down VERY carefully on paper or metal.
    - Verify the backup.
    - Store it in multiple, extremely secure, offline locations.
    - **Never store it digitally or on an online device.**
    - **Losing the phrase = permanent loss of funds.**

- **Keystore Password:** Set a very strong, unique password to encrypt the `keystore-*.json` file(s). Store this password securely (e.g., in a password manager).

- **Generated Files:**
  <!-- prettier-ignore -->
    - `deposit_data-*.json`: The public file needed to make the deposit via the Launchpad.
    - `keystore-*.json`: The file(s) containing your encrypted validator private key(s). Essential for importing onto the Web3 Pi.

## 7. Step 4: Import Validator Keys into Nimbus

### Secure Transfer of Keystore Files

Create a new directory `validator_keys` on your Pi and transfer the keystore files from the machine where they were generated to your Pi:

```bash
ssh ethereum@<pi_address> mkdir validator_keys
scp path/to/keystore*.json ethereum@<pi_address>:validator_keys/
```

Replace `<pi_address>` with your Web3 Pi's IP address and `path/to/keystore*.json` with the actual path to your generated keystore file(s). You will be prompted for the `ethereum` user's password.

### Key Import Command

Connect to your Web3 Pi via SSH again.

Import the uploaded keys using Nimbus:

```bash
sudo nimbus_beacon_node deposits import --data-dir=/mnt/storage/.nimbus/data/shared_<CHAIN>_0/
```

Replace `<CHAIN>` with the network you are running the validator on (e.g., for `hoodi`, the full path is `/mnt/storage/.nimbus/data/shared_hoodi_0/`).

You will be prompted to enter the **keystore password** you created during key generation.

### Verification

After a successful import, the encrypted keys will be located in:
`/mnt/storage/.nimbus/data/shared_<CHAIN>_0/validators`. You can verify that the keys were imported correctly with the command:

```bash
sudo ls /mnt/storage/.nimbus/data/shared_<CHAIN>_0/validators
```

Again, replace `<CHAIN>` with your chosen network. You should see a new directory (or directories) in the `validators` folder named after the public key(s) of your validator(s).

### Remove Keystore Files from Home Directory

After a successful import, remove the original keystore files from the home directory:

```bash
rm -rf ~/validator_keys
```

!!! warning

    Remember to keep your secure **offline** backup of these files and the password safe!

## 8. Start Services and Verify Operation

### Restart Services

Restart Nimbus to load the new configuration (including the imported keys and fee recipient):

```bash
sudo systemctl restart w3p_nimbus-beacon
```

### Check Service Status

Check the status of the Nimbus service:

```bash
sudo systemctl status w3p_nimbus-beacon
```

Look for `Active: active (running)` and check the latest log entries for any errors. Press `q` to exit the status view.

### Monitor Logs

Tail the logs live using `journalctl`:

```bash
sudo journalctl -fu w3p_nimbus-beacon
```

Press `Ctrl+C` to stop monitoring.

### What to Look For:

Look for log lines containing `Loading validators` and `Local validator attached`. This indicates that the validator key(s) have been loaded correctly and Nimbus is ready to perform validation duties once synced and activated.

## 9. Monitor Synchronization and Make the Deposit

### Client Synchronization

Geth and Nimbus must be fully synchronized with the network. **This can take anywhere from several hours to several days.**

Use the Grafana dashboard available at `http://<pi_address>:3000` to monitor the synchronization progress.

### CRITICAL: Timing the Deposit

!!! danger "CRITICAL DEPOSIT TIMING"

    **DO NOT MAKE THE 32 ETH DEPOSIT UNTIL ALL OF THE FOLLOWING CONDITIONS ARE MET:**

    1.  Geth is fully synchronized.
    2.  Nimbus is fully synchronized.
    3.  Both services (`w3p_geth`, `w3p_nimbus-beacon`) have been running stably for several hours.
    4.  Nimbus logs show that your validator keys are recognized (e.g., `Local validator attached`).

    **Making the deposit before the node is fully synced and ready will result in inactivity penalties.**

### Making the Deposit

Once your node is fully synced and ready:

1.  Return to the Staking Launchpad: <https://launchpad.ethereum.org/>
2.  Follow the instructions carefully.
3.  Upload your `deposit_data-*.json` file when prompted.
4.  Connect the wallet containing the 32 ETH (+ transaction fee) for the validator.
5.  Confirm the transaction after careful review.

### Validator Activation

After the deposit is confirmed on the network, your validator enters an activation queue (the waiting time varies). Monitor its status on a Beacon Chain explorer (e.g., <https://beaconcha.in/>). Once activated, your validator will begin performing duties and earning rewards.

## 10. Ongoing Operational Best Practices

Maintaining a validator requires ongoing attention.

### Monitoring

- **Validator Status:** Regularly check your validator's performance on <https://beaconcha.in/> (effectiveness, attestations, block proposals). Consider setting up alerts.
- **Node Status:** Periodically check the status of the services (`sudo systemctl status w3p_geth w3p_nimbus-beacon`) and logs (`sudo journalctl -fu w3p_geth`, `sudo journalctl -fu w3p_nimbus-beacon`) on the Web3 Pi.
- **System Resources:** Monitor CPU, RAM, disk usage, and network traffic (`htop`, `df -h`, `armbianmonitor -m`).

### Updates

- **Client Software (Geth/Nimbus):** Keep your clients up to date. Follow official announcements for new releases. Update using standard system commands: `sudo apt update && sudo apt upgrade`.
- **Operating System:** Regularly update the underlying system: `sudo apt update && sudo apt upgrade`.

### Backups

- **Mnemonic Phrase:** **MOST IMPORTANT.** Keep it securely stored offline.
- **Keystore Files and Password:** A secure offline backup will speed up recovery if needed.
- **(Optional):** Backup configuration files (e.g., `/etc/systemd/system/w3p_*.service.d/override.conf`, UFW firewall configuration if customized).

Adhering to these practices will help ensure the stable and secure operation of your validator.
