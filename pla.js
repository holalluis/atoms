/*
El pla en R3
el pla π necessita un punt "p" i dos vectors "v1" i "v2", tals que

  π = p + k1·v1 + k2·v2

on k1 i k2 són escalars
*/

class Pla{
  constructor(punt,vector1,vector2){
    this.punt=punt||new Punt(0,0,0);
    this.vector1=vector1||new Vector(1,0,0); //vector generador 1
    this.vector2=vector2||new Vector(0,1,0); //vector generador 2

    //calcula el vector normal (producte vectorial entre els 2 generadors)
    this.normal=this.vector1.prod_vec(this.vector2);

    //calcula la fórmula "A·x+B·y+C·z=D"
    this.formula={
      formula:"Ax+By+Cz=D",
      A:this.normal.x,
      B:this.normal.y,
      C:this.normal.z,
      D:this.normal.x*this.punt.x + this.normal.y*this.punt.y + this.normal.z*this.punt.z,
    };
  }

  toString(){
    return "Pla("+this.punt+",normal="+this.normal+",D="+this.formula.D+")";
  }

  distancia_punt(punt){
    //distancia d'un punt a un pla
    //TODO
  }
}

module.exports=Pla;
