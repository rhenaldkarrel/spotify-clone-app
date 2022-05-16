# Spotify Clone App by Rhenald Karrel

<hr />

## Introduction

### Features Highlight

1. Show recommended tracks based on users' top items
2. Search for tracks
3. Create playlist
4. Add tracks to your playlist
5. See all of your playlist
6. See tracks inside of your playlist
7. See your account profile picture and display name
8. Open tracks & playlist in Spotify with one click

### Built With

1. [Create React App](https://create-react-app.dev/) to initialize the project.
2. Written in [Typescript](https://www.typescriptlang.org/)
3. [React Redux](https://react-redux.js.org/) for state management
4. [React Router](https://reactrouter.com/) for routing
5. [Jest](https://jestjs.io/), for testing
6. [MSW](https://mswjs.io/), for creating API mock
7. Deployed on [Vercel](https://vercel.com/)

### Technical Details

1. Use redux to store token, user profile, and selected tracks data.
2. Implements Spotify API for searching tracks, get users' top items tracks, creating playlist, adding tracks to playlist, getting all of your playlist, getting all contents of your playlist, and get your Spotify profile data.
3. Use react router with private route for authentication verification.
4. Implements several types for typescript.
5. Create unit and integration test. Use MSW to test API calls.

## How To Use This App

### Prerequisites

1. Spotify account (Free/Premium)
2. Setting up Spotify Application in [Spotify Developer Dashboard ](https://developer.spotify.com/dashboard/applications)
3. NodeJS installed in your machine
4. Git

### Installation

1. Clone repo to your local machine. After it finished, open the folder and install project dependencies. You can do this from your command line/terminal :

```bash
# Clone this repository
$ git clone https://github.com/irfan44/generasi-gigih-homework.git

# Go to repository folder
$ cd generasi-gigih-homework

# Install dependencies
$ npm i
```

2. Insert your spotify key to `REACT_APP_SPOTIFY_CLIENT_ID` and redirect to `http://localhost:3000/` for `REACT_APP_BASE_URL` in `.env` file. Make sure that you've added the redirect URL to your application in Spotify Developer Dashboard

```bash
# .env example
REACT_APP_SPOTIFY_CLIENT_ID=9090asdasdczsda9a10ak12eqws12smx
REACT_APP_BASE_URL=http://localhost:3000/
```

3. Run the app

```bash
$ npm start
```

4. Open `http://localhost:3000` to view the app in your browser

## Disclaimer

Please let me know if there is anything I missed. :-)
