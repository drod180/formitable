var React = require('react');

var FieldOptions = React.createClass({
  render: function () {
    return (
      this._selectOption(this.props.selectedField)
    );
  },

  fieldOptionChange: function (e) {
    e.preventDefault();
    var field = this.props.selectedField;
    field.option = e.target.value;
    FieldActions.updateFieldForForm(field);
  },

  _selectOption: function (field) {
    var option;

    switch (field.category) {
      case "text":
      case "number":
      case "textarea":
      case "select":
      case "email":
        option = this._sizeOption();
        break;
      case "radio":
      case "checkbox":
        option = this._layoutOption();
        break;
      default:
        option = <div></div>;
    }
    return option;
  },

  _sizeOption: function () {
    return (
      <div className="field-options-dropdowns group">
        <label className="field-settings-label">Field Size</label>
        <select
          value={this.props.selectedField.option}
          className={"settings-field-option"}
          onChange={this.fieldOptionChange}
          >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
    );
  },

  _layoutOption: function () {
    return (
      <div className="field-options-dropdowns group">
        <label className="field-settings-label">Field Layout</label>
        <select
          value={this.props.selectedField.option}
          className={"settings-field-option"}
          onChange={this.fieldOptionChange}
          >
          <option value="One">One Column</option>
          <option value="Two">Two Column</option>
          <option value="Three">Three Column</option>
          <option value="Side">Side-by-side</option>
        </select>
      </div>
    );
  },


});

module.exports = FieldOptions;
