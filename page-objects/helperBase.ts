import { Page } from "@playwright/test"

export class HelperBase {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to the specified URL and waits for the page to load
     * @param {string} url - The URL to navigate to
     * @returns {Promise<void>}
     */
    protected async loadPage(url: string): Promise<void> {
        await this.page.goto(url);
        await this.page.waitForLoadState('load');
    }

    /**
     * Closes the current page
     * @returns {Promise<void>}
     */
    protected async closePage(): Promise<void> {
        await this.page.close();
    }

    /**
     * Gets the current page object
     * @returns {Page} The current page object
     */
    protected getPage(): Page {
        return this.page;
    }
}