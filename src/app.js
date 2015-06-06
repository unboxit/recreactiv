'use strict';

var React = require('react');
var Reflux = require('reflux');

var store = Reflux.createStore({
  getInitialState() {
    return {
      message: 'Hello World!'
    };
  }
});

var App = React.createClass({

  mixins: [
    Reflux.connect(store)
  ],

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }

});

React.render(<App/>, document.getElementById('app'));
