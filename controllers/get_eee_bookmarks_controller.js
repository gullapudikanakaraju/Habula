module.exports = function(app){
	app.post('/get_eee_bookmarks',function(request, response){
	console.log('in get_eee_bookmarks_controller.js');
	var get_eee_bookmarks_model = require('../models/get_eee_bookmarks_model.js');
	var cookies = request.cookies;
	var _id = cookies._id;
	if(_id == null || _id =="")
	{
        response.redirect('/home');
	}
	else
	{
		var data={};
		data= request.body;
		data.user_id = _id;

		console.log(data);
	    get_eee_bookmarks_model(data, request, response);
	}
	});
};