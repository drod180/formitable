var FieldActions = require('../actions/field_actions');

var FieldUtils = {
  fetchFieldsForForm: function (formId) {
    $.ajax({
      type: "GET",
      url: "/api/fields",
			data: { fields: { form_id: formId } },
      dataType: "json",
      success: function (fields) {
        FieldActions.receiveFieldsForForm(fields);
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
        FieldActions.receiveFieldForForm(field);
      },
      error: function () {
        console.log("Failure in FieldUtils#fetchFormForUser");
      }
    });
  },

	addFieldToForm: function (params) {
    $.ajax({
      type: "POST",
      url: "/api/fields",
			data: params,
      dataType: "json",
      success: function (field) {
        FieldActions.receiveFieldForForm(field);
      },
      error: function () {
        console.log("Failure in FieldUtils#addFieldToForm");
      }
    });
  }
};

module.exports = FieldUtils;
