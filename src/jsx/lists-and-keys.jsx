import React from "react";
import ReactDOM from "react-dom";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map(n => 
      <li>{n * 2}</li>
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
