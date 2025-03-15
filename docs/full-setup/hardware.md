# Web3 Pi: Hardware Assembly

This assembly guide is primarily aimed at assembling the components included in the Welcome Box, but will also be useful for anyone assembling their own hardware.

⚠️ To avoid errors during the first setup, please follow the instructions precisely. ⚠️

Please also see the [video instructions](https://www.youtube.com/watch?v=-3Bj0rSCskk) for more information.

If you have a Welcome box, unpack the contents and check them against the components listed [here](../welcome-box.md).

<img title="" src="../img/hardware0.jpg" alt="" width="400" data-align="center">

Source of case images and assembly diagrams: [Argon Neo Manual](https://argon40.com/blogs/argon-resources/argon-neo-5-m-2-nvme-pcie-case-for-rpi-5-manual)

## Argon Neo Parts List

<img title="" src="../img/hardware0a.jpg" alt="" width="400" data-align="center">

## Assembly Instructions

Open the Argon Neo case by removing the top cover containing the logo, and make sure you have all the parts shown in the diagram above. 

There should be a book of assembly instructions included. You can refer to this if any of the following instructions need clarifying, but please work according to this guide, since a few steps are unique to Web3 Pi.

Some parts are in two zipper bags. Open them and carefully pour out the contents. You will find:

- Screws: 5 longer and 2 shorter

- Rubber feet

- Two ribbon cables. You need one: the other is a spare.

- Either two or four thermal pads.

Pass the fan cable through the vertical gap in the case. There is a groove for the cable.

Take care when removing the Raspberry Pi from the box, and avoid thermostatic damage when handling it.

| Instructions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **1.** Place the thermal <br> pads on the CPU, <br>RP1,  RAM  and  <br>PMIC chip of the <br>Raspberry Pi. <br>Make sure you remove <br>the protective film from <br>both sides.<br><br> There are different <br>versions of this case <br>on the market:<br>- If you have 4 <br>thermal pads, <br>place them in <br>the areas marked <br>in blue.<br>- If you have 2 <br>thermal pads, <br>place them on the <br>CPU and PMIC (bottom <br>left corner, near <br>the USB-C connector). <br><br>It doesn't matter if the pads <br> are larger than the chips. | <img title="" src="../img/hardware1.jpg" alt="" width="400" data-align="center">   |
| **2.** Connect the NEO 5 <br>fan to the fan <br>connector as shown in <br>the image. Please pay <br>attention to how the <br>cable is routed. <br>NB: There may be a <br>small plug inserted <br>in the fan connector. <br>Remove it.                                                                                                                                                                                                                                                                                                                       | <img title="" src="../img/hardware2.jpg" alt="" width="400" data-align="center">   |
| **2a.** Diagrammatic View                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | <img title="" src="../img/hardware2a.jpg" alt="" width="400" data-align="center">  |
| **3.** Connect the PCI <br>flat ribbon cable to <br>the Raspberry Pi 5 <br>PCIe port. Be careful <br>when handling the brown <br>PCIe flip/cover. Pull <br>up the brown flip to <br>release the lock.<br><br>Copper side of the <br>strip should face the <br>white side of the PCI <br>connector of the RP5. <br>At this stage, don't connect <br> the ribbon cable to the case.                                                                                                                                                                           | <img title="" src="../img/hardware3.jpg" alt="" width="400" data-align="center">   |
| **3a.** Make sure the fan <br>wire is secured in the <br>guide rail at the side <br>of the case                                                                                                                                                                                                                                                                                                                                                                                                                                                             | <img title="" src="../img/hardware3b.jpg" alt="" width="400" data-align="center">  |
| **4.**  Thread the PCIe flat ribbon <br> cable through the larger hole <br>in the case as shown in<br>the picture. Drop the RPi 5 <br>inside the **Argon NEO** <br>**5 M.2 NVMe Case**<br><br>After inserting and <br>pressing the RPi 5 <br>into the central part of <br>the case, they will adhere <br>due to the stickiness of <br>the thermal pads. To ensure <br>good thermal conductivity, <br>do this once, and avoid <br>removing the RPi 5 from <br>this part of the case again.<br><br>                                                           | <img title="" src="../img/hardware4.jpg" alt="" width="400" data-align="center">   |
| **5.** Pass the ribbon cable <br>through the opening on the <br>case closer to the fan. <br>Pull the brown tabs open <br>and carefully connect <br>the PCIe flat ribbon cable <br>to the Argon Neo 5 M 2 <br>NVMe Carrier Board case <br>with copper facing up. <br>Close the tabs.                                                                                                                                                                                                                                                                         | <img title="" src="../img/hardware5.jpg" alt="" width="400" data-align="center">   |
| **6.** Insert the MicroSD <br>card you previously <br>flashed with the Web3 <br>Pi image. The copper <br> contacts should facce <br>the board.                                                                                                                                                                                                                                                                                                                                                                                                              | <img title="" src="../img/hardware6.jpg" alt="" width="400" data-align="center">   |
| **7.** Close the case and <br> secure the bottom <br>cover with 4 screws <br>as shown in the image. <br>Do not apply excessive <br>force to avoid stripping <br>or damaging the thread.                                                                                                                                                                                                                                                                                                                                                                     | <img title="" src="../img/hardware7.jpg" alt="" width="400" data-align="center">   |
| **8.** The following sub-steps <br> describe how to connect your <br>M.2 NVME drive to the Argon <br>Neo 5 M.2 NVMe Carrier <br>Board. This board will accept <br>M.2 Key M and M.2 Key <br>B+M NVMe Storage Drives.                                                                                                                                                                                                                                                                                                                                        | <img title="" src="../img/hardware8.jpg" alt="" width="400" data-align="center">   |
| **8a.** Remove the "THRMK <br>M2 Heatsink" cover by <br>unscrewing the four <br>screws at its corners.<br>Remove the thermal pad. <br><br>Move the screw point <br>on the board to the <br>appropriate size of <br>your storage drive.                                                                                                                                                                                                                                                                                                                      | <img title="" src="../img/hardware9.jpg" alt="" width="400" data-align="center">   |
| **8b.** Insert the NVMe <br>drive into the M.2 <br>slot with the label <br>facing up as shown in <br>the picture.<br><br>Ensure the drive lies flat <br>in the case and tighten <br>the screw as shown in <br>the picture.                                                                                                                                                                                                                                                                                                                                  | <img title="" src="../img/hardware10.jpg" alt="" width="400" data-align="center">  |
| **8c.** Mount the thermal <br>pad on the NVMe drive. <br>There is no need to <br>shorten it. Remember <br>to remove the protective <br>film from both sides.<br><br>Mount the metal <br>cover and screw it <br>in using four screws<br>with conical heads.                                                                                                                                                                                                                                                                                                  | <img title="" src="../img/hardware11.jpg" alt="" width="400" data-align="center">  |
| **9.** Insert the rubber feet <br>in the round indentations <br>in the bottom of the case.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | <img title="" src="../img/hardware11a.jpg" alt="" width="400" data-align="center"> |

**If you don't have the LCD dashboard and cover:**

| Instructions                                                                                                                    |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **10.** If you don't have <br>the optional LCD screen <br>and cover, then secure <br>the aluminium top cover <br>with 2 screws. | <img title="" src="../img/hardware12.jpg" alt="" width="400" data-align="center"> |
| **12b.** The completed assembly <br>should look like this.                                                                      | <img title="" src="../img/hardware13.jpg" alt="" width="400" data-align="center"> |

**If you do have the LCD dashboard and cover:**

| Instructions                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| **13.** If you have the <br>optional plastic cover <br>with [LCD display](https://github.com/Web3-Pi/web3-pi-dashboard), <br>connect it instead <br>of the original <br>aluminium cover.<br><br>Please follow the <br>diagram for connection <br>instructions.<br><br>Pay attention to the <br>position of the cables <br>when mounting the cover <br>to ensure they don't <br>mechanically obstruct <br>the fan blades. | <img title="" src="../img/hardware14.jpg" alt="" width="400" data-align="center"> |
| **13b.** The completed <br>assembly including <br>the LCD screen should <br>look like this.                                                                                                                                                                                                                                                                                                                              | <img title="" src="../img/hardware15.jpg" alt="" width="400" data-align="center"> |

You have now completed the hardware assembly. 

## ⚠️

**Please don't turn on the power until you've connected to the network as described in the installation and monitoring guide. Web3 Pi will attempt to carry out the installation as soon as power is connected.**

## ⚠️

Installation requires the network. Syncing will begin immediately after installation, which takes about 19 hours to complete.

[Continue to Installation and Monitoring Guide](monitoring-installation.md)

[Return to Setup menu](./menu.md)

[Return to Documentation Index](../index.md)
