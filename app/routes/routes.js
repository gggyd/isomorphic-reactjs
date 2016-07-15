var React       = require('react'),
    ReactServer = require('react-dom/server'),
    ReactApp    = require('../components/reactApp'),
    About       = require('../components/about')
    ;

module.exports = function(app) {
	app.get('/', function(req, res) {
		var reactHtml = ReactServer.renderToString(<ReactApp />);
    res.render('index.ejs', {reactOutput: reactHtml});
	});

  app.get('/about', function(req, res) {
    var reactHtml = ReactServer.renderToString(<About />);
    res.render('about.ejs', {reactOutput: reactHtml}); 
  })
};