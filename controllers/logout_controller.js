module.exports = function(app){
	app.get('/logout',function(request, response){
        var cook = request.cookies;
    	console.log(cook);
    	console.log("in logout_controller");
    	if(cook._id==undefined)
    	{
        	response.redirect('/home');
    	}
    	else
    	{
    		response.clearCookie("email");
    		response.clearCookie("_id");
    		response.clearCookie("full_name");
    		response.clearCookie("college");
    		response.clearCookie("branch");
            response.clearCookie("current_community");
    		console.log("cleared all cookies");
    		response.redirect('/home');
    	}
	});
};