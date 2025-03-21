
/**
 * Warning text constants for the application
 */
class WarnText {
    private readonly invalidEmailPassWarningText: string;
    private readonly errorLoginAlertText: string;

    constructor() {
        this.invalidEmailPassWarningText = "Invalid username/password.";
        this.errorLoginAlertText = "Error during login";
    }

    /**
     * Gets the invalid credentials warning text
     * @returns {string} The warning text
     */
    public getInvalidEmailPassWarningText(): string {
        return this.invalidEmailPassWarningText;
    }
     /**
     * Gets the invalid credentials warning text
     * @returns {string} The warning text
     */
     public getloginErrorText(): string {
        return this.errorLoginAlertText;
    }
}

// Export a singleton instance
export default new WarnText();

