'use strict';

var React = require('react');

var App = React.createClass({

  getInitialState() {
    return {
      message: 'Hello World!'
    }
  },

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }

});

React.render(<App/>, document.getElementById('app'));
