#include "vector.h"

//mostra vector
void print_vector(Vector v){
  //mostra components i lloc memòria
  printf("Vector{x:%lf, y:%lf, z:%lf} @%p\n",
    v.x, v.y, v.z, v);
}

//vector + vector = vector
Vector suma(Vector v1, Vector v2){
  Vector v;
  v.x = v1.x + v2.x;
  v.y = v1.y + v2.y;
  v.z = v1.z + v2.z;
  return v;
}

//vector - vector = vector
Vector resta(Vector v1, Vector v2){
  Vector v;
  v.x = v1.x - v2.x;
  v.y = v1.y - v2.y;
  v.z = v1.z - v2.z;
  return v;
}

//multiplicació per un escalar
//divisió es pot fer fent multiplica(1/esc);
Vector multiplica(Vector v, double esc){
  Vector vec;
  vec.x = esc * v.x;
  vec.y = esc * v.y;
  vec.z = esc * v.z;
  return vec;
}

//producte escalar
double prod_esc(Vector v1, Vector v2){
  return v1.x*v2.x + v1.y*v2.y + v1.z*v2.z;
}

//producte vectorial
Vector prod_vec(Vector v1, Vector v2){
  Vector v;
  v.x = v1.y*v2.z - v1.z*v2.y;
  v.y = v1.z*v2.x - v1.x*v2.z;
  v.z = v1.x*v2.y - v1.y*v2.x;
  return v;
}

//modul (llargada vector)
//llargada/magnitud d'un vector
double modul(Vector v){
  return sqrt(v.x*v.x + v.y*v.y + v.z*v.z);
}

//normalitza vector per la seva llargada
Vector norma(Vector v){
  return multiplica(v, 1/modul(v));
}
