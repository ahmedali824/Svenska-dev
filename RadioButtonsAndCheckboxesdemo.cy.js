describe("Check UI Elememts", ()=>{
    it("Checking Radio Buttons",()=>{

        cy.visit("https://app-dev.occy.co.uk/jobs/01GW2JVVY8APXKMGVNFCKBZ8QC/job-advert")
        cy.get("span.sc-gikAfH.kxFnnK").should('be.visible')
        cy.get("span.sc-gikAfH.kxFnnK").should('be.visible')
        
    })
})
