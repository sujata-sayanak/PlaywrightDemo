import {test, expect, chromium} from '@playwright/test'

// test('Login to build', async ({page}) => {
//     await page.goto('https://acc-staging.autodesk.com/') 
//     await expect(page).toHaveTitle('Sign in')
// })

test('Login to build and navigate to forms', async ({ page }) => {
  await page.goto('https://acc-staging.autodesk.com/projects');
  //await page.goto('https://accounts-staging.autodesk.com/logon?resume=%2Fas%2FrrsVE5Evg8%2Fresume%2Fas%2Fauthorization.ping&spentity=null');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('acs-postman-tests-admin-1@d3etcfei.mailosaur.net');
  await page.getByRole('button', { name: 'Next button' }).click();
  await page.getByLabel('Password').fill('postman1');
  await page.getByRole('button', { name: 'Sign in button' }).click();
  await expect(page).toHaveTitle('Autodesk Construction Cloud');
  await page.getByTestId('SearchField__input').click();
  await page.getByTestId('SearchField__input').fill('Playwright_Test_Project');
  await page.locator("//div[text()='Playwright_Test_Project']").click();
  await expect(page).toHaveTitle('Home - Autodesk Build');
  await page.getByRole('link', { name: 'Forms' }).click();
  await expect(page).toHaveTitle('Forms - Autodesk Build');
  // await page.getByTestId('TopNavigation__user').click();
  // await page.getByRole('button', { name: 'Sign out' }).click();
  // await expect(page).toHaveTitle('Sign in');
});


test.only('Login to build and navigate to forms, using browser context', async () => {
  const browser = await chromium.launch({
      slowMo: 10,
      headless: false
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: {width: 1920, height:1080}
    }
  });

  const page = await context.newPage();

  await page.goto('https://acc-staging.autodesk.com/projects');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('acs-postman-tests-admin-1@d3etcfei.mailosaur.net');
  await page.getByRole('button', { name: 'Next button' }).click();
  await page.getByLabel('Password').fill('postman1');
  await page.getByRole('button', { name: 'Sign in button' }).click();
  await expect(page).toHaveTitle('Autodesk Construction Cloud');
  await page.getByTestId('SearchField__input').click();
  await page.getByTestId('SearchField__input').fill('Playwright_Test_Project');
  await page.locator("//div[text()='Playwright_Test_Project']").click();
  await expect(page).toHaveTitle('Home - Autodesk Build');
  await page.getByRole('link', { name: 'Forms' }).click();
  await expect(page).toHaveTitle('Forms - Autodesk Build');
  await expect(page.getByText('Forms', { exact: true }).nth(1), {timeout:5000}).toBeVisible;
  // await expect(page).toHaveScreenshot();
  await context.close();

  // await page.getByTestId('TopNavigation__user').click();
  // await page.getByRole('button', { name: 'Sign out' }).click();
  // await expect(page).toHaveTitle('Sign in');
});