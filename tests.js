/*tests*/

let  Punt      =  require('./punt.js');
let  Vector    =  require('./vector.js');
let  Recta     =  require('./recta.js');
let  Pla       =  require('./pla.js');
let  Esfera    =  require('./esfera.js');

let  Orbitals  =  require('./orbitals.js');
let  Atom      =  require('./atom.js');

/* punt.js
let p=new Punt(3,4,12);
console.log(p.toString());
console.log(p.distancia(new Punt(0,0,0)))
*/

/* vector.js
let a=new Vector(2,0,1);
let b=new Vector(1,-1,3);
let c=a.suma(b);       console.log(c); //vector
let c=a.resta(b);      console.log(c); //vector
let c=a.multiplica(2); console.log(c); //vector
let c=a.divideix(2);   console.log(c); //vector
let c=a.prod_esc(b);   console.log(c); //float
let c=a.prod_vec(b);   console.log(c); //vector
let c=a.modul();       console.log(c); //float
let c=a.normalitza();  console.log(c); //vector
let a = new Vector(3,4,12);
console.log(a.modul());
let a=new Vector(1,-1,4);
let b=new Vector(1,1,-2);
console.log(a.prod_vec(b));
*/

/* recta.js
let re=new Recta(new Punt(1,2,3), new Vector(3,4,5)); //recta
console.log(re.toString());
*/

/* pla.js
let p=new Pla(new Punt(1,2,3), new Vector(1,-1,4), new Vector(1,1,-2));
console.log(p.toString());
let p=new Pla(new Punt(10,0,0), new Vector(-10,10,0), new Vector(-10,0,10));
console.log(p.toString());
*/

/* esfera.js
let e=new Esfera(null,10);
console.log(e.toString());
console.log(e.is_inside(new Punt(5,5,9)));
console.log(e.is_inside(new Punt(5,5,8)));
console.log(e.is_inside(new Punt(5,5,7)));
*/

/* orbitals.js
let or;
for(let i=0;i<=20;i++){
  or = new Orbitals(i);
  console.log(or.toString());
}
or=new Orbitals(10);  console.log(or.toString()); //Ne
or=new Orbitals(18);  console.log(or.toString()); //Ar
or=new Orbitals(36);  console.log(or.toString()); //Kr
or=new Orbitals(54);  console.log(or.toString()); //Xe
or=new Orbitals(86);  console.log(or.toString()); //Rn
or=new Orbitals(118); console.log(or.toString()); //Og
*/

/* atom.js
for(let i=1;i<20;i++){
  let a=new Atom(i); console.log(a.toString());
}
*/

