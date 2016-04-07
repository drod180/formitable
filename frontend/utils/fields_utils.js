var FieldActions = require('../actions/field_actions');

var FieldUtils = {
  fetchFieldsForForm: function (formId, callback) {
    $.ajax({
      type: "GET",
      url: "/api/fields",
			data: { fields: { form_id: formId } },
      dataType: "json",
      success: function (fields) {
        FieldActions.receiveFieldsForForm(fields);
				fields.forEach(function (field) {
					callback && callback(field.id);
				});

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

	destroyField: function (id, callback) {
		$.ajax({
			type: "DELETE",
			url: "/api/fields/" + id,
			dataType: "json",
			success: function () {
				callback && callback();
			},
			error: function () {
				console.log("Failure in FieldUtils#destroyField");
			}
		});
	}
};

module.exports = FieldUtils;
