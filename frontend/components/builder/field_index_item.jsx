var React = require('react');
var FieldStore = require('react');
var DeleteFieldButton = require('../buttons/delete_field');
var FieldIndexItem = React.createClass({

  inputSelect: function () {
    this.props.callback(this.props.field.form_rank_id);
  },

  render: function () {
		var item = this._displayField();
    return (
			<div
        className={"field-input-items group " + (this.props.fieldSelected ? "field-selected" : "") }
        onClick={this.inputSelect}
        >
				<label className="field-input-label">{this.props.field.label}</label>
				<li
					key={this.props.field.id}>
					{item}
          <DeleteFieldButton field={this.props.field} />
	      </li>
			</div>
    );
  },

	_displayField: function () {
		var displayItem;
		switch (this.props.field.category) {
			case "text":
				displayItem = <input type="text" className="text" />;
				break;
			case "number":
				displayItem = <input type="number" className="text" />;
				break;
			case "textarea":
				displayItem = <input type="textarea" className="textarea" />;
				break;
			case "radio":
				displayItem = <input type="radio" className="radio" />;
				break;
			case "checkbox":
				displayItem = <input type="checkbox" className="checkbox" />;
				break;
			case "select":
				displayItem = <select />;
				break;
			case "date":
				displayItem = <input type="date" className="date" />;
				break;
			case "email":
				displayItem = <input type="email" className="email" />;
				break;
			case "tel":
				displayItem = <input type="tel" className="telephone" />;
					break;
			default:
				displayItem = "";
		}

		return displayItem;
	}
});


module.exports = FieldIndexItem;
