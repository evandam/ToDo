var
	express = require('express'),
	bodyParser = require('body-parser');
	package = require('../package.json');

var app = express();

app.use(express.static(package.paths.dest.dir));

var port = package.port || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});

module.exports.app = app;
