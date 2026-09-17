import { Page } from "@playwright/test";
import { HeaderFragment } from "./Fragments/headerFragment.page";

export class HomePage {
    page: Page;
    header: HeaderFragment;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        
    }

    async goto() {
        await this.page.goto('/');
    }

    async clickOnProduct(name: string) {
        await this.page
            .getByTestId('product-name')
            .filter({ hasText: name })
            .click()
    }
}