module.exports = function(data, request, response){
    
    var users_complete_data_model = require('../schemas/users_complete_schema.js');
    var bcrypt = require('bcryptjs');
    console.log("in login_model.js");
    console.log(data);
    users_complete_data_model.find().where('email').equals(data.email).exec(function(err, output){
       if(err)
       {
       	console.log("error occurred while checking for presence of email"+err);
       	response.send(JSON.stringify({success : false}));
       }         
       else
       {
        if(output.length==0)
        {
          console.log("No such user !");
          response.send(JSON.stringify({success : false}));
        }
        else
        {
          var result = output[0];
          var hashed_password = result.password;
          console.log(hashed_password);
          var temp;
          bcrypt.compare(data.password, hashed_password, function(err, x){
            if(x==true)
            {
              response.cookie('_id', result._id);
              response.cookie('full_name', result.full_name);
              response.cookie('email', result.email);
              response.cookie('college', result.college);
              response.cookie('branch', result.branch);
              console.log("successfully set the cookies");
              if(result.branch == 'Computer Science')
                temp='cse';
              if(result.branch == 'Electronics and Communication')
                temp='ece';
              if(result.branch == 'Electrical')
                temp='eee';
              if(result.branch == 'Mechanical')
                temp='mechanical';
              if(result.branch == 'Chemical')
                temp='chemical';
              response.send(JSON.stringify({success : true, branch: temp}));
            }
            else
            {
              console.log("No such user !");
              response.send(JSON.stringify({success : false}));
            }
          });
        }
       }
    });
};