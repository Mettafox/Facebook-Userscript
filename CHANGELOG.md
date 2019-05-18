Changelog
======

## v0.1558138696 (18/05/2019) ##

### New ###
* Now when you click in the groups links in the Shortcut menu, you will be redirected to that group but with the option CHRONOLOGICAL active in the URL.  
  In this way, the group feed will automaticly change to the most recent publications.  
  **Note:** If you want to change the group feed option, see README.

* A 'Click' event was added to the post / comment timestamp. In this way, when you click in the post / comment timestamp, the browser will redirect you to that post / comment and active another 'click' event added to the Discussion button.
  When you click in the Discussion button, you will be redirected to the group with CHRONOLOGICAL option added to the URL.

* If the group URL have this references: **ref=group_header**, **ref=bookmarks** or **ref=direct**, the page will be redirected to the group main page with CHRONOLOGICAL added to the URL.

### Changed ###
* In the previous version, the script perform a modification in the href attribute of the **FB logo** and the **Home button** by adding the Facebook URL with the **?sk=h_chr option**.  
  In this version, I removed that amd added a **'click' event** to those two "buttons" to change the URL.  

* The variables are now better organized.

* I added some comments to the code for that you can understand better what this or that line do.

**With this version and changes, no source code is modified.**
