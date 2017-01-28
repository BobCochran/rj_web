# Ride Journal Web Interface

This is a Node.js web project to manage a bicycle ride journaling application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. All code is in JavaScript, html, and CSS. Development of this app was done on a Mac OS X system. It should run fine on any platform, including Microsoft Windows. It is assumed that you are comfortable working on the command line and that you understand how to do things like setting environment variables on your development system.

If you have several hosts running on a network, and you expect to run a database server on its own host, we assume that you have a running DNS server for your network and that you are able to perform forward and reverse lookups of all your hosts. In this scenario you should be able to ping a host by both hostname and IP address.
 
 You may want to take [free MongoDB classes](https://university.mongodb.com/) to get training in how this nosql database server works. For JavaScript application development with MongoDB, consider the course M101JS. There is also a course covering MongoDB for Java Developers: check the M101J course description. The developer for this app took both these courses.

### Prerequisites

For all activities:

MongoDB Community Edition, version 3.4 or newer. Database collections in this project make use of the NumberDecimal format, which is new in MongoDB 3.4. The mongo shell, provided as a tool by MongoDB, utilizes the SpiderMonkey JavaScript engine.

Node.js 7.4 or higher. The Node.js environment utilizes the V8 JavaScript engine.

Express.js in the current version. Express acts as a routing engine for http requests and responses.

Pug.js in the current version. Pug is a templating or view engine. It can compile and execute web page templates.

Recent web browsers should be installed on your development machine. This application was tested primarily on Chrome 56. You should be developing with the very latest versions of the popular web browsers. 

Development dependencies:

morgan. This application acts as an http logger. It writes log entries to the console, thus allowing the developer to track what http request and responses were issued by this application. 

## Installing

### MongoDB Server

Install MongoDB Server, in at least version 3.4. The easiest way to do this is by using a supported package manager. You do not need to install to a separate host; MongoDB runs fine on the same machine you are developing on.

Set up environment variables that point to the host and port number of your server. The applong.js (and other) scripts on this app assume that the environment variables

* MONGO_NODE_DRIVER_WEST
* MONGO_NODE_DRIVER_PORT_WEST

are set up with the host that is running the server and the port number the server is listening on, respectively. For example, host1.example.com is the hostname and 27017 is the port. If no environment variables are set on your development machine, the scripts default to localhost:27017.

### Node.js

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
The final slash '/' is important because that is the first character of the resource path, and in an Express.js application, routing is done based on the value of the resource path.

## HTTP Requests Supported By This App
| Resource Path | Yields                      |
| --------------|-----------------------------|
| '/'           | List of top 10 teams        |
| '/members'    | List of members in each team|
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


