module.exports = function(identity, request, response){

    var users_complete_data_model = require('../schemas/users_complete_schema.js');
    console.log("in profile_update_model.js");
    console.log(identity);
    users_complete_data_model.find().where('_id').equals(identity).exec(function(err, result){
       if(err)
       {
       	console.log("error occurred while fetching the data"+err);
       	response.send(JSON.stringify({success : false}));
       }         
       else
       {
       	console.log("successfully extracted the data from the document based on _id present in cookie"+result);
       	response.render('../views/profile_update', result[0]);
       }
    });
};