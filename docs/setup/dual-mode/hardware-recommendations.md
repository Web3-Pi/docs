# Web3 Pi: Recommended Hardware

In a dual-device setup, the workload of running an Ethereum node is split between two Raspberry Pi devices. One device runs the **Execution Layer (EL) client** (like Geth), which requires significant storage, while the other runs the **Consensus Layer (CL) client** (like Nimbus or Lighthouse), which has much lower storage needs but still benefits from fast access.

This setup requires **two complete Raspberry Pi systems**, each with its own Pi, power supply, storage, SD card, and cooling/enclosure.

Supported combinations include:

- Two Raspberry Pi 5
- Two Raspberry Pi 4
- One Raspberry Pi 5 and one Raspberry Pi 4
- Any combination including Compute Module 4/5

## Raspberry Pi Models

You will need **two** Raspberry Pi devices. The following models are supported:

- **Raspberry Pi 5:** Recommended for best performance, especially for the EL client.
- **Raspberry Pi 4 Model B:** A viable option, particularly suitable for the CL client or if cost is a major factor. Can also run the EL client, though sync times may be longer than Pi 5.
- **Raspberry Pi Compute Module 4 (CM4):** Requires a compatible carrier board with necessary ports (Ethernet, USB, potentially PCIe/M.2) and a cooling solution.

!!! warning "RAM Requirement"

    Regardless of the model chosen, **both** Raspberry Pi devices **must have at least 8GB of RAM**.

Refer to the hardware checklists for specific model links:

- [Single Device Checklist (useful for Pi links)](../single-mode/hardware-checklist.md)
- [Dual Device Checklist](./hardware-checklist.md)

## SSD Drive Requirements

- **Execution Client (EL) Device:** Needs a **2 TB or larger** fast SSD (NVMe or USB 3.0) to store the growing Ethereum blockchain state data.
- **Consensus Client (CL) Device:** Needs a **500 GB or larger** fast SSD. While 500GB is sufficient currently. NVMe or a reliable USB 3.0 SSD is recommended.

### Connection Options

- **Raspberry Pi 5:**
  <!-- prettier-ignore -->
    - External USB 3.0 SSD drive.
    - M.2 NVMe drive with an NVMe HAT (connects via PCIe).
    - M.2 NVMe drive with a USB 3.0 to M.2 adapter.

- **Raspberry Pi 4 / CM4 (with appropriate carrier board):**
  <!-- prettier-ignore -->
    - External USB 3.0 SSD drive.
    - M.2 NVMe drive with a USB 3.0 to M.2 adapter.
    - (Some CM4 carrier boards may offer direct M.2 slots).

!!! note "Use USB 3.0 Ports"

    If using USB-connected storage, **always use the blue USB 3.0 ports** on the Raspberry Pi for maximum speed.

---

### Recommendations for Execution Client SSD (2TB+)

This device requires a large, fast drive. The recommendations are the same as for the single-device mode.

#### USB Drive (EL)

|                                                                                                 | Brand/Model                 | Comment                                                                                 | Link                                                                                                                  |
| ----------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![Samsung T7](../img/hw/SamsungT7_1.jpg){ width="150" }                                            | **Samsung T7 2TB USB 3.2**  | **Recommended for RPi4 users. Compatible with Raspberry Pi 4 and 5** | [More Info](https://tweakers.net/pricewatch/1560668/samsung-portable-ssd-t7-2tb-grijs/specificaties/)      |


!!! tip

    Some external disks consume more power than Raspberry Pi can deliver via USB. For Raspberry Pi 5, the max power output of the USB ports is 600mA if you're using a 3A supply, and 1600mA if you're using a 5A supply. You can edit `/boot/firmware/config.txt` and add `usb_max_current_enable=1` to disable the current limit. Please read the documentation: [Link](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html)


#### NVMe Drive (EL)

These drives need adapters (HAT or USB). See below.

|                                                                        | Brand/Model                      | Controller                    | Comment                                                                                              | Link                                                                                                                  |
| ---------------------------------------------------------------------- | -------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![Lexar NM790 2TB](../img/hw/Lexar_NM790.jpg){ width="150" }        |  **Lexar NM790<br>2TB m.2 2280** | Maxiotek<br>MAP1602A         | single side design <br>4TB available     | [Product page](https://americas.lexar.com/product/lexar-nm790-m-2-2280-pcie-gen-4x4-nvme-ssd/)<br><br>[More Info](https://www.techpowerup.com/ssd-specs/lexar-nm790-2-tb.d1494)|
| ![Goodram PX700 2TB](../img/hw/Goodram_PX700.jpg){ width="150" }             |  **Goodram PX700<br>2TB m.2 2280**     | Maxiotek<br>MAP1602A      | single side design <br>4TB available    | [Product page](https://www.goodram.com/en/products/goodram-px700-ssd-2/)|
| ![Micron 2400 2TB](../img/hw/Micron2230.jpg){ width="150" }               |  **Micron 2400<br>2TB m.2 2230**         | Silicon Motion<br>SM2269XT    | single side design <br>~4 W (Max)<br>small 2230 form factor<br>low power consumption<br>low heat     | [Product page](https://www.micron.com/products/storage/ssd/client-ssd/2400-ssd)<br><br>[More Info](https://www.techpowerup.com/ssd-specs/micron-2400-2-tb.d810)|
| ![Samsung 980 Pro](../img/hw/Samsung980Pro.jpg){ width="150" }            |  **Samsung 980 Pro<br>2TB m.2 2280**         | Samsung<br>Elpis (S4LV003)    | single side design <br>7.2 W (Max)                                                                   | [Product page](https://www.samsung.com/pl/memory-storage/nvme-ssd/980-pro-2tb-nvme-pcie-gen-4-mz-v8p2t0bw/)<br><br>[More Info](https://www.techpowerup.com/ssd-specs/samsung-980-pro-2-tb.d52)|


!!! note

    Double-sided NVMe m.2 memory modules (with memory chips on both sides of the PCB) may not be fully compatible with every enclosure due to physical dimensions, specifically the height of the m.2 slot in the adapter/enclosure.


#### NVMe Hat (Pi 5) (EL)

| Brand                       | Link                                                                                              |
| --------------------------- | --------------------------------------------------------------------------------------------------- |
| Pimoroni                    | [NVMe Base for Raspberry Pi 5](https://shop.pimoroni.com/products/nvme-base?variant=41219587178579) |
| Raspberry Pi m.2 Hat        | <https://www.raspberrypi.com/products/m2-hat-plus>                                                  |
| Pineboards HatDrive: Bottom | <https://pineberrypi.com/products/hatdrive-bottom-2230-2242-2280-for-rpi5>                          |
| Pineboards HatDrive: Top    | <https://pineboards.io/products/hat-top-2230-2240-for-rpi5>                                         |
| Waveshare 26583             | <https://www.waveshare.com/pcie-to-m.2-hat-plus.htm>                                                |


### Recommendations for Consensus Client SSD (500GB+)

This device requires a smaller, but still fast and reliable drive.

#### USB Drive (CL)

|                                                                                                 | Brand/Model                 | Comment                                                                                 | Link                                                                                                                  |
| ----------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![Samsung T7](../img/hw/SamsungT7_1.jpg){ width="150" }                                            | **Samsung T7 500GB USB 3.2**  | **Recommended for RPi4 users. Compatible with Raspberry Pi 4 and 5** | [More Info](https://tweakers.net/pricewatch/1560668/samsung-portable-ssd-t7-2tb-grijs/specificaties/)      |


#### NVMe Drive (CL)

These drives need adapters (HAT or USB). Choose a reputable brand. 500GB or more are suitable sizes.

|                                                                        | Brand/Model                      | Controller                    | Comment                                                                                              | Link                                                                                                                  |
| ---------------------------------------------------------------------- | -------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![Lexar NM790 2TB](../img/hw/Lexar_NM790.jpg){ width="150" }        |  **Lexar NM790<br>1TB m.2 2280** | Maxiotek<br>MAP1602A         | single side design <br>4TB available     | [Product page](https://americas.lexar.com/product/lexar-nm790-m-2-2280-pcie-gen-4x4-nvme-ssd/)<br><br>[More Info](https://www.techpowerup.com/ssd-specs/lexar-nm790-2-tb.d1494)|
| ![Goodram PX700 2TB](../img/hw/Goodram_PX700.jpg){ width="150" }             |  **Goodram PX700<br>1TB m.2 2280**     | Maxiotek<br>MAP1602A      | single side design <br>4TB available    | [Product page](https://www.goodram.com/en/products/goodram-px700-ssd-2/)|
| ![Micron 2400 2TB](../img/hw/Micron2230.jpg){ width="150" }               |  **Micron 2400<br>1TB m.2 2230**         | Silicon Motion<br>SM2269XT    | single side design <br>~4 W (Max)<br>small 2230 form factor<br>low power consumption<br>low heat     | [Product page](https://www.micron.com/products/storage/ssd/client-ssd/2400-ssd)<br><br>[More Info](https://www.techpowerup.com/ssd-specs/micron-2400-2-tb.d810)|
| ![Samsung 980 Pro](../img/hw/Samsung980Pro.jpg){ width="150" }            |  **Samsung 980 Pro<br>1TB m.2 2280**         | Samsung<br>Elpis (S4LV003)    | single side design <br>7.2 W (Max)                                                                   | [Product page](https://www.samsung.com/pl/memory-storage/nvme-ssd/980-pro-2tb-nvme-pcie-gen-4-mz-v8p2t0bw/)<br><br>[More Info](https://www.techpowerup.com/ssd-specs/samsung-980-pro-2-tb.d52)|


#### NVMe Hat (Pi 5) (CL)

Same HATs as recommended for the EL client can be used here with a smaller NVMe drive. See [NVMe Hat (Pi 5) (EL)](#nvme-hat-pi-5-el) section above.

#### USB to NVMe adapters (CL) {#usb-to-nvme-adapters-cl}

Same adapters as recommended for the EL client can be used here with a smaller NVMe drive. See [USB to NVMe adapters (EL)](#usb-to-nvme-adapters-el) section above.

---

## SD Card Reader and Writer

You only need **one** SD card reader/writer to flash the operating system onto both microSD cards.

## MicroSD Cards

You will need **two** microSD cards, one for each Raspberry Pi.

- Requirement: 32GB minimum capacity. Faster cards can improve boot times.
- Recommendations: (Refer to the list in the [Single Mode Recommendations](../single-mode/hardware-recommendations.md#microsd-card)) - purchase two cards.

## Power Supplies

You will need **two** power supplies, one appropriate for each Raspberry Pi model you are using.

- **Raspberry Pi 5:** Official Raspberry Pi 27W USB-C Power Supply (5.1V/5A) is strongly recommended.
- **Raspberry Pi 4:** Official Raspberry Pi 15.3W USB-C Power Supply (5.1V/3A) is strongly recommended.
- **CM4:** Depends on the carrier board requirements. Check the carrier board documentation.

Using the official power supplies ensures stability, especially when powering connected peripherals like SSDs.

## Enclosures and Active Cooling

**Active cooling is mandatory for both Raspberry Pi devices** in a dual-node setup to prevent thermal throttling and ensure stability. You will need **two** enclosures with active cooling.

- **For Raspberry Pi 5:** Choose one of the recommended cases with integrated fan/heatsink. (Refer to [Single Mode Recommendations](../single-mode/hardware-recommendations.md#enclosures-for-raspberry-pi-5)).
- **For Raspberry Pi 4:** Choose one of the recommended cases with integrated fan/heatsink. (Refer to [Single Mode Recommendations](../single-mode/hardware-recommendations.md#enclosures-for-raspberry-pi-4b)).
- **For CM4:** Ensure your chosen carrier board has a suitable active cooling solution attached or available.

## Optional: LCD Display

You can add an optional LCD display to **either or both** Raspberry Pi devices for at-a-glance monitoring.

- Refer to the [LCD Monitoring Guide](../../monitoring/lcd.md) for hardware and setup details.

## Networking

- You will need **two** Ethernet cables (Cat5e or better).
- Ensure your router or network switch has at least two available Gigabit Ethernet ports.
- Refer to the main [Prerequisites Guide](../prerequisites.md) for internet speed requirements.

---

Choosing the right hardware ensures a stable and performant dual-device node setup. Remember to clearly label your devices during assembly to avoid confusion!
