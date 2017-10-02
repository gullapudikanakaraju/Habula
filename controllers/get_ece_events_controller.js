module.exports = function(app){
	app.post('/get_ece_events',function(request, response){
	console.log('in get_ece_events_controller.js');
	var get_ece_events_model = require('../models/get_ece_events_model.js');
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
	    get_ece_events_model(data, request, response);
	}
	});
};