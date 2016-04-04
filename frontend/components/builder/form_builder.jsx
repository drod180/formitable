var React = require('react');
var FormStore = require('../../stores/forms_store');
var BuilderOptions = require('./builder_options');
var FieldBuilderView = require('./form_building_view');
var FormBuilder = React.createClass({

  render: function () {
    return (
      <div className="builder">
				<section className="builder-sidebar">
					<ul className="builder-tabs">
						<li className="field-adder-tab"></li>
						<li className="field-settings-tab"></li>
					</ul>
					<span><BuilderOptions /></span>
				</section>

				<span><FieldBuilderView formId={this.props.params.formId} /></span>
      </div>

    );
  }
});

module.exports = FormBuilder;
