let d = new Date();
let time = d.toLocaleTimeString();
var timer = setInterval(time, 1000);
console.log(time);