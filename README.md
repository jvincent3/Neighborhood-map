# Neighborhood Map Project

This project is a Udacity project where you have to create from scratch. The goal in this project to use React to make a Neighborhood Map which allows you to search locations which you are interested to visit.

## Installation and Usage

### Live preview

* Click here: [Neighbor hood project](https://jvincent3.github.io/Neighborhood-map/)

### Requirements

Here will be the requirements for you to be able to run the project in your local server:

* Node.js
* NPM

### Installation

* install [Node](https://nodejs.org)
* install all project dependencies with `npm install`

### Running the project

Once you have installed everything you can run the projects by:

First go to your project directory with `cd` in the command prompt.

* Run the project in development mode

  * Start the server with: `npm start`

* Run the project in production mode

  * Install Pushstate Server if not installed with: `npm install -g pushstate-server`
  * Once Pushstate Server is installed, call this in cmd: `pushstate-server build`
  * Now you can open: `http://localhost:9000` in your browser
  
    * If it gives you an error saying `Uncaught SyntaxError: Unexpected token <` do the following:
    
      * Open the `package.json` file in your project folder and remove the `homepage` line

### How to run the project

* make sure your in the project directory
* start the server with `npm start`

## API's and Dependencies used

* ### API
  * [Google Maps API](https://cloud.google.com/maps-platform/)
  * [FourSquare API](https://developer.foursquare.com/)

* ### Dependencies
  * [React](https://github.com/facebook/react)
  * [React-dom](https://github.com/facebook/react/blob/master/packages/react-dom/README.md)
  * [React-google-maps](https://github.com/tomchentw/react-google-maps)
  * [React-responsive](https://github.com/contra/react-responsive)
  * [React-scripts](https://github.com/firstlookmedia/react-scripts)
