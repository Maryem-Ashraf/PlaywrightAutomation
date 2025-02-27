import { test, expect } from '@playwright/test';

test('soft assertions', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/')

    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')

    await expect.soft(page).toHaveTitle('STORE')



})