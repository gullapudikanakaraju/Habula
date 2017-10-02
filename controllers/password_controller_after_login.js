module.exports = function(app){
   app.post('/save_password',function(request, response){
   	    var password_model_after_login = require('../models/password_model_after_login.js');
   	    console.log("in password_controller_after_login");
   	    var cook = request.cookies;
   	    var _id = cook._id;
		if(_id == null || _id =="")
		{
        	response.redirect('/home');
		}
		else
		{
	    	var data={};
        	data.old_password = request.body.old_password;
        	data.new_password = request.body.new_password;
            data._id = _id;
            password_model_after_login(data, request, response);
		}
   });
};