class LoginPage {
    selectorsList(){
        const selectors = {
            userNameField: '[name=username]',
            passwordField: '[name=password]',
            loginButton: '[type=submit]',
            wrongAlert: '.oxd-alert--error',
        }
        return selectors
    }

    accessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithAnyUser(userName, password){
        cy.get(this.selectorsList().userNameField).type(userName)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage