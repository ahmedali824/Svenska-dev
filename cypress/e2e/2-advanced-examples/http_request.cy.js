describe("HTTP Requests", () => {
    it("POST call with valid authorization", () => {
        cy.request({
            method: 'POST',
            url: 'https://api-stage.occy.co.uk/api/jobs',
            failOnStatusCode: false,
            headers: {
                Authorization: 'Bearer eyJraWQiOiI5OHFnMlZEZnIrYUhBOHYzdlE4NURHZFJiMFRGUlRtclRtUUxTdDF4bWFjPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlOTA4MDc1Ny05NjZkLTQ0NDMtODZlOS1lNGUyZWRmZmNhMTIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl9rRVNYeUhxUUoiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI3ZWE1aDJpY2hya250c2RwcHIxZWFtMGFuNCIsIm9yaWdpbl9qdGkiOiI0OGQzY2M2NC1iMDUyLTQ1NGQtODIyNC01ZDM3ZDRhZjIyMTUiLCJldmVudF9pZCI6ImU1YjY3ZGVkLTZjYzQtNGYzOS1hMTRlLTJiOTM2MThhYzFmOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNzE1MDg3MDcwLCJleHAiOjE3MTUwOTI4ODksImlhdCI6MTcxNTA4OTI4OSwianRpIjoiZjIxNGNiNWUtZjE1Yy00OGY1LTljNGYtNTY4MmVkZGYxOGM4IiwidXNlcm5hbWUiOiJlOTA4MDc1Ny05NjZkLTQ0NDMtODZlOS1lNGUyZWRmZmNhMTIifQ.U3MOtyVpQvZE593TVfsrEEAPC8q6J7uogv2GxxfdqhkE5w8MJNbwArY0WEorEDjduzKgesPIFSDqdu9tpAePLkxp7akrDydk1u6a0cK0whfVpOzVT46MYOynw2CvKjaUepAvoQn0uRbaRzIXjS4NDZUP5YGWTynh9SVZHqLoaVpPrf0FoDnSIdOBhWmj3kU0WHjeDDiiDMgHle7bPOKA5DLnNR_dU570fdmzx9gppmQDWSB4ASY3CUgotsI2magB0-e-Opk_GiBSBhdFahBWXbLTa2MnDb8SOp7WtGdnPvidoNCCJy8LKNtjapSIS2QdsDu0uTeWZ-4NNbAPDepXXA|01HM6WKJWNZ035WY4Y2HGQN2N7'
            },
            body: {
                "title": "JR Data Scientist",
    "employmentType": "FULL_TIME",
    "position": "ENTRY_LEVEL",
    "keywords": "Developer,It",
    "salaryCurrency": "GBP",
    "aboutCompany": "<p><span style=\"color: rgb(83, 88, 112);\">We’re occy, and we’re on a mission to make hiring human again.</span></p><p><span style=\"color: rgb(83, 88, 112);\">occy was made by recruiters, for recruiters to challenge the fundamentals of volume recruitment, reimagining the process to make recruiters’ lives easier with faster, low-cost hiring.&nbsp;We created occy to take care of all the robotic, repeatable hiring admin work, making it easier to hire again and again.</span></p><p><span style=\"color: rgb(83, 88, 112);\">occy is much more than a traditional ATS. It’s an end-to-end recruitment platform specifically designed for high-volume, hourly hiring.</span></p><p><span style=\"color: rgb(83, 88, 112);\">We enjoy a vibrant and connected company culture and are excited to welcome talented people to our growing team.&nbsp;</span></p>",
    "elevatorPitch": "<p><span style=\"color: rgb(13, 13, 13);\">As a data scientist, I analyze complex datasets to uncover valuable insights that drive informed decision-making. Using advanced statistical and machine learning techniques, I transform raw data into actionable recommendations, helping organizations optimize processes, enhance products, and achieve strategic objectives. </span></p>",
    "jobDescription": "<p>We are seeking a talented and motivated Data Scientist to join our team. The ideal candidate will have a strong background in statistics, mathematics, and programming, with a passion for uncovering insights from complex datasets. The Data Scientist will play a key role in analyzing data, developing predictive models, and providing actionable recommendations to drive business growth and innovation.</p><p><span style=\"color: var(--tw-prose-bold);\">Responsibilities:</span></p><ul><li>Analyze large, complex datasets to identify trends</li></ul><p><br></p>",
    "jobRequirement": "<p><span style=\"color: rgb(13, 13, 13);\">We are seeking a talented and motivated Data Scientist to join our team. The ideal candidate will have a strong background in statistics, mathematics, and programming, with a passion for uncovering insights from complex datasets. The Data Scientist will </span></p>",
    "benefits": "<ul><li>Career development opportunities</li><li>Gym membership</li><li>Pension scheme</li><li>Holiday entitlement</li><li>28 days holiday including bank holidays</li></ul>",
    "additionalNotes": "",
    "isCompanyBenefits": true,
    "isDei": true,
    "isAboutCompany": true,
    "remoteStatus": "",
    "department": {
        "value": "01HV3GFGFNMYANM42XC9GERQTS",
        "label": "Product"
    },
    "jobCategoryId": "01GM5YR2B5YGKCEZ8WC991E43M",
    "departmentId": "01HV3GFGFNMYANM42XC9GERQTS",
    "dei": "<p><span style=\"color: rgb(83, 88, 112);\">Here at occy, we know that our continued success is all down to our creative and talented team. We celebrate diversity and embrace the ideas, contributions, and company culture it creates.</span></p><p><span style=\"color: rgb(83, 88, 112);\">Our inclusive and supportive working environment has empowered us to do great things, and we strive to represent everyone in our community as we continue our journey. We are committed to providing a welcoming and inclusive workplace for everyone and welcome applications from all enthusiastic and driven individuals.updated</span></p>",
    "address": "",
    "postcode": "",
    "county": "",
    "countryShortname": "",
    "town": ""
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200);
        });
      })

        it("post call", () => {
            cy.request({
              method: 'POST',
              url: 'https://api-stage.occy.co.uk/api/forms/questionnaire-form',
              headers: {
                Authorization: 'Bearer eyJraWQiOiI5OHFnMlZEZnIrYUhBOHYzdlE4NURHZFJiMFRGUlRtclRtUUxTdDF4bWFjPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlOTA4MDc1Ny05NjZkLTQ0NDMtODZlOS1lNGUyZWRmZmNhMTIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl9rRVNYeUhxUUoiLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI3ZWE1aDJpY2hya250c2RwcHIxZWFtMGFuNCIsIm9yaWdpbl9qdGkiOiI0OGQzY2M2NC1iMDUyLTQ1NGQtODIyNC01ZDM3ZDRhZjIyMTUiLCJldmVudF9pZCI6ImU1YjY3ZGVkLTZjYzQtNGYzOS1hMTRlLTJiOTM2MThhYzFmOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNzE1MDg3MDcwLCJleHAiOjE3MTUwOTI4ODksImlhdCI6MTcxNTA4OTI4OSwianRpIjoiZjIxNGNiNWUtZjE1Yy00OGY1LTljNGYtNTY4MmVkZGYxOGM4IiwidXNlcm5hbWUiOiJlOTA4MDc1Ny05NjZkLTQ0NDMtODZlOS1lNGUyZWRmZmNhMTIifQ.U3MOtyVpQvZE593TVfsrEEAPC8q6J7uogv2GxxfdqhkE5w8MJNbwArY0WEorEDjduzKgesPIFSDqdu9tpAePLkxp7akrDydk1u6a0cK0whfVpOzVT46MYOynw2CvKjaUepAvoQn0uRbaRzIXjS4NDZUP5YGWTynh9SVZHqLoaVpPrf0FoDnSIdOBhWmj3kU0WHjeDDiiDMgHle7bPOKA5DLnNR_dU570fdmzx9gppmQDWSB4ASY3CUgotsI2magB0-e-Opk_GiBSBhdFahBWXbLTa2MnDb8SOp7WtGdnPvidoNCCJy8LKNtjapSIS2QdsDu0uTeWZ-4NNbAPDepXXA|01HM6WKJWNZ035WY4Y2HGQN2N7'
            },
              body: {
                    "statusId": 2,
                  "customFormId": 370,
                  "jobId": "01HWWSCKRAZ1PAG13T83VW6701"
          
                }
              })
            })
            .then((response) => {
              expect(response.status).to.equal(200);
            });
          })
     
        
   
