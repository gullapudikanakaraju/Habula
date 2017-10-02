module.exports = function(app){
	app.post('/remove_bookmark', function(request, response){
	var remove_bookmark_model= require('../models/remove_bookmark_model.js');
	console.log('in remove_bookmark_controller.js');
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
	    remove_bookmark_model(data, request, response);
	}
	});
};