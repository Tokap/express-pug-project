'use strict';

const express = require('express'),
        posts = require('./mock/posts.json');

// Below converts object into an array.
const postsLists = Object.keys(posts).map(function(value){
                     return posts[value]
                   });

let app = express();

app.use('/static', express.static(__dirname + '/public'));
// the static statements adds that as a leading directory


app.set('view engine', 'pug');
app.set('views', __dirname + '/templates'); //sets the path relative to the file rather than launch point

app.get('/', (req, res) => {
  res.render('index')
});
//function takes (location parameter, annonymous callback function)

app.get('/blog/:title?', (req, res) => {
  const title = req.params.title;
  if (title === undefined) {
    res.status(503);
    res.render('blog', { posts: postsLists});
  } else {
    const post = posts[title] || {};
    // The 'or' statement above here is a cheap way of avoiding writing explicit error handling. Use sparingly.
    res.render('post', { post: post});
  }
});

app.listen(3000, () =>{
  console.log("The frontend server is running on port 3000")
});
// listen can take a callback as its second parameter
