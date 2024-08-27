# Playwright-TS-Cucumber-Web 

![Diseño sin título (3)](https://github.com/user-attachments/assets/cf2b2195-84f0-4225-8948-bf81e297938a)

[Actions-CI/CD](ACTIONS.md)


Playwright-TS-Cucumber-Web is an advanced and highly efficient test automation framework designed to revolutionize your testing process. Our framework is meticulously crafted to optimize the testing workflow, providing you with a seamless 
experience and powerful testing capabilities.

Key Features:

- Playwright Integration: Leverage the full potential of Playwright to automate interactions with your web applications across multiple browsers.

- Cucumber Support: Write expressive and easy-to-understand test scenarios using the Gherkin syntax, facilitating collaboration between technical and non-technical team members.

- Powered by TypeScript: Utilize the benefits of TypeScript for robust and maintainable code, including static typing.


# Requeriments 📝 

- Node.js: Ensure that Node.js is installed on your system. You can download it from https://nodejs.org/en/download.

- Text Editor: A text editor of your choice is required. Visual Studio Code (VSCode) is recommended.

# Installation  🖥️

Clone this repository:

```bash
git clone https://github.com/thiagotobiasturk/Playwright-TS-Cucumber-Web.git
```
Navigate to the project folder:

```bash
 cd Playwright-TS-Cucumber-Web
```
Install dependencies:
```bash
npm install
```
# Help

### Main Methods of Playwright

| Method                                       | Description                                                                                                      |
|----------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `async page.goto(url[, options])`              | Navigates to the specified URL.                                                                                 |
| `async page.click(selector[, options])`         | Clicks on an element that matches the given selector.                                                          |
| `async page.fill(selector, value[, options])`   | Fills an input field with the specified value.                                                                  |
| `async page.waitForSelector(selector[, options])` | Waits until an element matching the selector appears on the page.                                              |
| `async page.screenshot([options])`             | Takes a screenshot of the page.                                                                                |
| `async page.evaluate(pageFunction[, ...args])`  | Executes a JavaScript function in the page context and returns the result.                                      |
| `async page.waitForNavigation([options])`       | Waits for the page navigation to complete.                                                                      |
| `async page.goBack([options])`                 | Navigates backward in the page history.                                                                         |
| `async page.goForward([options])`              | Navigates forward in the page history.                                                                          |
| `async page.reload([options])`                 | Reloads the current page.                                                                                       |
| `async page.waitForTimeout(timeout)`           | Waits for the specified amount of time in milliseconds.                                                         |
| `async page.keyboard.press(key[, options])`    | Simulates pressing a key on the keyboard.                                                                       |
| `async page.waitForFunction(pageFunction[, options[, ...args]])` | Waits until a JavaScript function on the page returns a truthy value.                                  |
| `async page.hover(selector[, options])`         | Moves the mouse over an element that matches the given selector.                                                 |
| `async page.focus(selector)`                   | Focuses on an element that matches the given selector.                                                          |
| `async page.dblclick(selector[, options])`     | Double-clicks on an element that matches the given selector.                                                     |
| `async page.selectOption(selector, values[, options])` | Selects options in a `<select>` element that match the given values.                                      |
| `async page.waitForRequest(urlOrPredicate[, options])` | Waits until a request matching the specified URL or predicate is made.                                       |
| `async page.waitForResponse(urlOrPredicate[, options])` | Waits until a response matching the specified URL or predicate is received.                                |
| `async page.addScriptTag(options)`             | Adds a `<script>` tag to the page.                                                                              |
| `async page.addStyleTag(options)`              | Adds a `<style>` tag to the page.                                                                               |
| `async page.setContent(html[, options])`       | Sets the HTML content of the page.                                                                             |
| `async page.evaluateHandle(pageFunction[, ...args])` | Executes a JavaScript function in the page context and returns a handle to an object that can be used in the browser. |
| `async page.waitForFileUpload(selector[, options])` | Waits until a file upload is completed on a file input element.                                                |
| `async page.waitForEvent(event[, predicateOrTimeout[, options]])` | Waits until a specific event is emitted on the page.                                                          |

# Reports 📄 
**Playwright-TS-Cucumber-Web** implements `multiple-cucumber-html-reporter` to generate reports in HTML format.


![image](https://github.com/user-attachments/assets/1b9ad46e-38e6-4339-aae2-ea22e810accd)

![image](https://github.com/user-attachments/assets/2ea645fd-0fb0-4d0d-89d2-163519e9b8be)


# Features Design ✏️

```cucumber
Feature: Login Functionality

  As a user, I want to be able to log in to the application
  so that I can access my account.

  Background:
    Given the login page is displayed

  
  Scenario Outline: User logs in with valid and invalid credentials
    When the user enters the username "<username>" and the password "<password>"
    And the user clicks on the login button
    Then the user should see "<message>"

    Examples:
      | username      | password      | message                   |
      | student       | Password123   | Logged In Successfully    |
      | student23     | Password12345 | Your username is invalid! |


```

# Steps ⌨️ 

```typescript

import {AfterAll, Given,Then,When,setDefaultTimeout} from "@cucumber/cucumber"
import { expect  } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2)

Given('the login page is displayed', async function () {
  await pageFixture.page.goto("https://practicetestautomation.com/practice-test-login/"); 
});


When(/^the user enters the username "([^"]*)" and the password "([^"]*)"$/, async function (username: string, password:string) {
  const usernameInput = await pageFixture.page.locator('//*[@id="username"]');
  await usernameInput.fill(username);
  const passwordInput = await pageFixture.page.locator('//*[@id="password"]');
  await passwordInput.fill(password);
});

When(/^the user clicks on the login button$/, async () => {
  const submitButton = await pageFixture.page.locator('//*[@id="submit"]');
  await submitButton.click();
});
Then(/^the user should see "([^"]*)"$/, async function (expectedMessage: string) {
  let actualMessage: string | null = null;

  try {
      const errorLocator = await pageFixture.page.locator('//*[@id="error"]');
      actualMessage = await errorLocator.textContent();
  } catch (error) {
      const successLocator = await pageFixture.page.locator('//*[@id="loop-container"]/div/article/div[1]/h1');
      actualMessage = await successLocator.textContent();
  }

  expect(actualMessage).toBe(expectedMessage);
});




```
Run Test :

```bash
npm run test
```



# Author 🛠️
www.linkedin.com/in/thiago-tobias-turk-4462542a9
