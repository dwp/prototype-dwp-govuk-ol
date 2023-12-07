//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/email-address-notify', function (req, res) {

    notify.sendEmail(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
      // in your code.
      '9e9d6eaf-5722-4e8b-b33c-74ce41011e79',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      req.body.registerEmailAddress
    );
  
    // This is the URL the users will be redirected to once the email
    // has been sent
    res.redirect('/ur-r2/gds/check-your-email');
  
  });