import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
    await page.goto('/auth/login');
    await page
        .getByPlaceholder('Your email')
        .fill('customer@practicesoftwaretesting.com');
    await page
        .getByPlaceholder('Your password')
        .fill('welcome01');
    await page.locator('.btnSubmit').click();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect(page.getByTestId('page-title')).toHaveText('My account');
    await expect(page.locator('#menu')).toContainText('Jane Doe');

});
