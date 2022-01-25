describe('JpetStore', () => 
{
    it('Registration', () =>
     {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.title().should('include', 'JPetStore Demo')
        cy.get('#MenuContent > a:nth-child(3)').click()
        cy.get('#Catalog > a').click()
        cy.wait(5000)

        cy.get('input[name="username"]').type('Cypress').should('have.value','Cypress')
        cy.get('input[name="password"]').type('Lucifer').should('have.value','Lucifer')
        cy.get('input[name="repeatedPassword"]').type('Lucifer').should('have.value','Lucifer')
        cy.wait(500)

        cy.get('input[name="account.firstName"]').type('Cypress').should('have.value','Cypress')
        cy.get('input[name="account.lastName"]').type('Test').should('have.value','Test')
        cy.get('input[name="account.email"]').type('cypress@mail.com').should('have.value','cypress@mail.com')
        cy.get('input[name="account.phone"]').type('1234567890').should('have.value','1234567890')
        cy.get('input[name="account.address1"]').type('Test address1').should('have.value','Test address1')
        cy.get('input[name="account.address2"]').type('Test address2').should('have.value','Test address2')
        cy.get('input[name="account.city"]').type('Test City').should('have.value','Test City')
        cy.get('input[name="account.state"]').type('Test state').should('have.value','Test state')
        cy.get('input[name="account.zip"]').type('1914').should('have.value','1914')
        cy.get('input[name="account.country"]').type('Testcountry').should('have.value','Testcountry')
        cy.wait(5000)

        cy.get(':nth-child(1) > :nth-child(2) > select').select('english').should('have.value', 'english')
        cy.get(':nth-child(2) > :nth-child(2) > select').select('DOGS').should('have.value', 'DOGS')
        cy.wait(5000)

        cy.get(':nth-child(6) > tbody > :nth-child(3) > :nth-child(2) > input').click()
        cy.get(':nth-child(6) > tbody > :nth-child(4) > :nth-child(2) > input').click()
        cy.wait(5000)

        cy.get('[name="newAccount"]').click()
    })
  })