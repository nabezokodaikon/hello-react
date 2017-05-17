import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  print() {
    console.log("Button click!");
  }

  render() {
    return (
      <button onClick={this.print}>
        Click
      </button>
    );  
  }
}

class Link extends React.Component {
  print(e) {
    e.preventDefault();
    console.log("Link click!");
  }

  render() {
    return (
      <a href="#" onClick={this.print}>
        Click me.
      </a>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Button />
        <Link />
        <Toggle />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
