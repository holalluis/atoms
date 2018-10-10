/*
Modela una esfera en R3
lloc geomètric dels punts del pla
punts esfera: (x-x0)^2 + (y-y0)^2 + (z-z0)^2 = R^2
*/
let Punt=require('./punt.js');

function Esfera(centre,R){
  this.centre=centre||new Punt(0,0,0);//<Punt>
  this.R=R||0;//radi
}

//export (require)
module.exports=Esfera;

/*mètodes*/

//calcula si un punt p està dins o forma part de l'esfera
Esfera.prototype.is_inside=function(punt){
  return this.centre.distancia(punt) <= this.R;
};

//forma llegible
Esfera.prototype.toString=function(){
  return "Esfera(centre="+this.centre.toString()+",R="+this.R+")";
};

/*tests*/
/*
let e=new Esfera(null,10);
console.log(e.toString());
console.log(e.is_inside(new Punt(5,5,9)));
console.log(e.is_inside(new Punt(5,5,8)));
console.log(e.is_inside(new Punt(5,5,7)));
*/
