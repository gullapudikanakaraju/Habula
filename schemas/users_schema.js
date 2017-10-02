var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var con = mongoose.createConnection('mongodb://kanakaraju:8790686045@ds034797.mlab.com:34797/habula_db');
var users_schema = new Schema({
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
    }
}); 

con.on('error',function(error){
	console.log("error occurred while connecting to the database "+error);
});

con.once('open',function(){
	console.log("connected to the database successfully !");
});

var users_model = con.model('user', users_schema);
module.exports = users_model;