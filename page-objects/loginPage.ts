import { Page, Locator, FrameLocator } from '@playwright/test';
import { expect } from '@playwright/test';
import { HelperBase } from './helperBase';
import { Resources } from '../env/resources';
import { LoginBody } from '../pojos/loginBody';

export class LoginPage extends HelperBase {
    // Locators
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly invalidEmailPassWarningText: Locator;
    private readonly errorMessage: Locator;
    private readonly keepMeCheckbox: Locator;
    private readonly signInButton: Locator;
    private readonly forgotPasswordLink: Locator;
    private readonly doNotHaveAccountLink: Locator;
    private readonly loginForm: Locator;
    private readonly logo: Locator;
    private readonly contactUsLink: Locator;
    private readonly copyrightText: Locator;
    private readonly recaptchaFrame: Locator;
    private readonly registrationOrg: Locator;

    constructor(page: Page) {
        super(page);
        
        // Initialize locators
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.getByRole('button', { name: 'Sign In' });
        this.invalidEmailPassWarningText = page.locator('.alert.alert-danger');
        this.errorMessage = page.getByText('Error during login');
        this.keepMeCheckbox = page.getByText('Keep me signed in');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
        this.forgotPasswordLink = page.getByText('Forgot your password?');
        this.doNotHaveAccountLink = page.getByRole('link', { name: 'Do not have an account?' });
        this.loginForm = page.locator('form');
        this.logo = page.getByText('logo');
        this.contactUsLink = page.getByText('Contact us');
        this.copyrightText = page.getByText('NinjaOne LLC © 2014-');
        this.recaptchaFrame = page.locator('iframe[title="reCAPTCHA"]').first();
        this.registrationOrg = page.getByText('RegistrationOrganizationFirst');
    }

    /**
     * Loads the login page
     */
    public async loadPage(): Promise<void> {
        await this.page.goto(Resources.LOGIN_URL);
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle', { timeout: 15000 });
        await this.page.waitForSelector('form', { timeout: 10000 });
    }
  
    /**
     * Clicks the sign in button
     */
    public async clickSignInButton(): Promise<void> {
        await this.signInButton.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle', { timeout: 10000 });
    }

    /**
     * Clicks the "Keep me signed in" checkbox
     */
    public async clickKeepMeCheckbox(): Promise<void> {
        await this.keepMeCheckbox.click();
    }

    /**
     * Clicks the forgot password link
     */
    public async clickForgotPasswordLink(): Promise<void> {
        await this.forgotPasswordLink.click();
    }

     /**
     * Performs login with given credentials
     * @param email - The email to login with
     * @param password - The password to login with
     */
    public async fillLoginForm(user:LoginBody):Promise<void>{
        await this.emailInput.fill(user.getEmail());
        await this.passwordInput.fill(user.getPassword());
    }


    // Getter methods
    public getEmailInput(): Locator {
        return this.emailInput;
    }

    public getPasswordInput(): Locator {
        return this.passwordInput;
    }

    public getLoginButton(): Locator {
        return this.loginButton;
    }

    public getSignInButton(): Locator {
        return this.signInButton;
    }

    public getKeepMeCheckbox(): Locator {
        return this.keepMeCheckbox;
    }

    public getForgotPasswordLink(): Locator {
        return this.forgotPasswordLink;
    }

    public getDoNotHaveAccountLink(): Locator {
        return this.doNotHaveAccountLink;
    }

    public getContactUsLink(): Locator {
        return this.contactUsLink;
    }

    public getCopyrightText(): Locator {
        return this.copyrightText;
    }

    public getRecaptchaFrame(): Locator {
        return this.recaptchaFrame;
    }

    public getRegistrationOrg(): Locator {
        return this.registrationOrg;
    }

    public getLoginForm(): Locator {
        return this.loginForm;
    }

    public getLogo(): Locator {
        return this.logo;
    }

    public getErrorMessage(): Locator {
        return this.errorMessage.first();
    }

    public getInvalidEmailPassWarningText(): Locator {
        return this.invalidEmailPassWarningText;
    }

    /**
     * Checks if the login form is visible
     * @returns Promise<boolean> - Whether the login form is visible
     */
    public async isLoginFormVisible(): Promise<boolean> {
        return await this.loginForm.isVisible();
    }

    /**
     * Checks if the error message is visible
     * @returns Promise<boolean> - Whether the error message is visible
     */
    public async isErrorMessageVisible(): Promise<boolean> {
        return await this.errorMessage.isVisible();
    }

    /**
     * Gets the current URL of the page
     * @returns Promise<string> - The current URL
     */
    public async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }
}