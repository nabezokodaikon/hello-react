import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Tarou",
  lastName: "Yamada"
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function tick() {
  const element = (
    <div>
      <h1>{ new Date().toLocaleTimeString() }</h1>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById("root")
  );
}

setInterval(tick, 1000);
