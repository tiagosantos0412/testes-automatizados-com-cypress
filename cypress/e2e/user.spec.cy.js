import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    userNameField: '[name=username]',
    passwordField: '[name=password]',
    loginButton: '[type=submit]',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongAlert: '.oxd-alert--error',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    dateField: '.oxd-date-input',
    dateCloseButton: '.--close',
    countrySelection: '.oxd-select-text-input',
    submitSaveButton: "[type='submit']",
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userSuccess.userName)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('Balrog')
    cy.get(selectorList.lastNameField).clear().type('Shadaloo')
    cy.get(selectorList.genericField).eq(3).clear().type('Employ55')
    cy.get(selectorList.genericField).eq(4).clear().type('testeId')
    cy.get(selectorList.genericField).eq(5).clear().type('drive125444')
    cy.get(selectorList.dateField).eq(0).clear().type('2025-25-06')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitSaveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    
  })
  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userFail.userName)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongAlert)
  })
})
