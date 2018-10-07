//hide my keys in .env
require("dotenv").config();
var keys = require("./keys.js"); //retrieves the keys.js folder
var fs = require("fs");
var request = require("request");
// var liriInput = process.argv[2];
// var movieName = process.argv[3];
var Spotify = require('node-spotify-api'); //spotify package
// var spotify = new spotify(keys.spotify); //pass through

var spotifyID = process.env.SPOTIFY_ID;
var spotifySecret = process.env.SPOTIFY_SECRET;

console.log("----------------------------------")
// console.log("ID: ", spotifyID);
// console.log("SECRET: ", spotifySecret);
// console.log("----------------------------------")

var movieName = process.argv[2];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
console.log(queryUrl);

request(queryUrl, function (error, response, body) {
	if (!error && response.statusCode === 200) {
		var myMovieData = JSON.parse(body);
		var queryUrlResults =
			"Title: " + myMovieData.Title + "\n" +
			"Year: " + myMovieData.Year + "\n" +
			"IMBD Rating: " + myMovieData.imdbRating + "\n" +
			"Rotton Tomatos Rating: " + myMovieData.Ratings[0].Value + "\n" +
			"Country Produced: " + myMovieData.Country + "\n"
		console.log(queryUrlResults);
	}
	else {
		console.log("I GOT NOTHING!");
	}
});


// function movieThis() {
// 	request(queryUrl, function (error, response, body) {
// 		if (!error && response.statusCode === 200) {
// 			var myMovieData = JSON.parse(body); 
// 			var queryUrlResults = 
// 				"Title: " + myMovieData.Title + "\n" +
// 				"Year: " + myMovieData.Year + "\n" +
// 				"IMBD Rating: " + myMovieData.Ratings[0].Value + "\n" +
// 				"Rotton Tomatos Rating: " + myMovieData.Ratings[1].Value + "\n" +
// 				"Country Produced: " + myMovieData.Country + "\n"
// 			console.log(queryUrlResults);
// 		}
// 		else {
// 			console.log("I GOT NOTHING!");
// 		}
// 	})
// }

//////// movie-this ////////////
// title 
// year it came out
// IMDB rating
// rotten tomatoes rating of the movie
// country movie produced
// language of movie
// plot of the movie
// actors

// function spotify(artist) {
// 	console.log("YOU GOT IT");
// 	this.artist = artist;
// };

// var spotify = new Spotify({
// 	id: "7ff9284754fe41dcb6f74357f66f92dd",
// 	secret: "847fafeec5264410984122e2008602f4",
// });

// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     // console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });
// spotify
// 	.request('https://api.spotify.com/v1/artists/7ff9284754fe41dcb6f74357f66f92dd')
// 	.then(function (data) {
// 		console.log(data);
// 	})
// 	.catch(function (err) {
// 		console.error('Error occurred: ' + err);
// 	});


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


// function spotify(keys) {
// 	console.log(keys);
// }



// var follow = Spotify(spotify);

// follow.find({ type: 'track', query: 'work', limit: 5 })
// 	.then(function (response) {
// 		console.log("------------------------------------------------")
// 		console.log(response);
// 		console.log("------------------------------------------------")
// 	})
// 	.catch(function (err) {
// 		console.log(err);
// 	});


