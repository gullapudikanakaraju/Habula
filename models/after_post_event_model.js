module.exports= function(data, request, response){
	if(data.event_community == 'Computer Science'){
		var cse_events_model = require('../schemas/cse_events_schema.js');
	cse_events_model.create(data, function(error, result){
		if(error)
		{
			console.log("error occurred while inserting the post in the database"+error);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			console.log("successfully inserted the post in the database"+result);
			response.send(JSON.stringify({success: true}));
		}
	});
	}
	else
	if(data.event_community == 'Electronics and Communication'){
		var ece_events_model = require('../schemas/ece_events_schema.js');
	ece_events_model.create(data, function(error, result){
		if(error)
		{
			console.log("error occurred while inserting the post in the database"+error);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			console.log("successfully inserted the post in the database"+result);
			response.send(JSON.stringify({success: true}));
		}
	});
	}
	
	else	
	if(data.event_community == 'Electrical'){
		var eee_events_model = require('../schemas/eee_events_schema.js');
	eee_events_model.create(data, function(error, result){
		if(error)
		{
			console.log("error occurred while inserting the post in the database"+error);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			console.log("successfully inserted the post in the database"+result);
			response.send(JSON.stringify({success: true}));
		}
	});
	}

	else
	if(data.event_community == 'Chemical'){
			var chemical_events_model = require('../schemas/chemical_events_schema.js');
	chemical_events_model.create(data, function(error, result){
		if(error)
		{
			console.log("error occurred while inserting the post in the database"+error);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			console.log("successfully inserted the post in the database"+result);
			response.send(JSON.stringify({success: true}));
		}
	});
	}

	else
	if(data.event_community == 'Mechanical'){
		var mechanical_events_model = require('../schemas/mechanical_events_schema.js');
	mechanical_events_model.create(data, function(error, result){
		if(error)
		{
			console.log("error occurred while inserting the post in the database"+error);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			console.log("successfully inserted the post in the database"+result);
			response.send(JSON.stringify({success: true}));
		}
	});
	}
	else
	{
		response.send(JSON.stringify({success: false}));
	}
};