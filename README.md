# Simple Academic Website

This is the source code for my academic wbsite, which you can view at [https://people.eecs.berkeley.edu/~akrentsel].

I made this because all of the existing templates felt way too clunky, I wanted something nice and clean. 

The code for the site is dead simple: there is a single HTML file, index.html, where everything lives except some simple styling rules, which live in the .css file. I use [latex.css](https://latex.vercel.app/) to style the page similarly to a latex document.

I've also tried to set up deployment to be as simple as possible. On the university web server, I've set up a cronjob that runs this script every hour:
```bash
#!/bin/bash

# Navigate to the repository directory
cd /home/eecs/akrentsel/public_html

# Fetch the latest changes from the remote repository
git fetch

# Check if the local repository is behind the remote repository
UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")

if [ $LOCAL != $REMOTE ]; then
    # If the local repository is behind, pull the changes
    git pull

    # Get the latest commit message
    COMMIT_MESSAGE=$(git log -1 --pretty=%B)

    # Send an email notification with the commit message
    echo -e "Successful deployment.\n\nDeployed version details:\n$COMMIT_MESSAGE" | mail -s "Deployment Notification" akrentsel@berkeley.edu
fi
```

This will check for any changes that I pushed to GitHub and if there are any, pull them down and email me to let me know the web server has been updated.

Note: Make sure to `chmod -R a+rx .` in the directory before pushing – all files need to be reachable!
