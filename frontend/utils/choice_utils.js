var ChoiceActions = require('../actions/choice_actions');

var ChoiceUtils = {
  fetchChoicesForField: function (fieldId) {
    $.ajax({
      type: "GET",
      url: "/api/choices",
			data: { choices: { field_id: fieldId } },
      dataType: "json",
      success: function (choices) {
        ChoiceActions.receiveChoicesForField(choices);
      },
      error: function () {
        console.log("Failure in ChoiceUtils#fetchChoicesForField");
      }
    });
  },

	destroyChoice: function (id) {
		$.ajax({
			type: "DELETE",
			url: "/api/choices/" + id,
			dataType: "json",
			success: function () {

			},
			error: function () {
				console.log("Failure in ChoiceUtils#destroyField");
			}
		});
	}
};

module.exports = ChoiceUtils;
