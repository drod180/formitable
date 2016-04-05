var React = require('react');
var FormUtil = require('../../utils/form_utils');

var DeleteFormButton = React.createClass({
	deleteForm: function (e) {
		e.preventDefault();

		FormUtil.destroyFormForUser(this.props.formId);
	},

  render: function () {
    return (
      <a href='#' className="delete-form" onClick={this.deleteForm}>Delete</a>
    );
  }
});

module.exports = DeleteFormButton;
