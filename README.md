# Sales Alert Pro Project

> Sales Alert Pro is a simple website and it allows you to create email notifications for products sold on Tori.fi. You can also search for products, but this was just added as an extra.
> 
> The sole purpose of this project was for me to learn a little about web scraping and I used cheerios with this one.

## Publish information

This repository holds the React.js frontend source code & the backend is located in another repository which is hosted on Heroku.

Netflify was used for the Frontend hosting. You can find the web site here: [Sales Alert Pro](https://keen-cassata-9a91f3.netlify.app/)


## Instructions & rules of the website
You can't really do much on the website except search for products without creating an account. So first create an account if you want to use and test the website completely.

Note that all of the notifications are checked once every hour, so it will take a while to receive the email.


**Creating a notification:**

Clicking the "Create new notification" takes you to a page where you can insert a product name or a search term & a max price for the product. Keep in mind that the product name or search term you use, tries to find products on sale which contains your product name or search term (case-insensitive).

**Activate/Disable Notifications:**

You can see the status of your notifications from the "Notifications" page. There can either be "Active" or "Disabled" status and the status will change automatically to "Disabled" when your product has been found.

When disabled, your notifications won't trigger any email alerts & when they are active an email will be sent to your email address when the product has been found.

Notification can also be removed via clicking the "Remove" button.

**Login/Register:**

I don't think I need to go too much into detail with this one. Simple and same logic as anywhere else, but you can't use any 3rd party accounts.

**Account Information Modification (Only available/Visible when logged in):**

When you login, you can see a new link on the top right hand corner saying "My Account" which will take you to a page where you can change your email address just by writing a new one an pressing "Change Email".

You can also change your password by filling the password fields & clicking the "Change Password" button.

**Forgot Password:**

If you happen to forgot your password, you can reset it from the Login page through clicking the "Forgot password?" button & giving the email address of your account. An email is sent to that email address which holds a link to a page where the password can be reset.

## Steps for publishing (added for documentation purposes for myself)
1. Publish Backend (Node.js/express server) to Heroku
    - Create a new project on Heroku & follow the steps from Heroku to push the project to git
    - Make sure your index.js/app.js AKA server files app.listen() contains -> process.env.PORT since Heroku uses their own port
    - Make sure package.json contains "start": "node index.js" under the scripts section, since it's needed to start the server
    - Add all relevant environment variables to heroku
2. Configure MongoDB to Heroku
    - Allow the IP of the backend to connect to MondoDB and add the connection string to environment variables
3. Publish Frontend (React.js) to Netlify
    - Instead of "npm run build" build command use "CI= npm run build"
