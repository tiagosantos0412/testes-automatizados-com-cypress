import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import Dashboard from '../pages/dashboard'

const loginPage = new LoginPage()
const dashboard = new Dashboard()

describe('Orange HRM Tests', () => {
  it('Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.userName, userData.userSuccess.password)
    dashboard.checkDashboardPage()
    
  })
  it('Login Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithWrongUser(userData.userFail.userName, userData.userFail.password)
  })
})
