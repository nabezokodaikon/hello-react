import React from 'react';
import ReactDOM from 'react-dom';

function WelcomeA(props) {
  return <h1>WelcomeA, { props.hoge }</h1>
}

class WelcomeB extends React.Component {
  render() {
    return <h1>WelcomeB, { this.props.fuga }</h1>
  }
}

function App() {
  return (
    <div>
      <WelcomeA hoge="Tarou" />,
      <WelcomeB fuga="Yamada" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
