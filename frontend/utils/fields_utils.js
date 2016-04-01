var FieldActions = require('../actions/field_actions');

var FieldUtils = {
  fetchFieldsForForm: function (formId) {
    $.ajax({
      type: "GET",
      url: "/api/fields",
			data: { fields: { form_id: formId } },
      dataType: "json",
      success: function (fields) {
        FormActions.receiveFieldsForForm(fields);
      },
      error: function () {
        console.log("Failure in FieldUtils#fetchFormForUser");
      }
    });
  },

  fetchFieldForUser: function () {
    $.ajax({
      type: "GET",
      url: "/api/field/" + params.id,
      dataType: "json",
      success: function (field) {
        FormActions.receiveFieldForForm(field);
      },
      error: function () {
        console.log("Failure in FieldUtils#fetchFormForUser");
      }
    });
  }
};

module.exports = FieldUtils;
