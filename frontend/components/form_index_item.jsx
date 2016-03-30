var React = require('react');
var FormStore = require('../stores/forms_store');

var FormIndexItem = React.createClass({
  render: function () {
    return (
      <li>
        <h3>{this.props.form.name}</h3>
        <p>{this.props.form.description}</p>
      </li>
    );
  }
});

module.exports = FormIndexItem;
