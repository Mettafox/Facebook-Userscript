# Facebook Auto "Most Recent" Stories

This script is a Userscript to work with Facebook.

With this, your feed is automatically sorted to the most recent activity.

As well, if you like to see the most recent posts in the groups, this script do the job for you.

Note: You must install this userscript from here: [Greasy Fork: Facebook \"Most Recent\" Stories](https://greasyfork.org/en/scripts/382099-facebook-auto-most-recent-stories "Facebook \"Most Recent\" Stories").

## Reporting bugs
I use the GitHub as bug tracker, if you find a bug, please feel free to submit a issue here.

But do not submit a issue solely saying that the script has a bug or something is not working. Give me as much detail as possible and how to reproduce the problem. If you do not give me details I do not have the ability to guess what it is or what is causing the problem.

Better will be if you help me in solving the problem by sending me possible solutions or even code if you want to contribute.

Even better will be if you help me in solving the problem by sending me possible solutions or even code if you want to contribute.
## How to work with this script?
### 1. Feed:
I changed the URL of the **Facebook logo (1)** and the **Home button (2)** in the blue bar. So when you click on them, you will be redirected to the most recent feed.
![bluebar](https://i.imgur.com/DOOWVxJ.png)

### 2. Groups:
In the left side bar, you have the shortcuts section with groups where you participate.
I changed the link of the groups in this section by adding the option **?sorting_setting=CHRONOLOGICAL**, so, when you click on these shortcuts, you will be redirected to the group and automatically the order of the posts will change to **Recent Posts**.

**Note:** If you want to see **New Activity** instead of **Recent Posts**, you need to change that in the script.

For that, you need to change the `gpop[*]` index from `gpop[0]` to `gpop[1]` everywhere that this variable is used.
