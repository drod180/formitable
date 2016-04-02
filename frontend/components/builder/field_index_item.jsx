var React = require('react');
var FieldStore = require('react');

var FieldIndexItem = React.createClass({

  render: function () {
		var item = this.props.field.type;

    return (
			<li key={item.id}>
				{item}
      </li>
    );
  }
});

module.exports = FieldIndexItem;
