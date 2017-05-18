import React from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toUpperCase() });
  }

  handleSubmit(e) {
    alert("A name was submit: " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text"
                 value={this.state.value}
                 onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <NameForm />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
