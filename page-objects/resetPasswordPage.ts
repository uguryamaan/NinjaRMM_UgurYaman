import { Page, Locator } from '@playwright/test';
import { HelperBase } from './helperBase';

export class ResetPasswordPage extends HelperBase {
    // Locators
    private readonly resetPasswordTitle: Locator;
    private readonly resetPasswordEmailInput: Locator;
    private readonly resetPasswordButton: Locator;
    private readonly backToLoginLink: Locator;

    constructor(page: Page) {
        super(page);
        
        // Initialize locators
        this.resetPasswordTitle = page.getByText('Reset Password');
        this.resetPasswordEmailInput = page.locator('input[name="email"]');
        this.resetPasswordButton = page.getByRole('button', { name: 'Reset Password' });
        this.backToLoginLink = page.getByText('Back to Login');
    }

    /**
     * Checks if the reset password page title is visible
     */
    public async isResetPasswordTitleVisible(): Promise<boolean> {
        return await this.resetPasswordTitle.isVisible();
    }

    /**
     * Fills the reset password form
     * @param email - Email address to use for reset
     */
    public async fillResetPasswordForm(email: string): Promise<void> {
        await this.resetPasswordEmailInput.fill(email);
    }

    /**
     * Clicks the reset password button
     */
    public async clickResetPasswordButton(): Promise<void> {
        await this.resetPasswordButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks the back to login link
     */
    public async clickBackToLoginLink(): Promise<void> {
        await this.backToLoginLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    // Getter methods
    public getResetPasswordTitle(): Locator {
        return this.resetPasswordTitle;
    }

    public getResetPasswordEmailInput(): Locator {
        return this.resetPasswordEmailInput;
    }

    public getResetPasswordButton(): Locator {
        return this.resetPasswordButton;
    }

    public getBackToLoginLink(): Locator {
        return this.backToLoginLink;
    }
} 