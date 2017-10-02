module.exports = function(request, response){

    var users_complete_data_model = require('../schemas/users_complete_schema.js');
    console.log("in cse_model.js");
    users_complete_data_model.find().where('branch').equals('Computer Science').exec(function(err, result){
    if(err)
    {
      console.log("error occurred while finding the documents"+err);
      response.send();
    }         
    else
    {
      console.log("successfully found the documents"+result);
      console.log("numbers of memebers in the cse community are: "+result.length);
      response.cookie('current_community','cse');
      response.render('../views/cse',  {count: result.length});
    }
    });
};