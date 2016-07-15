var React = require('react')
    ;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      list: [1,2,3,4,5,6]
    }
  },

  add: function() {
    var newList = this.state.list;
    newList.push(10);
    this.setState({
      list: newList
    });
  },

  render: function() {
    return (
      <div>
        <h1>About.</h1>
        {
          this.state.list.map((item, index) => {
            return <span key={index}>{item}</span>
          })
        }
        <div>
          <button onClick={this.add}>加</button>
        </div>
      </div>
    );
  }
})
