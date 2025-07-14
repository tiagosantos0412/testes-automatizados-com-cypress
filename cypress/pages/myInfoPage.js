class MyInfoPage {
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input--active',
            dateField: '.oxd-date-input',
            dateCloseButton: '.--close',
            countrySelection: '.oxd-select-text-input',
            submitSaveButton: "[type='submit']",
            selectInput: '.oxd-select-text-input',
            selectDropdown: '.oxd-select-dropdown'
        }
        return selectors
    }

    editMyInfoModule(){
        cy.get(this.selectorsList().firstNameField).clear().type('Balrog')
        cy.get(this.selectorsList().lastNameField).clear().type('Shadaloo')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('Employ55')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('testeId')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('drive125444')
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2025-25-06')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().selectInput).eq(0).click()
        cy.get(this.selectorsList().selectDropdown).should('be.visible')
        cy.contains('Austrian').click()
        cy.get(this.selectorsList().selectInput).eq(1).click()
        cy.get(this.selectorsList().selectDropdown).should('be.visible')
        cy.contains('Married').click()
        cy.get(this.selectorsList().submitSaveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
}

export default MyInfoPage