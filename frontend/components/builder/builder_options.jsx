var React = require('react');
var Intro = require('intro.js/intro');
var FormStore = require('../../stores/forms_store');
var FieldAdder = require('./field_adder');
var FieldSettings = require('./field_settings');
var CurrentUserStore = require('../../stores/current_user_store');

var BuilderOptions = React.createClass({

	componentDidMount: function () {
		if (CurrentUserStore.currentUser().username === "admin") {
			this.startTour();
		}
	},

  render: function () {
		var options = this.props.options === "adder" ?
      <FieldAdder /> :
      <FieldSettings selectedField={this.props.selectedField}/>;

    return (
      <ul className="builder-options group">
				{options}
      </ul>

    );
  },

	startTour: function () {
		Intro.introJs().exit();
		$('.builder-options').attr('data-intro', 'Here we can select which fields we want to add. Select one!');
		$('.builder-options').attr('data-step', 2);
		$('.builder-options').attr('data-position', 'right');
	}
});

module.exports = BuilderOptions;
