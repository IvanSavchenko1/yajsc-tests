import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login.page';
import { HomePage } from '../Pages/home.page';
import { AccountPage } from '../Pages/account.page';
import { ProductPage } from '../Pages/product.page';

test('Verify login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const accountPage = new AccountPage(page);

    await homePage.goto();
    await homePage.header.signIn.click();
    await loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');

    await expect(page).toHaveURL('/account');
    await expect(accountPage.pageTitle).toHaveText('My account', { timeout: 10_000 });
    await expect(accountPage.header.accountName).toContainText('Jane Doe');
});

test('Verify user can view product details', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    const productTitle: string = 'Combination Pliers';

    await homePage.goto();
    await homePage.clickOnProduct(productTitle);

    await expect(page).toHaveURL(/\/product\/.+$/);
    await expect(productPage.productName).toHaveText(productTitle);
    await expect(productPage.productPrice).toHaveText('14.15');
    await expect(productPage.addToCartBtn).toBeVisible();
    await expect(productPage.addToFavBtn).toBeVisible();
});