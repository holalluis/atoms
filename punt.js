/*
Posició d'un àtom
*/

function Punt(x,y,z){
  this.x=x||0;//coordenada x
  this.y=y||0;//coordenada y
  this.z=z||0;//coordenada z
}

//export (require)
module.exports=Punt;

//distància entre 2 punts
Punt.prototype.distancia=function(punt){
  let x=punt.x-this.x;
  let y=punt.y-this.y;
  let z=punt.z-this.z;
  return Math.sqrt(x*x + y*y + z*z);
};

//forma llegible
Punt.prototype.toString=function(){
  return "Punt("+this.x+","+this.y+","+this.z+")";
};

/*tests*/
/*
let p=new Punt(3,4,12);
console.log(p.toString());
console.log(p.distancia(new Punt(0,0,0)))
*/
