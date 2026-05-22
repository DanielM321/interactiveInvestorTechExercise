# interactiveInvestorTechExercise

Repository for sharing my solution to the interactive investor technical exercise

# 6 most important user journeys from the web site

1. Register as new user
2. Login and logout
3. Search for product and add Product to Cart
4. Proceed to checkout and pay for an item
5. Downloading an invoice
6. Deleting a user account

# The 4 that I scripted and why

1. Registering a new user - I feel this is important as it is the first thing that a user will need to do before they are able to make any purchases and interact with the site making this a critical workflow
2. Login and Log out - Login especially is the first thing that an existing customer has to do in order to be able to interact with the site and logging out was also included to ensure session management functions correctly
3. Searching for a product and adding to the cart - Of all of the user journeys that occur for adding an item to the cart, searching for the item first and then adding it to the cart from the search results is what I believe to be the most common workflow to achieve this. Testing this helps verify that users can locate products efficiently
4. Proceeding to the checkout and paying for the item - Because payments are business critical as well as a high risk area. It is paramount that payments are tested as throughly as possible because any issues with payments could directly impact revuene and client trust.

# Pre requisites for running locally

Once you have cloned the repo, run the following commands one by one to install dependencies@

1. npx playwright install
2. npm i @faker-js/faker
3. npm i date-fns
4. npm i dotenv
5. npm install -g win-node-env

# Running tests locally in playwright test runner

Tests can be run using the playwright test runner. To do this you will need to install the Playwright Test for VSCode VS code extension:

- Click the extenstions icon on the left hand side of the VS code screen
- In the 'Search Extensions in Marketplace' field search for Playwright Test for VSCode VS
- Install the Playwright Test for VSCode VS extension
- After this you should have an icon on the left that looks like a little test tube - this is the playwright test runner

# Running tests locally in command line

Tests can be run locally with the following commands:

- For all projects: npm run pw-test-all
- For only chromium browser: npm run pw-test-chromium
- For only Firefox browser: npm run pw-test-firefox
- For only Webkit (Safari) browser: npm run pw-test-webkit
