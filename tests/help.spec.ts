import {test, expect} from '@playwright/test'

test('there is a developers guide on a Help page', async ({page}) => {
    await page.goto('https://www.redmine.org/')
    await page.locator('a[href="https://www.redmine.org/guide"]').click()

    await expect(page.locator('text="Developer\'s Guide"')).toBeVisible()
    await page.locator('text="Developer\'s Guide"').click()

    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Developer_Guide')
})