var React = require('react');
var FormStore = require('../../stores/forms_store');
var FormIndexItem = require('./form_index_item');
var FormUtils = require('../../utils/form_utils');

var FormIndex = React.createClass({
  getInitialState : function () {
    return { forms: [] };
  },

  componentDidMount: function () {
    this.formStoreToken = FormStore.addListener(this._onChange);
    FormUtils.fetchFormsForUser();
  },

  componentWillUnmount: function () {
    this.formStoreToken.remove();
  },

  _getStateFromStore: function () {
    return FormStore.all();
  },

  _onChange: function () {
    this.setState({ forms: this._getStateFromStore() });
  },

  render: function () {
    var forms = this.state.forms.map(function (form, i) {
			return i === 0 ?
				(<FormIndexItem
					intro={true}
					form={form}
					key={form.id} />) :
				(<FormIndexItem
					form={form}
					key={form.id} />);
    }.bind(this));
    return (
      <section>
        <ul className="form-list">{forms}</ul>
      </section>
    );
  }
});

module.exports = FormIndex;
