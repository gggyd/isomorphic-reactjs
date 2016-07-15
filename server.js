var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    port       = 4000
    ;

require('node-jsx').install();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

require('./app/routes/routes')(app);

app.get('*', function(req, res) {
  res.json({
    'route': 'Sorry!'
  });
});

app.listen(port, function() {
  console.log('Server is Up and Running at Port : ' + port);
});