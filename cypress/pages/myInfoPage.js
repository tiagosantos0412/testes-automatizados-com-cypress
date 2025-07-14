class MyInfoPage {
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            midleNameField: "[name='middleName']",
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

    personalFullName(firstName, midleName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().midleNameField).clear().type(midleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    personalEmployeeDetails(employeeId, otherId, driversLicene, licenseExpiryDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicene)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    } 

    personalStatus(){
        cy.get(this.selectorsList().selectInput).eq(0).click()
        cy.get(this.selectorsList().selectDropdown).should('be.visible')
        cy.contains('Austrian').click()
        cy.get(this.selectorsList().selectInput).eq(1).click()
        cy.get(this.selectorsList().selectDropdown).should('be.visible')
        cy.contains('Married').click()
    }

    saveForm(){
        cy.get(this.selectorsList().submitSaveButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
}

export default MyInfoPage