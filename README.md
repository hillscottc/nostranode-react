# webpack-express-boilerplate

Based on [The ultimate Webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup) boilerplate.

### Features
- Basic React on the client, no Redux.
- Hot module replacement in development.
- [CSS modules](http://glenmaddern.com/articles/css-modules).


## Running 
For development:
    
    npm start
Then navigate to http://localhost:3000 in your browser.

For a production build:

    npm build
Then you can open `./dist/index.html` in your browser.


### Babel and Linting
Both Node server and frontend code runs with Babel. And all of it is linted. 
    
    npm run eslint
    npm run jscs


