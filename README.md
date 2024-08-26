# Project-Infinite 🚀(En desarrollo)

Project Infinite  es un marco de pruebas de automatización avanzado y altamente eficiente diseñado para revolucionar su proceso de pruebas. Nuestro marco está meticulosamente elaborado para optimizar el flujo de trabajo de pruebas, brindándole una experiencia sin problemas y capacidades de pruebas poderosas.

Características Clave:

Integración de Playwright: Aproveche todo el potencial de Playwright para automatizar interacciones con sus aplicaciones web en múltiples navegadores.

Soporte de Cucumber: Escriba escenarios de prueba expresivos y fáciles de entender utilizando la sintaxis Gherkin, facilitando la colaboración entre miembros técnicos y no técnicos del equipo.

Potenciado por TypeScript: Utilice los beneficios de TypeScript para un código robusto y mantenible, incluyendo tipado estático .

![Project Infinit (2)](https://github.com/armadaautomationteam/Project-Infinite/assets/149462281/bbabdb6a-6fe0-4cd4-b59d-b76ce4abba07)


# Requsitos 📝 

- Node.js: Asegúrese de tener Node.js instalado en su sistema. Puede descargarlo desde https://nodejs.org/en/download.
- Editor de Texto: Se requiere un editor de texto de peferencia.

# Windows

Descargar Node.js:

- Visita https://nodejs.org/en/download .
- Descarga la version recomendada para windows .

Instalar Node.js:

- Ejecuta el instalador .
- Siga las instrucciones de instalación, aceptando la configuración predeterminada.
- Node.js y npm se instalarán automáticamente.
Verificar la Instalación:
- Abra el Símbolo del Sistema (CMD) o PowerShell.
```bash
node -v  # y presione Enter. Debería ver la versión de Node.js instalada.
npm -v   # y presione Enter. Debería ver la versión de npm instalada.
```
# Linux
Usando el Gestor de Paquetes (apt o yum):

Abra Terminal.
Actualice las listas de paquetes:
``` sudo apt update ``` ( Debian/Ubuntu) o ``` sudo yum update ``` ( Red Hat/Fedora).
Instalar Node.js y npm: ``` sudo apt install nodejs npm ``` ( Debian/Ubuntu) or ``` sudo yum install nodejs npm ``` ( Red Hat/Fedora).
Usando Node Version Manager (nvm):

Abrir Terminal.

Instale nvm: 
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
Cierre y vuelva a abrir Terminal para comenzar a usar nvm.
Instale Node.js y npm usando nvm:
```bash
nvm install node
```
Verificar Instalacion:

Abrir Terminal.
```bash
node -v  # y presione Enter. Debería ver la versión de Node.js instalada.
npm -v   # y presione Enter. Debería ver la versión de npm instalada.
```
# Instalacion  🖥️

Clonar este repositorio:

```bash
git clone https://github.com/tu-usuario/project-infinite.git
```
 Navegar hasta la carpeta del proyecto:

```bash
 cd project-infinite
```
Instalar dependencias:

```bash
npm install
```
### Ayuda

**Métodos Principales de Playwright**


| Método                                       | Descripción                                                                                                      |
|----------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| async page.goto(url[, options])              | Navega hacia la URL especificada.                                                                                 |
| async page.click(selector[, options])         | Hace clic en un elemento que coincida con el selector dado.                                                        |
| async page.fill(selector, value[, options])   | Rellena un campo de entrada con el valor especificado.                                                             |
| async page.waitForSelector(selector[, options]) | Espera hasta que aparezca un selector en la página.                                                              |
| async page.screenshot([options])             | Toma una captura de pantalla de la página.                                                                        |
| async page.evaluate(pageFunction[, ...args])  | Ejecuta una función JavaScript en el contexto de la página y retorna el resultado.                                 |
| async page.waitForNavigation([options])       | Espera a que la navegación de la página termine.                                                                  |
| async page.goBack([options])                 | Navega hacia atrás en la historia de la página.                                                                   |
| async page.goForward([options])              | Navega hacia adelante en la historia de la página.                                                                |
| async page.reload([options])                 | Recarga la página actual.                                                                                         |
| async page.waitForTimeout(timeout)           | Espera la cantidad de tiempo especificada en milisegundos.                                                         |
| async page.keyboard.press(key[, options])    | Simula la presión de una tecla en el teclado.                                                                     |
| async page.waitForFunction(pageFunction[, options[, ...args]]) | Espera a que una función JavaScript en la página devuelva un valor verdadero.                                  |
| async page.hover(selector[, options])         | Mueve el mouse sobre un elemento que coincida con el selector dado.                                               |
| async page.focus(selector)                   | Da foco a un elemento que coincida con el selector dado.                                                           |
| async page.dblclick(selector[, options])     | Hace doble clic en un elemento que coincida con el selector dado.                                                  |
| async page.selectOption(selector, values[, options]) | Selecciona opciones en un elemento `<select>` que coincidan con los valores dados.                               |
| async page.waitForRequest(urlOrPredicate[, options]) | Espera hasta que se realice una solicitud que coincida con la URL o predicado especificado.                      |
| async page.waitForResponse(urlOrPredicate[, options]) | Espera hasta que se reciba una respuesta que coincida con la URL o predicado especificado.                        |
| async page.addScriptTag(options)             | Añade una etiqueta `<script>` a la página.                                                                        |
| async page.addStyleTag(options)              | Añade una etiqueta `<style>` a la página.                                                                         |
| async page.setContent(html[, options])       | Establece el contenido HTML de la página.                                                                         |
| async page.evaluateHandle(pageFunction[, ...args]) | Ejecuta una función JavaScript en el contexto de la página y devuelve un objeto manipulable en el navegador.   |
| async page.waitForFileUpload(selector[, options]) | Espera hasta que se complete una carga de archivo en un elemento de entrada de archivo.                          |
| async page.waitForEvent(event[, predicateOrTimeout[, options]]) | Espera hasta que se emita un evento específico en la página.                                                   |

# Reportes 📄 
Project-Infinite implementa "multiple-cucumber-html-reporter"
para generar  informes en formato HTML.

Dashboard construido por  (https://github.com/WasiqB/multiple-cucumber-html-reporter)

![image](https://github.com/armadaautomationteam/Project-Infinite/assets/149462281/488be936-d54c-49f6-8ce6-01f8fd29b9c0)

![image](https://github.com/armadaautomationteam/Project-Infinite/assets/149462281/5ce3bc7f-446a-41c4-be8b-a885cf9edf5f)


# Diseño de Pruebas ⌨️

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
Correr Pruebas :

```bash
npm run test
```
![image](https://github.com/armadaautomationteam/Project-Infinite/assets/149462281/63c1e93f-4e27-41ed-b6ca-703534605993)




# Autor 🛠️
armadaautomation31@gmail.com
