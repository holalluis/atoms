//test esfera.js
let print = console.log;
const Esfera = require('../esfera.js');
const Punt = require('../punt.js');

let esf=new Esfera(new Punt(0,0,0), 10);
print(esf);

//test is_inside
print(esf.is_inside(new Punt(5,5,9)));
print(esf.is_inside(new Punt(5,5,8)));
print(esf.is_inside(new Punt(5,5,7)));
