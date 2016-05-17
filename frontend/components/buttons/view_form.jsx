var React = require('react');
var FormStore = require('../../stores/forms_store');
var FormUtil = require('../../utils/form_utils');
var FieldUtil = require('../../utils/fields_utils');


var ViewForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	viewForm: function (e) {
		e.preventDefault();

		var router = this.context.router;
		router.push('/view/' + this.props.formId);
	},

  render: function () {
    return (
      <a href="#"
				className="form-view" onClick={this.viewForm}
				>View
			</a>
    );
  }
});

module.exports = ViewForm;
