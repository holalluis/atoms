#include<stdio.h>
#include<stdlib.h>

//constants
#define MAX_PROTONS 118 //Og 118

//estructura àtom
typedef struct {
  unsigned short p; //nombre atòmic de 0 a 119
  unsigned short n; //nombre atòmic
} Atom;

//prototips àtom
Atom new_atom(unsigned short p, unsigned short n); //constructor
void print_atom(Atom a);
void modify_atom(Atom *a, unsigned short p, unsigned short n);

int main(){
  Atom a = new_atom(1, 0);

  //quants bytes ocupa un Atom
  printf("sizeof(Atom) = %lu\n", sizeof(Atom));

  //mostra els valors rgb, modifica'ls
  print_atom(a);
  modify_atom(&a, 2, 2);
  print_atom(a);

  //creem un array de 1000 atoms
  Atom *molecula = malloc(1000*sizeof(Atom));

  //canviem el nombre atomic de l'àtom nº 25
  molecula[25].p = 25;
  molecula[25].n = 25;
  print_atom(molecula[25]);

return 0;}

Atom new_atom(unsigned short p, unsigned short n){
  Atom a;
  a.p = p;
  a.n = n;
  return a;
}

void print_atom(Atom a){
  const char *noms_atoms[MAX_PROTONS]={
    "  -Empty",
    "H -Hidrogen",
    "He-Heli",
    "Li-Liti",
    "Be-Beril·li",
    "B -Bor",
    "C -Carboni",
    "N -Nitrogen",
    "O -Oxigen",
    "F -Fluor",
    "Ne-Neó",
    "Na-Sodi",
    "Mg-Magnesi",
    "Al-Alumini",
    "Si-Silici",
    "P -Fòsfor",
    "S -Sofre",
    "Cl-Clor",
    "Ar-Argó",
    "K -Potassi",
    "Ca-Calci",
    "Sc-Escandi",
    "Ti-Titani",
    "V -Vanadi",
    "Cr-Crom",
    "Mn-Manganès",
    "Fe-Ferro",
    "Co-Cobalt",
    "Ni-Níquel",
    "Cu-Coure",
    "Zn-Zinc",
    "Ga-Gal·li",
    "Ge-Germani",
    "As-Arsènic",
    "Se-Seleni",
    "Br-Brom",
    "Kr-Criptó",
    "Rb-Rubidi",
    "Sr-Estronci",
    "Y -Itri",
    "Zr-Zirconi",
    "Nb-Niobi",
    "Mo-Molibdè",
    "Tc-Tecneci",
    "Ru-Ruteni",
    "Rh-Rodi",
    "Pd-Pal·ladi",
    "Ag-Plata",
    "Cd-Cadmi",
    "In-Indi",
    "Sn-Estany",
    "Sb-Antimoni",
    "Te-Tel·luri",
    "I -Iode",
    "Xe-Xenó",
    "Cs-Cesi",
    "Ba-Bari",
    "La-Lantà",
    "Ce-Ceri",
    "Pr-Praseodimi",
    "Nd-Neodimi",
    "Pm-Prometi",
    "Sm-Samari",
    "Eu-Europi",
    "Gd-Gadolini",
    "Tb-Terbi",
    "Dy-Disprosi",
    "Ho-Holmi",
    "Er-Erbi",
    "Tm-Tuli",
    "Yb-Iterbi",
    "Lu-Luteci",
    "Hf-Hafni",
    "Ta-Tàntal",
    "W -Wolframi",
    "Re-Reni",
    "Os-Osmi",
    "Ir-Iridi",
    "Pt-Platí",
    "Au-Or",
    "Hg-Mercuri",
    "Tl-Tal·li",
    "Pb-Plom",
    "Bi-Bismut",
    "Po-Pol·loni",
    "At-Àstat",
    "Rn-Radó",
    "Fr-Franci",
    "Ra-Radi",
    "Ac-Actini",
    "Th-Tori",
    "Pa-Protoactini",
    "U -Urani",
    "Np-Neptuni",
    "Pu-Plutoni",
    "Am-Americi",
    "Cm-Curi",
    "Bk-Berkeli",
    "Cf-Californi",
    "Es-Einsteni",
    "Fm-Fermi",
    "Md-Mendelevi",
    "No-Nobeli",
    "Lr-Lawrenci",
    "Rf-Rutherfordi",
    "Db-Dubni",
    "Sg-Seaborgi",
    "Bh-Bohri",
    "Hs-Hassi",
    "Mt-Meitneri",
    "Ds-Darmstadi",
    "Rg-Roentgeni",
    "Cn-Copernici",
    "Nh-Nihonium",
    "Fl-Flerovi",
    "Mc-Moscovi",
    "Lv-Livermori",
    "Ts-Tennessine",
    "Og-Oganesson",
  };
  printf("Atom{p:%d, n:%d, nom:'%s'}\n", a.p, a.n, noms_atoms[a.p]);
}

void modify_atom(Atom *a, unsigned short p, unsigned short n){
  a->p = p;
  a->n = n;
}

