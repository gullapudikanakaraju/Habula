var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.sendFile(__dirname+'/index.html');
});

app.get('/home', function(request, response) {
  response.sendFile(__dirname+'/main_page.html');
});

app.get('/profile',function(request,response){
  response.sendFile(__dirname+'/profile.html');
});

app.get('/cse',function(request,response){
	response.sendFile(__dirname+'/cse.html');
});

app.get('/ece',function(request,response){
	response.sendFile(__dirname+'/ece.html');
});

app.get('/eee',function(request,response){
	response.sendFile(__dirname+'/eee.html');
});

app.get('/chemical',function(request,response){
	response.sendFile(__dirname+'/chemical.html');
});

app.get('/mechanical',function(request,response){
	response.sendFile(__dirname+'/mechanical.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


