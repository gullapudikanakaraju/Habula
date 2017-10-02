module.exports = function(app){
	app.post('/likes_control', function(request, response){
	var likes_model= require('../models/likes_model.js');
	console.log('in likes_controller.js');
	var cookies = request.cookies;
	var _id = cookies._id;
	if(_id == null || _id =="")
	{
        response.redirect('/home');
	}
	else
	{
		var data={};
		data=request.body;
		data.user_id= _id;
		data.full_name= cookies.full_name;
		data.college= cookies.college;
		data.branch= cookies.branch;
		console.log(data);
	    likes_model(data, request, response);
	}

	});
};