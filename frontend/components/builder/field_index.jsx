var React = require('react');
var FieldIndexItem = require('./field_index_item');
var FieldStore = require('../../stores/fields_store');
var FieldUtil = require('../../utils/fields_utils');

var FieldIndex = React.createClass({
	getInitialState: function () {
			return { fields: this.getStateFromStore() };
	},

	componentDidMount: function () {
		this.fieldStoreToken = FieldStore.addListener(this._onChange);
		FieldUtil.fetchFieldsForForm(this.props.form.id);
	},

	componentWillUnmount: function () {
		this.fieldStoreToken.remove();
	},

	_onChange: function () {
		this.setState({ fields: this.getStateFromStore() });
	},

	getStateFromStore: function () {
		return FieldStore.all();
	},

  render: function () {
    return (
			<div>
				<FieldIndexItem />
      </div>
    );
  }
});

module.exports = FieldIndex;
