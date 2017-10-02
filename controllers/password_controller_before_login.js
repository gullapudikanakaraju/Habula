module.exports = function(app){
	app.post('/edit_password',function(request, response){
		var password_model_before_login_model = require('../models/password_model_before_login.js');
		console.log("in password_controller_before_login.js");
		var cook = request.cookies;
		console.log(cook);
		var _id = cook._id;
		if(_id == null || _id =="")
		{
        	var data={};
	    	data.email= request.body.email;
	    	password_model_before_login_model(data, request, response);
		}
		else
		{
			response.redirect('/home');
		}
	});
};