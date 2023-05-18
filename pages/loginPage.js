exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username = page.getByPlaceholder('name@example.com')
        this.next_button = page.getByRole('button', { name: 'Next button' })
        this.password = page.getByLabel('Password')
        this.sign_in_button = page.getByRole('button', { name: 'Sign in button' })

    }

    async launchBuild(){
        await this.page.goto('https://acc-staging.autodesk.com/projects');
    }

    async login(username, password){
         await this.username.fill(username)
         await this.next_button.click()
         await this.password.fill(password)
         await  this.sign_in_button.click()

    }

}