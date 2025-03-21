import { Page } from '@playwright/test';
import { LoginPage } from './loginPage';

export class PageManager {
    private readonly page: Page;
    private readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
    }

    /**
     * Returns the page object for the login page
     * @returns {LoginPage} Page object for the login page
     */
    public getLoginPage(): LoginPage {
        return this.loginPage;
    }

    /**
     * Returns the Playwright Page object
     * @returns {Page} Playwright Page object
     */
    public getPage(): Page {
        return this.page;
    }
}