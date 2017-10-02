module.exports = function(app){
	app.get('/update_password/:id/:tim', function(request, response){
		var users_complete_data_model = require('../schemas/users_complete_schema.js');
		var x = new Date().getTime();
		var _id = request.params.id;
		var link_sent_at = request.params.tim;

		users_complete_data_model.find().where('_id').equals(_id).exec(function(error, result){
			if(error)
			{
				console.log("error occurred while checking for the validity of _id"+error);
				response.send();
			}
			else
			{
				console.log(result);
				if(result.length==1)
				{
					if(x-link_sent_at > (7*60*1000))
					{
						response.render('../views/link_expired');
					}
					else
					{
						response.render('../views/update_password',{ id : _id});
					}
				}
				else
				{
					response.render('../views/link_expired');
				}
			}
		});
	});
};