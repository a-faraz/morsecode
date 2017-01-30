			
			var dictionary = {
			  'a': '.-',
			  'b': '-...',
			  'c': '-.-.',
			  'd': '-..',
			  'e': '.',
			  'f': '..-.',
			  'g': '--.',
			  'h': '....',
			  'i': '..',
			  'j': '.---',
			  'k': '-.-',
			  'l': '.-..',
			  'm': '--',
			  'n': '-.',
			  'o': '---',
			  'p': '.--.',
			  'q': '--.-',
			  'r': '.-.',
			  's': '...',
			  't': '-',
			  'u': '..-',
			  'v': '...-',
			  'w': '.--',
			  'x': '-..-',
			  'y': '-.--',
			  'z': '--..'
			}  
			
*** mapping to morse code ***
	  
		$("#auto-input").val()
		  .split('')
		  .map(function(letter){
		  	return dictionary[letter.toLowerCase()]
		  })
			.join('');
			
*** commands used for database ***
		
		two columns [ word | codedword ]

		DROP TABLE words;

		CREATE TABLE words (word, codedword);

		INSERT INTO words VALUES ('avatar', '.- ...- .- - .- .-.');
		INSERT INTO words VALUES ('lorem', '.-.. --- .-. . --');
		INSERT INTO words VALUES ('hello', '.... . .-.. .-.. ---');
		INSERT INTO words VALUES ('foo', '..-. --- ---');
		INSERT INTO words VALUES ('boardgame', '-... --- .- .-. -.. --. .- -- .');
		INSERT INTO words VALUES ('racecar', '.-. .- -.-. . -.-. .- .-.');
		INSERT INTO words VALUES ('madam', '-- .- -.. .- --');
		INSERT INTO words VALUES ('level', '.-.. . ...- . .-..');
		INSERT INTO words VALUES ('noon', '-. --- --- -.');
		INSERT INTO words VALUES ('radar', '.-. .- -.. .- .-.');
		INSERT INTO words VALUES ('rotator', '.-. --- - .- - --- .-.');
		INSERT INTO words VALUES ('tenet', '- . -. . -');
		INSERT INTO words VALUES ('ratio', '.-. .- - .. ---');
		INSERT INTO words VALUES ('rail', '.-. .- .. .-..');
		INSERT INTO words VALUES ('ruby', '.-. ..- -... -.--');
		INSERT INTO words VALUES ('texas', '- . -..- .- ...');
		INSERT INTO words VALUES ('teapot', '- . .- .--. --- -');
		INSERT INTO words VALUES ('node', '-. --- -.. .');
		INSERT INTO words VALUES ('noble', '-. --- -... .-.. .');