module.exports = function(app){
    app.get('/cse',function(request,response){
	//response.sendFile(__dirname+'/cse.html');
	var cse_model = require('../models/cse_model.js');
	var cookies = request.cookies;
	var _id = cookies._id;
	if(_id == null || _id =="")
	{
        response.redirect('/home');
	}
	else
	{
	    cse_model(request, response);
	}

    });
};