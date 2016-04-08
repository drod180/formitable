var React = require('react');
var FieldOption = require('./field_options');
var ChoiceIndex = require('./choice_index');
var FieldType = require('./field_type');
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
            value={this.props.selectedField.label}
            className="form-label-setter"
            onChange={this.fieldLabelChange}
            />
        </li>
        <li className="setting-list-item group">
          <FieldType selectedField={this.props.selectedField} />
          <FieldOption selectedField={this.props.selectedField} />
        </li>
				<li className="setting-list-item">
					<label>Choices</label>
					<div className="setting-list-item-choice group">
        		<ChoiceIndex field={this.props.selectedField} />
					</div>
				</li>
      </ul>
    );
  },

  _renderEmpty: function () {
    return (
      <div className="field-settings-empty">
        <h4 className="empty-settings-header">No Field Selected</h4>
        <p
          className="empty-settings-description"
          >Please click on a field in the form preview on the right to change its properties.
        </p>
      </div>
    );
  }
});

module.exports = FieldSettings;
