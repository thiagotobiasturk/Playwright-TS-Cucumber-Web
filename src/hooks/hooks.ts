import { BeforeAll, AfterAll, Before, After, AfterStep, Status } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: true });
});

Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

AfterStep(async function ({ pickle, result }) {
    const img = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" });
    await this.attach(img, "image/png");
});

After(async function ({ pickle, result }) {
    if (result?.status === Status.FAILED) {
        const img = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" });
        await this.attach(img, "image/png");
    }

    await pageFixture.page.close();
    const newPage = await context.newPage();
    pageFixture.page = newPage;
});

AfterAll(async function () {
    await browser.close();
});
