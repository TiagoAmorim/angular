var express = require('express');
var app = express()
	.use('/', express.static(__dirname))
	.listen(8000);
console.log("Server listening on port 8000");
