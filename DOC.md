# Outside-in TDD with React

![CI tests](https://github.com/rjNemo/opinion-ate/workflows/Test/badge.svg)

[link](https://outsidein.dev/react/#tech-stack)

## Stack

- React: Create React App
- State Management: Redux & Redux-thunk
- Http client: axios
- UI: Material UI
- Test runner: Jest, React Testing Library
- End-2-end: Cypress
- Continuous integration: Github actions
- Deployment: Render

## Project Setup

Setting up a project involves:

- Write a list of stories to work on
- Install dev deps
- Install React
- Set linting and autoformatting
- Get End-to-end and unit tests running
- Get tests running on CI
- Get the app automatically deploying to a hosting service

## Stories

```
As a `role`, I want to `action` so that `benefit`
```

One may use `Trello` or `BugBuster` to do so.

- as `dev team` I want to `Set Up Development Environment` to start dev
- as `dev team` I want to `Create App`
- as `dev team` I want to `Set Up Autoformatting` to have a well structured code
- as `dev` I want to `Set Up Tests On CI` to validate new code before merging it to codebase
- as `dev` I want to `Set Up Automatic Deployment` to push new changes to customers as soon as possible
- as `user` I want a `Readme file` to understand the what and why of the product
- as `user` I want to see a `List of Restaurants` to choose from
- as `user` I want to see an `App Styled with Material Design` because it's beautiful and I'm used to it
- as `user` I want the app to `Show Loading and Error States` to have visual feedback
- as `user` I want to `Add Restaurants` to give my opinion.

## Dev env

- git
- node
- npm or yarn
- editor: vs code

## Autoformatting

CRA comes with built-in setting but we can have ours so the editor can see them:

```sh
yarn add --dev eslint eslint-config-prettier eslint-plugin-cypress eslint-plugin-jest eslint-plugin-prettier prettier
```

and create `.eslintrc.js` with the following:

```js
module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier', 'jest', 'cypress'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    'jest/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'warn',
  },
};
```

This file adds Prettier to Create React App's default linting rules and
makes ESLint aware of global variables provided by ES6, the browser, Jest, and Cypress.

Add also a `.prettierrc.js` file:

```js
module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
};
```

If not done already install EsLint Extension for VS Code.

## End-to-end testing

Install `cypress`

```sh
yarn add --dev cypress
```

and edit `package.json`:

```json
"scripts": {
    ...
    "cypress": "cypress open",
    ...
}
```

Then edit `cypress.json` file to use relative URLs.

```json
{
  "baseUrl": "http://localhost:3000"
}
```

Remove examples files and create a smoke test

```js
describe('Smoke test', () => {
  it('can see Homepage', () => {
    cy.visit('/');
    cy.contains('Learn React');
  });
});
```

## CI

Use Github actions and perform feature work in branches.

```sh
git checkout -b ci
```

Create a `.github/workflows/test.yml` file to configure continuous integration tests.

```yml
# Workflow name
name: Test
# When it is triggered. Push means PR and merges will be tested
on: [push]
# Jobs sequence to run. Here only one named 'Test'
jobs:
    test:
        name: Test
        # one may fix linux version to avoid sudden breaks due to updates
        runs-on: ubuntu-latest
        steps:
            # github/action stable version to check the code
            - uses: actions/checkout@v2
            - name: Install dependencies
            # frozen-lockfile ensures yarn will not install differents dependencies that the one specified in lockfile
              run: yarn install --frozen-lockfile
            - name: Unit tests
            # --watchAll=false so they run only once
              run: yarn test --watchAll=false
            - name: E2E tests
            # latest stable version
              uses: cypress-io/github-action@v1
            # wait for dev server to start before running E2E tests
            with:
                start: yarn start
                wait-on: 'http://localhost:3000'
```

When work is finished, create a pull request and once the test have passed merge it to master and delete former branch.

## Automatic Deploy in production

Even though our app doesn't do anything yet it's time to deploy.

First build app

```sh
yarn build
```

Then configure a new web service in [Render](https://render.com) and set auto-deploy.

This project is deployed at this [URL](https://opinion-ate.onrender.com).

## Restaurants List

To build this first feature we follow outside-in TDD:

1.  write failing E2E test
1.  build functionality via multiple red-green-refactor loops:
    1.  write failing unit test
    1.  write enough production code
    1.  refactor
1.  cycle...

This functionality is a **vertical slice**, it touches multiple layers. It's good for starters as it builds something in all application layer to ensure they all work together

Write the code you wish you had.

### Specification

Write `cypress/integration/listing-restaurants.spec.js` E2E test to see restaurants list displayed:

```js
describe('Restaurant list', () => {
  it('shows restaurants from the server', () => {
    const pastaPlace = 'Sushi Place';
    const saladPlace = 'Salad Place';

    // prevent accessing real backend
    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url:
        'https://api.outsidein.dev/wRLRwKdVZ9N7ei4PeyIyWOG9Sj8hYZAa/restaurants',
      response: [
        {id: 1, name: pastaPlace},
        {id: 2, name: saladPlace},
      ],
    });

    // visit root url
    cy.visit('/');
    cy.contains(pastaPlace);
    cy.contains(saladPlace);
  });
});
```

Commit to have focused commits.

### Structure

For this feature the code will touch 3 layers:

1. UI: React components
1. State management: Redux store
1. API calls: Axios client

Write code `outside-in` so start with UI and write the code you wish you had.

Our `RestaurantList`component needs to:

- request restaurants to be loaded
- display restaurants once they are loaded

Write 2 tests so each test checks only one behavior.

## Redux

Once they pass, it's time to step back to E2E level. RestaurantList expect a restaurant array from Redux store.

Install redux

```sh
yarn add redux react-redux redux-devtools-extension redux-thunk
```

## API Client

No unit testing, the E2E tests will drive implementation.
Install Axios because Cypress's network request stubbing doesn't currently work for fetch():

```sh
yarn add axios
```
