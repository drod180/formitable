var CurrentUserActions = require('../actions/current_user_actions');
var CurrentUserStore = require('../stores/current_user_store');
var ErrorActions = require('../actions/error_actions');

var CurrentUserUtils = {
  fetchCurrentUser: function (completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function (user) {
        if (Object.keys(user).length > 0 ) {
          CurrentUserActions.currentUserReceived(user);
        }
      },
      complete: function() {
        completion && completion();
      },
    });
  },

  login: function(credentials, callback) {
     $.ajax({
       type: "POST",
       url: "/api/session",
       dataType: "json",
       data: credentials,
       success: function(currentUser) {
         CurrentUserActions.currentUserReceived(currentUser);
         callback && callback();
       },
       error: function (errors) {
         var error = $.parseJSON(errors.responseText).error;
         ErrorActions.errorsReceived(error);
       }
     });
   },

   logout: function(callback) {
     $.ajax({
       type: "DELETE",
       url: "/api/session",
       dataType: "json",
       success: function() {
         CurrentUserActions.logout();
         callback && callback();
       },
       error: function (errors) {
         var error = $.parseJSON(errors.responseText).error;
         ErrorActions.errorsReceived(error);
       }
     });
   },

   signup: function (credentials, callback) {
     $.ajax({
       type: "POST",
       url: "/api/users",
       dataType: "json",
       data: credentials,
       success: function(currentUser) {
         CurrentUserActions.currentUserReceived(currentUser);
         callback && callback();
       },
       error: function (errors) {
        var error = $.parseJSON(errors.responseText).error;
        ErrorActions.errorsReceived(error);
       }
     });
   }

};

module.exports = CurrentUserUtils;
