var React = require('react');
var FormStore = require('../../stores/forms_store');
var BuilderOptions = require('./builder_options');

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

				<span>This needs to be a new component which is my form</span>
      </div>

    );
  }
});

module.exports = FormBuilder;
