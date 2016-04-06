var React = require('react');
var FieldOption = require('./field_options');
var FieldChoices = require('./field_choices');
var FieldActions = require('../../actions/field_actions');

var FieldSettings = React.createClass({
  getInitialState: function () {
    if (this.props.selectedField) {
      return { fieldLabel: this.props.selectedField.label };
    } else {
      return { fieldLabel: "" };
    }

  },

  fieldLabelChange: function (e) {
    e.preventDefault();
    var field = this.props.selectedField;
    field.label = e.target.value;
    this.setState(
      { fieldLabel: e.target.value },
      FieldActions.updateFieldForForm(field)
    );
  },

  fieldTypeChange: function (e) {
    e.preventDefault();
  },

  render: function () {
    if (this.props.selectedField) {
      return this._renderField();
    } else {
      return this._renderEmpty();
    }
  },

  _renderField: function () {
    var formRank = this.props.selectedField.form_rank_id;
    return (
      <ul className="field-settings">
        <li>
          <div className="form-rank-display">
            {formRank + "."}
          </div>
        </li>
        <li className="setting-list-item group">
          <label className="field-settings-label">Field Label</label>
          <textarea
            value={this.state.fieldLabel}
            className="form-label-setter"
            onChange={this.fieldLabelChange}
            />
        </li>
        <li className="setting-list-item group">
          <label className="field-settings-label">Field Type</label>
          <select
            className="settings-field-type"
            onChange={this.fieldTypeChange}
            />
        </li>
        <FieldOption />
        <FieldChoices />
      </ul>
    );
  },

  _renderEmpty: function () {
    return (<div>{"I'm Ron Burgandy?"}</div>);
  }
});

module.exports = FieldSettings;
