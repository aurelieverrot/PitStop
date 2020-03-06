# PitStop

## Presentation
Life is full of surprises. And sometimes, it can be really useful to know where is located the nearest restrooms!
PitStop can give you a list of restrooms in your city, and its database lives thanks to the community: users can add, edit and delete restrooms to keep the list up to date!


![Index](assets/Screen Shot Index.png)


## Technologies Used
PitStop is developed using:
* Javascript, 
* HTML and CSS, with Materialize framework. 

It turns on an ExpressJS server, and a MongoDB database using Mongoose.
We used the fetch() method for our queries.


## Existing Features
With PitStop you can:
* Get the list of restrooms by city
* Get one restroom
* Create a new restroom (it will create the associated city it doesn’t existe already)
* Update a restroom
* Delete a restroom


## How it is built
![Models_erd](assets/Screen Shot Models and ERD.png)


## Planned Features
Essential features:
* Making the search bar in the home page working: should grab a city name in the input and search all cities in this city.
* Show a map in the card reveal using Google Map API 

Top features:
* Filter the search results by restroom features
* Show selected restroom in a modal instead of the card reveal.
* Use Google Map API and GPS location to find the nearest restroom (for mobile devices)
