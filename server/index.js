const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

const index = path.resolve(__dirname, '../client/index.html')


// load index html file
app.get('/', (req, res) => {
	res.sendFile(index);
});

// load stylesheet
app.get('/css/styles.css', function(req, res) {
	// used path.resolve with relative directory
	res.sendFile(path.resolve(__dirname , '../client/css/styles.css'));

});

app.listen(port, () => {
	console.log('listening on port ' + port);
});