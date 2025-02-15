import { Page, expect } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private usernameInput;
    private passwordInput;
    private loginButton;
    private logoutButton;
    private lostPasswordButton;
    private mailInput;
    private submitButtonToRecoverEmail;
    private errorUnknownUser;
    private notification;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-submit');
        this.logoutButton = page.locator('[href="/logout"]')
        this.lostPasswordButton = page.locator('[href="/account/lost_password"]')
        this.mailInput = page.locator('#mail')
        this.submitButtonToRecoverEmail = page.locator('//input[@value="Submit"]')
        this.errorUnknownUser = page.locator('#flash_error')
        this.notification = page.locator('#flash_notice')
      }
    
    async goto() {
        await this.page.goto('https://www.redmine.org/login');
      }
    
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async checkErrorMessage(): Promise<string> {
        return await this.page.locator('.error-message').innerText();
    }

    async logout() {
        await this.logoutButton.click()    
    }
    async clickOnForgotPassword() {
        await this.lostPasswordButton.click()
    }
    async emailInput(email: string) {
        await this.mailInput.fill(email)
        await this.submitButtonToRecoverEmail.click()
    }
    async checkErrorRecoverPassword(): Promise<string> {
        return await this.errorUnknownUser.innerText()
    }
    async checkNotification() {
        return await this.notification.innerText()
    }
    

}    