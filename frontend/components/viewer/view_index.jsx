var React = require('react');
var ViewIndexItem = require('./view_index_item');
var FieldStore = require('../../stores/fields_store');
var FieldUtil = require('../../utils/fields_utils');
var ChoiceUtil = require('../../utils/choice_utils');
var FieldActions = require('../../actions/field_actions');


var ViewIndex = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
			return { fields: this.getStateFromStore() };
	},

	componentDidMount: function () {
		this.fieldStoreToken = FieldStore.addListener(this._onChange);
		FieldUtil.fetchFieldsForForm(this.props.formId,
			ChoiceUtil.fetchChoicesForField);
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
		var fields = this.state.fields.map(function (field, i) {
			return (
        <ViewIndexItem
        field={field}
        key={i} />
      );
    }.bind(this));
    return (
			<ul>
				{fields}
      </ul>
    );
  }
});

module.exports = ViewIndex;
