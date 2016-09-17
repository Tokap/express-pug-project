// npm install express-generator -g

// USE WITH:
// express TESTAPP

//npm start

//CREATING API END POINT:
// app.js file
app.get('/posts', function(req, res) {
  if (req.query.raw) { //looks for the query parameter -> Raw == true.
    res.json(posts);
  } else {
    res.json(postLists);
  }
})

// USEFUL LINKS:

// Documentation on the res.json method: http://expressjs.com/4x/api.html#res.json
// How to turn url’s into “GET” query’s: https://teamtreehouse.com/library/ajax-basics/ajax-concepts/get-and-post
// The most popular node client for Mongodb: http://mongoosejs.com/
// The MEAN Stack Generator: http://mean.io/#!/
// A popular node client for PostgreSQL: https://github.com/brianc/node-postgres
// A popular node client for MySQL: https://github.com/felixge/node-mysql/
