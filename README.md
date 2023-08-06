# Web Scraper project

> This project is made for me to learn a little abut web scraping and the application itself retrieves information about products from Tori & displays them to the user.
> Notifications about certain products can be added when you create a user for yourself first.


## Publish information

This repository holds the React.js frontend source code & the backend is located in another repository and is hosted on Heroku.
Frontend is hosted on Netflify.

## Steps for publishing (added for documentation purposes for myself)
1. Publish Backend (Node.js/express server) to Heroku
    - Create a new project on Heroku & follow the steps from Heroku to push the project to git
    - Make sure your index.js/app.js AKA server files app.listen() contains -> process.env.PORT since Heroku uses their own port
    - Make sure package.json contains "start": "node index.js" under the scripts section, since it's needed to start the server
    - Add all relevant environment variables to heroku
2. Configure MongoDB to Heroku (If using MongoDB)
    - From MongoDB cloud, set the network access to allow all IP addresses (can be later modified for better protection)
    - Create A new Config Variable to Heroku either by their platform or using command -> heroku config:set VAR_NAME="VAR_VALUE"
    - Change the current MongoDB connection to connect to process.env.VAR_NAME (VAR_NAME is replaced by the name chosen earlier)
3. Publish Frontend (React.js) to Netlify
    - Instead of "npm run build" build command use "CI= npm run build"
4. Heroku deploy commands:
    - git add .
    - git commit -am "make it better"
    - git push heroku master