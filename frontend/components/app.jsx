var React = require('react');
var CurrentUserStore = require('../stores/current_user_store');
var CurrentUserUtils = require('../utils/current_user_utils');
var App = React.createClass({
  contextTypes: {
   router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
   return { currentUser: null };
  },

  componentDidMount: function () {
   this.currentUserToken = CurrentUserStore.addListener(this._onChange);
   this._onChange();
  },

  componentWillUnmount: function () {
   this.currentUserToken.remove();
  },

  _onChange: function () {
   if (CurrentUserStore.isLoggedIn()) {
     this.setState({ currentUser: CurrentUserStore.currentUser() });
   } else {
     this.context.router.push("/login");
   }
  },

  handleSignOut: function (e) {
    var router = this.context.router;

    CurrentUserUtils.logout(function() {
      router.push("/login");
    });
  },

  handleAccount: function (e) {

  },

  render: function () {
    return (
      <div className="app-body">

        <header className="navbar group">
          <img className="logo-navbar" />

          <ul className="navbar-menu group">
            <li className="navbar-item">
              <a href="#">Forms</a>
            </li>
            <li className="navbar-item">
              <a href="#">Account</a>
              <ul className="account-items">
                <li onClick={this.handleAccount} className="account-item"><a>My Account</a></li>
                <li className="divider">----------</li>
                <li onClick={this.handleSignOut} className="account-item"><a>Sign Out</a></li>
              </ul>
            </li>
          </ul>

        </header>

        {this.props.children}

      </div>
    );
  }
});

module.exports = App;
