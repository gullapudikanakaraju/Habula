module.exports = function(data, request, response){
	var bcrypt = require('bcryptjs');
	var users_complete_data_model = require('../schemas/users_complete_schema.js');
	bcrypt.hash(data.new_password, 10, function(error, hash){
		if(error)
		{
			console.log("error occurred while hashing the new password"+error);
			response.send(JSON.stringify({success: false}));
		}
		else
		{
			users_complete_data_model.findByIdAndUpdate(data._id, {$set: {password : hash}}, {new : true},function(err, output){
				if(err)
				{
					console.log('error occurred while inserting the new password in the document'+err);
					response.send(JSON.stringify({success: false}));
				}
				else
				{
					console.log("successfully updated the document with new password"+output);
					var temp = output.branch;
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

                	response.cookie('_id', output._id);
                    response.cookie('full_name', output.full_name);
                    response.cookie('email', output.email);
                    response.cookie('college', output.college);
                    response.cookie('branch', output.branch);
					response.send(JSON.stringify({success: true, branch: temp}));
				}
			});
		}
	});
};