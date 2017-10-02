module.exports = function(data, request, response)
{
   var users_model = require('../schemas/users_schema.js');
   var users_complete_data_model = require('../schemas/users_complete_schema.js');
   console.log("in users_profile_model");
   console.log(data);
   console.log(data._id);
   users_model.find().where('_id').equals(data._id).exec(function(error, result){
      if(error)
      {
         console.log("error occurred while searching for the document in the database "+error);
         response.send(JSON.stringify({success: false}));
      }
      else
      {
         if(result.length == 1)
         {
            var x = result[0];
            data.full_name = x.full_name;
            data.email = x.email;
            data.college = x.college;
            data.branch = x.branch;
            data.password = x.password;
            console.log(data);
            users_complete_data_model.create(data, function(errors, output){
               if(errors)
               {
                  console.log('error occurred while inserting a document in the database'+errors);
                  response.send(JSON.stringify({success: false}));
               }
               else
               {
                  console.log(output);
                  users_model.remove({_id : data._id},function(err, out){
                     if(err)
                     {
                        console.log("some error occurred while deleting a document from users collection"+err);
                        response.send(JSON.stringify({success: false}));
                     }
                     else
                     {
                        console.log('removed document successfully from users collection'+out);
                        response.cookie('_id', data._id);
                        response.cookie('full_name', data.full_name);
                        response.cookie('email', data.email);
                        response.cookie('college', data.college);
                        response.cookie('branch', data.branch);
                        response.send(JSON.stringify({success: true}));
                     }
                  });
               }
            });
         }  

      }
   });
}