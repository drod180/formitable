var React = require('react');
var FieldIndexItem = require('./field_index_item');
var FieldStore = require('../../stores/fields_store');
var FieldUtil = require('../../utils/fields_utils');
var ChoiceUtil = require('../../utils/choice_utils');
var FieldActions = require('../../actions/field_actions');

var FieldIndex = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
			return { fields: this.getStateFromStore(), selected: 0 };
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

  itemSelect: function (field, e) {
    this.setState({ selected: field.form_rank_id });
    this.props.callback(field, e);
  },

  render: function () {
		var fields = this.state.fields.map(function (field, i) {
			return (
        <FieldIndexItem
        fieldSelected={this.props.selectedField}
        callback={this.itemSelect}
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

module.exports = FieldIndex;
