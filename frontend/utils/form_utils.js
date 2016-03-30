var FormActions = require('../actions/formActions.js');

var FormUtils = {
  fetchFormsForUser: function () {
    $.ajax({
      type: "GET",
      url: "api/form",
      dataType: "json",
      success: function (forms) {
        ApiActions.receiveFormsForUser(forms);
      },
      error: function () {
        console.log("Failure in ApiUtils#fetchFormsFromUser");
      }
    });
  }
};

module.exports = FormUtils;
