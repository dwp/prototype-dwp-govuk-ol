//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//Routes for Filter question

router.get('/id-screener/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/filter-question.html', { showErrorSummary });
});

// Handle form submission
router.post('/id-screener/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['have-photo-id'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "No") {
            // Send user to accepted ID types at Post Office
            res.redirect('/idv/id-screener-2');
        } else {
            // Send user to using phone or desktop
            res.redirect('/idv/computer-or-tablet');
        }
    } else {
        // If no radio button is selected, redirect to /id-screener/answer with error
        res.redirect('/id-screener/answer?error=true');
    }
});

//Routes for Computer or tablet
router.get('/idv/computerOrTablet', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/computer-or-tablet.html', { showErrorSummary });
});

// Handle form submission
router.post('/idv/computerOrTablet', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['computer-or-tablet'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "No, I am on a smartphone") {
            // Send user to...
            res.redirect('/idv/app/on-a-smartphone');
        } else {
            // Send user to...
            res.redirect('/idv/do-you-have-a-smartphone');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/idv/computerOrTablet?error=true');
    }
});

// Routes for Do you have a smartphone
router.get('/idv/doYouHaveASmartphone', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/do-you-have-a-smartphone.html', { showErrorSummary });
});

// Handle form submission
router.post('/idv/doYouHaveASmartphone', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['have-a-smartphone'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "I don't have either of these") {
            // Send user to...
            res.redirect('/idv/web/continue-proving-your-identity-online');
        } else {
         // Send user to...
            res.redirect('/idv/app/valid-passport');
        }
    } else {
        // If no radio button is selected, redirect to page with error
        res.redirect('/idv/doYouHaveASmartphone?error=true');
    }
});

// Routes for Do you want to use your UK photocard driving licence or UK passport to prove your identity
router.get('/idv/web/continueProvingYourIdentityOnline', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/web/continue-proving-your-identity-online.html', { showErrorSummary });
});

// Handle form submission
router.post('/idv/web/continueProvingYourIdentityOnline', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['ineligible-next-steps'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "security-questions-driving-licence") {
            // Send user to...
            res.redirect('/idv/web/driving-licence/who-issued-licence');
        } else if (selectedOption === "security-questions-passport") {
            // Send user to enter passport details
            res.redirect('/idv/web/passport/enter-passport-details');
        } else if (selectedOption === "another-way") {
            // Send user to prove identity at the post office
            res.redirect('/idv/prove-identity-at-post-office');
        }
    } else {
      // If no radio button is selected, redirect to /ineligible-next-steps/answer with error
        res.redirect('/idv/web/continueProvingYourIdentityOnline?error=true');
    }
});

// Routes for Who issued driving licence
router.get('/idv/web/driving-licence/whoIssuedLicence', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/web/driving-licence/who-issued-licence.html', { showErrorSummary });
    });

// Handle form submission
router.post('/idv/web/driving-licence/whoIssuedLicence', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['issuerName'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "dvla") {
            // Send user to set up auth app
            res.redirect('/idv/web/driving-licence/enter-dvla-driving-licence-details');
        } else if (selectedOption === "dva") {
            // Send user to enter passport details
            res.redirect('/idv/web/driving-licence/enter-dva-driving-licence-details');
        } else if (selectedOption === "no-uk-licence") {
            // Send user to prove identity at the post office
            res.redirect('/idv/web/continue-proving-your-identity-online');
        }
    } else {
        // If no radio button is selected, redirect to /ineligible-next-steps/answer with error
        res.redirect('/idv/web/driving-licence/whoIssuedLicence?error=true');
    }
});

// Routes for KBV abandon page
router.get('/kbv-abandon-answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/web/kbv/kbv-abandon.html', { showErrorSummary });
});

// Handle form submission
router.post('/kbv-abandon-answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['kbv-abandon'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "another way") {
            // Send user to set up auth app
            res.redirect('/idv/kbv-another-way');
        } else {
            // Send user to enter phone number
            res.redirect('/idv/web/kbv/mortgage-balance');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/kbv-abandon-answer?error=true');
    }
});

// Routes for KBV – Find another way to prove your identity
router.get('/kbv-another-way-answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/kbv-another-way.html', { showErrorSummary });
});

// Handle form submission
router.post('/kbv-another-way-answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['kbv-another-way'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "id check app") {
            // Send user to set up auth app
            res.redirect('/idv/computer-or-tablet');
        } else {
            // Send user to enter phone number
            res.redirect('/idv/send-to-post-office');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/kbv-another-way-answer?error=true');
    }
});


// Handle form submission
router.post('/service-pages-routes', (req, res) => {
    const selectedOption = req.session.data['choose-service-line'];

//If Repay was selected go to account home dashboard
    if(selectedOption === 'repay') {
      res.redirect('service-pages-routes/repay/account-home?repay=true')
    }
//If Maternity was selected go to task list
    else if(selectedOption === 'maternity') {
      res.redirect('service-pages-routes/maternity-allowance/task-list?maternity=true')
    }

});

//Routes for Choosing a service line
router.get('/choose-service-line/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('choose-service-line.html', { showErrorSummary });
});

// Handle form submission for service lines
router.post('/choose-service-line/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['choose-service-line'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "repay") {
            // Send user to repay my debt
            res.redirect('/choose-journey-repay');
        } else if (selectedOption === "maternity") {
            // Send user to maternity allowance
            res.redirect('/choose-journey-maternity');
        }
    } else {
        // If no radio button is selected, redirect to /choose-service-line/answer with error
        res.redirect('/choose-service-line/answer?error=true');
    }
});

//Routes for Choosing repay journeys
router.get('/choose-journey-repay/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('choose-journey-repay.html', { showErrorSummary });
});

// Handle form submission
router.post('/choose-journey-repay/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['choose-journey-repay'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "prove-identity") {
            // Send user tomatern
            res.redirect('/service-pages-routes/repay/start?userJourney=idv');
        } else if (selectedOption === "identity-reuse") {
            // Send user to
            res.redirect('/service-pages-routes/repay/start?userJourney=signin');
        } else if (selectedOption === "oidv-medium-user") {
            // Send user to
            res.redirect('/service-pages-routes/repay/start?userJourney=oidvMedium');
        } else if (selectedOption === "returning-ol-user") {
            // Send user to
            res.redirect('/service-pages-routes/repay/start?userJourney=returningOlUser');
        } else if (selectedOption === "returning-ol-and-oidv-medium-user") {
            // Send user to
            res.redirect('/service-pages-routes/repay/start?userJourney=returningOlAndOidvMediumUser');
        }
    } else {
        // If no radio button is selected, redirect to /choose-journey/answer with error
        res.redirect('/choose-journey-repay/answer?error=true');
    }
});


//Routes for Choosing maternity journeys
router.get('/choose-journey-maternity/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('choose-maternity-repay.html', { showErrorSummary });
});

// Handle form submission
router.post('/choose-journey-maternity/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['choose-journey-maternity'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "prove-identity") {
            // Send user tomatern
            res.redirect('/service-pages-routes/maternity-allowance/start?userJourney=idv');
        } else if (selectedOption === "identity-reuse") {
            // Send user to
            res.redirect('/service-pages-routes/maternity-allowance/start?userJourney=signin');
        } else if (selectedOption === "oidv-medium-user") {
            // Send user to
            res.redirect('/service-pages-routes/maternity-allowance/start?userJourney=oidvMedium');
        } else if (selectedOption === "returning-ol-user") {
            // Send user to
            res.redirect('/service-pages-routes/maternity-allowance/start?userJourney=returningOlUser');
        } else if (selectedOption === "returning-ol-and-oidv-medium-user") {
            // Send user to
            res.redirect('/service-pages-routes/maternity-allowance/start?userJourney=returningOlAndOidvMediumUser');
        }
    } else {
        // If no radio button is selected, redirect to /choose-journey/answer with error
        res.redirect('/choose-journey-maternity/answer?error=true');
    }
});


//Routes for Which smartphone are you using?
router.get('/on-a-smartphone/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/on-a-smartphone.html', { showErrorSummary });
});

// Handle form submission
router.post('/on-a-smartphone/answer', (req, res) => {
    // Check if a radio button is selected
    const data = req.session.data;
    const selectedOption = data.smartphone;
    console.log({selectedOption});

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Neither of these phones") {
           // Send user to...
            res.redirect('/idv/web/continue-proving-your-identity-online');
        } else {
        // Send user to...
            res.redirect('/idv/app/valid-passport');
        }
    } else {
        // If no radio button is selected, redirect to /on-a-smartphone/answer with error
        res.redirect('/on-a-smartphone/answer?error=true');
    }
});

//Routes for Do you have a valid passport
router.get('/valid-passport/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/valid-passport.html', { showErrorSummary });
});

// Handle form submission
router.post('/valid-passport/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['valid-passport'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Yes") {
      // Send user to...
            res.redirect('/idv/app/biometric-passport');
        } else {
       // Send user to...
            res.redirect('/idv/app/biometric-residence-permit');
        }
    } else {
        // If no radio button is selected, redirect to /valid-passport/answer with error
        res.redirect('/valid-passport/answer?error=true');
    }
});

//Routes for 'Do you have a valid UK biometric residence permit or card?'
router.get('/biometric-residence-permit/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/biometric-residence-permit.html', { showErrorSummary });
});

// Handle form submission
router.post('/biometric-residence-permit/answer', function (req, res) {
    // Check if a radio button is selected for the first question
    const selectedOption = req.body['valid-brp'];

    if (!selectedOption) {
        // If no radio button is selected for the first question, redirect to /biometric-residence-permit/answer with error
        res.redirect('/biometric-residence-permit/answer?error=true');
    } else {
        // Make variables and give them the values from the questions
        var validBRP = selectedOption;
        var computerOrTablet = req.session.data['computer-or-tablet'];
        var secondQuestionAnswer = req.session.data['smartphone'];
        var thirdQuestionAnswer = req.session.data['have-a-smartphone'];

        // Check the answer to the first question
        if (validBRP == "BRP" || validBRP == "BRC" || validBRP == "FWP") {
            // Check the answer to the 'computer-or-tablet' question
            if (computerOrTablet == "No, I am on a smartphone") {
                // Check the answer to the 'smartphone' question
                if (secondQuestionAnswer == "Android") {
                    // Send user to a specific route based on the answer to the 'smartphone' question
                    res.redirect('/idv/app/brp/use-app-brp');
                } else if (secondQuestionAnswer == "iPhone") {
                    // Send user to phone model
                    res.redirect('/idv/app/brp/iphone-model');
                }
            } else if (computerOrTablet == "Yes, I am on a computer or tablet") {
                // Check the answer to the 'have-a-smartphone' question
                if (thirdQuestionAnswer == "android") {
                    // Handle cases where the answer to the 'have-a-smartphone' question is as expected
                    res.redirect('/idv/app/brp/use-app-brp');
                } else if (thirdQuestionAnswer == "iPhone") {
                    // Send user to phone model
                    res.redirect('/idv/app/brp/iphone-model');
                }
            } else if (computerOrTablet === "" || computerOrTablet === null || computerOrTablet === undefined) {
                // Redirect when 'computer-or-tablet' is blank or not provided
                res.redirect('/idv/app/brp/iphone-model');
            }
        } else if (validBRP == "other-id") {
            res.redirect('/idv/app/driving-licence');
        } else {
            // If an invalid option is selected for the first question, handle it as needed
            // You can add specific error handling here if necessary
        }
    }
});

// Render the template with the error condition
router.get('/page-index/app-cri/biometric-passport/answer', (req, res) => {
const showErrorSummary = req.query.error === 'true';
res.render('/page-index/app-cri/biometric-passport.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/app-cri/biometric-passport/answer', (req, res) => {
// Check if a radio button is selected for the first question
const selectedOption = req.body['biometric-passport-symbol'];

if (!selectedOption) {
    // If no radio button is selected for the first question, redirect to /biometric-passport/answer with error
    res.redirect('/page-index/app-cri/biometric-passport/answer?error=true');
} else {
    // Make variables and give them the values from the questions
    var biometricpassport = selectedOption;
    var computerOrTablet = req.session.data['computer-or-tablet'];
    var secondQuestionAnswer = req.session.data['smartphone'];
    var thirdQuestionAnswer = req.session.data['have-a-smartphone'];

    // Check the answer to the first question
    if (biometricpassport === "Yes") {
    // Check the answer to the 'computer-or-tablet' question
    if (computerOrTablet === "No, I am on a smartphone") {
        // Check the answer to the 'smartphone' question
        if (secondQuestionAnswer === "Android") {
        // Send user to a specific route based on the answer to the 'smartphone' question
        res.redirect('/page-index/app-cri/passport/use-app-passport');
        } else if (secondQuestionAnswer === "iPhone") {
        // Send user to phone model
        res.redirect('/page-index/app-cri/iphone-model');
        }
    } else if (computerOrTablet === "Yes, I am on a computer or tablet") {
        // Check the answer to the 'have-a-smartphone' question
        if (thirdQuestionAnswer === "android") {
        // Handle cases where the answer to the 'have-a-smartphone' question is as expected
        res.redirect('/page-index/app-cri/passport/use-app-passport');
        } else if (thirdQuestionAnswer === "iPhone") {
        // Send user to phone model
        res.redirect('/page-index/app-cri/iphone-model');
        }
    } else if (computerOrTablet === "" || computerOrTablet === null || computerOrTablet === undefined) {
        // Redirect when 'computer-or-tablet' is blank or not provided
        res.redirect('/page-index/app-cri/iphone-model');
    }
    } else if (biometricpassport === "No") {
    // Handle cases where the answer to the first question is 'No'
    // You can redirect to an 'ineligible' route or another appropriate route
    res.redirect('/page-index/app-cri/biometric-residence-permit');
    } else {
    // If an invalid option is selected for the first question, handle it as needed
    // You can add specific error handling here if necessary
    }
}
});

// Routes for 'Does your passport have this symbol on the cover'
router.get('/app/biometric-passport/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/biometric-passport.html', { showErrorSummary });
});

// Handle form submission
router.post('/app/biometric-passport/answer', (req, res) => {
    // Check if a radio button is selected for the first question
    const data = req.session.data;
    const selectedOption = data.biometricPassportSymbol;
    console.log({selectedOption});

    if (!selectedOption) {
        // If no radio button is selected for the first question, redirect to /app/biometric-passport/answer with error
        res.redirect('/app/biometric-passport/answer?error=true');
    } else {
        // Make variables and give them the values from the questions
        var biometricpassport = selectedOption;
        var computerOrTablet = req.session.data['computer-or-tablet'];
        var secondQuestionAnswer = req.session.data['smartphone'];
        var thirdQuestionAnswer = req.session.data['have-a-smartphone'];

        // Check the answer to the first question
        if (biometricpassport === "Yes") {
            // Check the answer to the 'computer-or-tablet' question
            if (computerOrTablet === "No, I am on a smartphone") {
                // Check the answer to the 'smartphone' question
                if (secondQuestionAnswer === "Android") {
                    // Send user to a specific route based on the answer to the 'smartphone' question
                    res.redirect('/idv/app/passport/use-app-passport');
                } else if (secondQuestionAnswer === "iPhone") {
                    // Send user to phone model
                    res.redirect('/idv/app/iphone-model');
                }
            } else if (computerOrTablet === "Yes, I am on a computer or tablet") {
                // Check the answer to the 'have-a-smartphone' question
                if (thirdQuestionAnswer === "android") {
                    // Handle cases where the answer to the 'have-a-smartphone' question is as expected
                    res.redirect('/idv/app/passport/use-app-passport');
                } else if (thirdQuestionAnswer === "iPhone") {
                    // Send user to phone model
                    res.redirect('/idv/app/iphone-model');
                }
            } else if (computerOrTablet === "" || computerOrTablet === null || computerOrTablet === undefined) {
                // Redirect when 'computer-or-tablet' is blank or not provided
                res.redirect('/idv/app/iphone-model');
            }
        } else if (biometricpassport === "No") {
            // Handle cases where the answer to the first question is 'No'
            // You can redirect to an 'ineligible' route or another appropriate route
            res.redirect('/idv/app/biometric-residence-permit');
        } else {
            // If an invalid option is selected for the first question, handle it as needed
            // You can add specific error handling here if necessary
        }
    }
});

// Routes for 'Which iPhone model do you have?'
router.get('/iphone-model/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/iphone-model.html', { showErrorSummary });
});

// Handle form submission
router.post('/iphone-model/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['iphone-model'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "iPhone 7 or newer") {
       // Send user to...
            res.redirect('/idv/app/passport/use-app-passport');
        } else {
     // Send user to...
            res.redirect('/idv/app/driving-licence');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/iphone-model/answer?error=true');
    }
});

// Routes for 'Biometric route – Which iPhone model do you have?'
router.get('/brp/iphone-model/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/brp/iphone-model.html', { showErrorSummary });
});

// Handle form submission
router.post('/brp/iphone-model/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['iphone-model'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "iPhone 7 or newer") {
           // Send user to...
            res.redirect('/idv/app/brp/use-app-brp');
        } else {
          // Send user to...
            res.redirect('/idv/app/driving-licence');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/brp/iphone-model/answer?error=true');
    }
});

// Routes for 'Driving licence – Does your smartphone have a working camera?'
router.get('/driving-licence/working-camera/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/driving-licence/working-camera.html', { showErrorSummary });
});

// Handle form submission
router.post('/driving-licence/working-camera/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['working-camera'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Yes") {
        // Send user to...
            res.redirect('/idv/app/driving-licence/flashing-colours');
        } else {
           // Send user to...
            res.redirect('/idv/web/continue-proving-your-identity-online');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/driving-licence/working-camera/answer?error=true');
    }
});

// Routes for 'Driving licence – The app uses flashing colours. Do you want to continue?'
router.get('/driving-licence/flashing-colours/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/driving-licence/flashing-colours.html', { showErrorSummary });
});

// Handle form submission
router.post('/driving-licence/flashing-colours/answer', (req, res) => {
    // Check if a radio button is selected for the first question
    const selectedOption = req.body['flashing-colours'];

    if (selectedOption === "Yes") {
        // Check the answer to the second question
        var secondQuestionAnswer = req.session.data['computer-or-tablet'];

            if (secondQuestionAnswer == "No, I am on a smartphone") {
            // Send the user to a specific route based on the answer to the second question
                res.redirect('/idv/app/driving-licence/download-app-mobile');
            } else {
                // Handle other cases if needed
                res.redirect('/idv/app/driving-licence/download-app-desktop');
            }
    } else if (!selectedOption) {
        // If no radio button is selected for the first question, redirect to /brp/flashing-colours/answer with error
        res.redirect('/driving-licence/flashing-colours/answer?error=true');
    } else {
        // Handle cases where the answer to the first question is not 'Yes'
        // In this example, redirect to an 'ineligible' route
        res.redirect('/idv/web/continue-proving-your-identity-online');
    }
});

// Routes for 'Does your smartphone have a working camera'
router.get('/passport/working-camera/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/passport/working-camera.html', { showErrorSummary });
});

// Handle form submission
router.post('/passport/working-camera/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['working-camera'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Yes") {
           // Send user to...
            res.redirect('/idv/app/passport/flashing-colours');
        } else {
  // Send user to...
            res.redirect('/idv/web/continue-proving-your-identity-online');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/passport/working-camera/answer?error=true');
    }
});

router.get('/brp/working-camera/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/brp/working-camera.html', { showErrorSummary });
});

// Handle form submission
router.post('/brp/working-camera/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['working-camera'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Yes") {
            // Send user to...
            res.redirect('/idv/app/brp/flashing-colours');
        } else {
          // Send user to...
            res.redirect('/idv/web/continue-proving-your-identity-online');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/brp/working-camera/answer?error=true');
    }
});

// Routes for 'The app uses flashing colours. Do you want to continue?'
router.get('/passport/flashing-colours/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/passport/flashing-colours.html', { showErrorSummary });
});

// Handle form submission
router.post('/passport/flashing-colours/answer', (req, res) => {
    // Check if a radio button is selected for the first question
    const selectedOption = req.body['flashing-colours'];

    if (selectedOption === "Yes") {
        // Check the answer to the second question
        var secondQuestionAnswer = req.session.data['computer-or-tablet'];

        if (secondQuestionAnswer == "No, I am on a smartphone") {
            // Send user to...
            res.redirect('/idv/app/passport/download-app-mobile');
        } else {
            // Send user to...
            res.redirect('/idv/app/passport/download-app-desktop');
        }
    } else if (!selectedOption) {
        // If no radio button is selected for the first question, redirect to /passport/flashing-colours/answer with error
        res.redirect('/passport/flashing-colours/answer?error=true');
    } else {
        // Handle cases where the answer to the first question is not 'Yes'
        // In this example, redirect to an 'ineligible' route
        res.redirect('/idv/web/continue-proving-your-identity-online');
    }
});

// Routes for 'The app uses flashing colours. Do you want to continue?'
router.get('/brp/flashing-colours/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/brp/flashing-colours.html', { showErrorSummary });
});

// Handle form submission
router.post('/brp/flashing-colours/answer', (req, res) => {
    // Check if a radio button is selected for the first question
    const selectedOption = req.body['flashing-colours'];

    if (selectedOption === "Yes") {
        // Check the answer to the second question
        var secondQuestionAnswer = req.session.data['computer-or-tablet'];

        if (secondQuestionAnswer == "No, I am on a smartphone") {
            // Send user to...
            res.redirect('/idv/app/brp/download-app-mobile');
        } else {
            // Handle other cases if needed
            res.redirect('/idv/app/brp/download-app-desktop');
        }
    } else if (!selectedOption) {
        // If no radio button is selected for the first question, redirect to /brp/flashing-colours/answer with error
        res.redirect('/brp/flashing-colours/answer?error=true');
    } else {
        // Handle cases where the answer to the first question is not 'Yes'
        // In this example, redirect to an 'ineligible' route
        res.redirect('/idv/web/continue-proving-your-identity-online');
    }
});

router.get('/driving-licence/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/app/driving-licence.html', { showErrorSummary });
});

// Handle form submission
router.post('/driving-licence/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['driving-licence'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Yes") {
      // Send user to...
            res.redirect('/idv/app/driving-licence/use-app-driving-licence');
        } else {
      // Send user to...
            res.redirect('/idv/web/continue-proving-your-identity-online');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/driving-licence/answer?error=true');
    }
});

//Entering app routes
// Run this code when a form is submitted to '/passport-app-journey/answer'
router.post('/passport-app-journey/answer', function (req, res) {
    // Make a variable and give it the value from 'computer-or-tablet'
    var selectedOption = req.session.data['computer-or-tablet']

    // Check whether the variable matches a condition
    if (selectedOption === "No, I am on a smartphone") {
        // Check the answer to the second question
        var selectedSmartphone = req.session.data['smartphone'];

        if (selectedSmartphone) {
            if (selectedSmartphone === "Android") {
                // Send Android users to android journey
                res.redirect('/idv/app/document-checking/android/passport/open-app');
            } else if (selectedSmartphone === "iPhone") {
                // Send iPhone users to iPhone-specific page
                res.redirect('/idv/app/document-checking/ios/passport/open-app');
            }
        }
    } else if (selectedOption === "Yes, I am on a computer or tablet") {
        // Check the answer to the third question
        var haveSmartphoneOption = req.session.data['have-a-smartphone'];

        if (haveSmartphoneOption) {
            if (haveSmartphoneOption === "android") {
                // Send Android users to some page
                res.redirect('/idv/app/document-checking/android/passport/open-app');
            } else if (haveSmartphoneOption === "iPhone") {
                // Send iPhone users to some page
                res.redirect('/idv/app/document-checking/ios/passport/open-app');
            }
        } else {
            // Redirect to a page if the third question isn't answered
            res.redirect('/idv/app/document-checking/ios/passport/open-app');
        }
    } else {
        // Redirect to a page if the original question isn't answered
        res.redirect('/idv/app/document-checking/ios/passport/open-app');
    }
})

// Run this code when a form is submitted to '/brp-app-journey/answer'
router.post('/brp-app-journey/answer', function (req, res) {

    // Make a variable and give it the value from 'computer-or-tablet'
    var selectedOption = req.session.data['computer-or-tablet']

    // Check whether the variable matches a condition
    if (selectedOption === "No, I am on a smartphone") {
        // Check the answer to the second question
        var selectedSmartphone = req.session.data['smartphone'];

        if (selectedSmartphone) {
            if (selectedSmartphone === "Android") {
                // Send Android users to android journey
                res.redirect('/idv/app/document-checking/android/brp/open-app');
            } else if (selectedSmartphone === "iPhone") {
                // Send iPhone users to iPhone-specific page
                res.redirect('/idv/app/document-checking/ios/brp/open-app');
            }
        }
    } else if (selectedOption === "Yes, I am on a computer or tablet") {
        // Check the answer to the third question
        var haveSmartphoneOption = req.session.data['have-a-smartphone'];

        if (haveSmartphoneOption) {
            if (haveSmartphoneOption === "android") {
                // Send Android users to some page
                res.redirect('/idv/app/document-checking/android/brp/open-app');
            } else if (haveSmartphoneOption === "iPhone") {
                // Send iPhone users to some page
                res.redirect('/idv/app/document-checking/ios/brp/open-app');
            }
        } else {
            // Redirect to a page if the third question isn't answered
            res.redirect('/idv/app/document-checking/ios/brp/open-app');
        }
    } else {
        // Redirect to a page if the original question isn't answered
        res.redirect('/idv/app/document-checking/ios/brp/open-app');
    }
})

// find another way app exit link route
router.post('/find-another-way-journey-answer', function (req, res) {
    // Read the 'choose-journey' value from session data
    var chooseJourney = req.session.data['choose-journey'];

    // Check whether the variable matches a condition
    if (chooseJourney === "identity-reuse") {
        // Redirect to a specific URL
        res.redirect('/page-index/ipv-core/repeat-fraud-check/find-another-way');
    } else if (chooseJourney === "address-fraud-check") {
        // Redirect to another specific URL
        res.redirect('/page-index/ipv-core/repeat-fraud-check/find-another-way');
    } else {
        // Redirect to a different URL
        res.redirect('/idv/web/continue-proving-your-identity-online');
    }
});

// Routes for ID check app

// Run this code when a form is submitted to '/computer-or-tablet/answer'
router.post('/starting-device/ios/answer', function (req, res) {

    // Make a variable and give it the value from 'choose-security-codes'
    var startingdevice = req.session.data['computer-or-tablet']

    // Check whether the variable matches a condition
    if (startingdevice == "No, I am on a smartphone"){
        // Send user to set up auth app
        res.redirect('/idv/app/document-checking/ios/send-and-exit/exit-app-mobile')
    } else {
        // Send user to enter phone number
        res.redirect('/idv/app/document-checking/ios/send-and-exit/exit-app-desktop')
    }

})

// Run this code when a form is submitted to '/driving-licence-app-journey/answer'
router.post('/driving-licence-app-journey/answer', function (req, res) {

    // Make a variable and give it the value from 'computer-or-tablet'
    var selectedOption = req.session.data['computer-or-tablet']

    // Check whether the variable matches a condition
    if (selectedOption === "No, I am on a smartphone") {
        // Check the answer to the second question
        var selectedSmartphone = req.session.data['smartphone'];

        if (selectedSmartphone) {
            if (selectedSmartphone === "Android") {
                // Send Android users to android journey
                res.redirect('/idv/app/document-checking/android/driving-licence/open-app');
            } else if (selectedSmartphone === "iPhone") {
                // Send iPhone users to iPhone-specific page
                res.redirect('/idv/app/document-checking/ios/driving-licence/open-app');
            }
        }
    } else if (selectedOption === "Yes, I am on a computer or tablet") {
        // Check the answer to the third question
        var haveSmartphoneOption = req.session.data['have-a-smartphone'];

        if (haveSmartphoneOption) {
            if (haveSmartphoneOption === "android") {
            // Send Android users to some page
            res.redirect('/idv/app/document-checking/android/driving-licence/open-app');
            } else if (haveSmartphoneOption === "iPhone") {
            // Send iPhone users to some page
            res.redirect('/idv/app/document-checking/ios/driving-licence/open-app');
            }
        } else {
            // Redirect to a page if the third question isn't answered
            res.redirect('/idv/app/document-checking/ios/driving-licence/open-app');
        }
    } else {
        // Redirect to a page if the original question isn't answered
        res.redirect('/idv/app/document-checking/ios/driving-licence/open-app');
    }
})

///exiting app routes
// Run this code when a form is submitted to '/next-step'
router.post('/exit-app-journey/answer', function (req, res) {
    // Retrieve the selected options from the session
    var selectedOptions = req.session.data['update-details'] || [];
    var selectedFraudCheckOptions = req.session.data['update-details-fraud-check'] || [];

    // Check the selected options and redirect accordingly
    if (selectedOptions.includes("Address") || selectedFraudCheckOptions.includes("Address")) {
        // Redirect to the new address update page if Address was selected
        res.redirect('/idv/ipv-core/continuity-of-identity/name-address-success');
    } else if (selectedOptions.includes("Given names") || selectedOptions.includes("Last name") || selectedFraudCheckOptions.includes("Given names") || selectedFraudCheckOptions.includes("Last name")) {
        // Redirect to the new name update page if Given names or Last name was selected
        res.redirect('/idv/ipv-core/continuity-of-identity/name-success');
    } else {
        // Redirect to match successful page if none of the above conditions are met
        res.redirect('/idv/ipv-core/match-successful');
    }
});

//Android
// Run this code when a form is submitted to '/computer-or-tablet/answer'
router.post('/starting-device/android/answer', function (req, res) {

    // Make a variable and give it the value from 'choose-security-codes'
    var startingdevice = req.session.data['computer-or-tablet']

    // Check whether the variable matches a condition
    if (startingdevice == "No, I am on a smartphone"){
        // Send user to set up auth app
        res.redirect('/idv/app/document-checking/android/send-and-exit/exit-app-mobile')
    } else {
        // Send user to enter phone number
        res.redirect('/idv/app/document-checking/android/send-and-exit/exit-app-desktop')
    }
})

router.get('/id-screener-2/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/ipv-core/id-screener-2.html', { showErrorSummary });
});

// Handle form submission
router.post('/id-screener-2/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['post-office-id'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "No") {
            // Send user to find another way
            res.redirect('/nophotoidv/no-photo-id-triage');
        } else {
            // Send user to claimed identity cri
            res.redirect('/idv/claimed-identity-cri/name');
        }
    } else {
        // If no radio button is selected, redirect to /id-screener-2/answer with error
        res.redirect('/id-screener-2/answer?error=true');
    }
});


// Handle form submission
router.post('/nophotoidv/no-photo-id-triage', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['no-photo-id-triage'];

    if (selectedOption) {
        // Route user based on their selection
        if (selectedOption === "No") {
            // Send user to find another way
            res.redirect('/idv/find-another-way');
        } else {
            // Send user to claimed identity cri
            res.redirect('/nophotoidv/name');
        }
    } else {
        // If no radio button is selected, redirect to /id-screener-2/answer with error
        res.redirect('/nophotoidv/no-photo-id-triage?error=true');
    }
});



// Routes for Face to Face CRI
router.get('/f2f-cri/choose-id/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/f2f-cri/choose-id.html', { showErrorSummary });
});

// Handle form submission
router.post('/f2f-cri/choose-id/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['in-person-choose-id'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "UK passport") {
            // Send user to set up auth app
            res.redirect('/idv/f2f-cri/expiry-date');
        } else if (selectedOption === "Non-UK passport") {
            // Send user to enter passport details
            res.redirect('/idv/f2f-cri/non-uk-passport-have-expiry-date');
        } else if (selectedOption === "UK photocard driving licence") {
            // Send user to prove identity at the post office
            res.redirect('/idv/f2f-cri/uk-driving-licence-expiry-date');
        } else if (selectedOption === "Biometric residence permit (BRP)") {
            // Send user to enter passport details
            res.redirect('/idv/f2f-cri/biometric-residence-permit-expiry-date');
        } else if (selectedOption === "European Union (EU) photocard driving licence") {
            // Send user to enter passport details
            res.redirect('/idv/f2f-cri/eu-driving-licence-have-expiry-date');
        } else if (selectedOption === "National identity card from a European Economic Area (EEA) country") {
            // Send user to enter passport details
            res.redirect('/idv/f2f-cri/national-identity-card-have-expiry-date');
        } else if (selectedOption === "I do not have any of these documents") {
            // Send user to enter passport details
            res.redirect('/idv/f2f-another-way');
        }
    } else {
        // If no radio button is selected, redirect to /ineligible-next-steps/answer with error
        res.redirect('/f2f-cri/choose-id/answer?error=true');
    }
});

// Does your passport has an expirty date routes
router.get('/page-index/f2f-cri/non-uk-passport-have-expiry-date/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/f2f-cri/non-uk-passport-have-expiry-date.html', { showErrorSummary });
    });

// Handle form submission
router.post('/page-index/f2f-cri/non-uk-passport-have-expiry-date/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['has-expiry'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "No") {
            // Send user to set up auth app
            res.redirect('/idv/f2f-cri/non-uk-passport-issuer');
        } else {
            // Send user to enter phone number
            res.redirect('/idv/f2f-cri/non-uk-passport-expiry');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/page-index/f2f-cri/non-uk-passport-have-expiry-date/answer?error=true');
    }
});

// Routes for 'Does your driving licence have your current address on it?'
router.get('/page-index/f2f-cri/uk-driving-licence-current-address/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/f2f-cri/uk-driving-licence-current-address.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/uk-driving-licence-current-address/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['driving-licence-address'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Yes, it has my current address on it") {
            // Send user to set up auth app
            res.redirect('/idv/f2f-cri/find-post-office');
        } else {
            // Send user to enter phone number
            res.redirect('/idv/f2f-cri/choose-id');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/page-index/f2f-cri/uk-driving-licence-current-address/answer?error=true');
    }
});

// Routes for 'Does your driving licence have an expiry date?'
router.get('/page-index/f2f-cri/eu-driving-licence-have-expiry-date/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/f2f-cri/eu-driving-licence-have-expiry-date.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/eu-driving-licence-have-expiry-date/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['has-expiry'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "No") {
            // Send user to set up auth app
            res.redirect('/idv/f2f-cri/eu-driving-licence-current-address');
        } else {
            // Send user to enter phone number
            res.redirect('/idv/f2f-cri/eu-driving-licence-expiry-date');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/page-index/f2f-cri/eu-driving-licence-have-expiry-date/answer?error=true');
    }
});

// Routes for 'Does your driving licence have your current address on it?'
router.get('/page-index/f2f-cri/eu-driving-licence-current-address/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/f2f-cri/eu-driving-licence-current-address.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/eu-driving-licence-current-address/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['eu-driving-licence-address'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "No, it has my previous address on it") {
            // Send user to set up auth app
            res.redirect('/idv/f2f-cri/choose-id');
        } else {
            // Send user to enter phone number
            res.redirect('/idv/f2f-cri/eu-driving-licence-issuer');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/page-index/f2f-cri/eu-driving-licence-current-address/answer?error=true');
    }
});

// Routes for 'Does your national identity card have an expiry date?'
router.get('/page-index/f2f-cri/national-identity-card-have-expiry-date/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/f2f-cri/national-identity-card-have-expiry-date.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/national-identity-card-have-expiry-date/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['has-expiry'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "No") {
            // Send user to set up auth app
            res.redirect('/idv/f2f-cri/national-identity-current-address');
        } else {
            // Send user to enter phone number
            res.redirect('/idv/f2f-cri/national-identity-card-expiry-date');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/page-index/f2f-cri/national-identity-card-have-expiry-date/answer?error=true');
    }
});

// Routes for 'Does your national identity card have your current address on it?'
router.get('/page-index/f2f-cri/national-identity-current-address/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/f2f-cri/national-identity-current-address.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/national-identity-current-address/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['national-identity-address'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "No, it has my previous address on it") {
            // Send user to set up auth app
            res.redirect('/idv/f2f-cri/choose-id');
        } else {
            // Send user to enter phone number
            res.redirect('/idv/f2f-cri/national-identity-issuer');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/page-index/f2f-cri/national-identity-current-address/answer?error=true');
    }
});

// Routes for 'Prove your identity at a Post Office' IPV Core
router.get('/prove-identity-at-post-office-answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/prove-identity-at-post-office.html', { showErrorSummary });
});

// Handle form submission
router.post('/prove-identity-at-post-office-answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['at-post-office'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Yes") {
            // Send user to set up auth app
            res.redirect('/idv/claimed-identity-cri/name');
        } else {
            // Send user to enter phone number
            res.redirect('/idv/find-another-way2');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/prove-identity-at-post-office-answer?error=true');
    }
});

// Routes for 'Find another way to prove your identity' IPV Core
router.get('/idv/find-another-way-answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/idv/find-another-way.html', { showErrorSummary });
});

// Handle form submission for no photo id triage
router.post('/idv/find-another-way-answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['no-photo-id-triage-exit'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Find another way") {
            // Send user to set up auth app
            res.redirect('/idv/return-to-service');
        } else if (selectedOption === "Use photo ID") {
            // Send back
            res.redirect('/idv/filter-question');
        } else if (selectedOption === "Use bank details") {
            // Send user to enter phone number
            res.redirect('/nophotoidv/no-photo-id-triage');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/idv/find-another-way-answer?error=true');
    }
});


// Handle form submission for no photo id triage
router.post('/idv/find-another-way-answer-2', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['no-photo-id-triage-exit-2'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Continue to the service") {
            // Send user to set up auth app
            res.redirect('/idv/return-to-service');
        } else if (selectedOption === "Try proving") {
            // Send back
            res.redirect('/idv/filter-question');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/idv/find-another-way-answer?error=true');
    }
});

// Handle form submission for no photo id escape
router.post('/no-photo-id-escape/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['no-photo-id-escape'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "id-check-app") {
            // Send user to set up auth app
            res.redirect('/idv/computer-or-tablet');
        } else if (selectedOption === "passport-web") {
            // Send back
            res.redirect('/idv/web/passport/enter-passport-details');
        } else if (selectedOption === "driving-licence-web") {
            // Send user to enter phone number
            res.redirect('/idv/web/driving-licence/whoIssuedLicence');
        }
          else if (selectedOption === "post-office") {
        // Send user to enter phone number
        res.redirect('/idv/claimed-identity-cri/name');
    }
    else if (selectedOption === "another way") {
        // Send user to enter phone number
        res.redirect('/idv/return-to-service');
    }
        
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/no-photo-id-escape/answer?error=true');
    }
});






// Handle form submission for bank account escape
router.post('/bank-account-escape-answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['escape'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "another way") {
            // Send back
            res.redirect('/idv/ipv-core/no-photo-id-escape');
        }  else if (selectedOption === "try again") {
            // Send user to enter phone number
            res.redirect('/idv/bank-account-cri/before-you-continue');
        }
        
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/bank-account-escape-answer?error=true');
    }
});




// Handle form submission for bank account escape
router.post('/bank-account-escape-answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['escape'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "another way") {
            // Send back
            res.redirect('/idv/ipv-core/no-photo-id-escape');
        }  else if (selectedOption === "try again") {
            // Send user to enter phone number
            res.redirect('/idv/bank-account-cri/before-you-continue');
        }
        
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/bank-account-escape-answer?error=true');
    }
});




// Handle form submission for update details
router.post('/update-your-details/answer', (req, res) => {
    const update1 = req.session.data['update-details-1'];
    const update2 = req.session.data['update-details-2'];
    const update3 = req.session.data['update-details-3'];
    const update4 = req.session.data['update-details-4'];
    const update5 = req.session.data['update-details-5'];


      //First name & Last name & Address
 if (update1 == "Given names" && update2 == "Last name" && update3 == "Address")  {
    res.redirect('/idv/ipv-core/continuity-of-identity/update-name-date-birth?firstnameandlastnameandaddress=true');
  }
       //First name & Last name
   else if (update1 == "Given names" && update2 == "Last name")  {
        res.redirect('/idv/ipv-core/continuity-of-identity/update-name-date-birth?firstnameandlastname=true');
  }
      // First name or Last name
   else if( update1 == "Given names" || update2 == "Last name" ) {
    res.redirect('/idv/ipv-core/continuity-of-identity/update-name-app?firstnameorlastname=true');
  }
    // DOB & address
else if (update3 == "Address" && update4 == "dob") {
        res.redirect('/idv/ipv-core/continuity-of-identity/update-name-date-birth?address&birth=true');
 }
   // Address
   else if (update3 == "Address") {
    res.redirect('/idv/address-cri/repeat-fraud-check/find-current-address?addr=true');
  }
   // DOB
   else if (update4 == "dob") {
    res.redirect('/idv/ipv-core/continuity-of-identity/update-name-date-birth?birth=true');
  }
  // No need to update details
  else if (update5 == "none") {
    res.redirect('/ol-credential-create-and-signin/returning/returning-you-have-already-proved-your-identity?not=true');
  }
  else {
    res.redirect('/idv/ipv-core/continuity-of-identity/update-your-details?error=true');
  }
});





// Handle form submission for updating full name, dob or address
router.post('/continuity-of-identity/update-name-or-dob-answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['update-name-or-dob'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Contact us") {
            // Send back
            res.redirect('/leaving-prototype');
        }  else if (selectedOption === "Check details") {
            // Send user to enter phone number
            res.redirect('/idv/ipv-core/continuity-of-identity/update-your-details');
        }
        
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/continuity-of-identity/update-name-or-dob-answer?error=true');
    }
});





// Handle form submission for updating full name, dob or address
router.post('/live-in-uk/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['live-in-uk'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Yes") {
            // Send to filter querstion
            res.redirect('/idv/filter-question');
        }  else if (selectedOption === "No") {
            // Send user to non uk app intro
            res.redirect('/idv/ipv-core/triage/non-uk-app-intro');
        }
        
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/live-in-uk/answer?error=true');
    }
});



// Handle form submission for updating full name, dob or address
router.post('/non-uk-app-intro/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['non-uk-app-intro'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "id-check-app") {
            // Send to app intro
            res.redirect('/idv/computer-or-tablet');
        }  else if (selectedOption === "another way") {
            // Return to service
            res.redirect('/idv/return-to-service');
        }
        
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/non-uk-app-intro/answer?error=true');
    }
});