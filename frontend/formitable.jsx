var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var FormManager = require('./components/form_manager');
var CurrentUserStore = require('./stores/current_user_store');
var App = require('./components/app');
var LoginForm = require('./components/login_form');
var SignUpForm = require('./components/signup_form');
var CurrentUserUtils = require ('./utils/current_user_utils');


window.initializeApp = function () {
  ReactDOM.render(
    <Router history={browserHistory} >

      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignUpForm}/>
      <Route path="/" component={App}>
        <IndexRoute component={FormManager}  onEnter={_requireSignedIn} />
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
    if(!CurrentUserStore.isLoggedIn) {
      replace("/login");
    }

    asyncCompletionCallback();
  }
}
