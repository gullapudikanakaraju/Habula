module.exports = function(data, request, response)
{
	var users_model = require('../schemas/users_schema.js');
   var users_complete_data_model = require('../schemas/users_complete_schema.js');
   var bcrypt = require('bcryptjs');
   var nodemailer = require('nodemailer');
	console.log("in registration_model.js");
   console.log(data);
   users_model.find().where('email').equals(data.email).exec(function(err, output){
      if(err)
      {
         console.log("error occurred while checking for the existence of email in users database"+error);
         response.send();
      }
      else
      {
         if(output.length == 0)
         {
            users_complete_data_model.find().where('email').equals(data.email).exec(function(erro, out){
               if(erro)
               {
                  console.log("error occurred while checking for the existence of email in user_complete_details database "+erro);
                  response.send();
               }
               else
               {
                  if(out.length == 0)
                  {
                     bcrypt.hash(request.body.password,10,function(error, hash){
                     if(error)
                     {
                        console.log("error in generating the hash "+error);
                     }
                     else
                     {
                        data.password= hash;
                        console.log(data);
                        // registration_model(data,request,response);
                        // registration_model(data);
                        data._id= new Date().getTime();
                        var url = 'https://habula1.herokuapp.com/after_email_verified/'+data._id;

                        var transporter = nodemailer.createTransport({
                           service: 'gmail',
                           auth: {
                              user: 'habula.net@gmail.com',
                              pass: '8790686045'
                           }
                        });

                        var mailOptions = {
                           from: 'habula.net@gmail.com',
                           to: data.email,
                           subject: 'Welcome to HABULA !',
                           html: '<p>Hello '+data.full_name+' ,<br>Bridging the gap and creating a cohesive link amongst the engineering fraternity is the main motto of Habula. It intends to keep all the budding and established engineers organised about the various occurring events all across Indian Colleges. Keep your calendar updated and be a part of this journey.<br><br>Please click on the following link to activate your account. The link will automatically expire after six hours. </p><a target="_blank" href='+url+'>Click Here</a>'
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
                           users_model.create(data, function(error, result){
                           if(error)
                           {
                              console.log("error occurred while inserting the document in the database "+error);
                              response.send(JSON.stringify({success: false}));
                           }
                           else
                           {
                              console.log("resulted due to insertion in database is  "+result);
                              response.send(JSON.stringify({success: true}));
                           }
                           });
                        }
                        });
                     }
                     });
                  }
                  else
                  {
                     console.log("This email is already present in user_complete_details database"+out);
                     response.send(JSON.stringify({success: false}));
                  }
               }
             });
         }
         else
         {
            console.log("This email is already present in users database"+output);
            response.send(JSON.stringify({success: false}));
         }
      }
   });
}