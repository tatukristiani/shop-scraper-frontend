# Web Scraper project

> This project is a testing project that retrieves information about products from Tori & displays them to the user.
> Notifications about certain products can be added, but the notification alert system is currently working only for a specific user.


## Publish information

This repository holds the React.js frontend source code & the backend is located in another repository and is hosted on Heroku.
Frontend is hosted on Netflify.

## Steps for publishing (added for documentation purposes for myself)
1. Publish Backend (Node.js/express server) to Heroku
    - Create a new project on Heroku & follow the steps from Heroku to push the project to git
    - Make sure your index.js/app.js AKA server files app.listen() contains -> process.env.PORT since Heroku uses their own port
    - Make sure package.json contains "start": "node index.js" under the scripts section, since it's needed to start the server
2. Configure MongoDB to Heroku (If using MongoDB)
    - From MongoDB cloud, set the network access to allow all IP addresses (can be later modified for better protection)
    - Create A new Config Variable to Heroku either by their platform or using command -> heroku config:set VAR_NAME="VAR_VALUE"
    - Change the current MongoDB connection to connect to process.env.VAR_NAME (VAR_NAME is replaced by the name chosen earlier)
3. Publish Frontend (React.js) to Netlify