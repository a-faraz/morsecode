const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const config = require('../knexfile.js');

const app = express();
const port = process.env.PORT || 3000;


const knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: './codes.sqlite'
	}
});

const index = path.resolve(__dirname, '../client/index.html')


// load index html file
app.get('/', (req, res) => {
	res.sendFile(index);
});

app.get('/words', (req, res) => {
	return knex.select().table('words')
		.then(function(data){
			res.send(data);
		});
})

// load stylesheet
app.get('/css/styles.css', function(req, res) {
	// used path.resolve with relative directory
	res.sendFile(path.resolve(__dirname , '../client/css/styles.css'));

});

app.listen(port, () => {
	console.log('listening on port ' + port);
});