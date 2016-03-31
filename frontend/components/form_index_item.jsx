var React = require('react');
var FormStore = require('../stores/forms_store');

var FormIndexItem = React.createClass({
  getInitialState: function () {
    return { public: this.props.form.public };
  },

  handlePublicToggle: function (e) {
    this.setState({public: e.target.value});
  },

  render: function () {
    return (
      <li>
        <header>
          <h3>{this.props.form.name}</h3>
          <label>Public</label>
          <input
            defaultChecked={this.state.public ? "checked" : false}
            type="checkbox"
            onChange={self.handlePublicToggle}
            />
        </header>
      </li>
    );
  }
});

module.exports = FormIndexItem;
