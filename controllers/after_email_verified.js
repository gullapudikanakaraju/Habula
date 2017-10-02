module.exports = function(app){

	var users_model = require('../schemas/users_schema.js');
    app.get('/after_email_verified/:id', function(request, response){
            var id = request.params.id;
            users_model.find().where('_id').equals(id).exec(function(error, result){
                if(error)
                {
                	console.log("error occurred while finding whether email is registered or not"+error);
                	response.render('../views/link_expired');
                } 
                else
                {
                	console.log(result);
               	  if(result.length == 1)
               	  {
               	    var data = result[0];
                    var temp = (new Date().getTime())-(data._id);

                    if(temp <= (6*60*60*1000))
                    {
                      data.email_verified= true;
                      response.render('../views/profile',data);
                    }
                    else
                    {
                      users_model.remove({_id : data._id}, function(err, out){
                          if(err)
                          {
                            console.log("error occurred while removing the document for the first time after the link was expired"+err);
                            response.render('../views/link_expired');
                          }
                          else
                          {
                            console.log("document removed successfully after the user press the link for the first time before link gets expired"+out);
                            response.render('../views/link_expired');
                          }
                      });
                    }
                  }
               	  else
               	  {
                    response.render('../views/link_expired');
               	  }
                }
            }); 
    });
};