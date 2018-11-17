/*
  Classe Orbitals
  depèn de:
    - assert */const assert = require('assert');/*

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

class Electro {
  constructor(n,l,m,s,val){
    //números quàntics n,l,m,s
    this.n=n;        //nivell:   1-7
    this.l=l;        //capa:     s,p,d,f == [0,1,2,3]
    this.m=m;        //magnetic: -l, 0, l
    this.s=s;        //spin:     {0,1} == {-1/2, 1/2}
    this.val=val||0; //bool: existeix o no
  }
}

class Orbitals {
  constructor(e){
    //e: nombre electrons
    assert(e>0, "Nombre d'electrons negatiu");

    //TOTS els electrons possibles ordenats per nivell d'energia
    //diagrama de Möeller i regla de Hund
    //1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p //8s
    //nota: no es tenen en compte les 22 excepcions (veure 'excepcions_orbitals.txt') TBD
    this.electrons=[
      //          nivell, capa, magnetic, spin
      //          n  l   m  s   //layer=['s','p','d','f'] -> e.g. layer[0] -> 's'
      new Electro(1, 0,  0, 0), //1s1
      new Electro(1, 0,  0, 1), //1s2
      new Electro(2, 0,  0, 0), //2s1
      new Electro(2, 0,  0, 1), //2s1
      new Electro(2, 1, -1, 0), //2p[-1]1
      new Electro(2, 1,  0, 0), //2p[ 0]1
      new Electro(2, 1,  1, 0), //2p[ 1]1
      new Electro(2, 1, -1, 1), //2p[-1]2
      new Electro(2, 1,  0, 1), //2p[ 0]2
      new Electro(2, 1,  1, 1), //2p[ 1]2
      new Electro(3, 0,  0, 0), //3s1
      new Electro(3, 0,  0, 1), //3s1
      new Electro(3, 1, -1, 0), //3p[-1]1
      new Electro(3, 1,  0, 0), //3p[ 0]1
      new Electro(3, 1,  1, 0), //3p[ 1]1
      new Electro(3, 1, -1, 1), //3p[-1]2
      new Electro(3, 1,  0, 1), //3p[ 0]2
      new Electro(3, 1,  1, 1), //3p[ 1]2
      new Electro(4, 0,  0, 0), //4s1
      new Electro(4, 0,  0, 1), //4s1
      new Electro(3, 2, -2, 0), //3d[-2]1
      new Electro(3, 2, -1, 0), //3d[-1]1
      new Electro(3, 2,  0, 0), //3d[ 0]1
      new Electro(3, 2,  1, 0), //3d[ 1]1
      new Electro(3, 2,  2, 0), //3d[ 2]1
      new Electro(3, 2, -2, 1), //3d[-2]2
      new Electro(3, 2, -1, 1), //3d[-1]2
      new Electro(3, 2,  0, 1), //3d[ 0]2
      new Electro(3, 2,  1, 1), //3d[ 1]2
      new Electro(3, 2,  2, 1), //3d[ 2]2
      new Electro(4, 1, -1, 0), //4p[-1]1
      new Electro(4, 1,  0, 0), //4p[ 0]1
      new Electro(4, 1,  1, 0), //4p[ 1]1
      new Electro(4, 1, -1, 1), //4p[-1]2
      new Electro(4, 1,  0, 1), //4p[ 0]2
      new Electro(4, 1,  1, 1), //4p[ 1]2
      new Electro(5, 0,  0, 0), //5s1
      new Electro(5, 0,  0, 1), //5s1
      new Electro(4, 2, -2, 0), //4d[-2]1
      new Electro(4, 2, -1, 0), //4d[-1]1
      new Electro(4, 2,  0, 0), //4d[ 0]1
      new Electro(4, 2,  1, 0), //4d[ 1]1
      new Electro(4, 2,  2, 0), //4d[ 2]1
      new Electro(4, 2, -2, 1), //4d[-2]2
      new Electro(4, 2, -1, 1), //4d[-1]2
      new Electro(4, 2,  0, 1), //4d[ 0]2
      new Electro(4, 2,  1, 1), //4d[ 1]2
      new Electro(4, 2,  2, 1), //4d[ 2]2
      new Electro(5, 1, -1, 0), //5p[-1]1
      new Electro(5, 1,  0, 0), //5p[ 0]1
      new Electro(5, 1,  1, 0), //5p[ 1]1
      new Electro(5, 1, -1, 1), //5p[-1]2
      new Electro(5, 1,  0, 1), //5p[ 0]2
      new Electro(5, 1,  1, 1), //5p[ 1]2
      new Electro(6, 0,  0, 0), //6s1
      new Electro(6, 0,  0, 1), //6s1
      new Electro(4, 3, -3, 0), //4f[-3]1
      new Electro(4, 3, -2, 0), //4f[-2]1
      new Electro(4, 3, -1, 0), //4f[-1]1
      new Electro(4, 3,  0, 0), //4f[ 0]1
      new Electro(4, 3,  1, 0), //4f[ 1]1
      new Electro(4, 3,  2, 0), //4f[ 2]1
      new Electro(4, 3,  3, 0), //4f[ 3]1
      new Electro(4, 3, -3, 1), //4f[-3]2
      new Electro(4, 3, -2, 1), //4f[-2]2
      new Electro(4, 3, -1, 1), //4f[-1]2
      new Electro(4, 3,  0, 1), //4f[ 0]2
      new Electro(4, 3,  1, 1), //4f[ 1]2
      new Electro(4, 3,  2, 1), //4f[ 2]2
      new Electro(4, 3,  3, 1), //4f[ 3]2
      new Electro(5, 2, -2, 0), //5d[-2]1
      new Electro(5, 2, -1, 0), //5d[-1]1
      new Electro(5, 2,  0, 0), //5d[ 0]1
      new Electro(5, 2,  1, 0), //5d[ 1]1
      new Electro(5, 2,  2, 0), //5d[ 2]1
      new Electro(5, 2, -2, 1), //5d[-2]2
      new Electro(5, 2, -1, 1), //5d[-1]2
      new Electro(5, 2,  0, 1), //5d[ 0]2
      new Electro(5, 2,  1, 1), //5d[ 1]2
      new Electro(5, 2,  2, 1), //5d[ 2]2
      new Electro(6, 1, -1, 0), //6p[-1]1
      new Electro(6, 1,  0, 0), //6p[ 0]1
      new Electro(6, 1,  1, 0), //6p[ 1]1
      new Electro(6, 1, -1, 1), //6p[-1]2
      new Electro(6, 1,  0, 1), //6p[ 0]2
      new Electro(6, 1,  1, 1), //6p[ 1]2
      new Electro(7, 0,  0, 0), //7s1
      new Electro(7, 0,  0, 1), //7s1
      new Electro(5, 3, -3, 0), //5f[-3]1
      new Electro(5, 3, -2, 0), //5f[-2]1
      new Electro(5, 3, -1, 0), //5f[-1]1
      new Electro(5, 3,  0, 0), //5f[ 0]1
      new Electro(5, 3,  1, 0), //5f[ 1]1
      new Electro(5, 3,  2, 0), //5f[ 2]1
      new Electro(5, 3,  3, 0), //5f[ 3]1
      new Electro(5, 3, -3, 1), //5f[-3]2
      new Electro(5, 3, -2, 1), //5f[-2]2
      new Electro(5, 3, -1, 1), //5f[-1]2
      new Electro(5, 3,  0, 1), //5f[ 0]2
      new Electro(5, 3,  1, 1), //5f[ 1]2
      new Electro(5, 3,  2, 1), //5f[ 2]2
      new Electro(5, 3,  3, 1), //5f[ 3]2
      new Electro(6, 2, -2, 0), //6d[-2]1
      new Electro(6, 2, -1, 0), //6d[-1]1
      new Electro(6, 2,  0, 0), //6d[ 0]1
      new Electro(6, 2,  1, 0), //6d[ 1]1
      new Electro(6, 2,  2, 0), //6d[ 2]1
      new Electro(6, 2, -2, 1), //6d[-2]2
      new Electro(6, 2, -1, 1), //6d[-1]2
      new Electro(6, 2,  0, 1), //6d[ 0]2
      new Electro(6, 2,  1, 1), //6d[ 1]2
      new Electro(6, 2,  2, 1), //6d[ 2]2
      new Electro(7, 1, -1, 0), //7p[-1]1
      new Electro(7, 1,  0, 0), //7p[ 0]1
      new Electro(7, 1,  1, 0), //7p[ 1]1
      new Electro(7, 1, -1, 1), //7p[-1]2
      new Electro(7, 1,  0, 1), //7p[ 0]2
      new Electro(7, 1,  1, 1), //7p[ 1]2
      //new Electro(8, 0,  0, 0), //8s1
      //new Electro(8, 0,  0, 1), //8s1
    ];

    //omple electrons
    for(let i=0;i<e;this.electrons[i++].val=1){}

    /*estructura antiga nivells i capes: 1-7: problema: ordre electrons per nivell energètic
    this.nivells={ //n,l,m,s: nivell, capa, orbital, spin
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
      //"n8" :{
      //"s":[                      [0,0],                      ], },
    };*/
  }

  //compta electrons
  compta(nivell, capa, magnetic){
    //nivell: <int> 1-7
    //capa:   <int> {0,1,2,3} || <string> {'s','p','d','f'}
    //magnetic (opcional) <int>
    if(typeof capa == 'string') capa = ['s','p','d','f'].indexOf(capa);
    if(typeof magnetic === "undefined"){
      return this.electrons.filter(e=>{return (e.val && nivell==e.n && capa==e.l)}).length;
    }else{
      return this.electrons.filter(e=>{return (e.val && nivell==e.n && capa==e.l && magnetic==e.m)}).length;
    }
  }

  //mou un electro d'una capa plena i posa'l a un orbital buit d'energia més alta del mateix nivell energètic
  //exemple típic: (3s) [1 1] (3p) [1 0][1 0][0 0] --> (3s) [1 0] (3p) [1 0][1 0][1 0]
  //retorna si ha tingut èxit o no
  //nota: de moment només es promociona un electró de la capa s a la capa p del mateix nivell
  promociona_electro(){
    //recorre nivell 2 al 7
    for(let n=2;n<8;n++){ 
      if(this.compta(n,'s')!=2) continue; //la capa s no és plena
      //recorre la capa p
      for(let m=-1;m<2;m++){
        if(this.compta(n,'p',m)>0) continue //l'orbital (p,m) és ple o semiple
        console.log(`Promocionat electró (orbital ${n}s ple && orbital ${n}p[m=${m}] buit)`);
        let e_s = this.electrons.find(e=>{return (e.val && e.n==n && e.l==0 && e.m==0 && e.s==1)});
        let e_p = this.electrons.find(e=>{return (e.val==0 && e.n==n && e.l==1 && e.m==m && e.s==0)});
        //intercanvia els valors dels electrons trobats
        e_s.val=0;
        e_p.val=1;
        return true;
      }
    }
    console.log("Promoció electró fallida");
    return false;
  }

  //nombre electrons totals
  get e(){return this.electrons.filter(e=>e.val).length;}

  /*ELECTRONS DE VALÈNCIA*/
  //nivell dels electrons més exteriors
  get nivell_valencia(){ return Math.max(...this.electrons.filter(e=>e.val).map(e=>e.n)); };

  //electrons de valencia
  get valencia(){
    let n=this.nivell_valencia;
    let electrons=this.electrons.filter(e=>{return (e.val && e.n==n)});
    let nivell={n, capes:{s:0,p:0,d:0,f:0}};
    electrons.forEach(e=>{
      nivell.capes["spdf"[e.l]]++;
    });
    //console.log(nivell);
    return electrons;
  }

  //guanya 1 electró
  guanya_electro(){
    //busca el primer electró buit
    let e=this.electrons.find(e=>e.val==0);
    e.val=1;
    return e;
  }
  
  //perd 1 electró
  perd_electro(){
    //busca l'electró més extern i posa-li val=0
    let electrons = this.electrons.filter(e=>e.val);
    if(electrons.length==0){
      console.warn('Un àtom sense electrons ha intentat perdre un electró');
      return false;
    }
    let e = electrons[electrons.length-1]; //electro més extern
    e.val=0;
    return e;
  }

  /*OCTET*/
  //comprova octet
  get octet(){
    let nobles=[2,10,18,36,54,86,118];//He Ne Ar Kr Xe Rn Og
    return (nobles.indexOf(this.e)+1)?true:false;
  }

  //comprova octets propers d'un àtom que no té octet
  get octets_propers(){
    if(this.octet) return false;
    let octets={};  //octets propers
    let opcions={}; //opcions per obtenir octet
    let nobles=[0,2,10,18,36,54,86,118];//He Ne Ar Kr Xe Rn Og
    let e=this.e; //nombre actual electrons

    for(let i=0;i<7;i++){
      if(nobles[i]<e && e<nobles[i+1]){
        octets ={ prev: nobles[i], post: nobles[i+1]};
        opcions={ donar:e - octets.prev, captar:octets.post - e};
        return {electrons:e, octets, opcions};
        break;
      }
    }
    throw `Electrons: ${e}`;
  }

  /*to string*/
  toString(){
    let str=`Configuració electrònica: ${this.e} electrons\n`;
    //str+="  Octet: "+this.octet+'\n';
    //recorre les capes i compta els electrons de cada orbital
    ['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s','5f','6d','7p'].forEach(capa=>{
      let n=parseInt(capa[0]);
      let l=capa[1];
      if(this.compta(n,l)==0)return;
      str+="  "+n+l+" - ";
      let strs=[];
      switch(l){
        case 's':                        strs.push(this.compta(n,l));    break;
        case 'p': for(let i=-1;i<2;i++){ strs.push(this.compta(n,l,i))}; break;
        case 'd': for(let i=-2;i<3;i++){ strs.push(this.compta(n,l,i))}; break;
        case 'f': for(let i=-3;i<4;i++){ strs.push(this.compta(n,l,i))}; break;
      }
      strs.forEach((s,i)=>{
        if     (s==2) strs[i]="1 1";
        else if(s==1) strs[i]="1 0";
        else if(s==0) strs[i]="0 0";
      });
      str+=strs.join(' - ');
      str+='\n';
    });
    return str;
  }
}

module.exports=Orbitals;
