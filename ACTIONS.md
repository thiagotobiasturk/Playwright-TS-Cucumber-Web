# Continuous Integration and Continuous Delivery (CI/CD) with GitHub Actions

This project uses GitHub Actions for Continuous Integration (CI) and Continuous Delivery (CD). The workflow is defined through a YAML file that specifies how tests should be run and what actions to take during the process. Below is an overview of how this workflow is configured.

## Workflow Configuration

The workflow is set up to be manually triggered using the `workflow_dispatch` event. This allows users to specify various options for running the workflow. The available options are:

- **`os`**: Choose the operating system for the workflow.
  - Options: `ubuntu-latest`, `windows-latest`, `macOS-latest`.
  
- **`create_report`**: Specify whether to create and upload a test report.
  - Options: `yes`, `no`.
  
- **`run_parallel_tests`**: Decide if tests should be run in parallel.
  - Options: `yes`, `no`.
  
- **`parallel_test_count`**: If tests are to be run in parallel, specify the number of parallel runs. (Optional, relevant only if `run_parallel_tests` is `yes`).
  - Options: `1` to `20`.

## Workflow Description

1. **Execution Conditions**:
   - The `test` job runs if `run_parallel_tests` is `no` or if a value is specified for `parallel_test_count`. This setup accommodates both sequential and parallel test executions.

2. **Job Configuration**:
   - **`timeout-minutes`**: Sets a 60-minute timeout for the job.
   - **`runs-on`**: The workflow runs on the operating system specified by the `os` input.

3. **Parallel Execution Strategy**:
   - The matrix strategy defines a range of possible parallel runs (from 1 to 20).
   - **`max-parallel`**: Controls the maximum number of parallel runs based on the `parallel_test_count` input.

4. **Job Steps**:
   - **Cache npm dependencies**: Caches npm dependencies to speed up installations in future runs.
   - **Checkout**: Checks out the source code from the repository.
   - **Setup Node.js**: Sets up the Node.js version to use (latest LTS version).
   - **Install dependencies**: Installs project dependencies using `npm ci`.
   - **Install Playwright Browsers**: Installs the necessary browsers for Playwright tests.
   - **Run Playwright tests**: Executes the tests defined in the project.
   - **Upload test report**: If `create_report` is `yes`, uploads test reports as workflow artifacts.

## Running the Workflow

To run the workflow, follow these steps:

1. Navigate to the **Actions** tab in your GitHub repository.
2. Select the **CI/CD** workflow.
3. Click on the **Run workflow** button.
4. Fill out the required options in the popup form and click **Run workflow**.

That's it! Your CI/CD workflow is now configured and ready to automate tests and report generation for your project.

