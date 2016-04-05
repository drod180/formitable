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
    return (
      <div className="field-settings">
        <input
          type="textarea"
          className="settings-field-label"
          onChange={this.fieldLabelChange}
          />
				<select
          className="settings-field-type"
          onChange={this.fieldTypeChange}
          />
        <FieldOption />
        <FieldChoices />
      </div>

    );
  }
});

module.exports = FieldSettings;
