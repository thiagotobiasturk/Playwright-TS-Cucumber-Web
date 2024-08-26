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



