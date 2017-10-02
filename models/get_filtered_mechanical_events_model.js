module.exports = function(filter_conditions, request, response){
	var mechanical_events_model = require('../schemas/mechanical_events_schema.js');
	console.log('in get_filtered_mechanical_events_model.js');
	console.log(filter_conditions.documents_skip);
	var search_data ={};
	search_data.verified = true;
    if(filter_conditions.location !="")
    {
      search_data.event_location = filter_conditions.location;
    }

    if(filter_conditions.starting_on_or_after !="" && filter_conditions.starting_on_or_before !="")
    {
      mechanical_events_model.find(search_data).where('event_start_date').gte(filter_conditions.starting_on_or_after).where('event_start_date').lte(filter_conditions.starting_on_or_before).sort({_id : -1}).skip(filter_conditions.documents_skip).limit(5).exec(function(err, result){
		if(err)
		{
			console.log('error occurred while fetching data regarding mechanical events'+err);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			//result.user_id = data.user_id;
			console.log('successfully fetched the data regarding mechanical events'+result);
			response.send(JSON.stringify({success: true, data: result, user_id: filter_conditions.user_id}));
		}
	});
    }

    if(filter_conditions.starting_on_or_before !="" && filter_conditions.starting_on_or_after =="")
    {
      	mechanical_events_model.find(search_data).where('event_start_date').lte(filter_conditions.starting_on_or_before).sort({_id : -1}).skip(filter_conditions.documents_skip).limit(5).exec(function(err, result){
		if(err)
		{
			console.log('error occurred while fetching data regarding mechanical events'+err);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			//result.user_id = data.user_id;
			console.log('successfully fetched the data regarding mechanical events'+result);
			response.send(JSON.stringify({success: true, data: result, user_id: filter_conditions.user_id}));
		}
	});
    }

    if(filter_conditions.starting_on_or_before =="" && filter_conditions.starting_on_or_after !="")
    {
      	mechanical_events_model.find(search_data).where('event_start_date').gte(filter_conditions.starting_on_or_after).sort({_id : -1}).skip(filter_conditions.documents_skip).limit(5).exec(function(err, result){
		if(err)
		{
			console.log('error occurred while fetching data regarding mechanical events'+err);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			//result.user_id = data.user_id;
			console.log('successfully fetched the data regarding mechanical events'+result);
			response.send(JSON.stringify({success: true, data: result, user_id: filter_conditions.user_id}));
		}
	});
    }

    if(filter_conditions.starting_on_or_before =="" && filter_conditions.starting_on_or_after =="")
    {
      	mechanical_events_model.find(search_data).sort({_id : -1}).skip(filter_conditions.documents_skip).limit(5).exec(function(err, result){
		if(err)
		{
			console.log('error occurred while fetching data regarding mechanical events'+err);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			//result.user_id = data.user_id;
			console.log('successfully fetched the data regarding mechanical events'+result);
			response.send(JSON.stringify({success: true, data: result, user_id: filter_conditions.user_id}));
		}
	});
    }
}