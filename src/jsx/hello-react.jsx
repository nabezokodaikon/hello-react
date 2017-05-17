import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  user() {
    return <h1>Welcome back!</h1>;
  }

  guest() {
    return <h1>Please sign up.</h1>;
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return this.user();
    } else {
      return this.guest();
    }
  }
}

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onClick}>
        Login
      </button>
    );
  }
}

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onClick}>
        Logout
      </button>
    );
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          <LogoutButton onClick={this.handleLogoutClick} />
        </div>
      );
    } else {
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          <LoginButton onClick={this.handleLoginClick} />
        </div>
      );
    }
  }
}

class Mailbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const unreadMessages = this.props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
}

class WarningBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.warn) {
      return null;
    } else {
      return (
        <div>
          Warning!
        </div>
      );
    }
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show" }
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const messages = ["a"];
    return (
      <div>
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <Page />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
