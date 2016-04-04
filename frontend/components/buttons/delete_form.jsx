var React = require('react');
var FormUtil = require('../../utils/form_utils');

var DeleteFormButton = React.createClass({
	deleteForm: function (e) {
		FormUtil.destroyFormForUser(this.props.formId);
	},

  render: function () {
    return (
      <button onClick={this.deleteForm}>DELETE FORM</button>
    );
  }
});

module.exports = DeleteFormButton;
