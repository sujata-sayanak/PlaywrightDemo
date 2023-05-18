exports.ProjectListPage = class ProjectListPage {

    constructor(page) {

        this.page = page
        this.searchField = page.getByTestId('SearchField__input');
        this.projectRow = page.locator("//div[text()='Playwright_Test_Project']");

    }

    async searchAndSelectProject(projectName) {
        await this.searchField.fill(projectName);
        await this.projectRow.click();
    }

}