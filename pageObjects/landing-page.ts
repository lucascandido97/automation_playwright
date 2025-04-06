import { expect, type Locator, type Page } from '@playwright/test';




export class LandingPage {
    readonly page: Page;
    readonly navBelt: Locator;
    readonly navLogo: Locator;
    readonly navLocationButton: Locator;
    readonly navMain: Locator;
    readonly navSearchBar: Locator;
    readonly pageContent: Locator;
    readonly rhfContainer: Locator; 

    constructor(page: Page) {
        this.page = page;

        // Nav Belt: Left
        this.navLogo = this.page.getByRole('link', {
            name: /Amazon/
        });
        this.navLocationButton = this.page.getByRole('button', {
            name: /Deliver to/
        });

        // Nav Belt: Search
        this.navDropdownSearch = this.page.locator('#nav-search-dropdown-card');

        this.navCombobox = this.page.getByRole('combobox', {
            name: 'Search in'              
        });

        this.navSearchBox = this.page.getByRole('searchbox', {
            name: 'Search Amazon'
        });

        this.navGoButton = this.page.getByRole('button', {
            name: 'Go'
        });

        // Nav Belt: Right

        

        this.navMain = this.page.locator('#nav-main');

        this.navSearchField = 

        this.pageContent = this.page.locator('#pageContent');
        this.rhfContainer = this.page.locator('#rhf-container');




    }
}

