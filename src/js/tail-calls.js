"use strict"

// node --harmony src/js/tail-calls.js
// node --harmony-tailcalls src/js/tail-calls.js

function hoge(i) {
  console.log(i);
  if (i > 100000) {
    return i;
  } else {
    return hoge(i + 1);
  }
}

hoge(1);
