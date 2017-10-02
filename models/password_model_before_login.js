module.exports = function(data, request, response){
    var users_complete_data_model = require('../schemas/users_complete_schema.js');
    var nodemailer = require('nodemailer');
    users_complete_data_model.find().where('email').equals(data.email).exec(function(error, result){
    	if(error)
    	{
    		console.log('some error occurred while checking for the exisitence of email to update password before login'+error);
    		response.send();
    	}
    	else
    	{
    		if(result.length != 0){
    		var x = result[0];
    		var _id = x._id;
    		var email = x.email;
    		var name = x.full_name;
    		var created_at= new Date().getTime();
    		var url = 'https://habula1.herokuapp.com/update_password/'+_id+'/'+created_at;
            
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'habula.net@gmail.com',
                    pass: '8790686045'
                }
            });

            var mailOptions = {
                from: 'habula.net@gmail.com',
                to: email,
                subject: 'Welcome to HABULA !',
                html: '<p>Hello '+name+' ,<br>Please click on the following link to reset your password. The link will automatically expire after five minutes. </p><a target="_blank" href='+url+'>Click Here</a>'
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) 
                {
                    console.log("error occurred while sending email "+error);
                    // response.send(JSON.stringify({success: false}));
                    response.send();
                }
                else 
                {
                    console.log('Email sent successfully: ' + info.response);
                    response.send(JSON.stringify({success: true}));
                }
            });
    	    }
    	    else
    	    {
    	    	console.log("Invalid email address");
    	    	response.send(JSON.stringify({success : false}));
    	    }
        }
    });
};