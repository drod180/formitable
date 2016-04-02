var React = require('react');
var FieldIndexItem = require('./field_index_item');
var FieldStore = require('../../stores/fields_store');
var FieldUtil = require('../../utils/fields_utils');
var FieldActions = require('../../actions/field_actions');

var FieldIndex = React.createClass({
	getInitialState: function () {
			return { fields: this.getStateFromStore() };
	},

	componentDidMount: function () {
		this.fieldStoreToken = FieldStore.addListener(this._onChange);
		FieldUtil.fetchFieldsForForm(/*Need to get ID if it is an edit*/);
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
		var fields = this.state.fields.map(function (field) {
			return (<FieldIndexItem field={field} key={field.id} />);
		});
    return (
			<ul>
				{fields}
      </ul>
    );
  }
});

module.exports = FieldIndex;
