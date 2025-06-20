import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    userNameField: '[name=username]',
    passwordField: '[name=password]',
    loginButton: '[type=submit]',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongAlert: '.oxd-alert--error'
  }

  it('Login success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userSuccess.userName)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })
  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userFail.userName)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongAlert)
  })
})
