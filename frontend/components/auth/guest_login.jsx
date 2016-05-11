var React = require('react');
var CurrentUserUtils = require('../../utils/current_user_utils');

var GuestLogin = React.createClass({
	contextTypes: {
    router: React.PropTypes.object.isRequired
  },

	guestLogin: function (e) {
    e.preventDefault();

		sessionStorage.managerIntro = "play";
		sessionStorage.builderIntro = "play";

    var creds = {
			email: "admin@aa.io",
			password: "password"
		};

    var router = this.context.router;
		CurrentUserUtils.login(creds, function() {
      router.push("/");
    });
	},

  render: function () {
    return (
      <button className="guest-submit" onClick={this.guestLogin}>Guest Login</button>
    );
  }
});

module.exports = GuestLogin;
