import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    hoge(1);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("componentWillUnmount");
  }
  
  tick() {
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment
    }));
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is { this.state.counter }.</h2>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock increment={ 1 } />
        <Clock increment={ 2 } />
        <Clock increment={ 3 } />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
