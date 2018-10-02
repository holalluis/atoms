/*
  isòtops coneguts:
  //http://www.ciaaw.org/atomic-masses.htm       FET
  //http://www.ciaaw.org/isotopic-abundances.htm TODO
*/

var Isotops=[
  [ {A:0,   mass:0}             ], //0 --
  [ {A:1,   mass:1.0078250322, abundance: (0.99972+0.99999)/2}, 
    {A:2,   mass:2.0141017781, abundance: (0.00028+0.00001)/2}, ], //1 H Hidrogen
  [ {A:3,   mass:3.016029322,  abundance:0, },
    {A:4,   mass:4.0026032545, abundance:0, }, ], //2 He Helium
  [ {A:6,   mass:6.01512289,   abundance:0},
    {A:7,   mass:7.01600344,   abundance:0},   ], //3 Li lithium
  [ {A:9,   mass:9.0121831,    abundance:0},    ], //4 Be beryllium 
  [ {A:10,  mass:10.0129369,   abundance:0},
    {A:11,  mass:11.00930517,  abundance:0},  ], //5 B boron 
  [ {A:12,  mass:12,           abundance:0},
    {A:13,  mass:13.003354835, abundance:0}, ], //6 C carbon
  [ {A:14,  mass:14.003074004, abundance:0},
    {A:15,  mass:15.000108899, abundance:0}, ], //7 N nitrogen 
  [ {A:16,  mass:15.994914619, abundance:0},
    {A:17,  mass:16.999131757, abundance:0},
    {A:18,  mass:17.999159613, abundance:0}, ], //8 O oxygen 
  [ {A:19,  mass:18.998403163, abundance:0}, ], //9 F fluorine 
  [ {A:20,  mass:19.99244018,  abundance:0},
    {A:21,  mass:20.9938467,   abundance:0},
    {A:22,  mass:21.9913851,   abundance:0},   ], //10 Ne neon 
  [ {A:23,  mass:22.98976928,  abundance:0},  ], //11 Na sodium 
  [ {A:24,  mass:23.98504170,  abundance:0},
    {A:25,  mass:24.9858370,   abundance:0},
    {A:26,  mass:25.9825930,   abundance:0},   ], //12 Mg magnesium
  [ {A:27,  mass:26.9815384,   abundance:0},   ], //13 Al aluminium
  [ {A:28,  mass:27.976926535, abundance:0},
    {A:29,  mass:28.976494665, abundance:0},
    {A:30,  mass:29.9737701,   abundance:0},   ], //14 Si silicon
  [ {A:31,  mass:30.973761998, abundance:0}, ], //15 P phosphorous
  [ {A:32,  mass:31.972071174, abundance:0},
    {A:33,  mass:32.97145891,  abundance:0},
    {A:34,  mass:33.9678670,   abundance:0},
    {A:36,  mass:35.967081,    abundance:0},    ], //16 S sulfur
  [ {A:35,  mass:34.9688527,   abundance:0},
    {A:37,  mass:36.9659026,   abundance:0},   ], //17 Cl chlorine
  [ {A:36,  mass:35.9675451,   abundance:0},
    {A:38,  mass:37.962732,    abundance:0},
    {A:40,  mass:39.96238312,  abundance:0},  ], //18 Ar argon
  [ {A:39,  mass:38.96370649,  abundance:0},
    {A:40,  mass:39.9639982,   abundance:0},
    {A:41,  mass:40.96182526,  abundance:0},  ], //19 K potassium 
  [ {A:40,  mass:39.9625909,   abundance:0},
    {A:42,  mass:41.958618,    abundance:0},
    {A:43,  mass:42.958766,    abundance:0},
    {A:44,  mass:43.955481,    abundance:0},
    {A:46,  mass:45.95369,     abundance:0},
    {A:48,  mass:47.9525229,   abundance:0},   ], //20 Ca calcium
  [ {A:45,  mass:44.955908,    abundance:0},    ], //21 Sc scandium
  [ {A:46,  mass:45.952627,    abundance:0},
    {A:47,  mass:46.9517577,   abundance:0},
    {A:48,  mass:47.9479409,   abundance:0},
    {A:49,  mass:48.9478646,   abundance:0},
    {A:50,  mass:49.9447858,   abundance:0},   ], //22 Ti titanium
  [ {A:50,  mass:49.947156,    abundance:0},
    {A:51,  mass:50.943957,    abundance:0},    ], //23 V vanadium
  [ {A:50,  mass:49.946041,    abundance:0},
    {A:52,  mass:51.940505,    abundance:0},
    {A:53,  mass:52.940647,    abundance:0},
    {A:54,  mass:53.938878,    abundance:0},    ], //24 Cr chromium
  [ {A:55,  mass:54.938043,    abundance:0},    ], //25 Mn manganese
  [ {A:54,  mass:53.939608,    abundance:0},
    {A:56,  mass:55.934936,    abundance:0},
    {A:57,  mass:56.935392,    abundance:0},
    {A:58,  mass:57.933274,    abundance:0},    ], //26 Fe iron
  [ {A:59,  mass:58.933194,    abundance:0},    ], //27 Co cobalt
  [ {A:58,  mass:57.935342,    abundance:0},
    {A:60,  mass:59.930785,    abundance:0},
    {A:61,  mass:60.931055,    abundance:0},
    {A:62,  mass:61.928345,    abundance:0},
    {A:64,  mass:63.927966,    abundance:0},    ], //28 Ni nickel
  [ {A:63,  mass:62.929597,    abundance:0},
    {A:65,  mass:64.927790,    abundance:0},    ], //29 Cu copper
  [ {A:64,  mass:63.929142,    abundance:0},
    {A:66,  mass:65.926034,    abundance:0},
    {A:67,  mass:66.927127,    abundance:0},
    {A:68,  mass:67.924844,    abundance:0},
    {A:70,  mass:69.92532,     abundance:0},     ], //30 Zn zinc
  [ {A:69,  mass:68.925573,    abundance:0},
    {A:71,  mass:70.924702,    abundance:0},    ], //31 Ga gallium
  [ {A:70,  mass:69.924249,    abundance:0},
    {A:72,  mass:71.9220758,   abundance:0},
    {A:73,  mass:72.9234590,   abundance:0},
    {A:74,  mass:73.92117776,  abundance:0},
    {A:76,  mass:75.9214027,   abundance:0},   ], //32 Ge germanium 
  [ {A:75,  mass:74.921595,    abundance:0},    ], //33 As arsenic 
  [ {A:74,  mass:73.9224759,   abundance:0},
    {A:76,  mass:75.9192137,   abundance:0},
    {A:77,  mass:76.9199141,   abundance:0},
    {A:78,  mass:77.917309,    abundance:0},
    {A:80,  mass:79.916522,    abundance:0},
    {A:82,  mass:81.916699,    abundance:0},    ], //34 Se selenium 
  [ {A:79,  mass:78.918338,    abundance:0},
    {A:81,  mass:80.916288,    abundance:0},    ], //35 Br bromine 
  [ {A:78,  mass:77.920366,    abundance:0},
    {A:80,  mass:79.916378,    abundance:0},
    {A:82,  mass:81.91348115,  abundance:0},
    {A:83,  mass:82.91412652,  abundance:0},
    {A:84,  mass:83.91149773,  abundance:0},
    {A:86,  mass:85.91061063,  abundance:0},  ], //36 Kr krypton 
  [ {A:85,  mass:84.91178974,  abundance:0},
    {A:87,  mass:86.90918053,  abundance:0},  ], //37 Rb rubidium 
  [ {A:84,  mass:83.913419,    abundance:0},
    {A:86,  mass:85.90926073,  abundance:0},
    {A:87,  mass:86.90887750,  abundance:0},
    {A:88,  mass:87.90561226,  abundance:0},  ], //38 Sr strontium 
  [ {A:89,  mass:88.90584,     abundance:0},     ], //39 Y yttrium 
  [ {A:90,  mass:89.9046988,   abundance:0},
    {A:91,  mass:90.9056402,   abundance:0},
    {A:92,  mass:91.9050353,   abundance:0},
    {A:94,  mass:93.906313,    abundance:0},
    {A:96,  mass:95.9082776,   abundance:0},   ], //40 Zr zirconium 
  [ {A:93,  mass:92.90637,     abundance:0},     ], //41 Nb niobium 
  [ {A:92,  mass:91.906807,    abundance:0},
    {A:94,  mass:93.905084,    abundance:0},
    {A:95,  mass:94.9058374,   abundance:0},
    {A:96,  mass:95.9046748,   abundance:0},
    {A:97,  mass:96.906017,    abundance:0},
    {A:98,  mass:97.905404,    abundance:0},
    {A:100, mass:99.907468,    abundance:0},    ], //42 Mo molybdenum 
  [ {A:98, mass:97.90721,      abundance:0},      ], //43 Tc technetium 
  [ {A:96, mass:95.907589,     abundance:0},
    {A:98, mass:97.90529,      abundance:0},
    {A:99, mass:98.905930,     abundance:0},
    {A:100, mass:99.904211,    abundance:0},
    {A:101, mass:100.905573,   abundance:0},
    {A:102, mass:101.904340,   abundance:0},
    {A:104, mass:103.90543,    abundance:0},    ], //44 Ru ruthenium
  [ {A:103, mass:102.90549,    abundance:0},    ], //45 Rh rhodium
  [ {A:102, mass:101.905632,   abundance:0},
    {A:104, mass:103.904030,   abundance:0},
    {A:105, mass:104.905079,   abundance:0},
    {A:106, mass:105.903480,   abundance:0},
    {A:108, mass:107.903892,   abundance:0},
    {A:110, mass:109.905173,   abundance:0},   ], //46 Pd palladium
  [ {A:107, mass:106.90509,    abundance:0},
    {A:109, mass:108.904756,   abundance:0},   ], //47 Ag silver
  [ {A:106, mass:105.906460,   abundance:0},
    {A:108, mass:107.904184,   abundance:0},
    {A:110, mass:109.903008,   abundance:0},
    {A:111, mass:110.904184,   abundance:0},
    {A:112, mass:111.902764,   abundance:0},
    {A:113, mass:112.904408,   abundance:0},
    {A:114, mass:113.903365,   abundance:0},
    {A:116, mass:115.904763,   abundance:0},   ], //48 Cd cadmium
  [ {A:113, mass:112.904060,   abundance:0},
    {A:115, mass:114.90387877, abundance:0}, ], //49 In indium
  [ {A:112, mass:111.904825,   abundance:0},
    {A:114, mass:113.9027801,  abundance:0},
    {A:115, mass:114.9033447,  abundance:0},
    {A:116, mass:115.9017428,  abundance:0},
    {A:117, mass:116.902954,   abundance:0},
    {A:118, mass:117.901607,   abundance:0},
    {A:119, mass:118.903311,   abundance:0},
    {A:120, mass:119.902202,   abundance:0},
    {A:122, mass:121.90344,    abundance:0},
    {A:124, mass:123.905277,   abundance:0},   ], //50 Sn tin
  [ {A:121, mass:120.90381,    abundance:0},
    {A:123, mass:122.90421,    abundance:0},    ], //51 Sb antimony
  [ {A:120, mass:119.90406,    abundance:0},
    {A:122, mass:121.90304,    abundance:0},
    {A:123, mass:122.90427,    abundance:0},
    {A:124, mass:123.90282,    abundance:0},
    {A:125, mass:124.90443,    abundance:0},
    {A:126, mass:125.90331,    abundance:0},
    {A:128, mass:127.904461,   abundance:0},
    {A:130, mass:129.90622275, abundance:0}, ], //52 Te tellurium
  [ {A:127, mass:126.90447,    abundance:0},    ], //53 I iodine
  [ {A:124, mass:123.90589,    abundance:0},
    {A:126, mass:125.90430,    abundance:0},
    {A:128, mass:127.903531,   abundance:0},
    {A:129, mass:128.90478086, abundance:0},
    {A:130, mass:129.90350935, abundance:0},
    {A:131, mass:130.90508414, abundance:0},
    {A:132, mass:131.90415509, abundance:0},
    {A:134, mass:133.90539303, abundance:0},
    {A:136, mass:135.90721448, abundance:0}, ], //54 Xe xenon
  [ {A:133, mass:132.90545196, abundance:0}, ], //55 Cs caesium
  [ {A:130, mass:129.90632,    abundance:0},
    {A:132, mass:131.905061,   abundance:0},
    {A:134, mass:133.904508,   abundance:0},
    {A:135, mass:134.905689,   abundance:0},
    {A:136, mass:135.904576,   abundance:0},
    {A:137, mass:136.905827,   abundance:0},
    {A:138, mass:137.905247,   abundance:0},   ], //56 Ba barium
  [ {A:138, mass:137.90712,    abundance:0},
    {A:139, mass:138.90636,    abundance:0},    ], //57 La lanthanum
  [ {A:136, mass:135.907129,   abundance:0},
    {A:138, mass:137.90599,    abundance:0},
    {A:140, mass:139.90545,    abundance:0},
    {A:142, mass:141.90925,    abundance:0},    ], //58 Ce cerium
  [ {A:141, mass:140.90766,    abundance:0},    ], //59 Pr praseodymium
  [ {A:142, mass:141.90773,    abundance:0},
    {A:143, mass:142.90982,    abundance:0},
    {A:144, mass:143.91009,    abundance:0},
    {A:145, mass:144.91258,    abundance:0},
    {A:146, mass:145.91312,    abundance:0},
    {A:148, mass:147.91690,    abundance:0},
    {A:150, mass:149.920902,   abundance:0},   ], //60 Nd neodymium
  [ {A:145, mass:144.91276,    abundance:0},    ], //61 Pm promethium
  [ {A:144, mass:143.91201,    abundance:0},
    {A:147, mass:146.91490,    abundance:0},
    {A:148, mass:147.91483,    abundance:0},
    {A:149, mass:148.917191,   abundance:0},
    {A:150, mass:149.917282,   abundance:0},
    {A:152, mass:151.919739,   abundance:0},
    {A:154, mass:153.92222,    abundance:0},    ], //62 Sm samarium
  [ {A:151, mass:150.919857,   abundance:0},
    {A:153, mass:152.921237,   abundance:0},   ], //63 Eu europium
  [ {A:152, mass:151.919799,   abundance:0},
    {A:154, mass:153.920873,   abundance:0},
    {A:155, mass:154.922630,   abundance:0},
    {A:156, mass:155.922131,   abundance:0},
    {A:157, mass:156.923968,   abundance:0},
    {A:158, mass:157.924112,   abundance:0},
    {A:160, mass:159.927062,   abundance:0},   ], //64 Gd gadolinium
  [ {A:159, mass:158.925354,   abundance:0},   ], //65 Tb terbium
  [ {A:156, mass:155.924284,   abundance:0},
    {A:158, mass:157.92441,    abundance:0},
    {A:160, mass:159.925203,   abundance:0},
    {A:161, mass:160.926939,   abundance:0},
    {A:162, mass:161.926804,   abundance:0},
    {A:163, mass:162.928737,   abundance:0},
    {A:164, mass:163.929181,   abundance:0},   ], //66 Dy dysprosium
  [ {A:165, mass:164.930328,   abundance:0},   ], //67 Ho holmium
  [ {A:162, mass:161.928787,   abundance:0},
    {A:164, mass:163.929207,   abundance:0},
    {A:166, mass:165.930299,   abundance:0},
    {A:167, mass:166.932054,   abundance:0},
    {A:168, mass:167.932376,   abundance:0},
    {A:170, mass:169.93547,    abundance:0},    ], //68 Er erbium
  [ {A:169, mass:168.934218,   abundance:0},   ], //69 Tm thulium
  [ {A:168, mass:167.933889,   abundance:0},
    {A:170, mass:169.93476725, abundance:0},
    {A:171, mass:170.93633152, abundance:0},
    {A:172, mass:171.93638666, abundance:0},
    {A:173, mass:172.93821622, abundance:0},
    {A:174, mass:173.93886755, abundance:0},
    {A:176, mass:175.9425747,  abundance:0},  ], //70 Yb ytterbium
  [ {A:175, mass:174.940777,   abundance:0},
    {A:176, mass:175.942692,   abundance:0},   ], //71 Lu lutetium
  [ {A:174, mass:173.94005,    abundance:0},
    {A:176, mass:175.94141,    abundance:0},
    {A:177, mass:176.94323,    abundance:0},
    {A:178, mass:177.94371,    abundance:0},
    {A:179, mass:178.94583,    abundance:0},
    {A:180, mass:179.94656,    abundance:0},    ], //72 Hf hafnium
  [ {A:180, mass:179.94747,    abundance:0},
    {A:181, mass:180.94800,    abundance:0},    ], //73 Ta tantalum
  [ {A:180, mass:179.94671,    abundance:0},
    {A:182, mass:181.948206,   abundance:0},
    {A:183, mass:182.950224,   abundance:0},
    {A:184, mass:183.950933,   abundance:0},
    {A:186, mass:185.954365,   abundance:0},   ], //74 W tungsten
  [ {A:185, mass:184.952958,   abundance:0},
    {A:187, mass:186.955752,   abundance:0},   ], //75 Re rhenium
  [ {A:184, mass:183.952493,   abundance:0},
    {A:186, mass:185.953838,   abundance:0},
    {A:187, mass:186.955750,   abundance:0},
    {A:188, mass:187.955837,   abundance:0},
    {A:189, mass:188.958146,   abundance:0},
    {A:190, mass:189.958446,   abundance:0},
    {A:192, mass:191.96148,    abundance:0},    ], //76 Os osmium 
  [ {A:191, mass:190.960591,   abundance:0},
    {A:193, mass:192.962924,   abundance:0},   ], //77 Ir iridium
  [ {A:190, mass:189.959950,   abundance:0},
    {A:192, mass:191.96104,    abundance:0},
    {A:194, mass:193.962683,   abundance:0},
    {A:195, mass:194.964794,   abundance:0},
    {A:196, mass:195.964955,   abundance:0},
    {A:198, mass:197.96790,    abundance:0},    ], //78 Pt platinum
  [ {A:197, mass:196.966570,   abundance:0},   ], //79 Au gold
  [ {A:196, mass:195.96583,    abundance:0},
    {A:198, mass:197.966769,   abundance:0},
    {A:199, mass:198.968281,   abundance:0},
    {A:200, mass:199.968327,   abundance:0},
    {A:201, mass:200.970303,   abundance:0},
    {A:202, mass:201.970644,   abundance:0},
    {A:204, mass:203.973494,   abundance:0},   ], //80 Hg mercury
  [ {A:203, mass:202.972344,   abundance:0},
    {A:205, mass:204.974427,   abundance:0},   ], //81 Tl thallium
  [ {A:204, mass:203.973043,   abundance:0},
    {A:206, mass:205.974465,   abundance:0},
    {A:207, mass:206.975897,   abundance:0},
    {A:208, mass:207.976652,   abundance:0},   ], //82 Pb lead
  [ {A:209, mass:208.98040,    abundance:0},    ], //83 Bi bismuth
  [ {A:230, mass:230.033132,   abundance:0},
    {A:232, mass:232.03805,    abundance:0},    ], //90 Th thorium
  [ {A:231, mass:231.03588,    abundance:0},    ], //91 Pa protactinium
  [ {A:233, mass:233.03963,    abundance:0},
    {A:234, mass:234.040950,   abundance:0},
    {A:235, mass:235.043928,   abundance:0},
    {A:238, mass:238.05079,    abundance:0},    ], //92 U uranium
];

2 He helium
3  0.000002(2) g r
4  0.999 998(2)

3 Li lithium 6 [0.019, 0.078] m
7 [0.922, 0.981]

4 Be beryllium 9  1

5 B boron 10 [0.189, 0.204] m
11 [0.796, 0.811]

6 C carbon 12 [0.9884, 0.9904]
13 [0.0096, 0.0116]

7 N nitrogen 14 [0.995 78, 0.996 63]
15 [0.003 37, 0.004 22]

8 O oxygen 16 [0.997 38, 0.997 76]
17 [0.000 367, 0.000 400]
18 [0.001 87, 0.002 22]

9 F fluorine 19  1

10 Ne neon 20  0.9048(3) g m
21  0.0027(1)
22  0.0925(3)

11 Na sodium 23  1

12 Mg magnesium 24 [0.7888, 0.7905]
25 [0.099 88, 0.100 34]
26 [0.1096, 0.1109]

13 Al aluminium 27  1

14 Si silicon 28 [0.921 91, 0.923 18]
29 [0.046 45, 0.046 99]
30 [0.030 37, 0.031 10]

15 P phosphorus 31  1

16 S sulfur 32 [0.9441, 0.9529]
33 [0.007 29, 0.007 97]
34 [0.0396, 0.0477]
36 [0.000 129, 0.000 187]

17 Cl chlorine 35 [0.755, 0.761] m
37 [0.239, 0.245]

18 Ar argon 36 [0.0000, 0.0207] g r
38 [0.000, 0.043]
40 [0.936, 1.000]

19 K potassium 39  0.932 581(44)
40  0.000 117(1)
41  0.067 302(44)

20 Ca calcium 40  0.969 41(156) g
42  0.006 47(23)
43  0.001 35(10)
44  0.020 86(110)
46  0.000 04(3)
48  0.001 87(21)

21 Sc scandium 45  1

22 Ti titanium 46  0.0825(3)
47  0.0744(2)
48  0.7372(3)
49  0.0541(2)
50  0.0518(2)

23 V vanadium 50  0.002 50(10)
51  0.997 50(10)

24 Cr chromium 50  0.043 45(13)
52  0.837 89(18)
53  0.095 01(17)
54  0.023 65(7)

25 Mn manganese 55  1

26 Fe iron 54  0.058 45(105)
56  0.917 54(106)
57  0.021 19(29)
58  0.002 82(12)

27 Co cobalt 59  1

28 Ni nickel 58  0.680 769(190) r
60  0.262 231(150)
61  0.011 399(13)
62  0.036 345(40)
64  0.009 256(19)

29 Cu copper 63  0.6915(15) r
65  0.3085(15)

30 Zn zinc 64  0.4917(75) r
66  0.2773(98)
67  0.0404(16)
68  0.1845(63)
70  0.0061(10)

31 Ga gallium 69  0.601 08(50)
71  0.398 92(50)

32 Ge germanium 70  0.2052(19)
72  0.2745(15)
73  0.0776(8)
74  0.3652(12)
76  0.0775(12)

33 As arsenic 75  1

34 Se selenium 74  0.0086(3) r
76  0.0923(7)
77  0.0760(7)
78  0.2369(22)
80  0.4980(36)
82  0.0882(15)

35 Br bromine 79 [0.505, 0.508]
81 [0.492, 0.495]

36 Kr krypton 78  0.003 55(3) g m
80  0.022 86(10)
82  0.115 93(31)
83  0.115 00(19)
84  0.569 87(15)
86  0.172 79(41)

37 Rb rubidium 85  0.7217(2) g
87  0.2783(2)

38 Sr strontium 84  0.0056(2) g r
86  0.0986(20)
87  0.0700(20)
88  0.8258(35)

39 Y yttrium 89  1

40 Zr zirconium 90  0.5145(4) g
91  0.1122(5)
92  0.1715(3)
94  0.1738(4)
96  0.0280(2)

41 Nb niobium 93  1

42 Mo molybdenum 92  0.146 49(106) g
94  0.091 87(33)
95  0.158 73(30)
96  0.166 73(8)
97  0.095 82(15)
98  0.242 92(80)
100  0.097 44(65)

43 Tc technetium [97] -

44 Ru ruthenium 96  0.0554(14) g
98  0.0187(3)
99  0.1276(14)
100  0.1260(7)
101  0.1706(2)
102  0.3155(14)
104  0.1862(27)

45 Rh rhodium 103  1

46 Pd palladium 102  0.0102(1) g
104  0.1114(8)
105  0.2233(8)
106  0.2733(3)
108  0.2646(9)
110  0.1172(9)

47 Ag silver 107  0.518 39(8) g
109  0.481 61(8)

48 Cd cadmium 106  0.012 45(22) g
108  0.008 88(11)
110  0.124 70(61)
111  0.127 95(12)
112  0.241 09(7)
113  0.122 27(7)
114  0.287 54(81)
116  0.075 12(54)

49 In indium 113  0.042 81(52)
115  0.957 19(52)

50 Sn tin 112  0.0097(1) g
114  0.0066(1)
115  0.0034(1)
116  0.1454(9)
117  0.0768(7)
118  0.2422(9)
119  0.0859(4)
120  0.3258(9)
122  0.0463(3)
124  0.0579(5)

51 Sb antimony 121  0.5721(5) g
123  0.4279(5)

52 Te tellurium 120  0.0009(1) g
122  0.0255(12)
123  0.0089(3)
124  0.0474(14)
125  0.0707(15)
126  0.1884(25)
128  0.3174(8)
130  0.3408(62)

53 I iodine 127  1

54 Xe xenon 124  0.000 95(5) g m
126  0.000 89(3)
128  0.019 10(13)
129  0.264 01(138)
130  0.040 71(22)
131  0.212 32(51)
132  0.269 09(55)
134  0.104 36(35)
136  0.088 57(72)

55 Cs caesium 133  1

56 Ba barium 130  0.0011(1)
132  0.0010(1)
134  0.0242(15)
135  0.0659(10)
136  0.0785(24)
137  0.1123(23)
138  0.7170(29)

57 La lanthanum 138  0.000 8881(71) g
139  0.999 1119(71)

58 Ce cerium 136  0.001 86(2) g
138  0.002 51(2)
140  0.884 49(51)
142  0.111 14(51)

59 Pr praseodymium 141  1

60 Nd neodymium 142  0.271 53(40) g
143  0.121 73(26)
144  0.237 98(19)
145  0.082 93(12)
146  0.171 89(32)
148  0.057 56(21)
150  0.056 38(28)

61 Pm promethium [145]  -

62 Sm samarium 144  0.0308(4) g
147  0.1500(14)
148  0.1125(9)
149  0.1382(10)
150  0.0737(9)
152  0.2674(9)
154  0.2274(14)

63 Eu europium 151  0.4781(6) g
153  0.5219(6)

64 Gd gadolinium 152  0.0020(3) g
154  0.0218(2)
155  0.1480(9)
156  0.2047(3)
157  0.1565(4)
158  0.2484(8)
160  0.2186(3)

65 Tb terbium 159  1

66 Dy dysprosium 156  0.000 56(3) g
158  0.000 95(3)
160  0.023 29(18)
161  0.188 89(42)
162  0.254 75(36)
163  0.248 96(42)
164  0.282 60(54)

67 Ho holmium 165  1

68 Er erbium 162  0.001 39(5) g
164  0.016 01(3)
166  0.335 03(36)
167  0.228 69(9)
168  0.269 78(18)
170  0.149 10(36)

69 Tm thulium 169  1

70 Yb ytterbium 168  0.001 26(1) g
170  0.030 23(2)
171  0.142 16(7)
172  0.217 54(10)
173  0.160 98(9)
174  0.318 96(26)
176  0.128 87(30)

71 Lu lutetium 175  0.974 01(13) g
176  0.025 99(13)

72 Hf hafnium 174  0.0016(12)
176  0.0526(70)
177  0.1860(16)
178  0.2728(28)
179  0.1362(11)
180  0.3508(33)

73 Ta tantalum 180  0.000 1176(23)
181  0.999 8824(23)

74 W tungsten 180  0.0012(1)
182  0.2650(16)
183  0.1431(4)
184  0.3064(2)
186  0.2843(19)

75 Re rhenium 185  0.3740(5)
187  0.6260(5)

76 Os osmium 184  0.0002(2) g
186  0.0159(64)
187  0.0196(17)
188  0.1324(27)
189  0.1615(23)
190  0.2626(20)
192  0.4078(32)

77 Ir iridium 191  0.3723(9)
193  0.6277(9)

78 Pt platinum 190  0.000 12(2)
192  0.007 82(24)
194  0.328 64(410)
195  0.337 75(240)
196  0.252 11(340)
198  0.073 56(130)

79 Au gold 197  1

80 Hg mercury 196  0.0015(1)
198  0.1004(3)
199  0.1694(12)
200  0.2314(9)
201  0.1317(9)
202  0.2974(13)
204  0.0682(4)

81 Tl thallium 203 [0.2944, 0.2959]
205 [0.7041, 0.7056]

82 Pb lead 204  0.014(6) g r
206  0.241(30)
207  0.221(50)
208  0.524(70)

83 Bi bismuth 209  1

84 Po polonium [209]  -

85 At astatine [210]  -

86 Rn radon [222]  -

87 Fr francium [223]  -

88 Ra radium [226]  -

89 Ac actinium [227]  -

90 Th thorium 230  0.0002(2)
232  0.9998(2)

91 Pa protactinium 231  1

92 U uranium 234  0.000 054(5) g m
235  0.007 204(6)
238  0.992 742(10)
