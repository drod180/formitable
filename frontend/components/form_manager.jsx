var React = require('react');
var FormStore = require('../stores/forms_store');
var FormIndex = require('./form_index');

var FormManager = React.createClass({

  render: function () {
    return (
      <div>
        <header>
          <h1></h1>
          <p></p>
          <button></button>
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
