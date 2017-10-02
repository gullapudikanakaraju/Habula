var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connec = mongoose.createConnection('mongodb://kanakaraju:8790686045@ds034797.mlab.com:34797/habula_db');
var chemical_events_schema = new Schema({
	_id :{
        type : Number,
        default: new Date().getTime(),
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
    event_location :{
        type: String,
        required: true,
        trim: true
    },
    event_name :{
        type: String,
        required: true,
        trim: true
    },
    event_start_date :{
        type: String,
        required: true,
        trim: true
    },
    event_end_date :{
        type: String,
        required: true,
        trim: true
    },
    event_community :{
        type: String,
        required: true,
        trim: true
    },
    event_content :{
        type: String,
        required: true,
        trim: true
    },
    event_organiser_first_name :{
        type: String,
        required: true,
        trim: true
    },
    event_organiser_first_mobile :{
        type: Number,
        required: true,
        trim: true
    },
    event_organiser_second_name :{
        type: String,
        trim: true
    },
    event_organiser_second_mobile :{
        type: Number,
        trim: true
    },
    verified :{
        type: Boolean,
        default: false
    },
    likes :{
        count : {
            type: Number,
            default:0,
            trim: true
        },
        liked_by : [{
            _id: {
                type: Number,
                trim: true
            },
            full_name :{
                type: String,
                trim: true
            },
            college :{
                type: String,
                trim: true,
            },
            branch :{
                type: String,
                trim: true
            }
        }]
    },
    comments :{
        count : {
            type: Number,
            default:0,
            trim: true
        },
        commented_by : [{
            _id: {
                type: Number,
                trim: true
            },
            full_name :{
                type: String,
                trim: true
            },
            college :{
                type: String,
                trim: true,
            },
            branch :{
                type: String,
                trim: true
            }
        }]
    },
    shares :{
        count : {
            type: Number,
            default:0,
            trim: true
        },
        shared_by : [{
            _id: {
                type: Number,
                trim: true
            },
            full_name :{
                type: String,
                trim: true
            },
            college :{
                type: String,
                trim: true,
            },
            branch :{
                type: String,
                trim: true
            }
        }]
    },
    bookmarks :{
        count : {
            type: Number,
            default:0,
            trim: true
        },
        bookmarked_by : [{
            _id: {
                type: Number,
                trim: true
            },
            full_name :{
                type: String,
                trim: true
            },
            college :{
                type: String,
                trim: true,
            },
            branch :{
                type: String,
                trim: true
            }
        }]
    }
}); 

connec.on('error',function(error){
	console.log("error occurred while connecting to the database "+error);
});

connec.once('open',function(){
	console.log("connected to the database successfully !");
});

var chemical_events_model = connec.model('chemical_event', chemical_events_schema);
module.exports = chemical_events_model;