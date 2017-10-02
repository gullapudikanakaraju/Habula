var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
 

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// to handle a request to https://habula1.herokuapp.com
require('./controllers/entry.js')(app);

// to handle a request to https://habula1.herokuapp.com/home
require('./controllers/home.js')(app);
// require('./controllers/profile.js')(app);

// to handle a request to https://habula1.herokuapp.com/post_event
// require('./controllers/event.js')(app);

// to handle a request i.e. after the user clicks the register button 
// this controller will send a link to the specified email address for email verification
require('./controllers/registration_controller.js')(app);

// to handle a request to https://habula1.herokuapp.com/after_email_verified/:id
// after user clicks on the link which is sent to his email address, a request will be sent and this controller 
// will serve it. 
require('./controllers/after_email_verified.js')(app);

// to handle a request to https://habula1.herokuapp.com/update_profile
// when user click on save changes for the first time after he registers
require('./controllers/profile_controller.js')(app);

// to handle a request to https://habula1.herokuapp.com/profile
// when user clicks on 'My Profile' link present in other pages
require('./controllers/profile_update_controller.js')(app);

require('./controllers/save_changes_controller.js')(app);

// to handle a request to https://habula1.herokuapp.com/logout
// to clear all the cookies and to logout of the site
require('./controllers/logout_controller.js')(app);

// to handle a request to https://habula1.herokuapp.com/login
// to check whether email and password are correct or wrong
require('./controllers/login_controller.js')(app);

// to handle a request to https://habula1.herokuapp.com/change_password
// to display a page to change the password after login
require('./controllers/change_password_controller.js')(app);

require('./controllers/password_controller_after_login.js')(app);

require('./controllers/password_controller_before_login.js')(app);

require('./controllers/edit_password_controller.js')(app);

require('./controllers/edit_password_after_controller.js')(app);

require('./controllers/post_event_controller.js')(app);

require('./controllers/after_post_event_controller.js')(app);

require('./controllers/get_eee_events_controller.js')(app);

require('./controllers/get_ece_events_controller.js')(app);

require('./controllers/get_cse_events_controller.js')(app);

require('./controllers/get_mechanical_events_controller.js')(app);

require('./controllers/get_chemical_events_controller.js')(app);

require('./controllers/likes_controller.js')(app);

require('./controllers/add_bookmark_controller.js')(app);

require('./controllers/remove_bookmark_controller.js')(app);

require('./controllers/get_eee_bookmarks_controller.js')(app);

require('./controllers/get_cse_bookmarks_controller.js')(app);

require('./controllers/get_ece_bookmarks_controller.js')(app);

require('./controllers/get_chemical_bookmarks_controller.js')(app);

require('./controllers/get_mechanical_bookmarks_controller.js')(app);

require('./controllers/bookmarks_controller.js')(app);

require('./controllers/initial_events_display_controller.js')(app);

require('./controllers/filtered_controller.js')(app);

require('./controllers/get_filtered_eee_events_controller.js')(app);

require('./controllers/get_filtered_ece_events_controller.js')(app);

require('./controllers/get_filtered_cse_events_controller.js')(app);

require('./controllers/get_filtered_mechanical_events_controller.js')(app);

require('./controllers/get_filtered_chemical_events_controller.js')(app);

require('./controllers/about_us_controller.js')(app);

// to handle a request to https://habula1.heorkuapp.com/cse
require('./controllers/cse.js')(app);

// to handle a request to https://habula1.herokuapp.com/ece
require('./controllers/ece.js')(app);

// to handle a request to https://habula1.herokuapp.com/eee
require('./controllers/eee.js')(app);

// to handle a request to https://habula1.herokuapp.com/mechanical
require('./controllers/mechanical.js')(app);

// to handle a request to https://habula1.herokuapp.com/chemical
require('./controllers/chemical.js')(app);


/*
app.get('/', function(request, response) {
  response.sendFile(__dirname+'/index.html');
});
*/

/*
app.get('/home', function(request, response) {
  //response.sendFile(__dirname+'/main_page.html');
  response.render('main_page');
});
*/

/*
app.get('/profile',function(request,response){
  response.sendFile(__dirname+'/profile.html');
});
*/

/*
app.get('/cse',function(request,response){
	//response.sendFile(__dirname+'/cse.html');
	response.render('cse');
});
*/

/*
app.get('/ece',function(request,response){
	//response.sendFile(__dirname+'/ece.html');
	response.render('ece');
});
*/

/*
app.get('/eee',function(request,response){
	//response.sendFile(__dirname+'/eee.html');
	response.render('eee');
});
*/

/*
app.get('/chemical',function(request,response){
	//response.sendFile(__dirname+'/chemical.html');
	response.render('chemical');
});
*/

/*
app.get('/mechanical',function(request,response){
	//response.sendFile(__dirname+'/mechanical.html');
	response.render('mechanical');
});
*/

/*
app.get('/post_event',function(request,response){
	response.sendFile(__dirname+'/event.html');
});
*/

// app.use('/update_password/logo.jpg',function(request, response){
//	response.sendFile(__dirname+'/logo.jpg');
// });

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


