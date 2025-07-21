import 'cypress-file-upload';
describe('Login Test', () => {
  it('should log in successfully', () => {
    // Visit the login page
    cy.visit('https://app-dev.occy.co.uk'); // Replace with your login page URL

    // Fill in the username and password fields
    cy.get('input[name="email"]').type('ahmedaliakram455@gmail.com'); // Replace 'your-username' with your actual username
    cy.get('input[name="password"]').type('Ahmedali786@'); // Replace 'your-password' with your actual password

    // Click the login button
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    // Wait for the URL to change and ensure we're at the Dashboard
    cy.wait(2000);
    cy.get('a[href="/jobs"]').click();
    cy.wait(2000);
    cy.get('.sc-dcJsrY.kSUqAL.btn.btn-primary').click();
    cy.get('.p-lg-2 > .sc-dcJsrY').click();

    cy.get('#department > .css-reqq1a-control > .css-hlgwow' , { timeout: 8000 }).click();

    // Step 2: Select the second option
    cy.get('#react-select-6-option-3', { timeout: 8000 }) // Adjust the selector based on your options container
     .should('be.visible')
      // Index 1 corresponds to the second option (0-based index)
      .click();

      cy.get('#jobCategory > .css-reqq1a-control > .css-hlgwow').click();
      cy.get('#react-select-3-option-1', { timeout: 8000 }) // Adjust the selector based on your options container
     .should('be.visible')
      // Index 1 corresponds to the second option (0-based index)
      .click();


      cy.get('#position > .css-reqq1a-control > .css-hlgwow').click();
      cy.get('#react-select-4-option-1', { timeout: 8000 }) // Adjust the selector based on your options container
     .should('be.visible')
      // Index 1 corresponds to the second option (0-based index)
      .click();

      cy.get('#employmentType > .css-reqq1a-control > .css-hlgwow').click();
      cy.get('#react-select-5-option-0', { timeout: 10000 }) // Adjust the selector based on your options container
     .should('be.visible')
      // Index 1 corresponds to the second option (0-based index)
      .click();


    cy.get('.react-tagsinput').type('input{enter}')
    .click();

    cy.get(':nth-child(2) > .sc-kYxDKI > .quill > .ql-container > .ql-editor').type('Lorem Ipsum has been the industrys standard dummy text ever since the 1500')

    cy.get(':nth-child(3) > .sc-kYxDKI > .quill > .ql-container > .ql-editor').type('Lorem Ipsum has been the industrys standard dummy text ever since the 1500s')
  
    cy.get(':nth-child(4) > .sc-kYxDKI > .quill > .ql-container > .ql-editor').type('Lorem Ipsum has been the industrys standard dummy text ever since the 1500s')

    cy.get('.justify-content-between > .mb-0 > .sc-eyvILC').click();

    cy.get('form > .sc-dcJsrY').click();

    //Toolkit
     cy.get(':nth-child(1) > .mt-3 > .sc-dcJsrY').click();

     cy.get('.css-hlgwow').click();
    cy.get('#react-select-7-option-1', { timeout: 5000 })
      .click();

      cy.get('.d-flex > .kSUqAL').click();

      //skill set

      cy.get('.mt-3.portlet__body > .mt-3 > .sc-dcJsrY').click();
      cy.get('.sc-kRRyDe', { timeout: 5000 }) 
      .click();
      cy.get(':nth-child(1) > .d-flex > .sc-eyvILC').click();
      cy.get('body').click(0, 0);
       cy.get('button[type="submit"]' , { timeout: 5000 }).click();
       cy.get('.sc-dcJsrY.rKAvQ.ms-auto.mt-3.mb-5.btn').click();

       cy.get('.portlet__body > .mt-4 > .sc-dcJsrY').click({force: true});
     
      cy.get('#name').type('ahmed stage')

      cy.get('.css-19bb58m').click();

      cy.get('#react-select-8-option-3 > .d-flex').click();

      cy.get('.d-flex > .kSUqAL').click();

      cy.get('.d-flex.w-75 > .sc-dcJsrY').click();
      
        cy.get('div.mt-5 > .d-flex > .sc-dcJsrY').click();


      //Hiring plan

      cy.get('.mx-3 > .sc-dcJsrY').click();

      cy.get('.sc-kRRyDe > .justify-content-between').click();
      cy.get(':nth-child(1) > .h-100 > :nth-child(2)', { timeout: 5000 }) 
      .click();
      
     cy.get('#jobType > .css-reqq1a-control > .css-hlgwow' ,  { timeout: 5000 }).click();

     cy.get('#react-select-9-option-2 > .d-flex' ,  { timeout: 5000 }).click();

     cy.get('#remote > .css-reqq1a-control > .css-hlgwow').click();

     cy.get('#react-select-10-option-1 > .d-flex').click();

     cy.get(':nth-child(4) > .mb-3 > .sc-ecPEgm > .form-control').click();

     // Select Start Date (March 4, 2025)
cy.get(':nth-child(33) > abbr').click();

// Select End Date (March 15, 2025)
cy.get(':nth-child(4) > .mb-3 > .sc-ecPEgm > .form-control').click();
cy.wait(500);
cy.get(':nth-child(4) > .mb-3 > .sc-ecPEgm > .hello > .react-calendar > .react-calendar__viewContainer > .react-calendar__month-view > [style="display: flex; align-items: flex-end;"] > [style="flex-grow: 1; width: 100%;"] > .react-calendar__month-view__days > :nth-child(34)').click({ force: true });

cy.get(':nth-child(5) > .mb-3 > .sc-ecPEgm > .form-control').click();
     
     cy.get(':nth-child(5) > .mb-3 > .sc-ecPEgm > .hello > .react-calendar > .react-calendar__viewContainer > .react-calendar__month-view > [style="display: flex; align-items: flex-end;"] > [style="flex-grow: 1; width: 100%;"] > .react-calendar__month-view__days > :nth-child(35)').click();
     
     cy.get('#salaryFrom').type('12');
     cy.get('#salaryTo').type('45')

     cy.get('#salaryPeriod > .css-reqq1a-control > .css-hlgwow > .css-19bb58m').click()
     cy.get('#react-select-12-option-2 > .d-flex').click();

     cy.get('#positions').type('55')

     cy.get('#budgeted > .css-reqq1a-control > .css-hlgwow').click();
     cy.get('#react-select-13-option-0').click();

     cy.get('#hiringManagerId > .css-reqq1a-control > .css-hlgwow').click();
     cy.get('#react-select-14-option-1').click();

     cy.get('#recruitersIds > .css-reqq1a-control > .css-hlgwow').click();
     cy.get('#react-select-15-option-1').click();

     cy.get('#interviewerIds > .css-reqq1a-control > .css-hlgwow').click();
     cy.get('#react-select-16-option-1').click();


     cy.get('.me-3 > .sc-dcJsrY').click();
     

    //Campaign creation
  cy.get('._4-step').click();

     cy.get('.d-flex > .flex-center > .sc-dcJsrY').click();
      cy.get('.css-1xc3v61-indicatorContainer').click();


    //Hiring plan popup
      cy.get('#react-select-17-option-0').click();
      cy.get('.d-flex > .kSUqAL').click();


     cy.get('#campaignName',{ timeout: 5000 }).type('new campaign');
     cy.get('#referenceId').type('3434')

     cy.get(':nth-child(4) > .mb-3 > .sc-ecPEgm > .form-control').click();
     cy.get('.react-calendar__tile--now').click();

     cy.get(':nth-child(5) > .mb-3 > .sc-ecPEgm > .form-control').click();
     cy.get(':nth-child(5) > .mb-3 > .sc-ecPEgm > .hello > .react-calendar > .react-calendar__viewContainer > .react-calendar__month-view > [style="display: flex; align-items: flex-end;"] > [style="flex-grow: 1; width: 100%;"] > .react-calendar__month-view__days > :nth-child(35)').click({force:true});
      
     cy.get('.css-hlgwow').click();
     cy.get('#react-select-18-option-1').click();

     cy.get('#description').type('Today campaign');

     cy.get('.sc-dcJsrY').click();

    cy.get(':nth-child(2) > .sc-BQMaI > .align-items-center > .d-flex > .sc-dcJsrY').click();
    cy.get('.kSUqAL').click();

    cy.get(':nth-child(2) > .mt-3 > .row > .col-12 > .sc-kYxDKI > .quill > .ql-container > .ql-editor').type('loreum')
    cy.get(':nth-child(2) > .mt-3 > .row > .col-12 > .sc-kYxDKI > .quill > .ql-container > .ql-editor').type('loreum')
    cy.get(':nth-child(3) > .mt-3 > .row > .col-12 > .sc-kYxDKI > .quill > .ql-container > .ql-editor').type('loreum')
    cy.get('.kSUqAL').click();
    cy.get('.kSUqAL').click();

   cy.get('.d-flex > .sc-dcJsrY').click();
// Click on jobs
    cy.get('a[href="/jobs"]').click();
    cy.wait(2000);
    cy.get('.text-left.ps-4.py-3.align-middle.w-0 a').first().click();
//click on add candidate button
    cy.get(':nth-child(2) > .rounded-3').click();

    // click on upload file
   
    cy.get('input [type="button"]').attachFile('2c0d7c5_ahmed-CV-template-green_1_ (11).docx');

   






  
 
  });
});
