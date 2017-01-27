var express = require('express')
    , logger = require('morgan')
    , app = express()


app.use(logger('dev'))
app.set('view engine', 'pug')
app.set('views', __dirname + '/source/templates')
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res) {

    var MongoClient = require('mongodb').MongoClient
        , assert = require('assert');

    var host = process.env['MONGO_NODE_DRIVER_WEST'] != null ? process.env['MONGO_NODE_DRIVER_WEST'] : 'localhost';
    var port = process.env['MONGO_NODE_DRIVER_PORT_WEST'] != null ? process.env['MONGO_NODE_DRIVER_PORT_WEST'] : 27017;

// Connection URL. This specifies the 'test' database. Inside that, I want the
// 'ride_journal2' collection.

    var url = 'mongodb://' + host + ':' + port + '/test';

    var results_from_mongo = []
    var counter = 0

    // Using the moment.js framework to experiment with date and time parsing.

    var moment = require('moment');

    var efd

//Array to hold the date objects.

    var listTime = []

    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err)

        console.log("Connected successfully to server on " + url + "\n");

        //let's get the collection

        var collection = db.collection('ride_journal2');

        /* Perform an aggregation query. We want to know how many miles each team did, and sort in
        * descending order on the aggregated miles by team. Note that in MongoDB, using toArray()
        * exhausts the cursor. */

        var docs = collection.aggregate( [ {$unwind : "$rides"},
            { $group : { _id : "$team", tot_miles : {$sum: "$rides.miles"}, tot_points: { $sum : "$rides.points"} } },
            { $sort : {  "tot_miles" : 1 }}
            ]
        ).limit(60).toArray( function (err, docs) {
            assert.equal(err, null)
            results_from_mongo.push.apply(results_from_mongo, docs)

        })

        db.close()



    });

    /* One can look at the console output, too. */

    setTimeout( function () {
        console.log("\nOne item from the result set is " + "\n" + results_from_mongo[0]._id)
        res.render('flights', { title: 'Ride Journal', message: 'Ride Journal', results: results_from_mongo})
    }, 500)



})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
