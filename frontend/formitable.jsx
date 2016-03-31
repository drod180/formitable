var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;


var FormManager = require('./components/form_manager');
var CurrentUserStore = require('./stores/current_user_store');
var App = require('./components/app');
var LoginForm = require('./components/login_form');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={FormManager}  onEnter={_requireSignedIn} />
    <Route path="login" component={LoginForm} />
  </Route>

);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});

var _requireSignedIn = function(nextState, replace, asyncCompletionCallback) {
  if (CurrentUserStore.currentUserHasBeenFetched){
    ApiUtil.fetchCurrentUser(function () {
      _redirectIfNotLoggedIn(asyncCompletionCallback);
    });
  } else {
    _redirectIfNotLoggedIn(asyncCompletionCallback);
  }
};

function _redirectIfNotLoggedIn(callback) {
  if(!CurrentUserStore.loggedIn) {
    replace("/login");
  }

  callback();
}
