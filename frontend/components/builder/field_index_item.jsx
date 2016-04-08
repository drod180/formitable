var React = require('react');
var DeleteFieldButton = require('../buttons/delete_field');
var ChoiceStore = require('../../stores/choices_store');
var FieldStore = require('../../stores/fields_store');

var FieldIndexItem = React.createClass({
	getInitialState: function () {
		return { choices: this._getStateFromStore() };
	},

  inputSelect: function (e) {
    this.props.callback(this.props.field, e);
  },

	componentDidMount: function () {
		this.choiceToken = ChoiceStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.choiceToken.remove();
	},

	_onChange: function () {
		this.setState({
			choices: ChoiceStore.allForField(this.props.field.form_rank_id)
		});
	},

	_getStateFromStore: function () {
		return ChoiceStore.allForField(this.props.field.form_rank_id);
	},

	componentWillReceiveProps: function (newProps) {
		if (newProps && newProps.field) {
			this.setState({
				choices: ChoiceStore.allForField(newProps.field.form_rank_id)
			});
		}
	},

  render: function () {
		var item;
    var selectedField;
		var choiceItems;

    if (this.props.fieldSelected &&
      this.props.fieldSelected.form_rank_id === this.props.field.form_rank_id) {
      selectedField = "field-selected";
    } else {
      selectedField = "";
    }

		if (this.state.choices.length > 0) {
			choiceItems = this.state.choices.map(function (choice, i) {
				return this._displayChoice(choice, i);
			}.bind(this));
		}


		item =  this._displayField(choiceItems);

    return (
			<div
        className={"field-input-items group " + selectedField }
        onClick={this.inputSelect}
        >
				<label className="field-input-label">{this.props.field.label}</label>
				<li
					key={this.props.field.id}>
					{item}
          <DeleteFieldButton field={this.props.field} />
	      </li>
			</div>
    );
  },

	_displayField: function (choiceItems) {
		var displayItem;
    var option = this.props.field.option;
		switch (this.props.field.category) {
			case "text":
				displayItem = <input type="text" className={"text " + option}  disabled />;
				break;
			case "number":
				displayItem = <input type="number" className={"text " + option} disabled />;
				break;
			case "textarea":
				displayItem = <textarea className={"textarea " + option} disabled />;
				break;
			case "radio":
				displayItem = choiceItems || <input type="radio" className={"radio " + option} disabled />;
				break;
			case "checkbox":
				 displayItem =  choiceItems || <input type="checkbox" className={"checkbox " + option} disabled />;
				break;
			case "select":
				displayItem = choiceItems || <select disabled className={option} />;
				break;
			case "date":
				displayItem = (
          <div type="date" className="date" >
            <input
              type="text"
              className="date-1"
              placeholder="MM"
              disabled
              />
            <span className="symbol">/</span>
            <input
              type="text"
              className="date-2"
              placeholder="DD"
              disabled
              />
            <span className="symbol">/</span>
            <input
              type="text"
              className="date-3"
              placeholder="YYYY"
              disabled
              />
          </div>
        );
				break;
			case "email":
				displayItem = <input type="email" className={"text " + option} disabled />;
				break;
			case "tel":
				displayItem = (
          <div type="tel" className="telephone" >
            <input
              type="tel"
              className="telephone-1"
              placeholder="###"
              disabled
              />
            <span className="symbol">-</span>
            <input
              type="tel"
              className="telephone-2"
              placeholder="###"
              disabled
              />
            <span className="symbol">-</span>
            <input
              type="tel"
              className="telephone-3"
              placeholder="####"
              disabled
              />
          </div>
        );
					break;
			default:
				displayItem = "";
		}

		return displayItem;
	},

	_displayChoice: function (choice, index) {
		var displayItem;
		switch (this.props.field.category) {
			case "select":
				if (choice.selected) {
					displayItem = (
						<select disabled className="choice-form-option" key={index} >
							<option disabled>{choice.label}</option>
						</select>
					);
				}
				break;
			case "radio":
				displayItem = (
					<div className="choice-form-div group" key={index}>
						<input
							disabled
							type="radio"
							checked={choice.selected}
							className="choice-form-option"
							/>
						<label className="choice-form-label">{choice.label}</label>
					</div>
				);
				break;
			case "checkbox":
				displayItem = (
					<div className="choice-form-div group" key={index}>
						<input
							disabled
							type="checkbox"
							checked={choice.selected}
							className="choice-form-option"
							/>
						<label className="choice-form-label">{choice.label}</label>
					</div>
				);
				break;
			default:
				displayItem = "";
		}
		return displayItem;
	},
});


module.exports = FieldIndexItem;
