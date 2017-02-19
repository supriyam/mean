// MEAN Stack RESTful API Tutorial - Contact List App
'Use Strict'
var express = require('express');
var app = express();

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/local';
//var db = db.get('users');
var bodyParser = require('body-parser');
//var mongodb = require('mongodb');

//var MongoClient = mongodb.MongoClient;


//var url = 'mongodb://localhost:27017/local';

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');
MongoClient.connect(url,function (err, db) {
	var docs= db.collection('users').find();
	docs.each(function(err,doc){
    //console.log(doc);
   res.send(doc);
  });
	var js=[{ '_id': '58a95afbcacf0798b3ae4ccf',
  'name': 'suppi',
  'email': 's@g.com',
  'number': '2456789' },
{ '_id': '58a97ad63f15e735649d0795' },
{ '_id': '58a97b013f15e735649d0796',
  'name': 't',
  'email': 'f',
  'number': '4' },
{ '_id': '58a97f0ab7a8b21e2cbbc3e0',
  'name': 'test',
  'email': 'r',
  'number': '44' }
];
	res.json(js);
});
});

app.post('/contactlist', function (req, res) {
  console.log(req.body.name);
  var json = {"name": req.body.name,"email":req.body.email,"number":req.body.number};
  MongoClient.connect(url,function(err, db) {
 var doc= db.collection('users').insert(json);//, function(err, doc) {
    res.json(doc);
  });
});
 // });

app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  MongoClient.connect(url, function (err, db) {
  db.collection('users').remove({_id: mongojs.ObjectId(id)});
    res.json(doc);
  });
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  MongoClient.connect(url,function (err, db) {
  db.collection('users').remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});
  });

app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
   MongoClient.connect(url,function(err, db) {
  db.collection('users').findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});
   });

app.listen(3000);
console.log("Server running on port 3000");