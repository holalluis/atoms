//test atom.js
let print = console.log;

const Atom = require('../atom.js');

//electrons de valència
let H =new Atom(1);  print( H.orbitals.valencia);
let B =new Atom(5);  print( B.orbitals.valencia);
let C =new Atom(6);  print( C.orbitals.valencia);
let N =new Atom(7);  print( N.orbitals.valencia);
let O =new Atom(8);  print( O.orbitals.valencia);
let F =new Atom(9);  print( F.orbitals.valencia);
let Cl=new Atom(17); print(Cl.orbitals.valencia);
let Na=new Atom(11); print(Na.orbitals.valencia);

//test octet
Na.test_octet(Cl);

//test funcions
let at=new Atom(11);
print(at.element);
print('Q='+at.carrega);
print(at.orbitals.toString());
if(at.orbitals.promociona_electro()) print(at.orbitals.toString());
print(at.orbitals.nivell_valencia);
print('octet: '+at.orbitals.octet);
print("Electrons de valència");
print(at.orbitals.valencia);
print(at.orbitals.octets_propers);
print(at.orbitals.guanya_electro());
print(at.orbitals.toString());
at.carrega++;
print('Q='+at.carrega);
print(at.orbitals.toString());

//crea tots els atoms
let a;
for(let i=1;i<119;i++){
  break; //desactivat
  a = new Atom(i);
  console.log(a.element);
  console.log(a.orbitals.toString());
}
