/* 
  Classe per estructura electrònica àtoms (orbitals)
  Capes:        1s  2s  2p  3s  3p  4s  3d   4p  5s  4d   5p  6s  4f   5d   6p  7s  5f   6d   7p  8s
  Electrons:     2   2   6   2   6   2  10    6   2  10    6   2  14   10    6   2  14   10    6   2
  Acumulats:     2   4  10  12  18  20  30   36  38  48   54  56  70   80   86  88 102  112  118 120
  Gasos nobles:
    He == 2   | 1s2
    Ne == 10  | 1s2 2s2 2p6
    Ar == 18  | 1s2 2s2 2p6 3s2 3p6
    Kr == 36  | 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6
    Xe == 54  | 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6
    Rn == 86  | 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6
    Og == 118 | 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6
*/

class Orbitals{
  constructor(e){
    //nombre electrons
    this.e=parseInt(e);
    if(typeof(e) != 'number'){ console.error(e);throw "Nombre d'electrons no és un número";}
    if(e<0)                  { console.error(e);throw "Nombre d'electrons negatiu"; }

    //estructura capes
    this.nivells={ //n,m,l,s: nivell, capa, orbital, spin
      "n1" :{ 
        "s":[                      [0,0],                      ], },
      "n2" :{
        "s":[                      [0,0],                      ],
        "p":[               [0,0], [0,0], [0,0],               ], },
      "n3" :{
        "s":[                      [0,0],                      ],
        "p":[               [0,0], [0,0], [0,0],               ],
        "d":[        [0,0], [0,0], [0,0], [0,0], [0,0],        ], },
      "n4" :{
        "s":[                      [0,0],                      ],
        "p":[               [0,0], [0,0], [0,0]                ],
        "d":[        [0,0], [0,0], [0,0], [0,0], [0,0],        ],
        "f":[ [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], ], },
      "n5" :{
        "s":[                      [0,0],                      ],
        "p":[               [0,0], [0,0], [0,0]                ],
        "d":[        [0,0], [0,0], [0,0], [0,0], [0,0],        ],
        "f":[ [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], ], },
      "n6" :{
        "s":[                      [0,0],                      ],
        "p":[               [0,0], [0,0], [0,0],               ],
        "d":[        [0,0], [0,0], [0,0], [0,0], [0,0],        ], },
      "n7" :{
        "s":[                      [0,0],                      ],
        "p":[               [0,0], [0,0], [0,0],               ], },
      "n8" :{
        "s":[                      [0,0],                      ], },
    };
    this.omple_orbitals();
  }

  toString(){
    let str="";
    str+=('Orbitals('+this.e+' electrons):\n');
    str+=(" València: "+this.valencia()+"\n");
    return str;
    str+=("  1s  - "+this.nivells.n1.s[0][0]+" "+this.nivells.n1.s[0][1]+'\n');
    str+=("  2s  - "+this.nivells.n2.s[0][0]+" "+this.nivells.n2.s[0][1]+'\n');if(this.e<= 4)return str;
    str+=("  2p1 - "+this.nivells.n2.p[0][0]+" "+this.nivells.n2.p[0][1]+'\n');
    str+=("  2p2 - "+this.nivells.n2.p[1][0]+" "+this.nivells.n2.p[1][1]+'\n');
    str+=("  2p3 - "+this.nivells.n2.p[2][0]+" "+this.nivells.n2.p[2][1]+'\n');if(this.e<=10)return str;
    str+=("  3s  - "+this.nivells.n3.s[0][0]+" "+this.nivells.n3.s[0][1]+'\n');if(this.e<=12)return str;
    str+=("  3p1 - "+this.nivells.n3.p[0][0]+" "+this.nivells.n3.p[0][1]+'\n');
    str+=("  3p2 - "+this.nivells.n3.p[1][0]+" "+this.nivells.n3.p[1][1]+'\n');
    str+=("  3p3 - "+this.nivells.n3.p[2][0]+" "+this.nivells.n3.p[2][1]+'\n');if(this.e<=18)return str;
    str+=("  4s  - "+this.nivells.n4.s[0][0]+" "+this.nivells.n4.s[0][1]+'\n');if(this.e<=20)return str;
    str+=("  3d1 - "+this.nivells.n3.d[0][0]+" "+this.nivells.n3.d[0][1]+'\n');
    str+=("  3d2 - "+this.nivells.n3.d[1][0]+" "+this.nivells.n3.d[1][1]+'\n');
    str+=("  3d3 - "+this.nivells.n3.d[2][0]+" "+this.nivells.n3.d[2][1]+'\n');
    str+=("  3d4 - "+this.nivells.n3.d[3][0]+" "+this.nivells.n3.d[3][1]+'\n');
    str+=("  3d5 - "+this.nivells.n3.d[4][0]+" "+this.nivells.n3.d[4][1]+'\n');if(this.e<=30)return str;
    str+=("  4p1 - "+this.nivells.n4.p[0][0]+" "+this.nivells.n4.p[0][1]+'\n');
    str+=("  4p2 - "+this.nivells.n4.p[1][0]+" "+this.nivells.n4.p[1][1]+'\n');
    str+=("  4p3 - "+this.nivells.n4.p[2][0]+" "+this.nivells.n4.p[2][1]+'\n');if(this.e<=36)return str;
    str+=("  5s  - "+this.nivells.n5.s[0][0]+" "+this.nivells.n5.s[0][1]+'\n');if(this.e<=38)return str;
    str+=("  4d1 - "+this.nivells.n4.d[0][0]+" "+this.nivells.n4.d[0][1]+'\n');
    str+=("  4d2 - "+this.nivells.n4.d[1][0]+" "+this.nivells.n4.d[1][1]+'\n');
    str+=("  4d3 - "+this.nivells.n4.d[2][0]+" "+this.nivells.n4.d[2][1]+'\n');
    str+=("  4d4 - "+this.nivells.n4.d[3][0]+" "+this.nivells.n4.d[3][1]+'\n');
    str+=("  4d5 - "+this.nivells.n4.d[4][0]+" "+this.nivells.n4.d[4][1]+'\n');if(this.e<=48)return str;
    str+=("  5p1 - "+this.nivells.n5.p[0][0]+" "+this.nivells.n5.p[0][1]+'\n');
    str+=("  5p2 - "+this.nivells.n5.p[1][0]+" "+this.nivells.n5.p[1][1]+'\n');
    str+=("  5p3 - "+this.nivells.n5.p[2][0]+" "+this.nivells.n5.p[2][1]+'\n');if(this.e<=54)return str;
    str+=("  6s  - "+this.nivells.n6.s[0][0]+" "+this.nivells.n6.s[0][1]+'\n');if(this.e<=56)return str;
    str+=("  4f1 - "+this.nivells.n4.f[0][0]+" "+this.nivells.n4.f[0][1]+'\n');
    str+=("  4f2 - "+this.nivells.n4.f[1][0]+" "+this.nivells.n4.f[1][1]+'\n');
    str+=("  4f3 - "+this.nivells.n4.f[2][0]+" "+this.nivells.n4.f[2][1]+'\n');
    str+=("  4f4 - "+this.nivells.n4.f[3][0]+" "+this.nivells.n4.f[3][1]+'\n');
    str+=("  4f5 - "+this.nivells.n4.f[4][0]+" "+this.nivells.n4.f[4][1]+'\n');
    str+=("  4f6 - "+this.nivells.n4.f[5][0]+" "+this.nivells.n4.f[5][1]+'\n');
    str+=("  4f7 - "+this.nivells.n4.f[6][0]+" "+this.nivells.n4.f[6][1]+'\n');if(this.e<=70)return str;
    str+=("  5d1 - "+this.nivells.n5.d[0][0]+" "+this.nivells.n5.d[0][1]+'\n');
    str+=("  5d2 - "+this.nivells.n5.d[1][0]+" "+this.nivells.n5.d[1][1]+'\n');
    str+=("  5d3 - "+this.nivells.n5.d[2][0]+" "+this.nivells.n5.d[2][1]+'\n');
    str+=("  5d4 - "+this.nivells.n5.d[3][0]+" "+this.nivells.n5.d[3][1]+'\n');
    str+=("  5d5 - "+this.nivells.n5.d[4][0]+" "+this.nivells.n5.d[4][1]+'\n');if(this.e<=80)return str;
    str+=("  6p1 - "+this.nivells.n6.p[0][0]+" "+this.nivells.n6.p[0][1]+'\n');
    str+=("  6p2 - "+this.nivells.n6.p[1][0]+" "+this.nivells.n6.p[1][1]+'\n');
    str+=("  6p3 - "+this.nivells.n6.p[2][0]+" "+this.nivells.n6.p[2][1]+'\n');if(this.e<=86)return str;
    str+=("  7s  - "+this.nivells.n7.s[0][0]+" "+this.nivells.n7.s[0][1]+'\n');if(this.e<=88)return str;
    str+=("  5f1 - "+this.nivells.n5.f[0][0]+" "+this.nivells.n5.f[0][1]+'\n');
    str+=("  5f2 - "+this.nivells.n5.f[1][0]+" "+this.nivells.n5.f[1][1]+'\n');
    str+=("  5f3 - "+this.nivells.n5.f[2][0]+" "+this.nivells.n5.f[2][1]+'\n');
    str+=("  5f4 - "+this.nivells.n5.f[3][0]+" "+this.nivells.n5.f[3][1]+'\n');
    str+=("  5f5 - "+this.nivells.n5.f[4][0]+" "+this.nivells.n5.f[4][1]+'\n');
    str+=("  5f6 - "+this.nivells.n5.f[5][0]+" "+this.nivells.n5.f[5][1]+'\n');
    str+=("  5f7 - "+this.nivells.n5.f[6][0]+" "+this.nivells.n5.f[6][1]+'\n');if(this.e<=102)return str;
    str+=("  6d1 - "+this.nivells.n6.d[0][0]+" "+this.nivells.n6.d[0][1]+'\n');
    str+=("  6d2 - "+this.nivells.n6.d[1][0]+" "+this.nivells.n6.d[1][1]+'\n');
    str+=("  6d3 - "+this.nivells.n6.d[2][0]+" "+this.nivells.n6.d[2][1]+'\n');
    str+=("  6d4 - "+this.nivells.n6.d[3][0]+" "+this.nivells.n6.d[3][1]+'\n');
    str+=("  6d5 - "+this.nivells.n6.d[4][0]+" "+this.nivells.n6.d[4][1]+'\n');if(this.e<=112)return str;
    str+=("  7p1 - "+this.nivells.n7.p[0][0]+" "+this.nivells.n7.p[0][1]+'\n');
    str+=("  7p2 - "+this.nivells.n7.p[1][0]+" "+this.nivells.n7.p[1][1]+'\n');
    str+=("  7p3 - "+this.nivells.n7.p[2][0]+" "+this.nivells.n7.p[2][1]+'\n');if(this.e<=118)return str;
    str+=("  8s  - "+this.nivells.n8.s[0][0]+" "+this.nivells.n8.s[0][1]+'\n');
  }
}

module.exports=Orbitals;

//regla de hund: omple orbitals amb 'e' electrons
Orbitals.prototype.omple_orbitals=function(){
  //electrons per assignar
  let e=this.e;

  //omple una sola capa "s" "p" "d" "f"
  function omple_capa(capa){
    if(e<=0)return;
    //mira primer electró de cada orbital
    for(let i=0;i<capa.length;i++){if(e>0&&capa[i][0]==0){capa[i][0]=1;e--;if(e<=0){return;}}}
    //mira segon electró de cada orbital
    for(let i=0;i<capa.length;i++){if(e>0&&capa[i][1]==0){capa[i][1]=1;e--;if(e<=0){return;}}
    }
  }

  //odre capes: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p 8s
  omple_capa(this.nivells.n1.s);
  omple_capa(this.nivells.n2.s);
  omple_capa(this.nivells.n2.p);
  omple_capa(this.nivells.n3.s);
  omple_capa(this.nivells.n3.p);
  omple_capa(this.nivells.n4.s);
  omple_capa(this.nivells.n3.d);
  omple_capa(this.nivells.n4.p);
  omple_capa(this.nivells.n5.s);
  omple_capa(this.nivells.n4.d);
  omple_capa(this.nivells.n5.p);
  omple_capa(this.nivells.n6.s);
  omple_capa(this.nivells.n4.f);
  omple_capa(this.nivells.n5.d);
  omple_capa(this.nivells.n6.p);
  omple_capa(this.nivells.n7.s);
  omple_capa(this.nivells.n5.f);
  omple_capa(this.nivells.n6.d);
  omple_capa(this.nivells.n7.p);
  omple_capa(this.nivells.n8.s);
};

//obtenir electrons de valencia
Orbitals.prototype.valencia=function(){
  //els checkpoints son el nombre d'electrons dels gasos nobles, pq tenen octet
  let checkpoints=[0,2,4,10,18,36,54,86,118]; //Ne Ar Kr Xe Rn Og

  //comprova si ja té octet
  if(checkpoints.indexOf(this.e)+1){return 0;} //càrrega 0

  //comprova si està entre octets
  for(let i=0;i<7;i++){
    if(checkpoints[i]<this.e && this.e<checkpoints[i+1]){
      let sobren = this.e - checkpoints[i];
      let falten = this.e - checkpoints[i+1];
      return [
        sobren, falten
      ];
    }
  }

  return false;
};
