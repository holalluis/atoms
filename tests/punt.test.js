//test punt.js
let print=console.log;
const Punt = require('../punt.js');

//distancia entre 2 punts
let p=new Punt(3,4,12);
print(p);
print('Distancia de (3,4,12) a (0,0,0): '+p.distancia(new Punt(0,0,0)));
