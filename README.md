# Facebook Auto "Most Recent" Stories

This script is a Userscript to work with Facebook.

With this, your feed is automatically sorted to the most recent activity.

As well, if you like to see the most recent posts in the groups, this script do the job for you.

> Note: You must install this userscript from here: [Greasy Fork: Facebook \"Most Recent\" Stories](https://greasyfork.org/en/scripts/382099-facebook-auto-most-recent-stories "Facebook \"Most Recent\" Stories").

## How to report an issue?
I use the GitHub as bug tracker. If you find a bug, go to [here](https://github.com/Mettafox/Facebook-Userscript/issues "Facebook-Userscript bug tracker") and click on New issue.

Do not submit a issue solely saying that the script has a bug or something is not working. Give me as much detail as possible and how to reproduce the problem. If you do not give me details I do not have the ability to guess what it is or what is causing the problem. For more informations how to report an issue, see [this bug report template](https://github.com/Mettafox/Facebook-Userscript/blob/master/bug_report.md "bug_report.md").

If you know how to solve the problem and want to contribute, please open a Pull Request with your solution.

## Group feed: ## 
If you want to see **New Activity** instead of **Recent Posts**, you need to change that in the script.   
To do so, you need to change the `gpop[*]` index from `gpop[0]` to `gpop[1]` everywhere this variable is used.
