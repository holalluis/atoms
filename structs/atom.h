/*atom.h*/
#include<stdio.h>

//constants
#define MAX_PROTONS 118 //Og 118

typedef struct {
  unsigned short p; //protons
  unsigned short n; //neutrons
} Atom;

//prototips àtom
void print_atom(Atom *a);
