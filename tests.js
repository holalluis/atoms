/*tests*/

//#include
let Punt     = require('./punt.js');
let Vector   = require('./vector.js');
let Recta    = require('./recta.js');
let Pla      = require('./pla.js');
let Esfera   = require('./esfera.js');
let Orbitals = require('./orbitals.js');
let Atom     = require('./atom.js');

/* punt.js */
  let p=new Punt(3,4,12); console.log(p);
  console.log('Distancia de (3,4,12) a (0,0,0): '+p.distancia(new Punt(0,0,0)))

/* vector.js */
  let va=new Vector(2,0,1);
  let vb=new Vector(1,-1,3);
  let vc=va.suma(vb);      console.log(vc); //vector
      vc=va.resta(vb);     console.log(vc); //vector
      vc=va.multiplica(2); console.log(vc); //vector
      vc=va.divideix(2);   console.log(vc); //vector
      vc=va.prod_esc(vb);  console.log('Prod esc (2,0,1)·(1,-1,3): '+vc); //float
      vc=va.prod_vec(vb);  console.log(vc); //vector
      vc=va.modul;         console.log('Modul de (3,-1,4): '+vc); //float
      vc=va.norma;         console.log(vc); //vector
  let vd = new Vector(3,4,12);
  console.log('Modul de (3,4,12): '+vd.modul);
  let ve=new Vector(1,-1,4);
  let vf=new Vector(1,1,-2);
  console.log(ve.prod_vec(vf));

/* recta.js */
  let re=new Recta(new Punt(1,2,3), new Vector(3,4,5)); //recta
  console.log(re);

/* pla.js */
  let pla1=new Pla(new Punt(1,2,3),  new Vector(1,-1,4),   new Vector(1,1,-2));   console.log(pla1);
  let pla2=new Pla(new Punt(10,0,0), new Vector(-10,10,0), new Vector(-10,0,10)); console.log(pla2);

/* esfera.js */
  let esf=new Esfera(new Punt(0,0,0), 10);
  console.log(esf);
  console.log(esf.is_inside(new Punt(5,5,9)));
  console.log(esf.is_inside(new Punt(5,5,8)));
  console.log(esf.is_inside(new Punt(5,5,7)));

/* orbitals.js */
  let orb=new Orbitals(13);
  console.log(orb.toString());
  console.log(orb.valencia);
  //orb=new Orbitals(18);  console.log(orb.toString()); //Ar
  //orb=new Orbitals(36);  console.log(orb.toString()); //Kr
  //orb=new Orbitals(54);  console.log(orb.toString()); //Xe
  //orb=new Orbitals(86);  console.log(orb.toString()); //Rn
  //orb=new Orbitals(118); console.log(orb.toString()); //Og

/* atom.js */
  //crea 2 àtoms
  let at1=new Atom(11); console.log(at1); //Na
  let at2=new Atom(17); console.log(at2); //Cl
  //at1.carrega++; //augmenta la càrrega (equivalent a perdre un electró)
  console.log(at1.orbitals.valencia);
  console.log(at2.orbitals.valencia);

  //test octet entre at1 i at2
  at1.test_octet(at2);

  /*
  let H =new Atom(1);  console.log(H .orbitals.valencia);
  let B =new Atom(5);  console.log(B .orbitals.valencia);
  let C =new Atom(6);  console.log(C .orbitals.valencia);
  let N =new Atom(7);  console.log(N .orbitals.valencia);
  let O =new Atom(8);  console.log(O .orbitals.valencia);
  let F =new Atom(9);  console.log(F .orbitals.valencia);
  let Cl=new Atom(17); console.log(Cl.orbitals.valencia);
  */
  let Br=new Atom(35);
  console.log(Br);
  console.log(Br.orbitals.toString());
  console.log(Br.orbitals.valencia);
