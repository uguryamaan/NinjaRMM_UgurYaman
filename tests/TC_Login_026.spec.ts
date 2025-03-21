import { test, expect } from '../fixtures/ui-fixture';
import DataManager from '../env/dataManager';

/**
 * This class was created and modified by Software QA Engineer Ugur Yaman on March 20, 2025.
 * Test case: Verify that login fails with both empty username and password fields
 */
test('Verify Unsuccessful Login with Empty Username and Password Fields', async ({ pageManager }) => {
    // 1. Navigate to login page
    await pageManager.getLoginPage().loadPage();
    await expect(pageManager.getLoginPage().getLoginForm()).toBeVisible();

    console.log('Login attempt with empty Password and empty email');

    // 2. Click "Sign In" button
    await pageManager.getLoginPage().clickSignInButton();

    // 3. Verify error message is visible
    const errorMessage = pageManager.getLoginPage().getErrorMessage();
    await expect(errorMessage).toBeVisible();
    
    // 4. Verify error message content
    const errorText = await errorMessage.textContent();
    expect(errorText).toContain(DataManager.warnText.getloginErrorText());

    // 5. Verify user remains on login page
    const currentUrl = await pageManager.getLoginPage().getCurrentUrl();
    expect(currentUrl).toContain(DataManager.resources.LOGIN_URL);
});