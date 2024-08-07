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
            res.redirect('/idv/send-to-post-office');
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
            res.redirect('/page-index/app-cri/on-a-smartphone');
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
            res.redirect('/page-index/app-cri/valid-passport');
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
            res.redirect('/idv/send-to-post-office');
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
            res.redirect('/page-index/f2f-cri/intro-page');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/kbv-another-way-answer?error=true');
    }
});