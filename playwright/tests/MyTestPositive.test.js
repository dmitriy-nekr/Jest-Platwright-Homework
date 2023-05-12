const { test, expect } = require("@playwright/test");
const inputData = require("../user");

test("test", async ({ page }) => {
  await page.goto("https://netology.ru");
  await page.click("text=Войти");
  await page.getByPlaceholder('Email').fill(inputData.login);
  await page.getByPlaceholder('Пароль').fill(inputData.password);
  await page.getByTestId('login-submit-btn').click();
  await expect(page.getByRole('heading', { name: 'Мои курсы и профессии' })).toBeVisible();
 
});

