const { chromium } = require("playwright");
const inputData = require("./user");
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
  await page.getByPlaceholder('Email').fill(inputData.login);
  await page.getByPlaceholder('Пароль').fill(inputData.password);
  await page.getByTestId('login-submit-btn').click();
  await expect(page.getByRole('heading', { name: 'Мои курсы и профессии' })).toBeVisible();
  await browser.close();
})();

