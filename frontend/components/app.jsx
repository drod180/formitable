var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <img className="logo-navbar" />
          <ul>
            <li><a href="#">Forms</a></li>
            <ul>Account
              <li><a href="#">My Account</a></li>
              <li><a href="#">Sign Out</a></li>
            </ul>
          </ul>
        </header>
        {this.props.children}

      </div>
    );
  }
});

module.exports = App;
