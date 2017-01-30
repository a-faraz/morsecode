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

// load stylesheet
app.get('/css/styles.css', function(req, res) {
	// used path.resolve with relative directory
	res.sendFile(path.resolve(__dirname , '../client/css/styles.css'));

});

app.get('/words', (req, res) => {
	const encoded = [];
	function isPalindrome(str){
		var backwardsStr = str.split('').reverse().join('');

		if (str === backwardsStr) {
			return true;
		} else {
			return false;
		}
	} 

	return knex.select().table('words')
		.then(function(data){
			// data is an array of objects
			//console.log('data ', data);
			data.forEach(function(val){
				// only send words that are palindromes
				if (isPalindrome(val.word)) {
					encoded.push(val);
				}
			});
			// encoded is an array of palindrome objects
			// console.log('encoded ', encoded);
			res.send(encoded);
		});
})


app.listen(port, () => {
	console.log('listening on port ' + port);
});