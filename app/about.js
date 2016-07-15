var React     = require('react'),
    ReactDom  = require('react-dom'),
    About     = require('./components/about'),
    mountNode = document.getElementById('container')
    ;

ReactDom.render(<About />, mountNode);