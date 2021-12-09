const express = require('express');
const user = require('../src/model/user');

const app = express();

// Scope and hoisting

console.log(a);
console.log(b);
console.log(c);
var a = 1;
let b = 2;
const c = 3;
function fun() {
  console.log(a);
  console.log(b);
  console.log(c);

  if (true) {
    var a = 11;
    let b = 22;
    const c = 33;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  console.log(a);
  console.log(b);
  console.log(c);
}
fun();

module.exports = app;
