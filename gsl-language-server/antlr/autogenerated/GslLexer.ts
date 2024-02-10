// Generated from gsl-language-server/antlr/Gsl.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class GslLexer extends antlr.Lexer {
    public static readonly STRING = 1;
    public static readonly EMPTY_COMMENT = 2;
    public static readonly COMMENT = 3;
    public static readonly BACKSLASH_NEWLINE = 4;
    public static readonly SPACE = 5;
    public static readonly TAB = 6;
    public static readonly GOTO = 7;
    public static readonly LABEL = 8;
    public static readonly COMPARATOR = 9;
    public static readonly V_REGISTER = 10;
    public static readonly A_REGISTER = 11;
    public static readonly B_REGISTER = 12;
    public static readonly S_REGISTER = 13;
    public static readonly T_REGISTER = 14;
    public static readonly SYS_BREAK = 15;
    public static readonly SYS_BROWSER_BUFFER = 16;
    public static readonly SYS_CALLBACK = 17;
    public static readonly SYS_CALLEDBY = 18;
    public static readonly SYS_DESCMODE = 19;
    public static readonly SYS_DONEMATCH = 20;
    public static readonly SYS_ERROR = 21;
    public static readonly SYS_GAMECODE = 22;
    public static readonly SYS_GAMENAME = 23;
    public static readonly SYS_INTTABLE = 24;
    public static readonly SYS_LASTMATCH = 25;
    public static readonly SYS_LOADINGFROMSAVE = 26;
    public static readonly SYS_MATCH = 27;
    public static readonly SYS_MAXLOOPS = 28;
    public static readonly SYS_MAXROOMCREATES = 29;
    public static readonly SYS_MAXTEXTCHANGES = 30;
    public static readonly SYS_MAXUOBJS = 31;
    public static readonly SYS_MENUITEMLABEL = 32;
    public static readonly SYS_PARSE_ERROR_1 = 33;
    public static readonly SYS_PARSE_ERROR_2 = 34;
    public static readonly SYS_PARSE_ERROR_3 = 35;
    public static readonly SYS_PARSE_ERROR_4 = 36;
    public static readonly SYS_REPLYADDRESS = 37;
    public static readonly SYS_STIME = 38;
    public static readonly SYS_STRTABLE = 39;
    public static readonly SYS_THISSCRIPT = 40;
    public static readonly SYS_TIME = 41;
    public static readonly SYS_USERS = 42;
    public static readonly CARET_OPERATOR = 43;
    public static readonly PLAYER_NODE = 44;
    public static readonly ROOM_NODE = 45;
    public static readonly CREATURE_NODE = 46;
    public static readonly OBJECT_NODE = 47;
    public static readonly EVENT_NODE = 48;
    public static readonly IF = 49;
    public static readonly IFNOT = 50;
    public static readonly ELSE_IF = 51;
    public static readonly ELSE_IFNOT = 52;
    public static readonly ELSE = 53;
    public static readonly LOOP = 54;
    public static readonly WHEN = 55;
    public static readonly IS = 56;
    public static readonly FASTPOP = 57;
    public static readonly FASTPUSH = 58;
    public static readonly POP = 59;
    public static readonly PUSH = 60;
    public static readonly THEN = 61;
    public static readonly DOT = 62;
    public static readonly ACTION = 63;
    public static readonly ADD_GROUP = 64;
    public static readonly ADDEFFECT = 65;
    public static readonly ADDEXPR = 66;
    public static readonly ADDMENUITEM = 67;
    public static readonly ALTWINOFF = 68;
    public static readonly ALTWINON = 69;
    public static readonly ANIM = 70;
    public static readonly ASSERT = 71;
    public static readonly ATTACK = 72;
    public static readonly BEHIND = 73;
    public static readonly BITGET = 74;
    public static readonly BITSET = 75;
    public static readonly BOLDOFF = 76;
    public static readonly BOLDON = 77;
    public static readonly BORDER = 78;
    public static readonly BUGREPORT = 79;
    public static readonly CALL = 80;
    public static readonly CALLMATCH = 81;
    public static readonly CALLPS = 82;
    public static readonly CANDO = 83;
    public static readonly CHECKEFFECT = 84;
    public static readonly CLEAR = 85;
    public static readonly CLEARMENU = 86;
    public static readonly CLEARTABLE = 87;
    public static readonly CLOSELOCKER = 88;
    public static readonly CMGR = 89;
    public static readonly COMPAREITEM = 90;
    public static readonly CONTRIBUTE = 91;
    public static readonly COPY = 92;
    public static readonly CREATE = 93;
    public static readonly CREATEITEM = 94;
    public static readonly CREATEROOM = 95;
    public static readonly CREATETABLE = 96;
    public static readonly CREATETEXT = 97;
    public static readonly CRITICAL = 98;
    public static readonly DECODEATTACK = 99;
    public static readonly DEFAULT = 100;
    public static readonly DELETETABLE = 101;
    public static readonly DEPLOY = 102;
    public static readonly DIRADD = 103;
    public static readonly DIRSEND = 104;
    public static readonly DOCREATE = 105;
    public static readonly DOLOOK = 106;
    public static readonly DROP = 107;
    public static readonly ENCODEATTACK = 108;
    public static readonly END2EFFECT = 109;
    public static readonly ENDEFFECT = 110;
    public static readonly ENDNEFFECT = 111;
    public static readonly EXPAND = 112;
    public static readonly FEMISC = 113;
    public static readonly FEUPDATE = 114;
    public static readonly FILLTABLE = 115;
    public static readonly FIRSTBLOOD = 116;
    public static readonly FIRSTOBJ = 117;
    public static readonly FIRSTPLAYER = 118;
    public static readonly FIRSTWATCH = 119;
    public static readonly GATHER = 120;
    public static readonly GATHERFIRST = 121;
    public static readonly GATHERFIRSTROOM = 122;
    public static readonly GATHERNEXT = 123;
    public static readonly GATHERNEXTROOM = 124;
    public static readonly GATHERPLAYER = 125;
    public static readonly GETCONTRIBUTORS = 126;
    public static readonly GETINDEXOF = 127;
    public static readonly GETMAX = 128;
    public static readonly GETNAMEOF = 129;
    public static readonly GETPS = 130;
    public static readonly GETTABLE = 131;
    public static readonly GETTEXT = 132;
    public static readonly GETWATCH = 133;
    public static readonly GLUE = 134;
    public static readonly GROUND = 135;
    public static readonly HASH1 = 136;
    public static readonly HASH2 = 137;
    public static readonly HEAL = 138;
    public static readonly HEALP = 139;
    public static readonly HURT = 140;
    public static readonly HUSH = 141;
    public static readonly INFO = 142;
    public static readonly INFOITEM = 143;
    public static readonly INJURE = 144;
    public static readonly INPHRASE = 145;
    public static readonly INVENTORY = 146;
    public static readonly ISINJURED = 147;
    public static readonly ISNAMEFREE = 148;
    public static readonly ITEMSNAPSHOT = 149;
    public static readonly KILL = 150;
    public static readonly KILLALLNP = 151;
    public static readonly LAUNCH = 152;
    public static readonly LAUNCHURL = 153;
    public static readonly LOAD = 154;
    public static readonly LOADCHARDATA = 155;
    public static readonly LOG = 156;
    public static readonly LOGMSG = 157;
    public static readonly LOGTO = 158;
    public static readonly LOGTOINDEX = 159;
    public static readonly LOOKROOM = 160;
    public static readonly LOWERCASE = 161;
    public static readonly MMGR = 162;
    public static readonly MOVE = 163;
    public static readonly MSG = 164;
    public static readonly MSGFSYS = 165;
    public static readonly MSGGM = 166;
    public static readonly MSGP = 167;
    public static readonly MSGR = 168;
    public static readonly MSGRGM = 169;
    public static readonly MSGRX2 = 170;
    public static readonly MSGRXP = 171;
    public static readonly MSGS = 172;
    public static readonly MSGSGM = 173;
    public static readonly MSGSYS = 174;
    public static readonly MSGW = 175;
    public static readonly NAMEEND = 176;
    public static readonly NAMESTART = 177;
    public static readonly NEXTBLOOD = 178;
    public static readonly NEXTEFFECT = 179;
    public static readonly NEXTNODE = 180;
    public static readonly NEXTOBJ = 181;
    public static readonly NEXTPLAYER = 182;
    public static readonly NEXTROOM = 183;
    public static readonly NEXTWATCH = 184;
    public static readonly OPENLOCKER = 185;
    public static readonly OR_YELL = 186;
    public static readonly OUTPHRASE = 187;
    public static readonly PARSE = 188;
    public static readonly PARSEDECIMAL = 189;
    public static readonly PAUSEEFFECTS = 190;
    public static readonly PID = 191;
    public static readonly PLAYERCOUNT = 192;
    public static readonly PREMPT = 193;
    public static readonly PROFILE = 194;
    public static readonly RANDOM = 195;
    public static readonly REM2EFFECT = 196;
    public static readonly REMEFFECT = 197;
    public static readonly REMMENUITEM = 198;
    public static readonly REMNEFFECT = 199;
    public static readonly REMOVE = 200;
    public static readonly REMOVEVARFIELD = 201;
    public static readonly REMOVEVARGROUP = 202;
    public static readonly RESIST = 203;
    public static readonly RESIZETABLE = 204;
    public static readonly RESTOREFIELDS = 205;
    public static readonly RESUMEEFFECTS = 206;
    public static readonly RMCALL = 207;
    public static readonly RNDDIR = 208;
    public static readonly RNDEXIT = 209;
    public static readonly RNDPLYR = 210;
    public static readonly ROLLIN = 211;
    public static readonly ROOMEND = 212;
    public static readonly ROOMSTART = 213;
    public static readonly ROOTEXISTOF = 214;
    public static readonly ROUNDTIME = 215;
    public static readonly SAVEFIELDS = 216;
    public static readonly SCAN = 217;
    public static readonly SCANEFFECT = 218;
    public static readonly SCRIPT = 219;
    public static readonly SET = 220;
    public static readonly SETNAME = 221;
    public static readonly SETTABLE = 222;
    public static readonly SETTEXT = 223;
    public static readonly SPARSE = 224;
    public static readonly START = 225;
    public static readonly STOP = 226;
    public static readonly STORECHARDATA = 227;
    public static readonly STOV = 228;
    public static readonly SUBMIT = 229;
    public static readonly SUBSTRING = 230;
    public static readonly TABLEINFO = 231;
    public static readonly TELLWEB = 232;
    public static readonly TEST_ASSERT = 233;
    public static readonly TEST2EFFECT = 234;
    public static readonly TESTEFFECT = 235;
    public static readonly TPARSE = 236;
    public static readonly UNDER = 237;
    public static readonly UNDEROFF = 238;
    public static readonly UNDERON = 239;
    public static readonly UNLOAD = 240;
    public static readonly UPDATESRVRSTUFF = 241;
    public static readonly UPDATETABLE = 242;
    public static readonly UPPERCASE = 243;
    public static readonly VERB = 244;
    public static readonly VTOS = 245;
    public static readonly WATCH = 246;
    public static readonly WHERE = 247;
    public static readonly WHEREAT = 248;
    public static readonly WHEREITEM = 249;
    public static readonly WRITECHAR = 250;
    public static readonly ALL = 251;
    public static readonly ALLPLAYERS = 252;
    public static readonly AREA = 253;
    public static readonly BBS = 254;
    public static readonly BHPT = 255;
    public static readonly BOOK = 256;
    public static readonly BOOKEDIT = 257;
    public static readonly CALLBACK = 258;
    public static readonly CHECK = 259;
    public static readonly CODE = 260;
    public static readonly DEBUG = 261;
    public static readonly DONEMATCH = 262;
    public static readonly ENCUM = 263;
    public static readonly EXIST = 264;
    public static readonly FIELD = 265;
    public static readonly FLAGS = 266;
    public static readonly FOR = 267;
    public static readonly FROM = 268;
    public static readonly HASFIELD = 269;
    public static readonly HEALTH = 270;
    public static readonly HITS = 271;
    public static readonly INDEX = 272;
    public static readonly INJURIES = 273;
    public static readonly ISEXACTLY = 274;
    public static readonly ISNOTEXACTLY = 275;
    public static readonly ISNOTOFTYPE = 276;
    public static readonly ISOFTYPE = 277;
    public static readonly LACKSFIELD = 278;
    public static readonly LEFTHAND = 279;
    public static readonly MANA = 280;
    public static readonly MATCH = 281;
    public static readonly MATCHSPELL = 282;
    public static readonly MAX_HEALTH = 283;
    public static readonly MAX_MANA = 284;
    public static readonly MAX_SPIRIT = 285;
    public static readonly MAY_MATCH = 286;
    public static readonly MERCHANT = 287;
    public static readonly MESSAGE = 288;
    public static readonly MODE = 289;
    public static readonly MUST_MATCH = 290;
    public static readonly MYSTERY = 291;
    public static readonly NONEXIST = 292;
    public static readonly OBJECTS = 293;
    public static readonly POWER = 294;
    public static readonly PRIORITY = 295;
    public static readonly REPORT_TO = 296;
    public static readonly RIGHTHAND = 297;
    public static readonly ROOM = 298;
    public static readonly SAMETYPE = 299;
    public static readonly SCARS = 300;
    public static readonly SEG = 301;
    public static readonly SIZE = 302;
    public static readonly SPELL = 303;
    public static readonly SPIRIT = 304;
    public static readonly STANCE = 305;
    public static readonly TABLE = 306;
    public static readonly TARGET_ACCOUNT = 307;
    public static readonly TARGET_INDEX = 308;
    public static readonly TARGET_NAME = 309;
    public static readonly TARGET_OTHER = 310;
    public static readonly TARGET_UID = 311;
    public static readonly TARGET = 312;
    public static readonly TEXT = 313;
    public static readonly TMPEXPR = 314;
    public static readonly TOWARDS = 315;
    public static readonly TYPE = 316;
    public static readonly USING = 317;
    public static readonly VALUE1 = 318;
    public static readonly VALUE2 = 319;
    public static readonly VARFIELD = 320;
    public static readonly WEB_CM = 321;
    public static readonly WITH = 322;
    public static readonly WSPELL = 323;
    public static readonly TYPE_D = 324;
    public static readonly AT = 325;
    public static readonly BY = 326;
    public static readonly IN = 327;
    public static readonly OF = 328;
    public static readonly ON = 329;
    public static readonly TO = 330;
    public static readonly VS = 331;
    public static readonly X = 332;
    public static readonly Y = 333;
    public static readonly Z = 334;
    public static readonly NUMBER = 335;
    public static readonly LPARAN = 336;
    public static readonly RPARAN = 337;
    public static readonly AND = 338;
    public static readonly OR = 339;
    public static readonly COMMA = 340;
    public static readonly LBRACK = 341;
    public static readonly RBRACK = 342;
    public static readonly PLUS = 343;
    public static readonly MINUS = 344;
    public static readonly DIVIDE = 345;
    public static readonly MULTIPLY = 346;
    public static readonly PERCENT_SYMBOL = 347;
    public static readonly COLON = 348;
    public static readonly UNDERSCORE = 349;
    public static readonly WORD = 350;
    public static readonly NEWLINE = 351;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, "'$break'", "'$browser_buffer'", "'$callback'", 
        "'$calledby'", "'$descmode'", "'$donematch'", "'$error'", "'$gamecode'", 
        "'$gamename'", "'$inttable'", "'$lastmatch'", "'$loadingfromsave'", 
        "'$match'", "'$maxloops'", "'$maxroomcreates'", "'$maxtextchanges'", 
        "'$maxuobjs'", "'$menuitemlabel'", "'$parse_error_1'", "'$parse_error_2'", 
        "'$parse_error_3'", "'$parse_error_4'", "'$replyaddress'", "'$stime'", 
        "'$strtable'", "'$thisscript'", "'$time'", "'$users'", null, null, 
        null, null, null, null, "'if'", "'ifnot'", "'else_if'", "'else_ifnot'", 
        "'else'", "'loop'", "'when'", "'is'", "'fastpop'", "'fastpush'", 
        "'pop'", "'push'", "'then'", "'.'", "'action'", "'addgroup'", "'addeffect'", 
        "'addexpr'", "'addmenuitem'", "'altwinoff'", "'altwinon'", "'anim'", 
        "'assert'", "'attack'", "'behind'", "'bitget'", "'bitset'", "'boldoff'", 
        "'boldon'", "'border'", "'bugreport'", "'call'", "'callmatch'", 
        "'callps'", "'cando'", "'checkeffect'", "'clear'", "'clearmenu'", 
        "'cleartable'", "'closelocker'", "'cmgr'", "'compareitem'", "'contribute'", 
        "'copy'", "'create'", "'createitem'", "'createroom'", "'createtable'", 
        "'createtext'", "'critical'", "'decodeattack'", "'default'", "'deletetable'", 
        "'deploy'", "'diradd'", "'dirsend'", "'docreate'", "'dolook'", "'drop'", 
        "'encodeattack'", "'end2effect'", "'endeffect'", "'endneffect'", 
        "'expand'", "'femisc'", "'feupdate'", "'filltable'", "'firstblood'", 
        "'firstobj'", "'firstplayer'", "'firstwatch'", "'gather'", "'gatherfirst'", 
        "'gatherfirstroom'", "'gathernext'", "'gathernextroom'", "'gatherplayer'", 
        "'getcontributors'", "'getindexof'", "'getmax'", "'getnameof'", 
        "'getps'", "'gettable'", "'gettext'", "'getwatch'", "'glue'", "'ground'", 
        "'hash1'", "'hash2'", "'heal'", "'healp'", "'hurt'", "'hush'", "'info'", 
        "'infoitem'", "'injure'", "'inphrase'", "'inventory'", "'isinjured'", 
        "'isnamefree'", "'itemsnapshot'", "'kill'", "'killallnp'", "'launch'", 
        "'launchurl'", "'load'", "'loadchardata'", "'log'", "'logmsg'", 
        "'logto'", "'logtoindex'", "'lookroom'", "'lowercase'", "'mmgr'", 
        "'move'", "'msg'", "'msgfsys'", "'msggm'", "'msgp'", "'msgr'", "'msgrgm'", 
        "'msgrx2'", "'msgrxp'", "'msgs'", "'msgsgm'", "'msgsys'", "'msgw'", 
        "'nameend'", "'namestart'", "'nextblood'", "'nexteffect'", "'nextnode'", 
        "'nextobj'", "'nextplayer'", "'nextroom'", "'nextwatch'", "'openlocker'", 
        "'or_yell'", "'outphrase'", "'parse'", "'parsedecimal'", "'pauseeffects'", 
        "'pid'", "'playercount'", "'prempt'", "'profile'", "'random'", "'rem2effect'", 
        "'remeffect'", "'remmenuitem'", "'remneffect'", "'remove'", "'removevarfield'", 
        "'removevargroup'", "'resist'", "'resizetable'", "'restorefields'", 
        "'resumeeffects'", "'rmcall'", "'rnddir'", "'rndexit'", "'rndplyr'", 
        "'rollin'", "'roomend'", "'roomstart'", "'rootexistof'", "'roundtime'", 
        "'savefields'", "'scan'", "'scaneffect'", "'script'", "'set'", "'setname'", 
        "'settable'", "'settext'", "'sparse'", "'start'", "'stop'", "'storechardata'", 
        "'stov'", "'submit'", "'substring'", "'tableinfo'", "'tellweb'", 
        "'test_assert'", "'test2effect'", "'testeffect'", "'tparse'", "'under'", 
        "'underoff'", "'underon'", "'unload'", "'updatesrvrstuff'", "'updatetable'", 
        "'uppercase'", "'verb'", "'vtos'", "'watch'", "'where'", "'whereat'", 
        "'whereitem'", "'writechar'", "'all'", "'allplayers'", "'area'", 
        "'bbs'", "'bhpt'", "'book'", "'bookedit'", "'callback'", "'check'", 
        "'code'", "'debug'", "'donematch'", "'encum'", "'exist'", "'field'", 
        "'flags'", "'for'", "'from'", "'hasfield'", "'health'", "'hits'", 
        "'index'", "'injuries'", "'isexactly'", "'isnotexactly'", "'isnotoftype'", 
        "'isoftype'", "'lacksfield'", "'lefthand'", "'mana'", "'match'", 
        "'matchspell'", "'max_health'", "'max_mana'", "'max_spirit'", "'may_match'", 
        "'merchant'", "'message'", "'mode'", "'must_match'", "'mystery'", 
        "'nonexist'", "'objects'", "'power'", "'priority'", "'report_to'", 
        "'righthand'", "'room'", "'sametype'", "'scars'", "'seg'", "'size'", 
        "'spell'", "'spirit'", "'stance'", "'table'", "'target_account'", 
        "'target_index'", "'target_name'", "'target_other'", "'target_uid'", 
        "'target'", "'text'", "'tmpexpr'", "'towards'", "'type'", "'using'", 
        "'value1'", "'value2'", "'varfield'", "'web_cm'", "'with'", "'wspell'", 
        null, "'at'", "'by'", "'in'", "'of'", "'on'", "'to'", "'vs'", "'x'", 
        "'y'", "'z'", null, "'('", "')'", null, null, "','", "'['", "']'", 
        "'+'", "'-'", "'/'", "'*'", "'%'", "':'", "'_'"
    ];

    public static readonly symbolicNames = [
        null, "STRING", "EMPTY_COMMENT", "COMMENT", "BACKSLASH_NEWLINE", 
        "SPACE", "TAB", "GOTO", "LABEL", "COMPARATOR", "V_REGISTER", "A_REGISTER", 
        "B_REGISTER", "S_REGISTER", "T_REGISTER", "SYS_BREAK", "SYS_BROWSER_BUFFER", 
        "SYS_CALLBACK", "SYS_CALLEDBY", "SYS_DESCMODE", "SYS_DONEMATCH", 
        "SYS_ERROR", "SYS_GAMECODE", "SYS_GAMENAME", "SYS_INTTABLE", "SYS_LASTMATCH", 
        "SYS_LOADINGFROMSAVE", "SYS_MATCH", "SYS_MAXLOOPS", "SYS_MAXROOMCREATES", 
        "SYS_MAXTEXTCHANGES", "SYS_MAXUOBJS", "SYS_MENUITEMLABEL", "SYS_PARSE_ERROR_1", 
        "SYS_PARSE_ERROR_2", "SYS_PARSE_ERROR_3", "SYS_PARSE_ERROR_4", "SYS_REPLYADDRESS", 
        "SYS_STIME", "SYS_STRTABLE", "SYS_THISSCRIPT", "SYS_TIME", "SYS_USERS", 
        "CARET_OPERATOR", "PLAYER_NODE", "ROOM_NODE", "CREATURE_NODE", "OBJECT_NODE", 
        "EVENT_NODE", "IF", "IFNOT", "ELSE_IF", "ELSE_IFNOT", "ELSE", "LOOP", 
        "WHEN", "IS", "FASTPOP", "FASTPUSH", "POP", "PUSH", "THEN", "DOT", 
        "ACTION", "ADD_GROUP", "ADDEFFECT", "ADDEXPR", "ADDMENUITEM", "ALTWINOFF", 
        "ALTWINON", "ANIM", "ASSERT", "ATTACK", "BEHIND", "BITGET", "BITSET", 
        "BOLDOFF", "BOLDON", "BORDER", "BUGREPORT", "CALL", "CALLMATCH", 
        "CALLPS", "CANDO", "CHECKEFFECT", "CLEAR", "CLEARMENU", "CLEARTABLE", 
        "CLOSELOCKER", "CMGR", "COMPAREITEM", "CONTRIBUTE", "COPY", "CREATE", 
        "CREATEITEM", "CREATEROOM", "CREATETABLE", "CREATETEXT", "CRITICAL", 
        "DECODEATTACK", "DEFAULT", "DELETETABLE", "DEPLOY", "DIRADD", "DIRSEND", 
        "DOCREATE", "DOLOOK", "DROP", "ENCODEATTACK", "END2EFFECT", "ENDEFFECT", 
        "ENDNEFFECT", "EXPAND", "FEMISC", "FEUPDATE", "FILLTABLE", "FIRSTBLOOD", 
        "FIRSTOBJ", "FIRSTPLAYER", "FIRSTWATCH", "GATHER", "GATHERFIRST", 
        "GATHERFIRSTROOM", "GATHERNEXT", "GATHERNEXTROOM", "GATHERPLAYER", 
        "GETCONTRIBUTORS", "GETINDEXOF", "GETMAX", "GETNAMEOF", "GETPS", 
        "GETTABLE", "GETTEXT", "GETWATCH", "GLUE", "GROUND", "HASH1", "HASH2", 
        "HEAL", "HEALP", "HURT", "HUSH", "INFO", "INFOITEM", "INJURE", "INPHRASE", 
        "INVENTORY", "ISINJURED", "ISNAMEFREE", "ITEMSNAPSHOT", "KILL", 
        "KILLALLNP", "LAUNCH", "LAUNCHURL", "LOAD", "LOADCHARDATA", "LOG", 
        "LOGMSG", "LOGTO", "LOGTOINDEX", "LOOKROOM", "LOWERCASE", "MMGR", 
        "MOVE", "MSG", "MSGFSYS", "MSGGM", "MSGP", "MSGR", "MSGRGM", "MSGRX2", 
        "MSGRXP", "MSGS", "MSGSGM", "MSGSYS", "MSGW", "NAMEEND", "NAMESTART", 
        "NEXTBLOOD", "NEXTEFFECT", "NEXTNODE", "NEXTOBJ", "NEXTPLAYER", 
        "NEXTROOM", "NEXTWATCH", "OPENLOCKER", "OR_YELL", "OUTPHRASE", "PARSE", 
        "PARSEDECIMAL", "PAUSEEFFECTS", "PID", "PLAYERCOUNT", "PREMPT", 
        "PROFILE", "RANDOM", "REM2EFFECT", "REMEFFECT", "REMMENUITEM", "REMNEFFECT", 
        "REMOVE", "REMOVEVARFIELD", "REMOVEVARGROUP", "RESIST", "RESIZETABLE", 
        "RESTOREFIELDS", "RESUMEEFFECTS", "RMCALL", "RNDDIR", "RNDEXIT", 
        "RNDPLYR", "ROLLIN", "ROOMEND", "ROOMSTART", "ROOTEXISTOF", "ROUNDTIME", 
        "SAVEFIELDS", "SCAN", "SCANEFFECT", "SCRIPT", "SET", "SETNAME", 
        "SETTABLE", "SETTEXT", "SPARSE", "START", "STOP", "STORECHARDATA", 
        "STOV", "SUBMIT", "SUBSTRING", "TABLEINFO", "TELLWEB", "TEST_ASSERT", 
        "TEST2EFFECT", "TESTEFFECT", "TPARSE", "UNDER", "UNDEROFF", "UNDERON", 
        "UNLOAD", "UPDATESRVRSTUFF", "UPDATETABLE", "UPPERCASE", "VERB", 
        "VTOS", "WATCH", "WHERE", "WHEREAT", "WHEREITEM", "WRITECHAR", "ALL", 
        "ALLPLAYERS", "AREA", "BBS", "BHPT", "BOOK", "BOOKEDIT", "CALLBACK", 
        "CHECK", "CODE", "DEBUG", "DONEMATCH", "ENCUM", "EXIST", "FIELD", 
        "FLAGS", "FOR", "FROM", "HASFIELD", "HEALTH", "HITS", "INDEX", "INJURIES", 
        "ISEXACTLY", "ISNOTEXACTLY", "ISNOTOFTYPE", "ISOFTYPE", "LACKSFIELD", 
        "LEFTHAND", "MANA", "MATCH", "MATCHSPELL", "MAX_HEALTH", "MAX_MANA", 
        "MAX_SPIRIT", "MAY_MATCH", "MERCHANT", "MESSAGE", "MODE", "MUST_MATCH", 
        "MYSTERY", "NONEXIST", "OBJECTS", "POWER", "PRIORITY", "REPORT_TO", 
        "RIGHTHAND", "ROOM", "SAMETYPE", "SCARS", "SEG", "SIZE", "SPELL", 
        "SPIRIT", "STANCE", "TABLE", "TARGET_ACCOUNT", "TARGET_INDEX", "TARGET_NAME", 
        "TARGET_OTHER", "TARGET_UID", "TARGET", "TEXT", "TMPEXPR", "TOWARDS", 
        "TYPE", "USING", "VALUE1", "VALUE2", "VARFIELD", "WEB_CM", "WITH", 
        "WSPELL", "TYPE_D", "AT", "BY", "IN", "OF", "ON", "TO", "VS", "X", 
        "Y", "Z", "NUMBER", "LPARAN", "RPARAN", "AND", "OR", "COMMA", "LBRACK", 
        "RBRACK", "PLUS", "MINUS", "DIVIDE", "MULTIPLY", "PERCENT_SYMBOL", 
        "COLON", "UNDERSCORE", "WORD", "NEWLINE"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "NL", "STRING", "EMPTY_COMMENT", "COMMENT", "BACKSLASH_NEWLINE", 
        "SPACE", "TAB", "GOTO", "LABEL", "LABEL_", "COMPARATOR", "V_REGISTER", 
        "A_REGISTER", "B_REGISTER", "S_REGISTER", "T_REGISTER", "SYS_BREAK", 
        "SYS_BROWSER_BUFFER", "SYS_CALLBACK", "SYS_CALLEDBY", "SYS_DESCMODE", 
        "SYS_DONEMATCH", "SYS_ERROR", "SYS_GAMECODE", "SYS_GAMENAME", "SYS_INTTABLE", 
        "SYS_LASTMATCH", "SYS_LOADINGFROMSAVE", "SYS_MATCH", "SYS_MAXLOOPS", 
        "SYS_MAXROOMCREATES", "SYS_MAXTEXTCHANGES", "SYS_MAXUOBJS", "SYS_MENUITEMLABEL", 
        "SYS_PARSE_ERROR_1", "SYS_PARSE_ERROR_2", "SYS_PARSE_ERROR_3", "SYS_PARSE_ERROR_4", 
        "SYS_REPLYADDRESS", "SYS_STIME", "SYS_STRTABLE", "SYS_THISSCRIPT", 
        "SYS_TIME", "SYS_USERS", "FIELD_CHARS_", "CARET_OPERATOR", "PLAYER_NODE", 
        "ROOM_NODE", "CREATURE_NODE", "OBJECT_NODE", "EVENT_NODE", "IF", 
        "IFNOT", "ELSE_IF", "ELSE_IFNOT", "ELSE", "LOOP", "WHEN", "IS", 
        "FASTPOP", "FASTPUSH", "POP", "PUSH", "THEN", "DOT", "ACTION", "ADD_GROUP", 
        "ADDEFFECT", "ADDEXPR", "ADDMENUITEM", "ALTWINOFF", "ALTWINON", 
        "ANIM", "ASSERT", "ATTACK", "BEHIND", "BITGET", "BITSET", "BOLDOFF", 
        "BOLDON", "BORDER", "BUGREPORT", "CALL", "CALLMATCH", "CALLPS", 
        "CANDO", "CHECKEFFECT", "CLEAR", "CLEARMENU", "CLEARTABLE", "CLOSELOCKER", 
        "CMGR", "COMPAREITEM", "CONTRIBUTE", "COPY", "CREATE", "CREATEITEM", 
        "CREATEROOM", "CREATETABLE", "CREATETEXT", "CRITICAL", "DECODEATTACK", 
        "DEFAULT", "DELETETABLE", "DEPLOY", "DIRADD", "DIRSEND", "DOCREATE", 
        "DOLOOK", "DROP", "ENCODEATTACK", "END2EFFECT", "ENDEFFECT", "ENDNEFFECT", 
        "EXPAND", "FEMISC", "FEUPDATE", "FILLTABLE", "FIRSTBLOOD", "FIRSTOBJ", 
        "FIRSTPLAYER", "FIRSTWATCH", "GATHER", "GATHERFIRST", "GATHERFIRSTROOM", 
        "GATHERNEXT", "GATHERNEXTROOM", "GATHERPLAYER", "GETCONTRIBUTORS", 
        "GETINDEXOF", "GETMAX", "GETNAMEOF", "GETPS", "GETTABLE", "GETTEXT", 
        "GETWATCH", "GLUE", "GROUND", "HASH1", "HASH2", "HEAL", "HEALP", 
        "HURT", "HUSH", "INFO", "INFOITEM", "INJURE", "INPHRASE", "INVENTORY", 
        "ISINJURED", "ISNAMEFREE", "ITEMSNAPSHOT", "KILL", "KILLALLNP", 
        "LAUNCH", "LAUNCHURL", "LOAD", "LOADCHARDATA", "LOG", "LOGMSG", 
        "LOGTO", "LOGTOINDEX", "LOOKROOM", "LOWERCASE", "MMGR", "MOVE", 
        "MSG", "MSGFSYS", "MSGGM", "MSGP", "MSGR", "MSGRGM", "MSGRX2", "MSGRXP", 
        "MSGS", "MSGSGM", "MSGSYS", "MSGW", "NAMEEND", "NAMESTART", "NEXTBLOOD", 
        "NEXTEFFECT", "NEXTNODE", "NEXTOBJ", "NEXTPLAYER", "NEXTROOM", "NEXTWATCH", 
        "OPENLOCKER", "OR_YELL", "OUTPHRASE", "PARSE", "PARSEDECIMAL", "PAUSEEFFECTS", 
        "PID", "PLAYERCOUNT", "PREMPT", "PROFILE", "RANDOM", "REM2EFFECT", 
        "REMEFFECT", "REMMENUITEM", "REMNEFFECT", "REMOVE", "REMOVEVARFIELD", 
        "REMOVEVARGROUP", "RESIST", "RESIZETABLE", "RESTOREFIELDS", "RESUMEEFFECTS", 
        "RMCALL", "RNDDIR", "RNDEXIT", "RNDPLYR", "ROLLIN", "ROOMEND", "ROOMSTART", 
        "ROOTEXISTOF", "ROUNDTIME", "SAVEFIELDS", "SCAN", "SCANEFFECT", 
        "SCRIPT", "SET", "SETNAME", "SETTABLE", "SETTEXT", "SPARSE", "START", 
        "STOP", "STORECHARDATA", "STOV", "SUBMIT", "SUBSTRING", "TABLEINFO", 
        "TELLWEB", "TEST_ASSERT", "TEST2EFFECT", "TESTEFFECT", "TPARSE", 
        "UNDER", "UNDEROFF", "UNDERON", "UNLOAD", "UPDATESRVRSTUFF", "UPDATETABLE", 
        "UPPERCASE", "VERB", "VTOS", "WATCH", "WHERE", "WHEREAT", "WHEREITEM", 
        "WRITECHAR", "ALL", "ALLPLAYERS", "AREA", "BBS", "BHPT", "BOOK", 
        "BOOKEDIT", "CALLBACK", "CHECK", "CODE", "DEBUG", "DONEMATCH", "ENCUM", 
        "EXIST", "FIELD", "FLAGS", "FOR", "FROM", "HASFIELD", "HEALTH", 
        "HITS", "INDEX", "INJURIES", "ISEXACTLY", "ISNOTEXACTLY", "ISNOTOFTYPE", 
        "ISOFTYPE", "LACKSFIELD", "LEFTHAND", "MANA", "MATCH", "MATCHSPELL", 
        "MAX_HEALTH", "MAX_MANA", "MAX_SPIRIT", "MAY_MATCH", "MERCHANT", 
        "MESSAGE", "MODE", "MUST_MATCH", "MYSTERY", "NONEXIST", "OBJECTS", 
        "POWER", "PRIORITY", "REPORT_TO", "RIGHTHAND", "ROOM", "SAMETYPE", 
        "SCARS", "SEG", "SIZE", "SPELL", "SPIRIT", "STANCE", "TABLE", "TARGET_ACCOUNT", 
        "TARGET_INDEX", "TARGET_NAME", "TARGET_OTHER", "TARGET_UID", "TARGET", 
        "TEXT", "TMPEXPR", "TOWARDS", "TYPE", "USING", "VALUE1", "VALUE2", 
        "VARFIELD", "WEB_CM", "WITH", "WSPELL", "TYPE_D", "AT", "BY", "IN", 
        "OF", "ON", "TO", "VS", "X", "Y", "Z", "DIGIT_", "NUMBER", "LPARAN", 
        "RPARAN", "AND", "OR", "COMMA", "LBRACK", "RBRACK", "PLUS", "MINUS", 
        "DIVIDE", "MULTIPLY", "PERCENT_SYMBOL", "COLON", "UNDERSCORE", "WORD", 
        "NEWLINE",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, GslLexer._ATN, GslLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "Gsl.g4"; }

    public get literalNames(): (string | null)[] { return GslLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return GslLexer.symbolicNames; }
    public get ruleNames(): string[] { return GslLexer.ruleNames; }

    public get serializedATN(): number[] { return GslLexer._serializedATN; }

    public get channelNames(): string[] { return GslLexer.channelNames; }

    public get modeNames(): string[] { return GslLexer.modeNames; }

    public override action(localContext: antlr.RuleContext | null, ruleIndex: number, actionIndex: number): void {
        switch (ruleIndex) {
        case 2:
            this.EMPTY_COMMENT_action(localContext, actionIndex);
            break;
        case 3:
            this.COMMENT_action(localContext, actionIndex);
            break;
        }
    }
    private EMPTY_COMMENT_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 0:
            this.type=GslLexer.NEWLINE
            break;
        }
    }
    private COMMENT_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 1:
            this.type=GslLexer.NEWLINE
            break;
        }
    }

    public static readonly _serializedATN: number[] = [
        4,0,351,3561,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,
        5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
        2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,
        7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,
        2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,
        7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
        2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
        7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,
        2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,
        7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,
        2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,
        7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,
        2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,
        7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,
        2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,
        7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
        7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
        2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,
        7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,
        2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,
        7,125,2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,
        2,131,7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,
        7,136,2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,
        2,142,7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,
        7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,
        2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,
        7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,
        2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
        7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
        2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,
        7,180,2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,
        2,186,7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,
        7,191,2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,
        2,197,7,197,2,198,7,198,2,199,7,199,2,200,7,200,2,201,7,201,2,202,
        7,202,2,203,7,203,2,204,7,204,2,205,7,205,2,206,7,206,2,207,7,207,
        2,208,7,208,2,209,7,209,2,210,7,210,2,211,7,211,2,212,7,212,2,213,
        7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,7,217,2,218,7,218,
        2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,7,223,2,224,
        7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,7,229,
        2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
        7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
        2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,
        7,246,2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,
        2,252,7,252,2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,
        7,257,2,258,7,258,2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,
        2,263,7,263,2,264,7,264,2,265,7,265,2,266,7,266,2,267,7,267,2,268,
        7,268,2,269,7,269,2,270,7,270,2,271,7,271,2,272,7,272,2,273,7,273,
        2,274,7,274,2,275,7,275,2,276,7,276,2,277,7,277,2,278,7,278,2,279,
        7,279,2,280,7,280,2,281,7,281,2,282,7,282,2,283,7,283,2,284,7,284,
        2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,2,289,7,289,2,290,
        7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,2,295,7,295,
        2,296,7,296,2,297,7,297,2,298,7,298,2,299,7,299,2,300,7,300,2,301,
        7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,305,7,305,2,306,7,306,
        2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,311,7,311,2,312,
        7,312,2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,317,7,317,
        2,318,7,318,2,319,7,319,2,320,7,320,2,321,7,321,2,322,7,322,2,323,
        7,323,2,324,7,324,2,325,7,325,2,326,7,326,2,327,7,327,2,328,7,328,
        2,329,7,329,2,330,7,330,2,331,7,331,2,332,7,332,2,333,7,333,2,334,
        7,334,2,335,7,335,2,336,7,336,2,337,7,337,2,338,7,338,2,339,7,339,
        2,340,7,340,2,341,7,341,2,342,7,342,2,343,7,343,2,344,7,344,2,345,
        7,345,2,346,7,346,2,347,7,347,2,348,7,348,2,349,7,349,2,350,7,350,
        2,351,7,351,2,352,7,352,2,353,7,353,2,354,7,354,1,0,3,0,713,8,0,
        1,0,1,0,3,0,717,8,0,1,1,1,1,5,1,721,8,1,10,1,12,1,724,9,1,1,1,1,
        1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,4,3,736,8,3,11,3,12,3,737,3,3,
        740,8,3,1,3,5,3,743,8,3,10,3,12,3,746,9,3,1,3,1,3,1,3,1,4,1,4,5,
        4,753,8,4,10,4,12,4,756,9,4,1,4,1,4,1,4,1,4,1,5,4,5,763,8,5,11,5,
        12,5,764,1,5,1,5,1,6,4,6,770,8,6,11,6,12,6,771,1,6,1,6,1,7,1,7,1,
        7,1,7,1,7,1,7,4,7,782,8,7,11,7,12,7,783,1,7,1,7,1,8,1,8,5,8,790,
        8,8,10,8,12,8,793,9,8,1,8,1,8,1,9,4,9,798,8,9,11,9,12,9,799,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,813,8,10,
        1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,14,1,15,
        1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
        1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
        1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
        1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,
        1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,
        1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
        1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,
        1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
        1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,
        1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,
        1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,
        1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,
        1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,35,
        1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
        1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
        1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
        1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
        1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,
        1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,
        1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,4,44,1150,8,44,
        11,44,12,44,1151,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,47,1,
        47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,
        49,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,
        52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,
        54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,
        56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,
        59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,
        60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,
        63,1,63,1,63,1,63,1,63,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,
        65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,
        67,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,
        68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,
        69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,
        71,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,73,1,
        73,1,73,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,
        75,1,75,1,75,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,
        76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,
        78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,
        80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,
        81,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,
        83,1,83,1,83,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,
        85,1,85,1,85,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,
        86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,
        88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,
        89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,
        90,1,90,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,92,1,
        92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,
        93,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,
        95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,
        96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,
        98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,99,1,99,1,
        99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,
        1,100,1,100,1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,
        1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,
        1,102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,1,103,1,103,1,103,
        1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,1,104,
        1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,
        1,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,
        1,107,1,107,1,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,109,
        1,109,1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,
        1,110,1,110,1,110,1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,
        1,111,1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,112,1,112,1,112,
        1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,113,
        1,113,1,113,1,113,1,113,1,113,1,114,1,114,1,114,1,114,1,114,1,114,
        1,114,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,116,1,116,1,116,
        1,116,1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,117,1,118,1,118,1,118,1,118,1,118,1,118,
        1,118,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,1,119,1,119,
        1,119,1,119,1,119,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,
        1,120,1,120,1,120,1,120,1,121,1,121,1,121,1,121,1,121,1,121,1,121,
        1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,
        1,124,1,124,1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,125,
        1,125,1,125,1,125,1,125,1,125,1,125,1,126,1,126,1,126,1,126,1,126,
        1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,127,
        1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,
        1,127,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,
        1,128,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,1,129,1,129,
        1,129,1,129,1,129,1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,
        1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,132,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,1,134,1,134,1,134,1,134,1,134,1,134,
        1,134,1,134,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
        1,136,1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,
        1,137,1,138,1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,
        1,139,1,139,1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,
        1,141,1,141,1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,
        1,143,1,144,1,144,1,144,1,144,1,144,1,145,1,145,1,145,1,145,1,145,
        1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,146,1,146,1,146,
        1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,148,1,148,
        1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,149,1,149,1,149,
        1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,150,1,150,1,150,1,150,
        1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,151,1,151,1,151,1,151,
        1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,152,1,152,
        1,152,1,152,1,152,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,155,1,155,
        1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,156,1,156,1,156,
        1,156,1,156,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,1,157,
        1,157,1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,159,1,159,1,159,
        1,159,1,159,1,159,1,159,1,160,1,160,1,160,1,160,1,160,1,160,1,161,
        1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,162,
        1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,
        1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,164,1,164,1,164,1,164,
        1,164,1,165,1,165,1,165,1,165,1,165,1,166,1,166,1,166,1,166,1,167,
        1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,168,1,168,1,168,1,168,
        1,168,1,168,1,169,1,169,1,169,1,169,1,169,1,170,1,170,1,170,1,170,
        1,170,1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,172,1,172,1,172,
        1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,1,173,1,173,1,173,
        1,174,1,174,1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,175,1,175,
        1,175,1,176,1,176,1,176,1,176,1,176,1,176,1,176,1,177,1,177,1,177,
        1,177,1,177,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,179,
        1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,179,1,180,1,180,
        1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,180,1,181,1,181,1,181,
        1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,182,1,182,1,182,
        1,182,1,182,1,182,1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,183,
        1,183,1,183,1,183,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,
        1,184,1,184,1,184,1,185,1,185,1,185,1,185,1,185,1,185,1,185,1,185,
        1,185,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,187,
        1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,189,1,189,1,189,
        1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,190,1,190,1,190,1,190,
        1,190,1,190,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,
        1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,192,1,192,1,192,1,192,
        1,192,1,192,1,192,1,192,1,192,1,192,1,193,1,193,1,193,1,193,1,194,
        1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,
        1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,196,1,196,1,196,1,196,
        1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,197,1,197,1,197,1,197,
        1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,198,
        1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,200,
        1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,201,
        1,202,1,202,1,202,1,202,1,202,1,202,1,202,1,203,1,203,1,203,1,203,
        1,203,1,203,1,203,1,203,1,203,1,203,1,203,1,203,1,203,1,203,1,203,
        1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,
        1,204,1,204,1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,205,
        1,206,1,206,1,206,1,206,1,206,1,206,1,206,1,206,1,206,1,206,1,206,
        1,206,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,207,
        1,207,1,207,1,207,1,207,1,208,1,208,1,208,1,208,1,208,1,208,1,208,
        1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,209,1,209,1,209,1,209,
        1,209,1,209,1,209,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,211,
        1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,212,1,212,1,212,1,212,
        1,212,1,212,1,212,1,212,1,213,1,213,1,213,1,213,1,213,1,213,1,213,
        1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,215,1,215,1,215,
        1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,
        1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,217,1,217,1,217,
        1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,218,1,218,1,218,1,218,
        1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,219,1,219,1,219,1,219,
        1,219,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,
        1,220,1,221,1,221,1,221,1,221,1,221,1,221,1,221,1,222,1,222,1,222,
        1,222,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,224,1,224,
        1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,225,1,225,1,225,1,225,
        1,225,1,225,1,225,1,225,1,226,1,226,1,226,1,226,1,226,1,226,1,226,
        1,227,1,227,1,227,1,227,1,227,1,227,1,228,1,228,1,228,1,228,1,228,
        1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,1,229,
        1,229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,1,231,1,231,1,231,
        1,231,1,231,1,231,1,231,1,232,1,232,1,232,1,232,1,232,1,232,1,232,
        1,232,1,232,1,232,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,
        1,233,1,233,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,235,
        1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,
        1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,236,
        1,236,1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,237,
        1,237,1,238,1,238,1,238,1,238,1,238,1,238,1,238,1,239,1,239,1,239,
        1,239,1,239,1,239,1,240,1,240,1,240,1,240,1,240,1,240,1,240,1,240,
        1,240,1,241,1,241,1,241,1,241,1,241,1,241,1,241,1,241,1,242,1,242,
        1,242,1,242,1,242,1,242,1,242,1,243,1,243,1,243,1,243,1,243,1,243,
        1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,244,
        1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,
        1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,246,
        1,246,1,246,1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,248,1,248,
        1,248,1,248,1,248,1,248,1,249,1,249,1,249,1,249,1,249,1,249,1,250,
        1,250,1,250,1,250,1,250,1,250,1,250,1,250,1,251,1,251,1,251,1,251,
        1,251,1,251,1,251,1,251,1,251,1,251,1,252,1,252,1,252,1,252,1,252,
        1,252,1,252,1,252,1,252,1,252,1,253,1,253,1,253,1,253,1,254,1,254,
        1,254,1,254,1,254,1,254,1,254,1,254,1,254,1,254,1,254,1,255,1,255,
        1,255,1,255,1,255,1,256,1,256,1,256,1,256,1,257,1,257,1,257,1,257,
        1,257,1,258,1,258,1,258,1,258,1,258,1,259,1,259,1,259,1,259,1,259,
        1,259,1,259,1,259,1,259,1,260,1,260,1,260,1,260,1,260,1,260,1,260,
        1,260,1,260,1,261,1,261,1,261,1,261,1,261,1,261,1,262,1,262,1,262,
        1,262,1,262,1,263,1,263,1,263,1,263,1,263,1,263,1,264,1,264,1,264,
        1,264,1,264,1,264,1,264,1,264,1,264,1,264,1,265,1,265,1,265,1,265,
        1,265,1,265,1,266,1,266,1,266,1,266,1,266,1,266,1,267,1,267,1,267,
        1,267,1,267,1,267,1,268,1,268,1,268,1,268,1,268,1,268,1,269,1,269,
        1,269,1,269,1,270,1,270,1,270,1,270,1,270,1,271,1,271,1,271,1,271,
        1,271,1,271,1,271,1,271,1,271,1,272,1,272,1,272,1,272,1,272,1,272,
        1,272,1,273,1,273,1,273,1,273,1,273,1,274,1,274,1,274,1,274,1,274,
        1,274,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,276,
        1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,276,1,277,1,277,
        1,277,1,277,1,277,1,277,1,277,1,277,1,277,1,277,1,277,1,277,1,277,
        1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,1,278,
        1,278,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,279,1,280,
        1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,280,1,281,
        1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,282,1,282,1,282,
        1,282,1,282,1,283,1,283,1,283,1,283,1,283,1,283,1,284,1,284,1,284,
        1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,285,1,285,1,285,
        1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,286,1,286,1,286,
        1,286,1,286,1,286,1,286,1,286,1,286,1,287,1,287,1,287,1,287,1,287,
        1,287,1,287,1,287,1,287,1,287,1,287,1,288,1,288,1,288,1,288,1,288,
        1,288,1,288,1,288,1,288,1,288,1,289,1,289,1,289,1,289,1,289,1,289,
        1,289,1,289,1,289,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,
        1,291,1,291,1,291,1,291,1,291,1,292,1,292,1,292,1,292,1,292,1,292,
        1,292,1,292,1,292,1,292,1,292,1,293,1,293,1,293,1,293,1,293,1,293,
        1,293,1,293,1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,294,
        1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,296,1,296,1,296,
        1,296,1,296,1,296,1,297,1,297,1,297,1,297,1,297,1,297,1,297,1,297,
        1,297,1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,
        1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,300,
        1,300,1,300,1,300,1,300,1,301,1,301,1,301,1,301,1,301,1,301,1,301,
        1,301,1,301,1,302,1,302,1,302,1,302,1,302,1,302,1,303,1,303,1,303,
        1,303,1,304,1,304,1,304,1,304,1,304,1,305,1,305,1,305,1,305,1,305,
        1,305,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,307,1,307,1,307,
        1,307,1,307,1,307,1,307,1,308,1,308,1,308,1,308,1,308,1,308,1,309,
        1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,
        1,309,1,309,1,309,1,310,1,310,1,310,1,310,1,310,1,310,1,310,1,310,
        1,310,1,310,1,310,1,310,1,310,1,311,1,311,1,311,1,311,1,311,1,311,
        1,311,1,311,1,311,1,311,1,311,1,311,1,312,1,312,1,312,1,312,1,312,
        1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,313,1,313,1,313,
        1,313,1,313,1,313,1,313,1,313,1,313,1,313,1,313,1,314,1,314,1,314,
        1,314,1,314,1,314,1,314,1,315,1,315,1,315,1,315,1,315,1,316,1,316,
        1,316,1,316,1,316,1,316,1,316,1,316,1,317,1,317,1,317,1,317,1,317,
        1,317,1,317,1,317,1,318,1,318,1,318,1,318,1,318,1,319,1,319,1,319,
        1,319,1,319,1,319,1,320,1,320,1,320,1,320,1,320,1,320,1,320,1,321,
        1,321,1,321,1,321,1,321,1,321,1,321,1,322,1,322,1,322,1,322,1,322,
        1,322,1,322,1,322,1,322,1,323,1,323,1,323,1,323,1,323,1,323,1,323,
        1,324,1,324,1,324,1,324,1,324,1,325,1,325,1,325,1,325,1,325,1,325,
        1,325,1,326,1,326,1,326,1,326,1,326,1,326,1,326,1,327,1,327,1,327,
        1,328,1,328,1,328,1,329,1,329,1,329,1,330,1,330,1,330,1,331,1,331,
        1,331,1,332,1,332,1,332,1,333,1,333,1,333,1,334,1,334,1,335,1,335,
        1,336,1,336,1,337,1,337,1,338,4,338,3507,8,338,11,338,12,338,3508,
        1,338,1,338,1,338,1,338,1,338,5,338,3516,8,338,10,338,12,338,3519,
        9,338,1,339,1,339,1,340,1,340,1,341,1,341,1,341,3,341,3528,8,341,
        1,342,1,342,1,342,3,342,3533,8,342,1,343,1,343,1,344,1,344,1,345,
        1,345,1,346,1,346,1,347,1,347,1,348,1,348,1,349,1,349,1,350,1,350,
        1,351,1,351,1,352,1,352,1,353,4,353,3556,8,353,11,353,12,353,3557,
        1,354,1,354,3,722,744,754,0,355,1,0,3,1,5,2,7,3,9,4,11,5,13,6,15,
        7,17,8,19,0,21,9,23,10,25,11,27,12,29,13,31,14,33,15,35,16,37,17,
        39,18,41,19,43,20,45,21,47,22,49,23,51,24,53,25,55,26,57,27,59,28,
        61,29,63,30,65,31,67,32,69,33,71,34,73,35,75,36,77,37,79,38,81,39,
        83,40,85,41,87,42,89,0,91,43,93,44,95,45,97,46,99,47,101,48,103,
        49,105,50,107,51,109,52,111,53,113,54,115,55,117,56,119,57,121,58,
        123,59,125,60,127,61,129,62,131,63,133,64,135,65,137,66,139,67,141,
        68,143,69,145,70,147,71,149,72,151,73,153,74,155,75,157,76,159,77,
        161,78,163,79,165,80,167,81,169,82,171,83,173,84,175,85,177,86,179,
        87,181,88,183,89,185,90,187,91,189,92,191,93,193,94,195,95,197,96,
        199,97,201,98,203,99,205,100,207,101,209,102,211,103,213,104,215,
        105,217,106,219,107,221,108,223,109,225,110,227,111,229,112,231,
        113,233,114,235,115,237,116,239,117,241,118,243,119,245,120,247,
        121,249,122,251,123,253,124,255,125,257,126,259,127,261,128,263,
        129,265,130,267,131,269,132,271,133,273,134,275,135,277,136,279,
        137,281,138,283,139,285,140,287,141,289,142,291,143,293,144,295,
        145,297,146,299,147,301,148,303,149,305,150,307,151,309,152,311,
        153,313,154,315,155,317,156,319,157,321,158,323,159,325,160,327,
        161,329,162,331,163,333,164,335,165,337,166,339,167,341,168,343,
        169,345,170,347,171,349,172,351,173,353,174,355,175,357,176,359,
        177,361,178,363,179,365,180,367,181,369,182,371,183,373,184,375,
        185,377,186,379,187,381,188,383,189,385,190,387,191,389,192,391,
        193,393,194,395,195,397,196,399,197,401,198,403,199,405,200,407,
        201,409,202,411,203,413,204,415,205,417,206,419,207,421,208,423,
        209,425,210,427,211,429,212,431,213,433,214,435,215,437,216,439,
        217,441,218,443,219,445,220,447,221,449,222,451,223,453,224,455,
        225,457,226,459,227,461,228,463,229,465,230,467,231,469,232,471,
        233,473,234,475,235,477,236,479,237,481,238,483,239,485,240,487,
        241,489,242,491,243,493,244,495,245,497,246,499,247,501,248,503,
        249,505,250,507,251,509,252,511,253,513,254,515,255,517,256,519,
        257,521,258,523,259,525,260,527,261,529,262,531,263,533,264,535,
        265,537,266,539,267,541,268,543,269,545,270,547,271,549,272,551,
        273,553,274,555,275,557,276,559,277,561,278,563,279,565,280,567,
        281,569,282,571,283,573,284,575,285,577,286,579,287,581,288,583,
        289,585,290,587,291,589,292,591,293,593,294,595,295,597,296,599,
        297,601,298,603,299,605,300,607,301,609,302,611,303,613,304,615,
        305,617,306,619,307,621,308,623,309,625,310,627,311,629,312,631,
        313,633,314,635,315,637,316,639,317,641,318,643,319,645,320,647,
        321,649,322,651,323,653,324,655,325,657,326,659,327,661,328,663,
        329,665,330,667,331,669,332,671,333,673,334,675,0,677,335,679,336,
        681,337,683,338,685,339,687,340,689,341,691,342,693,343,695,344,
        697,345,699,346,701,347,703,348,705,349,707,350,709,351,1,0,32,2,
        0,10,10,61,61,1,0,32,32,1,0,9,9,2,0,71,71,103,103,2,0,79,79,111,
        111,2,0,84,84,116,116,6,0,45,45,48,57,63,63,65,90,95,95,97,122,2,
        0,86,86,118,118,1,0,48,57,2,0,65,65,97,97,2,0,66,66,98,98,2,0,83,
        83,115,115,2,0,82,82,114,114,2,0,69,69,101,101,2,0,75,75,107,107,
        2,0,87,87,119,119,2,0,85,85,117,117,2,0,70,70,102,102,2,0,67,67,
        99,99,2,0,76,76,108,108,2,0,68,68,100,100,2,0,89,89,121,121,2,0,
        77,77,109,109,2,0,78,78,110,110,2,0,72,72,104,104,2,0,73,73,105,
        105,2,0,88,88,120,120,2,0,80,80,112,112,2,0,74,74,106,106,4,0,48,
        57,65,90,95,95,97,122,2,0,90,90,122,122,3,0,65,90,95,95,97,122,3579,
        0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
        1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
        1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,
        1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,
        1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,
        1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,
        1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,
        1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,
        1,0,0,0,0,87,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,
        1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,
        107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,
        0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,
        1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,
        0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,
        0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,
        153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,
        0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,
        1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,
        0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,
        0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,
        199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,
        0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,
        1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,
        0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,
        0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,0,0,0,
        245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,1,0,
        0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,
        1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,0,0,0,
        0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,
        0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,
        291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,1,0,
        0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,0,309,
        1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,
        0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,0,327,1,
        0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,0,0,0,0,
        337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,345,1,0,
        0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,0,0,355,
        1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,
        0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,
        0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,0,0,0,
        383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,391,1,0,
        0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,0,0,0,0,399,1,0,0,0,0,401,
        1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,0,0,0,409,1,0,0,0,
        0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,0,0,419,1,
        0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,427,1,0,0,0,0,
        429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,437,1,0,
        0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,
        1,0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,
        0,457,1,0,0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,465,1,
        0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,
        475,1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,0,481,1,0,0,0,0,483,1,0,
        0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,0,0,0,493,
        1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,1,0,0,0,
        0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,0,511,1,
        0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,0,0,0,
        521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,
        0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,
        1,0,0,0,0,541,1,0,0,0,0,543,1,0,0,0,0,545,1,0,0,0,0,547,1,0,0,0,
        0,549,1,0,0,0,0,551,1,0,0,0,0,553,1,0,0,0,0,555,1,0,0,0,0,557,1,
        0,0,0,0,559,1,0,0,0,0,561,1,0,0,0,0,563,1,0,0,0,0,565,1,0,0,0,0,
        567,1,0,0,0,0,569,1,0,0,0,0,571,1,0,0,0,0,573,1,0,0,0,0,575,1,0,
        0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,581,1,0,0,0,0,583,1,0,0,0,0,585,
        1,0,0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,591,1,0,0,0,0,593,1,0,0,0,
        0,595,1,0,0,0,0,597,1,0,0,0,0,599,1,0,0,0,0,601,1,0,0,0,0,603,1,
        0,0,0,0,605,1,0,0,0,0,607,1,0,0,0,0,609,1,0,0,0,0,611,1,0,0,0,0,
        613,1,0,0,0,0,615,1,0,0,0,0,617,1,0,0,0,0,619,1,0,0,0,0,621,1,0,
        0,0,0,623,1,0,0,0,0,625,1,0,0,0,0,627,1,0,0,0,0,629,1,0,0,0,0,631,
        1,0,0,0,0,633,1,0,0,0,0,635,1,0,0,0,0,637,1,0,0,0,0,639,1,0,0,0,
        0,641,1,0,0,0,0,643,1,0,0,0,0,645,1,0,0,0,0,647,1,0,0,0,0,649,1,
        0,0,0,0,651,1,0,0,0,0,653,1,0,0,0,0,655,1,0,0,0,0,657,1,0,0,0,0,
        659,1,0,0,0,0,661,1,0,0,0,0,663,1,0,0,0,0,665,1,0,0,0,0,667,1,0,
        0,0,0,669,1,0,0,0,0,671,1,0,0,0,0,673,1,0,0,0,0,677,1,0,0,0,0,679,
        1,0,0,0,0,681,1,0,0,0,0,683,1,0,0,0,0,685,1,0,0,0,0,687,1,0,0,0,
        0,689,1,0,0,0,0,691,1,0,0,0,0,693,1,0,0,0,0,695,1,0,0,0,0,697,1,
        0,0,0,0,699,1,0,0,0,0,701,1,0,0,0,0,703,1,0,0,0,0,705,1,0,0,0,0,
        707,1,0,0,0,0,709,1,0,0,0,1,716,1,0,0,0,3,718,1,0,0,0,5,727,1,0,
        0,0,7,731,1,0,0,0,9,750,1,0,0,0,11,762,1,0,0,0,13,769,1,0,0,0,15,
        775,1,0,0,0,17,787,1,0,0,0,19,797,1,0,0,0,21,812,1,0,0,0,23,814,
        1,0,0,0,25,817,1,0,0,0,27,820,1,0,0,0,29,823,1,0,0,0,31,826,1,0,
        0,0,33,829,1,0,0,0,35,836,1,0,0,0,37,852,1,0,0,0,39,862,1,0,0,0,
        41,872,1,0,0,0,43,882,1,0,0,0,45,893,1,0,0,0,47,900,1,0,0,0,49,910,
        1,0,0,0,51,920,1,0,0,0,53,930,1,0,0,0,55,941,1,0,0,0,57,958,1,0,
        0,0,59,965,1,0,0,0,61,975,1,0,0,0,63,991,1,0,0,0,65,1007,1,0,0,0,
        67,1017,1,0,0,0,69,1032,1,0,0,0,71,1047,1,0,0,0,73,1062,1,0,0,0,
        75,1077,1,0,0,0,77,1092,1,0,0,0,79,1106,1,0,0,0,81,1113,1,0,0,0,
        83,1123,1,0,0,0,85,1135,1,0,0,0,87,1141,1,0,0,0,89,1149,1,0,0,0,
        91,1153,1,0,0,0,93,1156,1,0,0,0,95,1161,1,0,0,0,97,1166,1,0,0,0,
        99,1171,1,0,0,0,101,1176,1,0,0,0,103,1181,1,0,0,0,105,1184,1,0,0,
        0,107,1190,1,0,0,0,109,1198,1,0,0,0,111,1209,1,0,0,0,113,1214,1,
        0,0,0,115,1219,1,0,0,0,117,1224,1,0,0,0,119,1227,1,0,0,0,121,1235,
        1,0,0,0,123,1244,1,0,0,0,125,1248,1,0,0,0,127,1253,1,0,0,0,129,1258,
        1,0,0,0,131,1260,1,0,0,0,133,1267,1,0,0,0,135,1276,1,0,0,0,137,1286,
        1,0,0,0,139,1294,1,0,0,0,141,1306,1,0,0,0,143,1316,1,0,0,0,145,1325,
        1,0,0,0,147,1330,1,0,0,0,149,1337,1,0,0,0,151,1344,1,0,0,0,153,1351,
        1,0,0,0,155,1358,1,0,0,0,157,1365,1,0,0,0,159,1373,1,0,0,0,161,1380,
        1,0,0,0,163,1387,1,0,0,0,165,1397,1,0,0,0,167,1402,1,0,0,0,169,1412,
        1,0,0,0,171,1419,1,0,0,0,173,1425,1,0,0,0,175,1437,1,0,0,0,177,1443,
        1,0,0,0,179,1453,1,0,0,0,181,1464,1,0,0,0,183,1476,1,0,0,0,185,1481,
        1,0,0,0,187,1493,1,0,0,0,189,1504,1,0,0,0,191,1509,1,0,0,0,193,1516,
        1,0,0,0,195,1527,1,0,0,0,197,1538,1,0,0,0,199,1550,1,0,0,0,201,1561,
        1,0,0,0,203,1570,1,0,0,0,205,1583,1,0,0,0,207,1591,1,0,0,0,209,1603,
        1,0,0,0,211,1610,1,0,0,0,213,1617,1,0,0,0,215,1625,1,0,0,0,217,1634,
        1,0,0,0,219,1641,1,0,0,0,221,1646,1,0,0,0,223,1659,1,0,0,0,225,1670,
        1,0,0,0,227,1680,1,0,0,0,229,1691,1,0,0,0,231,1698,1,0,0,0,233,1705,
        1,0,0,0,235,1714,1,0,0,0,237,1724,1,0,0,0,239,1735,1,0,0,0,241,1744,
        1,0,0,0,243,1756,1,0,0,0,245,1767,1,0,0,0,247,1774,1,0,0,0,249,1786,
        1,0,0,0,251,1802,1,0,0,0,253,1813,1,0,0,0,255,1828,1,0,0,0,257,1841,
        1,0,0,0,259,1857,1,0,0,0,261,1868,1,0,0,0,263,1875,1,0,0,0,265,1885,
        1,0,0,0,267,1891,1,0,0,0,269,1900,1,0,0,0,271,1908,1,0,0,0,273,1917,
        1,0,0,0,275,1922,1,0,0,0,277,1929,1,0,0,0,279,1935,1,0,0,0,281,1941,
        1,0,0,0,283,1946,1,0,0,0,285,1952,1,0,0,0,287,1957,1,0,0,0,289,1962,
        1,0,0,0,291,1967,1,0,0,0,293,1976,1,0,0,0,295,1983,1,0,0,0,297,1992,
        1,0,0,0,299,2002,1,0,0,0,301,2012,1,0,0,0,303,2023,1,0,0,0,305,2036,
        1,0,0,0,307,2041,1,0,0,0,309,2051,1,0,0,0,311,2058,1,0,0,0,313,2068,
        1,0,0,0,315,2073,1,0,0,0,317,2086,1,0,0,0,319,2090,1,0,0,0,321,2097,
        1,0,0,0,323,2103,1,0,0,0,325,2114,1,0,0,0,327,2123,1,0,0,0,329,2133,
        1,0,0,0,331,2138,1,0,0,0,333,2143,1,0,0,0,335,2147,1,0,0,0,337,2155,
        1,0,0,0,339,2161,1,0,0,0,341,2166,1,0,0,0,343,2171,1,0,0,0,345,2178,
        1,0,0,0,347,2185,1,0,0,0,349,2192,1,0,0,0,351,2197,1,0,0,0,353,2204,
        1,0,0,0,355,2211,1,0,0,0,357,2216,1,0,0,0,359,2224,1,0,0,0,361,2234,
        1,0,0,0,363,2244,1,0,0,0,365,2255,1,0,0,0,367,2264,1,0,0,0,369,2272,
        1,0,0,0,371,2283,1,0,0,0,373,2292,1,0,0,0,375,2302,1,0,0,0,377,2313,
        1,0,0,0,379,2321,1,0,0,0,381,2331,1,0,0,0,383,2337,1,0,0,0,385,2350,
        1,0,0,0,387,2363,1,0,0,0,389,2367,1,0,0,0,391,2379,1,0,0,0,393,2386,
        1,0,0,0,395,2394,1,0,0,0,397,2401,1,0,0,0,399,2412,1,0,0,0,401,2422,
        1,0,0,0,403,2434,1,0,0,0,405,2445,1,0,0,0,407,2452,1,0,0,0,409,2467,
        1,0,0,0,411,2482,1,0,0,0,413,2489,1,0,0,0,415,2501,1,0,0,0,417,2515,
        1,0,0,0,419,2529,1,0,0,0,421,2536,1,0,0,0,423,2543,1,0,0,0,425,2551,
        1,0,0,0,427,2559,1,0,0,0,429,2566,1,0,0,0,431,2574,1,0,0,0,433,2584,
        1,0,0,0,435,2596,1,0,0,0,437,2606,1,0,0,0,439,2617,1,0,0,0,441,2622,
        1,0,0,0,443,2633,1,0,0,0,445,2640,1,0,0,0,447,2644,1,0,0,0,449,2652,
        1,0,0,0,451,2661,1,0,0,0,453,2669,1,0,0,0,455,2676,1,0,0,0,457,2682,
        1,0,0,0,459,2687,1,0,0,0,461,2701,1,0,0,0,463,2706,1,0,0,0,465,2713,
        1,0,0,0,467,2723,1,0,0,0,469,2733,1,0,0,0,471,2741,1,0,0,0,473,2753,
        1,0,0,0,475,2765,1,0,0,0,477,2776,1,0,0,0,479,2783,1,0,0,0,481,2789,
        1,0,0,0,483,2798,1,0,0,0,485,2806,1,0,0,0,487,2813,1,0,0,0,489,2829,
        1,0,0,0,491,2841,1,0,0,0,493,2851,1,0,0,0,495,2856,1,0,0,0,497,2861,
        1,0,0,0,499,2867,1,0,0,0,501,2873,1,0,0,0,503,2881,1,0,0,0,505,2891,
        1,0,0,0,507,2901,1,0,0,0,509,2905,1,0,0,0,511,2916,1,0,0,0,513,2921,
        1,0,0,0,515,2925,1,0,0,0,517,2930,1,0,0,0,519,2935,1,0,0,0,521,2944,
        1,0,0,0,523,2953,1,0,0,0,525,2959,1,0,0,0,527,2964,1,0,0,0,529,2970,
        1,0,0,0,531,2980,1,0,0,0,533,2986,1,0,0,0,535,2992,1,0,0,0,537,2998,
        1,0,0,0,539,3004,1,0,0,0,541,3008,1,0,0,0,543,3013,1,0,0,0,545,3022,
        1,0,0,0,547,3029,1,0,0,0,549,3034,1,0,0,0,551,3040,1,0,0,0,553,3049,
        1,0,0,0,555,3059,1,0,0,0,557,3072,1,0,0,0,559,3084,1,0,0,0,561,3093,
        1,0,0,0,563,3104,1,0,0,0,565,3113,1,0,0,0,567,3118,1,0,0,0,569,3124,
        1,0,0,0,571,3135,1,0,0,0,573,3146,1,0,0,0,575,3155,1,0,0,0,577,3166,
        1,0,0,0,579,3176,1,0,0,0,581,3185,1,0,0,0,583,3193,1,0,0,0,585,3198,
        1,0,0,0,587,3209,1,0,0,0,589,3217,1,0,0,0,591,3226,1,0,0,0,593,3234,
        1,0,0,0,595,3240,1,0,0,0,597,3249,1,0,0,0,599,3259,1,0,0,0,601,3269,
        1,0,0,0,603,3274,1,0,0,0,605,3283,1,0,0,0,607,3289,1,0,0,0,609,3293,
        1,0,0,0,611,3298,1,0,0,0,613,3304,1,0,0,0,615,3311,1,0,0,0,617,3318,
        1,0,0,0,619,3324,1,0,0,0,621,3339,1,0,0,0,623,3352,1,0,0,0,625,3364,
        1,0,0,0,627,3377,1,0,0,0,629,3388,1,0,0,0,631,3395,1,0,0,0,633,3400,
        1,0,0,0,635,3408,1,0,0,0,637,3416,1,0,0,0,639,3421,1,0,0,0,641,3427,
        1,0,0,0,643,3434,1,0,0,0,645,3441,1,0,0,0,647,3450,1,0,0,0,649,3457,
        1,0,0,0,651,3462,1,0,0,0,653,3469,1,0,0,0,655,3476,1,0,0,0,657,3479,
        1,0,0,0,659,3482,1,0,0,0,661,3485,1,0,0,0,663,3488,1,0,0,0,665,3491,
        1,0,0,0,667,3494,1,0,0,0,669,3497,1,0,0,0,671,3499,1,0,0,0,673,3501,
        1,0,0,0,675,3503,1,0,0,0,677,3506,1,0,0,0,679,3520,1,0,0,0,681,3522,
        1,0,0,0,683,3527,1,0,0,0,685,3532,1,0,0,0,687,3534,1,0,0,0,689,3536,
        1,0,0,0,691,3538,1,0,0,0,693,3540,1,0,0,0,695,3542,1,0,0,0,697,3544,
        1,0,0,0,699,3546,1,0,0,0,701,3548,1,0,0,0,703,3550,1,0,0,0,705,3552,
        1,0,0,0,707,3555,1,0,0,0,709,3559,1,0,0,0,711,713,5,13,0,0,712,711,
        1,0,0,0,712,713,1,0,0,0,713,714,1,0,0,0,714,717,5,10,0,0,715,717,
        5,13,0,0,716,712,1,0,0,0,716,715,1,0,0,0,717,2,1,0,0,0,718,722,5,
        34,0,0,719,721,9,0,0,0,720,719,1,0,0,0,721,724,1,0,0,0,722,723,1,
        0,0,0,722,720,1,0,0,0,723,725,1,0,0,0,724,722,1,0,0,0,725,726,5,
        34,0,0,726,4,1,0,0,0,727,728,5,33,0,0,728,729,3,1,0,0,729,730,6,
        2,0,0,730,6,1,0,0,0,731,739,5,33,0,0,732,740,8,0,0,0,733,735,5,61,
        0,0,734,736,5,61,0,0,735,734,1,0,0,0,736,737,1,0,0,0,737,735,1,0,
        0,0,737,738,1,0,0,0,738,740,1,0,0,0,739,732,1,0,0,0,739,733,1,0,
        0,0,740,744,1,0,0,0,741,743,9,0,0,0,742,741,1,0,0,0,743,746,1,0,
        0,0,744,745,1,0,0,0,744,742,1,0,0,0,745,747,1,0,0,0,746,744,1,0,
        0,0,747,748,3,1,0,0,748,749,6,3,1,0,749,8,1,0,0,0,750,754,5,92,0,
        0,751,753,9,0,0,0,752,751,1,0,0,0,753,756,1,0,0,0,754,755,1,0,0,
        0,754,752,1,0,0,0,755,757,1,0,0,0,756,754,1,0,0,0,757,758,3,1,0,
        0,758,759,1,0,0,0,759,760,6,4,2,0,760,10,1,0,0,0,761,763,7,1,0,0,
        762,761,1,0,0,0,763,764,1,0,0,0,764,762,1,0,0,0,764,765,1,0,0,0,
        765,766,1,0,0,0,766,767,6,5,2,0,767,12,1,0,0,0,768,770,7,2,0,0,769,
        768,1,0,0,0,770,771,1,0,0,0,771,769,1,0,0,0,771,772,1,0,0,0,772,
        773,1,0,0,0,773,774,6,6,2,0,774,14,1,0,0,0,775,776,7,3,0,0,776,777,
        7,4,0,0,777,778,7,5,0,0,778,779,7,4,0,0,779,781,1,0,0,0,780,782,
        7,1,0,0,781,780,1,0,0,0,782,783,1,0,0,0,783,781,1,0,0,0,783,784,
        1,0,0,0,784,785,1,0,0,0,785,786,3,19,9,0,786,16,1,0,0,0,787,791,
        5,64,0,0,788,790,7,1,0,0,789,788,1,0,0,0,790,793,1,0,0,0,791,789,
        1,0,0,0,791,792,1,0,0,0,792,794,1,0,0,0,793,791,1,0,0,0,794,795,
        3,19,9,0,795,18,1,0,0,0,796,798,7,6,0,0,797,796,1,0,0,0,798,799,
        1,0,0,0,799,797,1,0,0,0,799,800,1,0,0,0,800,20,1,0,0,0,801,802,5,
        62,0,0,802,813,5,61,0,0,803,804,5,60,0,0,804,813,5,61,0,0,805,806,
        5,33,0,0,806,813,5,61,0,0,807,808,5,60,0,0,808,813,5,62,0,0,809,
        810,5,61,0,0,810,813,5,61,0,0,811,813,2,60,62,0,812,801,1,0,0,0,
        812,803,1,0,0,0,812,805,1,0,0,0,812,807,1,0,0,0,812,809,1,0,0,0,
        812,811,1,0,0,0,813,22,1,0,0,0,814,815,7,7,0,0,815,816,7,8,0,0,816,
        24,1,0,0,0,817,818,7,9,0,0,818,819,7,8,0,0,819,26,1,0,0,0,820,821,
        7,10,0,0,821,822,7,8,0,0,822,28,1,0,0,0,823,824,7,11,0,0,824,825,
        7,8,0,0,825,30,1,0,0,0,826,827,7,5,0,0,827,828,7,8,0,0,828,32,1,
        0,0,0,829,830,5,36,0,0,830,831,7,10,0,0,831,832,7,12,0,0,832,833,
        7,13,0,0,833,834,7,9,0,0,834,835,7,14,0,0,835,34,1,0,0,0,836,837,
        5,36,0,0,837,838,7,10,0,0,838,839,7,12,0,0,839,840,7,4,0,0,840,841,
        7,15,0,0,841,842,7,11,0,0,842,843,7,13,0,0,843,844,7,12,0,0,844,
        845,5,95,0,0,845,846,7,10,0,0,846,847,7,16,0,0,847,848,7,17,0,0,
        848,849,7,17,0,0,849,850,7,13,0,0,850,851,7,12,0,0,851,36,1,0,0,
        0,852,853,5,36,0,0,853,854,7,18,0,0,854,855,7,9,0,0,855,856,7,19,
        0,0,856,857,7,19,0,0,857,858,7,10,0,0,858,859,7,9,0,0,859,860,7,
        18,0,0,860,861,7,14,0,0,861,38,1,0,0,0,862,863,5,36,0,0,863,864,
        7,18,0,0,864,865,7,9,0,0,865,866,7,19,0,0,866,867,7,19,0,0,867,868,
        7,13,0,0,868,869,7,20,0,0,869,870,7,10,0,0,870,871,7,21,0,0,871,
        40,1,0,0,0,872,873,5,36,0,0,873,874,7,20,0,0,874,875,7,13,0,0,875,
        876,7,11,0,0,876,877,7,18,0,0,877,878,7,22,0,0,878,879,7,4,0,0,879,
        880,7,20,0,0,880,881,7,13,0,0,881,42,1,0,0,0,882,883,5,36,0,0,883,
        884,7,20,0,0,884,885,7,4,0,0,885,886,7,23,0,0,886,887,7,13,0,0,887,
        888,7,22,0,0,888,889,7,9,0,0,889,890,7,5,0,0,890,891,7,18,0,0,891,
        892,7,24,0,0,892,44,1,0,0,0,893,894,5,36,0,0,894,895,7,13,0,0,895,
        896,7,12,0,0,896,897,7,12,0,0,897,898,7,4,0,0,898,899,7,12,0,0,899,
        46,1,0,0,0,900,901,5,36,0,0,901,902,7,3,0,0,902,903,7,9,0,0,903,
        904,7,22,0,0,904,905,7,13,0,0,905,906,7,18,0,0,906,907,7,4,0,0,907,
        908,7,20,0,0,908,909,7,13,0,0,909,48,1,0,0,0,910,911,5,36,0,0,911,
        912,7,3,0,0,912,913,7,9,0,0,913,914,7,22,0,0,914,915,7,13,0,0,915,
        916,7,23,0,0,916,917,7,9,0,0,917,918,7,22,0,0,918,919,7,13,0,0,919,
        50,1,0,0,0,920,921,5,36,0,0,921,922,7,25,0,0,922,923,7,23,0,0,923,
        924,7,5,0,0,924,925,7,5,0,0,925,926,7,9,0,0,926,927,7,10,0,0,927,
        928,7,19,0,0,928,929,7,13,0,0,929,52,1,0,0,0,930,931,5,36,0,0,931,
        932,7,19,0,0,932,933,7,9,0,0,933,934,7,11,0,0,934,935,7,5,0,0,935,
        936,7,22,0,0,936,937,7,9,0,0,937,938,7,5,0,0,938,939,7,18,0,0,939,
        940,7,24,0,0,940,54,1,0,0,0,941,942,5,36,0,0,942,943,7,19,0,0,943,
        944,7,4,0,0,944,945,7,9,0,0,945,946,7,20,0,0,946,947,7,25,0,0,947,
        948,7,23,0,0,948,949,7,3,0,0,949,950,7,17,0,0,950,951,7,12,0,0,951,
        952,7,4,0,0,952,953,7,22,0,0,953,954,7,11,0,0,954,955,7,9,0,0,955,
        956,7,7,0,0,956,957,7,13,0,0,957,56,1,0,0,0,958,959,5,36,0,0,959,
        960,7,22,0,0,960,961,7,9,0,0,961,962,7,5,0,0,962,963,7,18,0,0,963,
        964,7,24,0,0,964,58,1,0,0,0,965,966,5,36,0,0,966,967,7,22,0,0,967,
        968,7,9,0,0,968,969,7,26,0,0,969,970,7,19,0,0,970,971,7,4,0,0,971,
        972,7,4,0,0,972,973,7,27,0,0,973,974,7,11,0,0,974,60,1,0,0,0,975,
        976,5,36,0,0,976,977,7,22,0,0,977,978,7,9,0,0,978,979,7,26,0,0,979,
        980,7,12,0,0,980,981,7,4,0,0,981,982,7,4,0,0,982,983,7,22,0,0,983,
        984,7,18,0,0,984,985,7,12,0,0,985,986,7,13,0,0,986,987,7,9,0,0,987,
        988,7,5,0,0,988,989,7,13,0,0,989,990,7,11,0,0,990,62,1,0,0,0,991,
        992,5,36,0,0,992,993,7,22,0,0,993,994,7,9,0,0,994,995,7,26,0,0,995,
        996,7,5,0,0,996,997,7,13,0,0,997,998,7,26,0,0,998,999,7,5,0,0,999,
        1000,7,18,0,0,1000,1001,7,24,0,0,1001,1002,7,9,0,0,1002,1003,7,23,
        0,0,1003,1004,7,3,0,0,1004,1005,7,13,0,0,1005,1006,7,11,0,0,1006,
        64,1,0,0,0,1007,1008,5,36,0,0,1008,1009,7,22,0,0,1009,1010,7,9,0,
        0,1010,1011,7,26,0,0,1011,1012,7,16,0,0,1012,1013,7,4,0,0,1013,1014,
        7,10,0,0,1014,1015,7,28,0,0,1015,1016,7,11,0,0,1016,66,1,0,0,0,1017,
        1018,5,36,0,0,1018,1019,7,22,0,0,1019,1020,7,13,0,0,1020,1021,7,
        23,0,0,1021,1022,7,16,0,0,1022,1023,7,25,0,0,1023,1024,7,5,0,0,1024,
        1025,7,13,0,0,1025,1026,7,22,0,0,1026,1027,7,19,0,0,1027,1028,7,
        9,0,0,1028,1029,7,10,0,0,1029,1030,7,13,0,0,1030,1031,7,19,0,0,1031,
        68,1,0,0,0,1032,1033,5,36,0,0,1033,1034,7,27,0,0,1034,1035,7,9,0,
        0,1035,1036,7,12,0,0,1036,1037,7,11,0,0,1037,1038,7,13,0,0,1038,
        1039,5,95,0,0,1039,1040,7,13,0,0,1040,1041,7,12,0,0,1041,1042,7,
        12,0,0,1042,1043,7,4,0,0,1043,1044,7,12,0,0,1044,1045,5,95,0,0,1045,
        1046,5,49,0,0,1046,70,1,0,0,0,1047,1048,5,36,0,0,1048,1049,7,27,
        0,0,1049,1050,7,9,0,0,1050,1051,7,12,0,0,1051,1052,7,11,0,0,1052,
        1053,7,13,0,0,1053,1054,5,95,0,0,1054,1055,7,13,0,0,1055,1056,7,
        12,0,0,1056,1057,7,12,0,0,1057,1058,7,4,0,0,1058,1059,7,12,0,0,1059,
        1060,5,95,0,0,1060,1061,5,50,0,0,1061,72,1,0,0,0,1062,1063,5,36,
        0,0,1063,1064,7,27,0,0,1064,1065,7,9,0,0,1065,1066,7,12,0,0,1066,
        1067,7,11,0,0,1067,1068,7,13,0,0,1068,1069,5,95,0,0,1069,1070,7,
        13,0,0,1070,1071,7,12,0,0,1071,1072,7,12,0,0,1072,1073,7,4,0,0,1073,
        1074,7,12,0,0,1074,1075,5,95,0,0,1075,1076,5,51,0,0,1076,74,1,0,
        0,0,1077,1078,5,36,0,0,1078,1079,7,27,0,0,1079,1080,7,9,0,0,1080,
        1081,7,12,0,0,1081,1082,7,11,0,0,1082,1083,7,13,0,0,1083,1084,5,
        95,0,0,1084,1085,7,13,0,0,1085,1086,7,12,0,0,1086,1087,7,12,0,0,
        1087,1088,7,4,0,0,1088,1089,7,12,0,0,1089,1090,5,95,0,0,1090,1091,
        5,52,0,0,1091,76,1,0,0,0,1092,1093,5,36,0,0,1093,1094,7,12,0,0,1094,
        1095,7,13,0,0,1095,1096,7,27,0,0,1096,1097,7,19,0,0,1097,1098,7,
        21,0,0,1098,1099,7,9,0,0,1099,1100,7,20,0,0,1100,1101,7,20,0,0,1101,
        1102,7,12,0,0,1102,1103,7,13,0,0,1103,1104,7,11,0,0,1104,1105,7,
        11,0,0,1105,78,1,0,0,0,1106,1107,5,36,0,0,1107,1108,7,11,0,0,1108,
        1109,7,5,0,0,1109,1110,7,25,0,0,1110,1111,7,22,0,0,1111,1112,7,13,
        0,0,1112,80,1,0,0,0,1113,1114,5,36,0,0,1114,1115,7,11,0,0,1115,1116,
        7,5,0,0,1116,1117,7,12,0,0,1117,1118,7,5,0,0,1118,1119,7,9,0,0,1119,
        1120,7,10,0,0,1120,1121,7,19,0,0,1121,1122,7,13,0,0,1122,82,1,0,
        0,0,1123,1124,5,36,0,0,1124,1125,7,5,0,0,1125,1126,7,24,0,0,1126,
        1127,7,25,0,0,1127,1128,7,11,0,0,1128,1129,7,11,0,0,1129,1130,7,
        18,0,0,1130,1131,7,12,0,0,1131,1132,7,25,0,0,1132,1133,7,27,0,0,
        1133,1134,7,5,0,0,1134,84,1,0,0,0,1135,1136,5,36,0,0,1136,1137,7,
        5,0,0,1137,1138,7,25,0,0,1138,1139,7,22,0,0,1139,1140,7,13,0,0,1140,
        86,1,0,0,0,1141,1142,5,36,0,0,1142,1143,7,16,0,0,1143,1144,7,11,
        0,0,1144,1145,7,13,0,0,1145,1146,7,12,0,0,1146,1147,7,11,0,0,1147,
        88,1,0,0,0,1148,1150,7,29,0,0,1149,1148,1,0,0,0,1150,1151,1,0,0,
        0,1151,1149,1,0,0,0,1151,1152,1,0,0,0,1152,90,1,0,0,0,1153,1154,
        5,94,0,0,1154,1155,3,89,44,0,1155,92,1,0,0,0,1156,1157,7,23,0,0,
        1157,1158,7,27,0,0,1158,1159,1,0,0,0,1159,1160,7,8,0,0,1160,94,1,
        0,0,0,1161,1162,7,23,0,0,1162,1163,7,12,0,0,1163,1164,1,0,0,0,1164,
        1165,7,8,0,0,1165,96,1,0,0,0,1166,1167,7,23,0,0,1167,1168,7,18,0,
        0,1168,1169,1,0,0,0,1169,1170,7,8,0,0,1170,98,1,0,0,0,1171,1172,
        7,23,0,0,1172,1173,7,4,0,0,1173,1174,1,0,0,0,1174,1175,7,8,0,0,1175,
        100,1,0,0,0,1176,1177,7,23,0,0,1177,1178,7,13,0,0,1178,1179,1,0,
        0,0,1179,1180,7,8,0,0,1180,102,1,0,0,0,1181,1182,7,25,0,0,1182,1183,
        7,17,0,0,1183,104,1,0,0,0,1184,1185,7,25,0,0,1185,1186,7,17,0,0,
        1186,1187,7,23,0,0,1187,1188,7,4,0,0,1188,1189,7,5,0,0,1189,106,
        1,0,0,0,1190,1191,7,13,0,0,1191,1192,7,19,0,0,1192,1193,7,11,0,0,
        1193,1194,7,13,0,0,1194,1195,5,95,0,0,1195,1196,7,25,0,0,1196,1197,
        7,17,0,0,1197,108,1,0,0,0,1198,1199,7,13,0,0,1199,1200,7,19,0,0,
        1200,1201,7,11,0,0,1201,1202,7,13,0,0,1202,1203,5,95,0,0,1203,1204,
        7,25,0,0,1204,1205,7,17,0,0,1205,1206,7,23,0,0,1206,1207,7,4,0,0,
        1207,1208,7,5,0,0,1208,110,1,0,0,0,1209,1210,7,13,0,0,1210,1211,
        7,19,0,0,1211,1212,7,11,0,0,1212,1213,7,13,0,0,1213,112,1,0,0,0,
        1214,1215,7,19,0,0,1215,1216,7,4,0,0,1216,1217,7,4,0,0,1217,1218,
        7,27,0,0,1218,114,1,0,0,0,1219,1220,7,15,0,0,1220,1221,7,24,0,0,
        1221,1222,7,13,0,0,1222,1223,7,23,0,0,1223,116,1,0,0,0,1224,1225,
        7,25,0,0,1225,1226,7,11,0,0,1226,118,1,0,0,0,1227,1228,7,17,0,0,
        1228,1229,7,9,0,0,1229,1230,7,11,0,0,1230,1231,7,5,0,0,1231,1232,
        7,27,0,0,1232,1233,7,4,0,0,1233,1234,7,27,0,0,1234,120,1,0,0,0,1235,
        1236,7,17,0,0,1236,1237,7,9,0,0,1237,1238,7,11,0,0,1238,1239,7,5,
        0,0,1239,1240,7,27,0,0,1240,1241,7,16,0,0,1241,1242,7,11,0,0,1242,
        1243,7,24,0,0,1243,122,1,0,0,0,1244,1245,7,27,0,0,1245,1246,7,4,
        0,0,1246,1247,7,27,0,0,1247,124,1,0,0,0,1248,1249,7,27,0,0,1249,
        1250,7,16,0,0,1250,1251,7,11,0,0,1251,1252,7,24,0,0,1252,126,1,0,
        0,0,1253,1254,7,5,0,0,1254,1255,7,24,0,0,1255,1256,7,13,0,0,1256,
        1257,7,23,0,0,1257,128,1,0,0,0,1258,1259,5,46,0,0,1259,130,1,0,0,
        0,1260,1261,7,9,0,0,1261,1262,7,18,0,0,1262,1263,7,5,0,0,1263,1264,
        7,25,0,0,1264,1265,7,4,0,0,1265,1266,7,23,0,0,1266,132,1,0,0,0,1267,
        1268,7,9,0,0,1268,1269,7,20,0,0,1269,1270,7,20,0,0,1270,1271,7,3,
        0,0,1271,1272,7,12,0,0,1272,1273,7,4,0,0,1273,1274,7,16,0,0,1274,
        1275,7,27,0,0,1275,134,1,0,0,0,1276,1277,7,9,0,0,1277,1278,7,20,
        0,0,1278,1279,7,20,0,0,1279,1280,7,13,0,0,1280,1281,7,17,0,0,1281,
        1282,7,17,0,0,1282,1283,7,13,0,0,1283,1284,7,18,0,0,1284,1285,7,
        5,0,0,1285,136,1,0,0,0,1286,1287,7,9,0,0,1287,1288,7,20,0,0,1288,
        1289,7,20,0,0,1289,1290,7,13,0,0,1290,1291,7,26,0,0,1291,1292,7,
        27,0,0,1292,1293,7,12,0,0,1293,138,1,0,0,0,1294,1295,7,9,0,0,1295,
        1296,7,20,0,0,1296,1297,7,20,0,0,1297,1298,7,22,0,0,1298,1299,7,
        13,0,0,1299,1300,7,23,0,0,1300,1301,7,16,0,0,1301,1302,7,25,0,0,
        1302,1303,7,5,0,0,1303,1304,7,13,0,0,1304,1305,7,22,0,0,1305,140,
        1,0,0,0,1306,1307,7,9,0,0,1307,1308,7,19,0,0,1308,1309,7,5,0,0,1309,
        1310,7,15,0,0,1310,1311,7,25,0,0,1311,1312,7,23,0,0,1312,1313,7,
        4,0,0,1313,1314,7,17,0,0,1314,1315,7,17,0,0,1315,142,1,0,0,0,1316,
        1317,7,9,0,0,1317,1318,7,19,0,0,1318,1319,7,5,0,0,1319,1320,7,15,
        0,0,1320,1321,7,25,0,0,1321,1322,7,23,0,0,1322,1323,7,4,0,0,1323,
        1324,7,23,0,0,1324,144,1,0,0,0,1325,1326,7,9,0,0,1326,1327,7,23,
        0,0,1327,1328,7,25,0,0,1328,1329,7,22,0,0,1329,146,1,0,0,0,1330,
        1331,7,9,0,0,1331,1332,7,11,0,0,1332,1333,7,11,0,0,1333,1334,7,13,
        0,0,1334,1335,7,12,0,0,1335,1336,7,5,0,0,1336,148,1,0,0,0,1337,1338,
        7,9,0,0,1338,1339,7,5,0,0,1339,1340,7,5,0,0,1340,1341,7,9,0,0,1341,
        1342,7,18,0,0,1342,1343,7,14,0,0,1343,150,1,0,0,0,1344,1345,7,10,
        0,0,1345,1346,7,13,0,0,1346,1347,7,24,0,0,1347,1348,7,25,0,0,1348,
        1349,7,23,0,0,1349,1350,7,20,0,0,1350,152,1,0,0,0,1351,1352,7,10,
        0,0,1352,1353,7,25,0,0,1353,1354,7,5,0,0,1354,1355,7,3,0,0,1355,
        1356,7,13,0,0,1356,1357,7,5,0,0,1357,154,1,0,0,0,1358,1359,7,10,
        0,0,1359,1360,7,25,0,0,1360,1361,7,5,0,0,1361,1362,7,11,0,0,1362,
        1363,7,13,0,0,1363,1364,7,5,0,0,1364,156,1,0,0,0,1365,1366,7,10,
        0,0,1366,1367,7,4,0,0,1367,1368,7,19,0,0,1368,1369,7,20,0,0,1369,
        1370,7,4,0,0,1370,1371,7,17,0,0,1371,1372,7,17,0,0,1372,158,1,0,
        0,0,1373,1374,7,10,0,0,1374,1375,7,4,0,0,1375,1376,7,19,0,0,1376,
        1377,7,20,0,0,1377,1378,7,4,0,0,1378,1379,7,23,0,0,1379,160,1,0,
        0,0,1380,1381,7,10,0,0,1381,1382,7,4,0,0,1382,1383,7,12,0,0,1383,
        1384,7,20,0,0,1384,1385,7,13,0,0,1385,1386,7,12,0,0,1386,162,1,0,
        0,0,1387,1388,7,10,0,0,1388,1389,7,16,0,0,1389,1390,7,3,0,0,1390,
        1391,7,12,0,0,1391,1392,7,13,0,0,1392,1393,7,27,0,0,1393,1394,7,
        4,0,0,1394,1395,7,12,0,0,1395,1396,7,5,0,0,1396,164,1,0,0,0,1397,
        1398,7,18,0,0,1398,1399,7,9,0,0,1399,1400,7,19,0,0,1400,1401,7,19,
        0,0,1401,166,1,0,0,0,1402,1403,7,18,0,0,1403,1404,7,9,0,0,1404,1405,
        7,19,0,0,1405,1406,7,19,0,0,1406,1407,7,22,0,0,1407,1408,7,9,0,0,
        1408,1409,7,5,0,0,1409,1410,7,18,0,0,1410,1411,7,24,0,0,1411,168,
        1,0,0,0,1412,1413,7,18,0,0,1413,1414,7,9,0,0,1414,1415,7,19,0,0,
        1415,1416,7,19,0,0,1416,1417,7,27,0,0,1417,1418,7,11,0,0,1418,170,
        1,0,0,0,1419,1420,7,18,0,0,1420,1421,7,9,0,0,1421,1422,7,23,0,0,
        1422,1423,7,20,0,0,1423,1424,7,4,0,0,1424,172,1,0,0,0,1425,1426,
        7,18,0,0,1426,1427,7,24,0,0,1427,1428,7,13,0,0,1428,1429,7,18,0,
        0,1429,1430,7,14,0,0,1430,1431,7,13,0,0,1431,1432,7,17,0,0,1432,
        1433,7,17,0,0,1433,1434,7,13,0,0,1434,1435,7,18,0,0,1435,1436,7,
        5,0,0,1436,174,1,0,0,0,1437,1438,7,18,0,0,1438,1439,7,19,0,0,1439,
        1440,7,13,0,0,1440,1441,7,9,0,0,1441,1442,7,12,0,0,1442,176,1,0,
        0,0,1443,1444,7,18,0,0,1444,1445,7,19,0,0,1445,1446,7,13,0,0,1446,
        1447,7,9,0,0,1447,1448,7,12,0,0,1448,1449,7,22,0,0,1449,1450,7,13,
        0,0,1450,1451,7,23,0,0,1451,1452,7,16,0,0,1452,178,1,0,0,0,1453,
        1454,7,18,0,0,1454,1455,7,19,0,0,1455,1456,7,13,0,0,1456,1457,7,
        9,0,0,1457,1458,7,12,0,0,1458,1459,7,5,0,0,1459,1460,7,9,0,0,1460,
        1461,7,10,0,0,1461,1462,7,19,0,0,1462,1463,7,13,0,0,1463,180,1,0,
        0,0,1464,1465,7,18,0,0,1465,1466,7,19,0,0,1466,1467,7,4,0,0,1467,
        1468,7,11,0,0,1468,1469,7,13,0,0,1469,1470,7,19,0,0,1470,1471,7,
        4,0,0,1471,1472,7,18,0,0,1472,1473,7,14,0,0,1473,1474,7,13,0,0,1474,
        1475,7,12,0,0,1475,182,1,0,0,0,1476,1477,7,18,0,0,1477,1478,7,22,
        0,0,1478,1479,7,3,0,0,1479,1480,7,12,0,0,1480,184,1,0,0,0,1481,1482,
        7,18,0,0,1482,1483,7,4,0,0,1483,1484,7,22,0,0,1484,1485,7,27,0,0,
        1485,1486,7,9,0,0,1486,1487,7,12,0,0,1487,1488,7,13,0,0,1488,1489,
        7,25,0,0,1489,1490,7,5,0,0,1490,1491,7,13,0,0,1491,1492,7,22,0,0,
        1492,186,1,0,0,0,1493,1494,7,18,0,0,1494,1495,7,4,0,0,1495,1496,
        7,23,0,0,1496,1497,7,5,0,0,1497,1498,7,12,0,0,1498,1499,7,25,0,0,
        1499,1500,7,10,0,0,1500,1501,7,16,0,0,1501,1502,7,5,0,0,1502,1503,
        7,13,0,0,1503,188,1,0,0,0,1504,1505,7,18,0,0,1505,1506,7,4,0,0,1506,
        1507,7,27,0,0,1507,1508,7,21,0,0,1508,190,1,0,0,0,1509,1510,7,18,
        0,0,1510,1511,7,12,0,0,1511,1512,7,13,0,0,1512,1513,7,9,0,0,1513,
        1514,7,5,0,0,1514,1515,7,13,0,0,1515,192,1,0,0,0,1516,1517,7,18,
        0,0,1517,1518,7,12,0,0,1518,1519,7,13,0,0,1519,1520,7,9,0,0,1520,
        1521,7,5,0,0,1521,1522,7,13,0,0,1522,1523,7,25,0,0,1523,1524,7,5,
        0,0,1524,1525,7,13,0,0,1525,1526,7,22,0,0,1526,194,1,0,0,0,1527,
        1528,7,18,0,0,1528,1529,7,12,0,0,1529,1530,7,13,0,0,1530,1531,7,
        9,0,0,1531,1532,7,5,0,0,1532,1533,7,13,0,0,1533,1534,7,12,0,0,1534,
        1535,7,4,0,0,1535,1536,7,4,0,0,1536,1537,7,22,0,0,1537,196,1,0,0,
        0,1538,1539,7,18,0,0,1539,1540,7,12,0,0,1540,1541,7,13,0,0,1541,
        1542,7,9,0,0,1542,1543,7,5,0,0,1543,1544,7,13,0,0,1544,1545,7,5,
        0,0,1545,1546,7,9,0,0,1546,1547,7,10,0,0,1547,1548,7,19,0,0,1548,
        1549,7,13,0,0,1549,198,1,0,0,0,1550,1551,7,18,0,0,1551,1552,7,12,
        0,0,1552,1553,7,13,0,0,1553,1554,7,9,0,0,1554,1555,7,5,0,0,1555,
        1556,7,13,0,0,1556,1557,7,5,0,0,1557,1558,7,13,0,0,1558,1559,7,26,
        0,0,1559,1560,7,5,0,0,1560,200,1,0,0,0,1561,1562,7,18,0,0,1562,1563,
        7,12,0,0,1563,1564,7,25,0,0,1564,1565,7,5,0,0,1565,1566,7,25,0,0,
        1566,1567,7,18,0,0,1567,1568,7,9,0,0,1568,1569,7,19,0,0,1569,202,
        1,0,0,0,1570,1571,7,20,0,0,1571,1572,7,13,0,0,1572,1573,7,18,0,0,
        1573,1574,7,4,0,0,1574,1575,7,20,0,0,1575,1576,7,13,0,0,1576,1577,
        7,9,0,0,1577,1578,7,5,0,0,1578,1579,7,5,0,0,1579,1580,7,9,0,0,1580,
        1581,7,18,0,0,1581,1582,7,14,0,0,1582,204,1,0,0,0,1583,1584,7,20,
        0,0,1584,1585,7,13,0,0,1585,1586,7,17,0,0,1586,1587,7,9,0,0,1587,
        1588,7,16,0,0,1588,1589,7,19,0,0,1589,1590,7,5,0,0,1590,206,1,0,
        0,0,1591,1592,7,20,0,0,1592,1593,7,13,0,0,1593,1594,7,19,0,0,1594,
        1595,7,13,0,0,1595,1596,7,5,0,0,1596,1597,7,13,0,0,1597,1598,7,5,
        0,0,1598,1599,7,9,0,0,1599,1600,7,10,0,0,1600,1601,7,19,0,0,1601,
        1602,7,13,0,0,1602,208,1,0,0,0,1603,1604,7,20,0,0,1604,1605,7,13,
        0,0,1605,1606,7,27,0,0,1606,1607,7,19,0,0,1607,1608,7,4,0,0,1608,
        1609,7,21,0,0,1609,210,1,0,0,0,1610,1611,7,20,0,0,1611,1612,7,25,
        0,0,1612,1613,7,12,0,0,1613,1614,7,9,0,0,1614,1615,7,20,0,0,1615,
        1616,7,20,0,0,1616,212,1,0,0,0,1617,1618,7,20,0,0,1618,1619,7,25,
        0,0,1619,1620,7,12,0,0,1620,1621,7,11,0,0,1621,1622,7,13,0,0,1622,
        1623,7,23,0,0,1623,1624,7,20,0,0,1624,214,1,0,0,0,1625,1626,7,20,
        0,0,1626,1627,7,4,0,0,1627,1628,7,18,0,0,1628,1629,7,12,0,0,1629,
        1630,7,13,0,0,1630,1631,7,9,0,0,1631,1632,7,5,0,0,1632,1633,7,13,
        0,0,1633,216,1,0,0,0,1634,1635,7,20,0,0,1635,1636,7,4,0,0,1636,1637,
        7,19,0,0,1637,1638,7,4,0,0,1638,1639,7,4,0,0,1639,1640,7,14,0,0,
        1640,218,1,0,0,0,1641,1642,7,20,0,0,1642,1643,7,12,0,0,1643,1644,
        7,4,0,0,1644,1645,7,27,0,0,1645,220,1,0,0,0,1646,1647,7,13,0,0,1647,
        1648,7,23,0,0,1648,1649,7,18,0,0,1649,1650,7,4,0,0,1650,1651,7,20,
        0,0,1651,1652,7,13,0,0,1652,1653,7,9,0,0,1653,1654,7,5,0,0,1654,
        1655,7,5,0,0,1655,1656,7,9,0,0,1656,1657,7,18,0,0,1657,1658,7,14,
        0,0,1658,222,1,0,0,0,1659,1660,7,13,0,0,1660,1661,7,23,0,0,1661,
        1662,7,20,0,0,1662,1663,5,50,0,0,1663,1664,7,13,0,0,1664,1665,7,
        17,0,0,1665,1666,7,17,0,0,1666,1667,7,13,0,0,1667,1668,7,18,0,0,
        1668,1669,7,5,0,0,1669,224,1,0,0,0,1670,1671,7,13,0,0,1671,1672,
        7,23,0,0,1672,1673,7,20,0,0,1673,1674,7,13,0,0,1674,1675,7,17,0,
        0,1675,1676,7,17,0,0,1676,1677,7,13,0,0,1677,1678,7,18,0,0,1678,
        1679,7,5,0,0,1679,226,1,0,0,0,1680,1681,7,13,0,0,1681,1682,7,23,
        0,0,1682,1683,7,20,0,0,1683,1684,7,23,0,0,1684,1685,7,13,0,0,1685,
        1686,7,17,0,0,1686,1687,7,17,0,0,1687,1688,7,13,0,0,1688,1689,7,
        18,0,0,1689,1690,7,5,0,0,1690,228,1,0,0,0,1691,1692,7,13,0,0,1692,
        1693,7,26,0,0,1693,1694,7,27,0,0,1694,1695,7,9,0,0,1695,1696,7,23,
        0,0,1696,1697,7,20,0,0,1697,230,1,0,0,0,1698,1699,7,17,0,0,1699,
        1700,7,13,0,0,1700,1701,7,22,0,0,1701,1702,7,25,0,0,1702,1703,7,
        11,0,0,1703,1704,7,18,0,0,1704,232,1,0,0,0,1705,1706,7,17,0,0,1706,
        1707,7,13,0,0,1707,1708,7,16,0,0,1708,1709,7,27,0,0,1709,1710,7,
        20,0,0,1710,1711,7,9,0,0,1711,1712,7,5,0,0,1712,1713,7,13,0,0,1713,
        234,1,0,0,0,1714,1715,7,17,0,0,1715,1716,7,25,0,0,1716,1717,7,19,
        0,0,1717,1718,7,19,0,0,1718,1719,7,5,0,0,1719,1720,7,9,0,0,1720,
        1721,7,10,0,0,1721,1722,7,19,0,0,1722,1723,7,13,0,0,1723,236,1,0,
        0,0,1724,1725,7,17,0,0,1725,1726,7,25,0,0,1726,1727,7,12,0,0,1727,
        1728,7,11,0,0,1728,1729,7,5,0,0,1729,1730,7,10,0,0,1730,1731,7,19,
        0,0,1731,1732,7,4,0,0,1732,1733,7,4,0,0,1733,1734,7,20,0,0,1734,
        238,1,0,0,0,1735,1736,7,17,0,0,1736,1737,7,25,0,0,1737,1738,7,12,
        0,0,1738,1739,7,11,0,0,1739,1740,7,5,0,0,1740,1741,7,4,0,0,1741,
        1742,7,10,0,0,1742,1743,7,28,0,0,1743,240,1,0,0,0,1744,1745,7,17,
        0,0,1745,1746,7,25,0,0,1746,1747,7,12,0,0,1747,1748,7,11,0,0,1748,
        1749,7,5,0,0,1749,1750,7,27,0,0,1750,1751,7,19,0,0,1751,1752,7,9,
        0,0,1752,1753,7,21,0,0,1753,1754,7,13,0,0,1754,1755,7,12,0,0,1755,
        242,1,0,0,0,1756,1757,7,17,0,0,1757,1758,7,25,0,0,1758,1759,7,12,
        0,0,1759,1760,7,11,0,0,1760,1761,7,5,0,0,1761,1762,7,15,0,0,1762,
        1763,7,9,0,0,1763,1764,7,5,0,0,1764,1765,7,18,0,0,1765,1766,7,24,
        0,0,1766,244,1,0,0,0,1767,1768,7,3,0,0,1768,1769,7,9,0,0,1769,1770,
        7,5,0,0,1770,1771,7,24,0,0,1771,1772,7,13,0,0,1772,1773,7,12,0,0,
        1773,246,1,0,0,0,1774,1775,7,3,0,0,1775,1776,7,9,0,0,1776,1777,7,
        5,0,0,1777,1778,7,24,0,0,1778,1779,7,13,0,0,1779,1780,7,12,0,0,1780,
        1781,7,17,0,0,1781,1782,7,25,0,0,1782,1783,7,12,0,0,1783,1784,7,
        11,0,0,1784,1785,7,5,0,0,1785,248,1,0,0,0,1786,1787,7,3,0,0,1787,
        1788,7,9,0,0,1788,1789,7,5,0,0,1789,1790,7,24,0,0,1790,1791,7,13,
        0,0,1791,1792,7,12,0,0,1792,1793,7,17,0,0,1793,1794,7,25,0,0,1794,
        1795,7,12,0,0,1795,1796,7,11,0,0,1796,1797,7,5,0,0,1797,1798,7,12,
        0,0,1798,1799,7,4,0,0,1799,1800,7,4,0,0,1800,1801,7,22,0,0,1801,
        250,1,0,0,0,1802,1803,7,3,0,0,1803,1804,7,9,0,0,1804,1805,7,5,0,
        0,1805,1806,7,24,0,0,1806,1807,7,13,0,0,1807,1808,7,12,0,0,1808,
        1809,7,23,0,0,1809,1810,7,13,0,0,1810,1811,7,26,0,0,1811,1812,7,
        5,0,0,1812,252,1,0,0,0,1813,1814,7,3,0,0,1814,1815,7,9,0,0,1815,
        1816,7,5,0,0,1816,1817,7,24,0,0,1817,1818,7,13,0,0,1818,1819,7,12,
        0,0,1819,1820,7,23,0,0,1820,1821,7,13,0,0,1821,1822,7,26,0,0,1822,
        1823,7,5,0,0,1823,1824,7,12,0,0,1824,1825,7,4,0,0,1825,1826,7,4,
        0,0,1826,1827,7,22,0,0,1827,254,1,0,0,0,1828,1829,7,3,0,0,1829,1830,
        7,9,0,0,1830,1831,7,5,0,0,1831,1832,7,24,0,0,1832,1833,7,13,0,0,
        1833,1834,7,12,0,0,1834,1835,7,27,0,0,1835,1836,7,19,0,0,1836,1837,
        7,9,0,0,1837,1838,7,21,0,0,1838,1839,7,13,0,0,1839,1840,7,12,0,0,
        1840,256,1,0,0,0,1841,1842,7,3,0,0,1842,1843,7,13,0,0,1843,1844,
        7,5,0,0,1844,1845,7,18,0,0,1845,1846,7,4,0,0,1846,1847,7,23,0,0,
        1847,1848,7,5,0,0,1848,1849,7,12,0,0,1849,1850,7,25,0,0,1850,1851,
        7,10,0,0,1851,1852,7,16,0,0,1852,1853,7,5,0,0,1853,1854,7,4,0,0,
        1854,1855,7,12,0,0,1855,1856,7,11,0,0,1856,258,1,0,0,0,1857,1858,
        7,3,0,0,1858,1859,7,13,0,0,1859,1860,7,5,0,0,1860,1861,7,25,0,0,
        1861,1862,7,23,0,0,1862,1863,7,20,0,0,1863,1864,7,13,0,0,1864,1865,
        7,26,0,0,1865,1866,7,4,0,0,1866,1867,7,17,0,0,1867,260,1,0,0,0,1868,
        1869,7,3,0,0,1869,1870,7,13,0,0,1870,1871,7,5,0,0,1871,1872,7,22,
        0,0,1872,1873,7,9,0,0,1873,1874,7,26,0,0,1874,262,1,0,0,0,1875,1876,
        7,3,0,0,1876,1877,7,13,0,0,1877,1878,7,5,0,0,1878,1879,7,23,0,0,
        1879,1880,7,9,0,0,1880,1881,7,22,0,0,1881,1882,7,13,0,0,1882,1883,
        7,4,0,0,1883,1884,7,17,0,0,1884,264,1,0,0,0,1885,1886,7,3,0,0,1886,
        1887,7,13,0,0,1887,1888,7,5,0,0,1888,1889,7,27,0,0,1889,1890,7,11,
        0,0,1890,266,1,0,0,0,1891,1892,7,3,0,0,1892,1893,7,13,0,0,1893,1894,
        7,5,0,0,1894,1895,7,5,0,0,1895,1896,7,9,0,0,1896,1897,7,10,0,0,1897,
        1898,7,19,0,0,1898,1899,7,13,0,0,1899,268,1,0,0,0,1900,1901,7,3,
        0,0,1901,1902,7,13,0,0,1902,1903,7,5,0,0,1903,1904,7,5,0,0,1904,
        1905,7,13,0,0,1905,1906,7,26,0,0,1906,1907,7,5,0,0,1907,270,1,0,
        0,0,1908,1909,7,3,0,0,1909,1910,7,13,0,0,1910,1911,7,5,0,0,1911,
        1912,7,15,0,0,1912,1913,7,9,0,0,1913,1914,7,5,0,0,1914,1915,7,18,
        0,0,1915,1916,7,24,0,0,1916,272,1,0,0,0,1917,1918,7,3,0,0,1918,1919,
        7,19,0,0,1919,1920,7,16,0,0,1920,1921,7,13,0,0,1921,274,1,0,0,0,
        1922,1923,7,3,0,0,1923,1924,7,12,0,0,1924,1925,7,4,0,0,1925,1926,
        7,16,0,0,1926,1927,7,23,0,0,1927,1928,7,20,0,0,1928,276,1,0,0,0,
        1929,1930,7,24,0,0,1930,1931,7,9,0,0,1931,1932,7,11,0,0,1932,1933,
        7,24,0,0,1933,1934,5,49,0,0,1934,278,1,0,0,0,1935,1936,7,24,0,0,
        1936,1937,7,9,0,0,1937,1938,7,11,0,0,1938,1939,7,24,0,0,1939,1940,
        5,50,0,0,1940,280,1,0,0,0,1941,1942,7,24,0,0,1942,1943,7,13,0,0,
        1943,1944,7,9,0,0,1944,1945,7,19,0,0,1945,282,1,0,0,0,1946,1947,
        7,24,0,0,1947,1948,7,13,0,0,1948,1949,7,9,0,0,1949,1950,7,19,0,0,
        1950,1951,7,27,0,0,1951,284,1,0,0,0,1952,1953,7,24,0,0,1953,1954,
        7,16,0,0,1954,1955,7,12,0,0,1955,1956,7,5,0,0,1956,286,1,0,0,0,1957,
        1958,7,24,0,0,1958,1959,7,16,0,0,1959,1960,7,11,0,0,1960,1961,7,
        24,0,0,1961,288,1,0,0,0,1962,1963,7,25,0,0,1963,1964,7,23,0,0,1964,
        1965,7,17,0,0,1965,1966,7,4,0,0,1966,290,1,0,0,0,1967,1968,7,25,
        0,0,1968,1969,7,23,0,0,1969,1970,7,17,0,0,1970,1971,7,4,0,0,1971,
        1972,7,25,0,0,1972,1973,7,5,0,0,1973,1974,7,13,0,0,1974,1975,7,22,
        0,0,1975,292,1,0,0,0,1976,1977,7,25,0,0,1977,1978,7,23,0,0,1978,
        1979,7,28,0,0,1979,1980,7,16,0,0,1980,1981,7,12,0,0,1981,1982,7,
        13,0,0,1982,294,1,0,0,0,1983,1984,7,25,0,0,1984,1985,7,23,0,0,1985,
        1986,7,27,0,0,1986,1987,7,24,0,0,1987,1988,7,12,0,0,1988,1989,7,
        9,0,0,1989,1990,7,11,0,0,1990,1991,7,13,0,0,1991,296,1,0,0,0,1992,
        1993,7,25,0,0,1993,1994,7,23,0,0,1994,1995,7,7,0,0,1995,1996,7,13,
        0,0,1996,1997,7,23,0,0,1997,1998,7,5,0,0,1998,1999,7,4,0,0,1999,
        2000,7,12,0,0,2000,2001,7,21,0,0,2001,298,1,0,0,0,2002,2003,7,25,
        0,0,2003,2004,7,11,0,0,2004,2005,7,25,0,0,2005,2006,7,23,0,0,2006,
        2007,7,28,0,0,2007,2008,7,16,0,0,2008,2009,7,12,0,0,2009,2010,7,
        13,0,0,2010,2011,7,20,0,0,2011,300,1,0,0,0,2012,2013,7,25,0,0,2013,
        2014,7,11,0,0,2014,2015,7,23,0,0,2015,2016,7,9,0,0,2016,2017,7,22,
        0,0,2017,2018,7,13,0,0,2018,2019,7,17,0,0,2019,2020,7,12,0,0,2020,
        2021,7,13,0,0,2021,2022,7,13,0,0,2022,302,1,0,0,0,2023,2024,7,25,
        0,0,2024,2025,7,5,0,0,2025,2026,7,13,0,0,2026,2027,7,22,0,0,2027,
        2028,7,11,0,0,2028,2029,7,23,0,0,2029,2030,7,9,0,0,2030,2031,7,27,
        0,0,2031,2032,7,11,0,0,2032,2033,7,24,0,0,2033,2034,7,4,0,0,2034,
        2035,7,5,0,0,2035,304,1,0,0,0,2036,2037,7,14,0,0,2037,2038,7,25,
        0,0,2038,2039,7,19,0,0,2039,2040,7,19,0,0,2040,306,1,0,0,0,2041,
        2042,7,14,0,0,2042,2043,7,25,0,0,2043,2044,7,19,0,0,2044,2045,7,
        19,0,0,2045,2046,7,9,0,0,2046,2047,7,19,0,0,2047,2048,7,19,0,0,2048,
        2049,7,23,0,0,2049,2050,7,27,0,0,2050,308,1,0,0,0,2051,2052,7,19,
        0,0,2052,2053,7,9,0,0,2053,2054,7,16,0,0,2054,2055,7,23,0,0,2055,
        2056,7,18,0,0,2056,2057,7,24,0,0,2057,310,1,0,0,0,2058,2059,7,19,
        0,0,2059,2060,7,9,0,0,2060,2061,7,16,0,0,2061,2062,7,23,0,0,2062,
        2063,7,18,0,0,2063,2064,7,24,0,0,2064,2065,7,16,0,0,2065,2066,7,
        12,0,0,2066,2067,7,19,0,0,2067,312,1,0,0,0,2068,2069,7,19,0,0,2069,
        2070,7,4,0,0,2070,2071,7,9,0,0,2071,2072,7,20,0,0,2072,314,1,0,0,
        0,2073,2074,7,19,0,0,2074,2075,7,4,0,0,2075,2076,7,9,0,0,2076,2077,
        7,20,0,0,2077,2078,7,18,0,0,2078,2079,7,24,0,0,2079,2080,7,9,0,0,
        2080,2081,7,12,0,0,2081,2082,7,20,0,0,2082,2083,7,9,0,0,2083,2084,
        7,5,0,0,2084,2085,7,9,0,0,2085,316,1,0,0,0,2086,2087,7,19,0,0,2087,
        2088,7,4,0,0,2088,2089,7,3,0,0,2089,318,1,0,0,0,2090,2091,7,19,0,
        0,2091,2092,7,4,0,0,2092,2093,7,3,0,0,2093,2094,7,22,0,0,2094,2095,
        7,11,0,0,2095,2096,7,3,0,0,2096,320,1,0,0,0,2097,2098,7,19,0,0,2098,
        2099,7,4,0,0,2099,2100,7,3,0,0,2100,2101,7,5,0,0,2101,2102,7,4,0,
        0,2102,322,1,0,0,0,2103,2104,7,19,0,0,2104,2105,7,4,0,0,2105,2106,
        7,3,0,0,2106,2107,7,5,0,0,2107,2108,7,4,0,0,2108,2109,7,25,0,0,2109,
        2110,7,23,0,0,2110,2111,7,20,0,0,2111,2112,7,13,0,0,2112,2113,7,
        26,0,0,2113,324,1,0,0,0,2114,2115,7,19,0,0,2115,2116,7,4,0,0,2116,
        2117,7,4,0,0,2117,2118,7,14,0,0,2118,2119,7,12,0,0,2119,2120,7,4,
        0,0,2120,2121,7,4,0,0,2121,2122,7,22,0,0,2122,326,1,0,0,0,2123,2124,
        7,19,0,0,2124,2125,7,4,0,0,2125,2126,7,15,0,0,2126,2127,7,13,0,0,
        2127,2128,7,12,0,0,2128,2129,7,18,0,0,2129,2130,7,9,0,0,2130,2131,
        7,11,0,0,2131,2132,7,13,0,0,2132,328,1,0,0,0,2133,2134,7,22,0,0,
        2134,2135,7,22,0,0,2135,2136,7,3,0,0,2136,2137,7,12,0,0,2137,330,
        1,0,0,0,2138,2139,7,22,0,0,2139,2140,7,4,0,0,2140,2141,7,7,0,0,2141,
        2142,7,13,0,0,2142,332,1,0,0,0,2143,2144,7,22,0,0,2144,2145,7,11,
        0,0,2145,2146,7,3,0,0,2146,334,1,0,0,0,2147,2148,7,22,0,0,2148,2149,
        7,11,0,0,2149,2150,7,3,0,0,2150,2151,7,17,0,0,2151,2152,7,11,0,0,
        2152,2153,7,21,0,0,2153,2154,7,11,0,0,2154,336,1,0,0,0,2155,2156,
        7,22,0,0,2156,2157,7,11,0,0,2157,2158,7,3,0,0,2158,2159,7,3,0,0,
        2159,2160,7,22,0,0,2160,338,1,0,0,0,2161,2162,7,22,0,0,2162,2163,
        7,11,0,0,2163,2164,7,3,0,0,2164,2165,7,27,0,0,2165,340,1,0,0,0,2166,
        2167,7,22,0,0,2167,2168,7,11,0,0,2168,2169,7,3,0,0,2169,2170,7,12,
        0,0,2170,342,1,0,0,0,2171,2172,7,22,0,0,2172,2173,7,11,0,0,2173,
        2174,7,3,0,0,2174,2175,7,12,0,0,2175,2176,7,3,0,0,2176,2177,7,22,
        0,0,2177,344,1,0,0,0,2178,2179,7,22,0,0,2179,2180,7,11,0,0,2180,
        2181,7,3,0,0,2181,2182,7,12,0,0,2182,2183,7,26,0,0,2183,2184,5,50,
        0,0,2184,346,1,0,0,0,2185,2186,7,22,0,0,2186,2187,7,11,0,0,2187,
        2188,7,3,0,0,2188,2189,7,12,0,0,2189,2190,7,26,0,0,2190,2191,7,27,
        0,0,2191,348,1,0,0,0,2192,2193,7,22,0,0,2193,2194,7,11,0,0,2194,
        2195,7,3,0,0,2195,2196,7,11,0,0,2196,350,1,0,0,0,2197,2198,7,22,
        0,0,2198,2199,7,11,0,0,2199,2200,7,3,0,0,2200,2201,7,11,0,0,2201,
        2202,7,3,0,0,2202,2203,7,22,0,0,2203,352,1,0,0,0,2204,2205,7,22,
        0,0,2205,2206,7,11,0,0,2206,2207,7,3,0,0,2207,2208,7,11,0,0,2208,
        2209,7,21,0,0,2209,2210,7,11,0,0,2210,354,1,0,0,0,2211,2212,7,22,
        0,0,2212,2213,7,11,0,0,2213,2214,7,3,0,0,2214,2215,7,15,0,0,2215,
        356,1,0,0,0,2216,2217,7,23,0,0,2217,2218,7,9,0,0,2218,2219,7,22,
        0,0,2219,2220,7,13,0,0,2220,2221,7,13,0,0,2221,2222,7,23,0,0,2222,
        2223,7,20,0,0,2223,358,1,0,0,0,2224,2225,7,23,0,0,2225,2226,7,9,
        0,0,2226,2227,7,22,0,0,2227,2228,7,13,0,0,2228,2229,7,11,0,0,2229,
        2230,7,5,0,0,2230,2231,7,9,0,0,2231,2232,7,12,0,0,2232,2233,7,5,
        0,0,2233,360,1,0,0,0,2234,2235,7,23,0,0,2235,2236,7,13,0,0,2236,
        2237,7,26,0,0,2237,2238,7,5,0,0,2238,2239,7,10,0,0,2239,2240,7,19,
        0,0,2240,2241,7,4,0,0,2241,2242,7,4,0,0,2242,2243,7,20,0,0,2243,
        362,1,0,0,0,2244,2245,7,23,0,0,2245,2246,7,13,0,0,2246,2247,7,26,
        0,0,2247,2248,7,5,0,0,2248,2249,7,13,0,0,2249,2250,7,17,0,0,2250,
        2251,7,17,0,0,2251,2252,7,13,0,0,2252,2253,7,18,0,0,2253,2254,7,
        5,0,0,2254,364,1,0,0,0,2255,2256,7,23,0,0,2256,2257,7,13,0,0,2257,
        2258,7,26,0,0,2258,2259,7,5,0,0,2259,2260,7,23,0,0,2260,2261,7,4,
        0,0,2261,2262,7,20,0,0,2262,2263,7,13,0,0,2263,366,1,0,0,0,2264,
        2265,7,23,0,0,2265,2266,7,13,0,0,2266,2267,7,26,0,0,2267,2268,7,
        5,0,0,2268,2269,7,4,0,0,2269,2270,7,10,0,0,2270,2271,7,28,0,0,2271,
        368,1,0,0,0,2272,2273,7,23,0,0,2273,2274,7,13,0,0,2274,2275,7,26,
        0,0,2275,2276,7,5,0,0,2276,2277,7,27,0,0,2277,2278,7,19,0,0,2278,
        2279,7,9,0,0,2279,2280,7,21,0,0,2280,2281,7,13,0,0,2281,2282,7,12,
        0,0,2282,370,1,0,0,0,2283,2284,7,23,0,0,2284,2285,7,13,0,0,2285,
        2286,7,26,0,0,2286,2287,7,5,0,0,2287,2288,7,12,0,0,2288,2289,7,4,
        0,0,2289,2290,7,4,0,0,2290,2291,7,22,0,0,2291,372,1,0,0,0,2292,2293,
        7,23,0,0,2293,2294,7,13,0,0,2294,2295,7,26,0,0,2295,2296,7,5,0,0,
        2296,2297,7,15,0,0,2297,2298,7,9,0,0,2298,2299,7,5,0,0,2299,2300,
        7,18,0,0,2300,2301,7,24,0,0,2301,374,1,0,0,0,2302,2303,7,4,0,0,2303,
        2304,7,27,0,0,2304,2305,7,13,0,0,2305,2306,7,23,0,0,2306,2307,7,
        19,0,0,2307,2308,7,4,0,0,2308,2309,7,18,0,0,2309,2310,7,14,0,0,2310,
        2311,7,13,0,0,2311,2312,7,12,0,0,2312,376,1,0,0,0,2313,2314,7,4,
        0,0,2314,2315,7,12,0,0,2315,2316,5,95,0,0,2316,2317,7,21,0,0,2317,
        2318,7,13,0,0,2318,2319,7,19,0,0,2319,2320,7,19,0,0,2320,378,1,0,
        0,0,2321,2322,7,4,0,0,2322,2323,7,16,0,0,2323,2324,7,5,0,0,2324,
        2325,7,27,0,0,2325,2326,7,24,0,0,2326,2327,7,12,0,0,2327,2328,7,
        9,0,0,2328,2329,7,11,0,0,2329,2330,7,13,0,0,2330,380,1,0,0,0,2331,
        2332,7,27,0,0,2332,2333,7,9,0,0,2333,2334,7,12,0,0,2334,2335,7,11,
        0,0,2335,2336,7,13,0,0,2336,382,1,0,0,0,2337,2338,7,27,0,0,2338,
        2339,7,9,0,0,2339,2340,7,12,0,0,2340,2341,7,11,0,0,2341,2342,7,13,
        0,0,2342,2343,7,20,0,0,2343,2344,7,13,0,0,2344,2345,7,18,0,0,2345,
        2346,7,25,0,0,2346,2347,7,22,0,0,2347,2348,7,9,0,0,2348,2349,7,19,
        0,0,2349,384,1,0,0,0,2350,2351,7,27,0,0,2351,2352,7,9,0,0,2352,2353,
        7,16,0,0,2353,2354,7,11,0,0,2354,2355,7,13,0,0,2355,2356,7,13,0,
        0,2356,2357,7,17,0,0,2357,2358,7,17,0,0,2358,2359,7,13,0,0,2359,
        2360,7,18,0,0,2360,2361,7,5,0,0,2361,2362,7,11,0,0,2362,386,1,0,
        0,0,2363,2364,7,27,0,0,2364,2365,7,25,0,0,2365,2366,7,20,0,0,2366,
        388,1,0,0,0,2367,2368,7,27,0,0,2368,2369,7,19,0,0,2369,2370,7,9,
        0,0,2370,2371,7,21,0,0,2371,2372,7,13,0,0,2372,2373,7,12,0,0,2373,
        2374,7,18,0,0,2374,2375,7,4,0,0,2375,2376,7,16,0,0,2376,2377,7,23,
        0,0,2377,2378,7,5,0,0,2378,390,1,0,0,0,2379,2380,7,27,0,0,2380,2381,
        7,12,0,0,2381,2382,7,13,0,0,2382,2383,7,22,0,0,2383,2384,7,27,0,
        0,2384,2385,7,5,0,0,2385,392,1,0,0,0,2386,2387,7,27,0,0,2387,2388,
        7,12,0,0,2388,2389,7,4,0,0,2389,2390,7,17,0,0,2390,2391,7,25,0,0,
        2391,2392,7,19,0,0,2392,2393,7,13,0,0,2393,394,1,0,0,0,2394,2395,
        7,12,0,0,2395,2396,7,9,0,0,2396,2397,7,23,0,0,2397,2398,7,20,0,0,
        2398,2399,7,4,0,0,2399,2400,7,22,0,0,2400,396,1,0,0,0,2401,2402,
        7,12,0,0,2402,2403,7,13,0,0,2403,2404,7,22,0,0,2404,2405,5,50,0,
        0,2405,2406,7,13,0,0,2406,2407,7,17,0,0,2407,2408,7,17,0,0,2408,
        2409,7,13,0,0,2409,2410,7,18,0,0,2410,2411,7,5,0,0,2411,398,1,0,
        0,0,2412,2413,7,12,0,0,2413,2414,7,13,0,0,2414,2415,7,22,0,0,2415,
        2416,7,13,0,0,2416,2417,7,17,0,0,2417,2418,7,17,0,0,2418,2419,7,
        13,0,0,2419,2420,7,18,0,0,2420,2421,7,5,0,0,2421,400,1,0,0,0,2422,
        2423,7,12,0,0,2423,2424,7,13,0,0,2424,2425,7,22,0,0,2425,2426,7,
        22,0,0,2426,2427,7,13,0,0,2427,2428,7,23,0,0,2428,2429,7,16,0,0,
        2429,2430,7,25,0,0,2430,2431,7,5,0,0,2431,2432,7,13,0,0,2432,2433,
        7,22,0,0,2433,402,1,0,0,0,2434,2435,7,12,0,0,2435,2436,7,13,0,0,
        2436,2437,7,22,0,0,2437,2438,7,23,0,0,2438,2439,7,13,0,0,2439,2440,
        7,17,0,0,2440,2441,7,17,0,0,2441,2442,7,13,0,0,2442,2443,7,18,0,
        0,2443,2444,7,5,0,0,2444,404,1,0,0,0,2445,2446,7,12,0,0,2446,2447,
        7,13,0,0,2447,2448,7,22,0,0,2448,2449,7,4,0,0,2449,2450,7,7,0,0,
        2450,2451,7,13,0,0,2451,406,1,0,0,0,2452,2453,7,12,0,0,2453,2454,
        7,13,0,0,2454,2455,7,22,0,0,2455,2456,7,4,0,0,2456,2457,7,7,0,0,
        2457,2458,7,13,0,0,2458,2459,7,7,0,0,2459,2460,7,9,0,0,2460,2461,
        7,12,0,0,2461,2462,7,17,0,0,2462,2463,7,25,0,0,2463,2464,7,13,0,
        0,2464,2465,7,19,0,0,2465,2466,7,20,0,0,2466,408,1,0,0,0,2467,2468,
        7,12,0,0,2468,2469,7,13,0,0,2469,2470,7,22,0,0,2470,2471,7,4,0,0,
        2471,2472,7,7,0,0,2472,2473,7,13,0,0,2473,2474,7,7,0,0,2474,2475,
        7,9,0,0,2475,2476,7,12,0,0,2476,2477,7,3,0,0,2477,2478,7,12,0,0,
        2478,2479,7,4,0,0,2479,2480,7,16,0,0,2480,2481,7,27,0,0,2481,410,
        1,0,0,0,2482,2483,7,12,0,0,2483,2484,7,13,0,0,2484,2485,7,11,0,0,
        2485,2486,7,25,0,0,2486,2487,7,11,0,0,2487,2488,7,5,0,0,2488,412,
        1,0,0,0,2489,2490,7,12,0,0,2490,2491,7,13,0,0,2491,2492,7,11,0,0,
        2492,2493,7,25,0,0,2493,2494,7,30,0,0,2494,2495,7,13,0,0,2495,2496,
        7,5,0,0,2496,2497,7,9,0,0,2497,2498,7,10,0,0,2498,2499,7,19,0,0,
        2499,2500,7,13,0,0,2500,414,1,0,0,0,2501,2502,7,12,0,0,2502,2503,
        7,13,0,0,2503,2504,7,11,0,0,2504,2505,7,5,0,0,2505,2506,7,4,0,0,
        2506,2507,7,12,0,0,2507,2508,7,13,0,0,2508,2509,7,17,0,0,2509,2510,
        7,25,0,0,2510,2511,7,13,0,0,2511,2512,7,19,0,0,2512,2513,7,20,0,
        0,2513,2514,7,11,0,0,2514,416,1,0,0,0,2515,2516,7,12,0,0,2516,2517,
        7,13,0,0,2517,2518,7,11,0,0,2518,2519,7,16,0,0,2519,2520,7,22,0,
        0,2520,2521,7,13,0,0,2521,2522,7,13,0,0,2522,2523,7,17,0,0,2523,
        2524,7,17,0,0,2524,2525,7,13,0,0,2525,2526,7,18,0,0,2526,2527,7,
        5,0,0,2527,2528,7,11,0,0,2528,418,1,0,0,0,2529,2530,7,12,0,0,2530,
        2531,7,22,0,0,2531,2532,7,18,0,0,2532,2533,7,9,0,0,2533,2534,7,19,
        0,0,2534,2535,7,19,0,0,2535,420,1,0,0,0,2536,2537,7,12,0,0,2537,
        2538,7,23,0,0,2538,2539,7,20,0,0,2539,2540,7,20,0,0,2540,2541,7,
        25,0,0,2541,2542,7,12,0,0,2542,422,1,0,0,0,2543,2544,7,12,0,0,2544,
        2545,7,23,0,0,2545,2546,7,20,0,0,2546,2547,7,13,0,0,2547,2548,7,
        26,0,0,2548,2549,7,25,0,0,2549,2550,7,5,0,0,2550,424,1,0,0,0,2551,
        2552,7,12,0,0,2552,2553,7,23,0,0,2553,2554,7,20,0,0,2554,2555,7,
        27,0,0,2555,2556,7,19,0,0,2556,2557,7,21,0,0,2557,2558,7,12,0,0,
        2558,426,1,0,0,0,2559,2560,7,12,0,0,2560,2561,7,4,0,0,2561,2562,
        7,19,0,0,2562,2563,7,19,0,0,2563,2564,7,25,0,0,2564,2565,7,23,0,
        0,2565,428,1,0,0,0,2566,2567,7,12,0,0,2567,2568,7,4,0,0,2568,2569,
        7,4,0,0,2569,2570,7,22,0,0,2570,2571,7,13,0,0,2571,2572,7,23,0,0,
        2572,2573,7,20,0,0,2573,430,1,0,0,0,2574,2575,7,12,0,0,2575,2576,
        7,4,0,0,2576,2577,7,4,0,0,2577,2578,7,22,0,0,2578,2579,7,11,0,0,
        2579,2580,7,5,0,0,2580,2581,7,9,0,0,2581,2582,7,12,0,0,2582,2583,
        7,5,0,0,2583,432,1,0,0,0,2584,2585,7,12,0,0,2585,2586,7,4,0,0,2586,
        2587,7,4,0,0,2587,2588,7,5,0,0,2588,2589,7,13,0,0,2589,2590,7,26,
        0,0,2590,2591,7,25,0,0,2591,2592,7,11,0,0,2592,2593,7,5,0,0,2593,
        2594,7,4,0,0,2594,2595,7,17,0,0,2595,434,1,0,0,0,2596,2597,7,12,
        0,0,2597,2598,7,4,0,0,2598,2599,7,16,0,0,2599,2600,7,23,0,0,2600,
        2601,7,20,0,0,2601,2602,7,5,0,0,2602,2603,7,25,0,0,2603,2604,7,22,
        0,0,2604,2605,7,13,0,0,2605,436,1,0,0,0,2606,2607,7,11,0,0,2607,
        2608,7,9,0,0,2608,2609,7,7,0,0,2609,2610,7,13,0,0,2610,2611,7,17,
        0,0,2611,2612,7,25,0,0,2612,2613,7,13,0,0,2613,2614,7,19,0,0,2614,
        2615,7,20,0,0,2615,2616,7,11,0,0,2616,438,1,0,0,0,2617,2618,7,11,
        0,0,2618,2619,7,18,0,0,2619,2620,7,9,0,0,2620,2621,7,23,0,0,2621,
        440,1,0,0,0,2622,2623,7,11,0,0,2623,2624,7,18,0,0,2624,2625,7,9,
        0,0,2625,2626,7,23,0,0,2626,2627,7,13,0,0,2627,2628,7,17,0,0,2628,
        2629,7,17,0,0,2629,2630,7,13,0,0,2630,2631,7,18,0,0,2631,2632,7,
        5,0,0,2632,442,1,0,0,0,2633,2634,7,11,0,0,2634,2635,7,18,0,0,2635,
        2636,7,12,0,0,2636,2637,7,25,0,0,2637,2638,7,27,0,0,2638,2639,7,
        5,0,0,2639,444,1,0,0,0,2640,2641,7,11,0,0,2641,2642,7,13,0,0,2642,
        2643,7,5,0,0,2643,446,1,0,0,0,2644,2645,7,11,0,0,2645,2646,7,13,
        0,0,2646,2647,7,5,0,0,2647,2648,7,23,0,0,2648,2649,7,9,0,0,2649,
        2650,7,22,0,0,2650,2651,7,13,0,0,2651,448,1,0,0,0,2652,2653,7,11,
        0,0,2653,2654,7,13,0,0,2654,2655,7,5,0,0,2655,2656,7,5,0,0,2656,
        2657,7,9,0,0,2657,2658,7,10,0,0,2658,2659,7,19,0,0,2659,2660,7,13,
        0,0,2660,450,1,0,0,0,2661,2662,7,11,0,0,2662,2663,7,13,0,0,2663,
        2664,7,5,0,0,2664,2665,7,5,0,0,2665,2666,7,13,0,0,2666,2667,7,26,
        0,0,2667,2668,7,5,0,0,2668,452,1,0,0,0,2669,2670,7,11,0,0,2670,2671,
        7,27,0,0,2671,2672,7,9,0,0,2672,2673,7,12,0,0,2673,2674,7,11,0,0,
        2674,2675,7,13,0,0,2675,454,1,0,0,0,2676,2677,7,11,0,0,2677,2678,
        7,5,0,0,2678,2679,7,9,0,0,2679,2680,7,12,0,0,2680,2681,7,5,0,0,2681,
        456,1,0,0,0,2682,2683,7,11,0,0,2683,2684,7,5,0,0,2684,2685,7,4,0,
        0,2685,2686,7,27,0,0,2686,458,1,0,0,0,2687,2688,7,11,0,0,2688,2689,
        7,5,0,0,2689,2690,7,4,0,0,2690,2691,7,12,0,0,2691,2692,7,13,0,0,
        2692,2693,7,18,0,0,2693,2694,7,24,0,0,2694,2695,7,9,0,0,2695,2696,
        7,12,0,0,2696,2697,7,20,0,0,2697,2698,7,9,0,0,2698,2699,7,5,0,0,
        2699,2700,7,9,0,0,2700,460,1,0,0,0,2701,2702,7,11,0,0,2702,2703,
        7,5,0,0,2703,2704,7,4,0,0,2704,2705,7,7,0,0,2705,462,1,0,0,0,2706,
        2707,7,11,0,0,2707,2708,7,16,0,0,2708,2709,7,10,0,0,2709,2710,7,
        22,0,0,2710,2711,7,25,0,0,2711,2712,7,5,0,0,2712,464,1,0,0,0,2713,
        2714,7,11,0,0,2714,2715,7,16,0,0,2715,2716,7,10,0,0,2716,2717,7,
        11,0,0,2717,2718,7,5,0,0,2718,2719,7,12,0,0,2719,2720,7,25,0,0,2720,
        2721,7,23,0,0,2721,2722,7,3,0,0,2722,466,1,0,0,0,2723,2724,7,5,0,
        0,2724,2725,7,9,0,0,2725,2726,7,10,0,0,2726,2727,7,19,0,0,2727,2728,
        7,13,0,0,2728,2729,7,25,0,0,2729,2730,7,23,0,0,2730,2731,7,17,0,
        0,2731,2732,7,4,0,0,2732,468,1,0,0,0,2733,2734,7,5,0,0,2734,2735,
        7,13,0,0,2735,2736,7,19,0,0,2736,2737,7,19,0,0,2737,2738,7,15,0,
        0,2738,2739,7,13,0,0,2739,2740,7,10,0,0,2740,470,1,0,0,0,2741,2742,
        7,5,0,0,2742,2743,7,13,0,0,2743,2744,7,11,0,0,2744,2745,7,5,0,0,
        2745,2746,5,95,0,0,2746,2747,7,9,0,0,2747,2748,7,11,0,0,2748,2749,
        7,11,0,0,2749,2750,7,13,0,0,2750,2751,7,12,0,0,2751,2752,7,5,0,0,
        2752,472,1,0,0,0,2753,2754,7,5,0,0,2754,2755,7,13,0,0,2755,2756,
        7,11,0,0,2756,2757,7,5,0,0,2757,2758,5,50,0,0,2758,2759,7,13,0,0,
        2759,2760,7,17,0,0,2760,2761,7,17,0,0,2761,2762,7,13,0,0,2762,2763,
        7,18,0,0,2763,2764,7,5,0,0,2764,474,1,0,0,0,2765,2766,7,5,0,0,2766,
        2767,7,13,0,0,2767,2768,7,11,0,0,2768,2769,7,5,0,0,2769,2770,7,13,
        0,0,2770,2771,7,17,0,0,2771,2772,7,17,0,0,2772,2773,7,13,0,0,2773,
        2774,7,18,0,0,2774,2775,7,5,0,0,2775,476,1,0,0,0,2776,2777,7,5,0,
        0,2777,2778,7,27,0,0,2778,2779,7,9,0,0,2779,2780,7,12,0,0,2780,2781,
        7,11,0,0,2781,2782,7,13,0,0,2782,478,1,0,0,0,2783,2784,7,16,0,0,
        2784,2785,7,23,0,0,2785,2786,7,20,0,0,2786,2787,7,13,0,0,2787,2788,
        7,12,0,0,2788,480,1,0,0,0,2789,2790,7,16,0,0,2790,2791,7,23,0,0,
        2791,2792,7,20,0,0,2792,2793,7,13,0,0,2793,2794,7,12,0,0,2794,2795,
        7,4,0,0,2795,2796,7,17,0,0,2796,2797,7,17,0,0,2797,482,1,0,0,0,2798,
        2799,7,16,0,0,2799,2800,7,23,0,0,2800,2801,7,20,0,0,2801,2802,7,
        13,0,0,2802,2803,7,12,0,0,2803,2804,7,4,0,0,2804,2805,7,23,0,0,2805,
        484,1,0,0,0,2806,2807,7,16,0,0,2807,2808,7,23,0,0,2808,2809,7,19,
        0,0,2809,2810,7,4,0,0,2810,2811,7,9,0,0,2811,2812,7,20,0,0,2812,
        486,1,0,0,0,2813,2814,7,16,0,0,2814,2815,7,27,0,0,2815,2816,7,20,
        0,0,2816,2817,7,9,0,0,2817,2818,7,5,0,0,2818,2819,7,13,0,0,2819,
        2820,7,11,0,0,2820,2821,7,12,0,0,2821,2822,7,7,0,0,2822,2823,7,12,
        0,0,2823,2824,7,11,0,0,2824,2825,7,5,0,0,2825,2826,7,16,0,0,2826,
        2827,7,17,0,0,2827,2828,7,17,0,0,2828,488,1,0,0,0,2829,2830,7,16,
        0,0,2830,2831,7,27,0,0,2831,2832,7,20,0,0,2832,2833,7,9,0,0,2833,
        2834,7,5,0,0,2834,2835,7,13,0,0,2835,2836,7,5,0,0,2836,2837,7,9,
        0,0,2837,2838,7,10,0,0,2838,2839,7,19,0,0,2839,2840,7,13,0,0,2840,
        490,1,0,0,0,2841,2842,7,16,0,0,2842,2843,7,27,0,0,2843,2844,7,27,
        0,0,2844,2845,7,13,0,0,2845,2846,7,12,0,0,2846,2847,7,18,0,0,2847,
        2848,7,9,0,0,2848,2849,7,11,0,0,2849,2850,7,13,0,0,2850,492,1,0,
        0,0,2851,2852,7,7,0,0,2852,2853,7,13,0,0,2853,2854,7,12,0,0,2854,
        2855,7,10,0,0,2855,494,1,0,0,0,2856,2857,7,7,0,0,2857,2858,7,5,0,
        0,2858,2859,7,4,0,0,2859,2860,7,11,0,0,2860,496,1,0,0,0,2861,2862,
        7,15,0,0,2862,2863,7,9,0,0,2863,2864,7,5,0,0,2864,2865,7,18,0,0,
        2865,2866,7,24,0,0,2866,498,1,0,0,0,2867,2868,7,15,0,0,2868,2869,
        7,24,0,0,2869,2870,7,13,0,0,2870,2871,7,12,0,0,2871,2872,7,13,0,
        0,2872,500,1,0,0,0,2873,2874,7,15,0,0,2874,2875,7,24,0,0,2875,2876,
        7,13,0,0,2876,2877,7,12,0,0,2877,2878,7,13,0,0,2878,2879,7,9,0,0,
        2879,2880,7,5,0,0,2880,502,1,0,0,0,2881,2882,7,15,0,0,2882,2883,
        7,24,0,0,2883,2884,7,13,0,0,2884,2885,7,12,0,0,2885,2886,7,13,0,
        0,2886,2887,7,25,0,0,2887,2888,7,5,0,0,2888,2889,7,13,0,0,2889,2890,
        7,22,0,0,2890,504,1,0,0,0,2891,2892,7,15,0,0,2892,2893,7,12,0,0,
        2893,2894,7,25,0,0,2894,2895,7,5,0,0,2895,2896,7,13,0,0,2896,2897,
        7,18,0,0,2897,2898,7,24,0,0,2898,2899,7,9,0,0,2899,2900,7,12,0,0,
        2900,506,1,0,0,0,2901,2902,7,9,0,0,2902,2903,7,19,0,0,2903,2904,
        7,19,0,0,2904,508,1,0,0,0,2905,2906,7,9,0,0,2906,2907,7,19,0,0,2907,
        2908,7,19,0,0,2908,2909,7,27,0,0,2909,2910,7,19,0,0,2910,2911,7,
        9,0,0,2911,2912,7,21,0,0,2912,2913,7,13,0,0,2913,2914,7,12,0,0,2914,
        2915,7,11,0,0,2915,510,1,0,0,0,2916,2917,7,9,0,0,2917,2918,7,12,
        0,0,2918,2919,7,13,0,0,2919,2920,7,9,0,0,2920,512,1,0,0,0,2921,2922,
        7,10,0,0,2922,2923,7,10,0,0,2923,2924,7,11,0,0,2924,514,1,0,0,0,
        2925,2926,7,10,0,0,2926,2927,7,24,0,0,2927,2928,7,27,0,0,2928,2929,
        7,5,0,0,2929,516,1,0,0,0,2930,2931,7,10,0,0,2931,2932,7,4,0,0,2932,
        2933,7,4,0,0,2933,2934,7,14,0,0,2934,518,1,0,0,0,2935,2936,7,10,
        0,0,2936,2937,7,4,0,0,2937,2938,7,4,0,0,2938,2939,7,14,0,0,2939,
        2940,7,13,0,0,2940,2941,7,20,0,0,2941,2942,7,25,0,0,2942,2943,7,
        5,0,0,2943,520,1,0,0,0,2944,2945,7,18,0,0,2945,2946,7,9,0,0,2946,
        2947,7,19,0,0,2947,2948,7,19,0,0,2948,2949,7,10,0,0,2949,2950,7,
        9,0,0,2950,2951,7,18,0,0,2951,2952,7,14,0,0,2952,522,1,0,0,0,2953,
        2954,7,18,0,0,2954,2955,7,24,0,0,2955,2956,7,13,0,0,2956,2957,7,
        18,0,0,2957,2958,7,14,0,0,2958,524,1,0,0,0,2959,2960,7,18,0,0,2960,
        2961,7,4,0,0,2961,2962,7,20,0,0,2962,2963,7,13,0,0,2963,526,1,0,
        0,0,2964,2965,7,20,0,0,2965,2966,7,13,0,0,2966,2967,7,10,0,0,2967,
        2968,7,16,0,0,2968,2969,7,3,0,0,2969,528,1,0,0,0,2970,2971,7,20,
        0,0,2971,2972,7,4,0,0,2972,2973,7,23,0,0,2973,2974,7,13,0,0,2974,
        2975,7,22,0,0,2975,2976,7,9,0,0,2976,2977,7,5,0,0,2977,2978,7,18,
        0,0,2978,2979,7,24,0,0,2979,530,1,0,0,0,2980,2981,7,13,0,0,2981,
        2982,7,23,0,0,2982,2983,7,18,0,0,2983,2984,7,16,0,0,2984,2985,7,
        22,0,0,2985,532,1,0,0,0,2986,2987,7,13,0,0,2987,2988,7,26,0,0,2988,
        2989,7,25,0,0,2989,2990,7,11,0,0,2990,2991,7,5,0,0,2991,534,1,0,
        0,0,2992,2993,7,17,0,0,2993,2994,7,25,0,0,2994,2995,7,13,0,0,2995,
        2996,7,19,0,0,2996,2997,7,20,0,0,2997,536,1,0,0,0,2998,2999,7,17,
        0,0,2999,3000,7,19,0,0,3000,3001,7,9,0,0,3001,3002,7,3,0,0,3002,
        3003,7,11,0,0,3003,538,1,0,0,0,3004,3005,7,17,0,0,3005,3006,7,4,
        0,0,3006,3007,7,12,0,0,3007,540,1,0,0,0,3008,3009,7,17,0,0,3009,
        3010,7,12,0,0,3010,3011,7,4,0,0,3011,3012,7,22,0,0,3012,542,1,0,
        0,0,3013,3014,7,24,0,0,3014,3015,7,9,0,0,3015,3016,7,11,0,0,3016,
        3017,7,17,0,0,3017,3018,7,25,0,0,3018,3019,7,13,0,0,3019,3020,7,
        19,0,0,3020,3021,7,20,0,0,3021,544,1,0,0,0,3022,3023,7,24,0,0,3023,
        3024,7,13,0,0,3024,3025,7,9,0,0,3025,3026,7,19,0,0,3026,3027,7,5,
        0,0,3027,3028,7,24,0,0,3028,546,1,0,0,0,3029,3030,7,24,0,0,3030,
        3031,7,25,0,0,3031,3032,7,5,0,0,3032,3033,7,11,0,0,3033,548,1,0,
        0,0,3034,3035,7,25,0,0,3035,3036,7,23,0,0,3036,3037,7,20,0,0,3037,
        3038,7,13,0,0,3038,3039,7,26,0,0,3039,550,1,0,0,0,3040,3041,7,25,
        0,0,3041,3042,7,23,0,0,3042,3043,7,28,0,0,3043,3044,7,16,0,0,3044,
        3045,7,12,0,0,3045,3046,7,25,0,0,3046,3047,7,13,0,0,3047,3048,7,
        11,0,0,3048,552,1,0,0,0,3049,3050,7,25,0,0,3050,3051,7,11,0,0,3051,
        3052,7,13,0,0,3052,3053,7,26,0,0,3053,3054,7,9,0,0,3054,3055,7,18,
        0,0,3055,3056,7,5,0,0,3056,3057,7,19,0,0,3057,3058,7,21,0,0,3058,
        554,1,0,0,0,3059,3060,7,25,0,0,3060,3061,7,11,0,0,3061,3062,7,23,
        0,0,3062,3063,7,4,0,0,3063,3064,7,5,0,0,3064,3065,7,13,0,0,3065,
        3066,7,26,0,0,3066,3067,7,9,0,0,3067,3068,7,18,0,0,3068,3069,7,5,
        0,0,3069,3070,7,19,0,0,3070,3071,7,21,0,0,3071,556,1,0,0,0,3072,
        3073,7,25,0,0,3073,3074,7,11,0,0,3074,3075,7,23,0,0,3075,3076,7,
        4,0,0,3076,3077,7,5,0,0,3077,3078,7,4,0,0,3078,3079,7,17,0,0,3079,
        3080,7,5,0,0,3080,3081,7,21,0,0,3081,3082,7,27,0,0,3082,3083,7,13,
        0,0,3083,558,1,0,0,0,3084,3085,7,25,0,0,3085,3086,7,11,0,0,3086,
        3087,7,4,0,0,3087,3088,7,17,0,0,3088,3089,7,5,0,0,3089,3090,7,21,
        0,0,3090,3091,7,27,0,0,3091,3092,7,13,0,0,3092,560,1,0,0,0,3093,
        3094,7,19,0,0,3094,3095,7,9,0,0,3095,3096,7,18,0,0,3096,3097,7,14,
        0,0,3097,3098,7,11,0,0,3098,3099,7,17,0,0,3099,3100,7,25,0,0,3100,
        3101,7,13,0,0,3101,3102,7,19,0,0,3102,3103,7,20,0,0,3103,562,1,0,
        0,0,3104,3105,7,19,0,0,3105,3106,7,13,0,0,3106,3107,7,17,0,0,3107,
        3108,7,5,0,0,3108,3109,7,24,0,0,3109,3110,7,9,0,0,3110,3111,7,23,
        0,0,3111,3112,7,20,0,0,3112,564,1,0,0,0,3113,3114,7,22,0,0,3114,
        3115,7,9,0,0,3115,3116,7,23,0,0,3116,3117,7,9,0,0,3117,566,1,0,0,
        0,3118,3119,7,22,0,0,3119,3120,7,9,0,0,3120,3121,7,5,0,0,3121,3122,
        7,18,0,0,3122,3123,7,24,0,0,3123,568,1,0,0,0,3124,3125,7,22,0,0,
        3125,3126,7,9,0,0,3126,3127,7,5,0,0,3127,3128,7,18,0,0,3128,3129,
        7,24,0,0,3129,3130,7,11,0,0,3130,3131,7,27,0,0,3131,3132,7,13,0,
        0,3132,3133,7,19,0,0,3133,3134,7,19,0,0,3134,570,1,0,0,0,3135,3136,
        7,22,0,0,3136,3137,7,9,0,0,3137,3138,7,26,0,0,3138,3139,5,95,0,0,
        3139,3140,7,24,0,0,3140,3141,7,13,0,0,3141,3142,7,9,0,0,3142,3143,
        7,19,0,0,3143,3144,7,5,0,0,3144,3145,7,24,0,0,3145,572,1,0,0,0,3146,
        3147,7,22,0,0,3147,3148,7,9,0,0,3148,3149,7,26,0,0,3149,3150,5,95,
        0,0,3150,3151,7,22,0,0,3151,3152,7,9,0,0,3152,3153,7,23,0,0,3153,
        3154,7,9,0,0,3154,574,1,0,0,0,3155,3156,7,22,0,0,3156,3157,7,9,0,
        0,3157,3158,7,26,0,0,3158,3159,5,95,0,0,3159,3160,7,11,0,0,3160,
        3161,7,27,0,0,3161,3162,7,25,0,0,3162,3163,7,12,0,0,3163,3164,7,
        25,0,0,3164,3165,7,5,0,0,3165,576,1,0,0,0,3166,3167,7,22,0,0,3167,
        3168,7,9,0,0,3168,3169,7,21,0,0,3169,3170,5,95,0,0,3170,3171,7,22,
        0,0,3171,3172,7,9,0,0,3172,3173,7,5,0,0,3173,3174,7,18,0,0,3174,
        3175,7,24,0,0,3175,578,1,0,0,0,3176,3177,7,22,0,0,3177,3178,7,13,
        0,0,3178,3179,7,12,0,0,3179,3180,7,18,0,0,3180,3181,7,24,0,0,3181,
        3182,7,9,0,0,3182,3183,7,23,0,0,3183,3184,7,5,0,0,3184,580,1,0,0,
        0,3185,3186,7,22,0,0,3186,3187,7,13,0,0,3187,3188,7,11,0,0,3188,
        3189,7,11,0,0,3189,3190,7,9,0,0,3190,3191,7,3,0,0,3191,3192,7,13,
        0,0,3192,582,1,0,0,0,3193,3194,7,22,0,0,3194,3195,7,4,0,0,3195,3196,
        7,20,0,0,3196,3197,7,13,0,0,3197,584,1,0,0,0,3198,3199,7,22,0,0,
        3199,3200,7,16,0,0,3200,3201,7,11,0,0,3201,3202,7,5,0,0,3202,3203,
        5,95,0,0,3203,3204,7,22,0,0,3204,3205,7,9,0,0,3205,3206,7,5,0,0,
        3206,3207,7,18,0,0,3207,3208,7,24,0,0,3208,586,1,0,0,0,3209,3210,
        7,22,0,0,3210,3211,7,21,0,0,3211,3212,7,11,0,0,3212,3213,7,5,0,0,
        3213,3214,7,13,0,0,3214,3215,7,12,0,0,3215,3216,7,21,0,0,3216,588,
        1,0,0,0,3217,3218,7,23,0,0,3218,3219,7,4,0,0,3219,3220,7,23,0,0,
        3220,3221,7,13,0,0,3221,3222,7,26,0,0,3222,3223,7,25,0,0,3223,3224,
        7,11,0,0,3224,3225,7,5,0,0,3225,590,1,0,0,0,3226,3227,7,4,0,0,3227,
        3228,7,10,0,0,3228,3229,7,28,0,0,3229,3230,7,13,0,0,3230,3231,7,
        18,0,0,3231,3232,7,5,0,0,3232,3233,7,11,0,0,3233,592,1,0,0,0,3234,
        3235,7,27,0,0,3235,3236,7,4,0,0,3236,3237,7,15,0,0,3237,3238,7,13,
        0,0,3238,3239,7,12,0,0,3239,594,1,0,0,0,3240,3241,7,27,0,0,3241,
        3242,7,12,0,0,3242,3243,7,25,0,0,3243,3244,7,4,0,0,3244,3245,7,12,
        0,0,3245,3246,7,25,0,0,3246,3247,7,5,0,0,3247,3248,7,21,0,0,3248,
        596,1,0,0,0,3249,3250,7,12,0,0,3250,3251,7,13,0,0,3251,3252,7,27,
        0,0,3252,3253,7,4,0,0,3253,3254,7,12,0,0,3254,3255,7,5,0,0,3255,
        3256,5,95,0,0,3256,3257,7,5,0,0,3257,3258,7,4,0,0,3258,598,1,0,0,
        0,3259,3260,7,12,0,0,3260,3261,7,25,0,0,3261,3262,7,3,0,0,3262,3263,
        7,24,0,0,3263,3264,7,5,0,0,3264,3265,7,24,0,0,3265,3266,7,9,0,0,
        3266,3267,7,23,0,0,3267,3268,7,20,0,0,3268,600,1,0,0,0,3269,3270,
        7,12,0,0,3270,3271,7,4,0,0,3271,3272,7,4,0,0,3272,3273,7,22,0,0,
        3273,602,1,0,0,0,3274,3275,7,11,0,0,3275,3276,7,9,0,0,3276,3277,
        7,22,0,0,3277,3278,7,13,0,0,3278,3279,7,5,0,0,3279,3280,7,21,0,0,
        3280,3281,7,27,0,0,3281,3282,7,13,0,0,3282,604,1,0,0,0,3283,3284,
        7,11,0,0,3284,3285,7,18,0,0,3285,3286,7,9,0,0,3286,3287,7,12,0,0,
        3287,3288,7,11,0,0,3288,606,1,0,0,0,3289,3290,7,11,0,0,3290,3291,
        7,13,0,0,3291,3292,7,3,0,0,3292,608,1,0,0,0,3293,3294,7,11,0,0,3294,
        3295,7,25,0,0,3295,3296,7,30,0,0,3296,3297,7,13,0,0,3297,610,1,0,
        0,0,3298,3299,7,11,0,0,3299,3300,7,27,0,0,3300,3301,7,13,0,0,3301,
        3302,7,19,0,0,3302,3303,7,19,0,0,3303,612,1,0,0,0,3304,3305,7,11,
        0,0,3305,3306,7,27,0,0,3306,3307,7,25,0,0,3307,3308,7,12,0,0,3308,
        3309,7,25,0,0,3309,3310,7,5,0,0,3310,614,1,0,0,0,3311,3312,7,11,
        0,0,3312,3313,7,5,0,0,3313,3314,7,9,0,0,3314,3315,7,23,0,0,3315,
        3316,7,18,0,0,3316,3317,7,13,0,0,3317,616,1,0,0,0,3318,3319,7,5,
        0,0,3319,3320,7,9,0,0,3320,3321,7,10,0,0,3321,3322,7,19,0,0,3322,
        3323,7,13,0,0,3323,618,1,0,0,0,3324,3325,7,5,0,0,3325,3326,7,9,0,
        0,3326,3327,7,12,0,0,3327,3328,7,3,0,0,3328,3329,7,13,0,0,3329,3330,
        7,5,0,0,3330,3331,5,95,0,0,3331,3332,7,9,0,0,3332,3333,7,18,0,0,
        3333,3334,7,18,0,0,3334,3335,7,4,0,0,3335,3336,7,16,0,0,3336,3337,
        7,23,0,0,3337,3338,7,5,0,0,3338,620,1,0,0,0,3339,3340,7,5,0,0,3340,
        3341,7,9,0,0,3341,3342,7,12,0,0,3342,3343,7,3,0,0,3343,3344,7,13,
        0,0,3344,3345,7,5,0,0,3345,3346,5,95,0,0,3346,3347,7,25,0,0,3347,
        3348,7,23,0,0,3348,3349,7,20,0,0,3349,3350,7,13,0,0,3350,3351,7,
        26,0,0,3351,622,1,0,0,0,3352,3353,7,5,0,0,3353,3354,7,9,0,0,3354,
        3355,7,12,0,0,3355,3356,7,3,0,0,3356,3357,7,13,0,0,3357,3358,7,5,
        0,0,3358,3359,5,95,0,0,3359,3360,7,23,0,0,3360,3361,7,9,0,0,3361,
        3362,7,22,0,0,3362,3363,7,13,0,0,3363,624,1,0,0,0,3364,3365,7,5,
        0,0,3365,3366,7,9,0,0,3366,3367,7,12,0,0,3367,3368,7,3,0,0,3368,
        3369,7,13,0,0,3369,3370,7,5,0,0,3370,3371,5,95,0,0,3371,3372,7,4,
        0,0,3372,3373,7,5,0,0,3373,3374,7,24,0,0,3374,3375,7,13,0,0,3375,
        3376,7,12,0,0,3376,626,1,0,0,0,3377,3378,7,5,0,0,3378,3379,7,9,0,
        0,3379,3380,7,12,0,0,3380,3381,7,3,0,0,3381,3382,7,13,0,0,3382,3383,
        7,5,0,0,3383,3384,5,95,0,0,3384,3385,7,16,0,0,3385,3386,7,25,0,0,
        3386,3387,7,20,0,0,3387,628,1,0,0,0,3388,3389,7,5,0,0,3389,3390,
        7,9,0,0,3390,3391,7,12,0,0,3391,3392,7,3,0,0,3392,3393,7,13,0,0,
        3393,3394,7,5,0,0,3394,630,1,0,0,0,3395,3396,7,5,0,0,3396,3397,7,
        13,0,0,3397,3398,7,26,0,0,3398,3399,7,5,0,0,3399,632,1,0,0,0,3400,
        3401,7,5,0,0,3401,3402,7,22,0,0,3402,3403,7,27,0,0,3403,3404,7,13,
        0,0,3404,3405,7,26,0,0,3405,3406,7,27,0,0,3406,3407,7,12,0,0,3407,
        634,1,0,0,0,3408,3409,7,5,0,0,3409,3410,7,4,0,0,3410,3411,7,15,0,
        0,3411,3412,7,9,0,0,3412,3413,7,12,0,0,3413,3414,7,20,0,0,3414,3415,
        7,11,0,0,3415,636,1,0,0,0,3416,3417,7,5,0,0,3417,3418,7,21,0,0,3418,
        3419,7,27,0,0,3419,3420,7,13,0,0,3420,638,1,0,0,0,3421,3422,7,16,
        0,0,3422,3423,7,11,0,0,3423,3424,7,25,0,0,3424,3425,7,23,0,0,3425,
        3426,7,3,0,0,3426,640,1,0,0,0,3427,3428,7,7,0,0,3428,3429,7,9,0,
        0,3429,3430,7,19,0,0,3430,3431,7,16,0,0,3431,3432,7,13,0,0,3432,
        3433,5,49,0,0,3433,642,1,0,0,0,3434,3435,7,7,0,0,3435,3436,7,9,0,
        0,3436,3437,7,19,0,0,3437,3438,7,16,0,0,3438,3439,7,13,0,0,3439,
        3440,5,50,0,0,3440,644,1,0,0,0,3441,3442,7,7,0,0,3442,3443,7,9,0,
        0,3443,3444,7,12,0,0,3444,3445,7,17,0,0,3445,3446,7,25,0,0,3446,
        3447,7,13,0,0,3447,3448,7,19,0,0,3448,3449,7,20,0,0,3449,646,1,0,
        0,0,3450,3451,7,15,0,0,3451,3452,7,13,0,0,3452,3453,7,10,0,0,3453,
        3454,5,95,0,0,3454,3455,7,18,0,0,3455,3456,7,22,0,0,3456,648,1,0,
        0,0,3457,3458,7,15,0,0,3458,3459,7,25,0,0,3459,3460,7,5,0,0,3460,
        3461,7,24,0,0,3461,650,1,0,0,0,3462,3463,7,15,0,0,3463,3464,7,11,
        0,0,3464,3465,7,27,0,0,3465,3466,7,13,0,0,3466,3467,7,19,0,0,3467,
        3468,7,19,0,0,3468,652,1,0,0,0,3469,3470,7,5,0,0,3470,3471,7,21,
        0,0,3471,3472,7,27,0,0,3472,3473,7,13,0,0,3473,3474,1,0,0,0,3474,
        3475,7,8,0,0,3475,654,1,0,0,0,3476,3477,7,9,0,0,3477,3478,7,5,0,
        0,3478,656,1,0,0,0,3479,3480,7,10,0,0,3480,3481,7,21,0,0,3481,658,
        1,0,0,0,3482,3483,7,25,0,0,3483,3484,7,23,0,0,3484,660,1,0,0,0,3485,
        3486,7,4,0,0,3486,3487,7,17,0,0,3487,662,1,0,0,0,3488,3489,7,4,0,
        0,3489,3490,7,23,0,0,3490,664,1,0,0,0,3491,3492,7,5,0,0,3492,3493,
        7,4,0,0,3493,666,1,0,0,0,3494,3495,7,7,0,0,3495,3496,7,11,0,0,3496,
        668,1,0,0,0,3497,3498,7,26,0,0,3498,670,1,0,0,0,3499,3500,7,21,0,
        0,3500,672,1,0,0,0,3501,3502,7,30,0,0,3502,674,1,0,0,0,3503,3504,
        7,8,0,0,3504,676,1,0,0,0,3505,3507,3,675,337,0,3506,3505,1,0,0,0,
        3507,3508,1,0,0,0,3508,3506,1,0,0,0,3508,3509,1,0,0,0,3509,3517,
        1,0,0,0,3510,3511,5,95,0,0,3511,3512,3,675,337,0,3512,3513,3,675,
        337,0,3513,3514,3,675,337,0,3514,3516,1,0,0,0,3515,3510,1,0,0,0,
        3516,3519,1,0,0,0,3517,3515,1,0,0,0,3517,3518,1,0,0,0,3518,678,1,
        0,0,0,3519,3517,1,0,0,0,3520,3521,5,40,0,0,3521,680,1,0,0,0,3522,
        3523,5,41,0,0,3523,682,1,0,0,0,3524,3525,5,38,0,0,3525,3528,5,38,
        0,0,3526,3528,5,38,0,0,3527,3524,1,0,0,0,3527,3526,1,0,0,0,3528,
        684,1,0,0,0,3529,3530,5,124,0,0,3530,3533,5,124,0,0,3531,3533,5,
        124,0,0,3532,3529,1,0,0,0,3532,3531,1,0,0,0,3533,686,1,0,0,0,3534,
        3535,5,44,0,0,3535,688,1,0,0,0,3536,3537,5,91,0,0,3537,690,1,0,0,
        0,3538,3539,5,93,0,0,3539,692,1,0,0,0,3540,3541,5,43,0,0,3541,694,
        1,0,0,0,3542,3543,5,45,0,0,3543,696,1,0,0,0,3544,3545,5,47,0,0,3545,
        698,1,0,0,0,3546,3547,5,42,0,0,3547,700,1,0,0,0,3548,3549,5,37,0,
        0,3549,702,1,0,0,0,3550,3551,5,58,0,0,3551,704,1,0,0,0,3552,3553,
        5,95,0,0,3553,706,1,0,0,0,3554,3556,7,31,0,0,3555,3554,1,0,0,0,3556,
        3557,1,0,0,0,3557,3555,1,0,0,0,3557,3558,1,0,0,0,3558,708,1,0,0,
        0,3559,3560,3,1,0,0,3560,710,1,0,0,0,20,0,712,716,722,737,739,744,
        754,764,771,783,791,799,812,1151,3508,3517,3527,3532,3557,3,1,2,
        0,1,3,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!GslLexer.__ATN) {
            GslLexer.__ATN = new antlr.ATNDeserializer().deserialize(GslLexer._serializedATN);
        }

        return GslLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(GslLexer.literalNames, GslLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return GslLexer.vocabulary;
    }

    private static readonly decisionsToDFA = GslLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}