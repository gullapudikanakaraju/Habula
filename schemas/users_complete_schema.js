var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connec = mongoose.createConnection('mongodb://kanakaraju:8790686045@ds034797.mlab.com:34797/habula_db');
var users_complete_schema = new Schema({
	_id :{
        type : Number,
        required : true,
        unique : true,
        trim : true
	},
    full_name :{
    	type: String,
    	required: true,
    	trim : true
    },
    email :{
    	type: String,
    	required: true,
    	unique: true,
    	trim : true
    },
    alternative_email :{
        type: String,
        trim: true
    },
    college :{
    	type: String,
    	required: true,
    	trim : true
    },
    branch :{
    	type: String,
    	required: true,
    	trim : true
    },
    password :{
    	type: String,
    	required: true,
    	trim : true
    },
    email_verified :{
    	type: Boolean,
    	default: false
    },
    dob :{
        type: String,
        required: true,
        trim: true
    },
    mobile :{
        type: Number,
        trim: true
    },
    gender :{
        type: String,
        required: true,
        trim: true
    },
    qualification :{
        type: String,
        required: true,
        trim: true
    },
    grad_start_year :{
        type: Number,
        required: true,
        trim: true
    },
    grad_end_year :{
        type: Number,
        required: true,
        trim: true
    },
    my_bookmarks :{
        type: [Number],
    },
    my_events :{
        type: [Number],
    }
}); 

connec.on('error',function(error){
	console.log("error occurred while connecting to the database "+error);
});

connec.once('open',function(){
	console.log("connected to the database successfully !");
});

var users_complete_model = connec.model('user_complete_detail', users_complete_schema);
module.exports = users_complete_model;