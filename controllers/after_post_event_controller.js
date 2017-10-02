module.exports = function(app){
	var bodyParser = require('body-parser');
	var path= require('path');
	var multer= require('multer');
	     var storage = multer.diskStorage({
        destination : function(request, file, cb)
        {
            cb(null, '/uploads');
        },
        filename : function(request, file, cb)
        {
            cb(null, file.fieldname + '-' + Date.now());
        }
    });
    var upload = multer({
        dest: __dirname+'/uploads/',
        limits: {fieldSize: 10485760}
    });
    app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

	app.post('/event_upload', upload.fields([{name:'college_id', maxCount: 1},{name:'event_proof', maxCount:1}]), function(request, response){
		var after_post_event_model = require('../models/after_post_event_model.js');
		console.log("in after_post_event_controller.js");
		var data={};
		// console.log(request.body.full_name);
		data=request.body;
		data._id= new Date().getTime();
		console.log(data);
		var cook = request.cookies;
		if(cook._id == null || cook._id=="")
		{
			response.redirect('/home');
		}
		else
		{
			data.full_name=cook.full_name;
			data.email= cook.email;
			data.college=cook.college;
			data.branch= cook.branch;
			console.log(data);
			console.log(request.files['college_id'][0]);
			console.log(request.files['event_proof'][0]);
			console.log('in else');
			after_post_event_model(data, request, response);
		}
	});
}