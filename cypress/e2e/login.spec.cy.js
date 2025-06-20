describe('Orange HRM Tests', () => {

  const selectorList = {
    userNameField: '[name=username]',
    passwordField: '[name=password]',
    loginButton: '[type=submit]',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongAlert: '.oxd-alert--error'
  }

  it('Login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userNameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userNameField).type('teste')
    cy.get(selectorList.passwordField).type('teste')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongAlert)
  })
})