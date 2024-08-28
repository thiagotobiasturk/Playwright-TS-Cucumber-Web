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

```yml
- name: Checkout repository
  uses: actions/checkout@v4
```

- **Set up Node.js**: Configures the specified Node.js version.

 ```yml
 - name: Set up Node.js
   uses: actions/setup-node@v4
    with:
     node-version: ${{ github.event.inputs.node_version }}
   ```

- **Install dependencies**: Installs project dependencies using `npm`.

   ```yml

  - name: Install dependencies
        run: npm install
   ```

- **Cache Playwright Chromium**: Caches Chromium to speed up installation in future runs.

   ```yml 

      - name: Cache Playwright Chromium
        uses: actions/cache@v4
        id: cache-playwright-chromium
        with:
          path: /home/runner/.cache/ms-playwright/chromium-1112
          key: ${{ runner.os }}-playwright-chromium-${{ hashFiles('package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-playwright-chromium-
    ```

- **Install Playwright Chromium**: Installs Chromium if it's not in the cache.

  ```yml 

   - name: Install Playwright Chromium
     if: steps.cache-playwright-chromium.outputs.cache-hit != 'true'
     run: npx playwright install chromium

  ``` 


### 2. Tests

This job runs tests in parallel and can be scheduled automatically if specified:

```yml 

 tests:
    needs: setup
    runs-on: ${{ github.event.inputs.os }}
    if: ${{ github.event.inputs.auto_schedule == 'no' || (github.event.inputs.auto_schedule == 'yes' && github.event.inputs.schedule_interval) }}
    strategy:
      matrix:
        parallel_run: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
``` 

- **Checkout repository**: Clones the repository for access to the source code.

  ```yml
      - name: Checkout repository
        uses: actions/checkout@v4
     ```


 - **Restore Playwright Chromium cache**: Restores the Chromium cache.

  ```yml
      - name: Restore Playwright Chromium cache
        uses: actions/cache@v4
        with:
          path: /home/runner/.cache/ms-playwright/chromium-1112
          key: ${{ runner.os }}-playwright-chromium-${{ hashFiles('package-lock.json') }}
  ```

- **Install dependencies**: Installs project dependencies.

  ```yml
      - name: Install dependencies
        run: npm install
  ```

- **Run Playwright tests**: Executes Playwright tests.

 ```yml

   - name: Run Playwright tests
        run: |
          npm test
          npm run postest
 ```

- **Upload test report**: Uploads the test report if `create_report` is set to `true`.

 ```yml

      - name: Upload test report
        uses: actions/upload-artifact@v4
        if: ${{ github.event.inputs.create_report == 'true' }}
        with:
          name: playwright-report-${{ runner.os }}-${{ matrix.parallel_run }}
          path: |
            assets/
            features/
            index.html
 ```


## Running the Workflow

You can manually trigger this workflow from the GitHub interface, where you can select the available options for the parameters. You can also configure an automatic schedule if preferred.

For more information about GitHub Actions, refer to the [official documentation](https://docs.github.com/en/actions).

---

[Execute]()
