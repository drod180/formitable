var React = require('react');
var ChoiceStore = require('../../stores/choices_store');
var FieldStore = require('../../stores/fields_store');
var ChoiceIndex = require('../builder/choice_index');

var ViewIndexItem = React.createClass({
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
		var choiceItems = <ChoiceIndex field={this.props.field} buttons={false} />;

		item =  this._displayField(choiceItems);

    return (
			<div>
				<label>{this.props.field.label}</label>
				<li
					key={this.props.field.id}>
					{item}
	      </li>
			</div>
    );
  },

	_displayField: function (choiceItems) {
		var displayItem;
    var option = this.props.field.option;
		switch (this.props.field.category) {
			case "text":
				displayItem = <input type="text" className={"text " + option}   />;
				break;
			case "number":
				displayItem = <input type="number" className={"text " + option}  />;
				break;
			case "textarea":
				displayItem = <textarea className={"textarea " + option}  />;
				break;
			case "radio":
				displayItem = choiceItems || <input type="radio" className={"radio " + option}  />;
				break;
			case "checkbox":
				 displayItem =  choiceItems || <input type="checkbox" className={"checkbox " + option}  />;
				break;
			case "select":
				displayItem = choiceItems || <select  className={option} />;
				break;
			case "date":
				displayItem = (
          <div type="date" className="date" >
            <input
              type="text"
              className="date-1"
              placeholder="MM"
              />
            <span className="symbol">/</span>
            <input
              type="text"
              className="date-2"
              placeholder="DD"
              />
            <span className="symbol">/</span>
            <input
              type="text"
              className="date-3"
              placeholder="YYYY"
              />
          </div>
        );
				break;
			case "email":
				displayItem = <input type="email" className={"text " + option}  />;
				break;
			case "tel":
				displayItem = (
          <div type="tel" className="telephone" >
            <input
              type="tel"
              className="telephone-1"
              placeholder="###"
              />
            <span className="symbol">-</span>
            <input
              type="tel"
              className="telephone-2"
              placeholder="###"
              />
            <span className="symbol">-</span>
            <input
              type="tel"
              className="telephone-3"
              placeholder="####"
              />
          </div>
        );
					break;
			default:
				displayItem = "";
		}

		return displayItem;
	}
});


module.exports = ViewIndexItem;
