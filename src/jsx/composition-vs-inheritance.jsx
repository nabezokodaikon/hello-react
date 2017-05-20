import React from "react";
import ReactDOM from "react-dom";

class FancyBorder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"FancyBorder FancyForder-" + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {this.props.title} 
        </h1>
        <p className="Dialog-message">
          {this.props.message}
        </p>
        {this.props.children}
      </FancyBorder>
    );
  }
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}`);
  }
}

class WelcomeDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog 
        title="Welcome"
        message="Thank you for visiting our spacecraft!"
      />
    );
  }
}

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>This is a contacts.</p>
    );
  }
}

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>This is a chat.</p>
    );
  }
}

class SplitPane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {this.props.left}
        </div>
        <div className="SplitPane-right">
          {this.props.right}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <WelcomeDialog />  
        <SplitPane
          left={<Contacts />}
          right={<Chat />}
        />
        <SignUpDialog />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
