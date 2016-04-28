var React = require('react');
var ChoiceActions = require('../../actions/choice_actions');

var AddChoiceButton = React.createClass({
	addChoice: function (e) {
		e.preventDefault();
		e.stopPropagation();
		var choice = $.extend(true, {}, this.props.choice);
		choice.label = "";
		choice.field_rank_id = null;
		choice.id = undefined;
		choice.selected = false;
		ChoiceActions.receiveChoiceForField(choice);
	},

  render: function () {
    return (
      <button
        className="choice-add"
        onClick={this.addChoice}
        >+
      </button>
    );
  }
});

module.exports = AddChoiceButton;
