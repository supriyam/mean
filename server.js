'Use Strict'
var express = require('express');
var app = express();
//http://localhost:3000/img/download.png
app.use(express.static(__dirname+'/assets/'));
//app.use(express.static(__dirname+'/assets1/'));

app.get('/',function(request,response){
 response.send('home');
});

//http://localhost:3000/api3?platform=android&id=12345
app.get('/api3',function(request,response){
 var platform = request.query.platform;
 var id = request.query.id;
 var out_json = {
       'platform':platform,
       'id': id
 }
   
 response.json(out_json);
});

//http://localhost:3000/api/android/1234
app.get('/api/:platform/:id',function(request,response){
 var platform = request.params.platform;
 var id = request.params.id;
 var out_json = {
	'platform':platform,
	'id': id
 }

 response.json(out_json);
});


app.get('/api2',function(request,response){
var our_class = {
 'name' : 'Chetna',
 'time' : '04:39'
 
}
response.json(our_class);
});
app.get('/api2/',function(request,response){
response.send('I am api2');
});

app.get('*',function(request,response){
response.status(404);
response.sendFile(__dirname+'/view/404.html');
});

app.listen(3001, function(){
console.log("gi");
});












