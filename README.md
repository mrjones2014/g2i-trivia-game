# Getting Started

The first thing you should do is run `yarn configure:git`, which will install [Husky](https://github.com/typicode/husky) and configure the githooks specified in the Husky config.

## Project Structure

See [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).

```
src/
├── components/ <-- organized according to Atomic Design
│   ├── 01-particles/ <-- component Sass files go next to the component
│   ├── 02-atoms/
│   ├── 03-molecules/
│   ├── 04-organisms/
│   └── 05-pages/
├── hooks/
│   ├── context/   <-- custom hooks for using React contexts
│   ├── domain/    <-- custom hooks related to the application domain
│   └── utilities/ <-- custom hooks for general utilities
├── models/  <-- app domain models/records
├── sass/ <-- shared Sass code (mixins, functions, etc.)
├── services/
│   ├── questions/  <-- services go in a folder named after the domain object
│   └── service-factory.ts
└── utilities/
    └── constants/
    └── types/
```

## Available Scripts

## `yarn format`

Runs [Prettier](https://github.com/prettier/prettier) on modified files via [pretty-quick](https://github.com/azz/pretty-quick). This is also run automatically by a git pre-commit
hook via [Husky](https://github.com/typicode/husky).

## `yarn configure:git`

Configures githooks via [Husky](https://github.com/typicode/husky).

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
