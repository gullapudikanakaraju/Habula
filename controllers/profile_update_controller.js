module.exports = function(app){

    var profile_update_model = require('../models/profile_update_model.js');
    app.get('/profile',function(request, response){
        var cook = request.cookies;
        console.log(cook);
        console.log("in profile_update_controller");
        if(cook._id==undefined)
        {
        	response.redirect('/home');
        }
        else
        {
            console.log("in profile_update_controller.js");
        	console.log(cook);
        	var identity = cook._id;
        	profile_update_model(identity, request, response);
        }
    });
};