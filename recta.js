/*
  classe Recta
  - depen de:
    - Punt
    - Vector
*/

class Recta {
  constructor(punt, vector_director) {
    this.punt=punt;                      //<Punt>   punt de la recta (x,y,z)
    this.vector_director=vector_director //<Vector> vector director (x,y,z)
  }
}

module.exports=Recta;
