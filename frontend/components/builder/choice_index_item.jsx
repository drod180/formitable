var React = require('react');
var ChoiceActions = require('../../actions/choice_actions');
var DeleteChoiceButton = require('../buttons/delete_choice');
var AddChoiceButton = require('../buttons/add_choice');
var ChoiceIndexItem = React.createClass({
	getInitialState: function () {
		return {
			selected: this.props.choice.selected,
			label: this.props.choice.label
		};
	},


  render: function () {
		item = this._displayChoice();
    return item;
  },

	_displayChoice: function () {
		var displayItem;
		var deleteButton = (this.props.button && this.props.choice.field_rank_id !== 1) ?
			<DeleteChoiceButton choice={this.props.choice} /> : "";
		var addButton = this.props.button ?
			<AddChoiceButton choice={this.props.choice} /> : "";
		var label = this.props.choice.label;
		switch (this.props.field.category) {
			case "select":
			case "radio":
				displayItem = (
					<div className="choice-option-box group">
						<input
							type="radio"
							name={this.props.field.form_rank_id + "-choice-group"}
							checked={this.props.choice.selected}
							onChange={this._handleRadioSelect}
							className="choice-setting-option"
							/>
							<input
								type="text"
								onChange={this._handleLabelChange}
								className="choice-option-label"
								placeholder="Unnamed"
								value={label}
								/>
							{addButton}
							{deleteButton}
					</div>
				);
				break;
			case "checkbox":
				displayItem = (
					<div className="choice-option-box group">
						<input
							type="checkbox"
							checked={this.props.choice.selected}
							onChange={this._handleCheckSelect}
							className="choice-setting-option"
							/>
							<input
								type="text"
								onChange={this._handleLabelChange}
								className="choice-option-label"
								value={label}
								placeholder="Unnamed"
								/>
							{addButton}
							{deleteButton}
					</div>
				);
				break;
			default:
				displayItem = "";
		}
		return displayItem;
	},

	_handleRadioSelect: function (e) {
		var choice = this.props.choice;
		this.props.callback(choice);
	},

	_handleCheckSelect: function (e) {
		var choice = this.props.choice;
		choice.selected = e.target.checked;
		this.setState({ selected: e.target.checked }, ChoiceActions.updateChoiceForField(choice));
	},

	_handleLabelChange: function (e) {
		var choice = this.props.choice;
		choice.label = e.target.value;
		this.setState({ label: e.target.value}, ChoiceActions.updateChoiceForField(choice));
	}
});


module.exports = ChoiceIndexItem;
