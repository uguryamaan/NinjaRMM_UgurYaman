import { test as baseTest, Page } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager'; 


type UiFixtures = {
  pageManager: PageManager;
};

export const test = baseTest.extend<UiFixtures>({
  pageManager: async ({page}, use) => {
    
    const pageManager = new PageManager(page);
    await use(pageManager); 
  },

});

export { expect } from '@playwright/test';


