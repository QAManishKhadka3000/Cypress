describe('Birds', () => 
{
    it('Amazon Parrot Bird', () =>
     {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.title().should('include', 'JPetStore Demo')
        cy.get('#MenuContent > a:nth-child(3)').click()
        cy.wait(5000)

        cy.get('input[name="username"]').type('Cypress').should('have.value','Cypress')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('Lucifer').should('have.value','Lucifer')
        cy.get('[name="signon"]').click()

        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img').click()
        cy.wait(5000)
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()

        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
        cy.get('.Button').click()

        //Proceed for checkout
        cy.get('[href="/actions/Order.action?newOrderForm="]').click()

        cy.get('[name="newOrder"]').click()

        //confirm 
        cy.get('.Button').click()

        //verify the Confirmation text
        cy.get('li')
        cy.contains('Thank you, your order has been submitted.')

        //Return Back to Main menu
        cy.get('#BackLink > a').click()


    })

    it('Finch Bird', () =>
     {

        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img').click()
        cy.get('tbody > :nth-child(3) > :nth-child(1) > a').click()
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()

        cy.wait(5000)
        cy.get('.Button').click()

        //Proceed for checkout
        cy.get('[href="/actions/Order.action?newOrderForm="]').click()

        cy.get('input[name="username"]').type('Cypress').should('have.value','Cypress')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('Lucifer').should('have.value','Lucifer')
        cy.get('[name="signon"]').click()
        cy.wait(4000)

        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img').click()
        cy.get('tbody > :nth-child(3) > :nth-child(1) > a').click()
        cy.get('.Button').click()
        cy.get(':nth-child(5) > input').clear()
        cy.get(':nth-child(5) > input').type(1).should('have.value',1)
        cy.get('[href="/actions/Order.action?newOrderForm="]').click()

        


        //confirm 
        cy.get('[name="newOrder"]').click()

        //verify the Confirmation text
        cy.get('#Catalog')
        cy.contains('Please confirm the information below and then press continue...')

        //confirm
        cy.get('.Button').click()

        //verify the Confirmation text
        cy.get('li')
        cy.contains('Thank you, your order has been submitted.')

        //Signout
        cy.get('[href="/actions/Account.action?signoff="]').click()


    })
  })