import { test, expect } from '../fixtures/ui-fixture';
import DataManager from '../env/dataManager';

/**
 * This class was created and modified by Software QA Engineer Ugur Yaman on March 19, 2025.
 * Test suite for verifying the functionality of login page elements
 * This suite checks the clickability and functionality of all input fields and buttons
 */
test.describe('Verify Clickability of Fields and Buttons on the Login Page', () => {
    let loginPage;

    // Setup before each test
    test.beforeEach(async ({ pageManager }) => {
        loginPage = pageManager.getLoginPage();
        await loginPage.loadPage();
        await expect(loginPage.getLoginForm()).toBeVisible();
    });

    /**
     * Test case: Email field functionality
     * Verifies that the email input field is visible, enabled, and accepts input
     */
    test('should verify email field functionality', async ({ pageManager }) => {
        const emailInput = loginPage.getEmailInput();
        await expect(emailInput).toBeVisible();
        await expect(emailInput).toBeEnabled();
        await emailInput.click();
        const email:string = DataManager.testEnvironment.getValidEmail();
        await emailInput.fill(email);
        await expect(emailInput).toHaveValue(email);
    });

    /**
     * Test case: Password field functionality
     * Verifies that the password input field is visible, enabled, and accepts input
     */
    test('should verify password field functionality', async ({ pageManager }) => {
        const passwordInput = loginPage.getPasswordInput();
        await expect(passwordInput).toBeVisible();
        await expect(passwordInput).toBeEnabled();
        await passwordInput.click();
        const password:string = DataManager.testEnvironment.getValidPassword();
        await passwordInput.fill(password);
        await expect(passwordInput).toHaveValue(password);
    });

    /**
     * Test case: Keep me signed in checkbox functionality
     * Verifies that the checkbox is visible, enabled, and can be checked
     */
    test('should verify keep me signed in checkbox functionality', async ({ pageManager }) => {
        const keepMeCheckbox = loginPage.getKeepMeCheckbox();
        await expect(keepMeCheckbox).toBeVisible();
        await expect(keepMeCheckbox).toBeEnabled();
        await keepMeCheckbox.click();
        await expect(keepMeCheckbox).toBeChecked();
    });

    /**
     * Test case: ReCAPTCHA iframe presence
     * Verifies that the reCAPTCHA iframe is present and has the correct source
     */
    test('should verify reCAPTCHA iframe presence', async () => {
        const recaptchaFrame = loginPage.getRecaptchaFrame();
        await expect(recaptchaFrame).toBeVisible({ timeout: 30000 });
        const iframeSrc = await recaptchaFrame.getAttribute('src');
        expect(iframeSrc).toContain('recaptcha.net/recaptcha');
    });
});