/* classe Vector */

class Vector {
  constructor(x,y,z){
    this.x=x||0;//coordenada x
    this.y=y||0;//coordenada y
    this.z=z||0;//coordenada z
  }

  toString(){
    return "Vector("+this.x+","+this.y+","+this.z+")";
  }
}

module.exports=Vector;

/* mètodes */

//suma i resta entre 2 vectors
Vector.prototype.suma=function(vec) { return new Vector(this.x+vec.x, this.y+vec.y, this.z+vec.z);} //vector + vector   = vector
Vector.prototype.resta=function(vec){ return new Vector(this.x-vec.x, this.y-vec.y, this.z-vec.z);} //vector - vector   = vector

//multiplicació i divisió per un escalar
Vector.prototype.multiplica=function(esc){ return new Vector(this.x*esc, this.y*esc, this.z*esc);} //vector * escalar  = vector
Vector.prototype.divideix=function(esc)  { return new Vector(this.x/esc, this.y/esc, this.z/esc);} //vector / escalar  = vector

//producte escalar i vectorial entre 2 vectors
Vector.prototype.prod_esc=function(vec){ return (vec.x*this.x + vec.y*this.y + vec.z*this.z);} //vector·vector = escalar
Vector.prototype.prod_vec=function(vec){ return new Vector(this.y*vec.z-this.z*vec.y, this.z*vec.x-this.x*vec.z, this.x*vec.y-this.y*vec.x);} //vector x vector = vector

//modul i normalització
Vector.prototype.modul=function()     { return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);} //llargada/magnitud d'un vector
Vector.prototype.normalitza=function(){ let m=this.modul(); return this.divideix(m);                } //normalitzar un vector per la seva llargada
