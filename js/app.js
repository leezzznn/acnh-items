// 鍔ㄦ．鐗╁搧鏌ヨ灏忓姪鎵?v6 - 绾鎴风鐗?
(function() {
"use strict";
console.log("鍔ㄦ．鐗╁搧鍔╂墜 - v6");

// ===== SHEET NAME MAP =====
var sheetCnMap = {
    "Accessories":"楗板搧","Art":"鑹烘湳鍝?","Bags":"鍖呭寘","Bottoms":"瑁ゅ瓙","Clothing Other":"鍏朵粬鏈嶈",
    "Dress-Up":"杩炶。瑁?","Fencing":"鏍呮爮","Floors":"鍦版澘","Fossils":"鍖栫煶","Headwear":"澶撮グ",
    "Housewares":"瀹跺叿","Miscellaneous":"鏉傞」","Music":"闊充箰","Other":"鍏朵粬","Photos":"鐓х墖",
    "Posters":"娴锋姤","Rugs":"鍦版","Shoes":"闉嬪瓙","Socks":"琚滃瓙","Tools":"宸ュ叿","Tops":"涓婅。",
    "Umbrellas":"闆ㄤ紴","Wall-mounted":"澹佹寕","Wallpaper":"澹佺焊"
};

// ===== CONSTANTS =====
var MAX_BACKPACK = 40;
// 淇 2026-07-16: 鏀圭敤鏈湴鍥剧墖锛坅cnhcdn 鍏ㄩ儴 404锛?
var ACNHCDN = "img/";
var LOCAL_IMG = "img/";
var VILLAGER_IMG_DIR = "img/";
var IMG_MAP = {}; // hex(鏃?x澶у啓) -> filename

// ===== RECIPE LIST =====
var RECIPE_LIST = [[6,2596],[9,1263],[10,3068],[13,1429],[14,1799],[15,1913],[16,880],[17,2560],[18,2605],[19,3082],[20,3083],[21,3084],[22,2376],[23,1559],[24,1561],[26,1565],[29,2822],[30,1753],[32,808],[33,739],[34,1430],[35,3191],[36,2754],[37,2559],[38,3206],[41,333],[42,331],[43,88],[44,383],[45,669],[46,710],[48,729],[49,730],[51,805],[55,665],[56,975],[57,1103],[58,1157],[59,1170],[60,1189],[61,1557],[62,1558],[63,1625],[64,1626],[65,1627],[66,1823],[77,2319],[78,2329],[79,2553],[80,2586],[81,3065],[82,3122],[83,3193],[84,3194],[85,3195],[86,3196],[87,3200],[89,3205],[90,3208],[91,3270],[92,3271],[94,3275],[99,3080],[100,3402],[101,3403],[102,83],[103,343],[104,3398],[105,3397],[107,2615],[110,4044],[111,4043],[112,4042],[113,4035],[114,4036],[115,4037],[116,4038],[117,4039],[118,4040],[119,4041],[120,4025],[121,4027],[122,3559],[123,3562],[124,3509],[125,3943],[126,3560],[128,3563],[130,3772],[131,3810],[132,3774],[133,3473],[136,3808],[138,3806],[139,3805],[140,3499],[141,3501],[142,3503],[143,3505],[145,3504],[146,3497],[147,3498],[148,3500],[149,3502],[151,3558],[152,3658],[153,3554],[154,3556],[155,3551],[157,3553],[158,3555],[159,3557],[160,2558],[161,4011],[162,4012],[163,3684],[164,80],[165,1266],[166,3692],[167,3675],[168,3449],[169,3445],[170,3438],[171,682],[172,3436],[173,3490],[174,3683],[175,3977],[176,3978],[177,3979],[178,3980],[180,3982],[181,3983],[182,3984],[183,4703],[184,3976],[185,3975],[186,4546],[187,4127],[188,4128],[189,4134],[190,132],[191,4549],[192,4073],[193,4124],[194,4279],[195,4393],[196,1759],[197,1861],[199,4104],[200,5150],[201,3439],[202,4090],[203,4066],[204,3406],[205,4083],[206,4084],[207,4086],[208,4087],[209,4088],[210,4089],[212,4092],[213,3588],[214,3785],[215,1058],[216,865],[217,722],[218,5320],[219,4376],[220,4708],[221,4726],[222,4375],[223,4378],[224,3396],[225,4727],[226,4377],[227,4293],[228,5436],[229,5437],[230,5466],[231,5467],[232,5468],[233,1447],[234,1054],[235,1439],[236,1445],[237,5096],[238,5097],[239,5098],[240,5099],[241,5100],[242,5101],[243,5102],[244,5103],[245,5104],[246,5105],[247,5106],[248,5107],[249,5108],[250,5109],[251,5110],[252,5111],[253,5112],[254,5113],[255,5114],[256,5115],[257,5116],[258,5117],[259,5118],[260,5119],[261,4682],[262,3472],[263,1241],[264,2578],[266,5212],[267,4357],[268,4350],[269,4349],[271,2100],[273,3966],[274,3991],[277,144],[278,5635],[279,5636],[280,2379],[281,2099],[282,2377],[283,5784],[284,3618],[285,5856],[286,5528],[288,5516],[289,5253],[290,4905],[291,5230],[292,5510],[293,5505],[294,5500],[295,5498],[296,4865],[298,4820],[299,4894],[300,4853],[301,5229],[302,5662],[303,4915],[304,4916],[305,4917],[306,4918],[307,4919],[308,5164],[309,4858],[310,4859],[311,4860],[312,4804],[313,4805],[314,4844],[315,4840],[316,4838],[317,4837],[318,5216],[319,4911],[320,4904],[321,4947],[322,4833],[323,4855],[324,4813],[325,4801],[326,5457],[359,677],[360,5670],[361,5751],[362,5771],[364,5337],[365,3561],[366,5956],[367,5954],[368,5955],[370,5957],[371,5959],[372,891],[373,1442],[374,3689],[375,6030],[376,5958],[377,5960],[378,3340],[379,1443],[380,5962],[381,1444],[382,3344],[383,4309],[384,5961],[385,5977],[386,1440],[387,5543],[388,4067],[389,2326],[390,1797],[391,3773],[392,4074],[393,4075],[394,3819],[395,4078],[396,3775],[397,4093],[398,5517],[399,5963],[400,4107],[401,4108],[402,5970],[403,1652],[404,4125],[405,4130],[406,4131],[407,5964],[408,3776],[409,1441],[410,1111],[411,5975],[412,5973],[413,1032],[414,6075],[415,6078],[416,6079],[417,6080],[418,6032],[419,6031],[420,5976],[421,5978],[422,6033],[423,6081],[424,5979],[425,6830],[426,6832],[427,6831],[429,6826],[430,6827],[432,6829],[433,6818],[434,5676],[435,5931],[436,5972],[437,3992],[438,5641],[440,5765],[441,5746],[442,5768],[443,5749],[444,5764],[445,5745],[446,5766],[447,5772],[448,5747],[449,5820],[450,5767],[451,5748],[452,5769],[453,5750],[454,5770],[455,5677],[456,6840],[457,3229],[458,7211],[459,7377],[460,7378],[461,5166],[462,1750],[463,4034],[464,5719],[465,5718],[466,5716],[467,4751],[468,4752],[469,5717],[470,5515],[471,5223],[472,4999],[473,4986],[474,4797],[475,5021],[476,4990],[477,5270],[478,4968],[479,7204],[480,7205],[482,5269],[483,4989],[484,7187],[485,4964],[486,5236],[487,4979],[488,7186],[489,4960],[490,4008],[491,7134],[492,7133],[493,7132],[494,7142],[495,7231],[496,7160],[497,7161],[498,7163],[500,7159],[501,7230],[502,7137],[503,7233],[504,7045],[505,7232],[506,7234],[507,7235],[508,7805],[509,7788],[510,7867],[511,7409],[512,7408],[513,7393],[514,7253],[515,7236],[516,7237],[518,3446],[519,7390],[520,7452],[521,7048],[523,2544],[524,5083],[525,5084],[526,5085],[527,5091],[528,5092],[529,5093],[530,5094],[531,5095],[532,7584],[533,7585],[534,7586],[535,7587],[536,7588],[537,7589],[538,7590],[539,7591],[540,7592],[541,7169],[542,7327],[543,7328],[544,7330],[545,7331],[546,7332],[548,4351],[549,4352],[550,4354],[551,4355],[552,4356],[553,4358],[555,5206],[556,5207],[557,5208],[559,5210],[561,5213],[564,5268],[565,5030],[566,4590],[567,2777],[568,7317],[569,8825],[570,7795],[571,8419],[572,8826],[573,9642],[574,7258],[575,7259],[576,7261],[577,1504],[578,9814],[579,7454],[580,7281],[582,530],[583,531],[584,532],[585,533],[586,1023],[587,4269],[588,4270],[589,4271],[590,10742],[591,10743],[592,3802],[593,3580],[594,1509],[595,11261],[596,3617],[598,7247],[599,8031],[600,7535],[601,5941],[602,11260],[603,4333],[604,5291],[605,8907],[606,7254],[607,5143],[608,7527],[609,3410],[610,3411],[611,3412],[612,9838],[613,9873],[614,9949],[615,9837],[616,9872],[617,9950],[618,9839],[619,9874],[620,9947],[621,9836],[622,9871],[623,9948],[624,5275],[625,6912],[626,3288],[627,7489],[628,9862],[629,9945],[630,7490],[631,7491],[632,7492],[633,7493],[634,7494],[635,7291],[636,7511],[637,8609],[638,7498],[640,4588],[641,5334],[642,5472],[643,5524],[644,5346],[645,7506],[646,12206],[647,12208],[648,7174],[649,5056],[650,12230],[651,11943],[652,11941],[653,676],[654,11942],[655,1120],[656,11711],[657,11712],[658,8179],[659,8533],[660,8574],[661,8578],[662,8660],[663,9617],[664,12326],[665,5508],[666,5661],[667,7239],[668,7362],[669,4970],[670,12332],[671,11113],[672,11114],[673,12439],[674,12449],[675,12455],[676,12440],[677,12450],[678,12456],[679,12441],[680,12451],[681,12457],[682,12442],[683,12452],[684,12458],[685,12443],[686,12453],[687,12459],[688,12444],[689,12454],[690,12460],[691,12446],[692,12448],[693,12445],[694,12447],[695,12398],[696,12412],[697,12413],[698,12414],[699,12415],[700,12417],[701,12418],[702,12419],[703,12420],[704,12421],[705,12436],[706,12437],[707,12517],[708,5231],[709,7546],[710,12423],[711,12578],[712,12630],[713,12758],[714,12894],[715,12695],[716,5607],[717,12552],[718,12553],[719,12554],[720,12555],[721,12556],[722,12557],[723,12558],[724,12559],[725,12560],[726,12561],[727,12562],[728,12563],[729,12566],[730,12568],[732,12951],[733,12949],[734,13222],[735,13223],[736,13237],[737,13275],[738,13608],[740,13447],[741,13448],[742,13449],[743,13450],[745,13453],[746,7544],[747,13818],[748,13819],[749,13820],[750,13244],[751,13792],[752,13603],[753,12681],[755,3548],[757,12217],[758,14019],[759,13526],[760,13530],[761,13534],[762,14017],[763,14018],[764,13906],[765,13874],[766,13875],[768,13877],[769,13878],[770,13879],[771,13880],[772,13881],[773,13019],[774,14239],[776,14278],[777,13895],[779,13897],[780,13898],[783,13901],[784,13902],[792,14308],[794,14310],[797,14313],[803,14322],[805,14324],[811,14330],[813,14332],[814,14333],[818,14337],[819,14470],[820,14197],[821,14202],[822,14248],[823,14249],[824,1573],[825,14487],[826,14489],[827,14207],[828,14209],[829,14206],[830,14192],[831,14596],[832,14597],[833,14598],[834,14599],[835,14600],[836,14601],[837,14602],[838,12335],[839,12351],[841,14187],[842,14188],[844,13931],[845,13932],[846,13933],[847,13934],[848,13935],[849,13936],[850,13937],[851,13938],[852,13939],[853,13940],[854,13941],[855,13942],[856,13943],[857,13944],[858,13945],[859,13946],[860,13947],[861,13948],[862,13949],[863,13950],[864,13951],[865,13952],[866,13953],[867,13957],[868,13959],[869,13960],[870,13961],[871,13962],[872,13963],[873,13964],[874,13965],[875,13966],[876,13967],[877,13968],[878,13969],[879,13970],[880,13971],[881,13972],[882,13973],[883,13974],[884,13975],[885,13976],[886,13977],[887,13978],[888,13979],[889,13980],[890,13981],[891,13982],[892,13983],[893,13984],[894,13985],[895,13986],[896,13987],[897,13988],[898,13989],[899,13990],[900,13991],[901,13992],[902,13993],[903,13994],[904,13995],[905,13996],[906,13997],[907,13998],[908,13999],[909,14000],[910,14001],[911,14002],[912,14003],[913,14010],[914,14048],[915,14104],[916,14105],[917,14109],[918,14110],[919,14111],[920,14112],[921,14113],[922,14114],[923,14115],[924,14116],[925,14117],[926,14118],[927,14119],[928,14120],[929,14121],[930,14122],[931,14123],[932,14124],[933,14125],[934,14126],[935,14127],[936,14128],[937,14129],[938,14130],[939,14131],[940,14132],[941,14161],[942,14162],[943,14163],[944,14164],[945,14165],[946,14166],[947,14167],[948,14168],[949,14169],[950,14170],[951,14171],[952,14172],[953,14173],[954,14174],[955,14175],[956,14176],[957,14177],[958,14178],[959,14179],[960,14180],[961,14181],[962,14182],[963,14183],[964,14185],[965,14186],[966,14465],[967,14466],[968,14696],[969,14697],[970,14698],[971,13327],[972,13328],[973,13329],[974,13330],[975,12822],[976,12823],[977,12824],[978,12813],[979,12390],[980,14550],[981,14551],[982,14542],[983,12222],[984,12329],[985,12330],[986,12379],[987,12399],[988,12400],[989,12521],[990,13662],[991,14193],[992,14205],[993,14210],[994,14211],[995,14212],[996,14213],[997,14214],[998,14215],[999,14216],[1000,14208],[1001,14604],[1002,14199],[1003,14198],[1004,14201],[1005,14257],[1006,14259],[1007,14755],[1008,14756],[1009,14757],[1010,14758],[1011,14759],[1012,14728],[1013,14594],[1014,14593],[1015,14591],[1016,14552],[1017,14613],[1018,14565],[1019,14478],[1020,14479],[1021,14484],[1022,14485],[1023,14486],[1024,14488],[1025,14490],[1026,14491],[1027,14492],[1028,14481],[1029,14482],[1030,14483],[1031,14480],[1032,14533],[1033,12840],[1034,12838],[1035,12835],[1036,14645],[1037,14644],[1038,14716],[1039,14714],[1040,13496],[1041,14831],[1042,14592],[1043,14549],[1044,13572],[1045,14882],[1046,13509],[1047,13511],[1048,13520],[1049,12611],[1050,7154],[1051,12350],[1052,12706],[1053,13696],[1054,12349],[1055,13210],[1056,13606],[1057,13220],[1058,13580],[1059,12709],[1060,14887],[1061,13666],[1062,922],[1063,743],[1067,13573],[1068,13574],[1069,13751],[1070,13588],[1072,13161]];
var RECIPE_MAP = {};
// ===== RECIPE MAP =====
RECIPE_LIST.forEach(function(r){ RECIPE_MAP[r[1]] = r[0].toString(16).toLowerCase().padStart(3,"0"); });

// ===== VARIATION TRANSLATION MAP =====
var VARIATION_ZH = {
    "Cute": "鍙埍",
    "Cool": "閰锋劅",
    "Colorful": "褰╄壊",
    "Natural": "鑷劧鑹?",
    "Pastel": "绮夊僵",
    "Pop": "娴佽",
    "鈫?: "宸︾澶?,
    "鈫?鈫?: "宸﹀彸绠ご"",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "Aqua": "姘磋壊",
    "Aqua roof": "姘磋壊灞嬮《",
    "Ash": "鐏扮儸",
    "Ash brown": "鐏版鑹?",
    "Ash green": "鐏扮豢鑹?",
    "Avocado": "鐗涙补鏋滆壊",
    "Azalea": "鏉滈箖鑺?",
    "Baby blue": "濠村効钃?",
    "Baby gray": "濠村効鐏?",
    "Baby green": "濠村効缁?",
    "Baby mint": "濠村効钖勮嵎",
    "Baby orange": "濠村効姗?",
    "Baby pink": "濠村効绮?",
    "Baby purple": "濠村効绱?",
    "Baby yellow": "濠村効榛?",
    "Bamboo": "绔硅壊",
    "Beige & green": "绫宠壊缁?",
    "Beige & navy": "绫宠壊钘忛潚",
    "Beige & white": "绫崇櫧",
    "Berry red": "娴嗘灉绾?",
    "Black & blue": "榛戣摑",
    "Black & gray": "榛戠伆",
    "Black & orange": "榛戞",
    "Black & red": "榛戠孩",
    "Black & silver": "榛戦摱",
    "Black & white": "榛戠櫧",
    "Black & yellow": "榛戦粍",
    "Black bass": "榛戦矆楸?",
    "Black cherry": "榛戞ū妗?",
    "Black granite": "榛戣姳宀楀博",
    "Black marble": "榛戝ぇ鐞嗙煶",
    "Black necktie": "榛戦甯?",
    "Black ribbons": "榛戜笣甯?",
    "Black roof": "榛戝眿椤?",
    "Black sesame": "榛戣姖楹?",
    "Black wood & tile": "榛戞湪鐡风爾",
    "Black, coral & pink": "榛戠強鐟氱矇",
    "Blood orange": "琛€姗?",
    "Blooming": "鐩涘紑",
    "Blue & black": "钃濋粦",
    "Blue & gray": "钃濈伆",
    "Blue & green": "钃濈豢",
    "Blue & orange": "钃濇",
    "Blue & purple": "钃濈传",
    "Blue & red": "钃濈孩",
    "Blue & white": "钃濈櫧",
    "Blue & yellow": "钃濋粍",
    "Blue cat": "钃濈尗",
    "Blue marlin": "钃濇灙楸?",
    "Blue ribbons": "钃濅笣甯?",
    "Blue roof": "钃濆眿椤?",
    "Blue with flowers": "钃濊姳",
    "Blue with yellow ribbon": "钃濋粍涓濆甫",
    "Blueberries": "钃濊帗",
    "Blue-gray": "钃濈伆",
    "Blue-striped necktie": "钃濇潯绾归甯?",
    "Boat": "鑸?",
    "Boating stripes": "鍒掕埞鏉＄汗",
    "Borscht": "缃楀畫姹?",
    "Bouquet": "鑺辨潫",
    "Brainstorming meeting": "澶磋剳椋庢毚",
    "Brick house": "鐮栨埧",
    "Brown & black": "妫曢粦",
    "Brown & white": "妫曠櫧",
    "Brown granite": "妫曡姳宀楀博",
    "Brown wood": "妫曟湪",
    "Cake": "铔嬬硶",
    "Camel": "椹艰壊",
    "Camphor-tree wood": "妯熸湪",
    "Canned fish": "楸肩綈澶?",
    "Canned fruit": "姘存灉缃愬ご",
    "Canned olives": "姗勬缃愬ご",
    "Canned pasta sauce": "鎰忛潰閰辩綈澶?",
    "Canned pet food": "瀹犵墿缃愬ご",
    "Caramel mocha": "鐒︾硸鎽╁崱",
    "Carp": "椴ら奔",
    "Carrot": "鑳¤悵鍗?",
    "Carrots": "鑳¤悵鍗?",
    "Castle": "鍩庡牎",
    "Cat": "鐚?",
    "Caution": "璀﹀憡",
    "Caution stripes": "璀︾ず鏉＄汗",
    "Cherry blossom": "妯辫姳",
    "Cherry blossoms": "妯辫姳",
    "Cherry brown": "妯辨妫?",
    "Cherry wood": "妯辨鏈?",
    "Chestnut": "鏍楀瓙",
    "Chic flowers": "鏃跺皻鑺?",
    "Chic white": "鏃跺皻鐧?",
    "Chick": "灏忛浮",
    "Chicks": "灏忛浮",
    "Choco": "宸у厠鍔?",
    "Chocolate": "宸у厠鍔?",
    "Chocolate buttercream": "宸у厠鍔涘ザ娌?",
    "Chocolate mint": "宸у厠鍔涜杽鑽?",
    "Chocolate swirl": "宸у厠鍔涙棆绾?",
    "Citrus": "鏌戞",
    "Classic camo": "缁忓吀杩峰僵",
    "Clay cake": "绮樺湡铔嬬硶",
    "Clay dinosaur": "绮樺湡鎭愰緳",
    "Club activities": "绀惧洟娲诲姩",
    "Cocoa flavored": "鍙彲鍛?",
    "Colorful cake": "褰╄壊铔嬬硶",
    "Colorful dinosaur": "褰╄壊鎭愰緳",
    "Colorful numbers": "褰╄壊鏁板瓧",
    "Colorful quilt": "褰╄壊琚瓙",
    "Colorful quilt design": "褰╄壊琚瓙鍥炬",
    "Comics": "婕敾",
    "Common pochard": "绾㈠ご娼滈腑",
    "Concrete": "娣峰嚌鍦?",
    "Congee": "绮?",
    "Constellations": "鏄熷骇",
    "Construction ahead": "鍓嶆柟鏂藉伐",
    "Construction warning": "鏂藉伐璀﹀憡",
    "Cool blue": "閰疯摑",
    "Coral pink": "鐝婄憵绮?",
    "Corn soup": "鐜夌背姹?",
    "Cosmo black": "瀹囧畽榛?",
    "Cranes": "楣?",
    "Cream stew": "濂舵补鐐栬彍",
    "Cubes": "绔嬫柟浣?",
    "Curry": "鍜栧柋",
    "Cyan": "闈掕壊",
    "Damaged": "鎹熷潖",
    "Dark": "娣辫壊",
    "Dark blue": "娣辫摑鑹?",
    "Dark brown": "娣辨鑹?",
    "Dark gray": "娣辩伆鑹?",
    "Dark green": "娣辩豢鑹?",
    "Dark red": "娣辩孩鑹?",
    "Dark wood": "娣辫壊鏈?",
    "Deep blue": "娣辫摑鑹?",
    "Deep ocean": "娣辨捣",
    "Deep sea": "娣辨捣",
    "Denim with stripes": "鏉＄汗鐗涗粩",
    "Dinosaur": "鎭愰緳",
    "Dodgeball": "韬查伩鐞?",
    "Dog": "鐙?",
    "Dot": "鍦嗙偣",
    "Double sash": "鍙岃叞甯?",
    "Dragon": "榫?",
    "Dreamy plaid": "姊﹀够鏍煎瓙",
    "Dried bamboo": "骞茬",
    "Duck": "楦瓙",
    "Elegant flowers": "浼橀泤鑺?",
    "Emerald & lime": "缈＄繝闈掓煚",
    "Empty": "绌?",
    "Encyclopedia": "鐧剧鍏ㄤ功",
    "Energetic plaid": "娲诲姏鏍煎瓙",
    "Evergreen": "甯搁潚",
    "Fact-finding meeting": "璋冩煡浼氳",
    "Failed attempt": "澶辫触灏濊瘯",
    "Fairy-tale house": "绔ヨ瘽灞?",
    "Fall harvest": "绉嬫敹",
    "Family": "瀹跺涵",
    "Fanciful quilted pattern": "濂囧够鎷煎竷",
    "Fancy plaid": "绮剧編鏍煎瓙",
    "Field of Flowers": "鑺辩敯",
    "Fire red": "鐏孩",
    "Fish": "楸?",
    "Fishing Spot": "閽撻奔鐐?",
    "Flame orange": "鐏劙姗?",
    "Flowers": "鑺辨湹",
    "Foreign language": "澶栬",
    "Forest print": "妫灄鍗拌姳",
    "Frog": "闈掕洐",
    "Fruits": "姘存灉",
    "Fuchsia": "绱孩鑹?",
    "Garden": "鑺卞洯",
    "Garnet": "鐭虫Υ鐭?",
    "Geometric pattern": "鍑犱綍鍥炬",
    "Gertie": "鏍艰拏",
    "Giant snakehead": "澶?snakehead",
    "Giant trevally": "鐝嶉补",
    "Girl": "濂冲",
    "Gold & silver": "閲戦摱",
    "Gold bars": "閲戞潯",
    "Gold leaf": "閲戝彾",
    "Golden yellow": "閲戦粍鑹?",
    "Goldfish": "閲戦奔",
    "Graffiti": "娑傞甫",
    "Gray & blue": "鐏拌摑",
    "Gray & green": "鐏扮豢",
    "Gray & white": "鐏扮櫧",
    "Gray wood & tile": "鐏版湪鐡风爾",
    "Gray, white & light blue": "鐏扮櫧娴呰摑",
    "Greater scaup": "鏂戣儗娼滈腑",
    "Green & black": "缁块粦",
    "Green & blue": "缁胯摑",
    "Green & navy": "缁胯棌闈?",
    "Green & orange": "缁挎",
    "Green & purple": "缁跨传",
    "Green & red": "缁跨孩",
    "Green & white": "缁跨櫧",
    "Green apple": "闈掕嫻鏋?",
    "Green bamboo": "缁跨",
    "Green curry": "缁垮挅鍠?",
    "Green logo": "缁挎爣蹇?",
    "Green ribbons": "缁夸笣甯?",
    "Green roof": "缁垮眿椤?",
    "Green smoothie": "缁胯壊鍐版矙",
    "Green stripes": "缁挎潯绾?",
    "Green tea": "缁胯尪",
    "Green-striped necktie": "缁挎潯绾归甯?",
    "Greige": "鐏扮背鑹?",
    "Handprints": "鎵嬪嵃",
    "Hawk": "楣?",
    "Hibiscus flowers": "鑺欒搲鑺?",
    "Home": "瀹?",
    "Hot air balloons": "鐑皵鐞?",
    "Hot dog": "鐑嫍",
    "Hot-and-sour soup": "閰歌荆姹?",
    "Hungry gnome": "楗ラタ鍦扮簿",
    "Ice": "鍐?",
    "Ice blue": "鍐拌摑",
    "Ice green": "鍐扮豢",
    "Ice orange": "鍐版",
    "Ice pink": "鍐扮矇",
    "Ice purple": "鍐扮传",
    "Ice yellow": "鍐伴粍",
    "Illustration": "鎻掔敾",
    "In progress": "杩涜涓?",
    "Indigo blue": "闈涜摑",
    "Items": "鐗╁搧",
    "Japanese literature": "鏃ユ湰鏂囧",
    "Ketchup and mustard": "鐣寗閰辫姤鏈?",
    "Kids' game": "鍎跨娓告垙",
    "Kiwifruit": "鐚曠尨妗?",
    "Kyoto in summer": "澶忔棩浜兘",
    "La France": "娉曞浗",
    "Labeled": "鏈夋爣绛?",
    "Laid-back gnome": "鎮犻棽鍦扮簿",
    "Language classroom": "璇█鏁欏",
    "Le Lectier": "Le" Lectier 姊?,
    "Leisure boat": "浼戦棽鑸?",
    "Lemon & white": "鏌犳鐧?",
    "Letter": "淇′欢",
    "Light blue & black": "娴呰摑榛?",
    "Light blue & pink": "娴呰摑绮?",
    "Light blue & red": "娴呰摑绾?",
    "Light blue & salmon pink": "娴呰摑椴戦奔绮?",
    "Light brown & black": "娴呮榛?",
    "Lime & light blue": "闈掓煚娴呰摑",
    "Lime & pink": "闈掓煚绮?",
    "Lime & purple": "闈掓煚绱?",
    "Lime yellow": "闈掓煚榛?",
    "Literature": "鏂囧",
    "Love": "鐖?",
    "Lumberjack": "浼愭湪宸?",
    "M": "M",
    "Magenta": "娲嬬孩",
    "Mallard": "缁垮ご楦?",
    "Mango": "鑺掓灉",
    "Maple": "鏋湪",
    "Marine": "娴锋磱",
    "Marine blue": "娴疯摑",
    "Marine emerald": "娴风俊缈?",
    "Marufukumaru - Bounty": "涓哥涓?璧忛噾",
    "Math": "鏁板",
    "Midnight": "鍗堝",
    "Minestrone": "钄彍姹?",
    "Mixed wood": "娣峰悎鏈?",
    "Monochrome": "鍗曡壊",
    "Monotone": "鍗曡壊璋?",
    "Mosaic tile": "椹禌鍏嬬摲鐮?",
    "Moss green": "鑻旇棑缁?",
    "Mossy": "鑻旇棑",
    "Mossy stone": "鑻旇棑鐭?",
    "Mountain": "灞?",
    "Multicolor": "澶氬僵",
    "Multiplication tables": "涔樻硶琛?",
    "Muslin": "骞崇汗缁嗗竷",
    "Mustard": "鑺ユ湯鑹?",
    "Natural & green": "鑷劧缁?",
    "Natural & red": "鑷劧绾?",
    "Natural & silver": "鑷劧閾?",
    "Natural & white": "鑷劧鐧?",
    "Natural sand": "鑷劧娌?",
    "Navy & blue": "钘忛潚钃?",
    "Navy & gray": "钘忛潚鐏?",
    "Navy & red": "钘忛潚绾?",
    "Navy blue": "钘忚摑鑹?",
    "Navy, light blue & pink": "钘忛潚娴呰摑绮?",
    "Neon blue & neon red": "闇撹櫣钃濈孩",
    "Nintenmaru - Big Catch": "浠诲ぉ涓?澶ф笖",
    "No ads": "鏃犲箍鍛?",
    "No coating": "鏃犳秱灞?",
    "No Entry": "绂佹杩涘叆",
    "No finish": "鏃犻グ闈?",
    "No Parking": "绂佹鍋滆溅",
    "Nostalgia": "鎬€鏃?",
    "Oak": "姗℃湪",
    "Ocean blue": "娴疯摑",
    "Ocean creatures": "娴锋磱鐢熺墿",
    "Ochre": "璧煶",
    "Octopus": "绔犻奔",
    "Off-white": "绫崇櫧",
    "Old": "鏃?",
    "Olive": "姗勬",
    "Ongoing work": "杩涜涓?",
    "Ongoing work - Big bro": "杩涜涓?澶у摜",
    "Ongoing work - Little bro": "杩涜涓?灏忓紵",
    "Orange & black": "姗欓粦",
    "Orange & blue": "姗欒摑",
    "Orange & red": "姗欑孩",
    "Orange & white": "姗欑櫧",
    "Orange wood": "姗欐湪",
    "Orange, yellow & black": "姗欓粍榛?",
    "Oranges": "姗欏瓙",
    "Orange-yellow": "姗欓粍",
    "Ordinary mushroom": "鏅€氳槕鑿?",
    "Oribe-style": "缁囬儴椋庢牸",
    "Pacific Ocean": "澶钩娲?",
    "Painter's palette": "璋冭壊鏉?",
    "Pale blue": "娣¤摑",
    "Pale green": "娣＄豢",
    "Pale orange": "娣℃",
    "Pale sky": "娣″ぉ钃?",
    "Parrot green": "楣﹂箟缁?",
    "Passion": "鐑儏",
    "Passionate gnome": "鐑儏鐨勫湴绮?",
    "Pasta": "鎰忛潰",
    "Peacock blue": "瀛旈泙钃?",
    "Pearl": "鐝嶇彔",
    "Pearl white": "鐝嶇彔鐧?",
    "Pears": "姊?",
    "Periodic table": "鍏冪礌鍛ㄦ湡琛?",
    "Pine": "鏉炬湪",
    "Pink & purple": "绮夌传",
    "Pink & yellow": "绮夐粍",
    "Pink with green ribbon": "绮夌豢涓濆甫",
    "Pink wood": "绮夋湪",
    "Pink-white": "绮夌櫧",
    "Pippa": "鐨笗",
    "Pirate ship": "娴风洍鑸?",
    "Pizza": "鎶惃",
    "Playtime": "娓告垙鏃堕棿",
    "Plum": "鏉庡瓙",
    "Pop flowers": "娴佽鑺?",
    "Pop pattern": "娴佽鍥炬",
    "Powder white": "绮夌櫧",
    "Puppers": "灏忕嫍",
    "Purple & green": "绱豢",
    "Purple & orange": "绱",
    "Purple & pink": "绱矇",
    "Purple & yellow": "绱粍",
    "Purple sweet potato": "绱柉",
    "Purple-striped necktie": "绱潯绾归甯?",
    "Quilted animals": "鎷煎竷鍔ㄧ墿",
    "Quilted pattern": "鎷煎竷鍥炬",
    "Ratatouille": "鐐栬彍",
    "Rattan": "钘ゆ潯",
    "Rebel gnome": "鍙涢€嗗湴绮?",
    "Red & black": "绾㈤粦",
    "Red & blue": "绾㈣摑",
    "Red & green": "绾㈢豢",
    "Red & light blue": "绾㈡祬钃?",
    "Red & orange": "绾㈡",
    "Red & pink": "绾㈢矇",
    "Red & white": "绾㈢櫧",
    "Red & yellow": "绾㈤粍",
    "Red apple": "绾㈣嫻鏋?",
    "Red brick": "绾㈢爾",
    "Red exit": "绾㈠嚭鍙?",
    "Red logo": "绾㈡爣蹇?",
    "Red mushroom": "绾㈣槕鑿?",
    "Red necktie": "绾㈤甯?",
    "Red ribbons": "绾笣甯?",
    "Red roof": "绾㈠眿椤?",
    "Red snapper": "绾㈤卜楸?",
    "Red stripes": "绾㈡潯绾?",
    "Red with hearts": "绾㈠績",
    "Red wood": "绾㈡湪",
    "Red, white & blue": "绾㈢櫧钃?",
    "Reddish brown": "绾㈡",
    "Red-striped necktie": "绾㈡潯绾归甯?",
    "Reference": "鍙傝€?",
    "Reflective stripes": "鍙嶅厜鏉＄汗",
    "Reliable gnome": "鍙潬鍦扮簿",
    "Resident Services": "灞呮皯鏈嶅姟",
    "Retro ride": "澶嶅彜楠戣",
    "Ring": "鎴掓寚",
    "Roary": "缃楅噷",
    "Roasting marshmallows": "鐑ゆ鑺辩硸",
    "Rose gold": "鐜懓閲?",
    "Rose pink": "鐜懓绮?",
    "Rose red & navy": "鐜懓绾㈣棌闈?",
    "Royal": "鐨囧",
    "Royal coach": "鐨囧椹溅",
    "Ruby red": "绾㈠疂鐭崇孩",
    "Rusted iron": "閿堥搧",
    "Sales meeting": "閿€鍞細璁?",
    "Sandalwood": "妾€棣欐湪",
    "Sash": "鑵板甫",
    "Savannah": "鑽夊師",
    "Saxon blue": "钀ㄥ厠妫摑",
    "Schedule": "鏃ョ▼",
    "Sepia": "娣辫鑹?",
    "Shabby": "鐮存棫",
    "Sheep": "缁电緤",
    "Shocking pink": "" shocking 绮?,
    "Shop": "鍟嗗簵",
    "Signature": "绛惧悕",
    "Silver & blue": "閾惰摑",
    "Silver & green": "閾剁豢",
    "Simple house": "绠€鍗曟埧灞?",
    "Simple path game": "绠€鍗曡矾寰勬父鎴?",
    "Simple pattern": "绠€鍗曞浘妗?",
    "Sky blue": "澶╄摑",
    "Sleepy gnome": "鐬岀潯鍦扮簿",
    "Slippery": "婊?",
    "Smoke-cured bamboo": "鐑熺啅绔?",
    "Snow": "闆?",
    "Snow camouflage": "闆湴杩峰僵",
    "Soccer ball": "瓒崇悆",
    "Soda": "鑻忔墦",
    "Southwestern flair": "瑗垮崡椋庢儏",
    "Souvenir": "绾康鍝?",
    "Space silver": "澶┖閾?",
    "Splatter up": "椋炴簠",
    "Sponsor": "璧炲姪鍟?",
    "Sports": "杩愬姩",
    "Spot-billed": "鏂戝槾",
    "Spotted": "鏂戠偣",
    "Sprightly gnome": "娲绘臣鍦扮簿",
    "Spring blooming": "鏄ヨ姳",
    "Squid": "楸块奔",
    "Stacks of cash": "鐜伴噾鍫?",
    "Stainless": "涓嶉攬閽?",
    "Stainless steel": "涓嶉攬閽?",
    "Standard": "鏍囧噯",
    "Star": "鏄熸槦",
    "Stars": "鏄熸槦",
    "Steamer duck": "钂告苯楦?",
    "Still Life": "闈欑墿",
    "Stone house": "鐭冲眿",
    "Stop": "鍋滄",
    "Strange mushroom": "濂囨€槕鑿?",
    "Strategy meeting": "鎴樼暐浼氳",
    "Strawberries": "鑽夎帗",
    "Strawberry & flowers": "鑽夎帗鑺?",
    "Strawberry buttercream": "鑽夎帗濂舵补",
    "Strawberry flavored": "鑽夎帗鍛?",
    "Strawberry swirl": "鑽夎帗鏃嬬汗",
    "Street with Trees": "鏍戣",
    "Striped house": "鏉＄汗灞?",
    "Stripes": "鏉＄汗",
    "Sunburst": "鏃ョ垎",
    "Sunset": "鏃ヨ惤",
    "Surprised gnome": "鎯婅鍦扮簿",
    "Sweet plaid": "鐢滅編鏍煎瓙",
    "Sweet Roses": "鐢滅帿鐟?",
    "Tailors": "瑁佺紳",
    "Tea": "鑼?",
    "Teak": "鏌氭湪",
    "Teddy bear": "娉拌开鐔?",
    "Territory game": "棰嗗湴娓告垙",
    "Textbook": "鏁欑涔?",
    "The Mesozoic world": "涓敓浠ｄ笘鐣?",
    "The ocean blue": "娴锋磱钃?",
    "Tiger": "鑰佽檸",
    "Tomatoes": "鐣寗",
    "Topaz": "榛勭帀",
    "Trading ship": "璐告槗鑸?",
    "Tree peonies": "鐗′腹",
    "Trees": "鏍?",
    "Tricolored": "涓夎壊",
    "Tropical": "鐑甫",
    "Tsurukamemaru - Longevity": "楣ら緹涓?闀垮",
    "Tulip": "閮侀噾棣?",
    "Turquoise": "缁挎澗鐭?",
    "Tweed": "绮楄姳鍛?",
    "Twilight": "鏆厜",
    "Two-toned numbers": "鍙岃壊鏁板瓧",
    "Two-toned tile": "鍙岃壊鐡风爾",
    "Unfinished wood": "鏈畬宸ユ湪",
    "Unglazed": "鏈笂閲?",
    "University": "澶у",
    "Unlabeled can": "鏃犳爣绛剧綈澶?",
    "Uomasamaru III - Launch": "楸兼斂涓镐笁鍙?鍙戝皠",
    "Vanilla & chocolate": "棣欒崏宸у厠鍔?",
    "Vanilla flavored": "棣欒崏鍛?",
    "Veggie saut茅": "鐐掕敩鑿?",
    "Vermilion": "鏈辩爞",
    "Vertical stripes": "绔栨潯绾?",
    "Vivid": "椴滆壋",
    "Volleyball": "鎺掔悆",
    "Walnut": "鑳℃鏈?",
    "Warning": "璀﹀憡",
    "Washed out": "瑜壊",
    "Watermelon": "瑗跨摐",
    "Western literature": "瑗挎柟鏂囧",
    "Whipped-cream topping": "椴滃ザ娌?topping",
    "White & blue": "鐧借摑",
    "White & red": "鐧界孩",
    "White & silver": "鐧介摱",
    "White birch": "鐧芥ˇ",
    "White granite": "鐧借姳宀楀博",
    "White marble": "鐧藉ぇ鐞嗙煶",
    "White mushroom": "鐧借槕鑿?",
    "White peach": "鐧芥",
    "White sand": "鐧芥矙",
    "White with blue ribbon": "鐧借摑涓濆甫",
    "White wood & tile": "鐧芥湪鐡风爾",
    "White, blue & green": "鐧借摑缁?",
    "White, yellow & red": "鐧介粍绾?",
    "White-striped necktie": "鐧芥潯绾归甯?",
    "Wild": "閲庣敓",
    "Win or lose": "杈撹耽",
    "Winter": "鍐",
    "Wisteria": "绱棨",
    "With ads": "鏈夊箍鍛?",
    "Wood grain": "鏈ㄧ汗",
    "Wood house": "鏈ㄥ眿",
    "Wooden": "鏈ㄨ川",
    "Words of wisdom": "鏅烘収涔嬭█",
    "Writer's block": "鍐欎綔闅滅",
    "Yellow & avocado": "榛勭墰娌规灉",
    "Yellow & black": "榛勯粦",
    "Yellow & blue": "榛勮摑",
    "Yellow & navy": "榛勮棌闈?",
    "Yellow & orange": "榛勬",
    "Yellow & purple": "榛勭传",
    "Yellow & red": "榛勭孩",
    "Yellow amber": "榛勭惀鐝€",
    "Yellow mushroom": "榛勮槕鑿?",
    "Yellow peach": "榛勬",
    "Yellow with red ribbon": "榛勭孩涓濆甫",
    "Yellow-green": "榛勭豢",
    "Zebra": "鏂戦┈",
    "鈫?: "鍙崇澶?,
    "鈫?鈫?: "鍙屽彸绠ご"",
    "鈫?鈫?鈫?: "涓夊彸绠ご"",
    "After school": "鏀惧鍚?",
    "Airport": "鏈哄満",
    "Alphabet": "瀛楁瘝",
    "Andesite": "瀹夊北宀?",
    "Angel": "澶╀娇",
    "Animal": "鍔ㄧ墿",
    "Apples": "鑻规灉",
    "Aquamarine": "娴疯摑瀹濈煶",
    "Artistic": "鑹烘湳",
    "Atlantic Ocean": "澶цタ娲?",
    "Balls": "鐞?",
    "Bananas": "棣欒晧",
    "Baseball": "妫掔悆",
    "Basketball": "绡悆",
    "Bedford": "璐濆痉绂忓痉",
    "Beginning stages": "鍒濇湡",
    "Beige": "绫宠壊",
    "Berry": "娴嗘灉",
    "Birch": "妗︽湪",
    "Bird": "楦?",
    "Black": "榛戣壊",
    "Blank": "绌虹櫧",
    "Blue": "钃濊壊",
    "Bronze": "闈掗摐",
    "Brown": "妫曡壊",
    "Camouflage": "杩峰僵",
    "Checkered": "鏍煎瓙",
    "Cherries": "妯辨",
    "Cherry": "妯辨",
    "Chic": "鏃跺皻",
    "Classic": "缁忓吀",
    "Copper": "閾?",
    "Cream": "濂舵补",
    "Denim": "鐗涗粩",
    "Elegant": "浼橀泤",
    "Fairy tale": "绔ヨ瘽",
    "Fall": "绉嬪",
    "Floral": "鑺卞崏",
    "Forest": "妫灄",
    "Gold": "閲戣壊",
    "Gorgeous": "鍗庝附",
    "Gray": "鐏拌壊",
    "Green": "缁胯壊",
    "Hibiscus": "鑺欒搲",
    "Hydrangea": "缁ｇ悆",
    "Ivory": "璞＄墮",
    "Light blue": "娴呰摑",
    "Light brown": "娴呮",
    "Light gray": "娴呯伆",
    "Lily": "鐧惧悎",
    "Magenta": "娲嬬孩",
    "Melon": "鐢滅摐",
    "Modern": "鐜颁唬",
    "Moss green": "鑻旂豢",
    "Orange": "姗欒壊",
    "Peach": "妗冨瓙",
    "Pear": "姊?",
    "Pink": "绮夎壊",
    "Plaid": "鏍煎瓙",
    "Purple": "绱壊",
    "Rainbow": "褰╄櫣",
    "Red": "绾㈣壊",
    "Retro": "澶嶅彜",
    "Rock": "宀╃煶",
    "Rose": "鐜懓",
    "Shell": "璐濆３",
    "Silver": "閾惰壊",
    "Sky": "澶╃┖",
    "Spring": "鏄ュ",
    "Steel": "閽㈤搧",
    "Summer": "澶忓",
    "Sun": "澶槼",
    "Tangerine": "鏌戞",
    "Traditional": "浼犵粺",
    "Violet": "绱綏鍏?",
    "White": "鐧借壊",
    "Winter": "鍐",
    "Wood": "鏈ㄦ潗",
    "Yellow": "榛勮壊",
    "Zelkova wood": "姒夋湪"
};


// ===== STATE =====
var allItems = [];
var sheetList = [];
var lang = "zhs";
var backpack = [];
var selectedVillager = null;
var currentItem = null;
var currentSpecSuffix = "0";
var villagers = [];

// ===== DOM =====
var searchInput = document.getElementById("searchInput");
var clearBtn = document.getElementById("clearBtn");
var searchBtn = document.getElementById("searchBtn");
var itemsContainer = document.getElementById("itemsContainer");
var randomSection = document.getElementById("randomItemsSection");
var randomContainer = document.getElementById("randomItemsContainer");
var emptyState = document.getElementById("emptyState");
var backpackItems = document.getElementById("backpackItems");
var copyBtn = document.getElementById("copyBtn");
var toast = document.getElementById("toast");
var loadingOverlay = document.getElementById("loadingOverlay");
var langSelect = document.getElementById("langSelect");
var catSelect = document.getElementById("catSelect");

// ===== HELPERS =====
function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(function(){ toast.classList.remove("show"); }, 2000);
}
function showLoading() { loadingOverlay.style.display = "flex"; }
function hideLoading() { loadingOverlay.style.display = "none"; }
function cleanHex(h) { return String(h||"").replace(/^0x/i,"").toUpperCase(); }
function getDisplayName(item) {
    if (lang === "zhs") return item.nameZh || item.nameZht || item.name || "Unknown";
    return item.nameZht || item.nameZh || item.name || "Unknown";
}
function hasVariants(item) { return item.variants && Array.isArray(item.variants) && item.variants.length > 1; }
function isInRecipeList(itemId) { return RECIPE_MAP.hasOwnProperty(itemId); }
function getRecipeHex(itemId) { return RECIPE_MAP[itemId] || null; }
function getItemImageURL(itemId, suffix) {
    // 鐩存帴浣跨敤 filename 鏋勫缓鏈湴鍥剧墖璺緞
    var item = allItems.find(function(it){ return it.id == itemId; });
    if (item && item.variants && item.variants.length > 0) {
        // 濡傛灉鏈夊彉浣擄紝浣跨敤瀵瑰簲鍙樹綋鐨?filename
        var variantIndex = parseInt(suffix) || 0;
        if (variantIndex >= 0 && variantIndex < item.variants.length) {
            // 鍏煎绮剧畝鏍煎紡 (v/f) 鍜屽畬鏁存牸寮?(variation/filename)
            var variantFilename = item.variants[variantIndex].f || item.variants[variantIndex].filename;
            if (variantFilename) {
                // 淇 2026-07-18: 瀹跺叿 Remake 鍥剧墖 filename 缂哄皯涓嬪垝绾?
                var fixedFn = variantFilename.replace(/([^_])Remake/, "$1_Remake");
                return LOCAL_IMG + fixedFn + ".png";
            }
        }
        // 鍥為€€鍒?base filename
        if (item.filename) {
            var fixedFn2 = item.filename.replace(/([^_])Remake/, "$1_Remake");
            return LOCAL_IMG + fixedFn2 + ".png";
        }
    }
    if (item && item.filename) {
        var fixedFn3 = item.filename.replace(/([^_])Remake/, "$1_Remake");
        return LOCAL_IMG + fixedFn3 + ".png";
    }
    // 鍥為€€鍒?IMG_MAP 鏌ユ壘
    var hex = cleanHexPadded(parseInt(itemId).toString(16));
    var fn = IMG_MAP[hex];
    if (!fn) return "";
    return LOCAL_IMG + fn + ".png";
}
function getCdnImageURL(item) {
    // 淇 2026-07-18: 鍚屼笂锛孯emake 鍓嶈ˉ涓嬪垝绾?
    if (item.filename) {
        var fixedFn = item.filename.replace(/([^_])Remake/, "$1_Remake");
        return LOCAL_IMG + fixedFn + ".png";
    }
    return "";
}
function getLocalImageURL(fn) { return LOCAL_IMG + fn + ".png"; }
function getVillagerImageURL(code) {
    // 浣跨敤鍘熷鏂囦欢鍚嶆牸寮忕殑鏉戞皯鍥剧墖璺緞
    // 鏉戞皯浠ｇ爜棣栧瓧姣嶉渶瑕佸ぇ鍐?(濡?bul08 -> Bul08)
    var capitalizedCode = code.charAt(0).toUpperCase() + code.slice(1).toLowerCase();
    return LOCAL_IMG + "BromideNpcNml" + capitalizedCode + "_Remake_0_0.png";
}

function cleanHexPadded(h) {
    h = String(h || "").replace(/^0x/i, "").toUpperCase();
    while (h.length < 4) h = "0" + h;
    return h;
}
function getVillagerDisplay(v) { return lang === "zhs" ? (v.zhs_villager_name || v.en_villager_name) : (v.zht_villager_name || v.en_villager_name); }

// ===== DATA LOADING =====
function loadData() {
    showLoading();
    var p1 = fetch("items_compact.json?v=20260717t", { credentials: "include" }).then(function(r){return r.json();}).then(function(data){
        allItems = data;
        data.forEach(function(it){
            if (!it.filename) return;
            var hex = cleanHexPadded(it.hex);
            IMG_MAP[hex] = it.filename;
        });
        var sheets = {};
        allItems.forEach(function(item){ if(item.sheet) sheets[item.sheet]=(sheets[item.sheet]||0)+1; });
        sheetList = Object.keys(sheets).sort();
        populateCatSelect();
        showRandomItems();
    });
    var p3 = fetch("img_map.json", { credentials: "include" }).then(function(r){return r.json();}).then(function(m){
        Object.keys(m).forEach(function(k){
            var upper = k.toUpperCase();
            while (upper.length < 4) upper = "0" + upper;
            if (!IMG_MAP[upper]) IMG_MAP[upper] = m[k];
        });
    });
    var p2 = fetch("xinlao_villagers.json", { credentials: "include" }).then(function(r){return r.json();}).then(function(data){
        villagers = data;
    });
    return Promise.all([p1,p2,p3]);
}

function populateCatSelect() {
    var opts = '<option value="all">鍏ㄩ儴鍒嗙被 (' + allItems.length + ')</option>';
    sheetList.forEach(function(s){
        var cn = sheetCnMap[s] || s;
        var c = allItems.filter(function(i){return i.sheet===s;}).length;
        opts += '<option value="'+s+'">'+cn+' ('+c+')</option>';
    });
    catSelect.innerHTML = opts;
}

// ===== RENDERING =====
function createItemCard(item) {
    var card = document.createElement("div");
    card.className = "item-card";
    card._item = item;

    var icon = document.createElement("div");
    icon.className = "item-icon";
    var imgEl = document.createElement("img");
    imgEl.className = "item-card-image";
    imgEl.src = getCdnImageURL(item);
    imgEl.alt = getDisplayName(item);
    imgEl.onerror = function(){
        icon.innerHTML = '<i class="fas fa-leaf"></i>';
    };
    icon.appendChild(imgEl);

    var nameDiv = document.createElement("div");
    nameDiv.className = "item-name";
    nameDiv.textContent = getDisplayName(item);

    var idDiv = document.createElement("div");
    idDiv.className = "item-id";
    idDiv.textContent = cleanHex(item.hex);

    if (item.sheet) {
        var catTag = document.createElement("span");
        catTag.className = "item-cat-tag";
        catTag.textContent = sheetCnMap[item.sheet] || item.sheet;
        idDiv.appendChild(document.createTextNode(" "));
        idDiv.appendChild(catTag);
    }

    var actions = document.createElement("div");
    actions.className = "item-actions";
    if (hasVariants(item)) {
        var btn = document.createElement("button");
        btn.className = "item-btn item-btn-specs";
        btn.textContent = lang==="zhs"?"閫夎鏍?:"閬歌鏍?;
        btn.addEventListener("click",function(e){ e.stopPropagation(); openDetailModal(item); });
        actions.appendChild(btn);
    } else {
        var addBtn = document.createElement("button");
        addBtn.className = "item-btn";
        addBtn.innerHTML = '<i class="fas fa-plus"></i>';
        addBtn.addEventListener("click",function(e){
            e.stopPropagation();
            addToBackpack(item,"normal","0");
            showToast(lang==="zhs"?"宸叉坊鍔犲埌鑳屽寘":"宸叉坊鍔犲埌鑳屽寘");
        });
        actions.appendChild(addBtn);
    }
    card.addEventListener("click",function(e){
        if (!e.target.closest("[class*=item-btn]")) openDetailModal(item);
    });
    card.appendChild(icon);
    card.appendChild(nameDiv);
    card.appendChild(idDiv);
    card.appendChild(actions);
    return card;
}

function renderItems(items, container) {
    container.innerHTML = "";
    if (!items || items.length === 0) {
        emptyState.style.display = "flex";
        emptyState.querySelector(".empty-text").textContent = lang==="zhs"?"娌℃湁鎵惧埌鍖归厤鐨勭墿鍝?:"娌掓湁鎵惧埌鍖归厤鐨勭墿鍝?;
        return;
    }
    emptyState.style.display = "none";
    items.forEach(function(item){ container.appendChild(createItemCard(item)); });
}

function showRandomItems() {
    if (allItems.length === 0) return;
    var a = allItems.slice().sort(function(){return Math.random()-0.5;});
    renderItems(a.slice(0,16), randomContainer);
}

// ===== SEARCH =====
function doSearch() {
    var term = searchInput.value.trim().toLowerCase();
    var cat = catSelect.value;
    if (!term && cat === "all") {
        itemsContainer.innerHTML = "";
        emptyState.style.display = "none";
        randomSection.style.display = "block";
        return;
    }
    var results = allItems.filter(function(item){
        if (cat !== "all" && item.sheet !== cat) return false;
        if (!term) return true;
        var n = getDisplayName(item).toLowerCase();
        if (n.indexOf(term) !== -1) return true;
        if ((item.name||"").toLowerCase().indexOf(term) !== -1) return true;
        if (cleanHex(item.hex).toLowerCase().indexOf(term) !== -1) return true;
        return false;
    });
    renderItems(results, itemsContainer);
    randomSection.style.display = "none";
}

// ===== BACKPACK =====
function addToBackpack(item, type, specSuffix) {
    if (backpack.length >= MAX_BACKPACK) {
        showToast(lang==="zhs"?"鑳屽寘宸叉弧锛?0涓墿鍝侊級":"鑳屽寘宸叉豢锛?0鍊嬬墿鍝侊級");
        return;
    }
    backpack.push({item:item, type:type||"normal", suffix:specSuffix||"0"});
    updateBackpack();
}
function removeFromBackpack(index) { backpack.splice(index,1); updateBackpack(); }
function updateBackpack() {
    backpackItems.innerHTML = "";
    document.getElementById("backpackCountText").textContent = backpack.length+"/"+MAX_BACKPACK;
    backpack.forEach(function(entry, idx){
        var item = entry.item, type = entry.type, suffix = entry.suffix;
        var div = document.createElement("div");
        div.className = "backpack-item";
        if (type==="diy") div.className += " diy-item";
        if (type==="bottle") div.className += " bottle-item";
        var iconDiv = document.createElement("div");
        iconDiv.className = "backpack-item-icon";
        var bImg = document.createElement("img");
        bImg.className = "backpack-item-image";
        bImg.src = getItemImageURL(item.id, suffix);
        bImg.alt = getDisplayName(item);
        bImg.onerror = function(){
            if (item.filename) bImg.src = getLocalImageURL(item.filename);
            else iconDiv.innerHTML = '<i class="fas fa-leaf"></i>';
        };
        iconDiv.appendChild(bImg);
        var nm = document.createElement("div");
        nm.className = "backpack-item-name";
        nm.textContent = getDisplayName(item);
        var rm = document.createElement("div");
        rm.className = "backpack-item-remove";
        rm.innerHTML = '<i class="fas fa-times"></i>';
        rm.addEventListener("click",function(e){ e.stopPropagation(); removeFromBackpack(idx); });
        div.appendChild(iconDiv); div.appendChild(nm); div.appendChild(rm);
        backpackItems.appendChild(div);
    });
    if (backpack.length > 0) backpackItems.scrollLeft = backpackItems.scrollWidth;
}

// ===== COPY =====
function copyCommand() {
    if (backpack.length === 0 && !selectedVillager) {
        showToast(lang==="zhs"?"鑳屽寘涓虹┖锛屾棤娉曞鍒舵寚浠?:"鑳屽寘鐐虹┖锛岀劇娉曡瑁芥寚浠?);
        return;
    }
    var parts = ["%ordercat"];
    backpack.forEach(function(entry){
        var item = entry.item, type = entry.type, suffix = entry.suffix;
        var h = cleanHex(item.hex);
        if (type === "diy") {
            var rh = getRecipeHex(item.id);
            parts.push(rh ? rh+"000016A2" : h);
        } else if (type === "bottle") {
            var rh = getRecipeHex(item.id);
            parts.push(rh ? rh+"000016A1" : h);
        } else {
            if (suffix === "0") parts.push(h);
            else parts.push(suffix+"0000"+h.padStart(4,"0"));
        }
    });
    if (selectedVillager) parts.push("villager:"+selectedVillager.acnh_villager_code);
    var cmd = parts.join(" ");
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cmd).then(function(){
            copyBtn.classList.add("copied");
            copyBtn.textContent = lang==="zhs"?"宸插鍒?:"宸茶瑁?;
            setTimeout(function(){ copyBtn.classList.remove("copied"); copyBtn.textContent=lang==="zhs"?"澶嶅埗鎸囦护":"瑜囪＝鎸囦护"; },3000);
        }).catch(function(){ fallbackCopy(cmd); });
    } else { fallbackCopy(cmd); }
}
function fallbackCopy(text) {
    var ta = document.getElementById("command-text");
    ta.value = text; ta.select();
    try {
        document.execCommand("copy");
        copyBtn.classList.add("copied");
        copyBtn.textContent = lang==="zhs"?"宸插鍒?:"宸茶瑁?;
    } catch(e) { copyBtn.textContent = lang==="zhs"?"澶嶅埗澶辫触":"瑜囪＝澶辨晽"; }
    setTimeout(function(){ copyBtn.classList.remove("copied"); copyBtn.textContent=lang==="zhs"?"澶嶅埗鎸囦护":"瑜囪＝鎸囦护"; },3000);
}

// ===== ITEM DETAIL MODAL =====
function openDetailModal(item) {
    currentItem = item;
    currentSpecSuffix = "0";
    var detailModal = document.getElementById("itemDetailModal");
    var dName = document.getElementById("itemDetailName");
    var dId = document.getElementById("itemDetailId");
    var dImg = document.getElementById("itemImage");
    dName.textContent = getDisplayName(item);
    dId.textContent = "HEX: " + cleanHex(item.hex);
    dImg.style.display = "none";
    var ph = dImg.parentElement.querySelector(".image-placeholder");
    if (ph) ph.style.display = "flex";
    dImg.src = getItemImageURL(item.id, 0);
    dImg.onload = function(){ dImg.style.display = ""; if(ph) ph.style.display = "none"; };
    dImg.onerror = function(){
        if (item.filename) dImg.src = getLocalImageURL(item.filename);
        else { dImg.style.display = "none"; if(ph) ph.style.display = "flex"; }
    };
    document.querySelectorAll("input[name=itemType]").forEach(function(r){ r.checked = r.value==="normal"; });
    updateTypeStyles();
    var diyOpt = document.querySelector(".type-option input[value=diy]").closest(".type-option");
    var btOpt = document.querySelector(".type-option input[value=bottle]").closest(".type-option");
    var isR = isInRecipeList(item.id);
    diyOpt.style.display = isR ? "flex" : "none";
    btOpt.style.display = isR ? "flex" : "none";
    var specSec = document.getElementById("itemSpecSelection");
    if (hasVariants(item)) {
        buildSpecUI(item);
        specSec.style.display = "block";
        enableSpecSelection();
    } else {
        specSec.style.display = "none";
    }
    detailModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function buildSpecUI(item) {
    var st = document.getElementById("specSelectionTitle");
    var so = document.getElementById("specOptions");
    st.textContent = lang==="zhs"?"閫夋嫨娌规紗":"閬告搰娌规紗";
    so.innerHTML = "";
    
    // 鍙樉绀哄敮涓€鐨勫彉浣擄紙鍘婚噸锛?
    var uniqueVariants = [];
    var seen = {};
    item.variants.forEach(function(v, i) {
        // 鍏煎绮剧畝鏍煎紡 (v/f) 鍜屽畬鏁存牸寮?(variation/filename)
        var variation = v.v || v.variation || "";
        var filename = v.f || v.filename || "";
        var key = variation + "|" + filename;
        if (!seen[key]) {
            seen[key] = true;
            uniqueVariants.push({ variation: variation, filename: filename, index: i });
        }
    });
    
    uniqueVariants.forEach(function(v, idx){
        var card = document.createElement("label");
        card.className = "spec-card";
        var inp = document.createElement("input");
        inp.type = "radio";
        inp.name = "itemSpec";
        inp.value = String(v.index);
        if (idx === 0) inp.checked = true;
        inp.addEventListener("change",function(){
            currentSpecSuffix = this.value;
            var dImg = document.getElementById("itemImage");
            dImg.src = getItemImageURL(item.id, v.index);
            dImg.style.display = "";
            var ph = dImg.parentElement.querySelector(".image-placeholder");
            if (ph) ph.style.display = "none";
            updateSpecStyles();
        });
        var lbl = document.createElement("span");
        lbl.className = "spec-card-label";
                // 淇 2026-07-18: Variant Remake_X_Y 鏄剧ず鑻辨枃 -> 涓枃"娆惧紡 N"
        var __vLbl;
        if (VARIATION_ZH[v.variation]) {
            __vLbl = VARIATION_ZH[v.variation];
        } else if (v.variation && /^Variant Remake_(\d+)_(\d+)$/.test(v.variation)) {
            var __vm = v.variation.match(/^Variant Remake_(\d+)_(\d+)$/);
            __vLbl = "娆惧紡 " + (parseInt(__vm[1]) + 1);
        } else if (v.variation) {
            __vLbl = v.variation;
        } else {
            __vLbl = "#" + (idx + 1);
        }
        lbl.textContent = __vLbl;
        card.appendChild(inp);
        card.appendChild(lbl);
        so.appendChild(card);
    });
    currentSpecSuffix = String(uniqueVariants[0].index);
}

function enableSpecSelection() {
    var sec = document.getElementById("itemSpecSelection");
    sec.classList.remove("disabled");
    var msg = sec.querySelector(".spec-disabled-message");
    if (msg) msg.remove();
}
function disableSpecSelection() {
    var sec = document.getElementById("itemSpecSelection");
    sec.classList.add("disabled");
    sec.querySelectorAll("input[type=radio]").forEach(function(r){ r.disabled=true; r.checked = r.value==="0"; });
    currentSpecSuffix = "0";
    if (!sec.querySelector(".spec-disabled-message")) {
        var msg = document.createElement("div");
        msg.className = "spec-disabled-message";
        msg.textContent = lang==="zhs"?"浠呮櫘閫氱墿鍝佸彲閫夋嫨椋庢牸鏍峰紡":"鍍呮櫘閫氱墿鍝佸彲閬告搰棰ㄦ牸鏍峰紡";
        sec.appendChild(msg);
    }
}
function updateTypeStyles() {
    document.querySelectorAll("#typeOptions .type-option").forEach(function(opt){
        opt.classList.toggle("selected", opt.querySelector("input").checked);
    });
}
function updateSpecStyles() {
    document.querySelectorAll("#specOptions .spec-card").forEach(function(card){
        card.classList.toggle("selected", card.querySelector("input").checked);
    });
}
function closeDetailModal() {
    document.getElementById("itemDetailModal").classList.remove("active");
    document.body.style.overflow = "";
    currentItem = null;
}
function confirmAddItem() {
    if (!currentItem) return;
    var type = document.querySelector("input[name=itemType]:checked").value;
    addToBackpack(currentItem, type, currentSpecSuffix);
    showToast(lang==="zhs"?"宸叉坊鍔犲埌鑳屽寘":"宸叉坊鍔犲埌鑳屽寘");
    closeDetailModal();
}

// ===== VILLAGER MODAL =====
function openVillagerModal() {
    document.getElementById("villagerModal").classList.add("active");
    document.getElementById("villagerSearchInput").value = "";
    renderVillagers(villagers);
    document.body.style.overflow = "hidden";
}
function closeVillagerModal() {
    document.getElementById("villagerModal").classList.remove("active");
    document.body.style.overflow = "";
    window._tempVillager = null;
}
function renderVillagers(list) {
    var grid = document.getElementById("villagersGrid");
    grid.innerHTML = "";
    if (!list || list.length === 0) {
        grid.innerHTML = '<div class="empty-state"><div class="empty-text">'+(lang==="zhs"?"娌℃湁鎵惧埌鍖归厤鐨勬潙姘?:"娌掓湁鎵惧埌鍖归厤鐨勬潙姘?)+'</div></div>';
        return;
    }
    list.forEach(function(v){
        var code = v.acnh_villager_code;
        var name = getVillagerDisplay(v);
        var isSel = selectedVillager && selectedVillager.acnh_villager_code === code;
        var card = document.createElement("div");
        card.className = "villager-card" + (isSel?" selected":"");
        card.innerHTML = '<div class="villager-card-avatar-container">'+
            '<img class="villager-card-avatar" src="'+getVillagerImageURL(code)+'" alt="'+name+'" onerror="this.src=\'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\'">'+
            '</div><div class="villager-card-name">'+name+'</div>'+
            (isSel?'<div class="villager-selected-mark"><i class="fas fa-check"></i></div>':'');
        card.addEventListener("click",function(){
            grid.querySelectorAll(".villager-card").forEach(function(c){
                c.classList.remove("selected"); var m = c.querySelector(".villager-selected-mark"); if(m)m.remove();
            });
            card.classList.add("selected");
            if (!card.querySelector(".villager-selected-mark")){
                var mk = document.createElement("div");
                mk.className = "villager-selected-mark";
                mk.innerHTML = '<i class="fas fa-check"></i>';
                card.appendChild(mk);
            }
            window._tempVillager = v;
        });
        grid.appendChild(card);
    });
}
function confirmInviteVillager() {
    if (window._tempVillager) {
        selectedVillager = window._tempVillager;
        updateVillagerPreview();
        closeVillagerModal();
        showToast(lang==="zhs"?"宸查個璇锋潙姘?:"宸查個璜嬫潙姘?);
    } else showToast(lang==="zhs"?"璇烽€夋嫨涓€浣嶆潙姘?:"璜嬮伕鎿囦竴浣嶆潙姘?);
}
function updateVillagerPreview() {
    var pc = document.getElementById("villagerPreviewContainer");
    var ib = document.getElementById("inviteBtnContainer");
    if (selectedVillager) {
        document.getElementById("villagerAvatar").src = getVillagerImageURL(selectedVillager.acnh_villager_code);
        document.getElementById("villagerName").textContent = getVillagerDisplay(selectedVillager);
        pc.style.display = "block"; ib.style.display = "none";
    } else {
        pc.style.display = "none"; ib.style.display = "block";
    }
}

// ===== LANGUAGE =====
function switchLang(newLang) {
    lang = newLang;
    langSelect.value = lang;
    document.querySelectorAll(".item-card").forEach(function(card){
        var el = card.querySelector(".item-name");
        if (!card._item) return;
        el.textContent = getDisplayName(card._item);
    });
    if (searchInput.value.trim() || catSelect.value !== "all") doSearch();
    else showRandomItems();
    updateBackpack();
    if (selectedVillager) document.getElementById("villagerName").textContent = getVillagerDisplay(selectedVillager);
    if (!copyBtn.classList.contains("copied")) copyBtn.textContent = lang==="zhs"?"澶嶅埗鎸囦护":"瑜囪＝鎸囦护";
    var prevCat = catSelect.value;
    populateCatSelect();
    if (sheetList.indexOf(prevCat) !== -1) catSelect.value = prevCat;
    else catSelect.value = "all";
    document.querySelectorAll(".item-btn-specs").forEach(function(b){ b.textContent = lang==="zhs"?"閫夎鏍?:"閬歌鏍?; });
}

// ===== DRAG =====
function initDraggable(el) {
    var dragging=false, ox, oy;
    el.addEventListener("mousedown",function(e){
        if (e.target.closest(".remove-villager,.invite-btn")) return;
        dragging=true;
        var r=el.getBoundingClientRect();
        ox=e.clientX-r.left; oy=e.clientY-r.top;
        el.style.opacity="0.8";
        e.preventDefault();
    });
    document.addEventListener("mousemove",function(e){
        if(!dragging)return;
        var x=Math.max(0,Math.min(window.innerWidth-el.offsetWidth,e.clientX-ox));
        var y=Math.max(0,Math.min(window.innerHeight-el.offsetHeight,e.clientY-oy));
        el.style.right="auto"; el.style.top=y+"px"; el.style.left=x+"px"; el.style.transform="none";
    });
    document.addEventListener("mouseup",function(){if(dragging){dragging=false;el.style.opacity="";}});
    el.addEventListener("touchstart",function(e){
        if(e.target.closest(".remove-villager,.invite-btn"))return;
        dragging=true;
        var t=e.touches[0],r=el.getBoundingClientRect();
        ox=t.clientX-r.left; oy=t.clientY-r.top;
        el.style.opacity="0.8";
    },{passive:false});
    document.addEventListener("touchmove",function(e){
        if(!dragging)return;
        var t=e.touches[0];
        var x=Math.max(0,Math.min(window.innerWidth-el.offsetWidth,t.clientX-ox));
        var y=Math.max(0,Math.min(window.innerHeight-el.offsetHeight,t.clientY-oy));
        el.style.right="auto"; el.style.top=y+"px"; el.style.left=x+"px"; el.style.transform="none";
        e.preventDefault();
    },{passive:false});
    document.addEventListener("touchend",function(){if(dragging){dragging=false;el.style.opacity="";}});
}

// ===== EVENTS =====
searchInput.addEventListener("input",function(){
    clearBtn.classList.toggle("visible", !!searchInput.value.trim());
    doSearch();
});
searchInput.addEventListener("keypress",function(e){if(e.key==="Enter"){e.preventDefault();doSearch();}});
searchBtn.addEventListener("click",doSearch);
clearBtn.addEventListener("click",function(){
    searchInput.value=""; clearBtn.classList.remove("visible");
    itemsContainer.innerHTML=""; emptyState.style.display="none"; randomSection.style.display="block"; showRandomItems();
});
catSelect.addEventListener("change",doSearch);
langSelect.addEventListener("change",function(){switchLang(this.value);});
copyBtn.addEventListener("click",copyCommand);
document.getElementById("closeItemModal").addEventListener("click",closeDetailModal);
document.getElementById("cancelAddItem").addEventListener("click",closeDetailModal);
document.getElementById("confirmAddItem").addEventListener("click",confirmAddItem);
document.getElementById("itemDetailModal").addEventListener("click",function(e){if(e.target===this)closeDetailModal();});
document.querySelectorAll("input[name=itemType]").forEach(function(r){
    r.addEventListener("change",function(){
        updateTypeStyles();
        var ic = document.querySelector(".item-image-container");
        if (this.value==="normal"){
            enableSpecSelection();
            document.getElementById("itemDetailName").textContent = getDisplayName(currentItem);
            if(ic)ic.style.borderColor="var(--acnh-blue)";
        } else if (this.value==="diy"){
            disableSpecSelection();
            document.getElementById("itemDetailName").textContent = getDisplayName(currentItem)+" DIY";
            if(ic)ic.style.borderColor="var(--acnh-yellow)";
        } else {
            disableSpecSelection();
            document.getElementById("itemDetailName").textContent = getDisplayName(currentItem)+" \u6F02\u6D41\u74F6";
            if(ic)ic.style.borderColor="var(--acnh-purple)";
        }
    });
});
document.getElementById("inviteBtn").addEventListener("click",openVillagerModal);
document.getElementById("closeModal").addEventListener("click",closeVillagerModal);
document.getElementById("cancelInvite").addEventListener("click",closeVillagerModal);
document.getElementById("confirmInvite").addEventListener("click",confirmInviteVillager);
document.getElementById("removeVillager").addEventListener("click",function(){
    selectedVillager=null; updateVillagerPreview();
    showToast(lang==="zhs"?"宸插彇娑堥個璇锋潙姘?:"宸插彇娑堥個璜嬫潙姘?);
});
document.getElementById("villagerModal").addEventListener("click",function(e){if(e.target===this)closeVillagerModal();});
document.getElementById("villagerSearchInput").addEventListener("input",function(){
    var term = this.value.trim().toLowerCase();
    if(!term){renderVillagers(villagers);return;}
    var f = villagers.filter(function(v){
        return (v.zhs_villager_name||"").toLowerCase().indexOf(term)!==-1 ||
               (v.zht_villager_name||"").indexOf(term)!==-1 ||
               (v.en_villager_name||"").toLowerCase().indexOf(term)!==-1 ||
               (v.acnh_villager_code||"").toLowerCase().indexOf(term)!==-1;
    });
    renderVillagers(f);
});

// ===== INIT =====
initDraggable(document.getElementById("inviteBtnContainer"));
initDraggable(document.getElementById("villagerPreviewContainer"));
loadData().then(function(){
    hideLoading();
    updateBackpack();
    updateVillagerPreview();
}).catch(function(err){
    hideLoading();
    console.error("Failed to load data:", err);
    showToast("鏁版嵁鍔犺浇澶辫触锛岃鍒锋柊椤甸潰");
});
})();




