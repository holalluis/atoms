/*punt.c*/
#include "punt.h"

//mostra info objecte punt
void print_punt(Punt *p){
  //mostra coordenades i lloc memòria
  printf("Punt{x:%lf, y:%lf, z:%lf} @%p\n",
    p->x, p->y, p->z, p);

}

//calcula distància entre 2 punts
double distancia(Punt *p1, Punt *p2){
  double x = p1->x - p2->x;
  double y = p1->y - p2->y;
  double z = p1->z - p2->z;
  return sqrt(x*x + y*y + z*z);
};
