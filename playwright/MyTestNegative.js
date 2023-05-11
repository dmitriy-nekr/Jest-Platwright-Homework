const { chromium } = require("playwright");
const { expect } = require("@playwright/test");

(async () => {
    const browser = await chromium.launch({
      headless: false,
      slowMo: 500,
      devtools: false
    });
    const page = await browser.newPage();
    await page.goto("https://netology.ru");
    await page.click("text=Войти");
    await page.getByPlaceholder('Email').fill("dimannekr@mail.ru");
    await page.getByPlaceholder('Пароль').fill("Password");
    await page.getByTestId('login-submit-btn').click();
    await expect(page.getByTestId('login-error-hint')).toBeVisible();
    await browser.close();
  })();