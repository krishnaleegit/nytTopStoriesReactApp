# NYT Top Stories

## Overview

NYT Top Stories is the place to get your daily news.


### Endpoints

This is a React application built using the [New York Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview). The Top Stories API returns an array of articles currently on the specified section.


These are examples of the API's endpoints:

```
Example Calls
https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=yourkey
https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=yourkey
https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=yourkey

```

### API Key

An API key is required to utilize the API. Here's the [instructions](https://developer.nytimes.com/get-started) to get started using the API. Once you create a developer account on New York Times, you'll have to register your application to access the API key.

- Tip: Store your API key in a `.env` or `.env.local` file as environment variables in the root of your project. Make sure the `.env` or `.env.local` is added to the `.gitignore` file so you dont accidentally push up your API key. [Read more](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env)
- Tip: For Cypress testing, you will also need to store the API key as an environment variable. Inside your `cypress` folder, create a file called `cypress.env.json` to store the environment variable. Add `cypress.env.json` to your `.gitignore`. [Read more](https://docs.cypress.io/guides/guides/environment-variables#Option-2-cypress-env-json)


- Wireframes
  ![Wireframes](https://user-images.githubusercontent.com/93230374/171775031-b07d0314-db69-4beb-b3bb-34daceb47a13.png)

- Component Architecture
  ![Component](https://user-images.githubusercontent.com/93230374/171773442-ba804291-cb60-4c51-9809-7b3dbdff705f.png)

# Learning Goals

- React fundamentals
- React Router to build a multipage application
- REST APIs
- Asynchronous JavaScript
- Acceptance testing & End-to-End (E2E) testing via Cypress



#Getting Started

To get a local copy up and running follow these simple steps.

## Clone the Repository

1. In your terminal, clone the repository to your local machine
   ```sh
   git clone git@github.com:krishnaleegit/nytTopStoriesReactApp.git
   ```
2. `cd` into the root directory
   ```sh
   cd nyt
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server to view the application in the browser
   ```sh
   npm start
   ```
   - Runs the app in the development mode.
   - Open http://localhost:3000 to view it in the browser.
   - The page will reload if you make edits.

## Testing Installation

1. Install Cypress

   ```sh
   npm i -D cypress
   ```

   or

   ```sh
   npm install cypress --save-dev
   ```

2. Add this command to your `scripts` in `package.json`

   ```sh
   "cypress": "cypress open"
   ```

3. Run cypress tests
   ```sh
   npm run cypress
   ```

# Features

## Filter Search

A user can type into the controlled form to find an article based on the keyword typed in the search input.


## Article Details

After searching for an article, you can select an article to find out more information. After selecting an article, you will be navigated to a details page. Here you can view additional details such as a link to the New York Times article.


# Technologies Used

- React
- React Router
- Cypress
- Javascript
- HTML
- CSS
- React Dev Tools (Chrome Dev Tools)




# Developed By

- [LKrushna Chakramahanthi](https://github.com/krishnaleegit)

