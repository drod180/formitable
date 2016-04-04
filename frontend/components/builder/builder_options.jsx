var React = require('react');
var FormStore = require('../../stores/forms_store');
var FieldAdder = require('./field_adder');
var FieldSettings = require('./field_settings');

var BuilderOptions = React.createClass({

  render: function () {
		var options = this.props.options === "adder" ?
		 							<FieldAdder /> :
									<FieldSettings />;

    return (
      <ul className="builder-options">
				{options}
      </ul>

    );
  }
});

module.exports = BuilderOptions;
