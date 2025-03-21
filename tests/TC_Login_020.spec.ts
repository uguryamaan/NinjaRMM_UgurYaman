import { test, expect } from '../fixtures/ui-fixture';
import DataManager from '../env/dataManager';

/**
 * This class was created and modified by Software QA Engineer Ugur Yaman on March 19, 2025.
 * Test case: Verify that new users can access the registration page
 */
test('Verify Access to the Registration Page', async ({ pageManager }) => {
  // 1. Navigate to login page
  await pageManager.getLoginPage().loadPage();
  
  // 2. Click on "Do not have an account?" link
  await pageManager.getLoginPage().getDoNotHaveAccountLink().click();
  
  // 3. Verify redirection to registration page
  const currentUrl = await pageManager.getLoginPage().getCurrentUrl();
  expect(currentUrl).toContain(DataManager.resources.REGISTER_URL);
});