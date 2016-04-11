var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var FormManager = require('./components/manager/form_manager');
var FormBuilder = require('./components/builder/form_builder');
var CurrentUserStore = require('./stores/current_user_store');
var App = require('./components/app');
var LoginForm = require('./components/auth/login_form');
var SignUpForm = require('./components/auth/signup_form');
var CurrentUserUtils = require ('./utils/current_user_utils');

window.initializeApp = function () {
  ReactDOM.render(
    <Router history={browserHistory} >

      <Route path="/login" component={LoginForm} onEnter={_requireSignedOut} />
      <Route path="/signup" component={SignUpForm} onEnter={_requireSignedOut} />

      <Route path="/" component={App} onEnter={_requireSignedIn} >
        <IndexRoute component={FormManager} />
				<Route path="/builder" component={FormBuilder} >
					<Route path="/builder/:formId" />
				</Route>
      </Route>

    </Router>,
    document.getElementById('root')
  );
};

function _requireSignedIn(nextState, replace, asyncCompletionCallback) {
  if (CurrentUserStore.currentUserHasBeenFetched){
    CurrentUserUtils.fetchCurrentUser(function () {
      _redirectIfNotLoggedIn();
    });
  } else {
    _redirectIfNotLoggedIn();
  }

  function _redirectIfNotLoggedIn() {
    if(!CurrentUserStore.isLoggedIn()) {
      replace("/signup");
    }

    asyncCompletionCallback();
  }
}

function _requireSignedOut(nextState, replace, asyncCompletionCallback) {
  // if (CurrentUserStore.currentUserHasBeenFetched){
  //   CurrentUserUtils.fetchCurrentUser(function () {
  //     _redirectIfLoggedIn();
  //   });
  // } else {
  //   _redirectIfLoggedIn();
  // }
  //
  // function _redirectIfLoggedIn() {
    if(CurrentUserStore.isLoggedIn()) {
      replace("/");
    }

    asyncCompletionCallback();
  // }
}
