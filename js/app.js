// 动森物品查询小助手 v6 - 纯客户端版
(function() {
"use strict";
console.log("动森物品助手 - v6");

// ===== SHEET NAME MAP =====
var sheetCnMap = {
    "Accessories":"饰品","Art":"艺术品","Bags":"包包","Bottoms":"裤子","Clothing Other":"其他服装",
    "Dress-Up":"连衣裙","Fencing":"栅栏","Floors":"地板","Fossils":"化石","Headwear":"头饰",
    "Housewares":"家具","Miscellaneous":"杂项","Music":"音乐","Other":"其他","Photos":"照片",
    "Posters":"海报","Rugs":"地毯","Shoes":"鞋子","Socks":"袜子","Tools":"工具","Tops":"上衣",
    "Umbrellas":"雨伞","Wall-mounted":"壁挂","Wallpaper":"壁纸"
};

// ===== CONSTANTS =====
var MAX_BACKPACK = 40;
// 修复 2026-07-16: 改用本地图片（acnhcdn 全部 404）
var ACNHCDN = "img/";
var LOCAL_IMG = "img/";
var VILLAGER_IMG_DIR = "img/";
var IMG_MAP = {}; // hex(无0x大写) -> filename

// ===== RECIPE LIST =====
var RECIPE_LIST = [[6,2596],[9,1263],[10,3068],[13,1429],[14,1799],[15,1913],[16,880],[17,2560],[18,2605],[19,3082],[20,3083],[21,3084],[22,2376],[23,1559],[24,1561],[26,1565],[29,2822],[30,1753],[32,808],[33,739],[34,1430],[35,3191],[36,2754],[37,2559],[38,3206],[41,333],[42,331],[43,88],[44,383],[45,669],[46,710],[48,729],[49,730],[51,805],[55,665],[56,975],[57,1103],[58,1157],[59,1170],[60,1189],[61,1557],[62,1558],[63,1625],[64,1626],[65,1627],[66,1823],[77,2319],[78,2329],[79,2553],[80,2586],[81,3065],[82,3122],[83,3193],[84,3194],[85,3195],[86,3196],[87,3200],[89,3205],[90,3208],[91,3270],[92,3271],[94,3275],[99,3080],[100,3402],[101,3403],[102,83],[103,343],[104,3398],[105,3397],[107,2615],[110,4044],[111,4043],[112,4042],[113,4035],[114,4036],[115,4037],[116,4038],[117,4039],[118,4040],[119,4041],[120,4025],[121,4027],[122,3559],[123,3562],[124,3509],[125,3943],[126,3560],[128,3563],[130,3772],[131,3810],[132,3774],[133,3473],[136,3808],[138,3806],[139,3805],[140,3499],[141,3501],[142,3503],[143,3505],[145,3504],[146,3497],[147,3498],[148,3500],[149,3502],[151,3558],[152,3658],[153,3554],[154,3556],[155,3551],[157,3553],[158,3555],[159,3557],[160,2558],[161,4011],[162,4012],[163,3684],[164,80],[165,1266],[166,3692],[167,3675],[168,3449],[169,3445],[170,3438],[171,682],[172,3436],[173,3490],[174,3683],[175,3977],[176,3978],[177,3979],[178,3980],[180,3982],[181,3983],[182,3984],[183,4703],[184,3976],[185,3975],[186,4546],[187,4127],[188,4128],[189,4134],[190,132],[191,4549],[192,4073],[193,4124],[194,4279],[195,4393],[196,1759],[197,1861],[199,4104],[200,5150],[201,3439],[202,4090],[203,4066],[204,3406],[205,4083],[206,4084],[207,4086],[208,4087],[209,4088],[210,4089],[212,4092],[213,3588],[214,3785],[215,1058],[216,865],[217,722],[218,5320],[219,4376],[220,4708],[221,4726],[222,4375],[223,4378],[224,3396],[225,4727],[226,4377],[227,4293],[228,5436],[229,5437],[230,5466],[231,5467],[232,5468],[233,1447],[234,1054],[235,1439],[236,1445],[237,5096],[238,5097],[239,5098],[240,5099],[241,5100],[242,5101],[243,5102],[244,5103],[245,5104],[246,5105],[247,5106],[248,5107],[249,5108],[250,5109],[251,5110],[252,5111],[253,5112],[254,5113],[255,5114],[256,5115],[257,5116],[258,5117],[259,5118],[260,5119],[261,4682],[262,3472],[263,1241],[264,2578],[266,5212],[267,4357],[268,4350],[269,4349],[271,2100],[273,3966],[274,3991],[277,144],[278,5635],[279,5636],[280,2379],[281,2099],[282,2377],[283,5784],[284,3618],[285,5856],[286,5528],[288,5516],[289,5253],[290,4905],[291,5230],[292,5510],[293,5505],[294,5500],[295,5498],[296,4865],[298,4820],[299,4894],[300,4853],[301,5229],[302,5662],[303,4915],[304,4916],[305,4917],[306,4918],[307,4919],[308,5164],[309,4858],[310,4859],[311,4860],[312,4804],[313,4805],[314,4844],[315,4840],[316,4838],[317,4837],[318,5216],[319,4911],[320,4904],[321,4947],[322,4833],[323,4855],[324,4813],[325,4801],[326,5457],[359,677],[360,5670],[361,5751],[362,5771],[364,5337],[365,3561],[366,5956],[367,5954],[368,5955],[370,5957],[371,5959],[372,891],[373,1442],[374,3689],[375,6030],[376,5958],[377,5960],[378,3340],[379,1443],[380,5962],[381,1444],[382,3344],[383,4309],[384,5961],[385,5977],[386,1440],[387,5543],[388,4067],[389,2326],[390,1797],[391,3773],[392,4074],[393,4075],[394,3819],[395,4078],[396,3775],[397,4093],[398,5517],[399,5963],[400,4107],[401,4108],[402,5970],[403,1652],[404,4125],[405,4130],[406,4131],[407,5964],[408,3776],[409,1441],[410,1111],[411,5975],[412,5973],[413,1032],[414,6075],[415,6078],[416,6079],[417,6080],[418,6032],[419,6031],[420,5976],[421,5978],[422,6033],[423,6081],[424,5979],[425,6830],[426,6832],[427,6831],[429,6826],[430,6827],[432,6829],[433,6818],[434,5676],[435,5931],[436,5972],[437,3992],[438,5641],[440,5765],[441,5746],[442,5768],[443,5749],[444,5764],[445,5745],[446,5766],[447,5772],[448,5747],[449,5820],[450,5767],[451,5748],[452,5769],[453,5750],[454,5770],[455,5677],[456,6840],[457,3229],[458,7211],[459,7377],[460,7378],[461,5166],[462,1750],[463,4034],[464,5719],[465,5718],[466,5716],[467,4751],[468,4752],[469,5717],[470,5515],[471,5223],[472,4999],[473,4986],[474,4797],[475,5021],[476,4990],[477,5270],[478,4968],[479,7204],[480,7205],[482,5269],[483,4989],[484,7187],[485,4964],[486,5236],[487,4979],[488,7186],[489,4960],[490,4008],[491,7134],[492,7133],[493,7132],[494,7142],[495,7231],[496,7160],[497,7161],[498,7163],[500,7159],[501,7230],[502,7137],[503,7233],[504,7045],[505,7232],[506,7234],[507,7235],[508,7805],[509,7788],[510,7867],[511,7409],[512,7408],[513,7393],[514,7253],[515,7236],[516,7237],[518,3446],[519,7390],[520,7452],[521,7048],[523,2544],[524,5083],[525,5084],[526,5085],[527,5091],[528,5092],[529,5093],[530,5094],[531,5095],[532,7584],[533,7585],[534,7586],[535,7587],[536,7588],[537,7589],[538,7590],[539,7591],[540,7592],[541,7169],[542,7327],[543,7328],[544,7330],[545,7331],[546,7332],[548,4351],[549,4352],[550,4354],[551,4355],[552,4356],[553,4358],[555,5206],[556,5207],[557,5208],[559,5210],[561,5213],[564,5268],[565,5030],[566,4590],[567,2777],[568,7317],[569,8825],[570,7795],[571,8419],[572,8826],[573,9642],[574,7258],[575,7259],[576,7261],[577,1504],[578,9814],[579,7454],[580,7281],[582,530],[583,531],[584,532],[585,533],[586,1023],[587,4269],[588,4270],[589,4271],[590,10742],[591,10743],[592,3802],[593,3580],[594,1509],[595,11261],[596,3617],[598,7247],[599,8031],[600,7535],[601,5941],[602,11260],[603,4333],[604,5291],[605,8907],[606,7254],[607,5143],[608,7527],[609,3410],[610,3411],[611,3412],[612,9838],[613,9873],[614,9949],[615,9837],[616,9872],[617,9950],[618,9839],[619,9874],[620,9947],[621,9836],[622,9871],[623,9948],[624,5275],[625,6912],[626,3288],[627,7489],[628,9862],[629,9945],[630,7490],[631,7491],[632,7492],[633,7493],[634,7494],[635,7291],[636,7511],[637,8609],[638,7498],[640,4588],[641,5334],[642,5472],[643,5524],[644,5346],[645,7506],[646,12206],[647,12208],[648,7174],[649,5056],[650,12230],[651,11943],[652,11941],[653,676],[654,11942],[655,1120],[656,11711],[657,11712],[658,8179],[659,8533],[660,8574],[661,8578],[662,8660],[663,9617],[664,12326],[665,5508],[666,5661],[667,7239],[668,7362],[669,4970],[670,12332],[671,11113],[672,11114],[673,12439],[674,12449],[675,12455],[676,12440],[677,12450],[678,12456],[679,12441],[680,12451],[681,12457],[682,12442],[683,12452],[684,12458],[685,12443],[686,12453],[687,12459],[688,12444],[689,12454],[690,12460],[691,12446],[692,12448],[693,12445],[694,12447],[695,12398],[696,12412],[697,12413],[698,12414],[699,12415],[700,12417],[701,12418],[702,12419],[703,12420],[704,12421],[705,12436],[706,12437],[707,12517],[708,5231],[709,7546],[710,12423],[711,12578],[712,12630],[713,12758],[714,12894],[715,12695],[716,5607],[717,12552],[718,12553],[719,12554],[720,12555],[721,12556],[722,12557],[723,12558],[724,12559],[725,12560],[726,12561],[727,12562],[728,12563],[729,12566],[730,12568],[732,12951],[733,12949],[734,13222],[735,13223],[736,13237],[737,13275],[738,13608],[740,13447],[741,13448],[742,13449],[743,13450],[745,13453],[746,7544],[747,13818],[748,13819],[749,13820],[750,13244],[751,13792],[752,13603],[753,12681],[755,3548],[757,12217],[758,14019],[759,13526],[760,13530],[761,13534],[762,14017],[763,14018],[764,13906],[765,13874],[766,13875],[768,13877],[769,13878],[770,13879],[771,13880],[772,13881],[773,13019],[774,14239],[776,14278],[777,13895],[779,13897],[780,13898],[783,13901],[784,13902],[792,14308],[794,14310],[797,14313],[803,14322],[805,14324],[811,14330],[813,14332],[814,14333],[818,14337],[819,14470],[820,14197],[821,14202],[822,14248],[823,14249],[824,1573],[825,14487],[826,14489],[827,14207],[828,14209],[829,14206],[830,14192],[831,14596],[832,14597],[833,14598],[834,14599],[835,14600],[836,14601],[837,14602],[838,12335],[839,12351],[841,14187],[842,14188],[844,13931],[845,13932],[846,13933],[847,13934],[848,13935],[849,13936],[850,13937],[851,13938],[852,13939],[853,13940],[854,13941],[855,13942],[856,13943],[857,13944],[858,13945],[859,13946],[860,13947],[861,13948],[862,13949],[863,13950],[864,13951],[865,13952],[866,13953],[867,13957],[868,13959],[869,13960],[870,13961],[871,13962],[872,13963],[873,13964],[874,13965],[875,13966],[876,13967],[877,13968],[878,13969],[879,13970],[880,13971],[881,13972],[882,13973],[883,13974],[884,13975],[885,13976],[886,13977],[887,13978],[888,13979],[889,13980],[890,13981],[891,13982],[892,13983],[893,13984],[894,13985],[895,13986],[896,13987],[897,13988],[898,13989],[899,13990],[900,13991],[901,13992],[902,13993],[903,13994],[904,13995],[905,13996],[906,13997],[907,13998],[908,13999],[909,14000],[910,14001],[911,14002],[912,14003],[913,14010],[914,14048],[915,14104],[916,14105],[917,14109],[918,14110],[919,14111],[920,14112],[921,14113],[922,14114],[923,14115],[924,14116],[925,14117],[926,14118],[927,14119],[928,14120],[929,14121],[930,14122],[931,14123],[932,14124],[933,14125],[934,14126],[935,14127],[936,14128],[937,14129],[938,14130],[939,14131],[940,14132],[941,14161],[942,14162],[943,14163],[944,14164],[945,14165],[946,14166],[947,14167],[948,14168],[949,14169],[950,14170],[951,14171],[952,14172],[953,14173],[954,14174],[955,14175],[956,14176],[957,14177],[958,14178],[959,14179],[960,14180],[961,14181],[962,14182],[963,14183],[964,14185],[965,14186],[966,14465],[967,14466],[968,14696],[969,14697],[970,14698],[971,13327],[972,13328],[973,13329],[974,13330],[975,12822],[976,12823],[977,12824],[978,12813],[979,12390],[980,14550],[981,14551],[982,14542],[983,12222],[984,12329],[985,12330],[986,12379],[987,12399],[988,12400],[989,12521],[990,13662],[991,14193],[992,14205],[993,14210],[994,14211],[995,14212],[996,14213],[997,14214],[998,14215],[999,14216],[1000,14208],[1001,14604],[1002,14199],[1003,14198],[1004,14201],[1005,14257],[1006,14259],[1007,14755],[1008,14756],[1009,14757],[1010,14758],[1011,14759],[1012,14728],[1013,14594],[1014,14593],[1015,14591],[1016,14552],[1017,14613],[1018,14565],[1019,14478],[1020,14479],[1021,14484],[1022,14485],[1023,14486],[1024,14488],[1025,14490],[1026,14491],[1027,14492],[1028,14481],[1029,14482],[1030,14483],[1031,14480],[1032,14533],[1033,12840],[1034,12838],[1035,12835],[1036,14645],[1037,14644],[1038,14716],[1039,14714],[1040,13496],[1041,14831],[1042,14592],[1043,14549],[1044,13572],[1045,14882],[1046,13509],[1047,13511],[1048,13520],[1049,12611],[1050,7154],[1051,12350],[1052,12706],[1053,13696],[1054,12349],[1055,13210],[1056,13606],[1057,13220],[1058,13580],[1059,12709],[1060,14887],[1061,13666],[1062,922],[1063,743],[1067,13573],[1068,13574],[1069,13751],[1070,13588],[1072,13161]];
var RECIPE_MAP = {};
// ===== RECIPE MAP =====
RECIPE_LIST.forEach(function(r){ RECIPE_MAP[r[1]] = r[0].toString(16).toLowerCase().padStart(3,"0"); });

// ===== VARIATION TRANSLATION MAP =====
var VARIATION_ZH = {
    "Cute": "可爱",
    "Cool": "酷感",
    "Colorful": "彩色",
    "Natural": "自然色",
    "Pastel": "粉彩",
    "Pop": "流行",
    "←": "左箭头",
    "← →": "左右箭头",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "Aqua": "水色",
    "Aqua roof": "水色屋顶",
    "Ash": "灰烬",
    "Ash brown": "灰棕色",
    "Ash green": "灰绿色",
    "Avocado": "牛油果色",
    "Azalea": "杜鹃花",
    "Baby blue": "婴儿蓝",
    "Baby gray": "婴儿灰",
    "Baby green": "婴儿绿",
    "Baby mint": "婴儿薄荷",
    "Baby orange": "婴儿橙",
    "Baby pink": "婴儿粉",
    "Baby purple": "婴儿紫",
    "Baby yellow": "婴儿黄",
    "Bamboo": "竹色",
    "Beige & green": "米色绿",
    "Beige & navy": "米色藏青",
    "Beige & white": "米白",
    "Berry red": "浆果红",
    "Black & blue": "黑蓝",
    "Black & gray": "黑灰",
    "Black & orange": "黑橙",
    "Black & red": "黑红",
    "Black & silver": "黑银",
    "Black & white": "黑白",
    "Black & yellow": "黑黄",
    "Black bass": "黑鲈鱼",
    "Black cherry": "黑樱桃",
    "Black granite": "黑花岗岩",
    "Black marble": "黑大理石",
    "Black necktie": "黑领带",
    "Black ribbons": "黑丝带",
    "Black roof": "黑屋顶",
    "Black sesame": "黑芝麻",
    "Black wood & tile": "黑木瓷砖",
    "Black, coral & pink": "黑珊瑚粉",
    "Blood orange": "血橙",
    "Blooming": "盛开",
    "Blue & black": "蓝黑",
    "Blue & gray": "蓝灰",
    "Blue & green": "蓝绿",
    "Blue & orange": "蓝橙",
    "Blue & purple": "蓝紫",
    "Blue & red": "蓝红",
    "Blue & white": "蓝白",
    "Blue & yellow": "蓝黄",
    "Blue cat": "蓝猫",
    "Blue marlin": "蓝枪鱼",
    "Blue ribbons": "蓝丝带",
    "Blue roof": "蓝屋顶",
    "Blue with flowers": "蓝花",
    "Blue with yellow ribbon": "蓝黄丝带",
    "Blueberries": "蓝莓",
    "Blue-gray": "蓝灰",
    "Blue-striped necktie": "蓝条纹领带",
    "Boat": "船",
    "Boating stripes": "划船条纹",
    "Borscht": "罗宋汤",
    "Bouquet": "花束",
    "Brainstorming meeting": "头脑风暴",
    "Brick house": "砖房",
    "Brown & black": "棕黑",
    "Brown & white": "棕白",
    "Brown granite": "棕花岗岩",
    "Brown wood": "棕木",
    "Cake": "蛋糕",
    "Camel": "驼色",
    "Camphor-tree wood": "樟木",
    "Canned fish": "鱼罐头",
    "Canned fruit": "水果罐头",
    "Canned olives": "橄榄罐头",
    "Canned pasta sauce": "意面酱罐头",
    "Canned pet food": "宠物罐头",
    "Caramel mocha": "焦糖摩卡",
    "Carp": "鲤鱼",
    "Carrot": "胡萝卜",
    "Carrots": "胡萝卜",
    "Castle": "城堡",
    "Cat": "猫",
    "Caution": "警告",
    "Caution stripes": "警示条纹",
    "Cherry blossom": "樱花",
    "Cherry blossoms": "樱花",
    "Cherry brown": "樱桃棕",
    "Cherry wood": "樱桃木",
    "Chestnut": "栗子",
    "Chic flowers": "时尚花",
    "Chic white": "时尚白",
    "Chick": "小鸡",
    "Chicks": "小鸡",
    "Choco": "巧克力",
    "Chocolate": "巧克力",
    "Chocolate buttercream": "巧克力奶油",
    "Chocolate mint": "巧克力薄荷",
    "Chocolate swirl": "巧克力旋纹",
    "Citrus": "柑橘",
    "Classic camo": "经典迷彩",
    "Clay cake": "粘土蛋糕",
    "Clay dinosaur": "粘土恐龙",
    "Club activities": "社团活动",
    "Cocoa flavored": "可可味",
    "Colorful cake": "彩色蛋糕",
    "Colorful dinosaur": "彩色恐龙",
    "Colorful numbers": "彩色数字",
    "Colorful quilt": "彩色被子",
    "Colorful quilt design": "彩色被子图案",
    "Comics": "漫画",
    "Common pochard": "红头潜鸭",
    "Concrete": "混凝土",
    "Congee": "粥",
    "Constellations": "星座",
    "Construction ahead": "前方施工",
    "Construction warning": "施工警告",
    "Cool blue": "酷蓝",
    "Coral pink": "珊瑚粉",
    "Corn soup": "玉米汤",
    "Cosmo black": "宇宙黑",
    "Cranes": "鹤",
    "Cream stew": "奶油炖菜",
    "Cubes": "立方体",
    "Curry": "咖喱",
    "Cyan": "青色",
    "Damaged": "损坏",
    "Dark": "深色",
    "Dark blue": "深蓝色",
    "Dark brown": "深棕色",
    "Dark gray": "深灰色",
    "Dark green": "深绿色",
    "Dark red": "深红色",
    "Dark wood": "深色木",
    "Deep blue": "深蓝色",
    "Deep ocean": "深海",
    "Deep sea": "深海",
    "Denim with stripes": "条纹牛仔",
    "Dinosaur": "恐龙",
    "Dodgeball": "躲避球",
    "Dog": "狗",
    "Dot": "圆点",
    "Double sash": "双腰带",
    "Dragon": "龙",
    "Dreamy plaid": "梦幻格子",
    "Dried bamboo": "干竹",
    "Duck": "鸭子",
    "Elegant flowers": "优雅花",
    "Emerald & lime": "翡翠青柠",
    "Empty": "空",
    "Encyclopedia": "百科全书",
    "Energetic plaid": "活力格子",
    "Evergreen": "常青",
    "Fact-finding meeting": "调查会议",
    "Failed attempt": "失败尝试",
    "Fairy-tale house": "童话屋",
    "Fall harvest": "秋收",
    "Family": "家庭",
    "Fanciful quilted pattern": "奇幻拼布",
    "Fancy plaid": "精美格子",
    "Field of Flowers": "花田",
    "Fire red": "火红",
    "Fish": "鱼",
    "Fishing Spot": "钓鱼点",
    "Flame orange": "火焰橙",
    "Flowers": "花朵",
    "Foreign language": "外语",
    "Forest print": "森林印花",
    "Frog": "青蛙",
    "Fruits": "水果",
    "Fuchsia": "紫红色",
    "Garden": "花园",
    "Garnet": "石榴石",
    "Geometric pattern": "几何图案",
    "Gertie": "格蒂",
    "Giant snakehead": "大 snakehead",
    "Giant trevally": "珍鲹",
    "Girl": "女孩",
    "Gold & silver": "金银",
    "Gold bars": "金条",
    "Gold leaf": "金叶",
    "Golden yellow": "金黄色",
    "Goldfish": "金鱼",
    "Graffiti": "涂鸦",
    "Gray & blue": "灰蓝",
    "Gray & green": "灰绿",
    "Gray & white": "灰白",
    "Gray wood & tile": "灰木瓷砖",
    "Gray, white & light blue": "灰白浅蓝",
    "Greater scaup": "斑背潜鸭",
    "Green & black": "绿黑",
    "Green & blue": "绿蓝",
    "Green & navy": "绿藏青",
    "Green & orange": "绿橙",
    "Green & purple": "绿紫",
    "Green & red": "绿红",
    "Green & white": "绿白",
    "Green apple": "青苹果",
    "Green bamboo": "绿竹",
    "Green curry": "绿咖喱",
    "Green logo": "绿标志",
    "Green ribbons": "绿丝带",
    "Green roof": "绿屋顶",
    "Green smoothie": "绿色冰沙",
    "Green stripes": "绿条纹",
    "Green tea": "绿茶",
    "Green-striped necktie": "绿条纹领带",
    "Greige": "灰米色",
    "Handprints": "手印",
    "Hawk": "鹰",
    "Hibiscus flowers": "芙蓉花",
    "Home": "家",
    "Hot air balloons": "热气球",
    "Hot dog": "热狗",
    "Hot-and-sour soup": "酸辣汤",
    "Hungry gnome": "饥饿地精",
    "Ice": "冰",
    "Ice blue": "冰蓝",
    "Ice green": "冰绿",
    "Ice orange": "冰橙",
    "Ice pink": "冰粉",
    "Ice purple": "冰紫",
    "Ice yellow": "冰黄",
    "Illustration": "插画",
    "In progress": "进行中",
    "Indigo blue": "靛蓝",
    "Items": "物品",
    "Japanese literature": "日本文学",
    "Ketchup and mustard": "番茄酱芥末",
    "Kids' game": "儿童游戏",
    "Kiwifruit": "猕猴桃",
    "Kyoto in summer": "夏日京都",
    "La France": "法国",
    "Labeled": "有标签",
    "Laid-back gnome": "悠闲地精",
    "Language classroom": "语言教室",
    "Le Lectier": "Le Lectier 梨",
    "Leisure boat": "休闲船",
    "Lemon & white": "柠檬白",
    "Letter": "信件",
    "Light blue & black": "浅蓝黑",
    "Light blue & pink": "浅蓝粉",
    "Light blue & red": "浅蓝红",
    "Light blue & salmon pink": "浅蓝鲑鱼粉",
    "Light brown & black": "浅棕黑",
    "Lime & light blue": "青柠浅蓝",
    "Lime & pink": "青柠粉",
    "Lime & purple": "青柠紫",
    "Lime yellow": "青柠黄",
    "Literature": "文学",
    "Love": "爱",
    "Lumberjack": "伐木工",
    "M": "M",
    "Magenta": "洋红",
    "Mallard": "绿头鸭",
    "Mango": "芒果",
    "Maple": "枫木",
    "Marine": "海洋",
    "Marine blue": "海蓝",
    "Marine emerald": "海翡翠",
    "Marufukumaru - Bounty": "丸福丸-赏金",
    "Math": "数学",
    "Midnight": "午夜",
    "Minestrone": "蔬菜汤",
    "Mixed wood": "混合木",
    "Monochrome": "单色",
    "Monotone": "单色调",
    "Mosaic tile": "马赛克瓷砖",
    "Moss green": "苔藓绿",
    "Mossy": "苔藓",
    "Mossy stone": "苔藓石",
    "Mountain": "山",
    "Multicolor": "多彩",
    "Multiplication tables": "乘法表",
    "Muslin": "平纹细布",
    "Mustard": "芥末色",
    "Natural & green": "自然绿",
    "Natural & red": "自然红",
    "Natural & silver": "自然银",
    "Natural & white": "自然白",
    "Natural sand": "自然沙",
    "Navy & blue": "藏青蓝",
    "Navy & gray": "藏青灰",
    "Navy & red": "藏青红",
    "Navy blue": "藏蓝色",
    "Navy, light blue & pink": "藏青浅蓝粉",
    "Neon blue & neon red": "霓虹蓝红",
    "Nintenmaru - Big Catch": "任天丸-大渔",
    "No ads": "无广告",
    "No coating": "无涂层",
    "No Entry": "禁止进入",
    "No finish": "无饰面",
    "No Parking": "禁止停车",
    "Nostalgia": "怀旧",
    "Oak": "橡木",
    "Ocean blue": "海蓝",
    "Ocean creatures": "海洋生物",
    "Ochre": "赭石",
    "Octopus": "章鱼",
    "Off-white": "米白",
    "Old": "旧",
    "Olive": "橄榄",
    "Ongoing work": "进行中",
    "Ongoing work - Big bro": "进行中-大哥",
    "Ongoing work - Little bro": "进行中-小弟",
    "Orange & black": "橙黑",
    "Orange & blue": "橙蓝",
    "Orange & red": "橙红",
    "Orange & white": "橙白",
    "Orange wood": "橙木",
    "Orange, yellow & black": "橙黄黑",
    "Oranges": "橙子",
    "Orange-yellow": "橙黄",
    "Ordinary mushroom": "普通蘑菇",
    "Oribe-style": "织部风格",
    "Pacific Ocean": "太平洋",
    "Painter's palette": "调色板",
    "Pale blue": "淡蓝",
    "Pale green": "淡绿",
    "Pale orange": "淡橙",
    "Pale sky": "淡天蓝",
    "Parrot green": "鹦鹉绿",
    "Passion": "热情",
    "Passionate gnome": "热情的地精",
    "Pasta": "意面",
    "Peacock blue": "孔雀蓝",
    "Pearl": "珍珠",
    "Pearl white": "珍珠白",
    "Pears": "梨",
    "Periodic table": "元素周期表",
    "Pine": "松木",
    "Pink & purple": "粉紫",
    "Pink & yellow": "粉黄",
    "Pink with green ribbon": "粉绿丝带",
    "Pink wood": "粉木",
    "Pink-white": "粉白",
    "Pippa": "皮帕",
    "Pirate ship": "海盗船",
    "Pizza": "披萨",
    "Playtime": "游戏时间",
    "Plum": "李子",
    "Pop flowers": "流行花",
    "Pop pattern": "流行图案",
    "Powder white": "粉白",
    "Puppers": "小狗",
    "Purple & green": "紫绿",
    "Purple & orange": "紫橙",
    "Purple & pink": "紫粉",
    "Purple & yellow": "紫黄",
    "Purple sweet potato": "紫薯",
    "Purple-striped necktie": "紫条纹领带",
    "Quilted animals": "拼布动物",
    "Quilted pattern": "拼布图案",
    "Ratatouille": "炖菜",
    "Rattan": "藤条",
    "Rebel gnome": "叛逆地精",
    "Red & black": "红黑",
    "Red & blue": "红蓝",
    "Red & green": "红绿",
    "Red & light blue": "红浅蓝",
    "Red & orange": "红橙",
    "Red & pink": "红粉",
    "Red & white": "红白",
    "Red & yellow": "红黄",
    "Red apple": "红苹果",
    "Red brick": "红砖",
    "Red exit": "红出口",
    "Red logo": "红标志",
    "Red mushroom": "红蘑菇",
    "Red necktie": "红领带",
    "Red ribbons": "红丝带",
    "Red roof": "红屋顶",
    "Red snapper": "红鲷鱼",
    "Red stripes": "红条纹",
    "Red with hearts": "红心",
    "Red wood": "红木",
    "Red, white & blue": "红白蓝",
    "Reddish brown": "红棕",
    "Red-striped necktie": "红条纹领带",
    "Reference": "参考",
    "Reflective stripes": "反光条纹",
    "Reliable gnome": "可靠地精",
    "Resident Services": "居民服务",
    "Retro ride": "复古骑行",
    "Ring": "戒指",
    "Roary": "罗里",
    "Roasting marshmallows": "烤棉花糖",
    "Rose gold": "玫瑰金",
    "Rose pink": "玫瑰粉",
    "Rose red & navy": "玫瑰红藏青",
    "Royal": "皇家",
    "Royal coach": "皇家马车",
    "Ruby red": "红宝石红",
    "Rusted iron": "锈铁",
    "Sales meeting": "销售会议",
    "Sandalwood": "檀香木",
    "Sash": "腰带",
    "Savannah": "草原",
    "Saxon blue": "萨克森蓝",
    "Schedule": "日程",
    "Sepia": "深褐色",
    "Shabby": "破旧",
    "Sheep": "绵羊",
    "Shocking pink": " shocking 粉",
    "Shop": "商店",
    "Signature": "签名",
    "Silver & blue": "银蓝",
    "Silver & green": "银绿",
    "Simple house": "简单房屋",
    "Simple path game": "简单路径游戏",
    "Simple pattern": "简单图案",
    "Sky blue": "天蓝",
    "Sleepy gnome": "瞌睡地精",
    "Slippery": "滑",
    "Smoke-cured bamboo": "烟熏竹",
    "Snow": "雪",
    "Snow camouflage": "雪地迷彩",
    "Soccer ball": "足球",
    "Soda": "苏打",
    "Southwestern flair": "西南风情",
    "Souvenir": "纪念品",
    "Space silver": "太空银",
    "Splatter up": "飞溅",
    "Sponsor": "赞助商",
    "Sports": "运动",
    "Spot-billed": "斑嘴",
    "Spotted": "斑点",
    "Sprightly gnome": "活泼地精",
    "Spring blooming": "春花",
    "Squid": "鱿鱼",
    "Stacks of cash": "现金堆",
    "Stainless": "不锈钢",
    "Stainless steel": "不锈钢",
    "Standard": "标准",
    "Star": "星星",
    "Stars": "星星",
    "Steamer duck": "蒸汽鸭",
    "Still Life": "静物",
    "Stone house": "石屋",
    "Stop": "停止",
    "Strange mushroom": "奇怪蘑菇",
    "Strategy meeting": "战略会议",
    "Strawberries": "草莓",
    "Strawberry & flowers": "草莓花",
    "Strawberry buttercream": "草莓奶油",
    "Strawberry flavored": "草莓味",
    "Strawberry swirl": "草莓旋纹",
    "Street with Trees": "树街",
    "Striped house": "条纹屋",
    "Stripes": "条纹",
    "Sunburst": "日爆",
    "Sunset": "日落",
    "Surprised gnome": "惊讶地精",
    "Sweet plaid": "甜美格子",
    "Sweet Roses": "甜玫瑰",
    "Tailors": "裁缝",
    "Tea": "茶",
    "Teak": "柚木",
    "Teddy bear": "泰迪熊",
    "Territory game": "领地游戏",
    "Textbook": "教科书",
    "The Mesozoic world": "中生代世界",
    "The ocean blue": "海洋蓝",
    "Tiger": "老虎",
    "Tomatoes": "番茄",
    "Topaz": "黄玉",
    "Trading ship": "贸易船",
    "Tree peonies": "牡丹",
    "Trees": "树",
    "Tricolored": "三色",
    "Tropical": "热带",
    "Tsurukamemaru - Longevity": "鹤龟丸-长寿",
    "Tulip": "郁金香",
    "Turquoise": "绿松石",
    "Tweed": "粗花呢",
    "Twilight": "暮光",
    "Two-toned numbers": "双色数字",
    "Two-toned tile": "双色瓷砖",
    "Unfinished wood": "未完工木",
    "Unglazed": "未上釉",
    "University": "大学",
    "Unlabeled can": "无标签罐头",
    "Uomasamaru III - Launch": "鱼政丸三号-发射",
    "Vanilla & chocolate": "香草巧克力",
    "Vanilla flavored": "香草味",
    "Veggie sauté": "炒蔬菜",
    "Vermilion": "朱砂",
    "Vertical stripes": "竖条纹",
    "Vivid": "鲜艳",
    "Volleyball": "排球",
    "Walnut": "胡桃木",
    "Warning": "警告",
    "Washed out": "褪色",
    "Watermelon": "西瓜",
    "Western literature": "西方文学",
    "Whipped-cream topping": "鲜奶油 topping",
    "White & blue": "白蓝",
    "White & red": "白红",
    "White & silver": "白银",
    "White birch": "白桦",
    "White granite": "白花岗岩",
    "White marble": "白大理石",
    "White mushroom": "白蘑菇",
    "White peach": "白桃",
    "White sand": "白沙",
    "White with blue ribbon": "白蓝丝带",
    "White wood & tile": "白木瓷砖",
    "White, blue & green": "白蓝绿",
    "White, yellow & red": "白黄红",
    "White-striped necktie": "白条纹领带",
    "Wild": "野生",
    "Win or lose": "输赢",
    "Winter": "冬季",
    "Wisteria": "紫藤",
    "With ads": "有广告",
    "Wood grain": "木纹",
    "Wood house": "木屋",
    "Wooden": "木质",
    "Words of wisdom": "智慧之言",
    "Writer's block": "写作障碍",
    "Yellow & avocado": "黄牛油果",
    "Yellow & black": "黄黑",
    "Yellow & blue": "黄蓝",
    "Yellow & navy": "黄藏青",
    "Yellow & orange": "黄橙",
    "Yellow & purple": "黄紫",
    "Yellow & red": "黄红",
    "Yellow amber": "黄琥珀",
    "Yellow mushroom": "黄蘑菇",
    "Yellow peach": "黄桃",
    "Yellow with red ribbon": "黄红丝带",
    "Yellow-green": "黄绿",
    "Zebra": "斑马",
    "→": "右箭头",
    "→ →": "双右箭头",
    "→ → →": "三右箭头",
    "After school": "放学后",
    "Airport": "机场",
    "Alphabet": "字母",
    "Andesite": "安山岩",
    "Angel": "天使",
    "Animal": "动物",
    "Apples": "苹果",
    "Aquamarine": "海蓝宝石",
    "Artistic": "艺术",
    "Atlantic Ocean": "大西洋",
    "Balls": "球",
    "Bananas": "香蕉",
    "Baseball": "棒球",
    "Basketball": "篮球",
    "Bedford": "贝德福德",
    "Beginning stages": "初期",
    "Beige": "米色",
    "Berry": "浆果",
    "Birch": "桦木",
    "Bird": "鸟",
    "Black": "黑色",
    "Blank": "空白",
    "Blue": "蓝色",
    "Bronze": "青铜",
    "Brown": "棕色",
    "Camouflage": "迷彩",
    "Checkered": "格子",
    "Cherries": "樱桃",
    "Cherry": "樱桃",
    "Chic": "时尚",
    "Classic": "经典",
    "Copper": "铜",
    "Cream": "奶油",
    "Denim": "牛仔",
    "Elegant": "优雅",
    "Fairy tale": "童话",
    "Fall": "秋季",
    "Floral": "花卉",
    "Forest": "森林",
    "Gold": "金色",
    "Gorgeous": "华丽",
    "Gray": "灰色",
    "Green": "绿色",
    "Hibiscus": "芙蓉",
    "Hydrangea": "绣球",
    "Ivory": "象牙",
    "Light blue": "浅蓝",
    "Light brown": "浅棕",
    "Light gray": "浅灰",
    "Lily": "百合",
    "Magenta": "洋红",
    "Melon": "甜瓜",
    "Modern": "现代",
    "Moss green": "苔绿",
    "Orange": "橙色",
    "Peach": "桃子",
    "Pear": "梨",
    "Pink": "粉色",
    "Plaid": "格子",
    "Purple": "紫色",
    "Rainbow": "彩虹",
    "Red": "红色",
    "Retro": "复古",
    "Rock": "岩石",
    "Rose": "玫瑰",
    "Shell": "贝壳",
    "Silver": "银色",
    "Sky": "天空",
    "Spring": "春季",
    "Steel": "钢铁",
    "Summer": "夏季",
    "Sun": "太阳",
    "Tangerine": "柑橘",
    "Traditional": "传统",
    "Violet": "紫罗兰",
    "White": "白色",
    "Winter": "冬季",
    "Wood": "木材",
    "Yellow": "黄色",
    "Zelkova wood": "榉木"
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
    // 直接使用 filename 构建本地图片路径
    var item = allItems.find(function(it){ return it.id == itemId; });
    if (item && item.variants && item.variants.length > 0) {
        // 如果有变体，使用对应变体的 filename
        var variantIndex = parseInt(suffix) || 0;
        if (variantIndex >= 0 && variantIndex < item.variants.length) {
            // 兼容精简格式 (v/f) 和完整格式 (variation/filename)
            var variantFilename = item.variants[variantIndex].f || item.variants[variantIndex].filename;
            if (variantFilename) {
                // 修复 2026-07-18: 家具 Remake 图片 filename 缺少下划线
                var fixedFn = variantFilename.replace(/([^_])Remake/, "$1_Remake");
                return LOCAL_IMG + fixedFn + ".png";
            }
        }
        // 回退到 base filename
        if (item.filename) {
            var fixedFn2 = item.filename.replace(/([^_])Remake/, "$1_Remake");
            return LOCAL_IMG + fixedFn2 + ".png";
        }
    }
    if (item && item.filename) {
        var fixedFn3 = item.filename.replace(/([^_])Remake/, "$1_Remake");
        return LOCAL_IMG + fixedFn3 + ".png";
    }
    // 回退到 IMG_MAP 查找
    var hex = cleanHexPadded(parseInt(itemId).toString(16));
    var fn = IMG_MAP[hex];
    if (!fn) return "";
    return LOCAL_IMG + fn + ".png";
}
function getCdnImageURL(item) {
    // 修复 2026-07-18: 同上，Remake 前补下划线
    if (item.filename) {
        var fixedFn = item.filename.replace(/([^_])Remake/, "$1_Remake");
        return LOCAL_IMG + fixedFn + ".png";
    }
    return "";
}
function getLocalImageURL(fn) { return LOCAL_IMG + fn + ".png"; }
function getVillagerImageURL(code) {
    // 使用原始文件名格式的村民图片路径
    // 村民代码首字母需要大写 (如 bul08 -> Bul08)
    var capitalizedCode = code.charAt(0).toUpperCase() + code.slice(1);
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
    var opts = '<option value="all">全部分类 (' + allItems.length + ')</option>';
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
        btn.textContent = lang==="zhs"?"选规格":"選規格";
        btn.addEventListener("click",function(e){ e.stopPropagation(); openDetailModal(item); });
        actions.appendChild(btn);
    } else {
        var addBtn = document.createElement("button");
        addBtn.className = "item-btn";
        addBtn.innerHTML = '<i class="fas fa-plus"></i>';
        addBtn.addEventListener("click",function(e){
            e.stopPropagation();
            addToBackpack(item,"normal","0");
            showToast(lang==="zhs"?"已添加到背包":"已添加到背包");
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
        emptyState.querySelector(".empty-text").textContent = lang==="zhs"?"没有找到匹配的物品":"沒有找到匹配的物品";
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
        showToast(lang==="zhs"?"背包已满（40个物品）":"背包已滿（40個物品）");
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
        showToast(lang==="zhs"?"背包为空，无法复制指令":"背包為空，無法複製指令");
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
            copyBtn.textContent = lang==="zhs"?"已复制":"已複製";
            setTimeout(function(){ copyBtn.classList.remove("copied"); copyBtn.textContent=lang==="zhs"?"复制指令":"複製指令"; },3000);
        }).catch(function(){ fallbackCopy(cmd); });
    } else { fallbackCopy(cmd); }
}
function fallbackCopy(text) {
    var ta = document.getElementById("command-text");
    ta.value = text; ta.select();
    try {
        document.execCommand("copy");
        copyBtn.classList.add("copied");
        copyBtn.textContent = lang==="zhs"?"已复制":"已複製";
    } catch(e) { copyBtn.textContent = lang==="zhs"?"复制失败":"複製失敗"; }
    setTimeout(function(){ copyBtn.classList.remove("copied"); copyBtn.textContent=lang==="zhs"?"复制指令":"複製指令"; },3000);
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
    st.textContent = lang==="zhs"?"选择油漆":"選擇油漆";
    so.innerHTML = "";
    
    // 只显示唯一的变体（去重）
    var uniqueVariants = [];
    var seen = {};
    item.variants.forEach(function(v, i) {
        // 兼容精简格式 (v/f) 和完整格式 (variation/filename)
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
                // 修复 2026-07-18: Variant Remake_X_Y 显示英文 -> 中文"款式 N"
        var __vLbl;
        if (VARIATION_ZH[v.variation]) {
            __vLbl = VARIATION_ZH[v.variation];
        } else if (v.variation && /^Variant Remake_(\d+)_(\d+)$/.test(v.variation)) {
            var __vm = v.variation.match(/^Variant Remake_(\d+)_(\d+)$/);
            __vLbl = "款式 " + (parseInt(__vm[1]) + 1);
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
        msg.textContent = lang==="zhs"?"仅普通物品可选择风格样式":"僅普通物品可選擇風格样式";
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
    showToast(lang==="zhs"?"已添加到背包":"已添加到背包");
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
        grid.innerHTML = '<div class="empty-state"><div class="empty-text">'+(lang==="zhs"?"没有找到匹配的村民":"沒有找到匹配的村民")+'</div></div>';
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
        showToast(lang==="zhs"?"已邀请村民":"已邀請村民");
    } else showToast(lang==="zhs"?"请选择一位村民":"請選擇一位村民");
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
    if (!copyBtn.classList.contains("copied")) copyBtn.textContent = lang==="zhs"?"复制指令":"複製指令";
    var prevCat = catSelect.value;
    populateCatSelect();
    if (sheetList.indexOf(prevCat) !== -1) catSelect.value = prevCat;
    else catSelect.value = "all";
    document.querySelectorAll(".item-btn-specs").forEach(function(b){ b.textContent = lang==="zhs"?"选规格":"選規格"; });
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
    showToast(lang==="zhs"?"已取消邀请村民":"已取消邀請村民");
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
    showToast("数据加载失败，请刷新页面");
});
})();




