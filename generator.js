var main = function () {
	/*this array holds the names of the categories, which match the IDs in the HTML file */	
	// var id_array = ["attitude", "form", "action"];
	var id_array = ["audience", "topic", "location"];

	/* all category arrays go here */
	// var attitude_array = [ "loving", "friendly", "jealous", "confident", "shy", "annoying", "anxious", "pompous", "proud", "angry", "horny", "sad", "gloomy", "sexy", "snobby", "ferocious", "famous", "depressed", "needy", "controlling", "grouchy", "jolly", "creepy", "lonely", "crazy", "narcissistic", "unstable", "scary", "eager", "motivated", "shy", "egocentric", "loud", "psychotic", "clever", "mellow", "bored", "sleek", "playful", "serious", "propper", "professional", "kind"];
	// var form_array = [ "box", "alarm clock", "teddy bear", "unicorn", "plant", "bird", "hat", "puppy", "cat", "light", "jewelry box", "blow dryer", "pillow", "stuffed animal", "smoke alarm", "watering can", "flower pot", "necklace", "shoe", "cereal box", "book", "boombox", "lamp", "rug", "painting", "toy", "toy", "beach ball", "wallet", "Mr. Potato Head", "Barrel of Monkeys", "football", "Ken Doll", "Darth Vader", "Care Bear", "wookie", "Happy Meal toy", "toy car", "smurf", "baby doll", "lava lamp", "neon sign", "chair", "mouse pad", "hammer", "blender", "sofa", "yoga mat", "can of beer", "night light", "door knob", "zombie", "megaphone", "blanket"];
	// var action_array = ["falls in love with you", "snuggles you", "starts a fight with you", "welcomes you", "kisses you", "yells at you", "wakes you up", "teaches you", "is obsessed with you", "loves you", "wants to take a selfie with you", "puts you to sleep", "comforts you", "offends you", "surprises you", "slaps you", "argues with you", "sings to you", "copies you", "cleans for you", "misses you", "tickles you", "pokes you", "laughs at you", "compliments you", "encourages you", "criticizes you", "stalks you", "alerts you", "proposes to you", "judges you", "tells you jokes", "courts you", "is scared of you", "wants to marry you"];

	var audience_array = ["parents", "babies", "senior citizens", "millenials", "dogs", "kids","baby boomers","working class citizens","politicians","celebrities","angry people","people with too much time on their hands","the 1%","parents","couples","teenagers","students","teachers","creative technologists","broke college students","athletes","lazy people", "siblings", "exes", "middleschoolers", "grandparents","dentists","foodies", "retired circus clowns", "people on Tinder", "graduate students", "matadors", "pet parents", "quantum physicists", "artisnal cheese makers","alien abductees","conspiracy theorists","free range farmers","children's author","jazz musicians","the undead","doppelgangers","necromancers", "professional polo players", "talking animals", "stage magicians","hermit crabs","alien invaders","friends","frenemies","coworkers","people who hate their bosses","you","taxi drivers", "robots","costumed mascots", "apartment brokers"];
	var topic_array = ["safe sex", "twitter", "global warming", "camping", "virtual reality", "cryptocurrency","the blockchain","eating food","sleeping","physical computing","credit scores", "social justice","scuba diving", "student loans", "passive agressive texting", "drunk dialing your ex", "sexting", "making a mixtape", "break ups", "ranting on Facebook", "traveling", "making art", "social media", "protests", "drinking wine", "meditation", "data visualization", "moving", "cats", "projection mapping", "dancing", "singing", "digital fabrication", "chrome extensions", "3D printing", "exercising", "making web extensions","eating","calling in sick", "gardening", "procrastination", "doing math", "lion taming", "parenting", "reinventing the wheel", "delaying traffic","beekeeping","toasting strudel", "performing nude", "doing the limbo","summoning the undead","mind control", "necromancy", "live action role playing", "pokemon","surfing", "tacos", "karaoke", "cleaning the kitchen","making a sandwich", "clean water", "drought", "datalogging", "flying","snapchat", "mortgages", "bottling up emotions","artificial intelligence","veganism","finding themselves","dramatic exits","complaining","acheiving inner peace", "medical marijuana"];
	var location_array = ["on an airplane", "Times Square", "at the beach", "in a gallery","in New York City", "on the subway","at ITP","on the Internet", "in the White House", "on social media", "under water", "in the cloud", "while on vacation", "at work", "in akward situations","on a date", "at a school dance", "at the dentist", "while online banking", "visiting relatives", "at the mall", "at a holiday party", "at a job interview", "at a high school reunion", "in a yoga studio", "at the grocery store", "in a taxi cab", "in a board meeting", "in an airport", "at a Broadway Show", "at the movies", "in the ocean", "at a conference", "while geting fired", "on a safari", "during an argument","on a desert island", "at Burning Man","at a funeral","in an awkward situation", "at a rennaisance faire", "during an alien invasion","on the toilet", "during an exam", "at the DMV", "during a wedding", "in a lecture"];

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

