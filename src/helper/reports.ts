const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName:"Playwright Automation Report",
  pageTitle: "Infinite app test report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "123",
    },
    device: "DESKTOP-NI9EMPS",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "test info",
    data: [
      { label: "Project", value: " project infinite" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
    //   { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
    //   { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});