var React = require('react');
var FieldTypeConstants = require('../../constants/field_type_constants');

var FieldAdder = React.createClass({

  render: function () {
		var selectors = FieldTypeConstants.map(function (fieldObj) {
			return (<button name={fieldObj.type}>{fieldObj.name}</button>);
		});
    return (
      <form className="field-adder">
				{selectors}
      </form>
    );
  }
});

module.exports = FieldAdder;
