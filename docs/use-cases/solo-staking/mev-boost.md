# MEV-Boost on Web3 Pi

## What is MEV-Boost?

**MEV-Boost** is an open-source middleware that allows Ethereum validators to receive blocks from a network of third-party block builders, rather than building blocks themselves. This enables validators to participate in **Proposer-Builder Separation (PBS)**, maximizing potential rewards by capturing **Maximal Extractable Value (MEV)** from block builders in a decentralized and permissionless way.

MEV-Boost is optional, but using it can increase your validator rewards by allowing you to select blocks that contain the most profitable transactions. Read more about the benefits of using MEV-Boost in the article [Why Run MEV-Boost?](https://writings.flashbots.net/why-run-mevboost).

## How MEV-Boost Works

- **Block builders** construct blocks containing transactions and MEV opportunities.
- **Relays** act as trusted intermediaries, forwarding blocks from builders to validators.
- **MEV-Boost** runs alongside your consensus client (Nimbus) and requests blocks from relays.
- Your validator proposes the most profitable block received via MEV-Boost.

## Prerequisites

- A fully synchronized Web3 Pi running **Geth** (Execution Layer) and **Nimbus** (Consensus Layer).
- Your validator is already set up and operational.

## Installing and Configuring MEV-Boost

This guide will walk you through the steps to install and configure MEV-Boost on your Web3 Pi device, allowing your Nimbus validator to utilize MEV-Boost for enhanced block rewards. Make sure to familiarize yourself with the [official MEV-Boost documentation](https://github.com/flashbots/mev-boost). It is also highly recommended to read the [official MEV-Boost installation guide](https://github.com/eth-educators/ethstaker-guides/blob/main/docs/prepare-for-the-merge.md#installing-mev-boost) before proceeding, as it provides additional context and troubleshooting tips.

### 1. Setup permissions

It is recommended to run MEV-Boost with a dedicated user for security reasons. Create a user named `mevboost`:

```bash
sudo useradd --no-create-home --shell /bin/false mevboost
```

### 2. Install MEV-Boost

MEV-Boost can be downloaded from the [official GitHub repository](https://github.com/flashbots/mev-boost/releases). As of May 2025, the latest version is `1.9`. Adjust the command below if a newer version is available. Remember to pick the `arm64` architecture.

```bash
cd ~
wget https://github.com/flashbots/mev-boost/releases/download/v1.9/mev-boost_1.9_linux_arm64.tar.gz
tar -xvf mev-boost_1.9_linux_arm64.tar.gz
sudo cp mev-boost /usr/local/bin/
rm mev-boost LICENSE README.md mev-boost_1.9_linux_arm64.tar.gz
sudo chown mevboost:mevboost /usr/local/bin/mev-boost
```

### 3. Choose Relays

MEV-Boost relies on trusted relays that act as intermediaries between block builders and validators. You can connect to multiple relays to ensure redundancy and maximize your chances of receiving profitable blocks. You should do your own research to choose the relays that you trust. As a starting point, you can use the [list of public relays provided by EthStaker](https://ethstaker.org/mev-relay-list).

### 4. Create a Systemd Service

Create a systemd service file to launch MEV-Boost automatically on boot:

```bash
sudo nano /etc/systemd/system/mev-boost.service
```

Add the following content to the file:

```ini
[Unit]
Description=mev-boost
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=mevboost
Group=mevboost
Restart=always
RestartSec=5
ExecStart=mev-boost \
    -mainnet \
    -min-bid 0.05 \
    -relay-check \
    -relays https://relay1,https://relay2

[Install]
WantedBy=multi-user.target
```

Replace `https://relay1,https://relay2` with the actual relay URLs you want to connect to. You can specify multiple relays separated by commas.

Replace the `-mainnet` flag with `-holesky` or `-hoodi` if you are using a testnet.

The `-min-bid` option sets the minimum reward amount that your validator will accept from the relays. Outsourcing **all** block building to MEV-Boost provides very little benefit, but it can lead to decreased censorship resilience of the Ethereum network. It is recommended to build low-MEV blocks locally and use MEV-Boost for high-MEV blocks. You can read more about the tradeoff between opportunity-cost and network resilience in the article [The Cost of Resilience](https://writings.flashbots.net/the-cost-of-resilience). `0.05` ETH is a reasonable default value, but you can adjust it based on your preferences.

### 5. Run the MEV-Boost Service

Reload the systemd configuration and start the MEV-Boost service:

```bash
sudo systemctl daemon-reload
sudo systemctl start mev-boost
```

Check the status of the service to ensure it is running correctly:

```bash
sudo systemctl status mev-boost
```

If everything is set up correctly, you should see the service running without errors. Enable the service to start on boot:

```bash
sudo systemctl enable mev-boost
```

### 6. Configure Nimbus to Use MEV-Boost

Edit your Nimbus service configuration to add the MEV-Boost endpoint:

1. Open your Nimbus launch script (e.g., `/home/ethereum/clients/nimbus/nimbus.sh`).
2. Add the following argument to the `nimbus_beacon_node` command:
   ```
   --payload-builder=true --payload-builder-url=http://127.0.0.1:18550
   ```
   Example:
   ```bash
   nimbus_beacon_node ...existing options...  --payload-builder=true --payload-builder-url=http://127.0.0.1:18550
   ```
3. Save and exit the editor.
4. Restart the Nimbus service:
   ```bash
   sudo systemctl restart w3p_nimbus-beacon
   ```

You can learn more about configuring Nimbus to use MEV-Boost in the [official Nimbus documentation](https://nimbus.guide/external-block-builder.html).

### 7. Verify Nimbus is Using MEV-Boost

To verify that Nimbus is successfully using MEV-Boost, check the logs for messages indicating that it is receiving blocks from MEV-Boost:

```bash
sudo journalctl -u w3p_nimbus-beacon -f
```

You should see log entries indicating that Nimbus is using an external payload builder:

```
Using external payload builder payloadBuilderUrl=http://127.0.0.1:18550
```

## Security and Privacy Considerations

- Only use reputable relays to avoid censorship or malicious blocks.
- MEV-Boost does not require your validator keys; it only facilitates block selection.
- Keep MEV-Boost and your clients updated for security and compatibility.
- Keep in mind that MEV-Boost requires you to trust the relays and their participants. If your validator signs a faulty block, it may be penalized by the network. This could result in slashing, where a portion of your staked ETH is forfeited.
