'use strict';

const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send("<h1>I love learning!</h1>")
});
//function takes (location parameter, annonymous callback function)

app.get('/blog', (req, res) => {

});

app.listen(3000, () =>{
  console.log("The frontend server is running on port 3000")
});
// listen can take a callback as its second parameter
