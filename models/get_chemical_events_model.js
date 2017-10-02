module.exports = function(data, request, response){
	var chemical_events_model = require('../schemas/chemical_events_schema.js');
	console.log('in get_chemical_events_model.js');
	console.log(data.documents_skip);
	chemical_events_model.find().where('verified').equals(true).sort({_id : -1}).skip(data.documents_skip).limit(5).exec(function(err, result){
		if(err)
		{
			console.log('error occurred while fetching data regarding chemical events'+err);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			//result.user_id = data.user_id;
			console.log('successfully fetched the data regarding chemical events'+result);
			response.send(JSON.stringify({success: true, data: result, user_id: data.user_id}));
		}
	});
}