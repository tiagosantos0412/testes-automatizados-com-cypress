import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import Dashboard from '../pages/dashboard'
import NavBar from '../pages/navBar'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboard = new Dashboard()
const navBar = new NavBar()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.userName, userData.userSuccess.password)
    dashboard.checkDashboardPage()
    navBar.accesMyInfoModule()
    myInfoPage.personalFullName('João', 'Carlos', 'da Silva')
    myInfoPage.personalEmployeeDetails(2346, 'almox2', 'crp2365', '2027-06-23')
    myInfoPage.personalStatus()
    myInfoPage.saveForm()
    
  })
  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userFail.userName)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongAlert)
  })
})
