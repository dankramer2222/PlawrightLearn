import { assert } from "console";
import {test,expect} from "playwright/test";

test("Learning selectors",async ({ page }) => {
    // navigate to webpage
    await page.goto("http://127.0.0.1:5500/clickme.html")

    // Selecting by ID ,first you provide #
    await page.locator("#clickButton").click()

    // Selecting by Class first you provide .
    await page.locator(".button-style").click()

    // Selecting by Tag name and class first you proive

    await page.locator('button.button-style').click()

    // Selecting By Atribute value

    await page.locator('[data-action="increment"]').click()

    // Searching by Particular atribute

    await page.locator('[role*="but"]').click()

    // Searching by Text content

    await page.locator('text= Click Me').click()

    // Combine selectors for precision, class and text - find exact  text match

    await page.locator('.button-style:text("Click Me")').click()

    // Find elements containing specific text, has text

    await page.locator('button:has-text("click m")').click()

    // Atribute in text
    await page.locator('[data-action="increment"]:text("Click Me")')

    // Playwright locators https://playwright.dev/docs/locators

    await page.getByText('Click Me').click()

    
    // by role

    await page.getByRole('button', { name: /click me/i }).click();

    // counter assertion,here suppost to be count = 10

    await expect(page.locator('#counter')).toContainText('10')

    await page.pause()
   
});