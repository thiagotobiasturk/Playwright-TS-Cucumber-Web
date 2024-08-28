# Continuous Integration (CI/CD) with GitHub Actions

![image](https://github.com/user-attachments/assets/3add73b2-22b1-4dfe-b583-7e4729634411)

![image](https://github.com/user-attachments/assets/8d3f5874-17fd-4d9d-ac90-495c7955788e)

This document explains how the Continuous Integration and Continuous Delivery (CI/CD) workflow is configured using GitHub Actions in our repository.

## Workflow Overview

The `.github/workflows/playwright.yml` file defines the CI/CD workflow that automates dependency installation, test execution, and report uploading. This workflow can be triggered manually from the GitHub interface or scheduled to run automatically.

### Workflow Configuration

The workflow is triggered via the `workflow_dispatch` event, allowing for customizable parameters for execution. These parameters are:

1. **OS**: The operating system on which to run the workflow.
   - Available options: `ubuntu-latest`, `macos-latest`, `windows-latest`

![image](https://github.com/user-attachments/assets/ec1abc76-7180-4faf-a519-8a114a7ab30a)

2. **Create Report**: Decide whether to create and upload a test report.
   - Available options: `true`, `false`

![image](https://github.com/user-attachments/assets/867f0867-7b00-4bc0-8a87-98f150613c43)

3. **Auto Schedule**: Determines if the workflow should run automatically.
   - Available options: `yes`, `no`

![image](https://github.com/user-attachments/assets/52f76615-6737-430e-afab-bc97c578c542)

4. **Schedule Interval**: Interval for automatic runs (if applicable).
   - Available options: `daily`, `weekly`, `monthly`

   ![image](https://github.com/user-attachments/assets/f19ff906-2752-4539-8019-daf44452cb35)

5. **Node Version**: Version of Node.js to use.
   - Available options: `16`, `18`, `20`, `21`

![image](https://github.com/user-attachments/assets/f416f31f-3f66-46c2-84e9-6ff859fa1983)

## Workflow Jobs

The file defines two jobs: `setup` and `tests`.

### 1. Setup

This job prepares the environment for testing:

- **Checkout repository**: Clones the repository for access to the source code.

![image](https://github.com/user-attachments/assets/5436e992-871e-412d-b954-7eca9844df28)

- **Set up Node.js**: Configures the specified Node.js version.

![image](https://github.com/user-attachments/assets/9e7cbc16-ce72-406f-9d9c-a4470c912e9b)

- **Install dependencies**: Installs project dependencies using `npm`.

![image](https://github.com/user-attachments/assets/d2ed29bc-7232-473e-a0d7-1289644225c4)

- **Cache Playwright Chromium**: Caches Chromium to speed up installation in future runs.

![image](https://github.com/user-attachments/assets/9334feb5-9bf4-4c54-b358-48b0f87f0dcd)

- **Install Playwright Chromium**: Installs Chromium if it's not in the cache.

![image](https://github.com/user-attachments/assets/c6ca4912-ccf9-4907-b8e0-30f8b31ab4bd)

### 2. Tests

This job runs tests in parallel and can be scheduled automatically if specified:

![image](https://github.com/user-attachments/assets/4cc6e7d4-852d-4155-b421-49439fbdec6a)

- **Checkout repository**: Clones the repository for access to the source code.

![image](https://github.com/user-attachments/assets/606bd10e-df0b-40f9-97c9-effd54074ffc)

- **Restore Playwright Chromium cache**: Restores the Chromium cache.

![image](https://github.com/user-attachments/assets/a5548083-4a14-49a3-87c3-e27d614e9195)

- **Install dependencies**: Installs project dependencies.

![image](https://github.com/user-attachments/assets/424dec55-fa90-46dc-904e-5b0c17605567)

- **Run Playwright tests**: Executes Playwright tests.

![image](https://github.com/user-attachments/assets/0642047f-e89b-4c8d-acb8-2e7ae5c25033)

- **Upload test report**: Uploads the test report if `create_report` is set to `true`.

 ![image](https://github.com/user-attachments/assets/a90ed8f1-9a17-4d65-9384-4ce3b651ce0f)

## Running the Workflow

You can manually trigger this workflow from the GitHub interface, where you can select the available options for the parameters. You can also configure an automatic schedule if preferred.

For more information about GitHub Actions, refer to the [official documentation](https://docs.github.com/en/actions).

---

[Execute]()
