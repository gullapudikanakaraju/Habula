module.exports = function(app){
	app.get('/bookmarks/:community', function(request, response){
	console.log('in bookmarks_controller.js');
	var cookies = request.cookies;
	var _id = cookies._id;
	if(_id == null || _id =="")
	{
        response.redirect('/home');
	}
	else
	{
		var data={};
		data.community= request.params.community;
		console.log(data);
	    response.render('../views/bookmarks',data);
	}
});
};