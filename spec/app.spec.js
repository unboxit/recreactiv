'use strict';

var React = require('react/addons');
var App = require('../src/app.js');

describe('Application', function(){
  var instance;
  var TestUtils = React.addons.TestUtils;

  afterEach(function() {
    if (instance && instance.isMounted()) {
      // Only components with a parent will be unmounted
      React.unmountComponentAtNode(instance.getDOMNode().parent);
    }
  });

  describe('rendered without a container reference', function() {
    beforeEach(function(){
      instance = TestUtils.renderIntoDocument(<App/>);
    });

    it('should render a heading with the given text', function() {
      var heading = TestUtils.findRenderedDOMComponentWithTag(instance, 'h1');
      expect(heading.getDOMNode().textContent).toBe('Hello World');
    });
  });
});
