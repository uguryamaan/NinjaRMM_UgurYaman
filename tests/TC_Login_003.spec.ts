import { test, expect } from '../fixtures/ui-fixture';
import DataManager from '../env/dataManager';

/**
 * This class was created and modified by Software QA Engineer Ugur Yaman on March 19, 2025.
 * Test case: Verify successful login with valid credentials and MFA redirection
 */
test('Verify Successful Login with a Valid Username and Password ', async ({ pageManager }) => {
    // 1. Navigate to login page
    await pageManager.getLoginPage().loadPage();
    await pageManager.getPage().waitForTimeout(1000); // 1 saniye bekle
    await expect(pageManager.getLoginPage().getLoginForm()).toBeVisible();

    // 2. Enter valid email and valid password
    const loginBody = DataManager.testData.getValidLoginBody();
    console.log('Login attempt with valid email:', loginBody.getEmail());
    await pageManager.getLoginPage().fillLoginForm(loginBody);
    await pageManager.getPage().waitForTimeout(1000); // 1 saniye bekle

    // 3. Click "Sign In" button
    await pageManager.getLoginPage().clickSignInButton();
    await pageManager.getPage().waitForTimeout(1000); // 1 saniye bekle

    // 4. Wait for page load
    await pageManager.getPage().waitForLoadState('networkidle');
    await pageManager.getPage().waitForTimeout(1000); 

    // 5. Verify redirection to MFA page
    const currentUrl = await pageManager.getLoginPage().getCurrentUrl();
    expect(currentUrl).toContain("/mfa");
});