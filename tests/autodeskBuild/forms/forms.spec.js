import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://acc-staging.autodesk.com/projects');
  await page.goto('https://accounts-staging.autodesk.com/logon?resume=%2Fas%2Fwi90ebK04f%2Fresume%2Fas%2Fauthorization.ping&spentity=null');
  await page.goto('https://accounts-staging.autodesk.com/logon?resume=%2Fas%2Fwi90ebK04f%2Fresume%2Fas%2Fauthorization.ping&spentity=null#username');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('acs-postman-tests-admin-1@d3etcfei.mailosaur.net');
  await page.getByRole('button', { name: 'Next button' }).click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('postman1');
  await page.getByRole('button', { name: 'Sign in button' }).click();
  await page.getByTestId('SearchField__input').click();
  await page.getByTestId('SearchField__input').fill('Playwright_Test_Project');
  await page.getByTestId('SearchField__input').press('Enter');
  await page.getByRole('link', { name: 'Playwright_Test_Project Build ACS Automation Testing Account - STG - Test 7118 - Test 6020 Today at 16:00' }).click();
  await page.getByTestId('QuickAccess:ca99a231-3cd7-4f33-98a0-1334a0a7858b').getByRole('button', { name: 'Build' }).click();
  await page.getByRole('link', { name: 'Playwright_Test_Project Build ACS Automation Testing Account - STG - Test 7118 - Test 6020 Today at 16:00' }).click();
  await page.getByRole('link', { name: 'Playwright_Test_Project Build ACS Automation Testing Account - STG - Test 7118 - Test 6020 Today at 16:00' }).click();
  await page.getByRole('button', { name: 'Build' }).click();
  await page.getByTestId('quick-access-product-build').click();
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.goto('https://acc-staging.autodesk.com/build/forms/projects/ca99a231-3cd7-4f33-98a0-1334a0a7858b');
});