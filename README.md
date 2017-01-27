# Ride Journal Web Interface

This is a Node.js web project to manage a bicycle ride journaling application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Note that as of January 2017, the Node.js driver for MongoDB does not yet support the "NumberDecimal" (Decimal128) data format. 

### Prerequisites

For all activities:

MongoDB Community Edition, version 3.4 or newer. Database collections in this project make use of the NumberDecimal format, which is new in MongoDB 3.4. The mongo shell, provided as a tool by MongoDB, utilizes the SpiderMonkey JavaScript engine.

Node.js 7.4 or higher. The Node.js environment utilizes the V8 JavaScript engine.

Express.js in the current version. Express acts as a routing engine for http requests and responses.

Pug.js in the current version. Pug is a templating or view engine. It can compile and execute web page templates.

Development dependencies:

morgan. This application acts as an http logger. It writes log entries to the console, thus allowing the developer to track what http request and responses were issued by this application. 


```
Give examples
```

### Installing

##MongoDB Server

Install MongoDB Server, in at least version 3.4. The easiest way to do this is by using a supported package manager. You do not need to install to a separate host; MongoDB runs fine on the same machine you are developing on.

##Node.js

Install Node.js, either as a pre-built binary or by compiling from source code. The developer for this project compiles Node from source and installs to a user home directory, e.g. to /home/username/local. The rationale behind not installing at the system level is to avoid possible conflicts with other users on the system.

If compiling Node from source, run the optional tests: 

```
make test
```
...and make sure all tests complete successfully.

### Install dependencies

```
cd rj_web
npm install
```
### Put test data on the MongoDB Server
Clone [the data repository](https://github.com/BobCochran/freezingsaddles.git) and switch to the nosql branch. Follow the instructions given in the data directory for populating a MongoDB collection with documents. Comprehensive documentation of the data structures is located in the docs directory. Initial test data is provided so you can get up and running fast.

This project started out with documents that contain the miles and points fields formatted in the new (for 2016 and 2017) MongoDB "NumberDecimal" format. However, the Node.js mongodb driver version 2.2.17 does not support NumberDecimal at this time. In fact, JavaScript itself does not support any field format larger than Float64 at this time. Because of this, the test MongoDB collection format used miles and points field values which are in the "NumberLong" format. Code is implemented to use a scale factor to present these fields in decimal format.

## Try out the website
With the database up and running, open a terminal window and on the command line type:
```angular2html
node applong.js
```
...and press the <enter> key. This will start the http server. Now open your favorite browser and in the omnibar type
```angular2html
http://localhost:3000/
```
...and you should see a nicely formatted web page showing the top riding teams in the competition.

If you can't use port 3000, you have two ways to change it to a port you can use:
```angular2html
export PORT=portnum
```
or edit applong.js in the app.listen() function and set the desired port number there.
 
 Once you have the server listening to the desired port, you can even display it on your cell phone's browser provided the phone is on the same IP network as your development machine is on. You can open a new page on your cell phone's browser and navigate to the development machine address and port:
 ```angular2html
http://your-development-machine-hostname:port/
```
The final slash '/' is important because that is the first character of the query string, and in an Express.js application, routing is done based on the value of the query string.

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With


## Contributing



## Versioning 

Versions ending in an odd number are development versions.
## Authors

* **Bob Cochran** - *Initial work* - [BobCochran](https://github.com/BobCochran)

See also the list of [contributors](https://github.com/rj_web/contributors) who participated in this project.

## License

This project is licensed under the "Unlicense" [LICENSE.txt](LICENSE.txt) file for details. The developer wishes this code to be available to the public free of charge, without restrictions of any kind. 

## Acknowledgments

* CSS code from [Codepen](https://codepen.io/cbracco/pen/zekgx) for an always-on-the-bottom footer 


