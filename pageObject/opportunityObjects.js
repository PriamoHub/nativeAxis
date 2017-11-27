"use strict";
var Page = require('../util/page.js')

class opportunityObjects extends Page {

    openOpportunity() {
      browser.waitForVisible('#logged-in-sidebar > div._1_2XH9iG9jmL9Kgna5qBlD > div:nth-child(3) > span > div > div > div > p');
        browser.click('#logged-in-sidebar > div._1_2XH9iG9jmL9Kgna5qBlD > div:nth-child(3) > span > div > div > div > p');
    }
    addOpportunity() {
        browser.click('//*[@id="logged-in-main-content"]/div/div/div[3]/a/div/div');
    }
    addNewListing(){
      super.open('admin/opportunities/add/full');
      browser.waitForVisible("[name='propertyStatus']");
    }

}
module.exports = new opportunityObjects();
