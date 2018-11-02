/*tests*/
let print=console.log;

//#include
let Punt     = require('./punt.js');
let Vector   = require('./vector.js');
let Recta    = require('./recta.js');
let Pla      = require('./pla.js');
let Esfera   = require('./esfera.js');
let Orbitals = require('./orbitals.js');
let Atom     = require('./atom.js');

/* punt.js */
  //let p=new Punt(3,4,12); print(p);
  //print('Distancia de (3,4,12) a (0,0,0): '+p.distancia(new Punt(0,0,0)))

/* vector.js */
  //let va=new Vector(2,0,1);
  //let vb=new Vector(1,-1,3);
  //let vc=va.suma(vb);  print(vc); //vector
  //vc=va.resta(vb);     print(vc); //vector
  //vc=va.multiplica(2); print(vc); //vector
  //vc=va.divideix(2);   print(vc); //vector
  //vc=va.prod_esc(vb);  print('Prod esc (2,0,1)·(1,-1,3): '+vc); //float
  //vc=va.prod_vec(vb);  print(vc); //vector
  //vc=va.modul;         print('Modul de (3,-1,4): '+vc); //float
  //vc=va.norma;         print(vc); //vector
  //let vd = new Vector(3,4,12);
  //print('Modul de (3,4,12): '+vd.modul);
  //let ve=new Vector(1,-1,4);
  //let vf=new Vector(1,1,-2);
  //print(ve.prod_vec(vf));

/* recta.js */
  //let re=new Recta(new Punt(1,2,3), new Vector(3,4,5)); //recta
  //print(re);

/* pla.js */
  //let pla1=new Pla(new Punt(1,2,3),  new Vector(1,-1,4),   new Vector(1,1,-2));   print(pla1);
  //let pla2=new Pla(new Punt(10,0,0), new Vector(-10,10,0), new Vector(-10,0,10)); print(pla2);

/* esfera.js */
  //let esf=new Esfera(new Punt(0,0,0), 10);
  //print(esf);
  //print(esf.is_inside(new Punt(5,5,9)));
  //print(esf.is_inside(new Punt(5,5,8)));
  //print(esf.is_inside(new Punt(5,5,7)));

/* orbitals.js */
  //let orb=new Orbitals(13);
  //print(orb.valencia);
  //orb=new Orbitals(18);  print(orb.toString()); //Ar
  //orb=new Orbitals(36);  print(orb.toString()); //Kr
  //orb=new Orbitals(54);  print(orb.toString()); //Xe
  //orb=new Orbitals(86);  print(orb.toString()); //Rn
  //orb=new Orbitals(118); print(orb.toString()); //Og

/* atom.js */
  //crea 2 àtoms
  //let Na=new Atom(11), Cl=new Atom(17);
  //at1.carrega++; //augmenta la càrrega (equivalent a perdre un electró)
  //print(at1.orbitals.valencia);
  //print(at2.orbitals.valencia);
  //test octet entre at1 i at2
  //Na.test_octet(Cl);
  //let H =new Atom(1);  print(H .orbitals.valencia);
  //let B =new Atom(5);  print(B .orbitals.valencia);
  //let C =new Atom(6);  print(C .orbitals.valencia);
  //let N =new Atom(7);  print(N .orbitals.valencia);
  //let O =new Atom(8);  print(O .orbitals.valencia);
  //let F =new Atom(9);  print(F .orbitals.valencia);
  //let Cl=new Atom(17); print(Cl.orbitals.valencia);

  let at=new Atom(11);
  print(at.element);
  print('Q='+at.carrega);
  print(at.orbitals.toString());
  //if(at.orbitals.promociona_electro()) print(at.orbitals.toString());
  //print(at.orbitals.nivell_valencia);
  //print('octet: '+at.orbitals.octet);
  //print("Electrons de valència");
  //print(at.orbitals.valencia);
  //print(at.orbitals.octets_propers);
  //print(at.orbitals.guanya_electro());
  //print(at.orbitals.toString());
  at.carrega++;
  print('Q='+at.carrega);
  print(at.orbitals.toString());

