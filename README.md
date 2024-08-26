# Playwright-TS-Cucumber-Web 

Playwright-TS-Cucumber-Web is an advanced and highly efficient test automation framework designed to revolutionize your testing process. Our framework is meticulously crafted to optimize the testing workflow, providing you with a seamless experience and powerful testing capabilities.

Key Features:

Playwright Integration: Leverage the full potential of Playwright to automate interactions with your web applications across multiple browsers.

Cucumber Support: Write expressive and easy-to-understand test scenarios using the Gherkin syntax, facilitating collaboration between technical and non-technical team members.

Powered by TypeScript: Utilize the benefits of TypeScript for robust and maintainable code, including static typing.


# Requeriments 📝 

Node.js: Ensure that Node.js is installed on your system. You can download it from https://nodejs.org/en/download.

Text Editor: A text editor of your choice is required. Visual Studio Code (VSCode) is recommended.

# Installation  🖥️

Clone this repository:

```bash
git clone https://github.com/tu-usuario/project-infinite.git
```
Navigate to the project folder:

```bash
 cd project-infinite
```
Install dependencies:
```bash
npm install
```
### Help

**Main Methods of Playwright**


# Main Methods of Playwright

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

Dashboard construido por  (https://github.com/WasiqB/multiple-cucumber-html-reporter)

![image](https://github.com/armadaautomationteam/Project-Infinite/assets/149462281/488be936-d54c-49f6-8ce6-01f8fd29b9c0)

![image](https://github.com/armadaautomationteam/Project-Infinite/assets/149462281/5ce3bc7f-446a-41c4-be8b-a885cf9edf5f)


# Features Design ⌨️

Features:

```cucumber
Feature: TestLogin
 Como usuario quiero iniciar 
 secion .

Background:
  Given El usuario abrio la url "https://sso.lirmi.dev/login"
  Given Completa el  campo Username con "estudiante"
  And Completa el campo password con "Contraseña"
  When Presiona el boton "Submit" 
  

Scenario: Positive Planificacion test
  When El usuario Presiona el boton mis planificaciones "Mis planificaciones"


Scenario: Positive Aplicar Evaluación test
  When El usuario Presiona el boton Aplicar Evaluacion "Aplicar evaluación"

Scenario: Positive Crear Evaluación test
  When Presiona el boton crear evaluacion "Crear evaluación"

Scenario: Positive  Evaluaciones Estandarizadas test
 When Presiona el boton evaluaciones estandarizadas "Evaluacion estandarizadas"

Scenario: Positive Mis Evaluaciones test
 When Presiona el boton mis evaluaciones "Mis evaluacions"

Scenario: Positive Matrícula test
 When Presiona el boton matricula "Matrícula"

Scenario: Positive Asistencia test
 When Presiona el boton asistencia "Asistencia"

Scenario: Positive Calificaciones test
 When Presiona el boton calificaciones "Calificaciones"

Scenario: Positive Registro de Actividades test
 When Presiona el boton registro de actividades "Registro de Actividades"

Scenario: Positive Ficha de Estudiante test
 When Presiona el boton ficha de estudiantes "Ficha de Estudiantes"

 Scenario: Positive Certificados test
 When Presiona el boton certificados "Certificados"

```

Steps:

```typescript

import {Given,When,Then, After} from "@cucumber/cucumber"
import {chromium,Page,Browser } from "@playwright/test";

let browser: Browser;
let page: Page;

Given('El usuario abrio la url {string}', async function (string) {
  browser = await chromium.launch({ headless:false});
  page = await browser.newPage();
  await page.goto("https://sso.lirmi.dev/login"); 
});

Given('Completa el  campo Username con {string}', async function (string) {
  const emailInput = await page.locator('//*[@id="email"]');
  await emailInput.fill('randomname@gmail.com');
});


Given('Completa el campo password con {string}', async function (string) {
  const contraseñaInput = await page.locator('//*[@id="password"]');
  await contraseñaInput.fill('contraseña28');

});


When('Presiona el boton {string}', async function (string) {
  const submitButton = await page.locator('//*[@id="submit"]/span[1]');
 await submitButton.click();

});

```
Run Test :

```bash
npm run test
```
![image](https://github.com/armadaautomationteam/Project-Infinite/assets/149462281/63c1e93f-4e27-41ed-b6ca-703534605993)




# Autor 🛠️
armadaautomation31@gmail.com
