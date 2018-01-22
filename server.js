var express=require('express'),
    app = express(),
    server= require('http').createServer(app);
var bodyParser = require('body-parser');
var request = require('request');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('./public/'));
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var db, collection;



MongoClient.connect('mongodb://tt:root@ds111598.mlab.com:11598/heroku_4cfrb522', function(err, database){
            if(!err) {
                console.log('We are connected');
                db=database;
                collection = db.collection('pizza_order');
                collection.find({}).toArray(function (err, result) {
                if (err) {
                console.log(err);
                } else if (result.length) {
                console.log('Found:', result);
                images= result;
                } else {
                console.log('No document(s) found with defined "find" criteria!');
                }
                });
            }
            else{console.log(err);} 
});


server.listen(process.env.PORT || 4000);
console.log('server running PORT 4000...');


app.get('/', function(req,res){
    res.sendFile(__dirname+'/public/index.html'); 

});


app.post('/order', function(req,res){
	collection.insert(req.body);
	res.json({"result":"success"});

});
