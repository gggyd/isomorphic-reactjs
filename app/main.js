var React     = require('react'),
    ReactDom  = require('react-dom'),
    ReactApp  = require('./components/reactApp'),
    mountNode = document.getElementById('container')
    ;

ReactDom.render(<ReactApp />, mountNode);