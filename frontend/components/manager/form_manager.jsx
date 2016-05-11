var React = require('react');
var Intro = require('intro.js/intro');
var FormStore = require('../../stores/forms_store');
var FormIndex = require('./form_index');
var FormAction = require('../../actions/form_actions');
var CurrentUserStore = require('../../stores/current_user_store');

var FormManager = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	componentDidMount: function  () {
		if (CurrentUserStore.currentUser().username === "admin" &&
				sessionStorage.managerIntro === "play") {
			this.startTour();
		}
	},

	handleNewForm: function (e) {
		//Need to check because we also can get here through the intro
		//which does not pass an event
		if (e) {
			e.preventDefault();
		}

		var form = {};
		var router = this.context.router;

		form.name = "Untitled Form";
		form.description = "This is my form. Please fill it out. It's awesome!";
		router.push("/builder");
		FormAction.receiveFormForUser(form);

	},

  render: function () {
    return (
      <div className="manager">
        <header className="manager-header">
          <button className="new-form-button" onClick={this.handleNewForm}>+ New Form</button>
          <h1>Form Manager</h1>
          <p>Manage your forms. Manage your life.</p>
        </header>
        <section className="forms-section">
          <header></header>
          <FormIndex />
        </section>
      </div>

    );
  },

	startTour: function() {
		Intro.introJs().exit();
		$('.forms-section').attr('data-intro', 'This is where you can manage all of your forms');
		$('.forms-section').attr('data-step', 1);
		$('.new-form-button').attr('data-intro', "Let's start a new form!");
		$('.new-form-button').attr('data-step', 3);
	}
});

module.exports = FormManager;
