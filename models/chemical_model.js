module.exports = function(request, response){

    var users_complete_data_model = require('../schemas/users_complete_schema.js');
    console.log("in chemical_model.js");
    users_complete_data_model.find().where('branch').equals('Chemical').exec(function(err, result){
    if(err)
    {
      console.log("error occurred while finding the documents"+err);
      response.send();
    }         
    else
    {
      console.log("successfully found the documents"+result);
      console.log("numbers of memebers in the chemical community are: "+result.length);
      response.cookie('current_community','chemical');
      response.render('../views/chemical',  {count: result.length});
    }
    });
};