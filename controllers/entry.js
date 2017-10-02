module.exports = function(app){
	app.get('/', function(request, response) {
		console.log("hello");
        response.render('../views/index');
    });
};