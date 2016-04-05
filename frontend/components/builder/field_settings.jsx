var React = require('react');
var FieldOption = require('./field_options');
var FieldChoices = require('./field_choices');

var FieldSettings = React.createClass({
  fieldLabelChange: function (e) {
    e.preventDefault();
  },

  fieldTypeChange: function (e) {
    e.preventDefault();
  },

  render: function () {
    var formRank = 3;
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
  }
});

module.exports = FieldSettings;
