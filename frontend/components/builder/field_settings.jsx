var React = require('react');


var FieldSettings = React.createClass({

  render: function () {
		var settings;
		//settings depends on which field is selected.
    return (
      <div className="field-settings">
				{settings}
      </div>

    );
  }
});

module.exports = FieldSettings;
