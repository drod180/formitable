var React = require('react');
var ChoiceStore = require('../../stores/choices_store');
var ChoiceUtil = require('../../utils/choice_utils');
var ChoiceIndexItem = require('./choice_index_item');
var ChoiceAction = require('../../actions/choice_actions');

var ChoiceIndex = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
			return { choices: this.getStateFromStore() };
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
		return ChoiceStore.allForField(this.props.field.form_rank_id);
	},

	componentWillReceiveProps: function (newProps) {
		this.setState({
			choices: ChoiceStore.allForField(newProps.field.form_rank_id)
		});
	},

	hanldeRadioSelect: function (selectedChoice) {
		var choices = ChoiceStore.allForField(this.props.field.form_rank_id);
		choices.forEach(function (choice) {
			if (choice.selected === true) {
				choice.selected = false;
				ChoiceAction.updateChoiceForField(choice);
			}
		});

		selectedChoice.selected = true;
		ChoiceAction.updateChoiceForField(selectedChoice);
	},

  render: function () {
		var choices = this.state.choices.map(function (choice, i) {

			return (
        <ChoiceIndexItem
        field={this.props.field}
        choice={choice}
				callback={this.hanldeRadioSelect}
        key={i} />
      );
    }.bind(this));
    return this._renderChoiceType(choices);
  },

	_renderChoiceType: function (choices) {
		var displayItem;
		switch (this.props.field.category) {
			case "select":
			case "checkbox":
			case "radio":
				displayItem = <div className="group">{choices}</div>;
				break;
			default:
				displayItem = <div></div>;
		}
		return displayItem;
	}
});

module.exports = ChoiceIndex;
