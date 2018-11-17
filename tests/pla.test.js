//test pla.js
let print=console.log;
const Punt=require('../punt.js');
const Vector=require('../vector.js');
const Pla=require('../pla.js');

//crea 2 plans
let pla1=new Pla(new Punt(1,2,3),  new Vector(1,-1,4),   new Vector(1,1,-2));   print(pla1);
let pla2=new Pla(new Punt(10,0,0), new Vector(-10,10,0), new Vector(-10,0,10)); print(pla2);

