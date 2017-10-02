module.exports = function(app){
    app.get('/ece',function(request,response){
	//response.sendFile(__dirname+'/ece.html');
	var ece_model = require('../models/ece_model.js');
	var cookies = request.cookies;
	var _id = cookies._id;
	if(_id == null || _id =="")
	{
        response.redirect('/home');
	}
	else
	{
	    ece_model(request, response);
	}
    });
};