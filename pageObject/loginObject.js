"use strict";
var Page = require('../util/page.js')

class loginObject extends Page {

    get username()              { return $("[name='username']").getValue(); }
    set username(v)             {        $("[name='username']").setValue(v); }
    get password()              { return $("[name='password']").getValue(); }
    set password(v)             {        $("[name='password']").setValue(v); }

    open() {
        super.open('admin/login');
        browser.waitForVisible("[name='username']");
    }
    signIn() {
        browser.click("[type='submit']");
    }
    waitForLogIn(){
      browser.waitForVisible('._2c_xXUSCabRfrHWcxw28eI');
    }
}
module.exports = new loginObject();
