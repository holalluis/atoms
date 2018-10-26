class Recta {
  constructor(punt, vector_director) {
    this.punt=punt;                      //<Punt>   punt de la recta (x,y,z)
    this.vector_director=vector_director //<Vector> vector director (x,y,z)
  }

  toString(){
    return "Recta("+this.punt.toString()+", "+this.vector_director.toString()+")";
  }
}

module.exports=Recta;
