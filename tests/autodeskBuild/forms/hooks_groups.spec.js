import { test, expect } from '@playwright/test'

test.describe('Forms Smoke Test Suite', () => {


    test.beforeEach(async ({ page }) => {

        await page.goto('https://acc-staging.autodesk.com/projects');

        await page.getByPlaceholder('name@example.com').fill('acs-postman-tests-admin-1@d3etcfei.mailosaur.net');
        await page.getByRole('button', { name: 'Next button' }).click();
        await page.getByLabel('Password').fill('postman1');
        await page.getByRole('button', { name: 'Sign in button' }).click();
    })

    test.afterAll(async({page}) => {

        await page.close();
    })

    test('Navigate to Forms, create form and submit', async ({ page }) => {
        test.slow();
        await page.getByTestId('SearchField__input').fill('Playwright_Test_Project');
        await page.locator("//div[text()='Playwright_Test_Project']").click();
        await page.getByRole('link', { name: 'Forms' }).click();
        await page.getByRole('button', { name: 'Create form' }).click();
        await page.getByText('(Sample) Daily Report').nth(1).click();
        // await page.locator('#test-report-title').click();
        // await page.locator('#test-report-title').fill('Test Form 1');
        await page.getByRole('button', { name: 'Add signature' }).click();
        await page.locator('canvas').click({
            position: {
                x: 181,
                y: 109
            }
        });
        await page.locator('canvas').click({
            position: {
                x: 139,
                y: 105
            }
        });
        await page.locator('canvas').click({
            position: {
                x: 149,
                y: 115
            }
        });
        await page.locator('canvas').click({
            position: {
                x: 205,
                y: 91
            }
        });
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Submit', exact: true }).click();
        // await expect(page).toHaveScreenshot();
        await page.getByTestId('ModalConfirmationFooter__confirmation-button').click();
        await page.getByRole('list').filter({ hasText: 'Forms(Sample) Daily Report' }).getByRole('link', { name: 'Forms' }).click();
    })


})
