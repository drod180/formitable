var React = require('react');
var ChoiceActions = require('../../actions/choice_actions');

var DeleteChoiceButton = React.createClass({
	deleteChoice: function (e) {
		e.preventDefault();
		e.stopPropagation();
		ChoiceActions.removeChoiceForField(this.props.choice);
	},

  render: function () {
    return (
      <button
        className="choice-delete"
        onClick={this.deleteChoice}
        >--
      </button>
    );
  }
});

module.exports = DeleteChoiceButton;
