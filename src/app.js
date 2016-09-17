'use strict';

const express = require('express');

let app = express();

app.get('/', function(request, response)); 
//location parameter, annonymous callback function

app.listen(3000);
