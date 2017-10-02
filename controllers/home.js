module.exports = function(app){
    app.get('/home', function(request, response) {
        // response.sendFile(__dirname+'/main_page.html');
        // var home_model = require('../models/home_model.js');
        var cook = request.cookies;
        console.log(cook);
        console.log("in home.js");
        if(cook._id==undefined)
        {
    		response.render('../views/main_page');
        }
        else
        {
            // home_model(cook, request, response);		
    		if(cook.branch== 'Computer Science')
      			response.redirect('/cse');

    		if(cook.branch== 'Electronics and Communication')
      			response.redirect('/ece');

    		if(cook.branch == 'Electrical')
      			response.redirect('/eee');

    		if(cook.branch == 'Mechanical')
      			response.redirect('/mechanical');

    		if(cook.branch == 'Chemical')
      			response.redirect('/chemical');

        }
    });
};