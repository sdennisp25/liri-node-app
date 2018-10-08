require("dotenv").config(); //hide my keys in .env
var keys = require("./keys.js"); //retrieves the keys.js file
var fs = require("fs");
var request = require("request");
var liriInput = process.argv[2]; //user chooses which function to run API
var movieName = process.argv.slice(3).join(" "); //user chooses input for the function
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


//////////////////////////////// movie-this function //////////////////////////////
function movieThis() {
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
	console.log(queryUrl);

	request(queryUrl, function (err, response, body) {
		if (!err && response.statusCode === 200) {
			console.log("----------------------------------")
			var myMovieData = JSON.parse(body);
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
	// var songName = process.argv.slice(2).join(" ");

	spotify.search({ type: 'track', query: movieName, limit: 5 })
		.then(function (response) {
			// var song = JSON.stringify(response, null, 1);
			var song = response.tracks.items[0].album.artists[0];

			console.log("------------------------------------------------------")
			var songItems =
				"Artist Name: " + song.name + "\n" +
				"Song Name: " + movieName + "\n" +
				"Link of the Song: " + song.external_urls.spotify + "\n" +
				"Album: " + song.album_type;
			console.log(songItems);
			console.log("------------------------------------------------------")
		})
	// .catch(function (err) {
	// 	console.log(err);
	// });
};

///////// spotify-this-song ///////////
// Artists
// Song Name
// link of song
// album song is from

///////// concert-this ///////////
// Name of the venue
// Venue location
// date of the event in (MM/DD/YYYY)


////////// do-what-it-says ///////////



