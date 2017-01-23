var express = require('express')
    , logger = require('morgan')
    , app = express()


app.use(logger('dev'))
app.set('view engine', 'pug')
app.set('views', __dirname + '/source/templates')
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res) {

    var MongoClient = require('mongodb').MongoClient
        , co = require('co')
        , assert = require('assert');

    var host = process.env['MONGO_NODE_DRIVER_HOST2'] != null ? process.env['MONGO_NODE_DRIVER_HOST2'] : 'localhost';
    var port = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : 27017;

// Connection URL. This specifies the 'test' database. Inside that, I want the
// 'ride_journal1' collection.

    var url = 'mongodb://' + host + ':' + port + '/test';

    var results_from_mongo = []

    // Using the moment.js framework to experiment with date and time parsing.

    var moment = require('moment');

    var efd

//Array to hold the date objects.

    var listTime = []

    co(function*() {
        var db = yield MongoClient.connect(url)
        console.log("Connected successfully to server on " + url + "\n");

        //let's get the collection

        var collection = db.collection('ride_journal1');

        /* Perform an aggregation query. We want to know how many miles each team did, and sort in
        * descending order on the aggregated miles by team. */

        var docs = yield collection.aggregate( [ {$unwind : "$rides"},
            { $group : { _id : "$team", tot_miles : {$sum: "$rides.miles"}, tot_points: { $sum : "$rides.points"} } },
            { $sort : {  "tot_miles" : 1, "dep_time" : 1  }}
            ]
        ).limit(60).toArray()
        assert.equal(60,docs.length)
        db.close()

        results_from_mongo.push.apply(results_from_mongo, docs)

    }).catch(function(err) {
        console.log(err.stack)
    })

    /* One can look at the console output, too. */

    console.log(results_from_mongo)

})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})

