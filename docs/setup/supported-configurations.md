Web3 Pi provides a custom image file that contains all the software needed to run a full Ethereum node on Raspberry Pi single-board computers.

- Execution client
- Consensus client
- Monitoring tools

## Available Configurations

The Web3 Pi node can be deployed in either a **[single-device](single-mode/hardware-checklist.md)** or on **[dual-devices](dual-mode/hardware-checklist.md)**.

### Single-Device Mode

Single device mode is the simplest configuration. For optimal performance, it is recommended to use a Raspberry Pi 5.

**[Single Mode - Hardware Checklist](single-mode/hardware-checklist.md)**

### Dual-Devices Mode

Dual-devices mode requires additional configuration, but a single device may start running low on resources for a Raspberry Pi 4. In dual-devices mode, one Raspberry Pi acts as the consensus client and the other as the execution client. The solution maintains performance and stability by splitting tasks across two devices.

The following combinations are supported:

- Two Raspberry Pi 5
- Two Raspberry Pi 4
- One Raspberry Pi 5 and one Raspberry Pi 4
- Any combination including Compute Module 4 (CM4)

**[Dual-Devices - Hardware Checklist](dual-mode/hardware-checklist.md)**
