var React = require('react');
var FieldIndex = require('./field_index');

var FieldBuilderView = React.createClass({
	getInitialState: function () {
		return { form: {}};
	},

  render: function () {
    return (
			<div>
				<FieldIndex form={this.state.form}/>
      </div>
    );
  }
});

module.exports = FieldBuilderView;
