module.exports = function(app){
	app.post('/get_chemical_bookmarks',function(request, response){
	console.log('in get_chemical_bookmarks_controller.js');
	var get_chemical_bookmarks_model = require('../models/get_chemical_bookmarks_model.js');
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
	    get_chemical_bookmarks_model(data, request, response);
	}
	});
};