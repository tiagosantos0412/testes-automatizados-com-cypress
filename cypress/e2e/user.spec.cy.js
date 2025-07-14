import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import Dashboard from '../pages/dashboard'
import NavBar from '../pages/navBar'

const loginPage = new LoginPage()
const dashboard = new Dashboard()
const navBar = new NavBar()

describe('Orange HRM Tests', () => {

  const selectorList = {
    
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    dateField: '.oxd-date-input',
    dateCloseButton: '.--close',
    countrySelection: '.oxd-select-text-input',
    submitSaveButton: "[type='submit']",
    selectInput: '.oxd-select-text-input',
    selectDropdown: '.oxd-select-dropdown',

  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.userName, userData.userSuccess.password)
    dashboard.checkDashboardPage()
    navBar.accesMyInfoModule()
    
    // cy.get(selectorList.myInfoButton).click()
    // cy.get(selectorList.firstNameField).clear().type('Balrog')
    // cy.get(selectorList.lastNameField).clear().type('Shadaloo')
    // cy.get(selectorList.genericField).eq(3).clear().type('Employ55')
    // cy.get(selectorList.genericField).eq(4).clear().type('testeId')
    // cy.get(selectorList.genericField).eq(5).clear().type('drive125444')
    // cy.get(selectorList.dateField).eq(0).clear().type('2025-25-06')
    // cy.get(selectorList.dateCloseButton).click()
    // cy.get(selectorList.selectInput).eq(0).click()
    // cy.get(selectorList.selectDropdown).should('be.visible')
    // cy.contains('Austrian').click()
    // cy.get(selectorList.selectInput).eq(1).click()
    // cy.get(selectorList.selectDropdown).should('be.visible')
    // cy.contains('Married').click()
    // cy.get(selectorList.submitSaveButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Updated')
    
  })
  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userFail.userName)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongAlert)
  })
})
