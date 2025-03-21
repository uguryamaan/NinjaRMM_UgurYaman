
/**
 * Page environment constants for the application
 */
class PageEnvironment {
    private readonly loginPageTitle: string;

    constructor() {
        this.loginPageTitle = "NinjaOne";
    }

    /**
     * Gets the login page title
     * @returns {string} The login page title
     */
    public getLoginPageTitle(): string {
        return this.loginPageTitle;
    }
}

// Export a singleton instance
export default new PageEnvironment();

