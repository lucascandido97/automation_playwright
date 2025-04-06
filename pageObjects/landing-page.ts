import { expect, type Locator, type Page } from '@playwright/test';




export class LandingPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;

        this.navBelt = this.page.locator('#nav-belt');
        this.navMain = this.page.locator('#nav-main');

        this.navLogo = this.page.getByLabel(/Amazon.com.br/);
        this.navLocationButton = this.page.locator('#nav-global-location-popover-link');
        this.navSearchField = 

        this.pageContent = this.page.locator('#pageContent');
        this.rhfContainer = this.page.locator('#rhf-container');




    }
}

