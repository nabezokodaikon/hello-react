"use strict"

let counter = 0;

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.on("line", cmd => {
  counter += 1;
  const text = "> ["+ counter + "] " + cmd;
  console.log(text);
});

class IO {
  constructor(f) {
    this.f = f;
  }

  run() {
    return this.f();
  }

  map(f) {
    return new IO(() => f(this.run()));
  }

  flatMap(f) {
    return new IO(() => f(this.run()).run);
  }
}

function printLine(msg) {
  return new IO(() => console.log(msg));
}

const a = printLine("hello");
// a.run();
const b = a.map(i => console.log(i));
// b.run();
const c = a.flatMap(i => new IO(() => console.log(i)));
c.run();

// function hoge(i) {
  // console.log(i);
  // if (i > 100000) {
    // return i;
  // } else {
    // return hoge(i + 1);
  // }
// }

// hoge(1);
// [1,2,3].map(n => n + 1);

