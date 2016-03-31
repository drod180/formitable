var React = require('react');
var FormStore = require('../stores/forms_store');
var FormIndex = require('./form_index');

var FormManager = React.createClass({

  render: function () {
    return (
      <div className="manager">
        <header className="manager-header">
          <h1>Form Manager</h1>
          <p>Manage your forms.</p>
          <button><a href="#">+ New Form</a></button>
        </header>
        <section>
          <header></header>
          <FormIndex />
        </section>
      </div>

    );
  }
});

module.exports = FormManager;
