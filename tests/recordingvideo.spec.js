import { test, expect } from '@playwright/test';

test('videorecording', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Maryem');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('2480');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});

//in config file, add screenshot and video 'on' 