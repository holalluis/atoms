/*
  classe Punt 3D
  - no té cap dependència
*/

class Punt{
  constructor(x,y,z){
    this.x=x||0;//coordenada x
    this.y=y||0;//coordenada y
    this.z=z||0;//coordenada z
  }

  //calcula distància entre 2 punts
  distancia(punt){
    let x=punt.x-this.x;
    let y=punt.y-this.y;
    let z=punt.z-this.z;
    return Math.sqrt(x*x + y*y + z*z);
  }
}

module.exports=Punt;

/*
test:
  let p=new Punt(3,4,12);
  console.log(p);
  //-> Punt { x: 3, y: 4, z: 12 }
  console.log(p.distancia(new Punt(0,0,0)))
  //-> 13
  */
