module.exports = function(app){
	app.get('/filtered', function(request, response){
		var filtered_model = require('../models/filtered_model.js');
		console.log("in filtered_controller.js");
		var cookies = request.cookies;
		var _id = cookies._id;
		if(_id == null || _id =="")
		{
        	response.redirect('/home');
		}
		else
		{
			var filter_conditions = request.query;
			console.log(filter_conditions);

			filtered_model(filter_conditions, request, response);
			/*
			if(filter_conditions.community=="")
			{
				if(cookies.current_community == 'cse')
				{
					response.render('../views/filtered_cse', filter_conditions);
				}
				if(cookies.current_community == 'ece')
				{
					response.render('../views/filtered_ece', filter_conditions);
				}
				if(cookies.current_community == 'eee')
				{
					response.render('../views/filtered_eee', filter_conditions);
				}
				if(cookies.current_community == 'chemical')
				{
					response.render('../views/filtered_chemical', filter_conditions);
				}
				if(cookies.current_community == 'mechanical')
				{
					response.render('../views/filtered_mechanical', filter_conditions);
				}
			}
			// response.send('successfully received data '+filter_conditions.location);
			else
			{
				if(filter_conditions.community == 'computer science')
				{
					response.cookie('current_community','cse');
					response.render('../views/filtered_cse', filter_conditions);
				}
				if(filter_conditions.community == 'electronics and communication')
				{
					response.cookie('current_community','ece');
					response.render('../views/filtered_ece', filter_conditions);
				}
				if(filter_conditions.community == 'electrical')
				{
					response.cookie('current_community','eee');
					response.render('../views/filtered_eee', filter_conditions);
				}
				if(filter_conditions.community == 'mechanical')
				{
					response.cookie('current_community','mechanical');
					response.render('../views/filtered_mechanical', filter_conditions);
				}
				if(filter_conditions.community == 'chemical')
				{
					response.cookie('current_community','chemical');
					response.render('../views/filtered_chemical', filter_conditions);
				}

			}
			*/
		}
	});
/*
	app.get('/filtered', function(request, response){
		var cookies = request.cookies;
		var _id = cookies._id;
		if(_id == null || _id =="")
		{
        	response.redirect('/home');
		}
		else
		{
			if(cookies.current_community == 'cse')
			{
				response.redirect('/cse');
			}
			if(cookies.current_community == 'ece')
			{
				response.redirect('/ece');
			}
			if(cookies.current_community == 'eee')
			{
				response.redirect('/eee');
			}
			if(cookies.current_community == 'chemical')
			{
				response.redirect('/chemical');
			}
			if(cookies.current_community == 'mechanical')
			{
				response.redirect('/mechanical');
			}
		}
	});
	*/
};