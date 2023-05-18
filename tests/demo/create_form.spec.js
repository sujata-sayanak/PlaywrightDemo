import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/loginPage'
import { ProjectListPage } from '../../pages/ProjectListPage'
import { FormsPage } from '../../pages/formsPage'

test.describe('Forms Smoke Test Suite', () => {


    test.beforeEach(async ({ page }) => {
        const Login = new LoginPage(page);
        const ProjectList = new ProjectListPage(page);

        await Login.launchBuild();
        await Login.login('acs-postman-tests-admin-1@d3etcfei.mailosaur.net', 'postman1');
        await ProjectList.searchAndSelectProject('Playwright_Test_Project');
    })

    test.afterAll(async ({ page }) => {

        await page.close();
    })

    test('Navigate to Forms, create form and submit', async ({ page }) => {
        const formsPage = new FormsPage(page);
        test.slow();
        await formsPage.createFormAndSubmit();

    })


})
