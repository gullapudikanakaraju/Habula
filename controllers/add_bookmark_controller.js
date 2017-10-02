module.exports = function(app){
	app.post('/add_bookmark', function(request, response){
	var add_bookmark_model= require('../models/add_bookmark_model.js');
	console.log('in add_bookmark_controller.js');
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
	    add_bookmark_model(data, request, response);
	}
	});
};