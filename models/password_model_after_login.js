module.exports = function(data, request, response){
    var users_complete_data_model = require('../schemas/users_complete_schema.js');
    var bcrypt = require('bcryptjs');
    console.log("in password_model_after_login.js");
    console.log(data);
    users_complete_data_model.find().where('_id').equals(data._id).exec(function(err, result){
    	if(err)
    	{
    		console.log("error occurred while checking for the existence of _id during password change after login"+error);
    		response.send(JSON.stringify({success: false}));
    	}
    	else
    	{
    		var existing_hashed_password = result[0].password;
    		console.log(existing_hashed_password);
    		var temp = result[0].branch;
    		if(temp=='Computer Science')
    			temp ='cse';

    		if(temp == 'Electronics and Communication')
                temp = 'ece';

            if(temp == 'Electrical')
                temp = 'eee';

            if(temp == 'Chemical')
                temp = 'chemical';

            if(temp == 'Mechanical')
                temp = 'mechanical';
            
            bcrypt.compare(data.old_password, existing_hashed_password, function(error, output){
                if(output == true)
                {
                    bcrypt.hash(data.new_password, 10, function(e, hash){
                    	if(e)
                    	{
                    		console.log("error occurred while hashing the new password"+e);
                    		response.send();
                    	}
                    	else
                    	{
                    		users_complete_data_model.update({_id: data._id}, {$set : {password: hash}}, function(err, result){
       						if(err)
       						{
       							console.log("error occurred while updating the password"+err);
       							response.send();
       						}         
       						
       						else
       						{
       							console.log("successfully updated the document"+result);
       							response.send(JSON.stringify({success : true, branch: temp}));
       						}
    						});
                    	}
                    });
                }
                else
                {
                	console.log("old password is wrong");
                	response.send(JSON.stringify({success: false}));
                }
            });
    	}
    });
};