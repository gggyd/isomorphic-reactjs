var React       = require('react'),
    ReactServer = require('react-dom/server'),
    ReactApp    = require('../components/reactApp');

module.exports = function(app) {
	app.get('/', function(req, res){
		var reactHtml = ReactServer.renderToString(<ReactApp />);
    res.render('index.ejs', {reactOutput: reactHtml});
	});
};