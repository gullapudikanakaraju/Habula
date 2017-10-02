module.exports = function(app){
    app.get('/change_password', function(request, response){
        var cook = request.cookies;
        var _id = cook._id;
		if(_id == null || _id =="")
			{
        		response.redirect('/home');
			}
		else
			{
	    		response.render('../views/change_password');
			} 
    });
};