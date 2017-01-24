# Ride Journal Web Interface

This is a Node.js web project to manage a bicycle ride journaling application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Note that as of January 2017, the Node.js driver for MongoDB does not yet support the "NumberDecimal" (Decimal128) data format. 

### Prerequisites

For all activities:

MongoDB Community Edition, version 3.4 or newer. Database collections in this project make use of the NumberDecimal format, which is new in MongoDB 3.4.

Node.js 7.4 or higher.

Express.js in the current version.

Pug.js in the current version. 

Development dependencies:

morgan


```
Give examples
```

### Installing

##MongoDB Server

Install MongoDB Server, in at least version 3.4. The easiest way to do this is by using a supported package manager. You do not need to install to a separate host; MongoDB runs fine on the same machine you are developing on.

##Node.js

Install Node.js, either as a pre-built binary or by compiling from source code. The developer for this project compiles Node from source and installs to a user home directory, e.g. to /home/username/local.

If compiling Node from source, run the optional tests: 

```
make test
```

### Install dependencies

```
cd rj_web
npm install
```
### Put test data on the MongoDB Server

End with an example of getting some data out of the system or using it for a little demo

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

This project is licensed under the "Unlicense" [LICENSE.txt](LICENSE.txt) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

