//test recta.js
let print = console.log;
const Punt = require('../punt.js');
const Vector = require('../vector.js');
const Recta = require('../recta.js');

//nova recta
let re=new Recta(new Punt(1,2,3), new Vector(3,4,5));
print(re);
