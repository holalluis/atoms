/* 
  Classe Vector 
  Exemples de vectors: forces
  - no té dependències
*/

class Vector {
  constructor(x,y,z){
    this.x=x||0;//component x
    this.y=y||0;//component y
    this.z=z||0;//component z
  };

  //suma i resta 2 vectors
  suma (vec){return new Vector(this.x+vec.x, this.y+vec.y, this.z+vec.z);} //vector + vector = vector
  resta(vec){return new Vector(this.x-vec.x, this.y-vec.y, this.z-vec.z);} //vector - vector = vector

  //multiplicació per un escalar
  //divisió es pot fer fent this.multiplica(1/esc);
  multiplica(esc){return new Vector(this.x*esc, this.y*esc, this.z*esc);} //vector * escalar  = vector

  //producte escalar i vectorial entre 2 vectors
  prod_esc(vec){ return (vec.x*this.x + vec.y*this.y + vec.z*this.z);}                                                //vector · vector = escalar
  prod_vec(vec){ return new Vector(this.y*vec.z-this.z*vec.y, this.z*vec.x-this.x*vec.z, this.x*vec.y-this.y*vec.x);} //vector x vector = vector

  //modul i norma
  get modul(){ return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);} //llargada/magnitud d'un vector
  get norma(){ return this.multiplica(1/this.modul);}                            //normalitza vector per la seva llargada
}

module.exports=Vector;
