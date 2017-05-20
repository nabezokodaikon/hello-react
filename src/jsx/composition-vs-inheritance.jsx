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

class WelcomeDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
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
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
