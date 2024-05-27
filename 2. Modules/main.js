// const { add: addNumbers, subtract } = require("./functions"); //commonjs
import * as $ from "./functions"; //ES6 webpack을 사용해야 가능!

const output = $.add(1, 2, 3);

console.log(output);
//실행하려면 node main.js
