module.exports = function(app){
    app.post('/get_initial_data', function(request, response) {
        // response.sendFile(__dirname+'/main_page.html');
        // var home_model = require('../models/home_model.js');
        var cook = request.cookies;
        console.log(request.body);
        console.log(cook);
        console.log("in initial_events_display_controller.js");

            var data=request.body;
            console.log(data);
            data.documents_skip=0;	
            if(data.branch == 'cse')
            {
            	console.log('in cse');
            	var get_cse_events_model = require('../models/get_cse_events_model.js');
            	get_cse_events_model(data, request, response);
            }
            if(data.branch== 'ece')
            {
            	console.log('in ece');
            	var get_ece_events_model = require('../models/get_ece_events_model.js');
            	get_ece_events_model(data, request, response);
            }
            if(data.branch== 'eee')
            {
            	console.log('in eee');
            	var get_eee_events_model = require('../models/get_eee_events_model.js');
            	get_eee_events_model(data, request, response);
            }
            if(data.branch== 'chemical')
            {
            	console.log('in chemical');
            	var get_chemical_events_model = require('../models/get_chemical_events_model.js');
            	get_chemical_events_model(data, request, response);
            }
            if(data.branch== 'mechanical')
            {
            	console.log('in mechanical');
            	var get_mechanical_events_model = require('../models/get_mechanical_events_model.js');
            	get_mechanical_events_model(data, request, response);
            }
    });
};