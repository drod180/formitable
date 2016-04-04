var React = require('react');
var FormStore = require('../../stores/forms_store');
var EditForm = require('./edit_form');

var FormIndexItem = React.createClass({
  getInitialState: function () {
    return { public: this.props.form.public };
  },

  handlePublicToggle: function (e) {
    this.setState({public: e.target.value});
  },

  render: function () {
    return (
      <li className="form-item">
        <header className="form-item-header group">
          <h3>{this.props.form.name}</h3>
          <div className ="form-toggle">
            <label className="form-toggle-label">Public</label>
            <input
              className="form-toggle-box"
              defaultChecked={this.state.public ? "checked" : false}
              type="checkbox"
              onChange={self.handlePublicToggle}
              />
          </div>
        </header>
        <section className="form-options">
					<EditForm formId={this.props.form.id} />
        </section>
      </li>
    );
  }
});

module.exports = FormIndexItem;
