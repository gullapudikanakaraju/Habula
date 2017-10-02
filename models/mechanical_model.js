module.exports = function(request, response){

    var users_complete_data_model = require('../schemas/users_complete_schema.js');
    console.log("in mechanical_model.js");
    users_complete_data_model.find().where('branch').equals('Mechanical').exec(function(err, result){
    if(err)
    {
      console.log("error occurred while finding the documents"+err);
      response.send();
    }         
    else
    {
      console.log("successfully found the documents"+result);
      console.log("numbers of memebers in the mechanical community are: "+result.length);
      response.cookie('current_community','mechanical');
      response.render('../views/mechanical',  {count: result.length});
    }
    });
};