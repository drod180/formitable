var CurrentUserActions = require('../actions/current_user_actions');
var CurrentUserStore = require('../stores/current_user_store');

var CurrentUserUtils = {
  fetchCurrentUser: function (completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function (user) {
        CurrentUserActions.currentUserReceived(user);
      },
      complete: function() {
        completion && completion();
      },
      error: function () {
        console.log("Failure in CurrentUserUtils#fetchCurrentUser");
      }
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
       error: function () {
         console.log("Failure in CurrentUserUtils#login");
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
       error: function () {
         console.log("Failure in CurrentUserUtils#logout");
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
       error: function () {
         console.log("Failure in CurrentUserUtils#signup");
       }
     });
   }

};

module.exports = CurrentUserUtils;
