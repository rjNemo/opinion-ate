# Outside-in TDD with React

[link](https://outsidein.dev/react/#tech-stack)

## Stack

- React: Create React App
- State Management: Redux & Redux-thunk
- Http client: axios
- UI: Material UI
- Test runner: Jest, React Testing Library
- End-2-end: Cypress
- Continuous integration: Github actions
- Deployment: Netlify

## Project Setup

Setting up a project involves:

- Write a list of stories to work on
- Install dev deps
- Install React
- Set linting and autoformatting
- Get End-to-end and unit tests running
- Get tests running on CI
- Get the app automatically deploying to a hosting service

### Stories

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

### Dev env

- git
- node
- npm or yarn
- editor: vs code

### Autoformatting

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
