var React = require('react');
var FormStore = require('../../stores/forms_store');
var FormUtil = require('../../utils/form_utils');
var FieldUtil = require('../../utils/fields_utils');


var EditForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	editForm: function (e) {
		var router = this.context.router;
		router.push('/builder/' + this.props.formId);
	},

  render: function () {
    return (
      <button onClick={this.editForm}>Edit</button>
    );
  }
});

module.exports = EditForm;
