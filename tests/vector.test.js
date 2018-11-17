//test vector.js
let print = console.log;
const Vector = require('../vector.js');

//crea 3 vectors
let va=new Vector(2,0,1);
let vb=new Vector(1,-1,3);
let vc=va.suma(vb);  print(vc); //vector

//test funcions
vc=va.resta(vb);     print(vc); //vector
vc=va.multiplica(2); print(vc); //vector
vc=va.prod_esc(vb);  print('Prod esc (2,0,1)·(1,-1,3): '+vc); //float
vc=va.prod_vec(vb);  print(vc); //vector
vc=va.modul;         print('Modul de (3,-1,4): '+vc); //float
vc=va.norma;         print(vc); //vector

let vd = new Vector(3,4,12);
print('Modul de (3,4,12): '+vd.modul);

let ve=new Vector(1,-1,4);
let vf=new Vector(1,1,-2);
print(ve.prod_vec(vf));
