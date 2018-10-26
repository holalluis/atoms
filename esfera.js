/*
Modela una esfera en R3
lloc geomètric dels punts del pla
punts esfera: (x-x0)^2 + (y-y0)^2 + (z-z0)^2 = R^2
*/

class Esfera{
  constructor(centre,R){
    this.centre=centre||new Punt(0,0,0);//<Punt>
    this.R=R||0;//radi
  }

  //calcula si un punt p està dins o forma part de l'esfera
  is_inside(punt){
    return this.centre.distancia(punt) <= this.R;
  }

  toString(){
    return "Esfera(centre="+this.centre.toString()+",R="+this.R+")";
  }
}

module.exports=Esfera;
