/*
  classe Atom 3D
  depen de:
    - Orbital
    - Punt
*/
let Orbitals = require('./orbitals.js');
let Punt     = require('./punt.js');

class Atom {
  constructor(z, n, position){
    //nombre zatòmic: protons
    if(typeof(z)!='number') throw "Nombre atòmic no és un número";
    if(z<=0) throw "Nombre atòmic "+z+" il·legal";
    if(z>118) throw "Element z="+z+" desconegut";
    this.z=z||0;

    //símbol,nom, propietats, massa
    //https://www.ptable.com/?lang=ca# http://www.ciaaw.org/atomic-weights.htm CIAAW. Isotopic compositions of the elements 2017.
    //"mass" és la mitjana ponderada entre isòtops
    this.element=[
      //fila1
        {symbol:"" ,  name:"",            mass:0        }, // 0 (index 0: atom buit)
        {symbol:"H" , name:"Hidrogen",    mass:1.0080   }, // 1
        {symbol:"He", name:"Heli",        mass:4.0026   }, // 2
      //fila2
        {symbol:"Li", name:"Liti",        mass:6.9400   }, // 3
        {symbol:"Be", name:"Beril·li",    mass:9.01218  }, // 4
        {symbol:"B" , name:"Bor",         mass:10.810   }, // 5
        {symbol:"C" , name:"Carboni",     mass:12.011   }, // 6
        {symbol:"N" , name:"Nitrogen",    mass:14.007   }, // 7
        {symbol:"O" , name:"Oxigen",      mass:15.999   }, // 8
        {symbol:"F" , name:"Fluor",       mass:18.9984  }, // 9
        {symbol:"Ne", name:"Neó",         mass:20.1797  }, // 10
      //fila3
        {symbol:"Na", name:"Sodi",        mass:22.9898  }, // 11
        {symbol:"Mg", name:"Magnesi",     mass:24.305   }, // 12
        {symbol:"Al", name:"Alumini",     mass:26.982   }, // 13
        {symbol:"Si", name:"Silici",      mass:28.085   }, // 14
        {symbol:"P" , name:"Fòsfor",      mass:30.9738  }, // 15
        {symbol:"S" , name:"Sofre",       mass:32.060   }, // 16
        {symbol:"Cl", name:"Clor",        mass:35.450   }, // 17
        {symbol:"Ar", name:"Argó",        mass:39.948   }, // 18
      //fila4
        {symbol:"K" , name:"Potassi",     mass:39.0983  }, // 19
        {symbol:"Ca", name:"Calci",       mass:40.078   }, // 20
        {symbol:"Sc", name:"Escandi",     mass:44.9559  }, // 21
        {symbol:"Ti", name:"Titani",      mass:47.867   }, // 22
        {symbol:"V" , name:"Vanadi",      mass:50.9415  }, // 23
        {symbol:"Cr", name:"Crom",        mass:51.9961  }, // 24
        {symbol:"Mn", name:"Manganès",    mass:54.9380  }, // 25
        {symbol:"Fe", name:"Ferro",       mass:55.845   }, // 26
        {symbol:"Co", name:"Cobalt",      mass:58.9331  }, // 27
        {symbol:"Ni", name:"Níquel",      mass:58.6934  }, // 28
        {symbol:"Cu", name:"Coure",       mass:63.546   }, // 29
        {symbol:"Zn", name:"Zinc",        mass:65.380   }, // 30
        {symbol:"Ga", name:"Gal·li",      mass:69.723   }, // 31
        {symbol:"Ge", name:"Germani",     mass:72.630   }, // 32
        {symbol:"As", name:"Arsènic",     mass:74.9216  }, // 33
        {symbol:"Se", name:"Seleni",      mass:78.971   }, // 34
        {symbol:"Br", name:"Brom",        mass:79.904   }, // 35
        {symbol:"Kr", name:"Criptó",      mass:83.798   }, // 36
      //fila5
        {symbol:"Rb", name:"Rubidi",      mass:85.4678  }, // 37
        {symbol:"Sr", name:"Estronci",    mass:87.620   }, // 38
        {symbol:"Y" , name:"Itri",        mass:88.90584 }, // 39
        {symbol:"Zr", name:"Zirconi",     mass:91.224   }, // 40
        {symbol:"Nb", name:"Niobi",       mass:92.90637 }, // 41
        {symbol:"Mo", name:"Molibdè",     mass:95.95    }, // 42
        {symbol:"Tc", name:"Tecneci",     mass:98       }, // 43
        {symbol:"Ru", name:"Ruteni",      mass:101.07   }, // 44
        {symbol:"Rh", name:"Rodi",        mass:102.9055 }, // 45
        {symbol:"Pd", name:"Pal·ladi",    mass:106.42   }, // 46
        {symbol:"Ag", name:"Plata",       mass:107.8682 }, // 47
        {symbol:"Cd", name:"Cadmi",       mass:112.414  }, // 48
        {symbol:"In", name:"Indi",        mass:114.818  }, // 49
        {symbol:"Sn", name:"Estany",      mass:118.710  }, // 50
        {symbol:"Sb", name:"Antimoni",    mass:121.760  }, // 51
        {symbol:"Te", name:"Tel·luri",    mass:127.60   }, // 52
        {symbol:"I" , name:"Iode",        mass:126.9045 }, // 53
        {symbol:"Xe", name:"Xenó",        mass:131.293  }, // 54
      //fila6
        {symbol:"Cs", name:"Cesi",        mass:132.9055 }, // 55
        {symbol:"Ba", name:"Bari",        mass:137.327  }, // 56
        {symbol:"La", name:"Lantà",       mass:138.9055 }, // 57
        {symbol:"Ce", name:"Ceri",        mass:140.116  }, // 58
        {symbol:"Pr", name:"Praseodimi",  mass:140.9077 }, // 59
        {symbol:"Nd", name:"Neodimi",     mass:144.242  }, // 60
        {symbol:"Pm", name:"Prometi",     mass:145      }, // 61
        {symbol:"Sm", name:"Samari",      mass:150.36   }, // 62
        {symbol:"Eu", name:"Europi",      mass:151.964  }, // 63
        {symbol:"Gd", name:"Gadolini",    mass:157.25   }, // 64
        {symbol:"Tb", name:"Terbi",       mass:158.9254 }, // 65
        {symbol:"Dy", name:"Disprosi",    mass:162.500  }, // 66
        {symbol:"Ho", name:"Holmi",       mass:164.9303 }, // 67
        {symbol:"Er", name:"Erbi",        mass:167.259  }, // 68 
        {symbol:"Tm", name:"Tuli",        mass:168.9342 }, // 69 
        {symbol:"Yb", name:"Iterbi",      mass:173.045  }, // 70 
        {symbol:"Lu", name:"Luteci",      mass:174.9668 }, // 71 
        {symbol:"Hf", name:"Hafni",       mass:178.49   }, // 72 
        {symbol:"Ta", name:"Tàntal",      mass:180.9479 }, // 73 
        {symbol:"W" , name:"Wolframi",    mass:183.84   }, // 74 
        {symbol:"Re", name:"Reni",        mass:186.207  }, // 75 
        {symbol:"Os", name:"Osmi",        mass:190.23   }, // 76 
        {symbol:"Ir", name:"Iridi",       mass:192.217  }, // 77 
        {symbol:"Pt", name:"Platí",       mass:195.084  }, // 78 
        {symbol:"Au", name:"Or",          mass:196.9666 }, // 79 
        {symbol:"Hg", name:"Mercuri",     mass:200.592  }, // 80 
        {symbol:"Tl", name:"Tal·li",      mass:204.38   }, // 81 [204.382, 204.385]	
        {symbol:"Pb", name:"Plom",        mass:207.2    }, // 82
        {symbol:"Bi", name:"Bismut",      mass:208.9804 }, // 83
        {symbol:"Po", name:"Pol·loni",    mass:209      }, // 84
        {symbol:"At", name:"Àstat",       mass:210      }, // 85
        {symbol:"Rn", name:"Radó",        mass:222      }, // 86
      //fila7                                                 
        {symbol:"Fr", name:"Franci",      mass:223      }, // 87
        {symbol:"Ra", name:"Radi",        mass:226      }, // 88
        {symbol:"Ac", name:"Actini",      mass:227      }, // 89
        {symbol:"Th", name:"Tori",        mass:232.0377 }, // 90
        {symbol:"Pa", name:"Protoactini", mass:231.0359 }, // 91
        {symbol:"U" , name:"Urani",       mass:238.0289 }, // 92
        {symbol:"Np", name:"Neptuni",     mass:237      }, // 93
        {symbol:"Pu", name:"Plutoni",     mass:244      }, // 94
        {symbol:"Am", name:"Americi",     mass:243      }, // 95
        {symbol:"Cm", name:"Curi",        mass:247      }, // 96
        {symbol:"Bk", name:"Berkeli",     mass:247      }, // 97
        {symbol:"Cf", name:"Californi",   mass:251      }, // 98
        {symbol:"Es", name:"Einsteni",    mass:252      }, // 99
        {symbol:"Fm", name:"Fermi",       mass:257      }, //100
        {symbol:"Md", name:"Mendelevi",   mass:258      }, //101
        {symbol:"No", name:"Nobeli",      mass:259      }, //102
        {symbol:"Lr", name:"Lawrenci",    mass:266      }, //103
        {symbol:"Rf", name:"Rutherfordi", mass:267      }, //104
        {symbol:"Db", name:"Dubni",       mass:268      }, //105
        {symbol:"Sg", name:"Seaborgi",    mass:269      }, //106
        {symbol:"Bh", name:"Bohri",       mass:270      }, //107
        {symbol:"Hs", name:"Hassi",       mass:277      }, //108
        {symbol:"Mt", name:"Meitneri",    mass:278      }, //109
        {symbol:"Ds", name:"Darmstadi",   mass:281      }, //110
        {symbol:"Rg", name:"Roentgeni",   mass:282      }, //111
        {symbol:"Cn", name:"Copernici",   mass:285      }, //112
        {symbol:"Nh", name:"Nihonium",    mass:286      }, //113
        {symbol:"Fl", name:"Flerovi",     mass:289      }, //114
        {symbol:"Mc", name:"Moscovi",     mass:290      }, //115
        {symbol:"Lv", name:"Livermori",   mass:293      }, //116
        {symbol:"Ts", name:"Tennessine",  mass:294      }, //117
        {symbol:"Og", name:"Oganesson",   mass:294      }, //118
    ][z];

    //NEUTRONS
    this.n=n||0;
    if(this.n==0)this.n=Math.round(this.element.mass)-this.z;

    //ELECTRONS
    this.orbitals=new Orbitals(this.z); //inicia amb z electrons

    //POSICIÓ
    this.position=position||new Punt(0,0,0);
  };

  //nombre màssic A: de moment retorna element.mass TBD
  get mass(){return this.element.mass};

  //pot l'àtom obtenir octet si s'ajunta amb un altre àtom?
  test_octet(atom){
    console.log(`\ntest octet entre (${this.element.symbol}, ${atom.element.symbol}):`);

    //si algun ja té octet no interaccionaran
    if(this.orbitals.octet){ console.log(`${this.element.symbol}, q=${this.carrega}) ja té octet (${this.orbitals.e} electrons)`); return false; }
    if(atom.orbitals.octet){ console.log(`${atom.element.symbol}, q=${atom.carrega}) ja té octet (${atom.orbitals.e} electrons)`); return false; }

    //comprova opcions
    let opcions=[];
    let opcions_1 = this.orbitals.octets_propers.opcions;
    let opcions_2 = atom.orbitals.octets_propers.opcions;

    //opció 1: atom1 pot donar a atom2
    if(opcions_1.donar == opcions_2.captar){
      let donats = opcions_1.donar;
      opcions.push(donats);
    }

    //opció 2: atom1 pot captar de atom2
    if(opcions_1.captar == opcions_2.donar){
      let donats = - opcions_1.captar;
      opcions.push(donats);
    }

    //torna el nombre d'electrons que atom1 dóna
    //per exemple [1,-7] vol dir que àtom1 pot donar 1 electró o captar-ne 7 de àtom2
    if(opcions.length==0) opcions=false;

    console.log(`"${this.element.symbol}" pot donar a "${atom.element.symbol}" els següents electrons:`);
    console.log(opcions)
    console.log(`Es formaria la molècula "${this.element.symbol}${atom.element.symbol}"`)
    return opcions;
  };

  //càrrega elèctrica TODO
  get carrega(){ return this.z - this.orbitals.e; }
  set carrega(value) {
    let e_antics = this.orbitals.e; //electrons antics
    let e_nous   = this.z - value;  //nou número electrons
    let guany    = e_nous - e_antics; //guany d'electrons
    if(guany==0) return;
    if(guany>0){
      //intenta guanyar electrons
      for(let i=0;i<guany;i++) this.orbitals.guanya_electro();
    }else{
      //intenta perdre electrons
      let guany_abs=Math.abs(guany);
      for(let i=0;i<guany_abs;i++) this.orbitals.perd_electro();
    }
  };
}

module.exports=Atom;
