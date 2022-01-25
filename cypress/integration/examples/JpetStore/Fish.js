describe('Fish', () => 
{
        

    it('AngelFish', () =>
     {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.title().should('include', 'JPetStore Demo')
        cy.get('#MenuContent > a:nth-child(3)').click()
        cy.wait(5000)

        cy.get('input[name="username"]').type('Cypress').should('have.value','Cypress')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('Lucifer').should('have.value','Lucifer')
        cy.get('[name="signon"]').click()
        cy.wait(5000)


        //Select the Fish
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click()

        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
        cy.wait(4000)

        //Select Large AngelFish
        cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()

        //Add to Cart
        cy.get('.Button').click()
        cy.get(':nth-child(5) > input').clear()
        cy.get(':nth-child(5) > input').type(1).should('have.value',1)
        cy.wait(4000)


        //proceed
        cy.get('[href="/actions/Order.action?newOrderForm="]').click()

        //confirm
        cy.get('[name="newOrder"]').click()
        cy.contains('Please confirm the information below and then press continue...')
        cy.wait(3000)

        cy.get('.Button').click()
        cy.contains('Thank you, your order has been submitted.')
        cy.wait(3000)
          //retrun the Main Menu
          cy.get('#BackLink > a').click()
          cy.wait(3000)
     })

     it('TigerShark', () =>
     {

      
        // click on Fish Again 
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click()
        //select Tiger Shark
        cy.get('tbody > :nth-child(3) > :nth-child(1) > a').click()
        // add to cart
        cy.get('.Button').click()
        //proceed for checkout
        cy.get('[href="/actions/Order.action?newOrderForm="]').click()

        cy.get('input[name="username"]').type('Cypress').should('have.value','Cypress')
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('Lucifer').should('have.value','Lucifer')
        cy.wait(5000)
        cy.get('[name="signon"]').click()

        // click on Fish Again 
        cy.get('#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img').click()
        //select Tiger Shark
        cy.get('tbody > :nth-child(3) > :nth-child(1) > a').click()
        // add to cart
        cy.get('.Button').click()
        //proceed for checkout
        cy.get('[href="/actions/Order.action?newOrderForm="]').click()
        

        //confirm
        cy.get('[name="newOrder"]').click()
        cy.contains('Please confirm the information below and then press continue...')
        cy.wait(3000)

        cy.get('.Button').click()
        cy.contains('Thank you, your order has been submitted.')
        cy.wait(3000)

        //Signout
        cy.get('[href="/actions/Account.action?signoff="]').click()




        
    })
  })