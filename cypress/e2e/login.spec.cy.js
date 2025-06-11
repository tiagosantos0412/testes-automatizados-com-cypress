describe('Orange HRM Tests', () => {
  it('Login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name=username]').type('Admin')
    cy.get('input[name=password]').type('admin123')
    cy.get('button[type=submit]').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-text--h6').contains('Dashboard')
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name=username]').type('teste')
    cy.get('input[name=password]').type('teste')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert--error')
  })
})