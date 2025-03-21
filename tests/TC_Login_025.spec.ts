import { test, expect } from '../fixtures/ui-fixture';
import DataManager from '../env/dataManager';

/**
 * This class was created and modified by Software QA Engineer Ugur Yaman on March 20, 2025.
 * Test case: Verify that login fails with empty password field
 */
test('Login Test with an Empty Password', async ({ pageManager }) => {
    // 1. Navigate to login page
    await pageManager.getLoginPage().loadPage();
    await expect(pageManager.getLoginPage().getLoginForm()).toBeVisible();

    // 2. Leave password field empty and enter valid email
    const validEmail = DataManager.testEnvironment.getValidEmail();
    await pageManager.getLoginPage().getEmailInput().fill(validEmail);
    console.log('Login attempt with empty Password and valid email');

    // 3. Click "Sign In" button
    await pageManager.getLoginPage().clickSignInButton();

    // 4. Verify error message is visible
    const errorMessage = pageManager.getLoginPage().getErrorMessage();
    await expect(errorMessage).toBeVisible();
    
    // 5. Verify error message content
    const errorText = await errorMessage.textContent();
    expect(errorText).toContain(DataManager.warnText.getloginErrorText());

    // 6. Verify user remains on login page
    const currentUrl = await pageManager.getLoginPage().getCurrentUrl();
    expect(currentUrl).toContain(DataManager.resources.LOGIN_URL);
});