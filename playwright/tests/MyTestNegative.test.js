const { test, expect } = require("@playwright/test");

test("test", async ({ page }) => {
    await page.goto("https://netology.ru");
    await page.click("text=Войти");
    await page.getByPlaceholder('Email').fill("dimannekr@mail.ru");
    await page.getByPlaceholder('Пароль').fill("Password");
    await page.getByTestId('login-submit-btn').click();
    await expect(page.getByTestId('login-error-hint')).toBeVisible();
    
});