var FormActions = require('../actions/form_actions');

var FormUtils = {
  fetchFormsForUser: function () {
    $.ajax({
      type: "GET",
      url: "/api/forms",
      dataType: "json",
      success: function (forms) {
        FormActions.receiveFormsForUser(forms);
      },
      error: function () {
        console.log("Failure in FormUtils#fetchFormsFromUser");
      }
    });
  },

  fetchFormForUser: function (id) {
    $.ajax({
      type: "GET",
      url: "/api/forms/" + id,
      dataType: "json",
      success: function (form) {
        FormActions.receiveFormForUser(form);
      },
      error: function () {
        console.log("Failure in FormUtils#fetchFormFromUser");
      }
    });
  },

	saveFormForUser: function (form, fields) {
    $.ajax({
      type: "POST",
      url: "/api/forms",
			data: {
				forms: {
					name: form.name,
					description: form.description
				},
				fields: fields
			},
      dataType: "json",
      success: function (form) {
        FormActions.receiveFormForUser(form);
      },
      error: function () {
        console.log("Failure in FormUtils#saveFormForUser");
      }
    });
  },

	updateFormForUser: function (form, fields) {
    $.ajax({
      type: "PATCH",
      url: "/api/forms/" + form.id,
			data: {
				forms: {
					name: form.name,
					description: form.description
				},
				fields: fields
			},
      dataType: "json",
      success: function (form) {
        FormActions.receiveFormForUser(form);
      },
      error: function () {
        console.log("Failure in FormUtils#updateFormForUser");
      }
    });
  }
};

module.exports = FormUtils;
