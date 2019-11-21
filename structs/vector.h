/* vector.h
   exemple: forces
*/
#include<math.h>

typedef struct{
  double x;
  double y;
  double z;
} Vector;

void print_vector(Vector v);

//suma i resta 2 vectors
Vector suma(Vector v1, Vector v2);
Vector resta(Vector v1, Vector v2);

//multiplica vector per escalar
Vector multiplica(Vector v, double esc);

//producte escalar
double prod_esc(Vector v1, Vector v2);

//producte vectorial
Vector prod_vec(Vector v1, Vector v2);

//modul
double modul(Vector v);

//normalitza vector per la seva llargada
Vector norma(Vector v);
