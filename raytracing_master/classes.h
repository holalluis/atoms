class Color{public:
  //red green blue
  float R,G,B;

  //constructors
  Color(){}
  Color(float _R, float _G, float _B){R=_R;G=_G;B=_B;}

  //operadors
  Color operator+(Color col){ return Color(R+col.R,G+col.G,B+col.B); }
  Color operator*(Color col){ return Color(R*col.R,G*col.G,B*col.B); }
  Color operator*(float mul){ return Color(R*mul,G*mul,B*mul);       }
};

class Material{public:
  //components difusa, espectral (?)
  float kd,ks;

  //constructors
  Material(){}
  Material(float _kd, float _ks){kd=_kd;ks=_ks;}
};

class Recta{public:
  //per fer una recta necessitem un punt d'inici i un vector director
  Punt punt;
  Vector director;

  //constructors
  Recta(){}
  Recta(Punt p, Vector v){punt=p; director=v;}
};

class Esfera{public:
  //centre, radi, color, material
  Punt centre;
  float radi;
  Color color;
  Material material;

  //constructors
  Esfera(){}
  Esfera(Punt* c, double r, Color* co, Material* m){centre=*c; radi=r; color=*co; material=*m;}
  Esfera(Punt c,float r, Color co, Material m){centre=c;radi=r; color=co; material=m;}
};

class Escena{public:
  //propietats
  Esfera esferes[5];   //vector d'esferes
  int numEsferes;      //nombre actual d'esferes
  Esfera esferaActual; //esfera actual

  //constructor
  Escena(){numEsferes=0;}

  //mètode afegir esfera
  void afegir(Esfera e){
    esferes[numEsferes] = e ;
    numEsferes++;
  }
};
