# liri-node-app

#### This application funcationality is similar to an iPhone's SIRI. But instead of speach interpretation and recognition interface (SIRI), it will take in language interpretation and recognition interface (LIRI). LIRI will be used on the command line node app that will take in the parameters and return you the data. This application is ran off of the following API's:

* Spotify API
* IMDB API
* Bands In Town Artist Events API


# Concert

```node liri.js concert-this [insert musician]```

##### Will return the following data:
* Venue Name
* Venue Location
* Date of Event

# Movie

```node liri.js movie-this [insert movie]```

##### Will return the following data:
* Title
* Year Created
* IMBD Rating
* Rotten Tomatoes Rating
* Country Produced
* Movie Language
* Plot of Movie
* Actors

# Spotify

```node liri.js spotify-this-song [insert song name]```

##### Will return the following data:
* Artist Name
* Song Name
* Link of the Song
* Album

# Do What It Says

```node liri.js do-what-it-says```

##### Will run the following function:
* spotify-this
* passing through the "I want it that way" argument
* Will return the spotify data to you


# Images of the LIRI application

### Concert command imagest:
***
![Alt text](/images/concert1.png)
![Alt text](/images/concert2.png)

### Movie command images:
***
![Alt text](/images/movieAPI.png)

### Spotify command images:
***
![Alt text](/images/songAPI.png)

### Do What It Says images: 
***
![Alt text](/images/dowhatitsays.png)
