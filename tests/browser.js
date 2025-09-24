import { browser } from "k6/browser";

export const options = {
  scenarios: {
    ui: {
      executor: "shared-iterations",
      options: {
        browser: { type: "chromium" },
      },
    },
  },
};

export default async function () {
  const page = await browser.newPage();

  // try {
  //   await page.goto("https://quickpizza.grafana.com");
  //   await page.screenshot({ path: "screenshots/screenshot.png" });
  //   await page.locator('[name="pizza-please"]').click();
  //   await page.screenshot({ path: "screenshots/pizzabutton.png" });
  //   await page.waitForNavigation();
  // } finally {
  //   await page.close();
  // }

  try {
    await page.goto("https://quickpizza.grafana.com/login");
    // await page.locator('//input[@id="username"]').type("default");
    // await page.locator('//input[@id="password"]').type("12345678");
    const username = page.locator('[name="username"]');
    await username.type("default");
    const password = page.locator('[name="password"]');
    await password.type("123456781");
    await page.locator('//button[contains(text(),"Sign in")]').click();
    await page.screenshot({ path: "screenshots/pizzabutton.png" });
    await page.waitForNavigation();
  } catch (error) {
    throw new Error(`Test failed: ${error}`);
  }
}
