var React = require('react');
var FormStore = require('../stores/forms_store');

var FormIndexItem = React.createClass({
  handlePublicToggle: function () {
  },

  render: function () {
    return (
      <li>
        <header>
          <h3>{this.props.form.name}</h3>
          <label>Public</label>
          <input
            checked={this.props.form.public ? "checked" : false}
            type="checkbox"
            onChange={self.handlePublicToggle}
            />
        </header>
      </li>
    );
  }
});

module.exports = FormIndexItem;
