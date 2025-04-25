# Web3 Pi Documentation

## How to Run the Project

## Prerequisites

1. Ensure you have **Python 3.11** or newer installed on your system.
2. Make sure you have `pip` installed to manage Python packages.

## Steps to Run the Project

1. **Clone the Repository**

   Clone the repository to your local system using the command below:

   ```bash
   git clone git@github.com:Web3-Pi/docs.git
   ```

2. **Navigate to the Project Directory**

   Switch to the project's root directory:

   ```bash
   cd docs
   ```

3. **Create and Activate a Virtual Environment**

   It is recommended to use a virtual environment to isolate the project dependencies. Use the following commands to
   create and activate the virtual environment:

   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Linux/macOS
   .venv\Scripts\activate     # On Windows
   ```

4. **Install Dependencies**

   Install the required Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. **Build the Documentation**

   To build and serve the documentation locally, run the following command:

   ```bash
   mkdocs serve
   ```

   This will start a local development server and you will be able to access the documentation at:

   ```
   http://127.0.0.1:8000/
   ```

6. **Check the Deployed Documentation**

   You can also view the deployed documentation online at [https://docs.web3pi.io/](https://docs.web3pi.io/).

## Additional Notes

- This project uses the **Material for MkDocs theme**, which is defined in the `mkdocs.yml` configuration file.
- Ensure the directories and assets (such as `extra_css`, `extra_javascript`, and logo images) defined in `mkdocs.yml`
  are accessible when building the project.
