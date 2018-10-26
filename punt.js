/* classe Punt */

class Punt{
  constructor(x,y,z){
    this.x=x||0;//coordenada x
    this.y=y||0;//coordenada y
    this.z=z||0;//coordenada z
  }

  //distància entre 2 punts
  distancia(punt){
    let x=punt.x-this.x;
    let y=punt.y-this.y;
    let z=punt.z-this.z;
    return Math.sqrt(x*x + y*y + z*z);
  }

  toString(){
    return "Punt("+this.x+","+this.y+","+this.z+")";
  }
}

module.exports=Punt;
