var React = require('react');
var FieldTypeConstants = require('../../constants/field_type_constants');
var FieldActions = require('../../actions/field_actions');

var FieldType = React.createClass({
  fieldTypeChange: function (e) {
    e.preventDefault();
    var field = this.props.selectedField;
    field.category = e.target.value;
    FieldActions.updateFieldForForm(field);
  },

  render: function () {
    var disabled = this.props.selectedField.id ? true : false;
    return (
      <li className="setting-list-item group">
        <label className="field-settings-label">Field Type</label>
        <select
          disabled={disabled}
          value={this.props.selectedField.category}
          className={"settings-field-type " + (disabled ? "disabled" : "")}
          onChange={this.fieldTypeChange}
          >{this._renderOptions()}
        </select>
      </li>
    );
  },

  _renderOptions: function () {
    var options = Object.keys(FieldTypeConstants).map(function (fieldTypes, i) {
      return(
        <option
          value={FieldTypeConstants[fieldTypes].type}
          key={i}
          >{FieldTypeConstants[fieldTypes].type}
        </option>
    );
    }.bind(this));

    return (
      options
    );
  }

});

module.exports = FieldType;
