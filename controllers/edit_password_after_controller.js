module.exports = function(app){
	app.post('/edit_password_after/:id', function(request, response){
		var edit_password_after_model = require('../models/edit_password_after_model.js');
		var data={};
		data._id = request.params.id;
		data.new_password = request.body.new_password;
        edit_password_after_model(data, request, response);
	});
};