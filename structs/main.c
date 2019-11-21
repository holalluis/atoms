/*main.c*/
#include<stdio.h>
#include<stdlib.h>

#include "punt.h"
#include "vector.h"
#include "atom.h"

int main(){

  /*TEST PUNTS*/
  puts("=== TEST PUNTS ===");
  Punt p1 = {6, 8, 0};
  Punt p2 = {3, 4, 0};
  print_punt(&p1);
  print_punt(&p2);
  double d = distancia(&p1, &p2);
  printf("Distància(p1,p2) : %lf\n", d);

  /*TEST VECTORS*/
  puts("=== TEST VECTORS ===");
  //crea 3 vectors
  Vector va = {2, 0,1};
  Vector vb = {1,-1,3};
  Vector vc = suma(va, vb);
  print_vector(va);
  print_vector(vb);
  print_vector(vc);

  //test funcions vectors
  vc=resta(va,vb);     print_vector(vc);
  vc=multiplica(va,2); print_vector(vc);

  //producte escalar
  printf("Prod esc (2,0,1)·(1,-1,3): %lf\n", prod_esc(va, vb));

  //producte vectorial
  vc = prod_vec(va,vb);
  print_vector(vc);

  //mòdul
  Vector vd = {3,-1,4};
  printf("Mòdul de (3,-1,4): %lf\n", modul(vc)); //float

  //normal
  vc = norma(va);
  puts("norma");
  print_vector(vc);

  Vector ve = {3,4,12};
  printf("Mòdul de (3,4,12): %lf\n", modul(ve));

  Vector vf = {1,-1,4};
  Vector vg = {1,1,-2};
  print_vector(prod_vec(vf,vg));

  /*TEST ATOMS*/
  puts("=== TEST ATOMS ===");

  Atom H = {1, 0};
  Atom C = {6, 0};

  print_atom(&H);
  print_atom(&C);

  //creem un array de 1000 atoms
  Atom *molecula = malloc(1000*sizeof(Atom));

  //modifiquem l'àtom nº 25 de l'array
  molecula[25].p = 25;
  molecula[25].n = 25;
  print_atom(&molecula[25]);

  free(molecula);
  return 0;
}
