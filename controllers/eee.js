module.exports = function(app){
    app.get('/eee',function(request,response){
	//response.sendFile(__dirname+'/eee.html');
	var eee_model = require('../models/eee_model.js');
	var cookies = request.cookies;
	var _id = cookies._id;
	if(_id == null || _id =="")
	{
        response.redirect('/home');
	}
	else
	{
	    eee_model(request, response);
	}
    });
};