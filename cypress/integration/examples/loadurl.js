describe('Test Suite', () => 
{
    it('Verify title of page', () =>
     {
        cy.visit('https://www.google.com/')
        cy.title()
        print.title
        cy.title().should('include', 'Google')
    })
  })