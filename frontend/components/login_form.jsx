var React = require('react');
var CurrentUserUtil = require('../utils/current_user_utils');

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

    ApiUtil.login(this.state, function() {
      router.push("/");
    });
  },

  updateEmail: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  },

  render: function() {
    return (
      <div>
        <header className="signin-header group">
          <nav className="header-nav group">
            <img className="header-logo" src="/assets/formitable-logo-4.png" />
            <a className="header-login" href="#">Login</a>
          </nav>
        </header>

        <section className="signin-body group">
          <h1 className="signin-login">Form It!</h1>
          <form className="signin-form" onSubmit={this.handleSubmit}>

            <label className="signin-email" htmlFor="email">Email Address</label>
            <input onChange={this.updateEmail}
              type="text"
              value={this.state.email}
              id="email"
              />

            <label htmlFor="password">Password</label>
            <input
              onChange={this.updatePassword}
              type="password"
              value={this.state.password}
              id="password"
              />

            <button className="signin-submit">Sign In</button>
          </form>
        </section>
      </div>
    );
  },

});

module.exports = LoginForm;
