var React = require('react');
var Intro = require('intro.js/intro');
var FormStore = require('../../stores/forms_store');
var EditForm = require('../buttons/edit_form');
var ViewForm = require('../buttons/view_form');
var DeleteForm = require('../buttons/delete_form');
var CurrentUserStore = require('../../stores/current_user_store');

var FormIndexItem = React.createClass({
  getInitialState: function () {
    return { public: this.props.form.public };
  },

	componentDidMount: function () {

		if (CurrentUserStore.currentUser().username === "admin" &&
				this.props.intro === true &&
				sessionStorage.managerIntro === "play") {
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
					<ViewForm formId={this.props.form.id} />
					<DeleteForm formId={this.props.form.id} />
        </section>
      </li>
    );
  },

	continueTour: function () {
		var $item = $('.form-item:first');
		$item.attr('data-intro', 'Each form, when hovered over, has an edit and delete option.');
		$item.attr('data-step', 2);
		$item.attr('data-position', 'top');
		Intro.introJs().onexit(function () {
			sessionStorage.managerIntro = "played";
		}).oncomplete(function () {
			sessionStorage.managerIntro = "played";
		}).start();
	}
});

module.exports = FormIndexItem;
