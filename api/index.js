const express = require('express')
const helmet = require('helmet');
const http = require('http');

const app = express()

// add some security-related headers to the response
app.use(helmet())

var request = require('request');

app.get('/api/posts', function(req,res) {
  //modify the url in any way you want
  var newurl = 'http://www.maslab.org/wp-json/wp/v2/posts?categories=11';
  request(newurl).pipe(res);
});

app.listen(9000, () => console.log(`Example app listening on port ${9000}!`))

// module.exports = app
