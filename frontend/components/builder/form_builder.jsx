var React = require('react');
var Intro = require('intro.js/intro');
var FormStore = require('../../stores/forms_store');
var FieldStore = require('../../stores/fields_store');
var BuilderOptions = require('./builder_options');
var FieldBuilderView = require('./form_building_view');
var FieldIndex = require('./field_index');
var CurrentUserStore = require('../../stores/current_user_store');

var FormBuilder = React.createClass({
	getInitialState: function () {
		return { options: "adder", field: null };
	},

  componentDidMount: function () {
    this.fieldStoreToken = FieldStore.addListener(this._onChange);
		if (CurrentUserStore.currentUser().username === "admin" &&
				sessionStorage.builderIntro === "play") {
			this.continueTour();
		}
  },

  componentWillUnmount: function () {
    this.fieldStoreToken.remove();
  },

  _onChange: function () {
    if (this.state.field !== null) {
      this.setState({
        field: FieldStore.findByRank(this.state.field.form_rank_id)
      });
    } else {
			this.setState({field: null});
		}
  },

	adderTabSelect: function () {
		this.setState({ options: "adder"});
	},

	settingsTabSelect: function (field, e) {
    e.preventDefault();
    if (field !== null) {
  		this.setState({ options: "settings", field: field });
    } else {
      this.setState({ options: "settings" });
    }
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
							onClick={this.settingsTabSelect.bind(this, null)}>
							Field Settings
						</li>
					</ul>
					<BuilderOptions
            options={this.state.options}
            selectedField={this.state.field}
            />
				</section>

				<FieldBuilderView
          callback={this.settingsTabSelect}
          selectedField={this.state.field}
          formId={this.props.params.formId}
					/>
      </div>

    );
  },

	continueTour: function() {
		$('.builder').attr('data-intro', 'This is where you can create or edit forms');
		$('.builder').attr('data-step', 1);
		var intro = Intro.introJs();
		intro.onchange(function (targetElement) {
			if (this._currentStep === 0) {
				intro.setOption("disableInteraction", true);
			} else {
				//Have to manually clear the overlay due to bug with intro.js library
				$('.introjs-disableInteraction').attr('style', 'width: 0px; height 0px;');
				intro.setOption("disableInteraction", false);
			}
		});
		Intro.introJs().onexit(function () {
			sessionStorage.builderIntro = "played";
		}).oncomplete(function () {
			sessionStorage.builderIntro = "played";
		}).start();
	}
});

module.exports = FormBuilder;
