module.exports = function(app){

	var profile_model = require('../models/profile_model.js');
    app.post('/update_profile', function(request, response){
    	var data= {};
    	data._id= request.body._id;
    	// data._id = 1504244884513;
        data.alternative_email = request.body.alternative_email;
        data.email_verified = true;
        data.qualification = request.body.qualification;
        data.grad_start_year = request.body.grad_start_year;
        data.grad_end_year = request.body.grad_end_year;
        data.gender = request.body.gender;
        data.dob = request.body.dob;
        data.mobile = request.body.mobile;
        console.log("in update_profile_controller");
        console.log(data);
        profile_model(data, request, response);
    });
};