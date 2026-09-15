# Web3 Pi Documentation

Source for [docs.web3pi.io](https://docs.web3pi.io/), built with MkDocs and Material for MkDocs. It contains guides for running Ethereum nodes on Raspberry Pi and using the Web3 Pi UPS: setup, power management, host integration, remote access, firmware updates and troubleshooting.

## Local preview

Use Python 3.11 or newer with `pip` and virtual-environment support. Run the following from your development machine:

```bash
git clone https://github.com/Web3-Pi/docs.git
cd docs
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m mkdocs serve
```

Open <http://127.0.0.1:8000/>. On Windows PowerShell, activate the environment with `.venv\Scripts\Activate.ps1` instead of `source .venv/bin/activate`.

## Content map

| Path | Purpose |
| --- | --- |
| [docs/index.md](docs/index.md) | Documentation home page |
| [docs/setup/](docs/setup/) | Raspberry Pi node setup |
| [docs/management/](docs/management/) | Node operation and maintenance |
| [docs/ups/](docs/ups/) | UPS user guides and reference |
| [docs/ups/firmware-update.md](docs/ups/firmware-update.md) | Firmware update methods |
| [docs/ups/host-integration.md](docs/ups/host-integration.md) | Host service and serial integration |
| [docs/ups/reference/protocol.md](docs/ups/reference/protocol.md) | UPS protocol reference |
| [mkdocs.yml](mkdocs.yml) | Navigation, theme, Markdown extensions and plugins |
| [overrides/](overrides/) | Material theme customizations |
| [requirements.txt](requirements.txt) | Python dependencies |

Edit Markdown under `docs/`, put related images alongside the content, and update the `nav` section of `mkdocs.yml` when adding a page. The configuration enables Mermaid diagrams, code highlighting, tabs and admonitions.

The `llmstxt` plugin also generates `llms.txt` and `llms-full.txt` from the configured node and UPS sections during the build.

## Validate changes

```bash
python -m mkdocs build
```

The static output goes to `site/`. Review build warnings and preview the affected pages, including navigation, screenshots, tables and code blocks. For a warning-free build, use `python -m mkdocs build --strict`.

Check device commands, firmware versions and screenshots against the relevant implementation before describing them as supported:

- [Web3-Pi-UPS](https://github.com/Web3-Pi/Web3-Pi-UPS): hardware, firmware and wire protocol.
- [Web3-Pi-UPS-Service](https://github.com/Web3-Pi/Web3-Pi-UPS-Service): host daemon and CLI.
- [Web3-Pi-UPS-Workbench](https://github.com/Web3-Pi/Web3-Pi-UPS-Workbench): local browser connection and flashing.
- [Web3-Pi-UPS-Panel](https://github.com/Web3-Pi/Web3-Pi-UPS-Panel): remote monitoring and control.
- [Web3-Pi-vOS](https://github.com/Web3-Pi/Web3-Pi-vOS): staking OS and Control Panel.

## Publishing

[The deployment workflow](.github/workflows/ci.yml) runs on pushes to `main` or `master`, installs `requirements.txt`, and publishes with `mkdocs gh-deploy --force`. A local `mkdocs build` or `mkdocs serve` does not publish anything.

The separate [website repository](https://github.com/Web3-Pi/website) owns the Web3 Pi marketing and product pages; this repository owns the user documentation.
