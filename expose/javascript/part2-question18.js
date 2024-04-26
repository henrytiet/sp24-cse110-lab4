let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
setInterval(function() { d = new Date();
    console.log((d.toLocaleTimeString())); }, 1000);