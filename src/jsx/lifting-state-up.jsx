import React from "react";
import ReactDOM from "react-dom";

class BoilingVerdict extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.celsius >= 100) {
      return <p>The water would boil.</p>;
    } else {
      return <p>The water would not boil.</p>
    }
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
  
  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input 
          value={temperature}
          onChange={this.handleChange}/>
        <BoilingVerdict 
          celsius={parseFloat(temperature)}/>
      </fieldset>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
