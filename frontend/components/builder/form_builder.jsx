var React = require('react');
var FormStore = require('../../stores/forms_store');
var BuilderOptions = require('./builder_options');
var FieldBuilderView = require('./form_building_view');
var FormBuilder = React.createClass({

	getInitialState: function () {
		return { options: "adder" };
	},

	adderTabSelect: function () {
		this.setState({ options: "adder" });
	},

	settingsTabSelect: function () {
		this.setState({ options: "select" });
	},

  render: function () {
    return (
      <div className="builder">
				<section className="builder-sidebar">
					<ul className="builder-tabs">
						<li className="field-adder-tab">
							<button onClick={this.adderTabSelect} >Add a Field</button>
						</li>
						<li className="field-settings-tab">
							<button onClick={this.settingsTabSelect} >Field Settings</button>
						</li>
					</ul>
					<span><BuilderOptions options={this.state.options} /></span>
				</section>

				<span><FieldBuilderView formId={this.props.params.formId} /></span>
      </div>

    );
  }
});

module.exports = FormBuilder;
