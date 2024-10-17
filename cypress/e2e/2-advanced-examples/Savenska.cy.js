describe('Login Test', () => {
  it('should log in successfully with valid credentials', () => {
    // Step 1: Visit the login page
    cy.visit('https://app-dev.svenskatestamenten.se/myself/user-login');

    // Step 2: Enter username
    cy.get('input[name="email"]').type('shahi.hussan11@gmail.com');

    // Step 3: Enter password
    cy.get('input[name="personalNumber"]').type('mernITSolutions');

    // Step 4: Click the login button
    cy.get('button[type="submit"]').click();

    // Step 5: Check if login was successful
    // You can check for a URL change or if a certain element is visible
    
    cy.url().should('include', '/dashboard');
    cy.contains('Logga ut').should('be.visible');

    cy.get(".active > .mb-0", { timeout: 6000 }) // Increased timeout to 6 seconds
    .click();
    cy.get(".sc-gsFSjX").click();
    
    cy.get(".ql-editor", { timeout: 6000 } )// No need for timeout unless required
  .type('this is my first project');
  cy.get(".sc-dcJtft > .sc-aYaIB" ,{ timeout: 6000 }).click();

  // cy.get(".sc-kAycRU > :nth-child(1) > .d-flex > .sc-gEvDqW" , { timeout: 6000 } ) .click();

  // cy.get('C:\Users\F10 Solution\Desktop\Company image.jpg',{ timeout: 6000 }).then((content) => {
  //   cy.get('.ql-editor').attachFile({ fileContent: content, fileName: 'Company image.jpg' });
  // });
  
  // cy.get('#your-file-input-selector').click();
  
  cy.get(".fiEwZx", { timeout: 6000} ).click();
  });
});