var React = require('react');
var CurrentUserStore = require('../stores/current_user_store');

var App = React.createClass({
  contextTypes: {
   router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
   return { currentUser: null };
  },

  componentDidMount: function() {
   this.currentUserToken = CurrentUserStore.addListener(this._onChange);
   this._onChange();
  },

  componentWillUnmount: function() {
   this.currentUserToken.remove();
  },

  _onChange: function() {
   if (CurrentUserStore.isLoggedIn()) {
     this.setState({ currentUser: CurrentUserStore.currentUser() });
   } else {
     this.context.router.push("/login");
   }
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

            <ul className="navbar-item account group">
              <a href="#">Account</a>
              <li className="account-item">
                <a href="#">My Account</a>
              </li>
              <li className="account-item">
                <a href="#">Sign Out</a>
              </li>
            </ul>

          </ul>

        </header>

        {this.props.children}

      </div>
    );
  }
});

module.exports = App;
