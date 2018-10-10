let Punt   = require('./punt.js');
let Vector = require('./vector.js');

/* classe Recta */
function Recta(punt, vector_director){
  this.punt=punt;                      //<Punt>   punt de la recta (x,y,z)
  this.vector_director=vector_director //<Vector> vector director (x,y,z)
}

//export (require)
module.exports=Recta;

/* mètodes */

//forma llegible
Recta.prototype.toString=function(){
  return "Recta("+this.punt.toString()+", "+this.vector_director.toString()+")";
}

/*tests*/
/*
let re=new Recta(new Punt(1,2,3), new Vector(3,4,5)); //recta
console.log(re.toString());
*/
