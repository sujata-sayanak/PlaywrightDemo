exports.FormsPage = class FormsPage {

    constructor(page) {
        this.page = page;
        this.fromsTab = page.getByRole('link', { name: 'Forms' });
        this.createFormButton = page.getByRole('button', { name: 'Create form' });
        this.selectDailyReportOption = page.getByText('(Sample) Daily Report').nth(1);
        this.addSignature = page.getByRole('button', { name: 'Add signature' });
        this.selectCanvas = page.locator('canvas');
        this.saveButton = page.getByRole('button', { name: 'Save' })
        this.submitButton = page.getByRole('button', { name: 'Submit', exact: true });
        this.OKConfirmationButton = page.getByTestId('ModalConfirmationFooter__confirmation-button');
        this.formListpage = page.getByRole('list').filter({ hasText: 'Forms(Sample) Daily Report' }).getByRole('link', { name: 'Forms' });
    }

    async createFormAndSubmit() {
        await this.fromsTab.click();
        await this.createFormButton.click();
        await this.selectDailyReportOption.click();
        await this.addSignature.click();
        await this.selectCanvas.click({
            position: {
                x: 181,
                y: 109
            }
        });
        await this.selectCanvas.click({
            position: {
                x: 139,
                y: 105
            }
        });
        await this.selectCanvas.click({
            position: {
                x: 149,
                y: 115
            }
        });
        await this.selectCanvas.click({
            position: {
                x: 205,
                y: 91
            }
        });
        await this.saveButton.click();
        await this.submitButton.click();
        await this.OKConfirmationButton.click();
        await this.formListpage.click();


    }


}