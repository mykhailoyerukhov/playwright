import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.js';

test('succesfully sends recover link to email', async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto();
    await loginPage.clickOnForgotPassword();
    await loginPage.emailInput('mykhailo.yerukhov@gmail.com');
    await loginPage.checkNotification();
    // await expect(loginPage.this.notification).contain('An email with instructions to choose a new password has been sent to you.')
    await expect(page).toHaveURL('https://www.redmine.org/login')
  })
  
  test('recover email with invalid credentials', async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.clickOnForgotPassword()
    await loginPage.emailInput('35345fdgsdfv');
    await loginPage.checkErrorRecoverPassword()
  })