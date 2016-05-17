var React = require('react');
var ViewIndex = require('./view_index');
var FormUtil = require('../../utils/form_utils');
var FormStore = require('../../stores/forms_store');

var viewForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function () {
		return {
			name: "",
			description: ""
		};
	},

	componentDidMount: function () {
		this.formStoreToken = FormStore.addListener(this._onChange);
		FormUtil.fetchFormForUser(this.props.params.formId);
	},

	componentWillUnmount: function () {
		this.formStoreToken.remove();
	},

	_onChange: function () {
		this.setState({
			name: FormStore.first().name,
			description: FormStore.first().description
		});
	},

	render: function () {
		return (
			<div className={"form-viewer"}>
				<header className={"form-viewer-header"}>
					<h1>{this.state.name}</h1>
					<h3>{this.state.description}</h3>
				</header>
				<ViewIndex
					className={"form-viewer-fields"}
          formId={this.props.params.formId}
          />
			</div>
		);
	}
});

module.exports = viewForm;
