# NewsPortal
This application reads news from open source API and displays them.
### Features

  - The application uses one of the best UI framework, AngularJS v1.6.6
  - Front end library management tool, BowerJS
  
### Technology

Rawlbox uses a number of open source projects to work properly:
* [AngularJS](https://angularjs.org/) - HTML enhanced for web apps

### Installation

Before installing NewsPortal you need to make sure you have NodeJS, npm and Bower installed as global in your system. If you do not have bower installed then install it globally using:
```sh
$ npm install bower -g
```
Navigate to the root folder of the project:
```sh
$ cd <path-to-project-folder>
$ bower install
```
This will install the `bower_components` for the client side packages.

You need to host the application in the local server for development and navigate to `app` folder using `localhost`. E.g: `localhost/app` then your `home` view will appear.
