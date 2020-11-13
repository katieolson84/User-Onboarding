describe ('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002') 
    })

    const nameInput = () => cy.get('input[name="name"]') 
    const emailInput = () => cy.get('input[name="email"]') 
    const passwordInput = () => cy.get('input[name="password"]') 
    const roleSelect = () => cy.get('select[name="role"]')
    const termsInput = () => cy.get('[type="checkbox"]')
    const statusChecked = () => cy.get('[type="radio"]')
    const submitBtn = () => cy.get('button[class=submitBtn]')
    const errorDiv = () => cy.get('[class="error"]')

    it('elements should exist', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        roleSelect().should('exist')
        statusChecked().should('exist')
        termsInput().should('exist')
        submitBtn().should('exist')
    })

    describe('Filling out the inputs and selecting checkbox', () => {

        it('submit button is disabled', () => {
            submitBtn().should('be.disabled')
        })

        it('can type inside the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Katie Olson')
                .should('have.value', 'Katie Olson')
            emailInput()
                .should('have.value', '')
                .type('katieolson84@gmail.com')
                .should('have.value', 'katieolson84@gmail.com')
            passwordInput()
                .should('have.value', '')
                .type('12345678')
                .should('have.value', '12345678')
        })

        it('role can be selected from dropdown', () => {
            roleSelect()
                .should('have.value', '')
                .select('Designer')
                .should('have.value', 'Designer')
        })

        it('status of radio button is selected', () => {
            statusChecked()
                .first().check()
                .should('be.checked')
        })

        it('Terms of Service are checked', () => {
            termsInput()
                .check()
                .should('be.checked')     
        })

    
        it('Submit button enabled when all inputs are entered', () => {
            nameInput().type('Test Name')
            emailInput().type('test@test.com')
            passwordInput().type('test1234')
            roleSelect().select('Designer')
            statusChecked().first().check()
            termsInput().check()
            submitBtn().should('not.be.disabled')
        })

        it('Does the error message appear if input is left empty for name input', () => {
            nameInput().type('T')
            nameInput().clear()
            errorDiv().contains('required')
        })

        it('Does the error message appear if input is left empty for email input', () => {
            emailInput().type('T')
            emailInput().clear()
            errorDiv().contains('email')
        })

        it('Does the error message appear if input is left empty for password input', () => {
            passwordInput().type('T')
            passwordInput().clear()
            errorDiv().contains('8')
        })
    })

})