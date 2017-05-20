import React from "react";
import ReactDOM from "react-dom";

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productRow">
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        Hello!
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
