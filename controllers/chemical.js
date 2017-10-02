module.exports = function(app){
   app.get('/chemical',function(request,response){
	//response.sendFile(__dirname+'/chemical.html');
	var chemical_model = require('../models/chemical_model.js');
	var cookies = request.cookies;
	var _id = cookies._id;
	if(_id == null || _id =="")
	{
        response.redirect('/home');
	}
	else
	{
	    chemical_model(request, response);
	}
});
};