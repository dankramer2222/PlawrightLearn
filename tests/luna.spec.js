import { test,expect } from "@playwright/test";



test.describe("describe-test",()=>{
    test("name test",async({page})=>{
        await page.goto("https://magento.softwaretestingboard.com/")
        await page.locator('text= Click Me').click()
        await page.locator('text=Create an Account').click()
        await page.pause()
    })
});
