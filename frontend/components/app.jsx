var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div className="app-body">
        <header className="navbar group">
          <img className="logo-navbar" />
          <ul className="navbar-menu group">
            <li className="navbar-item"><a href="#">Forms</a></li>
            <ul className="navbar-item account"><a href="#">Account</a>
              <li className="account-item"><a href="#">My Account</a></li>
              <li className="account-item"><a href="#">Sign Out</a></li>
            </ul>
          </ul>
        </header>
        {this.props.children}

      </div>
    );
  }
});

module.exports = App;
