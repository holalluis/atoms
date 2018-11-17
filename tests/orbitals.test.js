//test orbitals.js
//test orbitals.js
let print=console.log;
const Orbitals = require('../orbitals.js');

let orb=new Orbitals(13);
print(orb.valencia);
orb=new Orbitals(18);  print(orb.toString()); //Ar
orb=new Orbitals(36);  print(orb.toString()); //Kr
orb=new Orbitals(54);  print(orb.toString()); //Xe
orb=new Orbitals(86);  print(orb.toString()); //Rn
orb=new Orbitals(118); print(orb.toString()); //Og
