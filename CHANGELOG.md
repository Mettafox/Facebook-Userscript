Changelog
======

## [v0.1558138696 (18/05/2019)](https://greasyfork.org/en/scripts/382099-facebook-auto-most-recent-stories) ##

### New ###
* Now when you click in the groups links in the Shortcut menu, you will be redirected to that group but with the option CHRONOLOGICAL active in the URL.  
  In this way, the group feed will automaticly change to the most recent publications.  
  **Note:** If you want to change the group feed option, see [Group feed section in the README](https://github.com/Mettafox/Facebook-Userscript/blob/master/README.md#group-feed).

* A 'Click' event was added to the post / comment timestamp. In this way, when you click in the post / comment timestamp, the browser will redirect you to that post / comment and active another 'click' event added to the Discussion button.
  When you click in the Discussion button, you will be redirected to the group with CHRONOLOGICAL option added to the URL.

* If the group URL have this references: **ref=group_header**, **ref=bookmarks** or **ref=direct**, the page will be redirected to the group main page with CHRONOLOGICAL added to the URL.

### Changed ###
* In the previous version, the script perform a modification in the href attribute of the **FB logo** and the **Home button** by adding the Facebook URL with the **?sk=h_chr option**.  
  In this version, I removed that amd added a **'click' event** to those two "buttons" to change the URL.  

* The variables are now better organized.

* All code was changed to meet ECMAScript 6 (ECMA-262 6th Edition) standards.  
  * Functions was changed to ***arrow functions***:  
    > An **arrow function expression** is a syntactically compact alternative to a regular function expression, although without its own bindings to the **this**, **arguments**, **super**, or **new.target** keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.  
  * **indexOf()** method replaced by **includes()** method.
* I added some comments to the code for a better understanding of what this or that line do.

**All code runs in safe-mode (safeWindow).**
