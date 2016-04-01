var React = require('react');
var FormStore = require('../../stores/forms_store');
var FieldAdder = require('./field_adder');

var BuilderOptions = React.createClass({

  render: function () {
		var options;
		//options will depend on which prop is sent down in regards to the tab
		//If its add field we will need to map all the fields
		//If its field settings need to render based on the currently selected field
    return (
      <ul className="builder-options">
				<FieldAdder />
      </ul>

    );
  }
});

module.exports = BuilderOptions;
