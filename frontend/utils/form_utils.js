var FormActions = require('../actions/form_actions');

var FormUtils = {
  fetchFormsForUser: function () {
    $.ajax({
      type: "GET",
      url: "api/forms",
      dataType: "json",
      success: function (forms) {
        FormActions.receiveFormsForUser(forms);
      },
      error: function () {
        console.log("Failure in FormUtils#fetchFormsFromUser");
      }
    });
  },

  fetchFormForUser: function () {
    $.ajax({
      type: "GET",
      url: "api/form/" + params.id,
      dataType: "json",
      success: function (form) {
        FormActions.receiveFormForUser(form);
      },
      error: function () {
        console.log("Failure in FormUtils#fetchFormFromUser");
      }
    });
  }
};

module.exports = FormUtils;
