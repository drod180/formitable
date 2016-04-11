var React = require('react');
var FormStore = require('../../stores/forms_store');
var FieldAdder = require('./field_adder');
var FieldSettings = require('./field_settings');

var BuilderOptions = React.createClass({

  render: function () {
		var options = this.props.options === "adder" ?
      <FieldAdder /> :
      <FieldSettings selectedField={this.props.selectedField}/>;

    return (
      <ul className="builder-options group">
				{options}
      </ul>

    );
  }
});

module.exports = BuilderOptions;
