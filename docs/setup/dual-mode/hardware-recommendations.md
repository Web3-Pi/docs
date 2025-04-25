# Web3 Pi: Recommended Hardware

In a dual-device setup, the workload of running an Ethereum node is split between two Raspberry Pi devices. One device runs the **Execution Layer (EL) client** (like Geth), which requires significant storage, while the other runs the **Consensus Layer (CL) client** (like Nimbus or Lighthouse), which has much lower storage needs but still benefits from fast access.

This setup requires **two complete Raspberry Pi systems**, each with its own Pi, power supply, storage, SD card, and cooling/enclosure.

Supported combinations include:

- Two Raspberry Pi 5
- Two Raspberry Pi 4
- One Raspberry Pi 5 and one Raspberry Pi 4
- Any combination including Compute Module 4 (CM4)

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
- **Consensus Client (CL) Device:** Needs a **256 GB or larger** fast SSD. While 256GB is sufficient currently, a 512GB drive offers more headroom for future growth and potentially better longevity/performance. NVMe or a reliable USB 3.0 SSD is recommended.

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

\*_Sample links result from a quick Google search mainly for the reader's convenience & quick price reference; we invite you to do your own research and find local hardware providers._

#### USB Drive (EL)

| Brand   | Storage | Model          | Link\*                                                                                     | Comment                                                              |
| ------- | ------- | -------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| Samsung | 2 TB    | T7 2TB USB 3.2 | <https://tweakers.net/pricewatch/1560668/samsung-portable-ssd-t7-2tb-grijs/specificaties/> | **Recommended for most users. Compatible with Raspberry Pi 4 and 5** |

**Tip:** Some external disks consume more power than Raspberry Pi can deliver via USB. For Raspberry Pi 5, the max power output of the USB ports is 600mA if you're using a 3A supply, and 1600mA if you're using a 5A supply. You can edit `/boot/firmware/config.txt` and add `usb_max_current_enable=1` to disable the current limit. Please read the documentation:

<https://www.raspberrypi.com/documentation/computers/raspberry-pi.html>

#### NVMe Drive (EL)

These drives need adapters (HAT or USB). See below.

| Brand/Model                     | Controller                 | Link                                                                                                                                                                                       |
| ------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Micron M.2 2230 2TB**         | Silicon Motion SM2269XT    | [Product page](https://www.micron.com/products/storage/ssd/client-ssd/2400-ssd)<br>[More Info](https://www.techpowerup.com/ssd-specs/micron-2400-2-tb.d810)                                |
| **Sabrent Rocket Q4 2230 2 TB** | Phison PS5021-E21T         | [Product page](https://sabrent.com/products/sb-213q-2tb)<br>[More Info](https://www.techpowerup.com/ssd-specs/sabrent-rocket-q4-2230-2-tb.d1486)                                           |
| **Sabrent Rocket 2280 2TB**     | Phison PS5012-E12S-32      | [Product page](https://sabrent.com/products/sb-rocket-2tb)<br>[More Info](https://www.techpowerup.com/ssd-specs/sabrent-rocket-2-tb.d1821)                                                 |
| **Samsung 980 Pro 2TB**         | Samsung Elpis (S4LV003)    | [Product page](https://www.samsung.com/pl/memory-storage/nvme-ssd/980-pro-2tb-nvme-pcie-gen-4-mz-v8p2t0bw/)<br>[More Info](https://www.techpowerup.com/ssd-specs/samsung-980-pro-2-tb.d52) |
| **Kingston KC3000 2TB**         | Phison PS5018-E18-41       | [Product page](https://www.kingston.com/pl/ssd/kc3000-nvme-m2-solid-state-drive)<br>[More Info](https://www.techpowerup.com/ssd-specs/kingston-kc3000-2-tb.d260)                           |
| **Crucial P5 Plus 2TB**         | Micron<br>DM02A1           | [Product page](https://www.crucial.com/products/ssd/crucial-p5-plus-ssd)<br>[More Info](https://www.techpowerup.com/ssd-specs/crucial-p5-plus-1-tb.d107)                                   |
| **Crucial P3 2TB**              | Phison PS5021-E21T         | [Product page](https://www.crucial.com/ssd/p3/ct2000p3ssd8)<br>[More Info](https://www.techpowerup.com/ssd-specs/crucial-p3-2-tb.d829)                                                     |
| **Kingston NV2 2TB**            | Silicon Motion<br>SM2267XT | [Product page](https://www.kingston.com/pl/ssd/nv2-nvme-pcie-ssd)<br>[More Info](https://www.techpowerup.com/ssd-specs/kingston-nv2-2-tb.d1190)                                            |
| **Teamgroup MP44S 2230 2TB**    | Phison PS5021-E21          | [Product page](https://www.teamgroupinc.com/en/product-detail/ssd/TEAMGROUP/mp44s/mp44s-TM5FF3002T0C101/)<br>[More Info](https://www.techpowerup.com/ssd-specs/teamgroup-mp44s-2-tb.d1724) |

**Note:** Double-sided NVMe M.2 memory modules may not fit all adapters/enclosures.

[Full compatibility list for Ethereum node](https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038)
[Full compatibility list for Pimoroni adapter](https://shop.pimoroni.com/products/nvme-base?variant=41219587178579)

#### NVMe Hat (Pi 5) (EL)

| Brand                       | Link\*                                                                                              |
| --------------------------- | --------------------------------------------------------------------------------------------------- |
| Pimoroni                    | [NVMe Base for Raspberry Pi 5](https://shop.pimoroni.com/products/nvme-base?variant=41219587178579) |
| Raspberry Pi m.2 Hat        | <https://www.raspberrypi.com/products/m2-hat-plus>                                                  |
| Pineboards HatDrive: Bottom | <https://pineberrypi.com/products/hatdrive-bottom-2230-2242-2280-for-rpi5>                          |
| Pineboards HatDrive: Top    | <https://pineboards.io/products/hat-top-2230-2240-for-rpi5>                                         |
| Waveshare 26583             | <https://www.waveshare.com/pcie-to-m.2-hat-plus.htm>                                                |

#### USB to NVMe adapters (EL)

Suitable for Pi 4, Pi 5, and CM4 (with USB ports).

| Brand                    | Link\*                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------ |
| ZenWire                  | <https://zenwire.eu/pl/p/Adapter-SSD-M2-NVMESATA-kieszen-na-dysk-obudowa-M.2-USB-C-10-GBs-Zenwire/289> |
| RIITOP                   | <https://www.amazon.nl/dp/B0B1HVGBZ3?ref_=pe_28126711_487767311_302_E_DDE_dt_1>                        |
| QOLTEC                   | <https://www.tme.eu/en/details/qoltec-50311/hdd-ssd-accessories/qoltec/50311>                          |
| Orico / Ugreen / Sabrent | (Search for reputable USB 3.1/3.2 Gen 2 M.2 NVMe enclosures from these brands)                         |

---

### Recommendations for Consensus Client SSD (256GB+)

This device requires a smaller, but still fast and reliable drive.

\*_Sample links result from a quick Google search mainly for the reader's convenience & quick price reference; we invite you to do your own research and find local hardware providers._

#### USB Drive (CL)

| Brand   | Storage | Model            | Link\*                                                                                 | Comment                                                                      |
| ------- | ------- | ---------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Samsung | 500 GB  | T7 500GB USB 3.2 | <https://tweakers.net/pricewatch/1560664/samsung-portable-ssd-t7-500gb-grijs.html>     | Reliable option, good balance of price/performance.                          |
| Crucial | 500 GB  | X8 Portable SSD  | <https://www.crucial.com/ssd/x8/ct500x8ssd9>                                           | Another solid choice for USB SSD.                                            |
| Sandisk | 500 GB  | Extreme Portable | <https://www.westerndigital.com/products/portable-ssd/sandisk-extreme-portable-ssd-v2> | Often well-regarded, ensure it's the V2 or newer model for best performance. |

#### NVMe Drive (CL)

These drives need adapters (HAT or USB). Choose a reputable brand. 256GB or 512GB are suitable sizes.

| Brand/Model              | Storage       | Link\* (Example Size)                                                                                                               | Comment                                                                                              |
| ------------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Samsung 970 EVO Plus** | 250GB / 500GB | [500GB Link](https://www.samsung.com/us/computing/memory-storage/solid-state-drives/ssd-970-evo-plus-nvme-m-2-500gb-mz-v7s500b-am/) | Widely available, proven reliability.                                                                |
| **Crucial P3 / P3 Plus** | 500GB         | [P3 500GB Link](https://www.crucial.com/ssd/p3/ct500p3ssd8)                                                                         | Good value NVMe drives. P3 Plus is PCIe 4.0 but works fine in PCIe 3.0 slots/adapters.               |
| **WD Blue SN570/SN580**  | 250GB / 500GB | [SN580 500GB Link](https://www.westerndigital.com/products/internal-drives/wd-blue-sn580-nvme-ssd#WDS500G3B0E)                      | Reliable mainstream NVMe options.                                                                    |
| **Kingston NV2**         | 250GB / 500GB | [500GB Link](https://www.kingston.com/en/ssd/nv2-nvme-pcie-ssd?capacity=500gb)                                                      | Budget-friendly option, performance may vary slightly depending on components used in manufacturing. |

#### NVMe Hat (Pi 5) (CL)

Same HATs as recommended for the EL client can be used here with a smaller NVMe drive. See [NVMe Hat (Pi 5) (EL)](#nvme-hat-pi-5-el) section above.

#### USB to NVMe adapters (CL) {#usb-to-nvme-adapters-cl}

Same adapters as recommended for the EL client can be used here with a smaller NVMe drive. See [USB to NVMe adapters (EL)](#usb-to-nvme-adapters-el) section above.

---

## SD Card Reader and Writer

You only need **one** SD card reader/writer to flash the operating system onto both microSD cards.

- Recommendation: [Ugreen 2-in-1 USB 3 SD/TF](https://www.ugreen.com/products/ugreen-2-in-1-usb-sd-card-reader?variant=39915662803006) or similar USB 3.0 reader.

## MicroSD Cards

You will need **two** microSD cards, one for each Raspberry Pi.

- Requirement: 32GB minimum capacity, Class 10 / U1 / A1 rating or better. Faster cards (U3/A2) can improve boot times.
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
