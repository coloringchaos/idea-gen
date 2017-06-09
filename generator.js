var main = function () {
	/*this array holds the names of the categories, which match the IDs in the HTML file */	
	// var id_array = ["attitude", "form", "action"];
	var id_array = ["audience", "topic", "location"];

	/* all category arrays go here */
	// var attitude_array = [ "loving", "friendly", "jealous", "confident", "shy", "annoying", "anxious", "pompous", "proud", "angry", "horny", "sad", "gloomy", "sexy", "snobby", "ferocious", "famous", "depressed", "needy", "controlling", "grouchy", "jolly", "creepy", "lonely", "crazy", "narcissistic", "unstable", "scary", "eager", "motivated", "shy", "egocentric", "loud", "psychotic", "clever", "mellow", "bored", "sleek", "playful", "serious", "propper", "professional", "kind"];
	// var form_array = [ "box", "alarm clock", "teddy bear", "unicorn", "plant", "bird", "hat", "puppy", "cat", "light", "jewelry box", "blow dryer", "pillow", "stuffed animal", "smoke alarm", "watering can", "flower pot", "necklace", "shoe", "cereal box", "book", "boombox", "lamp", "rug", "painting", "toy", "toy", "beach ball", "wallet", "Mr. Potato Head", "Barrel of Monkeys", "football", "Ken Doll", "Darth Vader", "Care Bear", "wookie", "Happy Meal toy", "toy car", "smurf", "baby doll", "lava lamp", "neon sign", "chair", "mouse pad", "hammer", "blender", "sofa", "yoga mat", "can of beer", "night light", "door knob", "zombie", "megaphone", "blanket"];
	// var action_array = ["falls in love with you", "snuggles you", "starts a fight with you", "welcomes you", "kisses you", "yells at you", "wakes you up", "teaches you", "is obsessed with you", "loves you", "wants to take a selfie with you", "puts you to sleep", "comforts you", "offends you", "surprises you", "slaps you", "argues with you", "sings to you", "copies you", "cleans for you", "misses you", "tickles you", "pokes you", "laughs at you", "compliments you", "encourages you", "criticizes you", "stalks you", "alerts you", "proposes to you", "judges you", "tells you jokes", "courts you", "is scared of you", "wants to marry you"];

	var audience_array = ["babies", "senior citizens", "millenials", "dogs", "kids"];
	var topic_array = ["safe sex", "global warming", "camping", "virtual reality", "cryptocurrency"];
	var location_array = ["on an airplane", "Times Square", "at the beach", "in a gallery"];

	/* picker function randomly chooses an item
	 from an array of categories, takes array as input */
	var picker = function (choices) {
		randomNumber = Math.floor(Math.random() * choices.length);
		return choices[randomNumber];
	};

	/* takes IDs from the id_array,
	runs the picker function on the array for that ID,
	and fills in one of the choices in the correct blank */
	var fillBlank = function (cat) {
		$("#" + cat).text(picker(eval(cat + "_array")));
	};

	for ( var i = 0 ; i < id_array.length ; i++) {
		fillBlank(id_array[i]);
	}
	
	// refresh individual blank on click 
	$(".gen").hover( function () {
	$(this).css( 'cursor', 'pointer');
	});
	$(document).on("click", ".gen", function() {
		var currentId = $(this).attr('id');
		var oldText = $(this).text();
		fillBlank(currentId);
		var newText = $(this).text();
		/* check that the old text doesn't match the new text,
		if it does, roll the dice again until it doesn't */
		while ( oldText === newText ) {
			fillBlank(currentId);
			newText = $(this).text();
		};
	});

	// refresh button behavior
	$("#refresh").hover( function () {
		$(this).css( 'cursor', 'pointer');
	});

	$(document).on("click", "#refresh", main);
};

$(document).ready( main );

