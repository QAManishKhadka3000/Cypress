describe('Jpetstore', () => 
{
    it('SignIN', () =>
     {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.title().should('include', 'JPetStore Demo')
        cy.get('#MenuContent > a:nth-child(3)').click()
        cy.wait(5000)

        cy.get('input[name="username"]').type('Cypress').should('have.value','Cypress')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('Lucifer').should('have.value','Lucifer')
        cy.wait(5000)
        cy.get('[name="signon"]').click()
    })
  })