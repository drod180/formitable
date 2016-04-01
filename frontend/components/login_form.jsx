var React = require('react');
var CurrentUserUtils = require('../utils/current_user_utils');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      email: "",
      password: ""
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;

    CurrentUserUtils.login(this.state, function() {
      router.push("/");
    });
  },

  updateEmail: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  },

  clickSignUp: function (e) {
    var router = this.context.router;
    router.push("/signup");
  },

  render: function() {
    return (
      <div>
        <header className="auth-header group">
          <nav className="header-nav group">
            <img className="header-logo" />
            <a className="header-auth-switch" onClick={this.clickSignUp}>Sign Up</a>
          </nav>
        </header>

        <section className="auth-body group">
          <h1 className="auth-slogan">Time to Perform.</h1>
          <form className="auth-form" onSubmit={this.handleSubmit}>

            <label className="auth-email" htmlFor="email">Email Address</label>
            <input
              className="text-box"
              onChange={this.updateEmail}
              type="text"
              value={this.state.email}
              id="email"
              />

            <label htmlFor="password">Password</label>
            <input
              className="text-box"
              onChange={this.updatePassword}
              type="password"
              value={this.state.password}
              id="password"
              />

            <button className="auth-submit">Sign In</button>
          </form>
        </section>
      </div>
    );
  },

});

module.exports = LoginForm;
