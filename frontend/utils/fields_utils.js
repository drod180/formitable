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
        console.log("Failure in FieldUtils#fetchFieldsForForm");
      }
    });
  },

  fetchFieldForForm: function (id) {
    $.ajax({
      type: "GET",
      url: "/api/fields/" + id,
      dataType: "json",
      success: function (field) {
        FieldActions.receiveFieldForForm(field);
      },
      error: function () {
        console.log("Failure in FieldUtils#fetchFieldForForm");
      }
    });
  },

	destroyField: function (id) {
		$.ajax({
			type: "DELETE",
			url: "/api/fields/" + id,
			dataType: "json",
			success: function () {
				
			},
			error: function () {
				console.log("Failure in FieldUtils#destroyField");
			}
		});
	}
};

module.exports = FieldUtils;
