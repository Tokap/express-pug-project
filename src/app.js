'use strict';

const express = require('express'),
        posts = require('./mock/posts.json');

let app = express();

app.get('/', (req, res) => {
  res.send("<h1>I love Beets!</h1>")
});
//function takes (location parameter, annonymous callback function)

app.get('/blog', (req, res) => {
  res.send(posts);
});

app.listen(3000, () =>{
  console.log("The frontend server is running on port 3000")
});
// listen can take a callback as its second parameter
