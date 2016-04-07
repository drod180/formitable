var React = require('react');

var ChoiceIndexItem = React.createClass({
  render: function () {
		item = this._displayChoice();
    return item;
  },

	_displayChoice: function () {
		var displayItem;
		switch (this.props.field.category) {
			case "radio":
				displayItem = (
					<label>
						<input
							type="radio"
							name={this.props.field.form_rank_id + "-choice-group"}
							selected={this.props.choice.selected ? "selected" : ""}
							value={this.props.choice.label}
							className="radio"
							/>{this.props.choice.label}
					</label>
				);
				break;
			case "checkbox":
				displayItem = (
					<label>
						<input
							type="checkbox"
							checked={this.props.choice.selected ? "checked" : ""}
							onChange={this._handleChoiceSelect}
							value={this.props.choice.label}
							className="checkbox "
							/>{this.props.choice.label}
					</label>
				);
				break;
			case "select":
				displayItem = (
					<option
						defaultValue={this.props.choice.selected ? "selected" : ""}
						value={this.props.choice.label}
						>{this.props.choice.label}
					</option>
				);
				break;
			default:
				displayItem = "";
		}

		return displayItem;
	},

	_handleChoiceSelect: function () {
		//Need to update the choice, likely through a update util.
	}
});


module.exports = ChoiceIndexItem;
