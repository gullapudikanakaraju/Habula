module.exports = function(app){
	app.get('/post_event',function(request,response){
	response.render('../views/event');
    });
}