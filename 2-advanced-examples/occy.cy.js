describe('Login Test', () => {
    it('should log in successfully', () => {
      // Visit the login page
      cy.visit('https://app-dev.occy.co.uk'); // Replace with your login page URL
  
      // Fill in the username and password fields
      cy.get('input[name="email"]').type('ahmedaliakram455@gmail.com'); // Replace 'your-username' with your actual username
      cy.get('input[name="password"]').type('Ahmedali786@'); // Replace 'your-password' with your actual password
  
      // Click the login button
      cy.get('button[type="submit"]').click();
  
      // Verify successful login
      cy.url().should('include', '/dashboard'); // Update this to match the post-login URL
      cy.contains('Welcome,').should('be.visible'); // Update this to match a post-login element
    });
  });