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
