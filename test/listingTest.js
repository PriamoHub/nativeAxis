var expect = require('chai').expect;
var loginObject = require("../pageObject/loginObject.js");
var opportunityObjects = require('../pageObject/opportunityObjects.js');
var newListingObjects = require('../pageObject/newListingObjects.js')
var webdriverio = require('webdriverio');

/* var webdriverio =
    client = webdriverio.remote({
        desiredCapabilities: {
			name : 'Webdriverio Test',
			build :  '1.0',

			screen_resolution : '1024x768',
			record_video : "true",
			record_network : "true",
			record_snapshot :  "false",

			browserName : "firefox, safari, chrome",
			username : "priamo.ramirez@testlauncher.com",
			password : "u59834cd1b764544"
        },
        host: 'hub.crossbrowsertesting.com',
        port: 80,
        user: "priamo.ramirez@testlauncher.com",
        key: "u59834cd1b764544",
        logLevel: 'silent',

}).init();
*/

describe('Native Axis - Login Automated Testing', function () {

        it('Login with correct Email and Password', function () {
            loginObject.open();
            loginObject.username = "priamo.ramirez+pacprod@testlauncher.com";
            loginObject.password = "B36i18e%";
            loginObject.signIn();
        });

    });
    describe('Add New Listing - Opportunity', function () {

            it('Click on Add New Opportunity', function () {
                opportunityObjects.openOpportunity();
                opportunityObjects.addOpportunity();
                opportunityObjects.addNewListing();
            });
            it('Complete Form', function () {
              newListingObjects
              .propertyType = "Condo"
              .propertyStatus = "For Sale"
              .price = "120,000"
              .adress = "2930 Garden of the Gods"
              .adress2 = "Apartment 1"
              .city = "Colorado Springs"
              .state = "Colorado"
              .country = "USA"
              .zip = "80909"
              .neighborhoods = ""
              .bedCount = "4"
              .bathCount = "5"
              .selectedListingAgent = "Priamo Ramirez"
              .selectedBuyerAgent = "Priamo Ramirez"
              newListingObjects.createOpportunity();


            });
it('Summary Tab - Description', function () {

            newListingObjects
            .accessStatus = "Public"

            newListingObjects.tabStrategy();
            newListingObjects
            .regularDescription = "Testing Automation House"
            .description = "New Description blahblah blah"
            newListingObjects.submit();
  });
        });
