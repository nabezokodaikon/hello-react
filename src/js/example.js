"use strict"

// const readline = require('readline'),
// rl = readline.createInterface(process.stdin, process.stdout);
// rl.on("line", cmd => {
  // console.log("> " + cmd);
// })

function hoge(i) {
  console.log(i);
  if (i > 100000) {
    return i;
  } else {
    return hoge(i + 1);
  }
}

hoge(1);
// [1,2,3].map(n => n + 1);

// function sum_rec(n, a) {
  // if (n == 0) return a;
  // return sum_rec(n - 1, a + n);
// }

// console.log(sum_rec(100000, 0));
