Backbone Web App Template
====================

This front-end structure is built on top of **BackboneJS**. It uses a few popular libraries such as **UnderscoreJS**, **RequireJS** and development tools such as **GruntJS**.

Files are organised starting from this [BackboneJS boilerplate](https://github.com/backbone-boilerplate/backbone-boilerplate). More information and documentation about the boilerplate could be found [here](https://github.com/backbone-boilerplate/backbone-boilerplate/wiki)


## Installation ##

First, you should clone the directory on your machine.

Then, you will need to download and install [Node.js](http://nodejs.org/). After installing NodeJS, execute the following commands in the project directory (you may have to use **'sudo'** or have administrator rights to run the following commands).

``` bash
# Install global dependencies.  Depending on your user account you may need to
# gain elevated privileges using something like `sudo`.
npm install -g grunt-cli bower
# or
sudo npm install -g grunt-cli bower

# Install NPM dependencies.
npm install
# or
sudo npm install

# Install Bower dependencies.
bower install
# or
sudo bower install --allow-root
```

## Updating dependencies ##

``` bash
# Updating dependencies may need 'sudo' or administrative rights.
# Update NPM dependencies
npm update
#or
sudo npm update

# Update Bower dependencies
bower update
#or
sudo bower update --allow-root
```


## Build process ##

The build process consists of numerous Grunt plugin tasks that work together
to optimize your application. This process will compile, concatenate and minify the codes and produce a 'dist' directory. That directory will be production ready.

``` bash
# To run the build process, run the default Grunt task.
grunt
```

## Running the site on local machine ##

You will need a simple web server that will serve you the site. The web server could either serve the main directory where all your files are in, or serve the 'dist' directory. The main directory contains uncompiled development code and the 'dist' directory contains production-ready compiled codes.

``` bash
# To start a web server on the development directory
grunt serve

# To start a web server on the dist directory
grunt servedist
```

