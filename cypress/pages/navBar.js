class NavBar{
    selectorsList(){
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]'
        }
        return selectors
    }

    accesMyInfoModule(){
        cy.get(this.selectorsList().myInfoButton).click()
    }
}
export default NavBar