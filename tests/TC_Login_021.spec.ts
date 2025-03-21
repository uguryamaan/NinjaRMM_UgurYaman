import { test, expect } from '../fixtures/ui-fixture';
import DataManager from '../env/dataManager';

/**
 * This class was created and modified by Software QA Engineer Ugur Yaman on March 20, 2025.
 * Test case: Verify that login fails with invalid username
 */
test('Verify Unsuccessful Login with Invalid Username', async ({ pageManager }) => {
    // 1. Navigate to login page
    await pageManager.getLoginPage().loadPage();
    await expect(pageManager.getLoginPage().getLoginForm()).toBeVisible();

    // 2. Enter invalid email and valid password
    const loginBody = DataManager.testData.getFakeLoginBody();
    console.log('Login attempt with invalid email:', loginBody.getEmail());
    await pageManager.getLoginPage().fillLoginForm(loginBody);

    // 3. Click "Sign In" button
    await pageManager.getLoginPage().clickSignInButton();

    // 4. Wait for page load
    await pageManager.getPage().waitForLoadState('networkidle');

    // 5. Verify error message is visible
    const errorMessage = pageManager.getLoginPage().getInvalidEmailPassWarningText();
    await expect(errorMessage).toBeVisible();
    
    // 6. Verify error message content
    const errorText = await errorMessage.textContent();
    expect(errorText).toContain(DataManager.warnText.getInvalidEmailPassWarningText());

    // 7. Verify user remains on login page
    const currentUrl = await pageManager.getLoginPage().getCurrentUrl();
    expect(currentUrl).toContain(DataManager.resources.LOGIN_URL);
});