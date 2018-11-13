## Stack
- `Express` server to server the app, with some placeholder for API 
- `Webpack` to bundle the client code, this is being done on the server side. 
- `React` & `Redux` on the front end 
- `styled-components` for styling the app. 
- `jest` for unit testing
- `eslint` for linting the code. 

## Running
`npm i && npm start` and then open `http://localhost:8080`
`npm test` to run any tests and eslint

## Server
Using express, the server is doing the followings:
- Running the webpack 
- Serving static file in the `static` folder, there is a demo static file at `http://localhost:8080/static/react-logo.png`

## Client
The client start point is at `src/client/app/index.js` where the react and redux is created and initialized. You may want to start coding in `src/client/app/pages/home/index.js`.