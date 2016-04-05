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
		this.setState({ options: "settings" });
	},

  render: function () {
    return (
      <div className={"builder group " + this.state.options}>
				<section className="builder-sidebar">
					<ul className={"builder-tabs group " + this.state.options}>
						<li
							className="field-adder-tab"
							onClick={this.adderTabSelect}>
							Add a Field
						</li>
						<li
							className="field-settings-tab"
							onClick={this.settingsTabSelect}>
							Field Settings
						</li>
					</ul>
					<BuilderOptions options={this.state.options} />
				</section>

				<FieldBuilderView
          callback={this.settingsTabSelect} 
          formId={this.props.params.formId} />
      </div>

    );
  }
});

module.exports = FormBuilder;
