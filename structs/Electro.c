#include<stdio.h>

//estructura electró
typedef struct {
  unsigned short n; //nivell:   1-7
  unsigned short l; //capa:     spdf == [0,1,2,3]
  unsigned short m; //magnetic: -l,0,l
  unsigned short s; //spin:     (0,1)==(-1/2,1/2)
  _Bool exists;      //exists? true/false
} Electro;

int main(){
  return 0;
}


