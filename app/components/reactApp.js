var React    = require('react'),
    Mock     = require('mockjs'),
    Griddle  = React.createFactory(require('griddle-react')),
    PageSize = 10
    ;

var columnMeta = Mock.mock({
    'column': ['id', '姓名', '语文', '数学', '英语', '历史', '生物'],
    'order|+1': 1,
    'locked': false,
    'visible': true,
});

var fakeData = Mock.mock({
    'list|45': [{
        'id|+1': 1,
        '姓名': '@chineseName',
        '语文 |40-100': 100,
        '数学 |40-100': 100,
        '英语 |40-100': 100,
        '历史 |40-100': 100,
        '生物 |40-100': 100
    }]
}).list;

module.exports = React.createClass({
  componentDidMount: function() {
  },

  render: function() {
    return (
      <div id="table-area">
        <Griddle 
          results = {fakeData}
          columnMeta = {columnMeta}
          resultsPerPage = {PageSize}
          tableClassName='table' />
      </div>
    );
  }
});