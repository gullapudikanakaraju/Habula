module.exports = function(app){
    app.post('/save_changes', function(request, response){
    	var save_changes_model = require('../models/save_changes_model.js');
     	var cook = request.cookies;
        console.log(cook);
        console.log("in save_changes_controller");
        if(cook._id==undefined)
        {
        	response.redirect('/home');
        }
        else
        {
            console.log("in save_changes_controller.js");
        	console.log(cook);
        	var data = {};
        	data.alternative_email = request.body.alternative_email;
        	data.qualification = request.body.qualification;
        	data.grad_start_year = request.body.grad_start_year;
        	data.grad_end_year = request.body.grad_end_year;
        	data.gender = request.body.gender;
        	data.dob = request.body.dob;
        	data.mobile = request.body.mobile;
            data.full_name = request.body.full_name;
        	save_changes_model(cook._id, data, request, response);
        }
    });
};