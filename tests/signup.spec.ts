import {test, expect } from '@playwright/test';
import userData from '../fixtures/userData.json' assert { type: "json" };

test('signup with valid data', async ({page}) => {
    await page.goto('https://www.redmine.org/account/register')
    await page.fill('#user_login', userData.valid_credentials.email)
    await page.fill('#user_password', userData.valid_credentials.password)
    await page.fill('#user_password_confirmation', userData.valid_credentials.password)
    await page.fill('#user_firstname', userData.valid_credentials.first_name)
    await page.fill('#user_lastname', userData.valid_credentials.last_name)
    await page.fill('#user_mail', userData.valid_credentials.email)

    await page.locator('input[value="Submit"]').click()

    // assert
    // await expect(page.locator('#flash_notice')).toHaveText('Account was successfully created. An email containing the instructions to activate your account was sent to jesus123@christ.com.')
    await expect(page.locator('#errorExplanation > ul > li').nth(0)).toHaveText('Email has already been taken')
    await expect(page.locator('#errorExplanation > ul > li').nth(1)).toHaveText('Login has already been taken')
})

test('errors arised when apply form with no data', async ({page}) => {
    await page.goto('https://www.redmine.org/account/register')

    await page.locator('input[value="Submit"]').click()

    await expect(page.locator('#errorExplanation')).toBeVisible()
    await expect(page.locator('#errorExplanation>ul>li').nth(0)).toHaveText('Email cannot be blank')
    await expect(page.locator('#errorExplanation>ul>li').nth(1)).toHaveText('Login cannot be blank')
    await expect(page.locator('#errorExplanation>ul>li').nth(2)).toHaveText('First name cannot be blank')
    await expect(page.locator('#errorExplanation>ul>li').nth(3)).toHaveText('Last name cannot be blank')
    await expect(page.locator('#errorExplanation>ul>li').nth(4)).toHaveText('Password is too short (minimum is 8 characters)')
    



})
