module.exports = function(request, response){

    var users_complete_data_model = require('../schemas/users_complete_schema.js');
    console.log("in ece_model.js");
    users_complete_data_model.find().where('branch').equals('Electronics and Communication').exec(function(err, result){
    if(err)
    {
      console.log("error occurred while finding the documents"+err);
      response.send();
    }         
    else
    {
      console.log("successfully found the documents"+result);
      console.log("numbers of memebers in the ece community are: "+result.length);
      response.cookie('current_community','ece');
      response.render('../views/ece',  {count: result.length});
    }
    });
};