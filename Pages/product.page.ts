import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from "./Fragments/headerFragment.page";

export class ProductPage {
    page: Page;
    header: HeaderFragment;
    productName: Locator;
    productPrice: Locator;
    addToCartBtn: Locator;
    addToFavBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productName = this.page.getByTestId('product-name');
        this.productPrice = this.page.getByTestId('unit-price');
        this.addToCartBtn = this.page.getByTestId('add-to-cart');
        this.addToFavBtn = this.page.getByTestId('add-to-favorites');
        
    }
}