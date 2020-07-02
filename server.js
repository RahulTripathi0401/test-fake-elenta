const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/templates'));
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/templates/index.html');
});

app.listen(3000, () => console.log('Server started at port 3000'));
