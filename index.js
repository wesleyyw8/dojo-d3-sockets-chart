const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/src/ui')); 
app.use('/build', express.static(__dirname + '/build')); 
app.use('/scripts', express.static(__dirname + '/node_modules'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

// Init routes
//require('./src/routes/routes.server')(app, db);

app.get('*', function(req, res) {
  res.sendfile('./src/ui/views/index.html');
});