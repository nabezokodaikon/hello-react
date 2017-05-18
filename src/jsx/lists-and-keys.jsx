import React from "react";
import ReactDOM from "react-dom";

class NumberList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map(n =>
      <li key={n.toString()}>
        {n * 2}
      </li>
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos;
    const todoItems = todos.map((v, i) => 
      <li key={i}>
        {v}
      </li>
    );
    return (
      <ul>
        {todoItems}
      </ul>
    );
  }
}

class App extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const todos = ["Coding", "Build", "Test", "Publish"];
    return (
      <div>
        <NumberList numbers={numbers} />
        <TodoList todos={todos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
