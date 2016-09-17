'use strict';

const express = require('express');

let app = express();

app.get('/', function(request, response){
  response.send("I love learning!")

});
//function takes (location parameter, annonymous callback function)

app.listen(3000);
