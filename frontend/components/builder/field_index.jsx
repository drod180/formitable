var React = require('react');
var FieldIndexItem = require('./field_index_item');
var FieldStore = require('../../stores/fields_store');
var FieldUtil = require('../../utils/fields_utils');
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
		FieldUtil.fetchFieldsForForm(this.props.formId);
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

  itemSelect: function (rankId) {
    this.setState({ selected: rankId });
  },

  render: function () {
		var fields = this.state.fields.map(function (field) {
			return (
        <FieldIndexItem
        fieldSelected={this.state.selected === field.form_rank_id ?
                  true : false }
        callback={this.itemSelect}
        field={field}
        key={field.form_rank_id} />
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
