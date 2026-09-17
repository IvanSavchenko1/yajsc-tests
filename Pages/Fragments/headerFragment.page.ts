import { Locator, Page } from "@playwright/test";

export class HeaderFragment {
    page: Page;
    signIn: Locator;
    accountName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signIn = this.page.getByTestId('nav-sign-in');
        this.accountName = this.page.getByTestId('nav-menu')
    }
}