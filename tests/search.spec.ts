import {test, expect } from '@playwright/test'
import exp from 'constants'
import { url } from 'inspector'

test('checks if the search engine works correctly', async ({page}) => {
    await page.goto('https://www.redmine.org/')

    await page.locator('#q').fill('download')
    await page.keyboard.press('Enter')

    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/search?utf8=%E2%9C%93&scope=subprojects&wiki_pages=1&q=download')
})