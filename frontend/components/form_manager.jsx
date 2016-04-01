var React = require('react');
var FormStore = require('../stores/forms_store');
var FormIndex = require('./form_index');

var FormManager = React.createClass({

  render: function () {
    return (
      <div className="manager">
        <header className="manager-header">
          <button>+ New Form</button>
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
