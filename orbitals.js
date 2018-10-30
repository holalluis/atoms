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
    this.e=e;
    if(typeof(e) != "number") throw "Nombre electrons no és un número";
    if(e<0)                   throw "Nombre electrons negatiu";

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

    //ordena TOTS els electrons possibles per nivell d'energia (segons diagrama de Möeller i regla de Hund)
    //1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p 8s
    //nivell, capa, magnetic, spin, present
    this.electrons=[
      {n:1, l:'s', m: 0, s:0, val:0}, //1s1
      {n:1, l:'s', m: 0, s:1, val:0}, //1s2
      {n:2, l:'s', m: 0, s:0, val:0}, //2s1
      {n:2, l:'s', m: 0, s:1, val:0}, //2s2
      {n:2, l:'p', m:-1, s:0, val:0}, //2p[-1]1
      {n:2, l:'p', m: 0, s:0, val:0}, //2p[ 0]1
      {n:2, l:'p', m: 1, s:0, val:0}, //2p[ 1]1
      {n:2, l:'p', m:-1, s:1, val:0}, //2p[-1]2
      {n:2, l:'p', m: 0, s:1, val:0}, //2p[ 0]2
      {n:2, l:'p', m: 1, s:1, val:0}, //2p[ 1]2
      {n:3, l:'s', m: 0, s:0, val:0}, //3s1
      {n:3, l:'s', m: 0, s:1, val:0}, //3s2
      {n:3, l:'p', m:-1, s:0, val:0}, //3p[-1]1
      {n:3, l:'p', m: 0, s:0, val:0}, //3p[ 0]1
      {n:3, l:'p', m: 1, s:0, val:0}, //3p[ 1]1
      {n:3, l:'p', m:-1, s:1, val:0}, //3p[-1]2
      {n:3, l:'p', m: 0, s:1, val:0}, //3p[ 0]2
      {n:3, l:'p', m: 1, s:1, val:0}, //3p[ 1]2
      {n:4, l:'s', m: 0, s:0, val:0}, //4s1
      {n:4, l:'s', m: 0, s:1, val:0}, //4s2
      {n:3, l:'d', m:-2, s:0, val:0}, //3d[-2]1
      {n:3, l:'d', m:-1, s:0, val:0}, //3d[-1]1
      {n:3, l:'d', m: 0, s:0, val:0}, //3d[ 0]1
      {n:3, l:'d', m: 1, s:0, val:0}, //3d[ 1]1
      {n:3, l:'d', m: 2, s:0, val:0}, //3d[ 2]1
      {n:3, l:'d', m:-2, s:1, val:0}, //3d[-2]2
      {n:3, l:'d', m:-1, s:1, val:0}, //3d[-1]2
      {n:3, l:'d', m: 0, s:1, val:0}, //3d[ 0]2
      {n:3, l:'d', m: 1, s:1, val:0}, //3d[ 1]2
      {n:3, l:'d', m: 2, s:1, val:0}, //3d[ 2]2
      {n:4, l:'p', m:-1, s:0, val:0}, //4p[-1]1
      {n:4, l:'p', m: 0, s:0, val:0}, //4p[ 0]1
      {n:4, l:'p', m: 1, s:0, val:0}, //4p[ 1]1
      {n:4, l:'p', m:-1, s:1, val:0}, //4p[-1]2
      {n:4, l:'p', m: 0, s:1, val:0}, //4p[ 0]2
      {n:4, l:'p', m: 1, s:1, val:0}, //4p[ 1]2
      {n:5, l:'s', m: 0, s:0, val:0}, //5s1
      {n:5, l:'s', m: 0, s:1, val:0}, //5s2
      {n:4, l:'d', m:-2, s:0, val:0}, //4d[-2]1
      {n:4, l:'d', m:-1, s:0, val:0}, //4d[-1]1
      {n:4, l:'d', m: 0, s:0, val:0}, //4d[ 0]1
      {n:4, l:'d', m: 1, s:0, val:0}, //4d[ 1]1
      {n:4, l:'d', m: 2, s:0, val:0}, //4d[ 2]1
      {n:4, l:'d', m:-2, s:1, val:0}, //4d[-2]2
      {n:4, l:'d', m:-1, s:1, val:0}, //4d[-1]2
      {n:4, l:'d', m: 0, s:1, val:0}, //4d[ 0]2
      {n:4, l:'d', m: 1, s:1, val:0}, //4d[ 1]2
      {n:4, l:'d', m: 2, s:1, val:0}, //4d[ 2]2
      {n:5, l:'p', m:-1, s:0, val:0}, //5p[-1]1
      {n:5, l:'p', m: 0, s:0, val:0}, //5p[ 0]1
      {n:5, l:'p', m: 1, s:0, val:0}, //5p[ 1]1
      {n:5, l:'p', m:-1, s:1, val:0}, //5p[-1]2
      {n:5, l:'p', m: 0, s:1, val:0}, //5p[ 0]2
      {n:5, l:'p', m: 1, s:1, val:0}, //5p[ 1]2
      {n:6, l:'s', m: 0, s:0, val:0}, //6s1
      {n:6, l:'s', m: 0, s:1, val:0}, //6s2
      {n:4, l:'f', m:-3, s:0, val:0}, //4f[-3]1
      {n:4, l:'f', m:-2, s:0, val:0}, //4f[-2]1
      {n:4, l:'f', m:-1, s:0, val:0}, //4f[-1]1
      {n:4, l:'f', m: 0, s:0, val:0}, //4f[ 0]1
      {n:4, l:'f', m: 1, s:0, val:0}, //4f[ 1]1
      {n:4, l:'f', m: 2, s:0, val:0}, //4f[ 2]1
      {n:4, l:'f', m: 3, s:0, val:0}, //4f[ 3]1
      {n:4, l:'f', m:-3, s:1, val:0}, //4f[-3]2
      {n:4, l:'f', m:-2, s:1, val:0}, //4f[-2]2
      {n:4, l:'f', m:-1, s:1, val:0}, //4f[-1]2
      {n:4, l:'f', m: 0, s:1, val:0}, //4f[ 0]2
      {n:4, l:'f', m: 1, s:1, val:0}, //4f[ 1]2
      {n:4, l:'f', m: 2, s:1, val:0}, //4f[ 2]2
      {n:4, l:'f', m: 3, s:1, val:0}, //4f[ 3]2
      {n:5, l:'d', m:-2, s:0, val:0}, //5d[-2]1
      {n:5, l:'d', m:-1, s:0, val:0}, //5d[-1]1
      {n:5, l:'d', m: 0, s:0, val:0}, //5d[ 0]1
      {n:5, l:'d', m: 1, s:0, val:0}, //5d[ 1]1
      {n:5, l:'d', m: 2, s:0, val:0}, //5d[ 2]1
      {n:5, l:'d', m:-2, s:1, val:0}, //5d[-2]2
      {n:5, l:'d', m:-1, s:1, val:0}, //5d[-1]2
      {n:5, l:'d', m: 0, s:1, val:0}, //5d[ 0]2
      {n:5, l:'d', m: 1, s:1, val:0}, //5d[ 1]2
      {n:5, l:'d', m: 2, s:1, val:0}, //5d[ 2]2
      {n:6, l:'p', m:-1, s:0, val:0}, //6p[-1]1
      {n:6, l:'p', m: 0, s:0, val:0}, //6p[ 0]1
      {n:6, l:'p', m: 1, s:0, val:0}, //6p[ 1]1
      {n:6, l:'p', m:-1, s:1, val:0}, //6p[-1]2
      {n:6, l:'p', m: 0, s:1, val:0}, //6p[ 0]2
      {n:6, l:'p', m: 1, s:1, val:0}, //6p[ 1]2
      {n:7, l:'s', m: 0, s:0, val:0}, //7s1
      {n:7, l:'s', m: 0, s:1, val:0}, //7s2
      {n:5, l:'f', m:-3, s:0, val:0}, //5f[-3]1
      {n:5, l:'f', m:-2, s:0, val:0}, //5f[-2]1
      {n:5, l:'f', m:-1, s:0, val:0}, //5f[-1]1
      {n:5, l:'f', m: 0, s:0, val:0}, //5f[ 0]1
      {n:5, l:'f', m: 1, s:0, val:0}, //5f[ 1]1
      {n:5, l:'f', m: 2, s:0, val:0}, //5f[ 2]1
      {n:5, l:'f', m: 3, s:0, val:0}, //5f[ 3]1
      {n:5, l:'f', m:-3, s:1, val:0}, //5f[-3]2
      {n:5, l:'f', m:-2, s:1, val:0}, //5f[-2]2
      {n:5, l:'f', m:-1, s:1, val:0}, //5f[-1]2
      {n:5, l:'f', m: 0, s:1, val:0}, //5f[ 0]2
      {n:5, l:'f', m: 1, s:1, val:0}, //5f[ 1]2
      {n:5, l:'f', m: 2, s:1, val:0}, //5f[ 2]2
      {n:5, l:'f', m: 3, s:1, val:0}, //5f[ 3]2
      {n:6, l:'d', m:-2, s:0, val:0}, //6d[-2]1
      {n:6, l:'d', m:-1, s:0, val:0}, //6d[-1]1
      {n:6, l:'d', m: 0, s:0, val:0}, //6d[ 0]1
      {n:6, l:'d', m: 1, s:0, val:0}, //6d[ 1]1
      {n:6, l:'d', m: 2, s:0, val:0}, //6d[ 2]1
      {n:6, l:'d', m:-2, s:1, val:0}, //6d[-2]2
      {n:6, l:'d', m:-1, s:1, val:0}, //6d[-1]2
      {n:6, l:'d', m: 0, s:1, val:0}, //6d[ 0]2
      {n:6, l:'d', m: 1, s:1, val:0}, //6d[ 1]2
      {n:6, l:'d', m: 2, s:1, val:0}, //6d[ 2]2
      {n:7, l:'p', m:-1, s:0, val:0}, //7p[-1]1
      {n:7, l:'p', m: 0, s:0, val:0}, //7p[ 0]1
      {n:7, l:'p', m: 1, s:0, val:0}, //7p[ 1]1
      {n:7, l:'p', m:-1, s:1, val:0}, //7p[-1]2
      {n:7, l:'p', m: 0, s:1, val:0}, //7p[ 0]2
      {n:7, l:'p', m: 1, s:1, val:0}, //7p[ 1]2
      {n:8, l:'s', m: 0, s:0, val:0}, //8s1
      {n:8, l:'s', m: 0, s:1, val:0}, //8s2
    ];

    this.nivell_valencia=this.omple_orbitals();
  }

  //regla de hund: omple orbitals amb 'e' electrons
  omple_orbitals(){
    //electrons per assignar
    let e=this.e;

    //modifica el valor
    for(let i=0;i<e;i++){
      this.electrons[i].val=1;
    }

    //omple una sola capa "s" "p" "d" "f"
    function omple_capa(capa){
      if(e<=0)return;
      //mira primer electró de cada orbital
      for(let i=0;i<capa.length;i++){if(e>0&&capa[i][0]==0){capa[i][0]=1;e--;if(e<=0){return;}}}
      //mira segon electró de cada orbital
      for(let i=0;i<capa.length;i++){if(e>0&&capa[i][1]==0){capa[i][1]=1;e--;if(e<=0){return;}}}
    }

    //odre capes: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p 8s
    //retorna la capa de valència (la més externa amb electrons)
      omple_capa(this.nivells.n1.s);if(e<=0)return 1;
      omple_capa(this.nivells.n2.s);if(e<=0)return 2;
      omple_capa(this.nivells.n2.p);if(e<=0)return 2;
      omple_capa(this.nivells.n3.s);if(e<=0)return 3;
      omple_capa(this.nivells.n3.p);if(e<=0)return 3;
      omple_capa(this.nivells.n4.s);if(e<=0)return 4;
      omple_capa(this.nivells.n3.d);if(e<=0)return 4;
      omple_capa(this.nivells.n4.p);if(e<=0)return 4;
      omple_capa(this.nivells.n5.s);if(e<=0)return 5;
      omple_capa(this.nivells.n4.d);if(e<=0)return 5;
      omple_capa(this.nivells.n5.p);if(e<=0)return 5;
      omple_capa(this.nivells.n6.s);if(e<=0)return 6;
      omple_capa(this.nivells.n4.f);if(e<=0)return 6;
      omple_capa(this.nivells.n5.d);if(e<=0)return 6;
      omple_capa(this.nivells.n6.p);if(e<=0)return 6;
      omple_capa(this.nivells.n7.s);if(e<=0)return 7;
      omple_capa(this.nivells.n5.f);if(e<=0)return 7;
      omple_capa(this.nivells.n6.d);if(e<=0)return 7;
      omple_capa(this.nivells.n7.p);if(e<=0)return 7;
      omple_capa(this.nivells.n8.s);if(e<=0)return 8;
  }

  get all_electrons(){
    return this.electrons.filter(e=>e.val); //return only electrons value==1
  }

  //obtenir electrons de valencia
  get valencia(){
    let string = "";
    let nivell = this.nivells['n'+this.nivell_valencia];
    let electrons_valencia = 0;
    let octet=false;
    let octets={};  //octets propers
    let opcions={}; //opcions per obtenir octet

    //construeix string "2s2 2p4"
    Object.keys(nivell).forEach(capa=>{
      let electrons=0;
      nivell[capa].forEach(orbital=>{ electrons+=orbital[0]+orbital[1];});   
      string+=" "+this.nivell_valencia+capa+electrons;
      electrons_valencia += electrons;
    });
    //elimina el primer espai
    string=string.substring(1);

    //checkpoints: electrons dels gasos nobles (tenen octet)
    let checkpoints=[0,2,4,10,18,36,54,86,118]; //Ne Ar Kr Xe Rn Og

    //comprova si ja té octet
    if(checkpoints.indexOf(this.e)+1) octet=true;

    //comprova si està entre octets
    if(octet==false){
      for(let i=0;i<8;i++){
        if(checkpoints[i]<this.e && this.e<checkpoints[i+1]){
          octets={  prev: checkpoints[i], post: checkpoints[i+1]};
          opcions={ donar:this.e - octets.prev, captar:octets.post - this.e};
          break;
        }
      }
    }
    return { octet, electrons_totals:this.e, electrons_valencia, string, octets, opcions};
  }

  //mou un electro d'una capa plena i posa'l a un orbital buit d'energia més alta del mateix nivell energètic
  //retorna si ha tingut èxit o no
  promociona_electro(){
    /* exemple típic: (3s) [1 1] (3p) [1 0][1 0][0 0] --> (3s) [1 0] (3p) [1 0][1 0][1 0] */
    //intenta promocionar electró de la capa s a la capa p dels nivells 2 al 7
    for(let n=2;n<8;n++){ 
      var capa_s=this.nivells["n"+n].s;
      var capa_p=this.nivells["n"+n].p;
      if(capa_s[0][0] && capa_s[0][1]){
        //vol dir que la capa s és plena
        //busca un orbital buit a la capa p
        for(let or=0;or<capa_p.length;or++){
          if(capa_p[or][0]==0 && capa_p[or][1]==0){
            //hem trobat un orbital buit! podem fer la promoció
            console.log(`Promocionat electró (orbital ${n}s ple && orbital ${n}p[${or}] buit)`);
            capa_s[0][1]=0;  //antiga posició de l'electró
            capa_p[or][0]=1; //nova posició de l'electró
            return true;
            break;
          }
        }
      }
    }

    console.log("Promoció electró fallida");
    return false;
  }

  compta_electrons_capa(capa){
    let electrons=0;
    capa.forEach(orbital=>{
      electrons += orbital[0];
      electrons += orbital[1];
    });
    console.log(electrons);
    return electrons;
  }

  toString(){
    let str=`Configuració electrònica: ${this.e} electrons\n`;
    let compta=this.compta_electrons_capa;
    str+=("  1s - "+this.nivells.n1.s[0][0]+" "+this.nivells.n1.s[0][1]+'\n');
    str+=("  2s - "+this.nivells.n2.s[0][0]+" "+this.nivells.n2.s[0][1]+'\n');if(compta(this.nivells.n2.p)==0)return str;
    str+=("  2p - "+this.nivells.n2.p[0][0]+" "+this.nivells.n2.p[0][1]);
    str+=(" - "    +this.nivells.n2.p[1][0]+" "+this.nivells.n2.p[1][1]);
    str+=(" - "    +this.nivells.n2.p[2][0]+" "+this.nivells.n2.p[2][1]+'\n');if(compta(this.nivells.n3.s)==0)return str;
    str+=("  3s - "+this.nivells.n3.s[0][0]+" "+this.nivells.n3.s[0][1]+'\n');if(compta(this.nivells.n3.p)==0)return str;
    str+=("  3p - "+this.nivells.n3.p[0][0]+" "+this.nivells.n3.p[0][1]);
    str+=(" - "    +this.nivells.n3.p[1][0]+" "+this.nivells.n3.p[1][1]);
    str+=(" - "    +this.nivells.n3.p[2][0]+" "+this.nivells.n3.p[2][1]+'\n');if(compta(this.nivells.n4.s)==0)return str;
    str+=("  4s - "+this.nivells.n4.s[0][0]+" "+this.nivells.n4.s[0][1]+'\n');if(compta(this.nivells.n3.d)==0)return str;
    str+=("  3d - "+this.nivells.n3.d[0][0]+" "+this.nivells.n3.d[0][1]);
    str+=(" - "    +this.nivells.n3.d[1][0]+" "+this.nivells.n3.d[1][1]);
    str+=(" - "    +this.nivells.n3.d[2][0]+" "+this.nivells.n3.d[2][1]);
    str+=(" - "    +this.nivells.n3.d[3][0]+" "+this.nivells.n3.d[3][1]);
    str+=(" - "    +this.nivells.n3.d[4][0]+" "+this.nivells.n3.d[4][1]+'\n');if(compta(this.nivells.n4.p)==0)return str;
    str+=("  4p - "+this.nivells.n4.p[0][0]+" "+this.nivells.n4.p[0][1]);
    str+=(" - "    +this.nivells.n4.p[1][0]+" "+this.nivells.n4.p[1][1]);
    str+=(" - "    +this.nivells.n4.p[2][0]+" "+this.nivells.n4.p[2][1]+'\n');if(this.e<=36)return str;
    str+=("  5s - "+this.nivells.n5.s[0][0]+" "+this.nivells.n5.s[0][1]+'\n');if(this.e<=38)return str;
    str+=("  4d - "+this.nivells.n4.d[0][0]+" "+this.nivells.n4.d[0][1]);
    str+=(" - "    +this.nivells.n4.d[1][0]+" "+this.nivells.n4.d[1][1]);
    str+=(" - "    +this.nivells.n4.d[2][0]+" "+this.nivells.n4.d[2][1]);
    str+=(" - "    +this.nivells.n4.d[3][0]+" "+this.nivells.n4.d[3][1]);
    str+=(" - "    +this.nivells.n4.d[4][0]+" "+this.nivells.n4.d[4][1]+'\n');if(this.e<=48)return str;
    str+=("  5p - "+this.nivells.n5.p[0][0]+" "+this.nivells.n5.p[0][1]);
    str+=(" - "    +this.nivells.n5.p[1][0]+" "+this.nivells.n5.p[1][1]);
    str+=(" - "    +this.nivells.n5.p[2][0]+" "+this.nivells.n5.p[2][1]+'\n');if(this.e<=54)return str;
    str+=("  6s - "+this.nivells.n6.s[0][0]+" "+this.nivells.n6.s[0][1]+'\n');if(this.e<=56)return str;
    str+=("  4f - "+this.nivells.n4.f[0][0]+" "+this.nivells.n4.f[0][1]);
    str+=(" - "    +this.nivells.n4.f[1][0]+" "+this.nivells.n4.f[1][1]);
    str+=(" - "    +this.nivells.n4.f[2][0]+" "+this.nivells.n4.f[2][1]);
    str+=(" - "    +this.nivells.n4.f[3][0]+" "+this.nivells.n4.f[3][1]);
    str+=(" - "    +this.nivells.n4.f[4][0]+" "+this.nivells.n4.f[4][1]);
    str+=(" - "    +this.nivells.n4.f[5][0]+" "+this.nivells.n4.f[5][1]);
    str+=(" - "    +this.nivells.n4.f[6][0]+" "+this.nivells.n4.f[6][1]+'\n');if(this.e<=70)return str;
    str+=("  5d - "+this.nivells.n5.d[0][0]+" "+this.nivells.n5.d[0][1]);
    str+=(" - "    +this.nivells.n5.d[1][0]+" "+this.nivells.n5.d[1][1]);
    str+=(" - "    +this.nivells.n5.d[2][0]+" "+this.nivells.n5.d[2][1]);
    str+=(" - "    +this.nivells.n5.d[3][0]+" "+this.nivells.n5.d[3][1]);
    str+=(" - "    +this.nivells.n5.d[4][0]+" "+this.nivells.n5.d[4][1]+'\n');if(this.e<=80)return str;
    str+=("  6p - "+this.nivells.n6.p[0][0]+" "+this.nivells.n6.p[0][1]);
    str+=(" - "    +this.nivells.n6.p[1][0]+" "+this.nivells.n6.p[1][1]);
    str+=(" - "    +this.nivells.n6.p[2][0]+" "+this.nivells.n6.p[2][1]+'\n');if(this.e<=86)return str;
    str+=("  7s - "+this.nivells.n7.s[0][0]+" "+this.nivells.n7.s[0][1]+'\n');if(this.e<=88)return str;
    str+=("  5f - "+this.nivells.n5.f[0][0]+" "+this.nivells.n5.f[0][1]);
    str+=(" - "    +this.nivells.n5.f[1][0]+" "+this.nivells.n5.f[1][1]);
    str+=(" - "    +this.nivells.n5.f[2][0]+" "+this.nivells.n5.f[2][1]);
    str+=(" - "    +this.nivells.n5.f[3][0]+" "+this.nivells.n5.f[3][1]);
    str+=(" - "    +this.nivells.n5.f[4][0]+" "+this.nivells.n5.f[4][1]);
    str+=(" - "    +this.nivells.n5.f[5][0]+" "+this.nivells.n5.f[5][1]);
    str+=(" - "    +this.nivells.n5.f[6][0]+" "+this.nivells.n5.f[6][1]+'\n');if(this.e<=102)return str;
    str+=("  6d - "+this.nivells.n6.d[0][0]+" "+this.nivells.n6.d[0][1]);
    str+=(" - "    +this.nivells.n6.d[1][0]+" "+this.nivells.n6.d[1][1]);
    str+=(" - "    +this.nivells.n6.d[2][0]+" "+this.nivells.n6.d[2][1]);
    str+=(" - "    +this.nivells.n6.d[3][0]+" "+this.nivells.n6.d[3][1]);
    str+=(" - "    +this.nivells.n6.d[4][0]+" "+this.nivells.n6.d[4][1]+'\n');if(this.e<=112)return str;
    str+=("  7p - "+this.nivells.n7.p[0][0]+" "+this.nivells.n7.p[0][1]);
    str+=(" - "    +this.nivells.n7.p[1][0]+" "+this.nivells.n7.p[1][1]);
    str+=(" - "    +this.nivells.n7.p[2][0]+" "+this.nivells.n7.p[2][1]+'\n');if(this.e<=118)return str;
    str+=("  8s - "+this.nivells.n8.s[0][0]+" "+this.nivells.n8.s[0][1]+'\n');
    return str;
  }
}

module.exports=Orbitals;
