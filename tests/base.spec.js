// import { test, expect } from '@playwright/test';
// test('test', async ({ page }) => {
//     await page.goto('https://practice.expandtesting.com/inputs');
//     await page.getByLabel('Input: Number').click();
//     await page.getByLabel('Input: Number').fill('12334');
//     await page.getByLabel('Input: Text').click();
//     await page.getByLabel('Input: Text').fill('ufyguygdf');
//     await page.getByLabel('Input: Password').click();
//     await page.getByLabel('Input: Password').fill('hjdfhfd');
//     await page.getByLabel('Input: Text').click();
//     await expect(page.getByLabel('Input: Number')).toHaveValue('12334');
//     await expect(page.getByLabel('Input: Text')).toHaveValue('ufyguygdf');
//     await page.getByLabel('Input: Date').fill('2024-03-22');
//   });