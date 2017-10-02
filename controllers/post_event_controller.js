module.exports = function(app){
	app.get('/post_event', function(request, response){
		var post_event_model= require("../models/post_event_model.js");
		var cookies = request.cookies;
		var _id = cookies._id;
		if(_id == null || _id =="")
		{
       		 response.redirect('/home');
		}
		else
		{
	   		 post_event_model(_id, request, response);
		}
    });
}