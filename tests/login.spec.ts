import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.js';


test('has title', async ({ page }) => {
    await page.goto('https://www.redmine.org/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Redmine/);
  });

test('login with valid cred', async ({page}) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto()
  await loginPage.login('emv23611', '12345678')

  await expect(page).toHaveURL('https://www.redmine.org/my/page');

  await loginPage.logout()
  await expect(page).toHaveURL('https://www.redmine.org/')
});