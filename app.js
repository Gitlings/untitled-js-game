const express = require('express');
const app = express();
app.get('/', function(_, response) { response.sendFile(__dirname + '/dist/index.html'); });
app.use('/dist', express.static(__dirname + '/dist'));

const port = process.env.PORT || 3000;
app.listen(port);
console.log("Web server is running. Port: " + port);
