import { expect, type Locator, type Page } from '@playwright/test';

export class SignUpClass {
    readonly page: Page;
    readonly loginField: Locator;
    readonly passwordField: Locator;
    readonly passwordConfirmationField: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly hideEmailBtn: Locator;
    readonly organizationField: Locator;
    readonly locationField: Locator;
    readonly ircNick: Locator;
    readonly submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginField = page.locator('#user_login')
        this.passwordField = page.locator('#user_password')
        this.passwordConfirmationField = page.locator('#user_password_confirmation')
        this.firstNameField = page.locator('#user_firstname')
        this.lastNameField = page.locator('user_lastname')
        this.emailField = page.locator('#user_mail')
        this.hideEmailBtn = page.locator('#pref_hide_mail')
        this.organizationField = page.locator('#user_custom_field_values_5')
        this.locationField = page.locator('#user_custom_field_values_6')
        this.ircNick = page.locator('#user_custom_field_values_3')
        this.submitBtn = page.locator('input[value="Submit"]')
    }

    async gotoRegisterPage() {
        await this.page.goto('https://www.redmine.org/account/register')
    }
    async fillRegistrationForm() {
        await this.loginField
    }

}