var React = require('react');
var Intro = require('intro.js/intro');
var FormStore = require('../../stores/forms_store');
var EditForm = require('../buttons/edit_form');
var DeleteForm = require('../buttons/delete_form');

var FormIndexItem = React.createClass({
  getInitialState: function () {
    return { public: this.props.form.public };
  },

	componentDidMount: function () {
		if (this.props.intro === true) {
			this.continueTour();
		}
	},

  handlePublicToggle: function (e) {
		e.preventDefault();

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
					<DeleteForm formId={this.props.form.id} />
        </section>
      </li>
    );
  },

	continueTour: function () {
		$('.form-item').attr('data-intro', 'Each form, when hovered over, has an edit and delete option.');
		$('.form-item').attr('data-step', 2);
		$('.form-item').attr('data-position', 'top');

		Intro.introJs().start();
	}
});

module.exports = FormIndexItem;
