"use strict";
var Page = require('../util/page.js')

class opportunityObjects extends Page {

  get propertyType()                { return $("[name='type']").getValue(); }
  set propertyType(v)               {        $("[name='type']").setValue(v); }
  get propertyStatus()              { return $("[name='propertyStatus']").getValue(); }
  set propertyStatus(v)             {        $("[name='propertyStatus']").setValue(v); }
  get price()                       { return $("[name='price']").getValue();}
  set price(v)                       {        $("[name='price']").setValue(v);}
  get adress()                      { return $("[name='add1']").getValue();}
  set adress(v)                      {        $("[name='add1']").setValue(v);}
  get adress2()                     { return $("[name='add2']").getValue();}
  set adress2(v)                     {        $("[name='add2']").setValue(v);}
  get city()                        { return $("[name='city']").getValue();}
  set city(v)                        {        $("[name='city']").setValue(v);}
  get state()                       { return $("[name='state']").getValue();}
  set state(v)                       {        $("[name='state']").setValue(v);}
  get country()                     { return $("[name='country']").getValue();}
  set country(v)                     {        $("[name='country']").setValue(v);}
  get zip()                         { return $("[name='zip']").getValue();}
  set zip(v)                         {        $("[name='zip']").setValue(v);}
  get neighborhoods()               { return $("[name='neighborhoods']").getValue();}
  set neighborhoods(v)               {        $("[name='neighborhoods']").setValue(v);}
  get bedCount()                    { return $("[name='bedCount']").getValue();}
  set bedCount(v)                    {        $("[name='bedCount']").setValue(v);}
  get bathCount()                   { return $("[name='bathCount']").getValue();}
  set bathCount(v)                   {        $("[name='bathCount']").setValue(v);}
  get selectedListingAgent()        { return $("[name='selectedListingAgent']").getValue();}
  set selectedListingAgent(v)        {        $("[name='selectedListingAgent']").setValue(v);}
  get selectedBuyerAgent()          { return $("[name='selectedBuyerAgent']").getValue();}
  set selectedBuyerAgent(v)          {        $("[name='selectedBuyerAgent']").setValue(v);}
  get accessStatus()                { return $("[name='accessStatus']").getValue();}
  set accessStatus(v)                {        $("[name='accessStatus']").setValue(v);}
  get regularDescription()          { return $("[name='normalDescription']").getValue();}
  set regularDescription(v)          {        $("[name='normalDescription']").setValue(v);}
  get description()                 { return $("[name='description']").getValue();}
  set description(v)                 {        $("[name='description']").setValue(v);}


    createOpportunity() {
        browser.click("[type='submit']");
    }
    tabStrategy(){
      browser.click('//*[@id="logged-in-main-content"]/div/div/form/div[2]/div[1]/button[1]/div/div');
    }
    tabSummary(){
      browser.click('#logged-in-main-content > div > div > form > div:nth-child(2) > div:nth-child(1) > button:nth-child(3) > div > span');
    }
    submit(){
      browser.click("[type='submit']");
    }

}
module.exports = new opportunityObjects();
