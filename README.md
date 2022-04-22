# Spotify Clone App by Rhenald Karrel

## Features Highlight

- Hooks: implemented a lifted state in the pages only
- Flex & Grid: implemented a handmade grid and flex layouts.
- Responsive: mobile-friendly but still need some improvement for Safari.
- Typescript: defined spotify's API response types and other utilities types.
- Redux: stored the authentication informations to the store.
- Eslint: clean code.
- Testing: tested 2 components (TrackCard & SearchTracks) with simulating user interaction. All pass the tests.
- MSW: Implemented MSW for mocking API async call test in home page.
- PWA: Implemented PWA.
- UI/UX: Implemented quite good UI/UX but still need some improvement indeed.
- Creative stuffs: Displayed user's basic information such as display name and picture.
- Folder Structure and Naming Conventions: tried to be as readable and contextual as possible.
- API: Search tracks, create playlist, and get user's profile.

## What Will I Do If I Have More Time

- Will working on the 404/no actions state in the page later.
- Add more integration and unit tests.
- Refactor and improve CSS for all devices to make the UI more clean and tidy. Implement CSS modules.
- Add some interactivity and light animations.
- Refactor and clean the code. Also improve some logic.
- Store more data to redux and add more configurations. (e.g: tracks data and selected tracks data, etc)

## How To Use This App

- Clone it
- Go to Spotify developer dashboard
- Create new app and adjust the configurations following the docs
- Observe the .env.example file
- Create a .env.local file and add your CLIENT ID from Spotify
- Add the base url according to your need in the .env.local file
- Run 'npm i && npm start'
  P.S: I am using Spotify's implicit grant flow for the authentication.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
