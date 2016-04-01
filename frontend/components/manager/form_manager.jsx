var React = require('react');
var FormStore = require('../../stores/forms_store');
var FormIndex = require('./form_index');

var FormManager = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	handleNewForm: function () {
		var router = this.context.router;

		router.push("/builder");
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
