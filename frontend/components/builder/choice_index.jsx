var React = require('react');
var ChoiceStore = require('../../stores/choices_store');
var ChoiceUtil = require('../../utils/choice_utils');
var ChoiceIndexItem = require('./choice_index_item');

var ChoiceIndex = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
			return { choices: this.getStateFromStore()};
	},

	componentDidMount: function () {
		this.choiceStoreToken = ChoiceStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.choiceStoreToken.remove();
	},

	_onChange: function () {
		this.setState({ choices: this.getStateFromStore() });
	},

	getStateFromStore: function () {
		var value = ChoiceStore.allForField(this.props.field.form_rank_id);
		return value;
	},

  render: function () {
		var choices = this.state.choices.map(function (choice, i) {
			return (
        <ChoiceIndexItem
        field={this.props.field}
        choice={choice}
        key={i} />
      );
    }.bind(this));
    return this._renderChoiceType(choices);
  },

	_renderChoiceType: function (choices) {
		var displayItem;
		switch (this.props.field.category) {
			case "select":
				displayItem = <select>{choices}</select>;
				break;
			case "checkbox":
			case "radio":
				displayItem = <div>{choices}</div>;
				break;
			default:
				displayItem = <div></div>;
		}
		return displayItem;
	}
});

module.exports = ChoiceIndex;
