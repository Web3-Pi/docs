# Connecting via SSH

## What is SSH?

SSH stands for **Secure Shell**. It is a network protocol that allows you to securely access the command-line interface (also known as the terminal or shell) of a remote computer over an unsecured network. All communication between your computer and the Raspberry Pi via SSH is encrypted.

## Why Use SSH with Web3 Pi?

While [Cockpit](cockpit/dashboard.md) provides a web-based graphical interface for basic system administration, SSH gives you direct, powerful command-line access to your Web3 Pi's underlying Ubuntu operating system.

## How to Connect via SSH

Before connecting, you will need:

1.  **An SSH Client:** This depends on your operating system (see tabs below).
2.  **Your Web3 Pi's IP Address or Hostname:**
    - You can use the **hostname** you chose during the image creation process (e.g., `eop-1.local`).
    - Alternatively, find the **IP address** assigned to your Raspberry Pi by checking your router's admin panel or using network scanning tools.
    - If you have the [LCD Dashboard](../monitoring/lcd.md) installed, it will show the IP address directly on the display.

Now, follow the steps for your specific operating system:

=== "macOS / Linux / Windows Terminal"

    1.  **Open your SSH Client:**
        *   On macOS or Linux, open the **Terminal** application.
        *   On Windows 10/11, open **PowerShell** or **Command Prompt**. The `ssh` client is typically built-in.
    2.  **Initiate the Connection:**
        *   Type the following command, replacing `<your-pi-address>` with your Pi's actual IP address or hostname:
            ```bash
            ssh ethereum@<your-pi-address>
            ```
            *Example using hostname:* `ssh ethereum@eop-1.local`
            *Example using IP:* `ssh ethereum@192.168.1.123`
        *   Press Enter.
    3.  **Accept the Host Key (First Connection):**
        *   The very first time you connect from your computer to the Web3 Pi, your SSH client will show a security alert asking you to verify the host's key fingerprint:
            ```
            The authenticity of host 'eop-1.local (192.168.1.123)' can't be established.
            ED25519 key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
            Are you sure you want to continue connecting (yes/no/[fingerprint])?
            ```
        *   This is normal. Type `yes` and press Enter to continue and store the key.
    4.  **Enter the Password:**
        *   You will be prompted for the password for the `ethereum` user:
            ```
            ethereum@<your-pi-address>'s password:
            ```
        *   **Default Username:** `ethereum`
        *   **Default Password:** `ethereum`
        *   *(Security Note: When typing the password, you won't see any characters or dots appear. This is expected. Type the password carefully and press Enter.)*
    5.  **Change the Password (Mandatory First Login):**
        *   If this is the first time you are logging in with the default `ethereum` password, the system will **force you to change it immediately**:
            ```
            WARNING: Your password has expired.
            You must change your password now and login again!
            Changing password for ethereum.
            (Current) UNIX password:
            ```
        *   Enter the **current** password (`ethereum`) and press Enter.
        *   Then, you will be prompted to enter a **New password:** Type your chosen strong, unique password and press Enter.
        *   You will be asked to **Retype new password:** Type the same new password again and press Enter.
        *   **Choose a strong password!** This is crucial for security.
    6.  **Login Successful:**
        *   After changing the password (on first login) or entering the correct password (on subsequent logins), you will be logged in and see the Web3 Pi command prompt:
            ```
            ethereum@<your-pi-address>:~$
            ```

=== "Windows (PuTTY)"

    1.  **Open PuTTY:**
        *   Download and launch the [PuTTY](https://www.putty.org/) application.
    2.  **Configure the Session:**
        *   In the "Session" category (the default view):
        *   Enter your Pi's IP address or hostname in the **"Host Name (or IP address)"** field.
        *   Ensure **"Port"** is set to `22`.
        *   Ensure **"Connection type"** is set to `SSH`.
        *   Click the **"Open"** button.
    3.  **Accept the Host Key (First Connection):**
        *   The very first time you connect, a "PuTTY Security Alert" window will appear, showing the server's host key fingerprint.
        *   This is normal. Verify the key if desired, then click **"Accept"** (or "Yes") to trust the key and continue.
    4.  **Enter the Username and Password:**
        *   A terminal window will open, prompting `login as:`. Type `ethereum` and press Enter.
        *   Next, it will prompt `ethereum@<your-pi-address>'s password:`.
        *   **Default Password:** `ethereum`
        *   *(Security Note: When typing the password, you won't see any characters. Type carefully and press Enter.)*
    5.  **Change the Password (Mandatory First Login):**
        *   If this is the first time you are logging in with the default `ethereum` password, the system will **force you to change it immediately** after entering the default password:
            ```
            WARNING: Your password has expired.
            You must change your password now and login again!
            Changing password for ethereum.
            (Current) UNIX password:
            ```
        *   Enter the **current** password (`ethereum`) and press Enter.
        *   Then, you will be prompted to enter a **New password:** Type your chosen strong, unique password and press Enter.
        *   You will be asked to **Retype new password:** Type the same new password again and press Enter.
        *   **Choose a strong password!** This is crucial for security.
    6.  **Login Successful:**
        *   After changing the password (on first login) or entering the correct password (on subsequent logins), you will be logged in and see the Web3 Pi command prompt:
            ```
            ethereum@<your-pi-address>:~$
            ```
