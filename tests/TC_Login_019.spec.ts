import { test, expect } from '../fixtures/ui-fixture';
import DataManager from '../env/dataManager';

/**
 * This class was created and modified by Software QA Engineer Ugur Yaman on March 19, 2025.
 * Test case: Verify that users can access the password reset page
 */
test('Verify Access to Password Reset Page', async ({ pageManager }) => {
  // 1. Navigate to login page
  await pageManager.getLoginPage().loadPage();
  
  // 2. Click on "Forgot your password?" link
  await pageManager.getLoginPage().clickForgotPasswordLink();
  
  // 3. Verify redirection to password reset page
  const currentUrl = await pageManager.getLoginPage().getCurrentUrl();
  expect(currentUrl).toContain(DataManager.resources.RESETPASSWORD_URL);
});