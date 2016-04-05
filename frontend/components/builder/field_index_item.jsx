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
				displayItem = <input type="text" className="text" disabled />;
				break;
			case "number":
				displayItem = <input type="number" className="text" disabled />;
				break;
			case "textarea":
				displayItem = <textarea className="textarea" disabled />;
				break;
			case "radio":
				displayItem = <input type="radio" className="radio" disabled />;
				break;
			case "checkbox":
				displayItem = <input type="checkbox" className="checkbox" disabled />;
				break;
			case "select":
				displayItem = <select disabled />;
				break;
			case "date":
				displayItem = (
          <div type="date" className="date" >
            <input
              type="text"
              className="date-1"
              placeholder="MM"
              disabled
              />
            <span className="symbol">/</span>
            <input
              type="text"
              className="date-2"
              placeholder="DD"
              disabled
              />
            <span className="symbol">/</span>
            <input
              type="text"
              className="date-3"
              placeholder="YYYY"
              disabled
              />
          </div>
        );
				break;
			case "email":
				displayItem = <input type="email" className="text" disabled />;
				break;
			case "tel":
				displayItem = (
          <div type="tel" className="telephone" >
            <input
              type="tel"
              className="telephone-1"
              placeholder="###"
              disabled
              />
            <span className="symbol">-</span>
            <input
              type="tel"
              className="telephone-2"
              placeholder="###"
              disabled
              />
            <span className="symbol">-</span>
            <input
              type="tel"
              className="telephone-3"
              placeholder="####"
              disabled
              />
          </div>
        );
					break;
			default:
				displayItem = "";
		}

		return displayItem;
	}
});


module.exports = FieldIndexItem;
