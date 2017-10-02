module.exports = function(app){
	app.get('/about_us', function(request, response){
	console.log('in about_us_controller.js');
	/*
	var cookies = request.cookies;
	var _id = cookies._id;
	if(_id == null || _id =="")
	{
        response.redirect('/home');
	}
	else
	{
		*/
	    response.render('../views/about_us');
	//}
});
};