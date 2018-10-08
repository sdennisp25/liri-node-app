require("dotenv").config(); //hide my keys in .env
var keys = require("./keys.js"); //retrieves the keys.js file
var fs = require("fs");
var request = require("request");
var moment = require("moment");
var liriInput = process.argv[2]; //user chooses which function to run API
var userSearch = process.argv.slice(3).join(" "); //user chooses input for the function
var Spotify = require('node-spotify-api'); //spotify package
var spotify = new Spotify(keys.spotify); //pass through

switch (liriInput) {
	case "movie-this":
		movieThis();
		break;
	case "concert-this":
		concertThis();
		break;
	case "spotify-this-song":
		spotifyThis();
		break;
	case "do-what-it-says":
		doThis();
		break;
}

////////////////////////////// concert-this ////////////////////////////////////

function concertThis() {
	var queryUrl = "https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp"

	request(queryUrl, function (err, response, data) {
		console.log(JSON.parse(data, null, 1));

		for (var i = 0; i < 10; i++) {
			var someData = JSON.parse(data, null, 1)[i];
			// console.log("VALUE: ", someData); //saved for some troubleshooting
			console.log("--------------------------------------------")
			console.log("Venue Name: ", someData.venue.name);
			console.log("venue Location: ", someData.venue.city);
			console.log("Date of Event: ", someData.datetime);
			console.log("Date of Event: ", moment(someData.datetime).format("MM/DD/YYYY hh:mm A"))
		}
	})

}

//////////////////////////////// movie-this function //////////////////////////////
function movieThis() {
	var queryUrl = "http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy";
	console.log(queryUrl);

	request(queryUrl, function (err, response, body) {
		if (!err && response.statusCode === 200) {
			console.log("----------------------------------")
			var myMovieData = JSON.parse(body);
			console.log(myMovieData);
			var queryUrlResults =
				"Title: " + myMovieData.Title + "\n" +
				"Year: " + myMovieData.Year + "\n" +
				"IMBD Rating: " + myMovieData.imdbRating + "\n" +
				"Rotton Tomatos Rating: " + myMovieData.Ratings[0].Value + "\n" +
				"Country Produced: " + myMovieData.Country + "\n" +
				"Movie Language: " + myMovieData.Language + "\n" +
				"Plot of Movie: " + myMovieData.Plot + "\n" +
				"Actors: " + myMovieData.Actors;
			console.log(queryUrlResults);
			console.log("----------------------------------")
		}
		else {
			console.log("I GOT NOTHING!");
		}
	})
}

///////////////////////////////// spotify-this-song ////////////////////////////////

function spotifyThis() {
	spotify.search({ type: 'track', query: userSearch }, function (err, data) {
		if (err) {
			console.log('Error occurred: ' + err);
			return;
		}
		var songTrack = data.tracks.items;
		for (i = 0; i < songTrack.length; i++) {
			console.log("------------------------------------------------------")
			var songItems =
				"Artist Name: " + songTrack[i].artists[i].name + "\n" +
				"Song Name: " + songTrack[i].name + "\n" +
				"Link of the Song: " + songTrack[i].preview_url + "\n" +
				"Album: " + songTrack[i].album.name;
			console.log(songItems);
		}
	})
};


function doThis() {
	fs.readFile("random.txt", "utf8", function (error, data) {
		if (error) {
			return console.log(error);
		}
		var dataArr = data.split(",");
		var input1 = dataArr[0]; //spotify-this-song
		var input2 = dataArr[1]; //I want it that way


		// need to someohow convert the random.txt file for the spotify function to take

		// spotifyThis(input1, input2);

		// console.log(dataArr);
	})
}




