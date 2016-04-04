var React = require('react');
var FieldStore = require('react');
var DeleteFieldButton = require('../buttons/delete_field');
var FieldIndexItem = React.createClass({

  render: function () {
		var item = this._displayField();
    return (
			<li key={this.props.field.id}>
				{item}
				<DeleteFieldButton fieldId={this.props.field.id} />
      </li>
    );
  },

	_displayField: function () {
		var displayItem;
		switch (this.props.field.category) {
			case "text":
				displayItem = <input type="text" />;
				break;
			case "number":
				displayItem = <input type="number" />;
				break;
			case "textarea":
				displayItem = <input type="textarea" />;
				break;
			case "radio":
				displayItem = <input type="radio" />;
				break;
			case "checkbox":
				displayItem = <input type="checkbox" />;
				break;
			case "select":
				displayItem = <input type="select" />;
				break;
			case "date":
				displayItem = <input type="date" />;
				break;
			case "email":
				displayItem = <input type="email" />;
				break;
			case "tel":
				displayItem = <input type="tel" />;
					break;
			default:
				displayItem = "";
		}

		return displayItem;
	}
});


module.exports = FieldIndexItem;
