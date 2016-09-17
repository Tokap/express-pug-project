// npm init (installs Node)
// npm install (downloads dependencies set in package.json)
// npm install express --save (downloads express locally and saves to package.json file)

//Nodemon Autorestarts server
//npm install -g nodemon (-g for global)

//NodeInspector
// npm install -g node-inspector

//WITH NODEMON INSTALLED:
// nodemon src/ap

//WITH NODE-INSPECTOR INSTALLED:
// node-debug src/app.js

//TO USE BOTH:
// **OPEN NEW TAB AND RUN NODEMON**
// nodemon --debug src/app
// This will run on port 5858
// **BACK TO ORIGINAL TAB**
// node-inspector

// You can set a debug breakpoint from the console, or in the actual code.
// In code:
// debugger;
// If you want to use inline breaks, need to load nodemon as:
// nodemon --debug-brk src/app
// The above command auto-stops the process on the first line. We do this because
// the break statements wont work otherwise because the page loads too fast.

//EXPRESS:
//request object has extensive docs available through API docs
// req object has useful things like .hostname, .url, .route, .method, .params


//A question mark at the end of a parameter tells express it's optional:
// www.example.com/blog/:id?

// GOOD TO HAVE LINKS:

// HTTP Responses: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
// Express documentation for the response object: http://expressjs.com/api.html#res
// Detect device type or “bot” through the request object: https://github.com/rguerreiro/express-device

// The app.use method: http://expressjs.com/4x/api.html#app.use
// Express’s Static Middleware: http://expressjs.com/4x/api.html#express.static
// From the express docs: “An Express application is essentially a series of middleware calls.”

// In node.js, `__dirname` is a variable that gives you the path to the current file

////////////// PUG TEMPLATES ///////////////////
//A template lives on the sever and acts as a skeleton for the page


// npm install pug
// Express knows to grab templates from templates folder in src

//SET THE BELOW IN THE APP TO TELL IT HOW TO HANDLE TEMPLATES:
// app.set('view engine', 'pug');
// app.set('views', __dirname + '/templates'); //sets the path relative to the file rather than launch point


// If a tag is not explicity defined in Pug, it is assumed to be a Div.

// Keep a file to at max 150 lines where possible.

// When extracting templates into pieces:
// extends ./layout.pug for the item extending the layout
// block content in the layout the declare where the template is going
// block content on the second line of the template file so it defines what is going in
