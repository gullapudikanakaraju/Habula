module.exports = function(app){
    app.get('/mechanical',function(request,response){
	//response.sendFile(__dirname+'/chemical.html');
	var mechanical_model = require('../models/mechanical_model.js');
	var cookies = request.cookies;
	var _id = cookies._id;
	if(_id == null || _id =="")
	{
        response.redirect('/home');
	}
	else
	{
	    mechanical_model(request, response);
	}
    });
};