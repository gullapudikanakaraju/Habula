module.exports = function(app){
    var registration_model = require('../models/registration_model.js');
    var bcrypt = require('bcryptjs');
    var nodemailer = require('nodemailer');
    app.post('/registration', function(request, response){
        var data = {};
        data.full_name = request.body.full_name;
        data.email = request.body.email;
        data.college = request.body.college;
        data.branch = request.body.branch;
        // data.password = request.body.password;
        // console.log(data);

        registration_model(data,request,response);


    });
};