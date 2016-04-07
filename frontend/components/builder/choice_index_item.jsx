var React = require('react');
var ChoiceActions = require('../../actions/choice_actions');
var ChoiceIndexItem = React.createClass({

	getInitialState: function () {
		return {
			selected: this.props.choice.selected,
			label: this.props.choice.label,
		};
	},

  render: function () {
		item = this._displayChoice();
    return item;
  },

	_displayChoice: function () {
		var displayItem;
		switch (this.props.field.category) {
			case "select":
			case "radio":
				displayItem = (
					<div>
						<input
							type="radio"
							name={this.props.field.form_rank_id + "-choice-group"}
							selected={this.state.selected}
							onChange={this._handleCheckSelect}
							className="choice-setting-option"
							/>
							<input
								type="text"
								onChange={this._handleLabelChange}
								className="choice-option-label"
								value={this.state.label}
								/>
					</div>
				);
				break;
			case "checkbox":
				displayItem = (
					<div>
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
								value={this.props.choice.label}
								/>
					</div>
				);
				break;
			default:
				displayItem = "";
		}
		return displayItem;
	},

	_handleCheckSelect: function (e) {
		debugger
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
