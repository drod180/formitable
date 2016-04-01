var React = require('react');
var FieldIndexItem = require('/field_index_item');

var FieldIndex = React.createClass({

  render: function () {
    return (
			<div>
				<FieldIndexItems />
      </div>
    );
  }
});

module.exports = FieldIndex;
