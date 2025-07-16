import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import Dashboard from '../pages/dashboard'
import NavBar from '../pages/navBar'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboard = new Dashboard()
const navBar = new NavBar()
const myInfoPage = new MyInfoPage()
// Load Chance
const Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();


describe('Orange HRM Tests', () => {
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.userName, userData.userSuccess.password)
    dashboard.checkDashboardPage()
    navBar.accesMyInfoModule()
    myInfoPage.personalFullName(chance.first(), chance.name({ middle_initial: true }), chance.last())
    myInfoPage.personalEmployeeDetails(chance.integer({ min: 0, max: 300 }), chance.string({ length: 6 }), chance.bb_pin(), '2027-06-23')
    myInfoPage.personalStatus()
    myInfoPage.saveForm()
    
  })
})
