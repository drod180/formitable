var React = require('react');


var FieldSettings = React.createClass({

  render: function () {
		var settings;
      // <FieldLabel />
      // {formRank}
      // <FieldType />
      // <FieldSize />);

    return (
      <div className="field-settings">
				{settings}
      </div>

    );
  }
});

module.exports = FieldSettings;
