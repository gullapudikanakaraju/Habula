module.exports = function(identity, data, request, response){

    var users_complete_data_model = require('../schemas/users_complete_schema.js');
    console.log("in save_changes_model.js");
    console.log(identity);
    console.log(data);
    users_complete_data_model.update({_id: identity}, {$set : {alternative_email : data.alternative_email, gender: data.gender, dob: data.dob, mobile: data.mobile, qualification: data.qualification, grad_start_year: data.grad_start_year, grad_end_year: data.grad_end_year, full_name: data.full_name}}, function(err, result){
       if(err)
       {
       	console.log("error occurred while updating the document"+err);
       	response.send(JSON.stringify({success : false}));
       }         
       else
       {
       	console.log("successfully updated the document"+result);
       	response.send(JSON.stringify({success : true}));
       }
    });
};