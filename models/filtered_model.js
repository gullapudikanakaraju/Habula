module.exports = function(filter_conditions, request, response){

    var users_complete_data_model = require('../schemas/users_complete_schema.js');
    console.log("in filtered_model.js");
    console.log(filter_conditions);
    var cookies = request.cookies;
    if(filter_conditions.community=="")
      {
        
        if(cookies.current_community == 'cse')
        {
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
              filter_conditions.count= result.length;
              response.render('../views/filtered_cse', filter_conditions);
            }
          });
        }
        if(cookies.current_community == 'ece')
        {
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
              filter_conditions.count= result.length;
              response.render('../views/filtered_ece', filter_conditions);
            }
          });
        }
        if(cookies.current_community == 'eee')
        {
            users_complete_data_model.find().where('branch').equals('Electrical').exec(function(err, result){
            if(err)
            {
              console.log("error occurred while finding the documents"+err);
              response.send();
            }         
            else
            {
              console.log("successfully found the documents"+result);
              console.log("numbers of memebers in the eee community are: "+result.length);
              filter_conditions.count= result.length;
              response.render('../views/filtered_eee', filter_conditions);
            }
          });
        }
        if(cookies.current_community == 'chemical')
        {
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
              filter_conditions.count= result.length;
              response.render('../views/filtered_chemical', filter_conditions);
            }
          });
        }
        if(cookies.current_community == 'mechanical')
        {
            users_complete_data_model.find().where('branch').equals('Mechanical').exec(function(err, result){
            if(err)
            {
              console.log("error occurred while finding the documents"+err);
              response.send();
            }         
            else
            {
              console.log("successfully found the documents"+result);
              console.log("numbers of memebers in the mechanical community are: "+result.length);
              filter_conditions.count= result.length;
              response.render('../views/filtered_mechanical', filter_conditions);
            }
          });
        }
      }

      else
      {
        if(filter_conditions.community == 'computer science')
        {
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
              filter_conditions.count= result.length;
              response.cookie('current_community','cse');
              response.render('../views/filtered_cse', filter_conditions);
            }
          });
        }
        if(filter_conditions.community == 'electronics and communication')
        {
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
              filter_conditions.count= result.length;
              response.cookie('current_community','ece');
              response.render('../views/filtered_ece', filter_conditions);
            }
          });
        }
        if(filter_conditions.community == 'electrical')
        {
            users_complete_data_model.find().where('branch').equals('Electrical').exec(function(err, result){
            if(err)
            {
              console.log("error occurred while finding the documents"+err);
              response.send();
            }         
            else
            {
              console.log("successfully found the documents"+result);
              console.log("numbers of memebers in the eee community are: "+result.length);
              filter_conditions.count= result.length;
              response.cookie('current_community','eee');
              response.render('../views/filtered_eee', filter_conditions);
            }
          });
        }
        if(filter_conditions.community == 'mechanical')
        {
          users_complete_data_model.find().where('branch').equals('Mechanical').exec(function(err, result){
            if(err)
            {
              console.log("error occurred while finding the documents"+err);
              response.send();
            }         
            else
            {
              console.log("successfully found the documents"+result);
              console.log("numbers of memebers in the mechanical community are: "+result.length);
              filter_conditions.count= result.length;
              response.cookie('current_community','mechanical');
              response.render('../views/filtered_mechanical', filter_conditions);
            }
          });
        }
        if(filter_conditions.community == 'chemical')
        {
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
              filter_conditions.count= result.length;
              response.cookie('current_community','chemical');
              response.render('../views/filtered_chemical', filter_conditions);
            }
          });
        }

      }
};