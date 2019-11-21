/*punt.h*/
#include<stdio.h>
#include<math.h>

typedef struct {
  double x;
  double y;
  double z;
} Punt;

//mostra info punt
void print_punt(Punt *p);

//calcula distància entre 2 punts
double distancia(Punt *p1, Punt *p2);
