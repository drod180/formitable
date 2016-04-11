var React = require('react');
var CurrentUserUtils = require('../../utils/current_user_utils');
var ErrorStore = require('../../stores/errors_store');

var SignUpForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      email: "",
      password: "",
      username: "",
      errors: []
    };
  },

  componentDidMount: function () {
    this.errorToken = ErrorStore.addListener(this._updateErrors);
  },

  componentWillUnmount: function () {
    this.errorToken.remove();
  },

  _updateErrors: function () {
    this.setState({ errors: ErrorStore.all() });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;
    var userParams = {
      user: {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      }
    };
    CurrentUserUtils.signup(userParams, function() {
      router.push("/");
    });
  },

  updateEmail: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  },

  updateUsername: function(e) {
    this.setState({ username: e.currentTarget.value });
  },

  clickLogin: function (e) {
    var router = this.context.router;
    router.push("/login");
  },

  render: function() {
    var errors = this.state.errors.map(function (error, i) {
      return <li key={i}>{error}</li>;
    });
    return (
      <div>
        <header className="auth-header group">
          <nav className="header-nav group">
            <img className="header-logo" />
            <a className="header-auth-switch header-auth-switch-login"
              onClick={this.clickLogin} />
          </nav>
        </header>

        <section className="auth-body group">
          <h1 className="auth-slogan">Become Formitable!</h1>
          <form className="auth-form" onSubmit={this.handleSubmit}>

            <label className="auth-email" htmlFor="email">Email Address</label>
            <input
              className="text-box"
              onChange={this.updateEmail}
              type="text"
              value={this.state.email}
              placeholder="Your valid email"
              id="email"
              />

            <label htmlFor="password">Password</label>
            <input
              className="text-box"
              onChange={this.updatePassword}
              type="password"
              value={this.state.password}
              placeholder="Minimum 7 characters"
              id="password"
              />

            <label htmlFor="username">Username</label>
              <input
                className="text-box"
                onChange={this.updateUsername}
                type="text"
                value={this.state.username}
                placeholder="Your custom Formitable URL"
                id="username"
                />

              <button className="auth-submit">Sign Up</button>
          </form>
        </section>
        <ul className="app-errors">{errors}</ul>
      </div>
    );
  },

});

module.exports = SignUpForm;
