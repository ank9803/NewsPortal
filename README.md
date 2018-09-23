# NewsPortal
This application reads news from open source API and displays them.
### Features

  - The application uses one of the best UI framework, AngularJS v1.6.6
  - NodeJS for Server
  - Front end library management tool, BowerJS
  
### Technology

NewsPortal requires [Node.js](https://nodejs.org/) v4+ to run.

NewsPortal uses a number of open source projects to work properly:
* [AngularJS](https://angularjs.org/) - HTML enhanced for web apps
* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Express](https://expressjs.com/) - fast node.js network app framework

### Installation

Before installing NewsPortal you need to make sure you have NodeJS, npm and Bower installed as global in your system. If you do not have bower installed then install it globally using:
```sh
$ npm install bower -g
```
Navigate to the root folder of the project:
```sh
$ cd <path-to-project-folder>
$ bower install
$ npm install
```
This will install the `bower_components` for the client side packages and `node_modules` for server side packages.

### Start the application
```sh
 $ cd <path-to-project-folder>
 $ node server
```
Once the server is started then you can browse `localhost:port` to access the homepage. For development the port is `3001` so the URL will be `localhost:3001`.
