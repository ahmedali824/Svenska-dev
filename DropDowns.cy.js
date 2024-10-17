describe('handle dropdowns',()=>{


    it.skip('Dropdown with select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value','Italy')
    })
    
    it('Dropdown with select', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search_field').type('Italy').type('{enter}')

        cy.get('#select2-biling_country-container')
        .should('have.text','Italy')
})
     
         
})