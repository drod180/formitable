var React = require('react');
var FormStore = require('../../stores/forms_store');
var FormIndex = require('./form_index');
var FormAction = require('../../actions/form_actions');

var FormManager = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	handleNewForm: function (e) {
		e.preventDefault();
		
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
          <button onClick={this.handleNewForm}>+ New Form</button>
          <h1>Form Manager</h1>
          <p>Manage your forms. Manage your life.</p>
        </header>
        <section className="forms-section">
          <header></header>
          <FormIndex />
        </section>
      </div>

    );
  }
});

module.exports = FormManager;
