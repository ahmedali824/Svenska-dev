
// Login and CRUD Automation
describe('Login Test', () => {
  it('should log in successfully with valid credentials', () => {
    // Step 1: Visit the login page
    cy.visit('https://app-dev.svenskatestamenten.se/myself/admin-login');
    // Step 2: Enter username
    cy.get('input[name="email"]').type('ahmedaliakram455@gmail.com');

    // Step 3: Enter password
    cy.get('input[name="personalNumber"]').type('QAEngineer');
    // Step 4: Click the login button
    cy.get('button[type="submit"]').click();


    cy.contains('Administrativ instrumentpanel ger administratörer direkt tillgång till viktiga Encompass-verktyg för snabbare och bekvämare community management').should('be.visible');
    cy.reload();

    cy.contains('Logga ut').should('be.visible');
    cy.get(".active > .mb-0", { timeout: 6000 }) // Increased timeout to 6 seconds
      .click();
    cy.get(".sc-eulNPF > .sc-aYaIB").click();


    cy.get('input[placeholder="Ange e-postadress"]', { timeout: 6000 }) 
      .type('bonedov354@digopm.com'); 

    cy.get('input[placeholder="Ange ditt förnamn"]') 
      .type('salar');

    cy.get('input[placeholder="Ange ditt efternamn"]') 
      .type('khan');

    cy.get('input[placeholder="Ange ditt telefonnummer"]') 
      .type('123456789');

    cy.get('input[placeholder="Ange ditt personnummer"]') 
      .type('345435345611');

    cy.get('input[placeholder="Ange ditt land"]') 
      .type('Pakistan');

    cy.get('input[placeholder="Ange ditt stad/stat"]') 
      .type('George St/Harbour');

    cy.get('input[placeholder="Ange ditt postnummer"]') 
      .type('MK80ES 124');

    cy.get('textarea[placeholder="Ange ärendedetaljer här"]') 
      .type('loreum');

    cy.get('button[type="submit"]').click();



    cy.get('.sc-fhzEvr > .undefined').type('jahazaib',{ timeout: 6000 }, { force: true });

    cy.get(':nth-child(1) > .px-5 > .justify-content-center > :nth-child(2)', { timeout: 6000 }).click();

    cy.get('form > .sc-aYaIB').click();

    // cy.get(':nth-child(1) > .px-5 > .justify-content-center > .d-flex > .cursor-pointer').click();

    cy.get('.justify-content-center > :nth-child(4)').click();

    // cy.url().then((currentUrl) => {
    //   cy.log('Current URL before assertion: ' + currentUrl);
    // });

  });


  describe('SVG Button Navigation', function () {
    // test case
    it('Scenario 1', function () {
       // Visit the URL
       cy.visit("https://app-dev.svenskatestamenten.se/admin-chat");
 
       // Click the SVG button
       cy.get('.cursor-pointer > svg', { timeout: 5000 }) // Select the div containing the SVG
       
         // Ensure the button is visible
         .click({force: true});

  });
});
});

