// Generated from gsl-language-server/antlr/Gsl.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { GslListener } from "./GslListener.js";
import { GslVisitor } from "./GslVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class GslParser extends antlr.Parser {
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
    public static readonly RULE_script = 0;
    public static readonly RULE_eol = 1;
    public static readonly RULE_statement = 2;
    public static readonly RULE_if = 3;
    public static readonly RULE_elseIf = 4;
    public static readonly RULE_else = 5;
    public static readonly RULE_whenStatement = 6;
    public static readonly RULE_whenCase = 7;
    public static readonly RULE_whenCaseDefault = 8;
    public static readonly RULE_loopStatement = 9;
    public static readonly RULE_earlyPopStop = 10;
    public static readonly RULE_addExpr = 11;
    public static readonly RULE_addGroup = 12;
    public static readonly RULE_addMenuItem = 13;
    public static readonly RULE_addeffect = 14;
    public static readonly RULE_altWinOff = 15;
    public static readonly RULE_altWinOn = 16;
    public static readonly RULE_anim = 17;
    public static readonly RULE_assert = 18;
    public static readonly RULE_attack = 19;
    public static readonly RULE_bitget = 20;
    public static readonly RULE_bitset = 21;
    public static readonly RULE_boldoff = 22;
    public static readonly RULE_boldon = 23;
    public static readonly RULE_border = 24;
    public static readonly RULE_bugReport = 25;
    public static readonly RULE_call = 26;
    public static readonly RULE_callPS = 27;
    public static readonly RULE_callmatch = 28;
    public static readonly RULE_canDo = 29;
    public static readonly RULE_checkEffect = 30;
    public static readonly RULE_clear = 31;
    public static readonly RULE_clearMenu = 32;
    public static readonly RULE_clearTable = 33;
    public static readonly RULE_closeLocker = 34;
    public static readonly RULE_cmgr = 35;
    public static readonly RULE_compareItemCreature = 36;
    public static readonly RULE_compareItemEvent = 37;
    public static readonly RULE_compareItemObject = 38;
    public static readonly RULE_contribute = 39;
    public static readonly RULE_copyCreature = 40;
    public static readonly RULE_copyEvent = 41;
    public static readonly RULE_copyObject = 42;
    public static readonly RULE_create = 43;
    public static readonly RULE_createItem = 44;
    public static readonly RULE_createRoom = 45;
    public static readonly RULE_createTable = 46;
    public static readonly RULE_createText = 47;
    public static readonly RULE_critical = 48;
    public static readonly RULE_decodeAttack = 49;
    public static readonly RULE_deleteTable = 50;
    public static readonly RULE_deploy = 51;
    public static readonly RULE_dirAdd = 52;
    public static readonly RULE_dirSend = 53;
    public static readonly RULE_doCreate = 54;
    public static readonly RULE_doLook = 55;
    public static readonly RULE_drop = 56;
    public static readonly RULE_encodeAttack = 57;
    public static readonly RULE_end2Effect = 58;
    public static readonly RULE_endEffect = 59;
    public static readonly RULE_endNEffect = 60;
    public static readonly RULE_expand = 61;
    public static readonly RULE_fastpush = 62;
    public static readonly RULE_feMisc = 63;
    public static readonly RULE_feUpdate = 64;
    public static readonly RULE_fillTable = 65;
    public static readonly RULE_gather = 66;
    public static readonly RULE_gatherFirst = 67;
    public static readonly RULE_gatherFirstRoom = 68;
    public static readonly RULE_gatherNext = 69;
    public static readonly RULE_gatherNextRoom = 70;
    public static readonly RULE_gatherPlayer = 71;
    public static readonly RULE_getContributors = 72;
    public static readonly RULE_getIndexOf = 73;
    public static readonly RULE_getMax = 74;
    public static readonly RULE_getNameOf = 75;
    public static readonly RULE_getPs = 76;
    public static readonly RULE_getTable = 77;
    public static readonly RULE_getTextCommand = 78;
    public static readonly RULE_getWatch = 79;
    public static readonly RULE_glue = 80;
    public static readonly RULE_goto = 81;
    public static readonly RULE_hash1 = 82;
    public static readonly RULE_hash2 = 83;
    public static readonly RULE_heal = 84;
    public static readonly RULE_healP = 85;
    public static readonly RULE_hurt = 86;
    public static readonly RULE_hush = 87;
    public static readonly RULE_inPhrase = 88;
    public static readonly RULE_index = 89;
    public static readonly RULE_infoItem = 90;
    public static readonly RULE_infoProfile = 91;
    public static readonly RULE_infoScript = 92;
    public static readonly RULE_infoTable = 93;
    public static readonly RULE_infoVarField = 94;
    public static readonly RULE_infoVerb = 95;
    public static readonly RULE_injure = 96;
    public static readonly RULE_isInjured = 97;
    public static readonly RULE_isNameFree = 98;
    public static readonly RULE_itemSnapshot = 99;
    public static readonly RULE_kill = 100;
    public static readonly RULE_killAllNp = 101;
    public static readonly RULE_label = 102;
    public static readonly RULE_launch = 103;
    public static readonly RULE_launchURL = 104;
    public static readonly RULE_load = 105;
    public static readonly RULE_loadCharData = 106;
    public static readonly RULE_logMsg = 107;
    public static readonly RULE_logStart = 108;
    public static readonly RULE_logSubmit = 109;
    public static readonly RULE_logTargetAccount = 110;
    public static readonly RULE_logTargetIndex = 111;
    public static readonly RULE_logTargetName = 112;
    public static readonly RULE_logTargetOther = 113;
    public static readonly RULE_logTargetUid = 114;
    public static readonly RULE_logText = 115;
    public static readonly RULE_logToIndex = 116;
    public static readonly RULE_logto = 117;
    public static readonly RULE_lookRoom = 118;
    public static readonly RULE_lowercase = 119;
    public static readonly RULE_matchMarker = 120;
    public static readonly RULE_matchSpell = 121;
    public static readonly RULE_mmgr = 122;
    public static readonly RULE_move = 123;
    public static readonly RULE_msg = 124;
    public static readonly RULE_msgGm = 125;
    public static readonly RULE_msgfsys = 126;
    public static readonly RULE_msgp = 127;
    public static readonly RULE_msgr = 128;
    public static readonly RULE_msgrgm = 129;
    public static readonly RULE_msgrx2 = 130;
    public static readonly RULE_msgrxp = 131;
    public static readonly RULE_msgs = 132;
    public static readonly RULE_msgsgm = 133;
    public static readonly RULE_msgsys = 134;
    public static readonly RULE_msgw = 135;
    public static readonly RULE_nameEnd = 136;
    public static readonly RULE_nameStart = 137;
    public static readonly RULE_nextEffect = 138;
    public static readonly RULE_nextNode = 139;
    public static readonly RULE_openLocker = 140;
    public static readonly RULE_outPhrase = 141;
    public static readonly RULE_parse = 142;
    public static readonly RULE_parseDecimal = 143;
    public static readonly RULE_pauseEffects = 144;
    public static readonly RULE_pid = 145;
    public static readonly RULE_playerCount = 146;
    public static readonly RULE_prempt = 147;
    public static readonly RULE_push = 148;
    public static readonly RULE_random = 149;
    public static readonly RULE_rem2effect = 150;
    public static readonly RULE_remEffect = 151;
    public static readonly RULE_remMenuItem = 152;
    public static readonly RULE_remNEffect = 153;
    public static readonly RULE_remove = 154;
    public static readonly RULE_removeVarField = 155;
    public static readonly RULE_removeVarGroup = 156;
    public static readonly RULE_resist = 157;
    public static readonly RULE_resizeTable = 158;
    public static readonly RULE_restoreFields = 159;
    public static readonly RULE_resumeEffects = 160;
    public static readonly RULE_rmCall = 161;
    public static readonly RULE_rndDir = 162;
    public static readonly RULE_rndExit = 163;
    public static readonly RULE_rndPlyr = 164;
    public static readonly RULE_rollIn = 165;
    public static readonly RULE_roomEnd = 166;
    public static readonly RULE_roomStart = 167;
    public static readonly RULE_rootExistOf = 168;
    public static readonly RULE_roundtime = 169;
    public static readonly RULE_saveFields = 170;
    public static readonly RULE_scan = 171;
    public static readonly RULE_scanEffect = 172;
    public static readonly RULE_set = 173;
    public static readonly RULE_setName = 174;
    public static readonly RULE_setTable = 175;
    public static readonly RULE_setText = 176;
    public static readonly RULE_sparse = 177;
    public static readonly RULE_stopCommand = 178;
    public static readonly RULE_storeCharData = 179;
    public static readonly RULE_stov = 180;
    public static readonly RULE_substring = 181;
    public static readonly RULE_tableInfo = 182;
    public static readonly RULE_tellWeb = 183;
    public static readonly RULE_test2effect = 184;
    public static readonly RULE_testEffect = 185;
    public static readonly RULE_test_assert = 186;
    public static readonly RULE_tparse = 187;
    public static readonly RULE_underOff = 188;
    public static readonly RULE_underOn = 189;
    public static readonly RULE_unload = 190;
    public static readonly RULE_updateSrvrStuff = 191;
    public static readonly RULE_updateTable = 192;
    public static readonly RULE_uppercase = 193;
    public static readonly RULE_vtos = 194;
    public static readonly RULE_watch = 195;
    public static readonly RULE_where = 196;
    public static readonly RULE_whereAt = 197;
    public static readonly RULE_whereItem = 198;
    public static readonly RULE_writeChar = 199;
    public static readonly RULE_valueExpression = 200;
    public static readonly RULE_negativeNumber = 201;
    public static readonly RULE_valueOperation = 202;
    public static readonly RULE_stringOperation = 203;
    public static readonly RULE_stringExpression = 204;
    public static readonly RULE_stringConcatenation = 205;
    public static readonly RULE_identityExpression = 206;
    public static readonly RULE_node = 207;
    public static readonly RULE_numberVariable = 208;
    public static readonly RULE_stringVariable = 209;
    public static readonly RULE_tableReference = 210;
    public static readonly RULE_tableAddress = 211;
    public static readonly RULE_fieldName = 212;
    public static readonly RULE_nodeFieldRef = 213;

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
    public static readonly ruleNames = [
        "script", "eol", "statement", "if", "elseIf", "else", "whenStatement", 
        "whenCase", "whenCaseDefault", "loopStatement", "earlyPopStop", 
        "addExpr", "addGroup", "addMenuItem", "addeffect", "altWinOff", 
        "altWinOn", "anim", "assert", "attack", "bitget", "bitset", "boldoff", 
        "boldon", "border", "bugReport", "call", "callPS", "callmatch", 
        "canDo", "checkEffect", "clear", "clearMenu", "clearTable", "closeLocker", 
        "cmgr", "compareItemCreature", "compareItemEvent", "compareItemObject", 
        "contribute", "copyCreature", "copyEvent", "copyObject", "create", 
        "createItem", "createRoom", "createTable", "createText", "critical", 
        "decodeAttack", "deleteTable", "deploy", "dirAdd", "dirSend", "doCreate", 
        "doLook", "drop", "encodeAttack", "end2Effect", "endEffect", "endNEffect", 
        "expand", "fastpush", "feMisc", "feUpdate", "fillTable", "gather", 
        "gatherFirst", "gatherFirstRoom", "gatherNext", "gatherNextRoom", 
        "gatherPlayer", "getContributors", "getIndexOf", "getMax", "getNameOf", 
        "getPs", "getTable", "getTextCommand", "getWatch", "glue", "goto", 
        "hash1", "hash2", "heal", "healP", "hurt", "hush", "inPhrase", "index", 
        "infoItem", "infoProfile", "infoScript", "infoTable", "infoVarField", 
        "infoVerb", "injure", "isInjured", "isNameFree", "itemSnapshot", 
        "kill", "killAllNp", "label", "launch", "launchURL", "load", "loadCharData", 
        "logMsg", "logStart", "logSubmit", "logTargetAccount", "logTargetIndex", 
        "logTargetName", "logTargetOther", "logTargetUid", "logText", "logToIndex", 
        "logto", "lookRoom", "lowercase", "matchMarker", "matchSpell", "mmgr", 
        "move", "msg", "msgGm", "msgfsys", "msgp", "msgr", "msgrgm", "msgrx2", 
        "msgrxp", "msgs", "msgsgm", "msgsys", "msgw", "nameEnd", "nameStart", 
        "nextEffect", "nextNode", "openLocker", "outPhrase", "parse", "parseDecimal", 
        "pauseEffects", "pid", "playerCount", "prempt", "push", "random", 
        "rem2effect", "remEffect", "remMenuItem", "remNEffect", "remove", 
        "removeVarField", "removeVarGroup", "resist", "resizeTable", "restoreFields", 
        "resumeEffects", "rmCall", "rndDir", "rndExit", "rndPlyr", "rollIn", 
        "roomEnd", "roomStart", "rootExistOf", "roundtime", "saveFields", 
        "scan", "scanEffect", "set", "setName", "setTable", "setText", "sparse", 
        "stopCommand", "storeCharData", "stov", "substring", "tableInfo", 
        "tellWeb", "test2effect", "testEffect", "test_assert", "tparse", 
        "underOff", "underOn", "unload", "updateSrvrStuff", "updateTable", 
        "uppercase", "vtos", "watch", "where", "whereAt", "whereItem", "writeChar", 
        "valueExpression", "negativeNumber", "valueOperation", "stringOperation", 
        "stringExpression", "stringConcatenation", "identityExpression", 
        "node", "numberVariable", "stringVariable", "tableReference", "tableAddress", 
        "fieldName", "nodeFieldRef",
    ];

    public get grammarFileName(): string { return "Gsl.g4"; }
    public get literalNames(): (string | null)[] { return GslParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return GslParser.symbolicNames; }
    public get ruleNames(): string[] { return GslParser.ruleNames; }
    public get serializedATN(): number[] { return GslParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, GslParser._ATN, GslParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public script(): ScriptContext {
        let localContext = new ScriptContext(this.context, this.state);
        this.enterRule(localContext, 0, GslParser.RULE_script);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 431;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                this.state = 431;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 428;
                    this.matchMarker();
                    }
                    break;
                case 2:
                    {
                    this.state = 429;
                    this.statement();
                    }
                    break;
                case 3:
                    {
                    this.state = 430;
                    this.match(GslParser.NEWLINE);
                    }
                    break;
                }
                }
                this.state = 433;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 7 || _la === 8 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4278161251) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294443007) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4290772871) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 4294967293) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 4294835469) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4025416703) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 2147484663) !== 0) || _la === 282 || _la === 348 || _la === 351);
            this.state = 435;
            this.match(GslParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public eol(): EolContext {
        let localContext = new EolContext(this.context, this.state);
        this.enterRule(localContext, 2, GslParser.RULE_eol);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 437;
            this.match(GslParser.NEWLINE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 4, GslParser.RULE_statement);
        try {
            this.state = 632;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 439;
                this.match(GslParser.NEWLINE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 440;
                this.attack();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 441;
                this.addeffect();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 442;
                this.addGroup();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 443;
                this.assert();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 444;
                this.bitget();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 445;
                this.bitset();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 446;
                this.boldoff();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 447;
                this.boldon();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 448;
                this.call();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 449;
                this.callmatch();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 450;
                this.canDo();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 451;
                this.checkEffect();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 452;
                this.clear();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 453;
                this.clearMenu();
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 454;
                this.clearTable();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 455;
                this.create();
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 456;
                this.createTable();
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 457;
                this.decodeAttack();
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 458;
                this.encodeAttack();
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 459;
                this.earlyPopStop();
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 460;
                this.expand();
                }
                break;
            case 23:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 461;
                this.fastpush();
                }
                break;
            case 24:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 462;
                this.gather();
                }
                break;
            case 25:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 463;
                this.gatherFirst();
                }
                break;
            case 26:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 464;
                this.gatherPlayer();
                }
                break;
            case 27:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 465;
                this.getPs();
                }
                break;
            case 28:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 466;
                this.getTable();
                }
                break;
            case 29:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 467;
                this.glue();
                }
                break;
            case 30:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 468;
                this.goto();
                }
                break;
            case 31:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 469;
                this.if_();
                }
                break;
            case 32:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 470;
                this.index();
                }
                break;
            case 33:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 471;
                this.infoProfile();
                }
                break;
            case 34:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 472;
                this.infoScript();
                }
                break;
            case 35:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 473;
                this.infoTable();
                }
                break;
            case 36:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 474;
                this.infoVarField();
                }
                break;
            case 37:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 475;
                this.infoVerb();
                }
                break;
            case 38:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 476;
                this.injure();
                }
                break;
            case 39:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 477;
                this.isInjured();
                }
                break;
            case 40:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 478;
                this.kill();
                }
                break;
            case 41:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 479;
                this.killAllNp();
                }
                break;
            case 42:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 480;
                this.label();
                }
                break;
            case 43:
                this.enterOuterAlt(localContext, 43);
                {
                this.state = 481;
                this.load();
                }
                break;
            case 44:
                this.enterOuterAlt(localContext, 44);
                {
                this.state = 482;
                this.logMsg();
                }
                break;
            case 45:
                this.enterOuterAlt(localContext, 45);
                {
                this.state = 483;
                this.logStart();
                }
                break;
            case 46:
                this.enterOuterAlt(localContext, 46);
                {
                this.state = 484;
                this.logSubmit();
                }
                break;
            case 47:
                this.enterOuterAlt(localContext, 47);
                {
                this.state = 485;
                this.logTargetAccount();
                }
                break;
            case 48:
                this.enterOuterAlt(localContext, 48);
                {
                this.state = 486;
                this.logTargetIndex();
                }
                break;
            case 49:
                this.enterOuterAlt(localContext, 49);
                {
                this.state = 487;
                this.logTargetName();
                }
                break;
            case 50:
                this.enterOuterAlt(localContext, 50);
                {
                this.state = 488;
                this.logTargetOther();
                }
                break;
            case 51:
                this.enterOuterAlt(localContext, 51);
                {
                this.state = 489;
                this.logTargetUid();
                }
                break;
            case 52:
                this.enterOuterAlt(localContext, 52);
                {
                this.state = 490;
                this.logText();
                }
                break;
            case 53:
                this.enterOuterAlt(localContext, 53);
                {
                this.state = 491;
                this.logto();
                }
                break;
            case 54:
                this.enterOuterAlt(localContext, 54);
                {
                this.state = 492;
                this.lookRoom();
                }
                break;
            case 55:
                this.enterOuterAlt(localContext, 55);
                {
                this.state = 493;
                this.loopStatement();
                }
                break;
            case 56:
                this.enterOuterAlt(localContext, 56);
                {
                this.state = 494;
                this.lowercase();
                }
                break;
            case 57:
                this.enterOuterAlt(localContext, 57);
                {
                this.state = 495;
                this.matchSpell();
                }
                break;
            case 58:
                this.enterOuterAlt(localContext, 58);
                {
                this.state = 496;
                this.move();
                }
                break;
            case 59:
                this.enterOuterAlt(localContext, 59);
                {
                this.state = 497;
                this.msg();
                }
                break;
            case 60:
                this.enterOuterAlt(localContext, 60);
                {
                this.state = 498;
                this.msgGm();
                }
                break;
            case 61:
                this.enterOuterAlt(localContext, 61);
                {
                this.state = 499;
                this.msgp();
                }
                break;
            case 62:
                this.enterOuterAlt(localContext, 62);
                {
                this.state = 500;
                this.msgr();
                }
                break;
            case 63:
                this.enterOuterAlt(localContext, 63);
                {
                this.state = 501;
                this.msgrgm();
                }
                break;
            case 64:
                this.enterOuterAlt(localContext, 64);
                {
                this.state = 502;
                this.msgrx2();
                }
                break;
            case 65:
                this.enterOuterAlt(localContext, 65);
                {
                this.state = 503;
                this.msgrxp();
                }
                break;
            case 66:
                this.enterOuterAlt(localContext, 66);
                {
                this.state = 504;
                this.nextEffect();
                }
                break;
            case 67:
                this.enterOuterAlt(localContext, 67);
                {
                this.state = 505;
                this.nextNode();
                }
                break;
            case 68:
                this.enterOuterAlt(localContext, 68);
                {
                this.state = 506;
                this.parse();
                }
                break;
            case 69:
                this.enterOuterAlt(localContext, 69);
                {
                this.state = 507;
                this.push();
                }
                break;
            case 70:
                this.enterOuterAlt(localContext, 70);
                {
                this.state = 508;
                this.random();
                }
                break;
            case 71:
                this.enterOuterAlt(localContext, 71);
                {
                this.state = 509;
                this.rem2effect();
                }
                break;
            case 72:
                this.enterOuterAlt(localContext, 72);
                {
                this.state = 510;
                this.remEffect();
                }
                break;
            case 73:
                this.enterOuterAlt(localContext, 73);
                {
                this.state = 511;
                this.removeVarField();
                }
                break;
            case 74:
                this.enterOuterAlt(localContext, 74);
                {
                this.state = 512;
                this.resizeTable();
                }
                break;
            case 75:
                this.enterOuterAlt(localContext, 75);
                {
                this.state = 513;
                this.rmCall();
                }
                break;
            case 76:
                this.enterOuterAlt(localContext, 76);
                {
                this.state = 514;
                this.rndPlyr();
                }
                break;
            case 77:
                this.enterOuterAlt(localContext, 77);
                {
                this.state = 515;
                this.rootExistOf();
                }
                break;
            case 78:
                this.enterOuterAlt(localContext, 78);
                {
                this.state = 516;
                this.roundtime();
                }
                break;
            case 79:
                this.enterOuterAlt(localContext, 79);
                {
                this.state = 517;
                this.scan();
                }
                break;
            case 80:
                this.enterOuterAlt(localContext, 80);
                {
                this.state = 518;
                this.scanEffect();
                }
                break;
            case 81:
                this.enterOuterAlt(localContext, 81);
                {
                this.state = 519;
                this.set_();
                }
                break;
            case 82:
                this.enterOuterAlt(localContext, 82);
                {
                this.state = 520;
                this.setTable();
                }
                break;
            case 83:
                this.enterOuterAlt(localContext, 83);
                {
                this.state = 521;
                this.sparse();
                }
                break;
            case 84:
                this.enterOuterAlt(localContext, 84);
                {
                this.state = 522;
                this.stopCommand();
                }
                break;
            case 85:
                this.enterOuterAlt(localContext, 85);
                {
                this.state = 523;
                this.stov();
                }
                break;
            case 86:
                this.enterOuterAlt(localContext, 86);
                {
                this.state = 524;
                this.substring();
                }
                break;
            case 87:
                this.enterOuterAlt(localContext, 87);
                {
                this.state = 525;
                this.tableInfo();
                }
                break;
            case 88:
                this.enterOuterAlt(localContext, 88);
                {
                this.state = 526;
                this.test2effect();
                }
                break;
            case 89:
                this.enterOuterAlt(localContext, 89);
                {
                this.state = 527;
                this.testEffect();
                }
                break;
            case 90:
                this.enterOuterAlt(localContext, 90);
                {
                this.state = 528;
                this.tparse();
                }
                break;
            case 91:
                this.enterOuterAlt(localContext, 91);
                {
                this.state = 529;
                this.unload();
                }
                break;
            case 92:
                this.enterOuterAlt(localContext, 92);
                {
                this.state = 530;
                this.updateTable();
                }
                break;
            case 93:
                this.enterOuterAlt(localContext, 93);
                {
                this.state = 531;
                this.vtos();
                }
                break;
            case 94:
                this.enterOuterAlt(localContext, 94);
                {
                this.state = 532;
                this.whenStatement();
                }
                break;
            case 95:
                this.enterOuterAlt(localContext, 95);
                {
                this.state = 533;
                this.where();
                }
                break;
            case 96:
                this.enterOuterAlt(localContext, 96);
                {
                this.state = 534;
                this.whereAt();
                }
                break;
            case 97:
                this.enterOuterAlt(localContext, 97);
                {
                this.state = 535;
                this.whereItem();
                }
                break;
            case 98:
                this.enterOuterAlt(localContext, 98);
                {
                this.state = 536;
                this.watch();
                }
                break;
            case 99:
                this.enterOuterAlt(localContext, 99);
                {
                this.state = 537;
                this.createItem();
                }
                break;
            case 100:
                this.enterOuterAlt(localContext, 100);
                {
                this.state = 538;
                this.createRoom();
                }
                break;
            case 101:
                this.enterOuterAlt(localContext, 101);
                {
                this.state = 539;
                this.createText();
                }
                break;
            case 102:
                this.enterOuterAlt(localContext, 102);
                {
                this.state = 540;
                this.remove();
                }
                break;
            case 103:
                this.enterOuterAlt(localContext, 103);
                {
                this.state = 541;
                this.remMenuItem();
                }
                break;
            case 104:
                this.enterOuterAlt(localContext, 104);
                {
                this.state = 542;
                this.remNEffect();
                }
                break;
            case 105:
                this.enterOuterAlt(localContext, 105);
                {
                this.state = 543;
                this.removeVarGroup();
                }
                break;
            case 106:
                this.enterOuterAlt(localContext, 106);
                {
                this.state = 544;
                this.addExpr();
                }
                break;
            case 107:
                this.enterOuterAlt(localContext, 107);
                {
                this.state = 545;
                this.addMenuItem();
                }
                break;
            case 108:
                this.enterOuterAlt(localContext, 108);
                {
                this.state = 546;
                this.altWinOff();
                }
                break;
            case 109:
                this.enterOuterAlt(localContext, 109);
                {
                this.state = 547;
                this.altWinOn();
                }
                break;
            case 110:
                this.enterOuterAlt(localContext, 110);
                {
                this.state = 548;
                this.anim();
                }
                break;
            case 111:
                this.enterOuterAlt(localContext, 111);
                {
                this.state = 549;
                this.border();
                }
                break;
            case 112:
                this.enterOuterAlt(localContext, 112);
                {
                this.state = 550;
                this.bugReport();
                }
                break;
            case 113:
                this.enterOuterAlt(localContext, 113);
                {
                this.state = 551;
                this.callPS();
                }
                break;
            case 114:
                this.enterOuterAlt(localContext, 114);
                {
                this.state = 552;
                this.closeLocker();
                }
                break;
            case 115:
                this.enterOuterAlt(localContext, 115);
                {
                this.state = 553;
                this.cmgr();
                }
                break;
            case 116:
                this.enterOuterAlt(localContext, 116);
                {
                this.state = 554;
                this.gatherFirstRoom();
                }
                break;
            case 117:
                this.enterOuterAlt(localContext, 117);
                {
                this.state = 555;
                this.gatherNext();
                }
                break;
            case 118:
                this.enterOuterAlt(localContext, 118);
                {
                this.state = 556;
                this.gatherNextRoom();
                }
                break;
            case 119:
                this.enterOuterAlt(localContext, 119);
                {
                this.state = 557;
                this.getWatch();
                }
                break;
            case 120:
                this.enterOuterAlt(localContext, 120);
                {
                this.state = 558;
                this.getContributors();
                }
                break;
            case 121:
                this.enterOuterAlt(localContext, 121);
                {
                this.state = 559;
                this.getIndexOf();
                }
                break;
            case 122:
                this.enterOuterAlt(localContext, 122);
                {
                this.state = 560;
                this.getMax();
                }
                break;
            case 123:
                this.enterOuterAlt(localContext, 123);
                {
                this.state = 561;
                this.getNameOf();
                }
                break;
            case 124:
                this.enterOuterAlt(localContext, 124);
                {
                this.state = 562;
                this.getTextCommand();
                }
                break;
            case 125:
                this.enterOuterAlt(localContext, 125);
                {
                this.state = 563;
                this.critical();
                }
                break;
            case 126:
                this.enterOuterAlt(localContext, 126);
                {
                this.state = 564;
                this.drop();
                }
                break;
            case 127:
                this.enterOuterAlt(localContext, 127);
                {
                this.state = 565;
                this.hush();
                }
                break;
            case 128:
                this.enterOuterAlt(localContext, 128);
                {
                this.state = 566;
                this.playerCount();
                }
                break;
            case 129:
                this.enterOuterAlt(localContext, 129);
                {
                this.state = 567;
                this.resist();
                }
                break;
            case 130:
                this.enterOuterAlt(localContext, 130);
                {
                this.state = 568;
                this.launchURL();
                }
                break;
            case 131:
                this.enterOuterAlt(localContext, 131);
                {
                this.state = 569;
                this.compareItemObject();
                }
                break;
            case 132:
                this.enterOuterAlt(localContext, 132);
                {
                this.state = 570;
                this.compareItemEvent();
                }
                break;
            case 133:
                this.enterOuterAlt(localContext, 133);
                {
                this.state = 571;
                this.compareItemCreature();
                }
                break;
            case 134:
                this.enterOuterAlt(localContext, 134);
                {
                this.state = 572;
                this.contribute();
                }
                break;
            case 135:
                this.enterOuterAlt(localContext, 135);
                {
                this.state = 573;
                this.copyCreature();
                }
                break;
            case 136:
                this.enterOuterAlt(localContext, 136);
                {
                this.state = 574;
                this.copyEvent();
                }
                break;
            case 137:
                this.enterOuterAlt(localContext, 137);
                {
                this.state = 575;
                this.copyObject();
                }
                break;
            case 138:
                this.enterOuterAlt(localContext, 138);
                {
                this.state = 576;
                this.deleteTable();
                }
                break;
            case 139:
                this.enterOuterAlt(localContext, 139);
                {
                this.state = 577;
                this.deploy();
                }
                break;
            case 140:
                this.enterOuterAlt(localContext, 140);
                {
                this.state = 578;
                this.dirAdd();
                }
                break;
            case 141:
                this.enterOuterAlt(localContext, 141);
                {
                this.state = 579;
                this.dirSend();
                }
                break;
            case 142:
                this.enterOuterAlt(localContext, 142);
                {
                this.state = 580;
                this.doCreate();
                }
                break;
            case 143:
                this.enterOuterAlt(localContext, 143);
                {
                this.state = 581;
                this.doLook();
                }
                break;
            case 144:
                this.enterOuterAlt(localContext, 144);
                {
                this.state = 582;
                this.end2Effect();
                }
                break;
            case 145:
                this.enterOuterAlt(localContext, 145);
                {
                this.state = 583;
                this.endEffect();
                }
                break;
            case 146:
                this.enterOuterAlt(localContext, 146);
                {
                this.state = 584;
                this.endNEffect();
                }
                break;
            case 147:
                this.enterOuterAlt(localContext, 147);
                {
                this.state = 585;
                this.feMisc();
                }
                break;
            case 148:
                this.enterOuterAlt(localContext, 148);
                {
                this.state = 586;
                this.feUpdate();
                }
                break;
            case 149:
                this.enterOuterAlt(localContext, 149);
                {
                this.state = 587;
                this.fillTable();
                }
                break;
            case 150:
                this.enterOuterAlt(localContext, 150);
                {
                this.state = 588;
                this.hash1();
                }
                break;
            case 151:
                this.enterOuterAlt(localContext, 151);
                {
                this.state = 589;
                this.hash2();
                }
                break;
            case 152:
                this.enterOuterAlt(localContext, 152);
                {
                this.state = 590;
                this.healP();
                }
                break;
            case 153:
                this.enterOuterAlt(localContext, 153);
                {
                this.state = 591;
                this.heal();
                }
                break;
            case 154:
                this.enterOuterAlt(localContext, 154);
                {
                this.state = 592;
                this.hurt();
                }
                break;
            case 155:
                this.enterOuterAlt(localContext, 155);
                {
                this.state = 593;
                this.infoItem();
                }
                break;
            case 156:
                this.enterOuterAlt(localContext, 156);
                {
                this.state = 594;
                this.inPhrase();
                }
                break;
            case 157:
                this.enterOuterAlt(localContext, 157);
                {
                this.state = 595;
                this.isNameFree();
                }
                break;
            case 158:
                this.enterOuterAlt(localContext, 158);
                {
                this.state = 596;
                this.itemSnapshot();
                }
                break;
            case 159:
                this.enterOuterAlt(localContext, 159);
                {
                this.state = 597;
                this.launch();
                }
                break;
            case 160:
                this.enterOuterAlt(localContext, 160);
                {
                this.state = 598;
                this.loadCharData();
                }
                break;
            case 161:
                this.enterOuterAlt(localContext, 161);
                {
                this.state = 599;
                this.logToIndex();
                }
                break;
            case 162:
                this.enterOuterAlt(localContext, 162);
                {
                this.state = 600;
                this.mmgr();
                }
                break;
            case 163:
                this.enterOuterAlt(localContext, 163);
                {
                this.state = 601;
                this.msgfsys();
                }
                break;
            case 164:
                this.enterOuterAlt(localContext, 164);
                {
                this.state = 602;
                this.msgsgm();
                }
                break;
            case 165:
                this.enterOuterAlt(localContext, 165);
                {
                this.state = 603;
                this.msgsys();
                }
                break;
            case 166:
                this.enterOuterAlt(localContext, 166);
                {
                this.state = 604;
                this.msgs();
                }
                break;
            case 167:
                this.enterOuterAlt(localContext, 167);
                {
                this.state = 605;
                this.msgw();
                }
                break;
            case 168:
                this.enterOuterAlt(localContext, 168);
                {
                this.state = 606;
                this.nameEnd();
                }
                break;
            case 169:
                this.enterOuterAlt(localContext, 169);
                {
                this.state = 607;
                this.nameStart();
                }
                break;
            case 170:
                this.enterOuterAlt(localContext, 170);
                {
                this.state = 608;
                this.openLocker();
                }
                break;
            case 171:
                this.enterOuterAlt(localContext, 171);
                {
                this.state = 609;
                this.outPhrase();
                }
                break;
            case 172:
                this.enterOuterAlt(localContext, 172);
                {
                this.state = 610;
                this.parseDecimal();
                }
                break;
            case 173:
                this.enterOuterAlt(localContext, 173);
                {
                this.state = 611;
                this.pauseEffects();
                }
                break;
            case 174:
                this.enterOuterAlt(localContext, 174);
                {
                this.state = 612;
                this.pid();
                }
                break;
            case 175:
                this.enterOuterAlt(localContext, 175);
                {
                this.state = 613;
                this.prempt();
                }
                break;
            case 176:
                this.enterOuterAlt(localContext, 176);
                {
                this.state = 614;
                this.restoreFields();
                }
                break;
            case 177:
                this.enterOuterAlt(localContext, 177);
                {
                this.state = 615;
                this.resumeEffects();
                }
                break;
            case 178:
                this.enterOuterAlt(localContext, 178);
                {
                this.state = 616;
                this.rndDir();
                }
                break;
            case 179:
                this.enterOuterAlt(localContext, 179);
                {
                this.state = 617;
                this.rndExit();
                }
                break;
            case 180:
                this.enterOuterAlt(localContext, 180);
                {
                this.state = 618;
                this.rollIn();
                }
                break;
            case 181:
                this.enterOuterAlt(localContext, 181);
                {
                this.state = 619;
                this.roomEnd();
                }
                break;
            case 182:
                this.enterOuterAlt(localContext, 182);
                {
                this.state = 620;
                this.roomStart();
                }
                break;
            case 183:
                this.enterOuterAlt(localContext, 183);
                {
                this.state = 621;
                this.saveFields();
                }
                break;
            case 184:
                this.enterOuterAlt(localContext, 184);
                {
                this.state = 622;
                this.setName();
                }
                break;
            case 185:
                this.enterOuterAlt(localContext, 185);
                {
                this.state = 623;
                this.setText();
                }
                break;
            case 186:
                this.enterOuterAlt(localContext, 186);
                {
                this.state = 624;
                this.storeCharData();
                }
                break;
            case 187:
                this.enterOuterAlt(localContext, 187);
                {
                this.state = 625;
                this.tellWeb();
                }
                break;
            case 188:
                this.enterOuterAlt(localContext, 188);
                {
                this.state = 626;
                this.test_assert();
                }
                break;
            case 189:
                this.enterOuterAlt(localContext, 189);
                {
                this.state = 627;
                this.underOff();
                }
                break;
            case 190:
                this.enterOuterAlt(localContext, 190);
                {
                this.state = 628;
                this.underOn();
                }
                break;
            case 191:
                this.enterOuterAlt(localContext, 191);
                {
                this.state = 629;
                this.updateSrvrStuff();
                }
                break;
            case 192:
                this.enterOuterAlt(localContext, 192);
                {
                this.state = 630;
                this.uppercase();
                }
                break;
            case 193:
                this.enterOuterAlt(localContext, 193);
                {
                this.state = 631;
                this.writeChar();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public if_(): IfContext {
        let localContext = new IfContext(this.context, this.state);
        this.enterRule(localContext, 6, GslParser.RULE_if);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 634;
            _la = this.tokenStream.LA(1);
            if(!(_la === 49 || _la === 50)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 637;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                {
                this.state = 635;
                this.valueExpression();
                }
                break;
            case 2:
                {
                this.state = 636;
                this.stringExpression();
                }
                break;
            }
            this.state = 639;
            this.match(GslParser.THEN);
            this.state = 640;
            this.eol();
            this.state = 644;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 8 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4278161251) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294443007) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4290772871) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 4294967293) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 4294835469) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4025416703) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 2147484663) !== 0) || _la === 282 || _la === 351) {
                {
                {
                this.state = 641;
                this.statement();
                }
                }
                this.state = 646;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 650;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 51 || _la === 52) {
                {
                {
                this.state = 647;
                this.elseIf();
                }
                }
                this.state = 652;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 654;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 53) {
                {
                this.state = 653;
                this.else_();
                }
            }

            this.state = 656;
            this.match(GslParser.DOT);
            this.state = 657;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elseIf(): ElseIfContext {
        let localContext = new ElseIfContext(this.context, this.state);
        this.enterRule(localContext, 8, GslParser.RULE_elseIf);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 659;
            _la = this.tokenStream.LA(1);
            if(!(_la === 51 || _la === 52)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 662;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
            case 1:
                {
                this.state = 660;
                this.valueExpression();
                }
                break;
            case 2:
                {
                this.state = 661;
                this.stringExpression();
                }
                break;
            }
            this.state = 664;
            this.match(GslParser.THEN);
            this.state = 665;
            this.eol();
            this.state = 669;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 8 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4278161251) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294443007) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4290772871) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 4294967293) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 4294835469) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4025416703) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 2147484663) !== 0) || _la === 282 || _la === 351) {
                {
                {
                this.state = 666;
                this.statement();
                }
                }
                this.state = 671;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public else_(): ElseContext {
        let localContext = new ElseContext(this.context, this.state);
        this.enterRule(localContext, 10, GslParser.RULE_else);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 672;
            this.match(GslParser.ELSE);
            this.state = 673;
            this.eol();
            this.state = 677;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 8 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4278161251) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294443007) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4290772871) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 4294967293) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 4294835469) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4025416703) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 2147484663) !== 0) || _la === 282 || _la === 351) {
                {
                {
                this.state = 674;
                this.statement();
                }
                }
                this.state = 679;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whenStatement(): WhenStatementContext {
        let localContext = new WhenStatementContext(this.context, this.state);
        this.enterRule(localContext, 12, GslParser.RULE_whenStatement);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 680;
            this.match(GslParser.WHEN);
            this.state = 683;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                this.state = 681;
                this.valueExpression();
                }
                break;
            case 2:
                {
                this.state = 682;
                this.stringExpression();
                }
                break;
            }
            this.state = 685;
            this.eol();
            this.state = 690;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 688;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case GslParser.IS:
                        {
                        this.state = 686;
                        this.whenCase();
                        }
                        break;
                    case GslParser.NEWLINE:
                        {
                        this.state = 687;
                        this.match(GslParser.NEWLINE);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                }
                this.state = 692;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            }
            this.state = 697;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 100 || _la === 351) {
                {
                this.state = 695;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case GslParser.DEFAULT:
                    {
                    this.state = 693;
                    this.whenCaseDefault();
                    }
                    break;
                case GslParser.NEWLINE:
                    {
                    this.state = 694;
                    this.match(GslParser.NEWLINE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 699;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 700;
            this.match(GslParser.DOT);
            this.state = 701;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whenCase(): WhenCaseContext {
        let localContext = new WhenCaseContext(this.context, this.state);
        this.enterRule(localContext, 14, GslParser.RULE_whenCase);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 703;
            this.match(GslParser.IS);
            this.state = 706;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                {
                this.state = 704;
                this.valueExpression();
                }
                break;
            case 2:
                {
                this.state = 705;
                this.stringExpression();
                }
                break;
            }
            this.state = 708;
            this.eol();
            this.state = 712;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 8 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4278161251) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294443007) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4290772871) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 4294967293) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 4294835469) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4025416703) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 2147484663) !== 0) || _la === 282 || _la === 351) {
                {
                {
                this.state = 709;
                this.statement();
                }
                }
                this.state = 714;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 715;
            this.match(GslParser.DOT);
            this.state = 716;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whenCaseDefault(): WhenCaseDefaultContext {
        let localContext = new WhenCaseDefaultContext(this.context, this.state);
        this.enterRule(localContext, 16, GslParser.RULE_whenCaseDefault);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 718;
            this.match(GslParser.DEFAULT);
            this.state = 719;
            this.eol();
            this.state = 723;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 8 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4278161251) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294443007) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4290772871) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 4294967293) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 4294835469) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4025416703) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 2147484663) !== 0) || _la === 282 || _la === 351) {
                {
                {
                this.state = 720;
                this.statement();
                }
                }
                this.state = 725;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 726;
            this.match(GslParser.DOT);
            this.state = 727;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopStatement(): LoopStatementContext {
        let localContext = new LoopStatementContext(this.context, this.state);
        this.enterRule(localContext, 18, GslParser.RULE_loopStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 729;
            this.match(GslParser.LOOP);
            this.state = 732;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
            case 1:
                {
                this.state = 730;
                this.valueExpression();
                }
                break;
            case 2:
                {
                this.state = 731;
                this.stringExpression();
                }
                break;
            }
            this.state = 734;
            this.eol();
            this.state = 736;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 735;
                this.statement();
                }
                }
                this.state = 738;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 7 || _la === 8 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4278161251) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294443007) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4290772871) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 4294967293) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 4294835469) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4025416703) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 2147484663) !== 0) || _la === 282 || _la === 351);
            this.state = 740;
            this.match(GslParser.DOT);
            this.state = 741;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public earlyPopStop(): EarlyPopStopContext {
        let localContext = new EarlyPopStopContext(this.context, this.state);
        this.enterRule(localContext, 20, GslParser.RULE_earlyPopStop);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 751;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 743;
                _la = this.tokenStream.LA(1);
                if(!(_la === 57 || _la === 59)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 744;
                this.eol();
                this.state = 748;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 745;
                        this.statement();
                        }
                        }
                    }
                    this.state = 750;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
                }
                }
                }
                this.state = 753;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 57 || _la === 59);
            this.state = 755;
            this.match(GslParser.STOP);
            this.state = 756;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addExpr(): AddExprContext {
        let localContext = new AddExprContext(this.context, this.state);
        this.enterRule(localContext, 22, GslParser.RULE_addExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 758;
            this.match(GslParser.ADDEXPR);
            this.state = 759;
            this.valueExpression();
            this.state = 760;
            this.match(GslParser.TO);
            this.state = 761;
            this.match(GslParser.PLAYER_NODE);
            this.state = 762;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addGroup(): AddGroupContext {
        let localContext = new AddGroupContext(this.context, this.state);
        this.enterRule(localContext, 24, GslParser.RULE_addGroup);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 764;
            this.match(GslParser.ADD_GROUP);
            this.state = 765;
            this.stringExpression();
            this.state = 766;
            this.match(GslParser.TO);
            this.state = 767;
            this.node();
            this.state = 768;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addMenuItem(): AddMenuItemContext {
        let localContext = new AddMenuItemContext(this.context, this.state);
        this.enterRule(localContext, 26, GslParser.RULE_addMenuItem);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 770;
            this.match(GslParser.ADDMENUITEM);
            this.state = 771;
            this.stringExpression();
            this.state = 772;
            this.match(GslParser.TARGET);
            this.state = 773;
            this.stringExpression();
            this.state = 774;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addeffect(): AddeffectContext {
        let localContext = new AddeffectContext(this.context, this.state);
        this.enterRule(localContext, 28, GslParser.RULE_addeffect);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 776;
            this.match(GslParser.ADDEFFECT);
            this.state = 777;
            this.match(GslParser.CODE);
            this.state = 778;
            this.valueExpression();
            this.state = 779;
            this.match(GslParser.VALUE1);
            this.state = 780;
            this.valueExpression();
            this.state = 781;
            this.match(GslParser.VALUE2);
            this.state = 782;
            this.valueExpression();
            this.state = 783;
            this.match(GslParser.FLAGS);
            this.state = 784;
            this.valueExpression();
            this.state = 785;
            this.match(GslParser.WITH);
            this.state = 786;
            this.node();
            this.state = 787;
            this.match(GslParser.IN);
            this.state = 788;
            this.valueExpression();
            this.state = 789;
            this.match(GslParser.SCRIPT);
            this.state = 790;
            this.valueExpression();
            this.state = 791;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public altWinOff(): AltWinOffContext {
        let localContext = new AltWinOffContext(this.context, this.state);
        this.enterRule(localContext, 30, GslParser.RULE_altWinOff);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 793;
            this.match(GslParser.ALTWINOFF);
            this.state = 794;
            this.match(GslParser.PLAYER_NODE);
            this.state = 795;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public altWinOn(): AltWinOnContext {
        let localContext = new AltWinOnContext(this.context, this.state);
        this.enterRule(localContext, 32, GslParser.RULE_altWinOn);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 797;
            this.match(GslParser.ALTWINON);
            this.state = 798;
            this.match(GslParser.PLAYER_NODE);
            this.state = 799;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public anim(): AnimContext {
        let localContext = new AnimContext(this.context, this.state);
        this.enterRule(localContext, 34, GslParser.RULE_anim);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 801;
            this.match(GslParser.ANIM);
            this.state = 802;
            this.valueExpression();
            this.state = 803;
            this.match(GslParser.FOR);
            this.state = 804;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 805;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assert(): AssertContext {
        let localContext = new AssertContext(this.context, this.state);
        this.enterRule(localContext, 36, GslParser.RULE_assert);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 807;
            this.match(GslParser.ASSERT);
            this.state = 810;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                {
                this.state = 808;
                this.valueExpression();
                }
                break;
            case 2:
                {
                this.state = 809;
                this.stringExpression();
                }
                break;
            }
            this.state = 812;
            this.match(GslParser.OR_YELL);
            this.state = 813;
            this.stringExpression();
            this.state = 814;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attack(): AttackContext {
        let localContext = new AttackContext(this.context, this.state);
        this.enterRule(localContext, 38, GslParser.RULE_attack);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 816;
            this.match(GslParser.ATTACK);
            this.state = 817;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 818;
            this.match(GslParser.VS);
            this.state = 819;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 820;
            this.match(GslParser.TYPE);
            this.state = 821;
            this.valueExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bitget(): BitgetContext {
        let localContext = new BitgetContext(this.context, this.state);
        this.enterRule(localContext, 40, GslParser.RULE_bitget);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 823;
            this.match(GslParser.BITGET);
            this.state = 824;
            this.valueExpression();
            this.state = 825;
            this.match(GslParser.FROM);
            this.state = 826;
            this.valueExpression();
            this.state = 827;
            this.match(GslParser.TO);
            this.state = 828;
            this.valueExpression();
            this.state = 829;
            this.match(GslParser.FOR);
            this.state = 830;
            this.numberVariable();
            this.state = 831;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bitset(): BitsetContext {
        let localContext = new BitsetContext(this.context, this.state);
        this.enterRule(localContext, 42, GslParser.RULE_bitset);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 833;
            this.match(GslParser.BITSET);
            this.state = 834;
            this.valueExpression();
            this.state = 835;
            this.match(GslParser.FROM);
            this.state = 836;
            this.valueExpression();
            this.state = 837;
            this.match(GslParser.TO);
            this.state = 838;
            this.valueExpression();
            this.state = 839;
            this.match(GslParser.FOR);
            this.state = 840;
            this.numberVariable();
            this.state = 841;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public boldoff(): BoldoffContext {
        let localContext = new BoldoffContext(this.context, this.state);
        this.enterRule(localContext, 44, GslParser.RULE_boldoff);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 843;
            this.match(GslParser.BOLDOFF);
            this.state = 844;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 845;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public boldon(): BoldonContext {
        let localContext = new BoldonContext(this.context, this.state);
        this.enterRule(localContext, 46, GslParser.RULE_boldon);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 847;
            this.match(GslParser.BOLDON);
            this.state = 848;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 849;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public border(): BorderContext {
        let localContext = new BorderContext(this.context, this.state);
        this.enterRule(localContext, 48, GslParser.RULE_border);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 851;
            this.match(GslParser.BORDER);
            this.state = 852;
            this.valueExpression();
            this.state = 853;
            this.match(GslParser.FOR);
            this.state = 854;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 855;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bugReport(): BugReportContext {
        let localContext = new BugReportContext(this.context, this.state);
        this.enterRule(localContext, 50, GslParser.RULE_bugReport);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 857;
            this.match(GslParser.BUGREPORT);
            this.state = 858;
            _la = this.tokenStream.LA(1);
            if(!(_la === 261 || _la === 288)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 859;
            this.stringExpression();
            this.state = 860;
            this.stringExpression();
            this.state = 861;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public call(): CallContext {
        let localContext = new CallContext(this.context, this.state);
        this.enterRule(localContext, 52, GslParser.RULE_call);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 863;
            this.match(GslParser.CALL);
            this.state = 864;
            this.valueExpression();
            this.state = 865;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callPS(): CallPSContext {
        let localContext = new CallPSContext(this.context, this.state);
        this.enterRule(localContext, 54, GslParser.RULE_callPS);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 867;
            this.match(GslParser.CALLPS);
            this.state = 868;
            this.match(GslParser.PLAYER_NODE);
            this.state = 869;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callmatch(): CallmatchContext {
        let localContext = new CallmatchContext(this.context, this.state);
        this.enterRule(localContext, 56, GslParser.RULE_callmatch);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 871;
            this.match(GslParser.CALLMATCH);
            this.state = 872;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 259)) & ~0x1F) === 0 && ((1 << (_la - 259)) & 2281701377) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 873;
            this.stringExpression();
            this.state = 874;
            this.match(GslParser.IN);
            this.state = 875;
            this.valueExpression();
            this.state = 876;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public canDo(): CanDoContext {
        let localContext = new CanDoContext(this.context, this.state);
        this.enterRule(localContext, 58, GslParser.RULE_canDo);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 878;
            this.match(GslParser.CANDO);
            this.state = 879;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 880;
            this.match(GslParser.ACTION);
            this.state = 881;
            this.valueExpression();
            this.state = 882;
            this.match(GslParser.FOR);
            this.state = 883;
            this.numberVariable();
            this.state = 884;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public checkEffect(): CheckEffectContext {
        let localContext = new CheckEffectContext(this.context, this.state);
        this.enterRule(localContext, 60, GslParser.RULE_checkEffect);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 886;
            this.match(GslParser.CHECKEFFECT);
            this.state = 887;
            this.node();
            this.state = 888;
            this.match(GslParser.CODE);
            this.state = 889;
            this.valueExpression();
            this.state = 890;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public clear(): ClearContext {
        let localContext = new ClearContext(this.context, this.state);
        this.enterRule(localContext, 62, GslParser.RULE_clear);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 892;
            this.match(GslParser.CLEAR);
            this.state = 896;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                {
                this.state = 893;
                this.nodeFieldRef();
                }
                break;
            case 2:
                {
                this.state = 894;
                this.numberVariable();
                }
                break;
            case 3:
                {
                this.state = 895;
                this.stringVariable();
                }
                break;
            }
            this.state = 898;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public clearMenu(): ClearMenuContext {
        let localContext = new ClearMenuContext(this.context, this.state);
        this.enterRule(localContext, 64, GslParser.RULE_clearMenu);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 900;
            this.match(GslParser.CLEARMENU);
            this.state = 901;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public clearTable(): ClearTableContext {
        let localContext = new ClearTableContext(this.context, this.state);
        this.enterRule(localContext, 66, GslParser.RULE_clearTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 903;
            this.match(GslParser.CLEARTABLE);
            this.state = 904;
            this.valueExpression();
            this.state = 905;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public closeLocker(): CloseLockerContext {
        let localContext = new CloseLockerContext(this.context, this.state);
        this.enterRule(localContext, 68, GslParser.RULE_closeLocker);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 907;
            this.match(GslParser.CLOSELOCKER);
            this.state = 908;
            this.match(GslParser.PLAYER_NODE);
            this.state = 909;
            this.match(GslParser.USING);
            this.state = 910;
            this.match(GslParser.OBJECT_NODE);
            this.state = 911;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public cmgr(): CmgrContext {
        let localContext = new CmgrContext(this.context, this.state);
        this.enterRule(localContext, 70, GslParser.RULE_cmgr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 913;
            this.match(GslParser.CMGR);
            this.state = 914;
            this.match(GslParser.PLAYER_NODE);
            this.state = 915;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compareItemCreature(): CompareItemCreatureContext {
        let localContext = new CompareItemCreatureContext(this.context, this.state);
        this.enterRule(localContext, 72, GslParser.RULE_compareItemCreature);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 917;
            this.match(GslParser.COMPAREITEM);
            this.state = 918;
            this.match(GslParser.CREATURE_NODE);
            this.state = 919;
            this.match(GslParser.TO);
            this.state = 920;
            this.match(GslParser.CREATURE_NODE);
            this.state = 921;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compareItemEvent(): CompareItemEventContext {
        let localContext = new CompareItemEventContext(this.context, this.state);
        this.enterRule(localContext, 74, GslParser.RULE_compareItemEvent);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 923;
            this.match(GslParser.COMPAREITEM);
            this.state = 924;
            this.match(GslParser.EVENT_NODE);
            this.state = 925;
            this.match(GslParser.TO);
            this.state = 926;
            this.match(GslParser.EVENT_NODE);
            this.state = 927;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compareItemObject(): CompareItemObjectContext {
        let localContext = new CompareItemObjectContext(this.context, this.state);
        this.enterRule(localContext, 76, GslParser.RULE_compareItemObject);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 929;
            this.match(GslParser.COMPAREITEM);
            this.state = 930;
            this.match(GslParser.OBJECT_NODE);
            this.state = 931;
            this.match(GslParser.TO);
            this.state = 932;
            this.match(GslParser.OBJECT_NODE);
            this.state = 933;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public contribute(): ContributeContext {
        let localContext = new ContributeContext(this.context, this.state);
        this.enterRule(localContext, 78, GslParser.RULE_contribute);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 935;
            this.match(GslParser.CONTRIBUTE);
            this.state = 936;
            this.match(GslParser.PLAYER_NODE);
            this.state = 937;
            this.match(GslParser.TOWARDS);
            this.state = 938;
            this.match(GslParser.CREATURE_NODE);
            this.state = 939;
            this.match(GslParser.BY);
            this.state = 940;
            this.valueExpression();
            this.state = 941;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public copyCreature(): CopyCreatureContext {
        let localContext = new CopyCreatureContext(this.context, this.state);
        this.enterRule(localContext, 80, GslParser.RULE_copyCreature);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 943;
            this.match(GslParser.COPY);
            this.state = 944;
            this.match(GslParser.CREATURE_NODE);
            this.state = 945;
            this.match(GslParser.FOR);
            this.state = 946;
            this.match(GslParser.CREATURE_NODE);
            this.state = 947;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public copyEvent(): CopyEventContext {
        let localContext = new CopyEventContext(this.context, this.state);
        this.enterRule(localContext, 82, GslParser.RULE_copyEvent);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 949;
            this.match(GslParser.COPY);
            this.state = 950;
            this.match(GslParser.EVENT_NODE);
            this.state = 951;
            this.match(GslParser.FOR);
            this.state = 952;
            this.match(GslParser.EVENT_NODE);
            this.state = 953;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public copyObject(): CopyObjectContext {
        let localContext = new CopyObjectContext(this.context, this.state);
        this.enterRule(localContext, 84, GslParser.RULE_copyObject);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 955;
            this.match(GslParser.COPY);
            this.state = 956;
            this.match(GslParser.OBJECT_NODE);
            this.state = 957;
            this.match(GslParser.FOR);
            this.state = 958;
            this.match(GslParser.OBJECT_NODE);
            this.state = 959;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public create(): CreateContext {
        let localContext = new CreateContext(this.context, this.state);
        this.enterRule(localContext, 86, GslParser.RULE_create);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 961;
            this.match(GslParser.CREATE);
            this.state = 962;
            this.valueExpression();
            this.state = 963;
            this.match(GslParser.MODE);
            this.state = 964;
            this.valueExpression();
            this.state = 965;
            this.match(GslParser.FOR);
            this.state = 966;
            this.node();
            this.state = 967;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createItem(): CreateItemContext {
        let localContext = new CreateItemContext(this.context, this.state);
        this.enterRule(localContext, 88, GslParser.RULE_createItem);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 969;
            this.match(GslParser.CREATEITEM);
            this.state = 970;
            this.valueExpression();
            this.state = 971;
            this.match(GslParser.FOR);
            this.state = 972;
            this.match(GslParser.OBJECT_NODE);
            this.state = 973;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createRoom(): CreateRoomContext {
        let localContext = new CreateRoomContext(this.context, this.state);
        this.enterRule(localContext, 90, GslParser.RULE_createRoom);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 975;
            this.match(GslParser.CREATEROOM);
            this.state = 976;
            this.valueExpression();
            this.state = 977;
            this.match(GslParser.FOR);
            this.state = 978;
            this.match(GslParser.ROOM_NODE);
            this.state = 979;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createTable(): CreateTableContext {
        let localContext = new CreateTableContext(this.context, this.state);
        this.enterRule(localContext, 92, GslParser.RULE_createTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 981;
            this.match(GslParser.CREATETABLE);
            this.state = 982;
            this.match(GslParser.TYPE);
            this.state = 983;
            this.valueExpression();
            this.state = 984;
            this.match(GslParser.SIZE);
            this.state = 985;
            this.valueExpression();
            this.state = 986;
            this.valueExpression();
            this.state = 987;
            this.valueExpression();
            this.state = 988;
            this.match(GslParser.FOR);
            this.state = 993;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GslParser.V_REGISTER:
                {
                this.state = 989;
                this.match(GslParser.V_REGISTER);
                }
                break;
            case GslParser.A_REGISTER:
                {
                this.state = 990;
                this.match(GslParser.A_REGISTER);
                }
                break;
            case GslParser.B_REGISTER:
                {
                this.state = 991;
                this.match(GslParser.B_REGISTER);
                }
                break;
            case GslParser.PLAYER_NODE:
            case GslParser.ROOM_NODE:
            case GslParser.CREATURE_NODE:
            case GslParser.OBJECT_NODE:
            case GslParser.EVENT_NODE:
                {
                this.state = 992;
                this.nodeFieldRef();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 995;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createText(): CreateTextContext {
        let localContext = new CreateTextContext(this.context, this.state);
        this.enterRule(localContext, 94, GslParser.RULE_createText);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 997;
            this.match(GslParser.CREATETEXT);
            this.state = 998;
            this.stringExpression();
            this.state = 999;
            this.match(GslParser.FOR);
            this.state = 1000;
            this.numberVariable();
            this.state = 1001;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public critical(): CriticalContext {
        let localContext = new CriticalContext(this.context, this.state);
        this.enterRule(localContext, 96, GslParser.RULE_critical);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1003;
            this.match(GslParser.CRITICAL);
            this.state = 1004;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1005;
            this.match(GslParser.TABLE);
            this.state = 1006;
            this.stringExpression();
            this.state = 1007;
            this.match(GslParser.TYPE);
            this.state = 1008;
            this.valueExpression();
            this.state = 1009;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public decodeAttack(): DecodeAttackContext {
        let localContext = new DecodeAttackContext(this.context, this.state);
        this.enterRule(localContext, 98, GslParser.RULE_decodeAttack);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1011;
            this.match(GslParser.DECODEATTACK);
            this.state = 1012;
            this.match(GslParser.CREATURE_NODE);
            this.state = 1013;
            this.match(GslParser.FIELD);
            this.state = 1014;
            this.fieldName();
            this.state = 1015;
            this.match(GslParser.FOR);
            this.state = 1016;
            this.numberVariable();
            this.state = 1017;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deleteTable(): DeleteTableContext {
        let localContext = new DeleteTableContext(this.context, this.state);
        this.enterRule(localContext, 100, GslParser.RULE_deleteTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1019;
            this.match(GslParser.DELETETABLE);
            this.state = 1020;
            this.valueExpression();
            this.state = 1021;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deploy(): DeployContext {
        let localContext = new DeployContext(this.context, this.state);
        this.enterRule(localContext, 102, GslParser.RULE_deploy);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1023;
            this.match(GslParser.DEPLOY);
            this.state = 1024;
            _la = this.tokenStream.LA(1);
            if(!(_la === 219 || _la === 244 || _la === 301 || _la === 306)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1027;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                {
                this.state = 1025;
                this.stringExpression();
                }
                break;
            case 2:
                {
                this.state = 1026;
                this.valueExpression();
                }
                break;
            }
            this.state = 1029;
            this.match(GslParser.CALLBACK);
            this.state = 1030;
            this.valueExpression();
            this.state = 1031;
            this.match(GslParser.REPORT_TO);
            this.state = 1032;
            this.valueExpression();
            this.state = 1033;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dirAdd(): DirAddContext {
        let localContext = new DirAddContext(this.context, this.state);
        this.enterRule(localContext, 104, GslParser.RULE_dirAdd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1035;
            this.match(GslParser.DIRADD);
            this.state = 1036;
            this.valueExpression();
            this.state = 1037;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dirSend(): DirSendContext {
        let localContext = new DirSendContext(this.context, this.state);
        this.enterRule(localContext, 106, GslParser.RULE_dirSend);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1039;
            this.match(GslParser.DIRSEND);
            this.state = 1040;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1041;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public doCreate(): DoCreateContext {
        let localContext = new DoCreateContext(this.context, this.state);
        this.enterRule(localContext, 108, GslParser.RULE_doCreate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1043;
            this.match(GslParser.DOCREATE);
            this.state = 1044;
            this.stringExpression();
            this.state = 1045;
            this.match(GslParser.FOR);
            this.state = 1046;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1047;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public doLook(): DoLookContext {
        let localContext = new DoLookContext(this.context, this.state);
        this.enterRule(localContext, 110, GslParser.RULE_doLook);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1049;
            this.match(GslParser.DOLOOK);
            this.state = 1050;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public drop(): DropContext {
        let localContext = new DropContext(this.context, this.state);
        this.enterRule(localContext, 112, GslParser.RULE_drop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1052;
            this.match(GslParser.DROP);
            this.state = 1053;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1054;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public encodeAttack(): EncodeAttackContext {
        let localContext = new EncodeAttackContext(this.context, this.state);
        this.enterRule(localContext, 114, GslParser.RULE_encodeAttack);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1056;
            this.match(GslParser.ENCODEATTACK);
            this.state = 1057;
            this.match(GslParser.CREATURE_NODE);
            this.state = 1058;
            this.match(GslParser.FIELD);
            this.state = 1059;
            this.fieldName();
            this.state = 1060;
            this.match(GslParser.TO);
            this.state = 1061;
            this.valueExpression();
            this.state = 1062;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public end2Effect(): End2EffectContext {
        let localContext = new End2EffectContext(this.context, this.state);
        this.enterRule(localContext, 116, GslParser.RULE_end2Effect);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1064;
            this.match(GslParser.END2EFFECT);
            this.state = 1065;
            this.match(GslParser.CODE);
            this.state = 1066;
            this.valueExpression();
            this.state = 1067;
            this.match(GslParser.VALUE2);
            this.state = 1068;
            this.valueExpression();
            this.state = 1069;
            this.match(GslParser.FROM);
            this.state = 1070;
            this.node();
            this.state = 1071;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public endEffect(): EndEffectContext {
        let localContext = new EndEffectContext(this.context, this.state);
        this.enterRule(localContext, 118, GslParser.RULE_endEffect);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1073;
            this.match(GslParser.ENDEFFECT);
            this.state = 1074;
            this.match(GslParser.CODE);
            this.state = 1075;
            this.valueExpression();
            this.state = 1076;
            this.match(GslParser.FROM);
            this.state = 1077;
            this.node();
            this.state = 1078;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public endNEffect(): EndNEffectContext {
        let localContext = new EndNEffectContext(this.context, this.state);
        this.enterRule(localContext, 120, GslParser.RULE_endNEffect);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1080;
            this.match(GslParser.ENDNEFFECT);
            this.state = 1081;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1082;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expand(): ExpandContext {
        let localContext = new ExpandContext(this.context, this.state);
        this.enterRule(localContext, 122, GslParser.RULE_expand);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1084;
            this.match(GslParser.EXPAND);
            this.state = 1085;
            _la = this.tokenStream.LA(1);
            if(!(_la === 13 || _la === 14)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1086;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fastpush(): FastpushContext {
        let localContext = new FastpushContext(this.context, this.state);
        this.enterRule(localContext, 124, GslParser.RULE_fastpush);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1088;
            this.match(GslParser.FASTPUSH);
            this.state = 1089;
            this.eol();
            this.state = 1091;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 1090;
                    this.statement();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1093;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1095;
            this.match(GslParser.FASTPOP);
            this.state = 1096;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public feMisc(): FeMiscContext {
        let localContext = new FeMiscContext(this.context, this.state);
        this.enterRule(localContext, 126, GslParser.RULE_feMisc);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1098;
            this.match(GslParser.FEMISC);
            this.state = 1099;
            this.valueExpression();
            this.state = 1100;
            this.match(GslParser.FOR);
            this.state = 1101;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1102;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public feUpdate(): FeUpdateContext {
        let localContext = new FeUpdateContext(this.context, this.state);
        this.enterRule(localContext, 128, GslParser.RULE_feUpdate);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1104;
            this.match(GslParser.FEUPDATE);
            this.state = 1105;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1106;
            _la = this.tokenStream.LA(1);
            if(!(_la === 215 || ((((_la - 270)) & ~0x1F) === 0 && ((1 << (_la - 270)) & 1208018441) !== 0) || ((((_la - 304)) & ~0x1F) === 0 && ((1 << (_la - 304)) & 525315) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1107;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fillTable(): FillTableContext {
        let localContext = new FillTableContext(this.context, this.state);
        this.enterRule(localContext, 130, GslParser.RULE_fillTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1109;
            this.match(GslParser.FILLTABLE);
            this.state = 1110;
            this.valueExpression();
            this.state = 1111;
            this.match(GslParser.WITH);
            this.state = 1114;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
            case 1:
                {
                this.state = 1112;
                this.valueExpression();
                }
                break;
            case 2:
                {
                this.state = 1113;
                this.stringExpression();
                }
                break;
            }
            this.state = 1116;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gather(): GatherContext {
        let localContext = new GatherContext(this.context, this.state);
        this.enterRule(localContext, 132, GslParser.RULE_gather);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1118;
            this.match(GslParser.GATHER);
            this.state = 1119;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 15) !== 0) || ((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & 121) !== 0) || _la === 252)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1120;
            this.node();
            this.state = 1121;
            this.match(GslParser.FOR);
            this.state = 1122;
            this.node();
            this.state = 1123;
            _la = this.tokenStream.LA(1);
            if(!(_la === 251 || _la === 264 || _la === 292 || _la === 299)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1124;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gatherFirst(): GatherFirstContext {
        let localContext = new GatherFirstContext(this.context, this.state);
        this.enterRule(localContext, 134, GslParser.RULE_gatherFirst);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1126;
            this.match(GslParser.GATHERFIRST);
            this.state = 1127;
            this.node();
            this.state = 1128;
            this.match(GslParser.FOR);
            this.state = 1129;
            this.node();
            this.state = 1130;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gatherFirstRoom(): GatherFirstRoomContext {
        let localContext = new GatherFirstRoomContext(this.context, this.state);
        this.enterRule(localContext, 136, GslParser.RULE_gatherFirstRoom);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1132;
            this.match(GslParser.GATHERFIRSTROOM);
            this.state = 1133;
            this.valueExpression();
            this.state = 1134;
            this.match(GslParser.FOR);
            this.state = 1135;
            this.match(GslParser.ROOM_NODE);
            this.state = 1136;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gatherNext(): GatherNextContext {
        let localContext = new GatherNextContext(this.context, this.state);
        this.enterRule(localContext, 138, GslParser.RULE_gatherNext);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1138;
            this.match(GslParser.GATHERNEXT);
            this.state = 1139;
            this.node();
            this.state = 1140;
            this.match(GslParser.FOR);
            this.state = 1141;
            this.node();
            this.state = 1142;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gatherNextRoom(): GatherNextRoomContext {
        let localContext = new GatherNextRoomContext(this.context, this.state);
        this.enterRule(localContext, 140, GslParser.RULE_gatherNextRoom);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1144;
            this.match(GslParser.GATHERNEXTROOM);
            this.state = 1145;
            this.match(GslParser.ROOM_NODE);
            this.state = 1146;
            this.match(GslParser.FOR);
            this.state = 1147;
            this.match(GslParser.ROOM_NODE);
            this.state = 1148;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gatherPlayer(): GatherPlayerContext {
        let localContext = new GatherPlayerContext(this.context, this.state);
        this.enterRule(localContext, 142, GslParser.RULE_gatherPlayer);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1150;
            this.match(GslParser.GATHERPLAYER);
            this.state = 1151;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1152;
            this.match(GslParser.FOR);
            this.state = 1153;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1154;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getContributors(): GetContributorsContext {
        let localContext = new GetContributorsContext(this.context, this.state);
        this.enterRule(localContext, 144, GslParser.RULE_getContributors);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1156;
            this.match(GslParser.GETCONTRIBUTORS);
            this.state = 1157;
            this.match(GslParser.CREATURE_NODE);
            this.state = 1158;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getIndexOf(): GetIndexOfContext {
        let localContext = new GetIndexOfContext(this.context, this.state);
        this.enterRule(localContext, 146, GslParser.RULE_getIndexOf);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1160;
            this.match(GslParser.GETINDEXOF);
            this.state = 1161;
            this.stringExpression();
            this.state = 1162;
            this.match(GslParser.FOR);
            this.state = 1163;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1164;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getMax(): GetMaxContext {
        let localContext = new GetMaxContext(this.context, this.state);
        this.enterRule(localContext, 148, GslParser.RULE_getMax);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1166;
            this.match(GslParser.GETMAX);
            this.state = 1172;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GslParser.V_REGISTER:
            case GslParser.A_REGISTER:
            case GslParser.B_REGISTER:
            case GslParser.SYS_BREAK:
            case GslParser.SYS_CALLBACK:
            case GslParser.SYS_CALLEDBY:
            case GslParser.SYS_DESCMODE:
            case GslParser.SYS_ERROR:
            case GslParser.SYS_INTTABLE:
            case GslParser.SYS_LOADINGFROMSAVE:
            case GslParser.SYS_MAXLOOPS:
            case GslParser.SYS_MAXROOMCREATES:
            case GslParser.SYS_MAXTEXTCHANGES:
            case GslParser.SYS_MAXUOBJS:
            case GslParser.SYS_STIME:
            case GslParser.SYS_STRTABLE:
            case GslParser.SYS_THISSCRIPT:
            case GslParser.SYS_TIME:
            case GslParser.SYS_USERS:
            case GslParser.CARET_OPERATOR:
            case GslParser.PLAYER_NODE:
            case GslParser.ROOM_NODE:
            case GslParser.CREATURE_NODE:
            case GslParser.OBJECT_NODE:
            case GslParser.EVENT_NODE:
            case GslParser.TABLE:
            case GslParser.NUMBER:
            case GslParser.LPARAN:
            case GslParser.MINUS:
                {
                this.state = 1167;
                this.valueExpression();
                }
                break;
            case GslParser.ENCUM:
                {
                this.state = 1168;
                this.match(GslParser.ENCUM);
                }
                break;
            case GslParser.BHPT:
                {
                this.state = 1169;
                this.match(GslParser.BHPT);
                }
                break;
            case GslParser.POWER:
                {
                this.state = 1170;
                this.match(GslParser.POWER);
                }
                break;
            case GslParser.OBJECTS:
                {
                this.state = 1171;
                this.match(GslParser.OBJECTS);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1174;
            this.match(GslParser.OF);
            this.state = 1175;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 47)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1176;
            this.match(GslParser.FOR);
            this.state = 1177;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1178;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getNameOf(): GetNameOfContext {
        let localContext = new GetNameOfContext(this.context, this.state);
        this.enterRule(localContext, 150, GslParser.RULE_getNameOf);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1180;
            this.match(GslParser.GETNAMEOF);
            this.state = 1181;
            this.valueExpression();
            this.state = 1182;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getPs(): GetPsContext {
        let localContext = new GetPsContext(this.context, this.state);
        this.enterRule(localContext, 152, GslParser.RULE_getPs);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1184;
            this.match(GslParser.GETPS);
            this.state = 1185;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1186;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getTable(): GetTableContext {
        let localContext = new GetTableContext(this.context, this.state);
        this.enterRule(localContext, 154, GslParser.RULE_getTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1188;
            this.match(GslParser.GETTABLE);
            this.state = 1189;
            this.valueExpression();
            this.state = 1190;
            this.match(GslParser.AT);
            this.state = 1191;
            this.valueExpression();
            this.state = 1192;
            this.valueExpression();
            this.state = 1193;
            this.valueExpression();
            this.state = 1194;
            this.match(GslParser.FOR);
            this.state = 1197;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
            case 1:
                {
                this.state = 1195;
                this.numberVariable();
                }
                break;
            case 2:
                {
                this.state = 1196;
                this.stringVariable();
                }
                break;
            }
            this.state = 1199;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getTextCommand(): GetTextCommandContext {
        let localContext = new GetTextCommandContext(this.context, this.state);
        this.enterRule(localContext, 156, GslParser.RULE_getTextCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1201;
            this.match(GslParser.GETTEXT);
            this.state = 1202;
            this.valueExpression();
            this.state = 1203;
            this.match(GslParser.FOR);
            {
            this.state = 1204;
            this.stringVariable();
            }
            this.state = 1205;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getWatch(): GetWatchContext {
        let localContext = new GetWatchContext(this.context, this.state);
        this.enterRule(localContext, 158, GslParser.RULE_getWatch);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1207;
            this.match(GslParser.GETWATCH);
            this.state = 1208;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1209;
            this.match(GslParser.FOR);
            this.state = 1210;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1211;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public glue(): GlueContext {
        let localContext = new GlueContext(this.context, this.state);
        this.enterRule(localContext, 160, GslParser.RULE_glue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1213;
            this.match(GslParser.GLUE);
            this.state = 1214;
            this.valueExpression();
            this.state = 1215;
            this.match(GslParser.TO);
            this.state = 1216;
            this.node();
            this.state = 1217;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public goto(): GotoContext {
        let localContext = new GotoContext(this.context, this.state);
        this.enterRule(localContext, 162, GslParser.RULE_goto);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1219;
            this.match(GslParser.GOTO);
            this.state = 1220;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hash1(): Hash1Context {
        let localContext = new Hash1Context(this.context, this.state);
        this.enterRule(localContext, 164, GslParser.RULE_hash1);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1222;
            this.match(GslParser.HASH1);
            this.state = 1223;
            this.stringExpression();
            this.state = 1224;
            this.match(GslParser.FOR);
            this.state = 1225;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1226;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hash2(): Hash2Context {
        let localContext = new Hash2Context(this.context, this.state);
        this.enterRule(localContext, 166, GslParser.RULE_hash2);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1228;
            this.match(GslParser.HASH2);
            this.state = 1229;
            this.stringExpression();
            this.state = 1230;
            this.match(GslParser.FOR);
            this.state = 1231;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1232;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public heal(): HealContext {
        let localContext = new HealContext(this.context, this.state);
        this.enterRule(localContext, 168, GslParser.RULE_heal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1234;
            this.match(GslParser.HEAL);
            this.state = 1235;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1236;
            this.match(GslParser.AREA);
            this.state = 1237;
            this.valueExpression();
            this.state = 1238;
            this.match(GslParser.BY);
            this.state = 1239;
            this.valueExpression();
            this.state = 1240;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public healP(): HealPContext {
        let localContext = new HealPContext(this.context, this.state);
        this.enterRule(localContext, 170, GslParser.RULE_healP);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1242;
            this.match(GslParser.HEALP);
            this.state = 1243;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1244;
            this.match(GslParser.AREA);
            this.state = 1245;
            this.valueExpression();
            this.state = 1246;
            this.match(GslParser.BY);
            this.state = 1247;
            this.valueExpression();
            this.state = 1248;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hurt(): HurtContext {
        let localContext = new HurtContext(this.context, this.state);
        this.enterRule(localContext, 172, GslParser.RULE_hurt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1250;
            this.match(GslParser.HURT);
            this.state = 1251;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1252;
            this.match(GslParser.HITS);
            this.state = 1253;
            this.valueExpression();
            this.state = 1254;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hush(): HushContext {
        let localContext = new HushContext(this.context, this.state);
        this.enterRule(localContext, 174, GslParser.RULE_hush);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1256;
            this.match(GslParser.HUSH);
            this.state = 1257;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1258;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inPhrase(): InPhraseContext {
        let localContext = new InPhraseContext(this.context, this.state);
        this.enterRule(localContext, 176, GslParser.RULE_inPhrase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1260;
            this.match(GslParser.INPHRASE);
            this.state = 1261;
            this.valueExpression();
            this.state = 1262;
            this.match(GslParser.FOR);
            this.state = 1263;
            this.stringVariable();
            this.state = 1264;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public index(): IndexContext {
        let localContext = new IndexContext(this.context, this.state);
        this.enterRule(localContext, 178, GslParser.RULE_index);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1266;
            this.match(GslParser.INDEX);
            this.state = 1267;
            this.valueExpression();
            this.state = 1268;
            this.match(GslParser.FOR);
            this.state = 1269;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 47)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1270;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public infoItem(): InfoItemContext {
        let localContext = new InfoItemContext(this.context, this.state);
        this.enterRule(localContext, 180, GslParser.RULE_infoItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1272;
            this.match(GslParser.INFOITEM);
            this.state = 1273;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1274;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public infoProfile(): InfoProfileContext {
        let localContext = new InfoProfileContext(this.context, this.state);
        this.enterRule(localContext, 182, GslParser.RULE_infoProfile);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1276;
            this.match(GslParser.INFO);
            this.state = 1277;
            this.match(GslParser.PROFILE);
            this.state = 1280;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                {
                this.state = 1278;
                this.stringExpression();
                }
                break;
            case 2:
                {
                this.state = 1279;
                this.valueExpression();
                }
                break;
            }
            this.state = 1282;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public infoScript(): InfoScriptContext {
        let localContext = new InfoScriptContext(this.context, this.state);
        this.enterRule(localContext, 184, GslParser.RULE_infoScript);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1284;
            this.match(GslParser.INFO);
            this.state = 1285;
            this.match(GslParser.SCRIPT);
            this.state = 1286;
            this.valueExpression();
            this.state = 1287;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public infoTable(): InfoTableContext {
        let localContext = new InfoTableContext(this.context, this.state);
        this.enterRule(localContext, 186, GslParser.RULE_infoTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1289;
            this.match(GslParser.INFO);
            this.state = 1290;
            this.match(GslParser.TABLE);
            this.state = 1291;
            this.valueExpression();
            this.state = 1292;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public infoVarField(): InfoVarFieldContext {
        let localContext = new InfoVarFieldContext(this.context, this.state);
        this.enterRule(localContext, 188, GslParser.RULE_infoVarField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1294;
            this.match(GslParser.INFO);
            this.state = 1295;
            this.match(GslParser.VARFIELD);
            this.state = 1298;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                {
                this.state = 1296;
                this.stringExpression();
                }
                break;
            case 2:
                {
                this.state = 1297;
                this.valueExpression();
                }
                break;
            }
            this.state = 1300;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public infoVerb(): InfoVerbContext {
        let localContext = new InfoVerbContext(this.context, this.state);
        this.enterRule(localContext, 190, GslParser.RULE_infoVerb);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1302;
            this.match(GslParser.INFO);
            this.state = 1303;
            this.match(GslParser.VERB);
            this.state = 1306;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
            case 1:
                {
                this.state = 1304;
                this.stringExpression();
                }
                break;
            case 2:
                {
                this.state = 1305;
                this.valueExpression();
                }
                break;
            }
            this.state = 1308;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public injure(): InjureContext {
        let localContext = new InjureContext(this.context, this.state);
        this.enterRule(localContext, 192, GslParser.RULE_injure);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1310;
            this.match(GslParser.INJURE);
            this.state = 1311;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1312;
            this.match(GslParser.AREA);
            this.state = 1313;
            this.valueExpression();
            this.state = 1314;
            this.match(GslParser.BY);
            this.state = 1315;
            this.valueExpression();
            this.state = 1316;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public isInjured(): IsInjuredContext {
        let localContext = new IsInjuredContext(this.context, this.state);
        this.enterRule(localContext, 194, GslParser.RULE_isInjured);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1318;
            this.match(GslParser.ISINJURED);
            this.state = 1319;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1320;
            this.match(GslParser.AREA);
            this.state = 1321;
            this.valueExpression();
            this.state = 1322;
            this.match(GslParser.FOR);
            this.state = 1323;
            this.numberVariable();
            this.state = 1324;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public isNameFree(): IsNameFreeContext {
        let localContext = new IsNameFreeContext(this.context, this.state);
        this.enterRule(localContext, 196, GslParser.RULE_isNameFree);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1326;
            this.match(GslParser.ISNAMEFREE);
            this.state = 1327;
            this.stringExpression();
            this.state = 1328;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public itemSnapshot(): ItemSnapshotContext {
        let localContext = new ItemSnapshotContext(this.context, this.state);
        this.enterRule(localContext, 198, GslParser.RULE_itemSnapshot);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1330;
            this.match(GslParser.ITEMSNAPSHOT);
            this.state = 1331;
            this.match(GslParser.OBJECT_NODE);
            this.state = 1332;
            this.match(GslParser.FOR);
            this.state = 1333;
            this.numberVariable();
            this.state = 1334;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public kill(): KillContext {
        let localContext = new KillContext(this.context, this.state);
        this.enterRule(localContext, 200, GslParser.RULE_kill);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1336;
            this.match(GslParser.KILL);
            this.state = 1337;
            this.node();
            this.state = 1338;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public killAllNp(): KillAllNpContext {
        let localContext = new KillAllNpContext(this.context, this.state);
        this.enterRule(localContext, 202, GslParser.RULE_killAllNp);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1340;
            this.match(GslParser.KILLALLNP);
            this.state = 1341;
            this.node();
            this.state = 1342;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public label(): LabelContext {
        let localContext = new LabelContext(this.context, this.state);
        this.enterRule(localContext, 204, GslParser.RULE_label);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1344;
            this.match(GslParser.LABEL);
            this.state = 1345;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public launch(): LaunchContext {
        let localContext = new LaunchContext(this.context, this.state);
        this.enterRule(localContext, 206, GslParser.RULE_launch);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1347;
            this.match(GslParser.LAUNCH);
            this.state = 1348;
            _la = this.tokenStream.LA(1);
            if(!(_la === 256 || _la === 257 || _la === 291)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1349;
            this.valueExpression();
            this.state = 1350;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public launchURL(): LaunchURLContext {
        let localContext = new LaunchURLContext(this.context, this.state);
        this.enterRule(localContext, 208, GslParser.RULE_launchURL);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1352;
            this.match(GslParser.LAUNCHURL);
            this.state = 1353;
            _la = this.tokenStream.LA(1);
            if(!(_la === 254 || _la === 321)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1354;
            this.stringExpression();
            this.state = 1355;
            this.match(GslParser.FOR);
            this.state = 1356;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1357;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public load(): LoadContext {
        let localContext = new LoadContext(this.context, this.state);
        this.enterRule(localContext, 210, GslParser.RULE_load);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1359;
            this.match(GslParser.LOAD);
            this.state = 1360;
            this.valueExpression();
            this.state = 1361;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loadCharData(): LoadCharDataContext {
        let localContext = new LoadCharDataContext(this.context, this.state);
        this.enterRule(localContext, 212, GslParser.RULE_loadCharData);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1363;
            this.match(GslParser.LOADCHARDATA);
            this.state = 1364;
            _la = this.tokenStream.LA(1);
            if(!(_la === 89 || _la === 162 || _la === 350)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1365;
            this.match(GslParser.FOR);
            this.state = 1366;
            this.valueExpression();
            this.state = 1367;
            this.match(GslParser.TO);
            this.state = 1368;
            this.match(GslParser.OBJECT_NODE);
            this.state = 1369;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logMsg(): LogMsgContext {
        let localContext = new LogMsgContext(this.context, this.state);
        this.enterRule(localContext, 214, GslParser.RULE_logMsg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1371;
            this.match(GslParser.LOGMSG);
            this.state = 1372;
            this.stringExpression();
            this.state = 1373;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logStart(): LogStartContext {
        let localContext = new LogStartContext(this.context, this.state);
        this.enterRule(localContext, 216, GslParser.RULE_logStart);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1375;
            this.match(GslParser.LOG);
            this.state = 1376;
            this.match(GslParser.START);
            this.state = 1377;
            this.stringExpression();
            this.state = 1378;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logSubmit(): LogSubmitContext {
        let localContext = new LogSubmitContext(this.context, this.state);
        this.enterRule(localContext, 218, GslParser.RULE_logSubmit);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1380;
            this.match(GslParser.LOG);
            this.state = 1381;
            this.match(GslParser.SUBMIT);
            this.state = 1382;
            this.stringExpression();
            this.state = 1383;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logTargetAccount(): LogTargetAccountContext {
        let localContext = new LogTargetAccountContext(this.context, this.state);
        this.enterRule(localContext, 220, GslParser.RULE_logTargetAccount);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1385;
            this.match(GslParser.LOG);
            this.state = 1386;
            this.match(GslParser.TARGET_ACCOUNT);
            this.state = 1387;
            this.stringExpression();
            this.state = 1388;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logTargetIndex(): LogTargetIndexContext {
        let localContext = new LogTargetIndexContext(this.context, this.state);
        this.enterRule(localContext, 222, GslParser.RULE_logTargetIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1390;
            this.match(GslParser.LOG);
            this.state = 1391;
            this.match(GslParser.TARGET_INDEX);
            this.state = 1392;
            this.stringExpression();
            this.state = 1393;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logTargetName(): LogTargetNameContext {
        let localContext = new LogTargetNameContext(this.context, this.state);
        this.enterRule(localContext, 224, GslParser.RULE_logTargetName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1395;
            this.match(GslParser.LOG);
            this.state = 1396;
            this.match(GslParser.TARGET_NAME);
            this.state = 1397;
            this.stringExpression();
            this.state = 1398;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logTargetOther(): LogTargetOtherContext {
        let localContext = new LogTargetOtherContext(this.context, this.state);
        this.enterRule(localContext, 226, GslParser.RULE_logTargetOther);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1400;
            this.match(GslParser.LOG);
            this.state = 1401;
            this.match(GslParser.TARGET_OTHER);
            this.state = 1402;
            this.match(GslParser.STRING);
            this.state = 1403;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logTargetUid(): LogTargetUidContext {
        let localContext = new LogTargetUidContext(this.context, this.state);
        this.enterRule(localContext, 228, GslParser.RULE_logTargetUid);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1405;
            this.match(GslParser.LOG);
            this.state = 1406;
            this.match(GslParser.TARGET_UID);
            this.state = 1407;
            this.stringExpression();
            this.state = 1408;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logText(): LogTextContext {
        let localContext = new LogTextContext(this.context, this.state);
        this.enterRule(localContext, 230, GslParser.RULE_logText);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1410;
            this.match(GslParser.LOG);
            this.state = 1411;
            this.match(GslParser.TEXT);
            this.state = 1412;
            this.stringExpression();
            this.state = 1413;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logToIndex(): LogToIndexContext {
        let localContext = new LogToIndexContext(this.context, this.state);
        this.enterRule(localContext, 232, GslParser.RULE_logToIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1415;
            this.match(GslParser.LOGTOINDEX);
            this.state = 1416;
            this.valueExpression();
            this.state = 1417;
            this.match(GslParser.CODE);
            this.state = 1418;
            this.valueExpression();
            this.state = 1419;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logto(): LogtoContext {
        let localContext = new LogtoContext(this.context, this.state);
        this.enterRule(localContext, 234, GslParser.RULE_logto);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1421;
            this.match(GslParser.LOGTO);
            this.state = 1422;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1423;
            this.match(GslParser.CODE);
            this.state = 1424;
            this.valueExpression();
            this.state = 1425;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lookRoom(): LookRoomContext {
        let localContext = new LookRoomContext(this.context, this.state);
        this.enterRule(localContext, 236, GslParser.RULE_lookRoom);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1427;
            this.match(GslParser.LOOKROOM);
            this.state = 1428;
            this.match(GslParser.ROOM_NODE);
            this.state = 1429;
            this.match(GslParser.FOR);
            this.state = 1430;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1431;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lowercase(): LowercaseContext {
        let localContext = new LowercaseContext(this.context, this.state);
        this.enterRule(localContext, 238, GslParser.RULE_lowercase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1433;
            this.match(GslParser.LOWERCASE);
            this.state = 1434;
            this.stringVariable();
            this.state = 1435;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchMarker(): MatchMarkerContext {
        let localContext = new MatchMarkerContext(this.context, this.state);
        this.enterRule(localContext, 240, GslParser.RULE_matchMarker);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1437;
            this.match(GslParser.COLON);
            this.state = 1438;
            this.match(GslParser.STRING);
            this.state = 1439;
            this.eol();
            this.state = 1443;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7 || _la === 8 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4278161251) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294443007) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4290772871) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 4294967293) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 4294835469) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4025416703) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 2147484663) !== 0) || _la === 282 || _la === 351) {
                {
                {
                this.state = 1440;
                this.statement();
                }
                }
                this.state = 1445;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1446;
            this.match(GslParser.DOT);
            this.state = 1447;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchSpell(): MatchSpellContext {
        let localContext = new MatchSpellContext(this.context, this.state);
        this.enterRule(localContext, 242, GslParser.RULE_matchSpell);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1449;
            this.match(GslParser.MATCHSPELL);
            this.state = 1450;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1451;
            this.match(GslParser.SPELL);
            this.state = 1452;
            this.stringExpression();
            this.state = 1453;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mmgr(): MmgrContext {
        let localContext = new MmgrContext(this.context, this.state);
        this.enterRule(localContext, 244, GslParser.RULE_mmgr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1455;
            this.match(GslParser.MMGR);
            this.state = 1456;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1457;
            this.match(GslParser.MERCHANT);
            this.state = 1458;
            this.valueExpression();
            this.state = 1459;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public move(): MoveContext {
        let localContext = new MoveContext(this.context, this.state);
        this.enterRule(localContext, 246, GslParser.RULE_move);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1461;
            this.match(GslParser.MOVE);
            this.state = 1462;
            this.node();
            this.state = 1470;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GslParser.GROUND:
                {
                this.state = 1463;
                this.match(GslParser.GROUND);
                }
                break;
            case GslParser.INVENTORY:
                {
                this.state = 1464;
                this.match(GslParser.INVENTORY);
                }
                break;
            case GslParser.BEHIND:
                {
                this.state = 1465;
                this.match(GslParser.BEHIND);
                }
                break;
            case GslParser.UNDER:
                {
                this.state = 1466;
                this.match(GslParser.UNDER);
                }
                break;
            case GslParser.IN:
                {
                this.state = 1467;
                this.match(GslParser.IN);
                }
                break;
            case GslParser.ON:
                {
                this.state = 1468;
                this.match(GslParser.ON);
                }
                break;
            case GslParser.V_REGISTER:
            case GslParser.A_REGISTER:
            case GslParser.B_REGISTER:
            case GslParser.SYS_BREAK:
            case GslParser.SYS_CALLBACK:
            case GslParser.SYS_CALLEDBY:
            case GslParser.SYS_DESCMODE:
            case GslParser.SYS_ERROR:
            case GslParser.SYS_INTTABLE:
            case GslParser.SYS_LOADINGFROMSAVE:
            case GslParser.SYS_MAXLOOPS:
            case GslParser.SYS_MAXROOMCREATES:
            case GslParser.SYS_MAXTEXTCHANGES:
            case GslParser.SYS_MAXUOBJS:
            case GslParser.SYS_STIME:
            case GslParser.SYS_STRTABLE:
            case GslParser.SYS_THISSCRIPT:
            case GslParser.SYS_TIME:
            case GslParser.SYS_USERS:
            case GslParser.CARET_OPERATOR:
            case GslParser.PLAYER_NODE:
            case GslParser.ROOM_NODE:
            case GslParser.CREATURE_NODE:
            case GslParser.OBJECT_NODE:
            case GslParser.EVENT_NODE:
            case GslParser.TABLE:
            case GslParser.NUMBER:
            case GslParser.LPARAN:
            case GslParser.MINUS:
                {
                this.state = 1469;
                this.valueExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1472;
            this.node();
            this.state = 1473;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msg(): MsgContext {
        let localContext = new MsgContext(this.context, this.state);
        this.enterRule(localContext, 248, GslParser.RULE_msg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1475;
            this.match(GslParser.MSG);
            this.state = 1476;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1477;
            this.stringExpression();
            this.state = 1478;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgGm(): MsgGmContext {
        let localContext = new MsgGmContext(this.context, this.state);
        this.enterRule(localContext, 250, GslParser.RULE_msgGm);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1480;
            this.match(GslParser.MSGGM);
            this.state = 1481;
            this.stringExpression();
            this.state = 1482;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgfsys(): MsgfsysContext {
        let localContext = new MsgfsysContext(this.context, this.state);
        this.enterRule(localContext, 252, GslParser.RULE_msgfsys);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1484;
            this.match(GslParser.MSGFSYS);
            this.state = 1485;
            this.match(GslParser.WORD);
            this.state = 1486;
            this.stringExpression();
            this.state = 1487;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgp(): MsgpContext {
        let localContext = new MsgpContext(this.context, this.state);
        this.enterRule(localContext, 254, GslParser.RULE_msgp);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1489;
            this.match(GslParser.MSGP);
            this.state = 1490;
            this.stringExpression();
            this.state = 1491;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgr(): MsgrContext {
        let localContext = new MsgrContext(this.context, this.state);
        this.enterRule(localContext, 256, GslParser.RULE_msgr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1493;
            this.match(GslParser.MSGR);
            this.state = 1494;
            this.stringExpression();
            this.state = 1495;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgrgm(): MsgrgmContext {
        let localContext = new MsgrgmContext(this.context, this.state);
        this.enterRule(localContext, 258, GslParser.RULE_msgrgm);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1497;
            this.match(GslParser.MSGRGM);
            this.state = 1498;
            this.match(GslParser.ROOM_NODE);
            this.state = 1499;
            this.match(GslParser.MODE);
            this.state = 1503;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GslParser.WORD:
                {
                this.state = 1500;
                this.match(GslParser.WORD);
                }
                break;
            case GslParser.INFO:
                {
                this.state = 1501;
                this.match(GslParser.INFO);
                }
                break;
            case GslParser.V_REGISTER:
            case GslParser.A_REGISTER:
            case GslParser.B_REGISTER:
            case GslParser.SYS_BREAK:
            case GslParser.SYS_CALLBACK:
            case GslParser.SYS_CALLEDBY:
            case GslParser.SYS_DESCMODE:
            case GslParser.SYS_ERROR:
            case GslParser.SYS_INTTABLE:
            case GslParser.SYS_LOADINGFROMSAVE:
            case GslParser.SYS_MAXLOOPS:
            case GslParser.SYS_MAXROOMCREATES:
            case GslParser.SYS_MAXTEXTCHANGES:
            case GslParser.SYS_MAXUOBJS:
            case GslParser.SYS_STIME:
            case GslParser.SYS_STRTABLE:
            case GslParser.SYS_THISSCRIPT:
            case GslParser.SYS_TIME:
            case GslParser.SYS_USERS:
            case GslParser.CARET_OPERATOR:
            case GslParser.PLAYER_NODE:
            case GslParser.ROOM_NODE:
            case GslParser.CREATURE_NODE:
            case GslParser.OBJECT_NODE:
            case GslParser.EVENT_NODE:
            case GslParser.TABLE:
            case GslParser.NUMBER:
            case GslParser.LPARAN:
            case GslParser.MINUS:
                {
                this.state = 1502;
                this.valueExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1505;
            this.stringExpression();
            this.state = 1506;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgrx2(): Msgrx2Context {
        let localContext = new Msgrx2Context(this.context, this.state);
        this.enterRule(localContext, 260, GslParser.RULE_msgrx2);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1508;
            this.match(GslParser.MSGRX2);
            this.state = 1509;
            this.stringExpression();
            this.state = 1510;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgrxp(): MsgrxpContext {
        let localContext = new MsgrxpContext(this.context, this.state);
        this.enterRule(localContext, 262, GslParser.RULE_msgrxp);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1512;
            this.match(GslParser.MSGRXP);
            this.state = 1513;
            this.stringExpression();
            this.state = 1514;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgs(): MsgsContext {
        let localContext = new MsgsContext(this.context, this.state);
        this.enterRule(localContext, 264, GslParser.RULE_msgs);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1516;
            this.match(GslParser.MSGS);
            this.state = 1517;
            this.valueExpression();
            this.state = 1518;
            this.stringExpression();
            this.state = 1519;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgsgm(): MsgsgmContext {
        let localContext = new MsgsgmContext(this.context, this.state);
        this.enterRule(localContext, 266, GslParser.RULE_msgsgm);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1521;
            this.match(GslParser.MSGSGM);
            this.state = 1522;
            this.valueExpression();
            this.state = 1523;
            this.stringExpression();
            this.state = 1524;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgsys(): MsgsysContext {
        let localContext = new MsgsysContext(this.context, this.state);
        this.enterRule(localContext, 268, GslParser.RULE_msgsys);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1526;
            this.match(GslParser.MSGSYS);
            this.state = 1527;
            this.stringExpression();
            this.state = 1528;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public msgw(): MsgwContext {
        let localContext = new MsgwContext(this.context, this.state);
        this.enterRule(localContext, 270, GslParser.RULE_msgw);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1530;
            this.match(GslParser.MSGW);
            this.state = 1531;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1532;
            this.stringExpression();
            this.state = 1533;
            this.stringExpression();
            this.state = 1534;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nameEnd(): NameEndContext {
        let localContext = new NameEndContext(this.context, this.state);
        this.enterRule(localContext, 272, GslParser.RULE_nameEnd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1536;
            this.match(GslParser.NAMEEND);
            this.state = 1537;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1538;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nameStart(): NameStartContext {
        let localContext = new NameStartContext(this.context, this.state);
        this.enterRule(localContext, 274, GslParser.RULE_nameStart);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1540;
            this.match(GslParser.NAMESTART);
            this.state = 1541;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1542;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nextEffect(): NextEffectContext {
        let localContext = new NextEffectContext(this.context, this.state);
        this.enterRule(localContext, 276, GslParser.RULE_nextEffect);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1544;
            this.match(GslParser.NEXTEFFECT);
            this.state = 1545;
            this.valueExpression();
            this.state = 1546;
            this.node();
            this.state = 1547;
            this.match(GslParser.FOR);
            this.state = 1548;
            this.numberVariable();
            this.state = 1549;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nextNode(): NextNodeContext {
        let localContext = new NextNodeContext(this.context, this.state);
        this.enterRule(localContext, 278, GslParser.RULE_nextNode);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1551;
            this.match(GslParser.NEXTNODE);
            this.state = 1559;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GslParser.GROUND:
                {
                this.state = 1552;
                this.match(GslParser.GROUND);
                }
                break;
            case GslParser.INVENTORY:
                {
                this.state = 1553;
                this.match(GslParser.INVENTORY);
                }
                break;
            case GslParser.BEHIND:
                {
                this.state = 1554;
                this.match(GslParser.BEHIND);
                }
                break;
            case GslParser.UNDER:
                {
                this.state = 1555;
                this.match(GslParser.UNDER);
                }
                break;
            case GslParser.IN:
                {
                this.state = 1556;
                this.match(GslParser.IN);
                }
                break;
            case GslParser.ON:
                {
                this.state = 1557;
                this.match(GslParser.ON);
                }
                break;
            case GslParser.V_REGISTER:
            case GslParser.A_REGISTER:
            case GslParser.B_REGISTER:
            case GslParser.SYS_BREAK:
            case GslParser.SYS_CALLBACK:
            case GslParser.SYS_CALLEDBY:
            case GslParser.SYS_DESCMODE:
            case GslParser.SYS_ERROR:
            case GslParser.SYS_INTTABLE:
            case GslParser.SYS_LOADINGFROMSAVE:
            case GslParser.SYS_MAXLOOPS:
            case GslParser.SYS_MAXROOMCREATES:
            case GslParser.SYS_MAXTEXTCHANGES:
            case GslParser.SYS_MAXUOBJS:
            case GslParser.SYS_STIME:
            case GslParser.SYS_STRTABLE:
            case GslParser.SYS_THISSCRIPT:
            case GslParser.SYS_TIME:
            case GslParser.SYS_USERS:
            case GslParser.CARET_OPERATOR:
            case GslParser.PLAYER_NODE:
            case GslParser.ROOM_NODE:
            case GslParser.CREATURE_NODE:
            case GslParser.OBJECT_NODE:
            case GslParser.EVENT_NODE:
            case GslParser.TABLE:
            case GslParser.NUMBER:
            case GslParser.LPARAN:
            case GslParser.MINUS:
                {
                this.state = 1558;
                this.valueExpression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1561;
            this.node();
            this.state = 1562;
            this.match(GslParser.FOR);
            this.state = 1563;
            this.node();
            this.state = 1564;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public openLocker(): OpenLockerContext {
        let localContext = new OpenLockerContext(this.context, this.state);
        this.enterRule(localContext, 280, GslParser.RULE_openLocker);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1566;
            this.match(GslParser.OPENLOCKER);
            this.state = 1567;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1568;
            this.match(GslParser.USING);
            this.state = 1569;
            this.match(GslParser.OBJECT_NODE);
            this.state = 1570;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public outPhrase(): OutPhraseContext {
        let localContext = new OutPhraseContext(this.context, this.state);
        this.enterRule(localContext, 282, GslParser.RULE_outPhrase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1572;
            this.match(GslParser.OUTPHRASE);
            this.state = 1573;
            this.valueExpression();
            this.state = 1574;
            this.match(GslParser.FOR);
            this.state = 1575;
            this.stringVariable();
            this.state = 1576;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parse(): ParseContext {
        let localContext = new ParseContext(this.context, this.state);
        this.enterRule(localContext, 284, GslParser.RULE_parse);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1578;
            this.match(GslParser.PARSE);
            this.state = 1579;
            this.valueExpression();
            this.state = 1580;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parseDecimal(): ParseDecimalContext {
        let localContext = new ParseDecimalContext(this.context, this.state);
        this.enterRule(localContext, 286, GslParser.RULE_parseDecimal);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1582;
            this.match(GslParser.PARSEDECIMAL);
            this.state = 1583;
            this.stringExpression();
            this.state = 1584;
            this.match(GslParser.FOR);
            this.state = 1585;
            this.numberVariable();
            this.state = 1586;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pauseEffects(): PauseEffectsContext {
        let localContext = new PauseEffectsContext(this.context, this.state);
        this.enterRule(localContext, 288, GslParser.RULE_pauseEffects);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1588;
            this.match(GslParser.PAUSEEFFECTS);
            this.state = 1589;
            this.node();
            this.state = 1590;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pid(): PidContext {
        let localContext = new PidContext(this.context, this.state);
        this.enterRule(localContext, 290, GslParser.RULE_pid);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1592;
            this.match(GslParser.PID);
            this.state = 1593;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1594;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public playerCount(): PlayerCountContext {
        let localContext = new PlayerCountContext(this.context, this.state);
        this.enterRule(localContext, 292, GslParser.RULE_playerCount);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1596;
            this.match(GslParser.PLAYERCOUNT);
            {
            this.state = 1597;
            this.numberVariable();
            }
            this.state = 1598;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prempt(): PremptContext {
        let localContext = new PremptContext(this.context, this.state);
        this.enterRule(localContext, 294, GslParser.RULE_prempt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1600;
            this.match(GslParser.PREMPT);
            this.state = 1601;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1602;
            this.stringExpression();
            this.state = 1603;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public push(): PushContext {
        let localContext = new PushContext(this.context, this.state);
        this.enterRule(localContext, 296, GslParser.RULE_push);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1605;
            this.match(GslParser.PUSH);
            this.state = 1606;
            this.eol();
            this.state = 1608;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 1607;
                    this.statement();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1610;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1612;
            this.match(GslParser.POP);
            this.state = 1613;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public random(): RandomContext {
        let localContext = new RandomContext(this.context, this.state);
        this.enterRule(localContext, 298, GslParser.RULE_random);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1615;
            this.match(GslParser.RANDOM);
            this.state = 1616;
            this.valueExpression();
            this.state = 1617;
            this.match(GslParser.TO);
            this.state = 1618;
            this.valueExpression();
            this.state = 1619;
            this.match(GslParser.FOR);
            this.state = 1620;
            this.numberVariable();
            this.state = 1621;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rem2effect(): Rem2effectContext {
        let localContext = new Rem2effectContext(this.context, this.state);
        this.enterRule(localContext, 300, GslParser.RULE_rem2effect);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1623;
            this.match(GslParser.REM2EFFECT);
            this.state = 1624;
            this.match(GslParser.CODE);
            this.state = 1625;
            this.valueExpression();
            this.state = 1626;
            this.match(GslParser.VALUE2);
            this.state = 1627;
            this.valueExpression();
            this.state = 1628;
            this.match(GslParser.FROM);
            this.state = 1629;
            this.node();
            this.state = 1630;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public remEffect(): RemEffectContext {
        let localContext = new RemEffectContext(this.context, this.state);
        this.enterRule(localContext, 302, GslParser.RULE_remEffect);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1632;
            this.match(GslParser.REMEFFECT);
            this.state = 1633;
            this.match(GslParser.CODE);
            this.state = 1634;
            this.valueExpression();
            this.state = 1635;
            this.match(GslParser.FROM);
            this.state = 1636;
            this.node();
            this.state = 1637;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public remMenuItem(): RemMenuItemContext {
        let localContext = new RemMenuItemContext(this.context, this.state);
        this.enterRule(localContext, 304, GslParser.RULE_remMenuItem);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1639;
            this.match(GslParser.REMMENUITEM);
            this.state = 1640;
            this.stringExpression();
            this.state = 1641;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public remNEffect(): RemNEffectContext {
        let localContext = new RemNEffectContext(this.context, this.state);
        this.enterRule(localContext, 306, GslParser.RULE_remNEffect);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1643;
            this.match(GslParser.REMNEFFECT);
            this.state = 1644;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1645;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public remove(): RemoveContext {
        let localContext = new RemoveContext(this.context, this.state);
        this.enterRule(localContext, 308, GslParser.RULE_remove);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1647;
            this.match(GslParser.REMOVE);
            this.state = 1648;
            _la = this.tokenStream.LA(1);
            if(!(_la === 301 || _la === 306)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1649;
            this.valueExpression();
            this.state = 1650;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public removeVarField(): RemoveVarFieldContext {
        let localContext = new RemoveVarFieldContext(this.context, this.state);
        this.enterRule(localContext, 310, GslParser.RULE_removeVarField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1652;
            this.match(GslParser.REMOVEVARFIELD);
            this.state = 1655;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                {
                this.state = 1653;
                this.stringExpression();
                }
                break;
            case 2:
                {
                this.state = 1654;
                this.fieldName();
                }
                break;
            }
            this.state = 1657;
            this.match(GslParser.FROM);
            this.state = 1658;
            this.node();
            this.state = 1659;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public removeVarGroup(): RemoveVarGroupContext {
        let localContext = new RemoveVarGroupContext(this.context, this.state);
        this.enterRule(localContext, 312, GslParser.RULE_removeVarGroup);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1661;
            this.match(GslParser.REMOVEVARGROUP);
            this.state = 1664;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
            case 1:
                {
                this.state = 1662;
                this.stringExpression();
                }
                break;
            case 2:
                {
                this.state = 1663;
                this.valueExpression();
                }
                break;
            }
            this.state = 1666;
            this.match(GslParser.FROM);
            this.state = 1667;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 29) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1668;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public resist(): ResistContext {
        let localContext = new ResistContext(this.context, this.state);
        this.enterRule(localContext, 314, GslParser.RULE_resist);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1670;
            this.match(GslParser.RESIST);
            this.state = 1671;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1672;
            this.match(GslParser.VS);
            this.state = 1673;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1674;
            this.match(GslParser.SPELL);
            this.state = 1675;
            this.valueExpression();
            this.state = 1676;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public resizeTable(): ResizeTableContext {
        let localContext = new ResizeTableContext(this.context, this.state);
        this.enterRule(localContext, 316, GslParser.RULE_resizeTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1678;
            this.match(GslParser.RESIZETABLE);
            this.state = 1679;
            this.valueExpression();
            this.state = 1680;
            this.match(GslParser.X);
            this.state = 1681;
            this.valueExpression();
            this.state = 1682;
            this.match(GslParser.Y);
            this.state = 1683;
            this.valueExpression();
            this.state = 1684;
            this.match(GslParser.Z);
            this.state = 1685;
            this.valueExpression();
            this.state = 1686;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public restoreFields(): RestoreFieldsContext {
        let localContext = new RestoreFieldsContext(this.context, this.state);
        this.enterRule(localContext, 318, GslParser.RULE_restoreFields);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1688;
            this.match(GslParser.RESTOREFIELDS);
            this.state = 1689;
            this.valueExpression();
            this.state = 1690;
            this.match(GslParser.OF);
            this.state = 1691;
            this.valueExpression();
            this.state = 1692;
            this.match(GslParser.TO);
            this.state = 1693;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1694;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public resumeEffects(): ResumeEffectsContext {
        let localContext = new ResumeEffectsContext(this.context, this.state);
        this.enterRule(localContext, 320, GslParser.RULE_resumeEffects);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1696;
            this.match(GslParser.RESUMEEFFECTS);
            this.state = 1697;
            this.node();
            this.state = 1698;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rmCall(): RmCallContext {
        let localContext = new RmCallContext(this.context, this.state);
        this.enterRule(localContext, 322, GslParser.RULE_rmCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1700;
            this.match(GslParser.RMCALL);
            this.state = 1701;
            this.stringExpression();
            this.state = 1702;
            this.match(GslParser.CALL);
            this.state = 1703;
            this.valueExpression();
            this.state = 1704;
            this.match(GslParser.CALLBACK);
            this.state = 1705;
            this.valueExpression();
            this.state = 1706;
            this.match(GslParser.DONEMATCH);
            this.state = 1707;
            this.stringExpression();
            this.state = 1708;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rndDir(): RndDirContext {
        let localContext = new RndDirContext(this.context, this.state);
        this.enterRule(localContext, 324, GslParser.RULE_rndDir);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1710;
            this.match(GslParser.RNDDIR);
            this.state = 1711;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rndExit(): RndExitContext {
        let localContext = new RndExitContext(this.context, this.state);
        this.enterRule(localContext, 326, GslParser.RULE_rndExit);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1713;
            this.match(GslParser.RNDEXIT);
            this.state = 1714;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rndPlyr(): RndPlyrContext {
        let localContext = new RndPlyrContext(this.context, this.state);
        this.enterRule(localContext, 328, GslParser.RULE_rndPlyr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1716;
            this.match(GslParser.RNDPLYR);
            this.state = 1717;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rollIn(): RollInContext {
        let localContext = new RollInContext(this.context, this.state);
        this.enterRule(localContext, 330, GslParser.RULE_rollIn);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1719;
            this.match(GslParser.ROLLIN);
            this.state = 1720;
            _la = this.tokenStream.LA(1);
            if(!(_la === 219 || _la === 244 || _la === 301 || _la === 306)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1721;
            this.valueExpression();
            this.state = 1722;
            this.match(GslParser.CALLBACK);
            this.state = 1723;
            this.valueExpression();
            this.state = 1724;
            this.match(GslParser.REPORT_TO);
            this.state = 1725;
            this.valueExpression();
            this.state = 1726;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public roomEnd(): RoomEndContext {
        let localContext = new RoomEndContext(this.context, this.state);
        this.enterRule(localContext, 332, GslParser.RULE_roomEnd);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1728;
            this.match(GslParser.ROOMEND);
            this.state = 1729;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1730;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public roomStart(): RoomStartContext {
        let localContext = new RoomStartContext(this.context, this.state);
        this.enterRule(localContext, 334, GslParser.RULE_roomStart);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1732;
            this.match(GslParser.ROOMSTART);
            this.state = 1733;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1734;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rootExistOf(): RootExistOfContext {
        let localContext = new RootExistOfContext(this.context, this.state);
        this.enterRule(localContext, 336, GslParser.RULE_rootExistOf);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1736;
            this.match(GslParser.ROOTEXISTOF);
            this.state = 1737;
            this.node();
            this.state = 1738;
            this.match(GslParser.FOR);
            this.state = 1739;
            this.node();
            this.state = 1740;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public roundtime(): RoundtimeContext {
        let localContext = new RoundtimeContext(this.context, this.state);
        this.enterRule(localContext, 338, GslParser.RULE_roundtime);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1742;
            this.match(GslParser.ROUNDTIME);
            this.state = 1743;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 46)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1744;
            this.valueExpression();
            this.state = 1745;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public saveFields(): SaveFieldsContext {
        let localContext = new SaveFieldsContext(this.context, this.state);
        this.enterRule(localContext, 340, GslParser.RULE_saveFields);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1747;
            this.match(GslParser.SAVEFIELDS);
            this.state = 1748;
            this.valueExpression();
            this.state = 1749;
            this.match(GslParser.TO);
            this.state = 1750;
            this.valueExpression();
            this.state = 1751;
            this.match(GslParser.FROM);
            this.state = 1752;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1753;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public scan(): ScanContext {
        let localContext = new ScanContext(this.context, this.state);
        this.enterRule(localContext, 342, GslParser.RULE_scan);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1755;
            this.match(GslParser.SCAN);
            this.state = 1756;
            this.stringExpression();
            this.state = 1757;
            this.match(GslParser.MATCH);
            this.state = 1758;
            this.stringExpression();
            this.state = 1759;
            this.match(GslParser.FOR);
            this.state = 1760;
            this.numberVariable();
            this.state = 1761;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public scanEffect(): ScanEffectContext {
        let localContext = new ScanEffectContext(this.context, this.state);
        this.enterRule(localContext, 344, GslParser.RULE_scanEffect);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1763;
            this.match(GslParser.SCANEFFECT);
            this.state = 1764;
            this.node();
            this.state = 1765;
            this.match(GslParser.CODE);
            this.state = 1766;
            this.valueExpression();
            this.state = 1767;
            this.match(GslParser.VALUE2);
            this.state = 1768;
            this.valueExpression();
            this.state = 1769;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public set_(): SetContext {
        let localContext = new SetContext(this.context, this.state);
        this.enterRule(localContext, 346, GslParser.RULE_set);
        try {
            this.state = 1808;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1771;
                this.match(GslParser.SET);
                this.state = 1774;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
                case 1:
                    {
                    this.state = 1772;
                    this.numberVariable();
                    }
                    break;
                case 2:
                    {
                    this.state = 1773;
                    this.stringVariable();
                    }
                    break;
                }
                this.state = 1776;
                this.match(GslParser.TO);
                this.state = 1779;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 41, this.context) ) {
                case 1:
                    {
                    this.state = 1777;
                    this.valueExpression();
                    }
                    break;
                case 2:
                    {
                    this.state = 1778;
                    this.stringExpression();
                    }
                    break;
                }
                this.state = 1781;
                this.eol();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1783;
                this.match(GslParser.SET);
                this.state = 1784;
                this.match(GslParser.PLAYER_NODE);
                this.state = 1785;
                this.match(GslParser.TO);
                this.state = 1786;
                this.match(GslParser.PLAYER_NODE);
                this.state = 1787;
                this.eol();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1788;
                this.match(GslParser.SET);
                this.state = 1789;
                this.match(GslParser.CREATURE_NODE);
                this.state = 1790;
                this.match(GslParser.TO);
                this.state = 1791;
                this.match(GslParser.CREATURE_NODE);
                this.state = 1792;
                this.eol();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1793;
                this.match(GslParser.SET);
                this.state = 1794;
                this.match(GslParser.ROOM_NODE);
                this.state = 1795;
                this.match(GslParser.TO);
                this.state = 1796;
                this.match(GslParser.ROOM_NODE);
                this.state = 1797;
                this.eol();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1798;
                this.match(GslParser.SET);
                this.state = 1799;
                this.match(GslParser.OBJECT_NODE);
                this.state = 1800;
                this.match(GslParser.TO);
                this.state = 1801;
                this.match(GslParser.OBJECT_NODE);
                this.state = 1802;
                this.eol();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1803;
                this.match(GslParser.SET);
                this.state = 1804;
                this.match(GslParser.EVENT_NODE);
                this.state = 1805;
                this.match(GslParser.TO);
                this.state = 1806;
                this.match(GslParser.EVENT_NODE);
                this.state = 1807;
                this.eol();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setName(): SetNameContext {
        let localContext = new SetNameContext(this.context, this.state);
        this.enterRule(localContext, 348, GslParser.RULE_setName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1810;
            this.match(GslParser.SETNAME);
            this.state = 1811;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1812;
            this.match(GslParser.TO);
            this.state = 1813;
            this.stringExpression();
            this.state = 1814;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setTable(): SetTableContext {
        let localContext = new SetTableContext(this.context, this.state);
        this.enterRule(localContext, 350, GslParser.RULE_setTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1816;
            this.match(GslParser.SETTABLE);
            this.state = 1817;
            this.valueExpression();
            this.state = 1818;
            this.match(GslParser.AT);
            this.state = 1819;
            this.valueExpression();
            this.state = 1820;
            this.valueExpression();
            this.state = 1821;
            this.valueExpression();
            this.state = 1822;
            this.match(GslParser.TO);
            this.state = 1825;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                {
                this.state = 1823;
                this.stringExpression();
                }
                break;
            case 2:
                {
                this.state = 1824;
                this.valueExpression();
                }
                break;
            }
            this.state = 1827;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setText(): SetTextContext {
        let localContext = new SetTextContext(this.context, this.state);
        this.enterRule(localContext, 352, GslParser.RULE_setText);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1829;
            this.match(GslParser.SETTEXT);
            this.state = 1830;
            this.numberVariable();
            this.state = 1831;
            this.match(GslParser.TO);
            this.state = 1832;
            this.stringExpression();
            this.state = 1833;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sparse(): SparseContext {
        let localContext = new SparseContext(this.context, this.state);
        this.enterRule(localContext, 354, GslParser.RULE_sparse);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1835;
            this.match(GslParser.SPARSE);
            this.state = 1836;
            this.valueExpression();
            this.state = 1837;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stopCommand(): StopCommandContext {
        let localContext = new StopCommandContext(this.context, this.state);
        this.enterRule(localContext, 356, GslParser.RULE_stopCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1839;
            this.match(GslParser.STOP);
            this.state = 1840;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public storeCharData(): StoreCharDataContext {
        let localContext = new StoreCharDataContext(this.context, this.state);
        this.enterRule(localContext, 358, GslParser.RULE_storeCharData);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1842;
            this.match(GslParser.STORECHARDATA);
            this.state = 1843;
            _la = this.tokenStream.LA(1);
            if(!(_la === 89 || _la === 162 || _la === 350)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1844;
            this.match(GslParser.FOR);
            this.state = 1845;
            this.valueExpression();
            this.state = 1846;
            this.match(GslParser.FROM);
            this.state = 1847;
            this.match(GslParser.OBJECT_NODE);
            this.state = 1848;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stov(): StovContext {
        let localContext = new StovContext(this.context, this.state);
        this.enterRule(localContext, 360, GslParser.RULE_stov);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1850;
            this.match(GslParser.STOV);
            this.state = 1851;
            this.stringExpression();
            this.state = 1852;
            this.match(GslParser.FOR);
            this.state = 1853;
            this.numberVariable();
            this.state = 1854;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public substring(): SubstringContext {
        let localContext = new SubstringContext(this.context, this.state);
        this.enterRule(localContext, 362, GslParser.RULE_substring);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1856;
            this.match(GslParser.SUBSTRING);
            this.state = 1857;
            this.stringExpression();
            this.state = 1858;
            this.match(GslParser.FROM);
            this.state = 1859;
            this.valueExpression();
            this.state = 1860;
            this.match(GslParser.TO);
            this.state = 1861;
            this.valueExpression();
            this.state = 1862;
            this.match(GslParser.FOR);
            this.state = 1863;
            this.stringVariable();
            this.state = 1864;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableInfo(): TableInfoContext {
        let localContext = new TableInfoContext(this.context, this.state);
        this.enterRule(localContext, 364, GslParser.RULE_tableInfo);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1866;
            this.match(GslParser.TABLEINFO);
            this.state = 1867;
            this.valueExpression();
            this.state = 1868;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tellWeb(): TellWebContext {
        let localContext = new TellWebContext(this.context, this.state);
        this.enterRule(localContext, 366, GslParser.RULE_tellWeb);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1870;
            this.match(GslParser.TELLWEB);
            this.state = 1871;
            this.stringExpression();
            this.state = 1872;
            this.match(GslParser.PRIORITY);
            this.state = 1873;
            this.valueExpression();
            this.state = 1874;
            this.match(GslParser.FOR);
            this.state = 1875;
            this.valueExpression();
            this.state = 1876;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public test2effect(): Test2effectContext {
        let localContext = new Test2effectContext(this.context, this.state);
        this.enterRule(localContext, 368, GslParser.RULE_test2effect);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1878;
            this.match(GslParser.TEST2EFFECT);
            this.state = 1879;
            this.node();
            this.state = 1880;
            this.match(GslParser.CODE);
            this.state = 1881;
            this.valueExpression();
            this.state = 1882;
            this.match(GslParser.VALUE2);
            this.state = 1883;
            this.valueExpression();
            this.state = 1884;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public testEffect(): TestEffectContext {
        let localContext = new TestEffectContext(this.context, this.state);
        this.enterRule(localContext, 370, GslParser.RULE_testEffect);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1886;
            this.match(GslParser.TESTEFFECT);
            this.state = 1887;
            this.node();
            this.state = 1888;
            this.match(GslParser.CODE);
            this.state = 1889;
            this.valueExpression();
            this.state = 1890;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public test_assert(): Test_assertContext {
        let localContext = new Test_assertContext(this.context, this.state);
        this.enterRule(localContext, 372, GslParser.RULE_test_assert);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1892;
            this.match(GslParser.TEST_ASSERT);
            this.state = 1895;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                {
                this.state = 1893;
                this.valueExpression();
                }
                break;
            case 2:
                {
                this.state = 1894;
                this.stringExpression();
                }
                break;
            }
            this.state = 1897;
            this.match(GslParser.OR_YELL);
            this.state = 1898;
            this.stringExpression();
            this.state = 1899;
            this.match(GslParser.TO);
            this.state = 1900;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1901;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tparse(): TparseContext {
        let localContext = new TparseContext(this.context, this.state);
        this.enterRule(localContext, 374, GslParser.RULE_tparse);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1903;
            this.match(GslParser.TPARSE);
            this.state = 1904;
            this.stringExpression();
            this.state = 1905;
            this.valueExpression();
            this.state = 1906;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public underOff(): UnderOffContext {
        let localContext = new UnderOffContext(this.context, this.state);
        this.enterRule(localContext, 376, GslParser.RULE_underOff);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1908;
            this.match(GslParser.UNDEROFF);
            this.state = 1909;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1910;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public underOn(): UnderOnContext {
        let localContext = new UnderOnContext(this.context, this.state);
        this.enterRule(localContext, 378, GslParser.RULE_underOn);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1912;
            this.match(GslParser.UNDERON);
            this.state = 1913;
            _la = this.tokenStream.LA(1);
            if(!(_la === 44 || _la === 45)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1914;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unload(): UnloadContext {
        let localContext = new UnloadContext(this.context, this.state);
        this.enterRule(localContext, 380, GslParser.RULE_unload);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1916;
            this.match(GslParser.UNLOAD);
            this.state = 1917;
            this.valueExpression();
            this.state = 1918;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public updateSrvrStuff(): UpdateSrvrStuffContext {
        let localContext = new UpdateSrvrStuffContext(this.context, this.state);
        this.enterRule(localContext, 382, GslParser.RULE_updateSrvrStuff);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1920;
            this.match(GslParser.UPDATESRVRSTUFF);
            this.state = 1921;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1922;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public updateTable(): UpdateTableContext {
        let localContext = new UpdateTableContext(this.context, this.state);
        this.enterRule(localContext, 384, GslParser.RULE_updateTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1924;
            this.match(GslParser.UPDATETABLE);
            this.state = 1925;
            this.valueExpression();
            this.state = 1926;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public uppercase(): UppercaseContext {
        let localContext = new UppercaseContext(this.context, this.state);
        this.enterRule(localContext, 386, GslParser.RULE_uppercase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1928;
            this.match(GslParser.UPPERCASE);
            this.state = 1929;
            this.stringVariable();
            this.state = 1930;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vtos(): VtosContext {
        let localContext = new VtosContext(this.context, this.state);
        this.enterRule(localContext, 388, GslParser.RULE_vtos);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1932;
            this.match(GslParser.VTOS);
            this.state = 1933;
            this.valueExpression();
            this.state = 1934;
            this.match(GslParser.FOR);
            this.state = 1935;
            this.stringVariable();
            this.state = 1936;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public watch(): WatchContext {
        let localContext = new WatchContext(this.context, this.state);
        this.enterRule(localContext, 390, GslParser.RULE_watch);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1938;
            this.match(GslParser.WATCH);
            this.state = 1939;
            this.match(GslParser.ROOM);
            this.state = 1940;
            this.valueExpression();
            this.state = 1941;
            this.match(GslParser.FOR);
            this.state = 1942;
            this.match(GslParser.PLAYER_NODE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public where(): WhereContext {
        let localContext = new WhereContext(this.context, this.state);
        this.enterRule(localContext, 392, GslParser.RULE_where);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1944;
            this.match(GslParser.WHERE);
            this.state = 1945;
            this.node();
            this.state = 1946;
            this.match(GslParser.FOR);
            this.state = 1947;
            this.node();
            this.state = 1948;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereAt(): WhereAtContext {
        let localContext = new WhereAtContext(this.context, this.state);
        this.enterRule(localContext, 394, GslParser.RULE_whereAt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1950;
            this.match(GslParser.WHEREAT);
            this.state = 1951;
            this.node();
            this.state = 1952;
            this.match(GslParser.FOR);
            this.state = 1953;
            this.numberVariable();
            this.state = 1954;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereItem(): WhereItemContext {
        let localContext = new WhereItemContext(this.context, this.state);
        this.enterRule(localContext, 396, GslParser.RULE_whereItem);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1956;
            this.match(GslParser.WHEREITEM);
            this.state = 1957;
            this.node();
            this.state = 1958;
            this.match(GslParser.FOR);
            this.state = 1959;
            this.stringVariable();
            this.state = 1960;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public writeChar(): WriteCharContext {
        let localContext = new WriteCharContext(this.context, this.state);
        this.enterRule(localContext, 398, GslParser.RULE_writeChar);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1962;
            this.match(GslParser.WRITECHAR);
            this.state = 1963;
            this.match(GslParser.PLAYER_NODE);
            this.state = 1964;
            this.eol();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valueExpression(): ValueExpressionContext {
        let localContext = new ValueExpressionContext(this.context, this.state);
        this.enterRule(localContext, 400, GslParser.RULE_valueExpression);
        try {
            this.state = 1977;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1966;
                this.match(GslParser.NUMBER);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1967;
                this.match(GslParser.CARET_OPERATOR);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1968;
                this.negativeNumber();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1969;
                this.numberVariable();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1970;
                this.identityExpression();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1971;
                this.valueOperation();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1972;
                this.stringOperation();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1973;
                this.match(GslParser.LPARAN);
                this.state = 1974;
                this.valueExpression();
                this.state = 1975;
                this.match(GslParser.RPARAN);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public negativeNumber(): NegativeNumberContext {
        let localContext = new NegativeNumberContext(this.context, this.state);
        this.enterRule(localContext, 402, GslParser.RULE_negativeNumber);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1979;
            this.match(GslParser.MINUS);
            this.state = 1980;
            this.match(GslParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valueOperation(): ValueOperationContext {
        let localContext = new ValueOperationContext(this.context, this.state);
        this.enterRule(localContext, 404, GslParser.RULE_valueOperation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1982;
            this.match(GslParser.LPARAN);
            this.state = 1983;
            this.valueExpression();
            this.state = 1986;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1984;
                _la = this.tokenStream.LA(1);
                if(!(_la === 9 || ((((_la - 338)) & ~0x1F) === 0 && ((1 << (_la - 338)) & 995) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1985;
                this.valueExpression();
                }
                }
                this.state = 1988;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 9 || ((((_la - 338)) & ~0x1F) === 0 && ((1 << (_la - 338)) & 995) !== 0));
            this.state = 1990;
            this.match(GslParser.RPARAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringOperation(): StringOperationContext {
        let localContext = new StringOperationContext(this.context, this.state);
        this.enterRule(localContext, 406, GslParser.RULE_stringOperation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1992;
            this.match(GslParser.LPARAN);
            this.state = 1993;
            this.stringExpression();
            this.state = 1996;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 1994;
                _la = this.tokenStream.LA(1);
                if(!(_la === 9 || _la === 338 || _la === 339)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1995;
                this.stringExpression();
                }
                }
                this.state = 1998;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 9 || _la === 338 || _la === 339);
            this.state = 2000;
            this.match(GslParser.RPARAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringExpression(): StringExpressionContext {
        let localContext = new StringExpressionContext(this.context, this.state);
        this.enterRule(localContext, 408, GslParser.RULE_stringExpression);
        try {
            this.state = 2009;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2002;
                this.match(GslParser.STRING);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2003;
                this.stringVariable();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2004;
                this.stringConcatenation();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2005;
                this.match(GslParser.LPARAN);
                this.state = 2006;
                this.stringExpression();
                this.state = 2007;
                this.match(GslParser.RPARAN);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringConcatenation(): StringConcatenationContext {
        let localContext = new StringConcatenationContext(this.context, this.state);
        this.enterRule(localContext, 410, GslParser.RULE_stringConcatenation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2011;
            this.match(GslParser.LPARAN);
            this.state = 2012;
            this.stringExpression();
            this.state = 2015;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 2013;
                this.match(GslParser.PLUS);
                this.state = 2014;
                this.stringExpression();
                }
                }
                this.state = 2017;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 343);
            this.state = 2019;
            this.match(GslParser.RPARAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identityExpression(): IdentityExpressionContext {
        let localContext = new IdentityExpressionContext(this.context, this.state);
        this.enterRule(localContext, 412, GslParser.RULE_identityExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2021;
            this.match(GslParser.LPARAN);
            this.state = 2022;
            this.node();
            this.state = 2023;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & 993) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 2024;
            this.stringExpression();
            this.state = 2025;
            this.match(GslParser.RPARAN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public node(): NodeContext {
        let localContext = new NodeContext(this.context, this.state);
        this.enterRule(localContext, 414, GslParser.RULE_node);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2027;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 31) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public numberVariable(): NumberVariableContext {
        let localContext = new NumberVariableContext(this.context, this.state);
        this.enterRule(localContext, 416, GslParser.RULE_numberVariable);
        try {
            this.state = 2057;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2029;
                this.match(GslParser.V_REGISTER);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2030;
                this.match(GslParser.A_REGISTER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2031;
                this.match(GslParser.B_REGISTER);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2032;
                this.match(GslParser.ROOM_NODE);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2033;
                this.match(GslParser.CREATURE_NODE);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2034;
                this.match(GslParser.OBJECT_NODE);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2035;
                this.match(GslParser.EVENT_NODE);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2036;
                this.match(GslParser.SYS_BREAK);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2037;
                this.match(GslParser.SYS_CALLBACK);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 2038;
                this.match(GslParser.SYS_CALLEDBY);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 2039;
                this.match(GslParser.SYS_DESCMODE);
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 2040;
                this.match(GslParser.SYS_ERROR);
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 2041;
                this.match(GslParser.SYS_LOADINGFROMSAVE);
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 2042;
                this.match(GslParser.SYS_MAXLOOPS);
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 2043;
                this.match(GslParser.SYS_MAXROOMCREATES);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 2044;
                this.match(GslParser.SYS_MAXTEXTCHANGES);
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 2045;
                this.match(GslParser.SYS_MAXUOBJS);
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 2046;
                this.match(GslParser.SYS_STRTABLE);
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 2047;
                this.match(GslParser.SYS_INTTABLE);
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 2048;
                this.match(GslParser.SYS_STIME);
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 2049;
                this.match(GslParser.SYS_STRTABLE);
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 2050;
                this.match(GslParser.SYS_INTTABLE);
                }
                break;
            case 23:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 2051;
                this.match(GslParser.SYS_THISSCRIPT);
                }
                break;
            case 24:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 2052;
                this.match(GslParser.SYS_TIME);
                }
                break;
            case 25:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 2053;
                this.match(GslParser.SYS_USERS);
                }
                break;
            case 26:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 2054;
                this.nodeFieldRef();
                }
                break;
            case 27:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 2055;
                this.tableReference();
                }
                break;
            case 28:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 2056;
                this.tableAddress();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringVariable(): StringVariableContext {
        let localContext = new StringVariableContext(this.context, this.state);
        this.enterRule(localContext, 418, GslParser.RULE_stringVariable);
        try {
            this.state = 2076;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2059;
                this.match(GslParser.S_REGISTER);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2060;
                this.match(GslParser.T_REGISTER);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2061;
                this.match(GslParser.PLAYER_NODE);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2062;
                this.match(GslParser.SYS_BROWSER_BUFFER);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2063;
                this.match(GslParser.SYS_DONEMATCH);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2064;
                this.match(GslParser.SYS_GAMECODE);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2065;
                this.match(GslParser.SYS_GAMENAME);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2066;
                this.match(GslParser.SYS_LASTMATCH);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 2067;
                this.match(GslParser.SYS_MATCH);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 2068;
                this.match(GslParser.SYS_MENUITEMLABEL);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 2069;
                this.match(GslParser.SYS_REPLYADDRESS);
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 2070;
                this.match(GslParser.SYS_PARSE_ERROR_1);
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 2071;
                this.match(GslParser.SYS_PARSE_ERROR_2);
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 2072;
                this.match(GslParser.SYS_PARSE_ERROR_3);
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 2073;
                this.match(GslParser.SYS_PARSE_ERROR_4);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 2074;
                this.nodeFieldRef();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 2075;
                this.tableAddress();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableReference(): TableReferenceContext {
        let localContext = new TableReferenceContext(this.context, this.state);
        this.enterRule(localContext, 420, GslParser.RULE_tableReference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2078;
            this.match(GslParser.TABLE);
            this.state = 2079;
            this.match(GslParser.COLON);
            this.state = 2087;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GslParser.NUMBER:
                {
                this.state = 2080;
                this.match(GslParser.NUMBER);
                }
                break;
            case GslParser.V_REGISTER:
                {
                this.state = 2081;
                this.match(GslParser.V_REGISTER);
                }
                break;
            case GslParser.A_REGISTER:
                {
                this.state = 2082;
                this.match(GslParser.A_REGISTER);
                }
                break;
            case GslParser.B_REGISTER:
                {
                this.state = 2083;
                this.match(GslParser.B_REGISTER);
                }
                break;
            case GslParser.SYS_STRTABLE:
                {
                this.state = 2084;
                this.match(GslParser.SYS_STRTABLE);
                }
                break;
            case GslParser.SYS_INTTABLE:
                {
                this.state = 2085;
                this.match(GslParser.SYS_INTTABLE);
                }
                break;
            case GslParser.PLAYER_NODE:
            case GslParser.ROOM_NODE:
            case GslParser.CREATURE_NODE:
            case GslParser.OBJECT_NODE:
            case GslParser.EVENT_NODE:
                {
                this.state = 2086;
                this.nodeFieldRef();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableAddress(): TableAddressContext {
        let localContext = new TableAddressContext(this.context, this.state);
        this.enterRule(localContext, 422, GslParser.RULE_tableAddress);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 2091;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 306) {
                {
                this.state = 2089;
                this.match(GslParser.TABLE);
                this.state = 2090;
                this.match(GslParser.COLON);
                }
            }

            this.state = 2100;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GslParser.NUMBER:
                {
                this.state = 2093;
                this.match(GslParser.NUMBER);
                }
                break;
            case GslParser.V_REGISTER:
                {
                this.state = 2094;
                this.match(GslParser.V_REGISTER);
                }
                break;
            case GslParser.A_REGISTER:
                {
                this.state = 2095;
                this.match(GslParser.A_REGISTER);
                }
                break;
            case GslParser.B_REGISTER:
                {
                this.state = 2096;
                this.match(GslParser.B_REGISTER);
                }
                break;
            case GslParser.SYS_STRTABLE:
                {
                this.state = 2097;
                this.match(GslParser.SYS_STRTABLE);
                }
                break;
            case GslParser.SYS_INTTABLE:
                {
                this.state = 2098;
                this.match(GslParser.SYS_INTTABLE);
                }
                break;
            case GslParser.PLAYER_NODE:
            case GslParser.ROOM_NODE:
            case GslParser.CREATURE_NODE:
            case GslParser.OBJECT_NODE:
            case GslParser.EVENT_NODE:
                {
                this.state = 2099;
                this.nodeFieldRef();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2102;
            this.match(GslParser.LBRACK);
            this.state = 2103;
            this.valueExpression();
            this.state = 2104;
            this.match(GslParser.COMMA);
            this.state = 2105;
            this.valueExpression();
            this.state = 2106;
            this.match(GslParser.COMMA);
            this.state = 2107;
            this.valueExpression();
            this.state = 2108;
            this.match(GslParser.RBRACK);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldName(): FieldNameContext {
        let localContext = new FieldNameContext(this.context, this.state);
        this.enterRule(localContext, 424, GslParser.RULE_fieldName);
        let _la: number;
        try {
            this.state = 2122;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GslParser.NUMBER:
            case GslParser.UNDERSCORE:
            case GslParser.WORD:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2111;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 2110;
                    _la = this.tokenStream.LA(1);
                    if(!(((((_la - 335)) & ~0x1F) === 0 && ((1 << (_la - 335)) & 49153) !== 0))) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 2113;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (((((_la - 335)) & ~0x1F) === 0 && ((1 << (_la - 335)) & 49153) !== 0));
                }
                break;
            case GslParser.SPELL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2115;
                this.match(GslParser.SPELL);
                }
                break;
            case GslParser.HITS:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2116;
                this.match(GslParser.HITS);
                }
                break;
            case GslParser.SIZE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 2117;
                this.match(GslParser.SIZE);
                }
                break;
            case GslParser.TYPE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 2118;
                this.match(GslParser.TYPE);
                }
                break;
            case GslParser.TYPE_D:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 2119;
                this.match(GslParser.TYPE_D);
                }
                break;
            case GslParser.ENCUM:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 2120;
                this.match(GslParser.ENCUM);
                }
                break;
            case GslParser.NONEXIST:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 2121;
                this.match(GslParser.NONEXIST);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nodeFieldRef(): NodeFieldRefContext {
        let localContext = new NodeFieldRefContext(this.context, this.state);
        this.enterRule(localContext, 426, GslParser.RULE_nodeFieldRef);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2124;
            this.node();
            this.state = 2125;
            this.match(GslParser.COLON);
            this.state = 2127;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 2126;
                    _la = this.tokenStream.LA(1);
                    if(_la<=0 || (((_la) & ~0x1F) === 0 && ((1 << _la) & 898) !== 0) || _la === 43 || ((((_la - 336)) & ~0x1F) === 0 && ((1 << (_la - 336)) & 40959) !== 0)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2129;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 57, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,351,2132,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
        2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,
        7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,
        2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,
        7,197,2,198,7,198,2,199,7,199,2,200,7,200,2,201,7,201,2,202,7,202,
        2,203,7,203,2,204,7,204,2,205,7,205,2,206,7,206,2,207,7,207,2,208,
        7,208,2,209,7,209,2,210,7,210,2,211,7,211,2,212,7,212,2,213,7,213,
        1,0,1,0,1,0,4,0,432,8,0,11,0,12,0,433,1,0,1,0,1,1,1,1,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,633,
        8,2,1,3,1,3,1,3,3,3,638,8,3,1,3,1,3,1,3,5,3,643,8,3,10,3,12,3,646,
        9,3,1,3,5,3,649,8,3,10,3,12,3,652,9,3,1,3,3,3,655,8,3,1,3,1,3,1,
        3,1,4,1,4,1,4,3,4,663,8,4,1,4,1,4,1,4,5,4,668,8,4,10,4,12,4,671,
        9,4,1,5,1,5,1,5,5,5,676,8,5,10,5,12,5,679,9,5,1,6,1,6,1,6,3,6,684,
        8,6,1,6,1,6,1,6,5,6,689,8,6,10,6,12,6,692,9,6,1,6,1,6,5,6,696,8,
        6,10,6,12,6,699,9,6,1,6,1,6,1,6,1,7,1,7,1,7,3,7,707,8,7,1,7,1,7,
        5,7,711,8,7,10,7,12,7,714,9,7,1,7,1,7,1,7,1,8,1,8,1,8,5,8,722,8,
        8,10,8,12,8,725,9,8,1,8,1,8,1,8,1,9,1,9,1,9,3,9,733,8,9,1,9,1,9,
        4,9,737,8,9,11,9,12,9,738,1,9,1,9,1,9,1,10,1,10,1,10,5,10,747,8,
        10,10,10,12,10,750,9,10,4,10,752,8,10,11,10,12,10,753,1,10,1,10,
        1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,
        1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
        1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,
        1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,
        1,18,3,18,811,8,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,
        1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,
        1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,
        1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,
        1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
        1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,3,31,897,8,31,
        1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,
        1,34,1,34,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,
        1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,
        1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,41,
        1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,
        1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,45,
        1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
        1,46,1,46,1,46,1,46,3,46,994,8,46,1,46,1,46,1,47,1,47,1,47,1,47,
        1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,
        1,49,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,
        3,51,1028,8,51,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,
        1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,
        1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,
        1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,
        1,59,1,59,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,62,1,62,1,62,
        4,62,1092,8,62,11,62,12,62,1093,1,62,1,62,1,62,1,63,1,63,1,63,1,
        63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,3,
        65,1115,8,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,
        67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,69,1,
        69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,
        71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,
        73,1,74,1,74,1,74,1,74,1,74,1,74,3,74,1173,8,74,1,74,1,74,1,74,1,
        74,1,74,1,74,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,77,1,77,1,
        77,1,77,1,77,1,77,1,77,1,77,1,77,3,77,1198,8,77,1,77,1,77,1,78,1,
        78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,
        80,1,80,1,80,1,80,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,1,
        83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,
        84,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,86,1,86,1,86,1,
        86,1,86,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,88,1,89,1,
        89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,3,
        91,1281,8,91,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,
        93,1,93,1,94,1,94,1,94,1,94,3,94,1299,8,94,1,94,1,94,1,95,1,95,1,
        95,1,95,3,95,1307,8,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,
        96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,
        98,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,101,1,
        101,1,101,1,101,1,102,1,102,1,102,1,103,1,103,1,103,1,103,1,103,
        1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,
        1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,
        1,107,1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,
        1,110,1,110,1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,112,
        1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,114,1,114,
        1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,116,1,116,1,116,
        1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,1,118,1,118,
        1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,1,120,1,120,1,120,
        1,120,5,120,1442,8,120,10,120,12,120,1445,9,120,1,120,1,120,1,120,
        1,121,1,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,1,122,1,122,
        1,122,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,1,123,3,123,
        1471,8,123,1,123,1,123,1,123,1,124,1,124,1,124,1,124,1,124,1,125,
        1,125,1,125,1,125,1,126,1,126,1,126,1,126,1,126,1,127,1,127,1,127,
        1,127,1,128,1,128,1,128,1,128,1,129,1,129,1,129,1,129,1,129,1,129,
        3,129,1504,8,129,1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,131,
        1,131,1,131,1,131,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,
        1,133,1,133,1,134,1,134,1,134,1,134,1,135,1,135,1,135,1,135,1,135,
        1,135,1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,138,1,138,
        1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,1,139,
        1,139,1,139,3,139,1560,8,139,1,139,1,139,1,139,1,139,1,139,1,140,
        1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,141,
        1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,143,1,143,1,144,
        1,144,1,144,1,144,1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,146,
        1,147,1,147,1,147,1,147,1,147,1,148,1,148,1,148,4,148,1609,8,148,
        11,148,12,148,1610,1,148,1,148,1,148,1,149,1,149,1,149,1,149,1,149,
        1,149,1,149,1,149,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
        1,150,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,
        1,152,1,153,1,153,1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,155,
        1,155,1,155,3,155,1656,8,155,1,155,1,155,1,155,1,155,1,156,1,156,
        1,156,3,156,1665,8,156,1,156,1,156,1,156,1,156,1,157,1,157,1,157,
        1,157,1,157,1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,
        1,158,1,158,1,158,1,158,1,159,1,159,1,159,1,159,1,159,1,159,1,159,
        1,159,1,160,1,160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,162,1,162,1,162,1,163,1,163,1,163,1,164,
        1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,165,
        1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,168,1,168,1,168,
        1,168,1,168,1,168,1,169,1,169,1,169,1,169,1,169,1,170,1,170,1,170,
        1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,1,171,1,171,
        1,171,1,171,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,172,1,173,
        1,173,1,173,3,173,1775,8,173,1,173,1,173,1,173,3,173,1780,8,173,
        1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,
        1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,
        1,173,1,173,1,173,1,173,1,173,3,173,1809,8,173,1,174,1,174,1,174,
        1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,175,1,175,1,175,1,175,
        1,175,3,175,1826,8,175,1,175,1,175,1,176,1,176,1,176,1,176,1,176,
        1,176,1,177,1,177,1,177,1,177,1,178,1,178,1,178,1,179,1,179,1,179,
        1,179,1,179,1,179,1,179,1,179,1,180,1,180,1,180,1,180,1,180,1,180,
        1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,182,
        1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,183,1,183,
        1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,185,1,185,1,185,
        1,185,1,185,1,185,1,186,1,186,1,186,3,186,1896,8,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,187,1,187,1,187,1,187,1,187,1,188,1,188,
        1,188,1,188,1,189,1,189,1,189,1,189,1,190,1,190,1,190,1,190,1,191,
        1,191,1,191,1,191,1,192,1,192,1,192,1,192,1,193,1,193,1,193,1,193,
        1,194,1,194,1,194,1,194,1,194,1,194,1,195,1,195,1,195,1,195,1,195,
        1,195,1,196,1,196,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,197,
        1,197,1,197,1,198,1,198,1,198,1,198,1,198,1,198,1,199,1,199,1,199,
        1,199,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,1,200,
        1,200,3,200,1978,8,200,1,201,1,201,1,201,1,202,1,202,1,202,1,202,
        4,202,1987,8,202,11,202,12,202,1988,1,202,1,202,1,203,1,203,1,203,
        1,203,4,203,1997,8,203,11,203,12,203,1998,1,203,1,203,1,204,1,204,
        1,204,1,204,1,204,1,204,1,204,3,204,2010,8,204,1,205,1,205,1,205,
        1,205,4,205,2016,8,205,11,205,12,205,2017,1,205,1,205,1,206,1,206,
        1,206,1,206,1,206,1,206,1,207,1,207,1,208,1,208,1,208,1,208,1,208,
        1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,
        1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,
        1,208,3,208,2058,8,208,1,209,1,209,1,209,1,209,1,209,1,209,1,209,
        1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,3,209,
        2077,8,209,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,210,
        3,210,2088,8,210,1,211,1,211,3,211,2092,8,211,1,211,1,211,1,211,
        1,211,1,211,1,211,1,211,3,211,2101,8,211,1,211,1,211,1,211,1,211,
        1,211,1,211,1,211,1,211,1,212,4,212,2112,8,212,11,212,12,212,2113,
        1,212,1,212,1,212,1,212,1,212,1,212,1,212,3,212,2123,8,212,1,213,
        1,213,1,213,4,213,2128,8,213,11,213,12,213,2129,1,213,0,0,214,0,
        2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
        48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,
        92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
        126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
        158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,
        190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,
        222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,
        254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,
        286,288,290,292,294,296,298,300,302,304,306,308,310,312,314,316,
        318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,
        350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,
        382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,
        414,416,418,420,422,424,426,0,26,1,0,49,50,1,0,51,52,2,0,57,57,59,
        59,1,0,44,45,2,0,44,44,46,46,2,0,261,261,288,288,3,0,259,259,286,
        286,290,290,4,0,219,219,244,244,301,301,306,306,1,0,46,48,1,0,10,
        12,1,0,13,14,10,0,215,215,270,270,273,273,279,280,283,285,297,297,
        300,300,304,305,314,314,323,323,4,0,116,119,178,178,181,184,252,
        252,4,0,251,251,264,264,292,292,299,299,2,0,44,44,47,47,2,0,256,
        257,291,291,2,0,254,254,321,321,3,0,89,89,162,162,350,350,2,0,301,
        301,306,306,2,0,44,44,46,48,3,0,9,9,338,339,343,347,2,0,9,9,338,
        339,2,0,269,269,274,278,1,0,44,48,2,0,335,335,349,350,5,0,1,1,7,
        9,43,43,336,348,351,351,2253,0,431,1,0,0,0,2,437,1,0,0,0,4,632,1,
        0,0,0,6,634,1,0,0,0,8,659,1,0,0,0,10,672,1,0,0,0,12,680,1,0,0,0,
        14,703,1,0,0,0,16,718,1,0,0,0,18,729,1,0,0,0,20,751,1,0,0,0,22,758,
        1,0,0,0,24,764,1,0,0,0,26,770,1,0,0,0,28,776,1,0,0,0,30,793,1,0,
        0,0,32,797,1,0,0,0,34,801,1,0,0,0,36,807,1,0,0,0,38,816,1,0,0,0,
        40,823,1,0,0,0,42,833,1,0,0,0,44,843,1,0,0,0,46,847,1,0,0,0,48,851,
        1,0,0,0,50,857,1,0,0,0,52,863,1,0,0,0,54,867,1,0,0,0,56,871,1,0,
        0,0,58,878,1,0,0,0,60,886,1,0,0,0,62,892,1,0,0,0,64,900,1,0,0,0,
        66,903,1,0,0,0,68,907,1,0,0,0,70,913,1,0,0,0,72,917,1,0,0,0,74,923,
        1,0,0,0,76,929,1,0,0,0,78,935,1,0,0,0,80,943,1,0,0,0,82,949,1,0,
        0,0,84,955,1,0,0,0,86,961,1,0,0,0,88,969,1,0,0,0,90,975,1,0,0,0,
        92,981,1,0,0,0,94,997,1,0,0,0,96,1003,1,0,0,0,98,1011,1,0,0,0,100,
        1019,1,0,0,0,102,1023,1,0,0,0,104,1035,1,0,0,0,106,1039,1,0,0,0,
        108,1043,1,0,0,0,110,1049,1,0,0,0,112,1052,1,0,0,0,114,1056,1,0,
        0,0,116,1064,1,0,0,0,118,1073,1,0,0,0,120,1080,1,0,0,0,122,1084,
        1,0,0,0,124,1088,1,0,0,0,126,1098,1,0,0,0,128,1104,1,0,0,0,130,1109,
        1,0,0,0,132,1118,1,0,0,0,134,1126,1,0,0,0,136,1132,1,0,0,0,138,1138,
        1,0,0,0,140,1144,1,0,0,0,142,1150,1,0,0,0,144,1156,1,0,0,0,146,1160,
        1,0,0,0,148,1166,1,0,0,0,150,1180,1,0,0,0,152,1184,1,0,0,0,154,1188,
        1,0,0,0,156,1201,1,0,0,0,158,1207,1,0,0,0,160,1213,1,0,0,0,162,1219,
        1,0,0,0,164,1222,1,0,0,0,166,1228,1,0,0,0,168,1234,1,0,0,0,170,1242,
        1,0,0,0,172,1250,1,0,0,0,174,1256,1,0,0,0,176,1260,1,0,0,0,178,1266,
        1,0,0,0,180,1272,1,0,0,0,182,1276,1,0,0,0,184,1284,1,0,0,0,186,1289,
        1,0,0,0,188,1294,1,0,0,0,190,1302,1,0,0,0,192,1310,1,0,0,0,194,1318,
        1,0,0,0,196,1326,1,0,0,0,198,1330,1,0,0,0,200,1336,1,0,0,0,202,1340,
        1,0,0,0,204,1344,1,0,0,0,206,1347,1,0,0,0,208,1352,1,0,0,0,210,1359,
        1,0,0,0,212,1363,1,0,0,0,214,1371,1,0,0,0,216,1375,1,0,0,0,218,1380,
        1,0,0,0,220,1385,1,0,0,0,222,1390,1,0,0,0,224,1395,1,0,0,0,226,1400,
        1,0,0,0,228,1405,1,0,0,0,230,1410,1,0,0,0,232,1415,1,0,0,0,234,1421,
        1,0,0,0,236,1427,1,0,0,0,238,1433,1,0,0,0,240,1437,1,0,0,0,242,1449,
        1,0,0,0,244,1455,1,0,0,0,246,1461,1,0,0,0,248,1475,1,0,0,0,250,1480,
        1,0,0,0,252,1484,1,0,0,0,254,1489,1,0,0,0,256,1493,1,0,0,0,258,1497,
        1,0,0,0,260,1508,1,0,0,0,262,1512,1,0,0,0,264,1516,1,0,0,0,266,1521,
        1,0,0,0,268,1526,1,0,0,0,270,1530,1,0,0,0,272,1536,1,0,0,0,274,1540,
        1,0,0,0,276,1544,1,0,0,0,278,1551,1,0,0,0,280,1566,1,0,0,0,282,1572,
        1,0,0,0,284,1578,1,0,0,0,286,1582,1,0,0,0,288,1588,1,0,0,0,290,1592,
        1,0,0,0,292,1596,1,0,0,0,294,1600,1,0,0,0,296,1605,1,0,0,0,298,1615,
        1,0,0,0,300,1623,1,0,0,0,302,1632,1,0,0,0,304,1639,1,0,0,0,306,1643,
        1,0,0,0,308,1647,1,0,0,0,310,1652,1,0,0,0,312,1661,1,0,0,0,314,1670,
        1,0,0,0,316,1678,1,0,0,0,318,1688,1,0,0,0,320,1696,1,0,0,0,322,1700,
        1,0,0,0,324,1710,1,0,0,0,326,1713,1,0,0,0,328,1716,1,0,0,0,330,1719,
        1,0,0,0,332,1728,1,0,0,0,334,1732,1,0,0,0,336,1736,1,0,0,0,338,1742,
        1,0,0,0,340,1747,1,0,0,0,342,1755,1,0,0,0,344,1763,1,0,0,0,346,1808,
        1,0,0,0,348,1810,1,0,0,0,350,1816,1,0,0,0,352,1829,1,0,0,0,354,1835,
        1,0,0,0,356,1839,1,0,0,0,358,1842,1,0,0,0,360,1850,1,0,0,0,362,1856,
        1,0,0,0,364,1866,1,0,0,0,366,1870,1,0,0,0,368,1878,1,0,0,0,370,1886,
        1,0,0,0,372,1892,1,0,0,0,374,1903,1,0,0,0,376,1908,1,0,0,0,378,1912,
        1,0,0,0,380,1916,1,0,0,0,382,1920,1,0,0,0,384,1924,1,0,0,0,386,1928,
        1,0,0,0,388,1932,1,0,0,0,390,1938,1,0,0,0,392,1944,1,0,0,0,394,1950,
        1,0,0,0,396,1956,1,0,0,0,398,1962,1,0,0,0,400,1977,1,0,0,0,402,1979,
        1,0,0,0,404,1982,1,0,0,0,406,1992,1,0,0,0,408,2009,1,0,0,0,410,2011,
        1,0,0,0,412,2021,1,0,0,0,414,2027,1,0,0,0,416,2057,1,0,0,0,418,2076,
        1,0,0,0,420,2078,1,0,0,0,422,2091,1,0,0,0,424,2122,1,0,0,0,426,2124,
        1,0,0,0,428,432,3,240,120,0,429,432,3,4,2,0,430,432,5,351,0,0,431,
        428,1,0,0,0,431,429,1,0,0,0,431,430,1,0,0,0,432,433,1,0,0,0,433,
        431,1,0,0,0,433,434,1,0,0,0,434,435,1,0,0,0,435,436,5,0,0,1,436,
        1,1,0,0,0,437,438,5,351,0,0,438,3,1,0,0,0,439,633,5,351,0,0,440,
        633,3,38,19,0,441,633,3,28,14,0,442,633,3,24,12,0,443,633,3,36,18,
        0,444,633,3,40,20,0,445,633,3,42,21,0,446,633,3,44,22,0,447,633,
        3,46,23,0,448,633,3,52,26,0,449,633,3,56,28,0,450,633,3,58,29,0,
        451,633,3,60,30,0,452,633,3,62,31,0,453,633,3,64,32,0,454,633,3,
        66,33,0,455,633,3,86,43,0,456,633,3,92,46,0,457,633,3,98,49,0,458,
        633,3,114,57,0,459,633,3,20,10,0,460,633,3,122,61,0,461,633,3,124,
        62,0,462,633,3,132,66,0,463,633,3,134,67,0,464,633,3,142,71,0,465,
        633,3,152,76,0,466,633,3,154,77,0,467,633,3,160,80,0,468,633,3,162,
        81,0,469,633,3,6,3,0,470,633,3,178,89,0,471,633,3,182,91,0,472,633,
        3,184,92,0,473,633,3,186,93,0,474,633,3,188,94,0,475,633,3,190,95,
        0,476,633,3,192,96,0,477,633,3,194,97,0,478,633,3,200,100,0,479,
        633,3,202,101,0,480,633,3,204,102,0,481,633,3,210,105,0,482,633,
        3,214,107,0,483,633,3,216,108,0,484,633,3,218,109,0,485,633,3,220,
        110,0,486,633,3,222,111,0,487,633,3,224,112,0,488,633,3,226,113,
        0,489,633,3,228,114,0,490,633,3,230,115,0,491,633,3,234,117,0,492,
        633,3,236,118,0,493,633,3,18,9,0,494,633,3,238,119,0,495,633,3,242,
        121,0,496,633,3,246,123,0,497,633,3,248,124,0,498,633,3,250,125,
        0,499,633,3,254,127,0,500,633,3,256,128,0,501,633,3,258,129,0,502,
        633,3,260,130,0,503,633,3,262,131,0,504,633,3,276,138,0,505,633,
        3,278,139,0,506,633,3,284,142,0,507,633,3,296,148,0,508,633,3,298,
        149,0,509,633,3,300,150,0,510,633,3,302,151,0,511,633,3,310,155,
        0,512,633,3,316,158,0,513,633,3,322,161,0,514,633,3,328,164,0,515,
        633,3,336,168,0,516,633,3,338,169,0,517,633,3,342,171,0,518,633,
        3,344,172,0,519,633,3,346,173,0,520,633,3,350,175,0,521,633,3,354,
        177,0,522,633,3,356,178,0,523,633,3,360,180,0,524,633,3,362,181,
        0,525,633,3,364,182,0,526,633,3,368,184,0,527,633,3,370,185,0,528,
        633,3,374,187,0,529,633,3,380,190,0,530,633,3,384,192,0,531,633,
        3,388,194,0,532,633,3,12,6,0,533,633,3,392,196,0,534,633,3,394,197,
        0,535,633,3,396,198,0,536,633,3,390,195,0,537,633,3,88,44,0,538,
        633,3,90,45,0,539,633,3,94,47,0,540,633,3,308,154,0,541,633,3,304,
        152,0,542,633,3,306,153,0,543,633,3,312,156,0,544,633,3,22,11,0,
        545,633,3,26,13,0,546,633,3,30,15,0,547,633,3,32,16,0,548,633,3,
        34,17,0,549,633,3,48,24,0,550,633,3,50,25,0,551,633,3,54,27,0,552,
        633,3,68,34,0,553,633,3,70,35,0,554,633,3,136,68,0,555,633,3,138,
        69,0,556,633,3,140,70,0,557,633,3,158,79,0,558,633,3,144,72,0,559,
        633,3,146,73,0,560,633,3,148,74,0,561,633,3,150,75,0,562,633,3,156,
        78,0,563,633,3,96,48,0,564,633,3,112,56,0,565,633,3,174,87,0,566,
        633,3,292,146,0,567,633,3,314,157,0,568,633,3,208,104,0,569,633,
        3,76,38,0,570,633,3,74,37,0,571,633,3,72,36,0,572,633,3,78,39,0,
        573,633,3,80,40,0,574,633,3,82,41,0,575,633,3,84,42,0,576,633,3,
        100,50,0,577,633,3,102,51,0,578,633,3,104,52,0,579,633,3,106,53,
        0,580,633,3,108,54,0,581,633,3,110,55,0,582,633,3,116,58,0,583,633,
        3,118,59,0,584,633,3,120,60,0,585,633,3,126,63,0,586,633,3,128,64,
        0,587,633,3,130,65,0,588,633,3,164,82,0,589,633,3,166,83,0,590,633,
        3,170,85,0,591,633,3,168,84,0,592,633,3,172,86,0,593,633,3,180,90,
        0,594,633,3,176,88,0,595,633,3,196,98,0,596,633,3,198,99,0,597,633,
        3,206,103,0,598,633,3,212,106,0,599,633,3,232,116,0,600,633,3,244,
        122,0,601,633,3,252,126,0,602,633,3,266,133,0,603,633,3,268,134,
        0,604,633,3,264,132,0,605,633,3,270,135,0,606,633,3,272,136,0,607,
        633,3,274,137,0,608,633,3,280,140,0,609,633,3,282,141,0,610,633,
        3,286,143,0,611,633,3,288,144,0,612,633,3,290,145,0,613,633,3,294,
        147,0,614,633,3,318,159,0,615,633,3,320,160,0,616,633,3,324,162,
        0,617,633,3,326,163,0,618,633,3,330,165,0,619,633,3,332,166,0,620,
        633,3,334,167,0,621,633,3,340,170,0,622,633,3,348,174,0,623,633,
        3,352,176,0,624,633,3,358,179,0,625,633,3,366,183,0,626,633,3,372,
        186,0,627,633,3,376,188,0,628,633,3,378,189,0,629,633,3,382,191,
        0,630,633,3,386,193,0,631,633,3,398,199,0,632,439,1,0,0,0,632,440,
        1,0,0,0,632,441,1,0,0,0,632,442,1,0,0,0,632,443,1,0,0,0,632,444,
        1,0,0,0,632,445,1,0,0,0,632,446,1,0,0,0,632,447,1,0,0,0,632,448,
        1,0,0,0,632,449,1,0,0,0,632,450,1,0,0,0,632,451,1,0,0,0,632,452,
        1,0,0,0,632,453,1,0,0,0,632,454,1,0,0,0,632,455,1,0,0,0,632,456,
        1,0,0,0,632,457,1,0,0,0,632,458,1,0,0,0,632,459,1,0,0,0,632,460,
        1,0,0,0,632,461,1,0,0,0,632,462,1,0,0,0,632,463,1,0,0,0,632,464,
        1,0,0,0,632,465,1,0,0,0,632,466,1,0,0,0,632,467,1,0,0,0,632,468,
        1,0,0,0,632,469,1,0,0,0,632,470,1,0,0,0,632,471,1,0,0,0,632,472,
        1,0,0,0,632,473,1,0,0,0,632,474,1,0,0,0,632,475,1,0,0,0,632,476,
        1,0,0,0,632,477,1,0,0,0,632,478,1,0,0,0,632,479,1,0,0,0,632,480,
        1,0,0,0,632,481,1,0,0,0,632,482,1,0,0,0,632,483,1,0,0,0,632,484,
        1,0,0,0,632,485,1,0,0,0,632,486,1,0,0,0,632,487,1,0,0,0,632,488,
        1,0,0,0,632,489,1,0,0,0,632,490,1,0,0,0,632,491,1,0,0,0,632,492,
        1,0,0,0,632,493,1,0,0,0,632,494,1,0,0,0,632,495,1,0,0,0,632,496,
        1,0,0,0,632,497,1,0,0,0,632,498,1,0,0,0,632,499,1,0,0,0,632,500,
        1,0,0,0,632,501,1,0,0,0,632,502,1,0,0,0,632,503,1,0,0,0,632,504,
        1,0,0,0,632,505,1,0,0,0,632,506,1,0,0,0,632,507,1,0,0,0,632,508,
        1,0,0,0,632,509,1,0,0,0,632,510,1,0,0,0,632,511,1,0,0,0,632,512,
        1,0,0,0,632,513,1,0,0,0,632,514,1,0,0,0,632,515,1,0,0,0,632,516,
        1,0,0,0,632,517,1,0,0,0,632,518,1,0,0,0,632,519,1,0,0,0,632,520,
        1,0,0,0,632,521,1,0,0,0,632,522,1,0,0,0,632,523,1,0,0,0,632,524,
        1,0,0,0,632,525,1,0,0,0,632,526,1,0,0,0,632,527,1,0,0,0,632,528,
        1,0,0,0,632,529,1,0,0,0,632,530,1,0,0,0,632,531,1,0,0,0,632,532,
        1,0,0,0,632,533,1,0,0,0,632,534,1,0,0,0,632,535,1,0,0,0,632,536,
        1,0,0,0,632,537,1,0,0,0,632,538,1,0,0,0,632,539,1,0,0,0,632,540,
        1,0,0,0,632,541,1,0,0,0,632,542,1,0,0,0,632,543,1,0,0,0,632,544,
        1,0,0,0,632,545,1,0,0,0,632,546,1,0,0,0,632,547,1,0,0,0,632,548,
        1,0,0,0,632,549,1,0,0,0,632,550,1,0,0,0,632,551,1,0,0,0,632,552,
        1,0,0,0,632,553,1,0,0,0,632,554,1,0,0,0,632,555,1,0,0,0,632,556,
        1,0,0,0,632,557,1,0,0,0,632,558,1,0,0,0,632,559,1,0,0,0,632,560,
        1,0,0,0,632,561,1,0,0,0,632,562,1,0,0,0,632,563,1,0,0,0,632,564,
        1,0,0,0,632,565,1,0,0,0,632,566,1,0,0,0,632,567,1,0,0,0,632,568,
        1,0,0,0,632,569,1,0,0,0,632,570,1,0,0,0,632,571,1,0,0,0,632,572,
        1,0,0,0,632,573,1,0,0,0,632,574,1,0,0,0,632,575,1,0,0,0,632,576,
        1,0,0,0,632,577,1,0,0,0,632,578,1,0,0,0,632,579,1,0,0,0,632,580,
        1,0,0,0,632,581,1,0,0,0,632,582,1,0,0,0,632,583,1,0,0,0,632,584,
        1,0,0,0,632,585,1,0,0,0,632,586,1,0,0,0,632,587,1,0,0,0,632,588,
        1,0,0,0,632,589,1,0,0,0,632,590,1,0,0,0,632,591,1,0,0,0,632,592,
        1,0,0,0,632,593,1,0,0,0,632,594,1,0,0,0,632,595,1,0,0,0,632,596,
        1,0,0,0,632,597,1,0,0,0,632,598,1,0,0,0,632,599,1,0,0,0,632,600,
        1,0,0,0,632,601,1,0,0,0,632,602,1,0,0,0,632,603,1,0,0,0,632,604,
        1,0,0,0,632,605,1,0,0,0,632,606,1,0,0,0,632,607,1,0,0,0,632,608,
        1,0,0,0,632,609,1,0,0,0,632,610,1,0,0,0,632,611,1,0,0,0,632,612,
        1,0,0,0,632,613,1,0,0,0,632,614,1,0,0,0,632,615,1,0,0,0,632,616,
        1,0,0,0,632,617,1,0,0,0,632,618,1,0,0,0,632,619,1,0,0,0,632,620,
        1,0,0,0,632,621,1,0,0,0,632,622,1,0,0,0,632,623,1,0,0,0,632,624,
        1,0,0,0,632,625,1,0,0,0,632,626,1,0,0,0,632,627,1,0,0,0,632,628,
        1,0,0,0,632,629,1,0,0,0,632,630,1,0,0,0,632,631,1,0,0,0,633,5,1,
        0,0,0,634,637,7,0,0,0,635,638,3,400,200,0,636,638,3,408,204,0,637,
        635,1,0,0,0,637,636,1,0,0,0,638,639,1,0,0,0,639,640,5,61,0,0,640,
        644,3,2,1,0,641,643,3,4,2,0,642,641,1,0,0,0,643,646,1,0,0,0,644,
        642,1,0,0,0,644,645,1,0,0,0,645,650,1,0,0,0,646,644,1,0,0,0,647,
        649,3,8,4,0,648,647,1,0,0,0,649,652,1,0,0,0,650,648,1,0,0,0,650,
        651,1,0,0,0,651,654,1,0,0,0,652,650,1,0,0,0,653,655,3,10,5,0,654,
        653,1,0,0,0,654,655,1,0,0,0,655,656,1,0,0,0,656,657,5,62,0,0,657,
        658,3,2,1,0,658,7,1,0,0,0,659,662,7,1,0,0,660,663,3,400,200,0,661,
        663,3,408,204,0,662,660,1,0,0,0,662,661,1,0,0,0,663,664,1,0,0,0,
        664,665,5,61,0,0,665,669,3,2,1,0,666,668,3,4,2,0,667,666,1,0,0,0,
        668,671,1,0,0,0,669,667,1,0,0,0,669,670,1,0,0,0,670,9,1,0,0,0,671,
        669,1,0,0,0,672,673,5,53,0,0,673,677,3,2,1,0,674,676,3,4,2,0,675,
        674,1,0,0,0,676,679,1,0,0,0,677,675,1,0,0,0,677,678,1,0,0,0,678,
        11,1,0,0,0,679,677,1,0,0,0,680,683,5,55,0,0,681,684,3,400,200,0,
        682,684,3,408,204,0,683,681,1,0,0,0,683,682,1,0,0,0,684,685,1,0,
        0,0,685,690,3,2,1,0,686,689,3,14,7,0,687,689,5,351,0,0,688,686,1,
        0,0,0,688,687,1,0,0,0,689,692,1,0,0,0,690,688,1,0,0,0,690,691,1,
        0,0,0,691,697,1,0,0,0,692,690,1,0,0,0,693,696,3,16,8,0,694,696,5,
        351,0,0,695,693,1,0,0,0,695,694,1,0,0,0,696,699,1,0,0,0,697,695,
        1,0,0,0,697,698,1,0,0,0,698,700,1,0,0,0,699,697,1,0,0,0,700,701,
        5,62,0,0,701,702,3,2,1,0,702,13,1,0,0,0,703,706,5,56,0,0,704,707,
        3,400,200,0,705,707,3,408,204,0,706,704,1,0,0,0,706,705,1,0,0,0,
        707,708,1,0,0,0,708,712,3,2,1,0,709,711,3,4,2,0,710,709,1,0,0,0,
        711,714,1,0,0,0,712,710,1,0,0,0,712,713,1,0,0,0,713,715,1,0,0,0,
        714,712,1,0,0,0,715,716,5,62,0,0,716,717,3,2,1,0,717,15,1,0,0,0,
        718,719,5,100,0,0,719,723,3,2,1,0,720,722,3,4,2,0,721,720,1,0,0,
        0,722,725,1,0,0,0,723,721,1,0,0,0,723,724,1,0,0,0,724,726,1,0,0,
        0,725,723,1,0,0,0,726,727,5,62,0,0,727,728,3,2,1,0,728,17,1,0,0,
        0,729,732,5,54,0,0,730,733,3,400,200,0,731,733,3,408,204,0,732,730,
        1,0,0,0,732,731,1,0,0,0,733,734,1,0,0,0,734,736,3,2,1,0,735,737,
        3,4,2,0,736,735,1,0,0,0,737,738,1,0,0,0,738,736,1,0,0,0,738,739,
        1,0,0,0,739,740,1,0,0,0,740,741,5,62,0,0,741,742,3,2,1,0,742,19,
        1,0,0,0,743,744,7,2,0,0,744,748,3,2,1,0,745,747,3,4,2,0,746,745,
        1,0,0,0,747,750,1,0,0,0,748,746,1,0,0,0,748,749,1,0,0,0,749,752,
        1,0,0,0,750,748,1,0,0,0,751,743,1,0,0,0,752,753,1,0,0,0,753,751,
        1,0,0,0,753,754,1,0,0,0,754,755,1,0,0,0,755,756,5,226,0,0,756,757,
        3,2,1,0,757,21,1,0,0,0,758,759,5,66,0,0,759,760,3,400,200,0,760,
        761,5,330,0,0,761,762,5,44,0,0,762,763,3,2,1,0,763,23,1,0,0,0,764,
        765,5,64,0,0,765,766,3,408,204,0,766,767,5,330,0,0,767,768,3,414,
        207,0,768,769,3,2,1,0,769,25,1,0,0,0,770,771,5,67,0,0,771,772,3,
        408,204,0,772,773,5,312,0,0,773,774,3,408,204,0,774,775,3,2,1,0,
        775,27,1,0,0,0,776,777,5,65,0,0,777,778,5,260,0,0,778,779,3,400,
        200,0,779,780,5,318,0,0,780,781,3,400,200,0,781,782,5,319,0,0,782,
        783,3,400,200,0,783,784,5,266,0,0,784,785,3,400,200,0,785,786,5,
        322,0,0,786,787,3,414,207,0,787,788,5,327,0,0,788,789,3,400,200,
        0,789,790,5,219,0,0,790,791,3,400,200,0,791,792,3,2,1,0,792,29,1,
        0,0,0,793,794,5,68,0,0,794,795,5,44,0,0,795,796,3,2,1,0,796,31,1,
        0,0,0,797,798,5,69,0,0,798,799,5,44,0,0,799,800,3,2,1,0,800,33,1,
        0,0,0,801,802,5,70,0,0,802,803,3,400,200,0,803,804,5,267,0,0,804,
        805,7,3,0,0,805,806,3,2,1,0,806,35,1,0,0,0,807,810,5,71,0,0,808,
        811,3,400,200,0,809,811,3,408,204,0,810,808,1,0,0,0,810,809,1,0,
        0,0,811,812,1,0,0,0,812,813,5,186,0,0,813,814,3,408,204,0,814,815,
        3,2,1,0,815,37,1,0,0,0,816,817,5,72,0,0,817,818,7,4,0,0,818,819,
        5,331,0,0,819,820,7,4,0,0,820,821,5,316,0,0,821,822,3,400,200,0,
        822,39,1,0,0,0,823,824,5,74,0,0,824,825,3,400,200,0,825,826,5,268,
        0,0,826,827,3,400,200,0,827,828,5,330,0,0,828,829,3,400,200,0,829,
        830,5,267,0,0,830,831,3,416,208,0,831,832,3,2,1,0,832,41,1,0,0,0,
        833,834,5,75,0,0,834,835,3,400,200,0,835,836,5,268,0,0,836,837,3,
        400,200,0,837,838,5,330,0,0,838,839,3,400,200,0,839,840,5,267,0,
        0,840,841,3,416,208,0,841,842,3,2,1,0,842,43,1,0,0,0,843,844,5,76,
        0,0,844,845,7,3,0,0,845,846,3,2,1,0,846,45,1,0,0,0,847,848,5,77,
        0,0,848,849,7,3,0,0,849,850,3,2,1,0,850,47,1,0,0,0,851,852,5,78,
        0,0,852,853,3,400,200,0,853,854,5,267,0,0,854,855,7,3,0,0,855,856,
        3,2,1,0,856,49,1,0,0,0,857,858,5,79,0,0,858,859,7,5,0,0,859,860,
        3,408,204,0,860,861,3,408,204,0,861,862,3,2,1,0,862,51,1,0,0,0,863,
        864,5,80,0,0,864,865,3,400,200,0,865,866,3,2,1,0,866,53,1,0,0,0,
        867,868,5,82,0,0,868,869,5,44,0,0,869,870,3,2,1,0,870,55,1,0,0,0,
        871,872,5,81,0,0,872,873,7,6,0,0,873,874,3,408,204,0,874,875,5,327,
        0,0,875,876,3,400,200,0,876,877,3,2,1,0,877,57,1,0,0,0,878,879,5,
        83,0,0,879,880,7,4,0,0,880,881,5,63,0,0,881,882,3,400,200,0,882,
        883,5,267,0,0,883,884,3,416,208,0,884,885,3,2,1,0,885,59,1,0,0,0,
        886,887,5,84,0,0,887,888,3,414,207,0,888,889,5,260,0,0,889,890,3,
        400,200,0,890,891,3,2,1,0,891,61,1,0,0,0,892,896,5,85,0,0,893,897,
        3,426,213,0,894,897,3,416,208,0,895,897,3,418,209,0,896,893,1,0,
        0,0,896,894,1,0,0,0,896,895,1,0,0,0,897,898,1,0,0,0,898,899,3,2,
        1,0,899,63,1,0,0,0,900,901,5,86,0,0,901,902,3,2,1,0,902,65,1,0,0,
        0,903,904,5,87,0,0,904,905,3,400,200,0,905,906,3,2,1,0,906,67,1,
        0,0,0,907,908,5,88,0,0,908,909,5,44,0,0,909,910,5,317,0,0,910,911,
        5,47,0,0,911,912,3,2,1,0,912,69,1,0,0,0,913,914,5,89,0,0,914,915,
        5,44,0,0,915,916,3,2,1,0,916,71,1,0,0,0,917,918,5,90,0,0,918,919,
        5,46,0,0,919,920,5,330,0,0,920,921,5,46,0,0,921,922,3,2,1,0,922,
        73,1,0,0,0,923,924,5,90,0,0,924,925,5,48,0,0,925,926,5,330,0,0,926,
        927,5,48,0,0,927,928,3,2,1,0,928,75,1,0,0,0,929,930,5,90,0,0,930,
        931,5,47,0,0,931,932,5,330,0,0,932,933,5,47,0,0,933,934,3,2,1,0,
        934,77,1,0,0,0,935,936,5,91,0,0,936,937,5,44,0,0,937,938,5,315,0,
        0,938,939,5,46,0,0,939,940,5,326,0,0,940,941,3,400,200,0,941,942,
        3,2,1,0,942,79,1,0,0,0,943,944,5,92,0,0,944,945,5,46,0,0,945,946,
        5,267,0,0,946,947,5,46,0,0,947,948,3,2,1,0,948,81,1,0,0,0,949,950,
        5,92,0,0,950,951,5,48,0,0,951,952,5,267,0,0,952,953,5,48,0,0,953,
        954,3,2,1,0,954,83,1,0,0,0,955,956,5,92,0,0,956,957,5,47,0,0,957,
        958,5,267,0,0,958,959,5,47,0,0,959,960,3,2,1,0,960,85,1,0,0,0,961,
        962,5,93,0,0,962,963,3,400,200,0,963,964,5,289,0,0,964,965,3,400,
        200,0,965,966,5,267,0,0,966,967,3,414,207,0,967,968,3,2,1,0,968,
        87,1,0,0,0,969,970,5,94,0,0,970,971,3,400,200,0,971,972,5,267,0,
        0,972,973,5,47,0,0,973,974,3,2,1,0,974,89,1,0,0,0,975,976,5,95,0,
        0,976,977,3,400,200,0,977,978,5,267,0,0,978,979,5,45,0,0,979,980,
        3,2,1,0,980,91,1,0,0,0,981,982,5,96,0,0,982,983,5,316,0,0,983,984,
        3,400,200,0,984,985,5,302,0,0,985,986,3,400,200,0,986,987,3,400,
        200,0,987,988,3,400,200,0,988,993,5,267,0,0,989,994,5,10,0,0,990,
        994,5,11,0,0,991,994,5,12,0,0,992,994,3,426,213,0,993,989,1,0,0,
        0,993,990,1,0,0,0,993,991,1,0,0,0,993,992,1,0,0,0,994,995,1,0,0,
        0,995,996,3,2,1,0,996,93,1,0,0,0,997,998,5,97,0,0,998,999,3,408,
        204,0,999,1000,5,267,0,0,1000,1001,3,416,208,0,1001,1002,3,2,1,0,
        1002,95,1,0,0,0,1003,1004,5,98,0,0,1004,1005,7,4,0,0,1005,1006,5,
        306,0,0,1006,1007,3,408,204,0,1007,1008,5,316,0,0,1008,1009,3,400,
        200,0,1009,1010,3,2,1,0,1010,97,1,0,0,0,1011,1012,5,99,0,0,1012,
        1013,5,46,0,0,1013,1014,5,265,0,0,1014,1015,3,424,212,0,1015,1016,
        5,267,0,0,1016,1017,3,416,208,0,1017,1018,3,2,1,0,1018,99,1,0,0,
        0,1019,1020,5,101,0,0,1020,1021,3,400,200,0,1021,1022,3,2,1,0,1022,
        101,1,0,0,0,1023,1024,5,102,0,0,1024,1027,7,7,0,0,1025,1028,3,408,
        204,0,1026,1028,3,400,200,0,1027,1025,1,0,0,0,1027,1026,1,0,0,0,
        1028,1029,1,0,0,0,1029,1030,5,258,0,0,1030,1031,3,400,200,0,1031,
        1032,5,296,0,0,1032,1033,3,400,200,0,1033,1034,3,2,1,0,1034,103,
        1,0,0,0,1035,1036,5,103,0,0,1036,1037,3,400,200,0,1037,1038,3,2,
        1,0,1038,105,1,0,0,0,1039,1040,5,104,0,0,1040,1041,5,44,0,0,1041,
        1042,3,2,1,0,1042,107,1,0,0,0,1043,1044,5,105,0,0,1044,1045,3,408,
        204,0,1045,1046,5,267,0,0,1046,1047,7,8,0,0,1047,1048,3,2,1,0,1048,
        109,1,0,0,0,1049,1050,5,106,0,0,1050,1051,3,2,1,0,1051,111,1,0,0,
        0,1052,1053,5,107,0,0,1053,1054,5,44,0,0,1054,1055,3,2,1,0,1055,
        113,1,0,0,0,1056,1057,5,108,0,0,1057,1058,5,46,0,0,1058,1059,5,265,
        0,0,1059,1060,3,424,212,0,1060,1061,5,330,0,0,1061,1062,3,400,200,
        0,1062,1063,3,2,1,0,1063,115,1,0,0,0,1064,1065,5,109,0,0,1065,1066,
        5,260,0,0,1066,1067,3,400,200,0,1067,1068,5,319,0,0,1068,1069,3,
        400,200,0,1069,1070,5,268,0,0,1070,1071,3,414,207,0,1071,1072,3,
        2,1,0,1072,117,1,0,0,0,1073,1074,5,110,0,0,1074,1075,5,260,0,0,1075,
        1076,3,400,200,0,1076,1077,5,268,0,0,1077,1078,3,414,207,0,1078,
        1079,3,2,1,0,1079,119,1,0,0,0,1080,1081,5,111,0,0,1081,1082,7,9,
        0,0,1082,1083,3,2,1,0,1083,121,1,0,0,0,1084,1085,5,112,0,0,1085,
        1086,7,10,0,0,1086,1087,3,2,1,0,1087,123,1,0,0,0,1088,1089,5,58,
        0,0,1089,1091,3,2,1,0,1090,1092,3,4,2,0,1091,1090,1,0,0,0,1092,1093,
        1,0,0,0,1093,1091,1,0,0,0,1093,1094,1,0,0,0,1094,1095,1,0,0,0,1095,
        1096,5,57,0,0,1096,1097,3,2,1,0,1097,125,1,0,0,0,1098,1099,5,113,
        0,0,1099,1100,3,400,200,0,1100,1101,5,267,0,0,1101,1102,7,3,0,0,
        1102,1103,3,2,1,0,1103,127,1,0,0,0,1104,1105,5,114,0,0,1105,1106,
        5,44,0,0,1106,1107,7,11,0,0,1107,1108,3,2,1,0,1108,129,1,0,0,0,1109,
        1110,5,115,0,0,1110,1111,3,400,200,0,1111,1114,5,322,0,0,1112,1115,
        3,400,200,0,1113,1115,3,408,204,0,1114,1112,1,0,0,0,1114,1113,1,
        0,0,0,1115,1116,1,0,0,0,1116,1117,3,2,1,0,1117,131,1,0,0,0,1118,
        1119,5,120,0,0,1119,1120,7,12,0,0,1120,1121,3,414,207,0,1121,1122,
        5,267,0,0,1122,1123,3,414,207,0,1123,1124,7,13,0,0,1124,1125,3,2,
        1,0,1125,133,1,0,0,0,1126,1127,5,121,0,0,1127,1128,3,414,207,0,1128,
        1129,5,267,0,0,1129,1130,3,414,207,0,1130,1131,3,2,1,0,1131,135,
        1,0,0,0,1132,1133,5,122,0,0,1133,1134,3,400,200,0,1134,1135,5,267,
        0,0,1135,1136,5,45,0,0,1136,1137,3,2,1,0,1137,137,1,0,0,0,1138,1139,
        5,123,0,0,1139,1140,3,414,207,0,1140,1141,5,267,0,0,1141,1142,3,
        414,207,0,1142,1143,3,2,1,0,1143,139,1,0,0,0,1144,1145,5,124,0,0,
        1145,1146,5,45,0,0,1146,1147,5,267,0,0,1147,1148,5,45,0,0,1148,1149,
        3,2,1,0,1149,141,1,0,0,0,1150,1151,5,125,0,0,1151,1152,7,3,0,0,1152,
        1153,5,267,0,0,1153,1154,5,44,0,0,1154,1155,3,2,1,0,1155,143,1,0,
        0,0,1156,1157,5,126,0,0,1157,1158,5,46,0,0,1158,1159,3,2,1,0,1159,
        145,1,0,0,0,1160,1161,5,127,0,0,1161,1162,3,408,204,0,1162,1163,
        5,267,0,0,1163,1164,7,9,0,0,1164,1165,3,2,1,0,1165,147,1,0,0,0,1166,
        1172,5,128,0,0,1167,1173,3,400,200,0,1168,1173,5,263,0,0,1169,1173,
        5,255,0,0,1170,1173,5,294,0,0,1171,1173,5,293,0,0,1172,1167,1,0,
        0,0,1172,1168,1,0,0,0,1172,1169,1,0,0,0,1172,1170,1,0,0,0,1172,1171,
        1,0,0,0,1173,1174,1,0,0,0,1174,1175,5,328,0,0,1175,1176,7,14,0,0,
        1176,1177,5,267,0,0,1177,1178,7,9,0,0,1178,1179,3,2,1,0,1179,149,
        1,0,0,0,1180,1181,5,129,0,0,1181,1182,3,400,200,0,1182,1183,3,2,
        1,0,1183,151,1,0,0,0,1184,1185,5,130,0,0,1185,1186,5,44,0,0,1186,
        1187,3,2,1,0,1187,153,1,0,0,0,1188,1189,5,131,0,0,1189,1190,3,400,
        200,0,1190,1191,5,325,0,0,1191,1192,3,400,200,0,1192,1193,3,400,
        200,0,1193,1194,3,400,200,0,1194,1197,5,267,0,0,1195,1198,3,416,
        208,0,1196,1198,3,418,209,0,1197,1195,1,0,0,0,1197,1196,1,0,0,0,
        1198,1199,1,0,0,0,1199,1200,3,2,1,0,1200,155,1,0,0,0,1201,1202,5,
        132,0,0,1202,1203,3,400,200,0,1203,1204,5,267,0,0,1204,1205,3,418,
        209,0,1205,1206,3,2,1,0,1206,157,1,0,0,0,1207,1208,5,133,0,0,1208,
        1209,5,44,0,0,1209,1210,5,267,0,0,1210,1211,7,9,0,0,1211,1212,3,
        2,1,0,1212,159,1,0,0,0,1213,1214,5,134,0,0,1214,1215,3,400,200,0,
        1215,1216,5,330,0,0,1216,1217,3,414,207,0,1217,1218,3,2,1,0,1218,
        161,1,0,0,0,1219,1220,5,7,0,0,1220,1221,3,2,1,0,1221,163,1,0,0,0,
        1222,1223,5,136,0,0,1223,1224,3,408,204,0,1224,1225,5,267,0,0,1225,
        1226,7,9,0,0,1226,1227,3,2,1,0,1227,165,1,0,0,0,1228,1229,5,137,
        0,0,1229,1230,3,408,204,0,1230,1231,5,267,0,0,1231,1232,7,9,0,0,
        1232,1233,3,2,1,0,1233,167,1,0,0,0,1234,1235,5,138,0,0,1235,1236,
        7,4,0,0,1236,1237,5,253,0,0,1237,1238,3,400,200,0,1238,1239,5,326,
        0,0,1239,1240,3,400,200,0,1240,1241,3,2,1,0,1241,169,1,0,0,0,1242,
        1243,5,139,0,0,1243,1244,5,44,0,0,1244,1245,5,253,0,0,1245,1246,
        3,400,200,0,1246,1247,5,326,0,0,1247,1248,3,400,200,0,1248,1249,
        3,2,1,0,1249,171,1,0,0,0,1250,1251,5,140,0,0,1251,1252,7,4,0,0,1252,
        1253,5,271,0,0,1253,1254,3,400,200,0,1254,1255,3,2,1,0,1255,173,
        1,0,0,0,1256,1257,5,141,0,0,1257,1258,5,44,0,0,1258,1259,3,2,1,0,
        1259,175,1,0,0,0,1260,1261,5,145,0,0,1261,1262,3,400,200,0,1262,
        1263,5,267,0,0,1263,1264,3,418,209,0,1264,1265,3,2,1,0,1265,177,
        1,0,0,0,1266,1267,5,272,0,0,1267,1268,3,400,200,0,1268,1269,5,267,
        0,0,1269,1270,7,14,0,0,1270,1271,3,2,1,0,1271,179,1,0,0,0,1272,1273,
        5,143,0,0,1273,1274,7,8,0,0,1274,1275,3,2,1,0,1275,181,1,0,0,0,1276,
        1277,5,142,0,0,1277,1280,5,194,0,0,1278,1281,3,408,204,0,1279,1281,
        3,400,200,0,1280,1278,1,0,0,0,1280,1279,1,0,0,0,1281,1282,1,0,0,
        0,1282,1283,3,2,1,0,1283,183,1,0,0,0,1284,1285,5,142,0,0,1285,1286,
        5,219,0,0,1286,1287,3,400,200,0,1287,1288,3,2,1,0,1288,185,1,0,0,
        0,1289,1290,5,142,0,0,1290,1291,5,306,0,0,1291,1292,3,400,200,0,
        1292,1293,3,2,1,0,1293,187,1,0,0,0,1294,1295,5,142,0,0,1295,1298,
        5,320,0,0,1296,1299,3,408,204,0,1297,1299,3,400,200,0,1298,1296,
        1,0,0,0,1298,1297,1,0,0,0,1299,1300,1,0,0,0,1300,1301,3,2,1,0,1301,
        189,1,0,0,0,1302,1303,5,142,0,0,1303,1306,5,244,0,0,1304,1307,3,
        408,204,0,1305,1307,3,400,200,0,1306,1304,1,0,0,0,1306,1305,1,0,
        0,0,1307,1308,1,0,0,0,1308,1309,3,2,1,0,1309,191,1,0,0,0,1310,1311,
        5,144,0,0,1311,1312,7,4,0,0,1312,1313,5,253,0,0,1313,1314,3,400,
        200,0,1314,1315,5,326,0,0,1315,1316,3,400,200,0,1316,1317,3,2,1,
        0,1317,193,1,0,0,0,1318,1319,5,147,0,0,1319,1320,7,4,0,0,1320,1321,
        5,253,0,0,1321,1322,3,400,200,0,1322,1323,5,267,0,0,1323,1324,3,
        416,208,0,1324,1325,3,2,1,0,1325,195,1,0,0,0,1326,1327,5,148,0,0,
        1327,1328,3,408,204,0,1328,1329,3,2,1,0,1329,197,1,0,0,0,1330,1331,
        5,149,0,0,1331,1332,5,47,0,0,1332,1333,5,267,0,0,1333,1334,3,416,
        208,0,1334,1335,3,2,1,0,1335,199,1,0,0,0,1336,1337,5,150,0,0,1337,
        1338,3,414,207,0,1338,1339,3,2,1,0,1339,201,1,0,0,0,1340,1341,5,
        151,0,0,1341,1342,3,414,207,0,1342,1343,3,2,1,0,1343,203,1,0,0,0,
        1344,1345,5,8,0,0,1345,1346,3,2,1,0,1346,205,1,0,0,0,1347,1348,5,
        152,0,0,1348,1349,7,15,0,0,1349,1350,3,400,200,0,1350,1351,3,2,1,
        0,1351,207,1,0,0,0,1352,1353,5,153,0,0,1353,1354,7,16,0,0,1354,1355,
        3,408,204,0,1355,1356,5,267,0,0,1356,1357,5,44,0,0,1357,1358,3,2,
        1,0,1358,209,1,0,0,0,1359,1360,5,154,0,0,1360,1361,3,400,200,0,1361,
        1362,3,2,1,0,1362,211,1,0,0,0,1363,1364,5,155,0,0,1364,1365,7,17,
        0,0,1365,1366,5,267,0,0,1366,1367,3,400,200,0,1367,1368,5,330,0,
        0,1368,1369,5,47,0,0,1369,1370,3,2,1,0,1370,213,1,0,0,0,1371,1372,
        5,157,0,0,1372,1373,3,408,204,0,1373,1374,3,2,1,0,1374,215,1,0,0,
        0,1375,1376,5,156,0,0,1376,1377,5,225,0,0,1377,1378,3,408,204,0,
        1378,1379,3,2,1,0,1379,217,1,0,0,0,1380,1381,5,156,0,0,1381,1382,
        5,229,0,0,1382,1383,3,408,204,0,1383,1384,3,2,1,0,1384,219,1,0,0,
        0,1385,1386,5,156,0,0,1386,1387,5,307,0,0,1387,1388,3,408,204,0,
        1388,1389,3,2,1,0,1389,221,1,0,0,0,1390,1391,5,156,0,0,1391,1392,
        5,308,0,0,1392,1393,3,408,204,0,1393,1394,3,2,1,0,1394,223,1,0,0,
        0,1395,1396,5,156,0,0,1396,1397,5,309,0,0,1397,1398,3,408,204,0,
        1398,1399,3,2,1,0,1399,225,1,0,0,0,1400,1401,5,156,0,0,1401,1402,
        5,310,0,0,1402,1403,5,1,0,0,1403,1404,3,2,1,0,1404,227,1,0,0,0,1405,
        1406,5,156,0,0,1406,1407,5,311,0,0,1407,1408,3,408,204,0,1408,1409,
        3,2,1,0,1409,229,1,0,0,0,1410,1411,5,156,0,0,1411,1412,5,313,0,0,
        1412,1413,3,408,204,0,1413,1414,3,2,1,0,1414,231,1,0,0,0,1415,1416,
        5,159,0,0,1416,1417,3,400,200,0,1417,1418,5,260,0,0,1418,1419,3,
        400,200,0,1419,1420,3,2,1,0,1420,233,1,0,0,0,1421,1422,5,158,0,0,
        1422,1423,5,44,0,0,1423,1424,5,260,0,0,1424,1425,3,400,200,0,1425,
        1426,3,2,1,0,1426,235,1,0,0,0,1427,1428,5,160,0,0,1428,1429,5,45,
        0,0,1429,1430,5,267,0,0,1430,1431,5,44,0,0,1431,1432,3,2,1,0,1432,
        237,1,0,0,0,1433,1434,5,161,0,0,1434,1435,3,418,209,0,1435,1436,
        3,2,1,0,1436,239,1,0,0,0,1437,1438,5,348,0,0,1438,1439,5,1,0,0,1439,
        1443,3,2,1,0,1440,1442,3,4,2,0,1441,1440,1,0,0,0,1442,1445,1,0,0,
        0,1443,1441,1,0,0,0,1443,1444,1,0,0,0,1444,1446,1,0,0,0,1445,1443,
        1,0,0,0,1446,1447,5,62,0,0,1447,1448,3,2,1,0,1448,241,1,0,0,0,1449,
        1450,5,282,0,0,1450,1451,5,44,0,0,1451,1452,5,303,0,0,1452,1453,
        3,408,204,0,1453,1454,3,2,1,0,1454,243,1,0,0,0,1455,1456,5,162,0,
        0,1456,1457,5,44,0,0,1457,1458,5,287,0,0,1458,1459,3,400,200,0,1459,
        1460,3,2,1,0,1460,245,1,0,0,0,1461,1462,5,163,0,0,1462,1470,3,414,
        207,0,1463,1471,5,135,0,0,1464,1471,5,146,0,0,1465,1471,5,73,0,0,
        1466,1471,5,237,0,0,1467,1471,5,327,0,0,1468,1471,5,329,0,0,1469,
        1471,3,400,200,0,1470,1463,1,0,0,0,1470,1464,1,0,0,0,1470,1465,1,
        0,0,0,1470,1466,1,0,0,0,1470,1467,1,0,0,0,1470,1468,1,0,0,0,1470,
        1469,1,0,0,0,1471,1472,1,0,0,0,1472,1473,3,414,207,0,1473,1474,3,
        2,1,0,1474,247,1,0,0,0,1475,1476,5,164,0,0,1476,1477,7,3,0,0,1477,
        1478,3,408,204,0,1478,1479,3,2,1,0,1479,249,1,0,0,0,1480,1481,5,
        166,0,0,1481,1482,3,408,204,0,1482,1483,3,2,1,0,1483,251,1,0,0,0,
        1484,1485,5,165,0,0,1485,1486,5,350,0,0,1486,1487,3,408,204,0,1487,
        1488,3,2,1,0,1488,253,1,0,0,0,1489,1490,5,167,0,0,1490,1491,3,408,
        204,0,1491,1492,3,2,1,0,1492,255,1,0,0,0,1493,1494,5,168,0,0,1494,
        1495,3,408,204,0,1495,1496,3,2,1,0,1496,257,1,0,0,0,1497,1498,5,
        169,0,0,1498,1499,5,45,0,0,1499,1503,5,289,0,0,1500,1504,5,350,0,
        0,1501,1504,5,142,0,0,1502,1504,3,400,200,0,1503,1500,1,0,0,0,1503,
        1501,1,0,0,0,1503,1502,1,0,0,0,1504,1505,1,0,0,0,1505,1506,3,408,
        204,0,1506,1507,3,2,1,0,1507,259,1,0,0,0,1508,1509,5,170,0,0,1509,
        1510,3,408,204,0,1510,1511,3,2,1,0,1511,261,1,0,0,0,1512,1513,5,
        171,0,0,1513,1514,3,408,204,0,1514,1515,3,2,1,0,1515,263,1,0,0,0,
        1516,1517,5,172,0,0,1517,1518,3,400,200,0,1518,1519,3,408,204,0,
        1519,1520,3,2,1,0,1520,265,1,0,0,0,1521,1522,5,173,0,0,1522,1523,
        3,400,200,0,1523,1524,3,408,204,0,1524,1525,3,2,1,0,1525,267,1,0,
        0,0,1526,1527,5,174,0,0,1527,1528,3,408,204,0,1528,1529,3,2,1,0,
        1529,269,1,0,0,0,1530,1531,5,175,0,0,1531,1532,7,3,0,0,1532,1533,
        3,408,204,0,1533,1534,3,408,204,0,1534,1535,3,2,1,0,1535,271,1,0,
        0,0,1536,1537,5,176,0,0,1537,1538,5,44,0,0,1538,1539,3,2,1,0,1539,
        273,1,0,0,0,1540,1541,5,177,0,0,1541,1542,5,44,0,0,1542,1543,3,2,
        1,0,1543,275,1,0,0,0,1544,1545,5,179,0,0,1545,1546,3,400,200,0,1546,
        1547,3,414,207,0,1547,1548,5,267,0,0,1548,1549,3,416,208,0,1549,
        1550,3,2,1,0,1550,277,1,0,0,0,1551,1559,5,180,0,0,1552,1560,5,135,
        0,0,1553,1560,5,146,0,0,1554,1560,5,73,0,0,1555,1560,5,237,0,0,1556,
        1560,5,327,0,0,1557,1560,5,329,0,0,1558,1560,3,400,200,0,1559,1552,
        1,0,0,0,1559,1553,1,0,0,0,1559,1554,1,0,0,0,1559,1555,1,0,0,0,1559,
        1556,1,0,0,0,1559,1557,1,0,0,0,1559,1558,1,0,0,0,1560,1561,1,0,0,
        0,1561,1562,3,414,207,0,1562,1563,5,267,0,0,1563,1564,3,414,207,
        0,1564,1565,3,2,1,0,1565,279,1,0,0,0,1566,1567,5,185,0,0,1567,1568,
        5,44,0,0,1568,1569,5,317,0,0,1569,1570,5,47,0,0,1570,1571,3,2,1,
        0,1571,281,1,0,0,0,1572,1573,5,187,0,0,1573,1574,3,400,200,0,1574,
        1575,5,267,0,0,1575,1576,3,418,209,0,1576,1577,3,2,1,0,1577,283,
        1,0,0,0,1578,1579,5,188,0,0,1579,1580,3,400,200,0,1580,1581,3,2,
        1,0,1581,285,1,0,0,0,1582,1583,5,189,0,0,1583,1584,3,408,204,0,1584,
        1585,5,267,0,0,1585,1586,3,416,208,0,1586,1587,3,2,1,0,1587,287,
        1,0,0,0,1588,1589,5,190,0,0,1589,1590,3,414,207,0,1590,1591,3,2,
        1,0,1591,289,1,0,0,0,1592,1593,5,191,0,0,1593,1594,7,8,0,0,1594,
        1595,3,2,1,0,1595,291,1,0,0,0,1596,1597,5,192,0,0,1597,1598,3,416,
        208,0,1598,1599,3,2,1,0,1599,293,1,0,0,0,1600,1601,5,193,0,0,1601,
        1602,7,3,0,0,1602,1603,3,408,204,0,1603,1604,3,2,1,0,1604,295,1,
        0,0,0,1605,1606,5,60,0,0,1606,1608,3,2,1,0,1607,1609,3,4,2,0,1608,
        1607,1,0,0,0,1609,1610,1,0,0,0,1610,1608,1,0,0,0,1610,1611,1,0,0,
        0,1611,1612,1,0,0,0,1612,1613,5,59,0,0,1613,1614,3,2,1,0,1614,297,
        1,0,0,0,1615,1616,5,195,0,0,1616,1617,3,400,200,0,1617,1618,5,330,
        0,0,1618,1619,3,400,200,0,1619,1620,5,267,0,0,1620,1621,3,416,208,
        0,1621,1622,3,2,1,0,1622,299,1,0,0,0,1623,1624,5,196,0,0,1624,1625,
        5,260,0,0,1625,1626,3,400,200,0,1626,1627,5,319,0,0,1627,1628,3,
        400,200,0,1628,1629,5,268,0,0,1629,1630,3,414,207,0,1630,1631,3,
        2,1,0,1631,301,1,0,0,0,1632,1633,5,197,0,0,1633,1634,5,260,0,0,1634,
        1635,3,400,200,0,1635,1636,5,268,0,0,1636,1637,3,414,207,0,1637,
        1638,3,2,1,0,1638,303,1,0,0,0,1639,1640,5,198,0,0,1640,1641,3,408,
        204,0,1641,1642,3,2,1,0,1642,305,1,0,0,0,1643,1644,5,199,0,0,1644,
        1645,7,9,0,0,1645,1646,3,2,1,0,1646,307,1,0,0,0,1647,1648,5,200,
        0,0,1648,1649,7,18,0,0,1649,1650,3,400,200,0,1650,1651,3,2,1,0,1651,
        309,1,0,0,0,1652,1655,5,201,0,0,1653,1656,3,408,204,0,1654,1656,
        3,424,212,0,1655,1653,1,0,0,0,1655,1654,1,0,0,0,1656,1657,1,0,0,
        0,1657,1658,5,268,0,0,1658,1659,3,414,207,0,1659,1660,3,2,1,0,1660,
        311,1,0,0,0,1661,1664,5,202,0,0,1662,1665,3,408,204,0,1663,1665,
        3,400,200,0,1664,1662,1,0,0,0,1664,1663,1,0,0,0,1665,1666,1,0,0,
        0,1666,1667,5,268,0,0,1667,1668,7,19,0,0,1668,1669,3,2,1,0,1669,
        313,1,0,0,0,1670,1671,5,203,0,0,1671,1672,7,4,0,0,1672,1673,5,331,
        0,0,1673,1674,7,4,0,0,1674,1675,5,303,0,0,1675,1676,3,400,200,0,
        1676,1677,3,2,1,0,1677,315,1,0,0,0,1678,1679,5,204,0,0,1679,1680,
        3,400,200,0,1680,1681,5,332,0,0,1681,1682,3,400,200,0,1682,1683,
        5,333,0,0,1683,1684,3,400,200,0,1684,1685,5,334,0,0,1685,1686,3,
        400,200,0,1686,1687,3,2,1,0,1687,317,1,0,0,0,1688,1689,5,205,0,0,
        1689,1690,3,400,200,0,1690,1691,5,328,0,0,1691,1692,3,400,200,0,
        1692,1693,5,330,0,0,1693,1694,5,44,0,0,1694,1695,3,2,1,0,1695,319,
        1,0,0,0,1696,1697,5,206,0,0,1697,1698,3,414,207,0,1698,1699,3,2,
        1,0,1699,321,1,0,0,0,1700,1701,5,207,0,0,1701,1702,3,408,204,0,1702,
        1703,5,80,0,0,1703,1704,3,400,200,0,1704,1705,5,258,0,0,1705,1706,
        3,400,200,0,1706,1707,5,262,0,0,1707,1708,3,408,204,0,1708,1709,
        3,2,1,0,1709,323,1,0,0,0,1710,1711,5,208,0,0,1711,1712,3,2,1,0,1712,
        325,1,0,0,0,1713,1714,5,209,0,0,1714,1715,3,2,1,0,1715,327,1,0,0,
        0,1716,1717,5,210,0,0,1717,1718,3,2,1,0,1718,329,1,0,0,0,1719,1720,
        5,211,0,0,1720,1721,7,7,0,0,1721,1722,3,400,200,0,1722,1723,5,258,
        0,0,1723,1724,3,400,200,0,1724,1725,5,296,0,0,1725,1726,3,400,200,
        0,1726,1727,3,2,1,0,1727,331,1,0,0,0,1728,1729,5,212,0,0,1729,1730,
        5,44,0,0,1730,1731,3,2,1,0,1731,333,1,0,0,0,1732,1733,5,213,0,0,
        1733,1734,5,44,0,0,1734,1735,3,2,1,0,1735,335,1,0,0,0,1736,1737,
        5,214,0,0,1737,1738,3,414,207,0,1738,1739,5,267,0,0,1739,1740,3,
        414,207,0,1740,1741,3,2,1,0,1741,337,1,0,0,0,1742,1743,5,215,0,0,
        1743,1744,7,4,0,0,1744,1745,3,400,200,0,1745,1746,3,2,1,0,1746,339,
        1,0,0,0,1747,1748,5,216,0,0,1748,1749,3,400,200,0,1749,1750,5,330,
        0,0,1750,1751,3,400,200,0,1751,1752,5,268,0,0,1752,1753,5,44,0,0,
        1753,1754,3,2,1,0,1754,341,1,0,0,0,1755,1756,5,217,0,0,1756,1757,
        3,408,204,0,1757,1758,5,281,0,0,1758,1759,3,408,204,0,1759,1760,
        5,267,0,0,1760,1761,3,416,208,0,1761,1762,3,2,1,0,1762,343,1,0,0,
        0,1763,1764,5,218,0,0,1764,1765,3,414,207,0,1765,1766,5,260,0,0,
        1766,1767,3,400,200,0,1767,1768,5,319,0,0,1768,1769,3,400,200,0,
        1769,1770,3,2,1,0,1770,345,1,0,0,0,1771,1774,5,220,0,0,1772,1775,
        3,416,208,0,1773,1775,3,418,209,0,1774,1772,1,0,0,0,1774,1773,1,
        0,0,0,1775,1776,1,0,0,0,1776,1779,5,330,0,0,1777,1780,3,400,200,
        0,1778,1780,3,408,204,0,1779,1777,1,0,0,0,1779,1778,1,0,0,0,1780,
        1781,1,0,0,0,1781,1782,3,2,1,0,1782,1809,1,0,0,0,1783,1784,5,220,
        0,0,1784,1785,5,44,0,0,1785,1786,5,330,0,0,1786,1787,5,44,0,0,1787,
        1809,3,2,1,0,1788,1789,5,220,0,0,1789,1790,5,46,0,0,1790,1791,5,
        330,0,0,1791,1792,5,46,0,0,1792,1809,3,2,1,0,1793,1794,5,220,0,0,
        1794,1795,5,45,0,0,1795,1796,5,330,0,0,1796,1797,5,45,0,0,1797,1809,
        3,2,1,0,1798,1799,5,220,0,0,1799,1800,5,47,0,0,1800,1801,5,330,0,
        0,1801,1802,5,47,0,0,1802,1809,3,2,1,0,1803,1804,5,220,0,0,1804,
        1805,5,48,0,0,1805,1806,5,330,0,0,1806,1807,5,48,0,0,1807,1809,3,
        2,1,0,1808,1771,1,0,0,0,1808,1783,1,0,0,0,1808,1788,1,0,0,0,1808,
        1793,1,0,0,0,1808,1798,1,0,0,0,1808,1803,1,0,0,0,1809,347,1,0,0,
        0,1810,1811,5,221,0,0,1811,1812,5,44,0,0,1812,1813,5,330,0,0,1813,
        1814,3,408,204,0,1814,1815,3,2,1,0,1815,349,1,0,0,0,1816,1817,5,
        222,0,0,1817,1818,3,400,200,0,1818,1819,5,325,0,0,1819,1820,3,400,
        200,0,1820,1821,3,400,200,0,1821,1822,3,400,200,0,1822,1825,5,330,
        0,0,1823,1826,3,408,204,0,1824,1826,3,400,200,0,1825,1823,1,0,0,
        0,1825,1824,1,0,0,0,1826,1827,1,0,0,0,1827,1828,3,2,1,0,1828,351,
        1,0,0,0,1829,1830,5,223,0,0,1830,1831,3,416,208,0,1831,1832,5,330,
        0,0,1832,1833,3,408,204,0,1833,1834,3,2,1,0,1834,353,1,0,0,0,1835,
        1836,5,224,0,0,1836,1837,3,400,200,0,1837,1838,3,2,1,0,1838,355,
        1,0,0,0,1839,1840,5,226,0,0,1840,1841,3,2,1,0,1841,357,1,0,0,0,1842,
        1843,5,227,0,0,1843,1844,7,17,0,0,1844,1845,5,267,0,0,1845,1846,
        3,400,200,0,1846,1847,5,268,0,0,1847,1848,5,47,0,0,1848,1849,3,2,
        1,0,1849,359,1,0,0,0,1850,1851,5,228,0,0,1851,1852,3,408,204,0,1852,
        1853,5,267,0,0,1853,1854,3,416,208,0,1854,1855,3,2,1,0,1855,361,
        1,0,0,0,1856,1857,5,230,0,0,1857,1858,3,408,204,0,1858,1859,5,268,
        0,0,1859,1860,3,400,200,0,1860,1861,5,330,0,0,1861,1862,3,400,200,
        0,1862,1863,5,267,0,0,1863,1864,3,418,209,0,1864,1865,3,2,1,0,1865,
        363,1,0,0,0,1866,1867,5,231,0,0,1867,1868,3,400,200,0,1868,1869,
        3,2,1,0,1869,365,1,0,0,0,1870,1871,5,232,0,0,1871,1872,3,408,204,
        0,1872,1873,5,295,0,0,1873,1874,3,400,200,0,1874,1875,5,267,0,0,
        1875,1876,3,400,200,0,1876,1877,3,2,1,0,1877,367,1,0,0,0,1878,1879,
        5,234,0,0,1879,1880,3,414,207,0,1880,1881,5,260,0,0,1881,1882,3,
        400,200,0,1882,1883,5,319,0,0,1883,1884,3,400,200,0,1884,1885,3,
        2,1,0,1885,369,1,0,0,0,1886,1887,5,235,0,0,1887,1888,3,414,207,0,
        1888,1889,5,260,0,0,1889,1890,3,400,200,0,1890,1891,3,2,1,0,1891,
        371,1,0,0,0,1892,1895,5,233,0,0,1893,1896,3,400,200,0,1894,1896,
        3,408,204,0,1895,1893,1,0,0,0,1895,1894,1,0,0,0,1896,1897,1,0,0,
        0,1897,1898,5,186,0,0,1898,1899,3,408,204,0,1899,1900,5,330,0,0,
        1900,1901,7,3,0,0,1901,1902,3,2,1,0,1902,373,1,0,0,0,1903,1904,5,
        236,0,0,1904,1905,3,408,204,0,1905,1906,3,400,200,0,1906,1907,3,
        2,1,0,1907,375,1,0,0,0,1908,1909,5,238,0,0,1909,1910,7,3,0,0,1910,
        1911,3,2,1,0,1911,377,1,0,0,0,1912,1913,5,239,0,0,1913,1914,7,3,
        0,0,1914,1915,3,2,1,0,1915,379,1,0,0,0,1916,1917,5,240,0,0,1917,
        1918,3,400,200,0,1918,1919,3,2,1,0,1919,381,1,0,0,0,1920,1921,5,
        241,0,0,1921,1922,5,44,0,0,1922,1923,3,2,1,0,1923,383,1,0,0,0,1924,
        1925,5,242,0,0,1925,1926,3,400,200,0,1926,1927,3,2,1,0,1927,385,
        1,0,0,0,1928,1929,5,243,0,0,1929,1930,3,418,209,0,1930,1931,3,2,
        1,0,1931,387,1,0,0,0,1932,1933,5,245,0,0,1933,1934,3,400,200,0,1934,
        1935,5,267,0,0,1935,1936,3,418,209,0,1936,1937,3,2,1,0,1937,389,
        1,0,0,0,1938,1939,5,246,0,0,1939,1940,5,298,0,0,1940,1941,3,400,
        200,0,1941,1942,5,267,0,0,1942,1943,5,44,0,0,1943,391,1,0,0,0,1944,
        1945,5,247,0,0,1945,1946,3,414,207,0,1946,1947,5,267,0,0,1947,1948,
        3,414,207,0,1948,1949,3,2,1,0,1949,393,1,0,0,0,1950,1951,5,248,0,
        0,1951,1952,3,414,207,0,1952,1953,5,267,0,0,1953,1954,3,416,208,
        0,1954,1955,3,2,1,0,1955,395,1,0,0,0,1956,1957,5,249,0,0,1957,1958,
        3,414,207,0,1958,1959,5,267,0,0,1959,1960,3,418,209,0,1960,1961,
        3,2,1,0,1961,397,1,0,0,0,1962,1963,5,250,0,0,1963,1964,5,44,0,0,
        1964,1965,3,2,1,0,1965,399,1,0,0,0,1966,1978,5,335,0,0,1967,1978,
        5,43,0,0,1968,1978,3,402,201,0,1969,1978,3,416,208,0,1970,1978,3,
        412,206,0,1971,1978,3,404,202,0,1972,1978,3,406,203,0,1973,1974,
        5,336,0,0,1974,1975,3,400,200,0,1975,1976,5,337,0,0,1976,1978,1,
        0,0,0,1977,1966,1,0,0,0,1977,1967,1,0,0,0,1977,1968,1,0,0,0,1977,
        1969,1,0,0,0,1977,1970,1,0,0,0,1977,1971,1,0,0,0,1977,1972,1,0,0,
        0,1977,1973,1,0,0,0,1978,401,1,0,0,0,1979,1980,5,344,0,0,1980,1981,
        5,335,0,0,1981,403,1,0,0,0,1982,1983,5,336,0,0,1983,1986,3,400,200,
        0,1984,1985,7,20,0,0,1985,1987,3,400,200,0,1986,1984,1,0,0,0,1987,
        1988,1,0,0,0,1988,1986,1,0,0,0,1988,1989,1,0,0,0,1989,1990,1,0,0,
        0,1990,1991,5,337,0,0,1991,405,1,0,0,0,1992,1993,5,336,0,0,1993,
        1996,3,408,204,0,1994,1995,7,21,0,0,1995,1997,3,408,204,0,1996,1994,
        1,0,0,0,1997,1998,1,0,0,0,1998,1996,1,0,0,0,1998,1999,1,0,0,0,1999,
        2000,1,0,0,0,2000,2001,5,337,0,0,2001,407,1,0,0,0,2002,2010,5,1,
        0,0,2003,2010,3,418,209,0,2004,2010,3,410,205,0,2005,2006,5,336,
        0,0,2006,2007,3,408,204,0,2007,2008,5,337,0,0,2008,2010,1,0,0,0,
        2009,2002,1,0,0,0,2009,2003,1,0,0,0,2009,2004,1,0,0,0,2009,2005,
        1,0,0,0,2010,409,1,0,0,0,2011,2012,5,336,0,0,2012,2015,3,408,204,
        0,2013,2014,5,343,0,0,2014,2016,3,408,204,0,2015,2013,1,0,0,0,2016,
        2017,1,0,0,0,2017,2015,1,0,0,0,2017,2018,1,0,0,0,2018,2019,1,0,0,
        0,2019,2020,5,337,0,0,2020,411,1,0,0,0,2021,2022,5,336,0,0,2022,
        2023,3,414,207,0,2023,2024,7,22,0,0,2024,2025,3,408,204,0,2025,2026,
        5,337,0,0,2026,413,1,0,0,0,2027,2028,7,23,0,0,2028,415,1,0,0,0,2029,
        2058,5,10,0,0,2030,2058,5,11,0,0,2031,2058,5,12,0,0,2032,2058,5,
        45,0,0,2033,2058,5,46,0,0,2034,2058,5,47,0,0,2035,2058,5,48,0,0,
        2036,2058,5,15,0,0,2037,2058,5,17,0,0,2038,2058,5,18,0,0,2039,2058,
        5,19,0,0,2040,2058,5,21,0,0,2041,2058,5,26,0,0,2042,2058,5,28,0,
        0,2043,2058,5,29,0,0,2044,2058,5,30,0,0,2045,2058,5,31,0,0,2046,
        2058,5,39,0,0,2047,2058,5,24,0,0,2048,2058,5,38,0,0,2049,2058,5,
        39,0,0,2050,2058,5,24,0,0,2051,2058,5,40,0,0,2052,2058,5,41,0,0,
        2053,2058,5,42,0,0,2054,2058,3,426,213,0,2055,2058,3,420,210,0,2056,
        2058,3,422,211,0,2057,2029,1,0,0,0,2057,2030,1,0,0,0,2057,2031,1,
        0,0,0,2057,2032,1,0,0,0,2057,2033,1,0,0,0,2057,2034,1,0,0,0,2057,
        2035,1,0,0,0,2057,2036,1,0,0,0,2057,2037,1,0,0,0,2057,2038,1,0,0,
        0,2057,2039,1,0,0,0,2057,2040,1,0,0,0,2057,2041,1,0,0,0,2057,2042,
        1,0,0,0,2057,2043,1,0,0,0,2057,2044,1,0,0,0,2057,2045,1,0,0,0,2057,
        2046,1,0,0,0,2057,2047,1,0,0,0,2057,2048,1,0,0,0,2057,2049,1,0,0,
        0,2057,2050,1,0,0,0,2057,2051,1,0,0,0,2057,2052,1,0,0,0,2057,2053,
        1,0,0,0,2057,2054,1,0,0,0,2057,2055,1,0,0,0,2057,2056,1,0,0,0,2058,
        417,1,0,0,0,2059,2077,5,13,0,0,2060,2077,5,14,0,0,2061,2077,5,44,
        0,0,2062,2077,5,16,0,0,2063,2077,5,20,0,0,2064,2077,5,22,0,0,2065,
        2077,5,23,0,0,2066,2077,5,25,0,0,2067,2077,5,27,0,0,2068,2077,5,
        32,0,0,2069,2077,5,37,0,0,2070,2077,5,33,0,0,2071,2077,5,34,0,0,
        2072,2077,5,35,0,0,2073,2077,5,36,0,0,2074,2077,3,426,213,0,2075,
        2077,3,422,211,0,2076,2059,1,0,0,0,2076,2060,1,0,0,0,2076,2061,1,
        0,0,0,2076,2062,1,0,0,0,2076,2063,1,0,0,0,2076,2064,1,0,0,0,2076,
        2065,1,0,0,0,2076,2066,1,0,0,0,2076,2067,1,0,0,0,2076,2068,1,0,0,
        0,2076,2069,1,0,0,0,2076,2070,1,0,0,0,2076,2071,1,0,0,0,2076,2072,
        1,0,0,0,2076,2073,1,0,0,0,2076,2074,1,0,0,0,2076,2075,1,0,0,0,2077,
        419,1,0,0,0,2078,2079,5,306,0,0,2079,2087,5,348,0,0,2080,2088,5,
        335,0,0,2081,2088,5,10,0,0,2082,2088,5,11,0,0,2083,2088,5,12,0,0,
        2084,2088,5,39,0,0,2085,2088,5,24,0,0,2086,2088,3,426,213,0,2087,
        2080,1,0,0,0,2087,2081,1,0,0,0,2087,2082,1,0,0,0,2087,2083,1,0,0,
        0,2087,2084,1,0,0,0,2087,2085,1,0,0,0,2087,2086,1,0,0,0,2088,421,
        1,0,0,0,2089,2090,5,306,0,0,2090,2092,5,348,0,0,2091,2089,1,0,0,
        0,2091,2092,1,0,0,0,2092,2100,1,0,0,0,2093,2101,5,335,0,0,2094,2101,
        5,10,0,0,2095,2101,5,11,0,0,2096,2101,5,12,0,0,2097,2101,5,39,0,
        0,2098,2101,5,24,0,0,2099,2101,3,426,213,0,2100,2093,1,0,0,0,2100,
        2094,1,0,0,0,2100,2095,1,0,0,0,2100,2096,1,0,0,0,2100,2097,1,0,0,
        0,2100,2098,1,0,0,0,2100,2099,1,0,0,0,2101,2102,1,0,0,0,2102,2103,
        5,341,0,0,2103,2104,3,400,200,0,2104,2105,5,340,0,0,2105,2106,3,
        400,200,0,2106,2107,5,340,0,0,2107,2108,3,400,200,0,2108,2109,5,
        342,0,0,2109,423,1,0,0,0,2110,2112,7,24,0,0,2111,2110,1,0,0,0,2112,
        2113,1,0,0,0,2113,2111,1,0,0,0,2113,2114,1,0,0,0,2114,2123,1,0,0,
        0,2115,2123,5,303,0,0,2116,2123,5,271,0,0,2117,2123,5,302,0,0,2118,
        2123,5,316,0,0,2119,2123,5,324,0,0,2120,2123,5,263,0,0,2121,2123,
        5,292,0,0,2122,2111,1,0,0,0,2122,2115,1,0,0,0,2122,2116,1,0,0,0,
        2122,2117,1,0,0,0,2122,2118,1,0,0,0,2122,2119,1,0,0,0,2122,2120,
        1,0,0,0,2122,2121,1,0,0,0,2123,425,1,0,0,0,2124,2125,3,414,207,0,
        2125,2127,5,348,0,0,2126,2128,8,25,0,0,2127,2126,1,0,0,0,2128,2129,
        1,0,0,0,2129,2127,1,0,0,0,2129,2130,1,0,0,0,2130,427,1,0,0,0,58,
        431,433,632,637,644,650,654,662,669,677,683,688,690,695,697,706,
        712,723,732,738,748,753,810,896,993,1027,1093,1114,1172,1197,1280,
        1298,1306,1443,1470,1503,1559,1610,1655,1664,1774,1779,1808,1825,
        1895,1977,1988,1998,2009,2017,2057,2076,2087,2091,2100,2113,2122,
        2129
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!GslParser.__ATN) {
            GslParser.__ATN = new antlr.ATNDeserializer().deserialize(GslParser._serializedATN);
        }

        return GslParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(GslParser.literalNames, GslParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return GslParser.vocabulary;
    }

    private static readonly decisionsToDFA = GslParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ScriptContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(GslParser.EOF, 0)!;
    }
    public matchMarker(): MatchMarkerContext[];
    public matchMarker(i: number): MatchMarkerContext | null;
    public matchMarker(i?: number): MatchMarkerContext[] | MatchMarkerContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MatchMarkerContext);
        }

        return this.getRuleContext(i, MatchMarkerContext);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.NEWLINE);
    	} else {
    		return this.getToken(GslParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_script;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterScript) {
             listener.enterScript(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitScript) {
             listener.exitScript(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitScript) {
            return visitor.visitScript(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EolContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEWLINE(): antlr.TerminalNode {
        return this.getToken(GslParser.NEWLINE, 0)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_eol;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterEol) {
             listener.enterEol(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitEol) {
             listener.exitEol(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitEol) {
            return visitor.visitEol(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEWLINE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NEWLINE, 0);
    }
    public attack(): AttackContext | null {
        return this.getRuleContext(0, AttackContext);
    }
    public addeffect(): AddeffectContext | null {
        return this.getRuleContext(0, AddeffectContext);
    }
    public addGroup(): AddGroupContext | null {
        return this.getRuleContext(0, AddGroupContext);
    }
    public assert(): AssertContext | null {
        return this.getRuleContext(0, AssertContext);
    }
    public bitget(): BitgetContext | null {
        return this.getRuleContext(0, BitgetContext);
    }
    public bitset(): BitsetContext | null {
        return this.getRuleContext(0, BitsetContext);
    }
    public boldoff(): BoldoffContext | null {
        return this.getRuleContext(0, BoldoffContext);
    }
    public boldon(): BoldonContext | null {
        return this.getRuleContext(0, BoldonContext);
    }
    public call(): CallContext | null {
        return this.getRuleContext(0, CallContext);
    }
    public callmatch(): CallmatchContext | null {
        return this.getRuleContext(0, CallmatchContext);
    }
    public canDo(): CanDoContext | null {
        return this.getRuleContext(0, CanDoContext);
    }
    public checkEffect(): CheckEffectContext | null {
        return this.getRuleContext(0, CheckEffectContext);
    }
    public clear(): ClearContext | null {
        return this.getRuleContext(0, ClearContext);
    }
    public clearMenu(): ClearMenuContext | null {
        return this.getRuleContext(0, ClearMenuContext);
    }
    public clearTable(): ClearTableContext | null {
        return this.getRuleContext(0, ClearTableContext);
    }
    public create(): CreateContext | null {
        return this.getRuleContext(0, CreateContext);
    }
    public createTable(): CreateTableContext | null {
        return this.getRuleContext(0, CreateTableContext);
    }
    public decodeAttack(): DecodeAttackContext | null {
        return this.getRuleContext(0, DecodeAttackContext);
    }
    public encodeAttack(): EncodeAttackContext | null {
        return this.getRuleContext(0, EncodeAttackContext);
    }
    public earlyPopStop(): EarlyPopStopContext | null {
        return this.getRuleContext(0, EarlyPopStopContext);
    }
    public expand(): ExpandContext | null {
        return this.getRuleContext(0, ExpandContext);
    }
    public fastpush(): FastpushContext | null {
        return this.getRuleContext(0, FastpushContext);
    }
    public gather(): GatherContext | null {
        return this.getRuleContext(0, GatherContext);
    }
    public gatherFirst(): GatherFirstContext | null {
        return this.getRuleContext(0, GatherFirstContext);
    }
    public gatherPlayer(): GatherPlayerContext | null {
        return this.getRuleContext(0, GatherPlayerContext);
    }
    public getPs(): GetPsContext | null {
        return this.getRuleContext(0, GetPsContext);
    }
    public getTable(): GetTableContext | null {
        return this.getRuleContext(0, GetTableContext);
    }
    public glue(): GlueContext | null {
        return this.getRuleContext(0, GlueContext);
    }
    public goto(): GotoContext | null {
        return this.getRuleContext(0, GotoContext);
    }
    public if(): IfContext | null {
        return this.getRuleContext(0, IfContext);
    }
    public index(): IndexContext | null {
        return this.getRuleContext(0, IndexContext);
    }
    public infoProfile(): InfoProfileContext | null {
        return this.getRuleContext(0, InfoProfileContext);
    }
    public infoScript(): InfoScriptContext | null {
        return this.getRuleContext(0, InfoScriptContext);
    }
    public infoTable(): InfoTableContext | null {
        return this.getRuleContext(0, InfoTableContext);
    }
    public infoVarField(): InfoVarFieldContext | null {
        return this.getRuleContext(0, InfoVarFieldContext);
    }
    public infoVerb(): InfoVerbContext | null {
        return this.getRuleContext(0, InfoVerbContext);
    }
    public injure(): InjureContext | null {
        return this.getRuleContext(0, InjureContext);
    }
    public isInjured(): IsInjuredContext | null {
        return this.getRuleContext(0, IsInjuredContext);
    }
    public kill(): KillContext | null {
        return this.getRuleContext(0, KillContext);
    }
    public killAllNp(): KillAllNpContext | null {
        return this.getRuleContext(0, KillAllNpContext);
    }
    public label(): LabelContext | null {
        return this.getRuleContext(0, LabelContext);
    }
    public load(): LoadContext | null {
        return this.getRuleContext(0, LoadContext);
    }
    public logMsg(): LogMsgContext | null {
        return this.getRuleContext(0, LogMsgContext);
    }
    public logStart(): LogStartContext | null {
        return this.getRuleContext(0, LogStartContext);
    }
    public logSubmit(): LogSubmitContext | null {
        return this.getRuleContext(0, LogSubmitContext);
    }
    public logTargetAccount(): LogTargetAccountContext | null {
        return this.getRuleContext(0, LogTargetAccountContext);
    }
    public logTargetIndex(): LogTargetIndexContext | null {
        return this.getRuleContext(0, LogTargetIndexContext);
    }
    public logTargetName(): LogTargetNameContext | null {
        return this.getRuleContext(0, LogTargetNameContext);
    }
    public logTargetOther(): LogTargetOtherContext | null {
        return this.getRuleContext(0, LogTargetOtherContext);
    }
    public logTargetUid(): LogTargetUidContext | null {
        return this.getRuleContext(0, LogTargetUidContext);
    }
    public logText(): LogTextContext | null {
        return this.getRuleContext(0, LogTextContext);
    }
    public logto(): LogtoContext | null {
        return this.getRuleContext(0, LogtoContext);
    }
    public lookRoom(): LookRoomContext | null {
        return this.getRuleContext(0, LookRoomContext);
    }
    public loopStatement(): LoopStatementContext | null {
        return this.getRuleContext(0, LoopStatementContext);
    }
    public lowercase(): LowercaseContext | null {
        return this.getRuleContext(0, LowercaseContext);
    }
    public matchSpell(): MatchSpellContext | null {
        return this.getRuleContext(0, MatchSpellContext);
    }
    public move(): MoveContext | null {
        return this.getRuleContext(0, MoveContext);
    }
    public msg(): MsgContext | null {
        return this.getRuleContext(0, MsgContext);
    }
    public msgGm(): MsgGmContext | null {
        return this.getRuleContext(0, MsgGmContext);
    }
    public msgp(): MsgpContext | null {
        return this.getRuleContext(0, MsgpContext);
    }
    public msgr(): MsgrContext | null {
        return this.getRuleContext(0, MsgrContext);
    }
    public msgrgm(): MsgrgmContext | null {
        return this.getRuleContext(0, MsgrgmContext);
    }
    public msgrx2(): Msgrx2Context | null {
        return this.getRuleContext(0, Msgrx2Context);
    }
    public msgrxp(): MsgrxpContext | null {
        return this.getRuleContext(0, MsgrxpContext);
    }
    public nextEffect(): NextEffectContext | null {
        return this.getRuleContext(0, NextEffectContext);
    }
    public nextNode(): NextNodeContext | null {
        return this.getRuleContext(0, NextNodeContext);
    }
    public parse(): ParseContext | null {
        return this.getRuleContext(0, ParseContext);
    }
    public push(): PushContext | null {
        return this.getRuleContext(0, PushContext);
    }
    public random(): RandomContext | null {
        return this.getRuleContext(0, RandomContext);
    }
    public rem2effect(): Rem2effectContext | null {
        return this.getRuleContext(0, Rem2effectContext);
    }
    public remEffect(): RemEffectContext | null {
        return this.getRuleContext(0, RemEffectContext);
    }
    public removeVarField(): RemoveVarFieldContext | null {
        return this.getRuleContext(0, RemoveVarFieldContext);
    }
    public resizeTable(): ResizeTableContext | null {
        return this.getRuleContext(0, ResizeTableContext);
    }
    public rmCall(): RmCallContext | null {
        return this.getRuleContext(0, RmCallContext);
    }
    public rndPlyr(): RndPlyrContext | null {
        return this.getRuleContext(0, RndPlyrContext);
    }
    public rootExistOf(): RootExistOfContext | null {
        return this.getRuleContext(0, RootExistOfContext);
    }
    public roundtime(): RoundtimeContext | null {
        return this.getRuleContext(0, RoundtimeContext);
    }
    public scan(): ScanContext | null {
        return this.getRuleContext(0, ScanContext);
    }
    public scanEffect(): ScanEffectContext | null {
        return this.getRuleContext(0, ScanEffectContext);
    }
    public set(): SetContext | null {
        return this.getRuleContext(0, SetContext);
    }
    public setTable(): SetTableContext | null {
        return this.getRuleContext(0, SetTableContext);
    }
    public sparse(): SparseContext | null {
        return this.getRuleContext(0, SparseContext);
    }
    public stopCommand(): StopCommandContext | null {
        return this.getRuleContext(0, StopCommandContext);
    }
    public stov(): StovContext | null {
        return this.getRuleContext(0, StovContext);
    }
    public substring(): SubstringContext | null {
        return this.getRuleContext(0, SubstringContext);
    }
    public tableInfo(): TableInfoContext | null {
        return this.getRuleContext(0, TableInfoContext);
    }
    public test2effect(): Test2effectContext | null {
        return this.getRuleContext(0, Test2effectContext);
    }
    public testEffect(): TestEffectContext | null {
        return this.getRuleContext(0, TestEffectContext);
    }
    public tparse(): TparseContext | null {
        return this.getRuleContext(0, TparseContext);
    }
    public unload(): UnloadContext | null {
        return this.getRuleContext(0, UnloadContext);
    }
    public updateTable(): UpdateTableContext | null {
        return this.getRuleContext(0, UpdateTableContext);
    }
    public vtos(): VtosContext | null {
        return this.getRuleContext(0, VtosContext);
    }
    public whenStatement(): WhenStatementContext | null {
        return this.getRuleContext(0, WhenStatementContext);
    }
    public where(): WhereContext | null {
        return this.getRuleContext(0, WhereContext);
    }
    public whereAt(): WhereAtContext | null {
        return this.getRuleContext(0, WhereAtContext);
    }
    public whereItem(): WhereItemContext | null {
        return this.getRuleContext(0, WhereItemContext);
    }
    public watch(): WatchContext | null {
        return this.getRuleContext(0, WatchContext);
    }
    public createItem(): CreateItemContext | null {
        return this.getRuleContext(0, CreateItemContext);
    }
    public createRoom(): CreateRoomContext | null {
        return this.getRuleContext(0, CreateRoomContext);
    }
    public createText(): CreateTextContext | null {
        return this.getRuleContext(0, CreateTextContext);
    }
    public remove(): RemoveContext | null {
        return this.getRuleContext(0, RemoveContext);
    }
    public remMenuItem(): RemMenuItemContext | null {
        return this.getRuleContext(0, RemMenuItemContext);
    }
    public remNEffect(): RemNEffectContext | null {
        return this.getRuleContext(0, RemNEffectContext);
    }
    public removeVarGroup(): RemoveVarGroupContext | null {
        return this.getRuleContext(0, RemoveVarGroupContext);
    }
    public addExpr(): AddExprContext | null {
        return this.getRuleContext(0, AddExprContext);
    }
    public addMenuItem(): AddMenuItemContext | null {
        return this.getRuleContext(0, AddMenuItemContext);
    }
    public altWinOff(): AltWinOffContext | null {
        return this.getRuleContext(0, AltWinOffContext);
    }
    public altWinOn(): AltWinOnContext | null {
        return this.getRuleContext(0, AltWinOnContext);
    }
    public anim(): AnimContext | null {
        return this.getRuleContext(0, AnimContext);
    }
    public border(): BorderContext | null {
        return this.getRuleContext(0, BorderContext);
    }
    public bugReport(): BugReportContext | null {
        return this.getRuleContext(0, BugReportContext);
    }
    public callPS(): CallPSContext | null {
        return this.getRuleContext(0, CallPSContext);
    }
    public closeLocker(): CloseLockerContext | null {
        return this.getRuleContext(0, CloseLockerContext);
    }
    public cmgr(): CmgrContext | null {
        return this.getRuleContext(0, CmgrContext);
    }
    public gatherFirstRoom(): GatherFirstRoomContext | null {
        return this.getRuleContext(0, GatherFirstRoomContext);
    }
    public gatherNext(): GatherNextContext | null {
        return this.getRuleContext(0, GatherNextContext);
    }
    public gatherNextRoom(): GatherNextRoomContext | null {
        return this.getRuleContext(0, GatherNextRoomContext);
    }
    public getWatch(): GetWatchContext | null {
        return this.getRuleContext(0, GetWatchContext);
    }
    public getContributors(): GetContributorsContext | null {
        return this.getRuleContext(0, GetContributorsContext);
    }
    public getIndexOf(): GetIndexOfContext | null {
        return this.getRuleContext(0, GetIndexOfContext);
    }
    public getMax(): GetMaxContext | null {
        return this.getRuleContext(0, GetMaxContext);
    }
    public getNameOf(): GetNameOfContext | null {
        return this.getRuleContext(0, GetNameOfContext);
    }
    public getTextCommand(): GetTextCommandContext | null {
        return this.getRuleContext(0, GetTextCommandContext);
    }
    public critical(): CriticalContext | null {
        return this.getRuleContext(0, CriticalContext);
    }
    public drop(): DropContext | null {
        return this.getRuleContext(0, DropContext);
    }
    public hush(): HushContext | null {
        return this.getRuleContext(0, HushContext);
    }
    public playerCount(): PlayerCountContext | null {
        return this.getRuleContext(0, PlayerCountContext);
    }
    public resist(): ResistContext | null {
        return this.getRuleContext(0, ResistContext);
    }
    public launchURL(): LaunchURLContext | null {
        return this.getRuleContext(0, LaunchURLContext);
    }
    public compareItemObject(): CompareItemObjectContext | null {
        return this.getRuleContext(0, CompareItemObjectContext);
    }
    public compareItemEvent(): CompareItemEventContext | null {
        return this.getRuleContext(0, CompareItemEventContext);
    }
    public compareItemCreature(): CompareItemCreatureContext | null {
        return this.getRuleContext(0, CompareItemCreatureContext);
    }
    public contribute(): ContributeContext | null {
        return this.getRuleContext(0, ContributeContext);
    }
    public copyCreature(): CopyCreatureContext | null {
        return this.getRuleContext(0, CopyCreatureContext);
    }
    public copyEvent(): CopyEventContext | null {
        return this.getRuleContext(0, CopyEventContext);
    }
    public copyObject(): CopyObjectContext | null {
        return this.getRuleContext(0, CopyObjectContext);
    }
    public deleteTable(): DeleteTableContext | null {
        return this.getRuleContext(0, DeleteTableContext);
    }
    public deploy(): DeployContext | null {
        return this.getRuleContext(0, DeployContext);
    }
    public dirAdd(): DirAddContext | null {
        return this.getRuleContext(0, DirAddContext);
    }
    public dirSend(): DirSendContext | null {
        return this.getRuleContext(0, DirSendContext);
    }
    public doCreate(): DoCreateContext | null {
        return this.getRuleContext(0, DoCreateContext);
    }
    public doLook(): DoLookContext | null {
        return this.getRuleContext(0, DoLookContext);
    }
    public end2Effect(): End2EffectContext | null {
        return this.getRuleContext(0, End2EffectContext);
    }
    public endEffect(): EndEffectContext | null {
        return this.getRuleContext(0, EndEffectContext);
    }
    public endNEffect(): EndNEffectContext | null {
        return this.getRuleContext(0, EndNEffectContext);
    }
    public feMisc(): FeMiscContext | null {
        return this.getRuleContext(0, FeMiscContext);
    }
    public feUpdate(): FeUpdateContext | null {
        return this.getRuleContext(0, FeUpdateContext);
    }
    public fillTable(): FillTableContext | null {
        return this.getRuleContext(0, FillTableContext);
    }
    public hash1(): Hash1Context | null {
        return this.getRuleContext(0, Hash1Context);
    }
    public hash2(): Hash2Context | null {
        return this.getRuleContext(0, Hash2Context);
    }
    public healP(): HealPContext | null {
        return this.getRuleContext(0, HealPContext);
    }
    public heal(): HealContext | null {
        return this.getRuleContext(0, HealContext);
    }
    public hurt(): HurtContext | null {
        return this.getRuleContext(0, HurtContext);
    }
    public infoItem(): InfoItemContext | null {
        return this.getRuleContext(0, InfoItemContext);
    }
    public inPhrase(): InPhraseContext | null {
        return this.getRuleContext(0, InPhraseContext);
    }
    public isNameFree(): IsNameFreeContext | null {
        return this.getRuleContext(0, IsNameFreeContext);
    }
    public itemSnapshot(): ItemSnapshotContext | null {
        return this.getRuleContext(0, ItemSnapshotContext);
    }
    public launch(): LaunchContext | null {
        return this.getRuleContext(0, LaunchContext);
    }
    public loadCharData(): LoadCharDataContext | null {
        return this.getRuleContext(0, LoadCharDataContext);
    }
    public logToIndex(): LogToIndexContext | null {
        return this.getRuleContext(0, LogToIndexContext);
    }
    public mmgr(): MmgrContext | null {
        return this.getRuleContext(0, MmgrContext);
    }
    public msgfsys(): MsgfsysContext | null {
        return this.getRuleContext(0, MsgfsysContext);
    }
    public msgsgm(): MsgsgmContext | null {
        return this.getRuleContext(0, MsgsgmContext);
    }
    public msgsys(): MsgsysContext | null {
        return this.getRuleContext(0, MsgsysContext);
    }
    public msgs(): MsgsContext | null {
        return this.getRuleContext(0, MsgsContext);
    }
    public msgw(): MsgwContext | null {
        return this.getRuleContext(0, MsgwContext);
    }
    public nameEnd(): NameEndContext | null {
        return this.getRuleContext(0, NameEndContext);
    }
    public nameStart(): NameStartContext | null {
        return this.getRuleContext(0, NameStartContext);
    }
    public openLocker(): OpenLockerContext | null {
        return this.getRuleContext(0, OpenLockerContext);
    }
    public outPhrase(): OutPhraseContext | null {
        return this.getRuleContext(0, OutPhraseContext);
    }
    public parseDecimal(): ParseDecimalContext | null {
        return this.getRuleContext(0, ParseDecimalContext);
    }
    public pauseEffects(): PauseEffectsContext | null {
        return this.getRuleContext(0, PauseEffectsContext);
    }
    public pid(): PidContext | null {
        return this.getRuleContext(0, PidContext);
    }
    public prempt(): PremptContext | null {
        return this.getRuleContext(0, PremptContext);
    }
    public restoreFields(): RestoreFieldsContext | null {
        return this.getRuleContext(0, RestoreFieldsContext);
    }
    public resumeEffects(): ResumeEffectsContext | null {
        return this.getRuleContext(0, ResumeEffectsContext);
    }
    public rndDir(): RndDirContext | null {
        return this.getRuleContext(0, RndDirContext);
    }
    public rndExit(): RndExitContext | null {
        return this.getRuleContext(0, RndExitContext);
    }
    public rollIn(): RollInContext | null {
        return this.getRuleContext(0, RollInContext);
    }
    public roomEnd(): RoomEndContext | null {
        return this.getRuleContext(0, RoomEndContext);
    }
    public roomStart(): RoomStartContext | null {
        return this.getRuleContext(0, RoomStartContext);
    }
    public saveFields(): SaveFieldsContext | null {
        return this.getRuleContext(0, SaveFieldsContext);
    }
    public setName(): SetNameContext | null {
        return this.getRuleContext(0, SetNameContext);
    }
    public setText(): SetTextContext | null {
        return this.getRuleContext(0, SetTextContext);
    }
    public storeCharData(): StoreCharDataContext | null {
        return this.getRuleContext(0, StoreCharDataContext);
    }
    public tellWeb(): TellWebContext | null {
        return this.getRuleContext(0, TellWebContext);
    }
    public test_assert(): Test_assertContext | null {
        return this.getRuleContext(0, Test_assertContext);
    }
    public underOff(): UnderOffContext | null {
        return this.getRuleContext(0, UnderOffContext);
    }
    public underOn(): UnderOnContext | null {
        return this.getRuleContext(0, UnderOnContext);
    }
    public updateSrvrStuff(): UpdateSrvrStuffContext | null {
        return this.getRuleContext(0, UpdateSrvrStuffContext);
    }
    public uppercase(): UppercaseContext | null {
        return this.getRuleContext(0, UppercaseContext);
    }
    public writeChar(): WriteCharContext | null {
        return this.getRuleContext(0, WriteCharContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_statement;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public THEN(): antlr.TerminalNode {
        return this.getToken(GslParser.THEN, 0)!;
    }
    public eol(): EolContext[];
    public eol(i: number): EolContext | null;
    public eol(i?: number): EolContext[] | EolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }

        return this.getRuleContext(i, EolContext);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(GslParser.DOT, 0)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(GslParser.IF, 0);
    }
    public IFNOT(): antlr.TerminalNode | null {
        return this.getToken(GslParser.IFNOT, 0);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public elseIf(): ElseIfContext[];
    public elseIf(i: number): ElseIfContext | null;
    public elseIf(i?: number): ElseIfContext[] | ElseIfContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ElseIfContext);
        }

        return this.getRuleContext(i, ElseIfContext);
    }
    public else(): ElseContext | null {
        return this.getRuleContext(0, ElseContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_if;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterIf) {
             listener.enterIf(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitIf) {
             listener.exitIf(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitIf) {
            return visitor.visitIf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ElseIfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public THEN(): antlr.TerminalNode | null {
        return this.getToken(GslParser.THEN, 0);
    }
    public eol(): EolContext | null {
        return this.getRuleContext(0, EolContext);
    }
    public ELSE_IF(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ELSE_IF, 0);
    }
    public ELSE_IFNOT(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ELSE_IFNOT, 0);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_elseIf;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterElseIf) {
             listener.enterElseIf(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitElseIf) {
             listener.exitElseIf(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitElseIf) {
            return visitor.visitElseIf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ElseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ELSE, 0);
    }
    public eol(): EolContext | null {
        return this.getRuleContext(0, EolContext);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_else;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterElse) {
             listener.enterElse(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitElse) {
             listener.exitElse(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitElse) {
            return visitor.visitElse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhenStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHEN(): antlr.TerminalNode {
        return this.getToken(GslParser.WHEN, 0)!;
    }
    public eol(): EolContext[];
    public eol(i: number): EolContext | null;
    public eol(i?: number): EolContext[] | EolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }

        return this.getRuleContext(i, EolContext);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(GslParser.DOT, 0)!;
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public whenCase(): WhenCaseContext[];
    public whenCase(i: number): WhenCaseContext | null;
    public whenCase(i?: number): WhenCaseContext[] | WhenCaseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenCaseContext);
        }

        return this.getRuleContext(i, WhenCaseContext);
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.NEWLINE);
    	} else {
    		return this.getToken(GslParser.NEWLINE, i);
    	}
    }
    public whenCaseDefault(): WhenCaseDefaultContext[];
    public whenCaseDefault(i: number): WhenCaseDefaultContext | null;
    public whenCaseDefault(i?: number): WhenCaseDefaultContext[] | WhenCaseDefaultContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenCaseDefaultContext);
        }

        return this.getRuleContext(i, WhenCaseDefaultContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_whenStatement;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterWhenStatement) {
             listener.enterWhenStatement(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitWhenStatement) {
             listener.exitWhenStatement(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitWhenStatement) {
            return visitor.visitWhenStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhenCaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(GslParser.IS, 0)!;
    }
    public eol(): EolContext[];
    public eol(i: number): EolContext | null;
    public eol(i?: number): EolContext[] | EolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }

        return this.getRuleContext(i, EolContext);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(GslParser.DOT, 0)!;
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_whenCase;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterWhenCase) {
             listener.enterWhenCase(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitWhenCase) {
             listener.exitWhenCase(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitWhenCase) {
            return visitor.visitWhenCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhenCaseDefaultContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEFAULT(): antlr.TerminalNode {
        return this.getToken(GslParser.DEFAULT, 0)!;
    }
    public eol(): EolContext[];
    public eol(i: number): EolContext | null;
    public eol(i?: number): EolContext[] | EolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }

        return this.getRuleContext(i, EolContext);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(GslParser.DOT, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_whenCaseDefault;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterWhenCaseDefault) {
             listener.enterWhenCaseDefault(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitWhenCaseDefault) {
             listener.exitWhenCaseDefault(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitWhenCaseDefault) {
            return visitor.visitWhenCaseDefault(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOOP(): antlr.TerminalNode {
        return this.getToken(GslParser.LOOP, 0)!;
    }
    public eol(): EolContext[];
    public eol(i: number): EolContext | null;
    public eol(i?: number): EolContext[] | EolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }

        return this.getRuleContext(i, EolContext);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(GslParser.DOT, 0)!;
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_loopStatement;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLoopStatement) {
             listener.enterLoopStatement(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLoopStatement) {
             listener.exitLoopStatement(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLoopStatement) {
            return visitor.visitLoopStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EarlyPopStopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STOP(): antlr.TerminalNode {
        return this.getToken(GslParser.STOP, 0)!;
    }
    public eol(): EolContext[];
    public eol(i: number): EolContext | null;
    public eol(i?: number): EolContext[] | EolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }

        return this.getRuleContext(i, EolContext);
    }
    public FASTPOP(): antlr.TerminalNode[];
    public FASTPOP(i: number): antlr.TerminalNode | null;
    public FASTPOP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.FASTPOP);
    	} else {
    		return this.getToken(GslParser.FASTPOP, i);
    	}
    }
    public POP(): antlr.TerminalNode[];
    public POP(i: number): antlr.TerminalNode | null;
    public POP(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.POP);
    	} else {
    		return this.getToken(GslParser.POP, i);
    	}
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_earlyPopStop;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterEarlyPopStop) {
             listener.enterEarlyPopStop(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitEarlyPopStop) {
             listener.exitEarlyPopStop(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitEarlyPopStop) {
            return visitor.visitEarlyPopStop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADDEXPR(): antlr.TerminalNode {
        return this.getToken(GslParser.ADDEXPR, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_addExpr;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterAddExpr) {
             listener.enterAddExpr(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitAddExpr) {
             listener.exitAddExpr(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitAddExpr) {
            return visitor.visitAddExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddGroupContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADD_GROUP(): antlr.TerminalNode {
        return this.getToken(GslParser.ADD_GROUP, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_addGroup;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterAddGroup) {
             listener.enterAddGroup(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitAddGroup) {
             listener.exitAddGroup(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitAddGroup) {
            return visitor.visitAddGroup(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddMenuItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADDMENUITEM(): antlr.TerminalNode {
        return this.getToken(GslParser.ADDMENUITEM, 0)!;
    }
    public stringExpression(): StringExpressionContext[];
    public stringExpression(i: number): StringExpressionContext | null;
    public stringExpression(i?: number): StringExpressionContext[] | StringExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringExpressionContext);
        }

        return this.getRuleContext(i, StringExpressionContext);
    }
    public TARGET(): antlr.TerminalNode {
        return this.getToken(GslParser.TARGET, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_addMenuItem;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterAddMenuItem) {
             listener.enterAddMenuItem(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitAddMenuItem) {
             listener.exitAddMenuItem(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitAddMenuItem) {
            return visitor.visitAddMenuItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddeffectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADDEFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.ADDEFFECT, 0)!;
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public VALUE1(): antlr.TerminalNode {
        return this.getToken(GslParser.VALUE1, 0)!;
    }
    public VALUE2(): antlr.TerminalNode {
        return this.getToken(GslParser.VALUE2, 0)!;
    }
    public FLAGS(): antlr.TerminalNode {
        return this.getToken(GslParser.FLAGS, 0)!;
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(GslParser.WITH, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(GslParser.IN, 0)!;
    }
    public SCRIPT(): antlr.TerminalNode {
        return this.getToken(GslParser.SCRIPT, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_addeffect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterAddeffect) {
             listener.enterAddeffect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitAddeffect) {
             listener.exitAddeffect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitAddeffect) {
            return visitor.visitAddeffect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AltWinOffContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALTWINOFF(): antlr.TerminalNode {
        return this.getToken(GslParser.ALTWINOFF, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_altWinOff;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterAltWinOff) {
             listener.enterAltWinOff(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitAltWinOff) {
             listener.exitAltWinOff(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitAltWinOff) {
            return visitor.visitAltWinOff(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AltWinOnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALTWINON(): antlr.TerminalNode {
        return this.getToken(GslParser.ALTWINON, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_altWinOn;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterAltWinOn) {
             listener.enterAltWinOn(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitAltWinOn) {
             listener.exitAltWinOn(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitAltWinOn) {
            return visitor.visitAltWinOn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnimContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ANIM(): antlr.TerminalNode {
        return this.getToken(GslParser.ANIM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_anim;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterAnim) {
             listener.enterAnim(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitAnim) {
             listener.exitAnim(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitAnim) {
            return visitor.visitAnim(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssertContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASSERT(): antlr.TerminalNode {
        return this.getToken(GslParser.ASSERT, 0)!;
    }
    public OR_YELL(): antlr.TerminalNode {
        return this.getToken(GslParser.OR_YELL, 0)!;
    }
    public stringExpression(): StringExpressionContext[];
    public stringExpression(i: number): StringExpressionContext | null;
    public stringExpression(i?: number): StringExpressionContext[] | StringExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringExpressionContext);
        }

        return this.getRuleContext(i, StringExpressionContext);
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_assert;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterAssert) {
             listener.enterAssert(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitAssert) {
             listener.exitAssert(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitAssert) {
            return visitor.visitAssert(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttackContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ATTACK(): antlr.TerminalNode {
        return this.getToken(GslParser.ATTACK, 0)!;
    }
    public VS(): antlr.TerminalNode {
        return this.getToken(GslParser.VS, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(GslParser.TYPE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode[];
    public CREATURE_NODE(i: number): antlr.TerminalNode | null;
    public CREATURE_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.CREATURE_NODE);
    	} else {
    		return this.getToken(GslParser.CREATURE_NODE, i);
    	}
    }
    public PLAYER_NODE(): antlr.TerminalNode[];
    public PLAYER_NODE(i: number): antlr.TerminalNode | null;
    public PLAYER_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.PLAYER_NODE);
    	} else {
    		return this.getToken(GslParser.PLAYER_NODE, i);
    	}
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_attack;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterAttack) {
             listener.enterAttack(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitAttack) {
             listener.exitAttack(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitAttack) {
            return visitor.visitAttack(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BitgetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BITGET(): antlr.TerminalNode {
        return this.getToken(GslParser.BITGET, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_bitget;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterBitget) {
             listener.enterBitget(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitBitget) {
             listener.exitBitget(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitBitget) {
            return visitor.visitBitget(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BitsetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BITSET(): antlr.TerminalNode {
        return this.getToken(GslParser.BITSET, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_bitset;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterBitset) {
             listener.enterBitset(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitBitset) {
             listener.exitBitset(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitBitset) {
            return visitor.visitBitset(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BoldoffContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOLDOFF(): antlr.TerminalNode {
        return this.getToken(GslParser.BOLDOFF, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_boldoff;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterBoldoff) {
             listener.enterBoldoff(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitBoldoff) {
             listener.exitBoldoff(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitBoldoff) {
            return visitor.visitBoldoff(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BoldonContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOLDON(): antlr.TerminalNode {
        return this.getToken(GslParser.BOLDON, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_boldon;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterBoldon) {
             listener.enterBoldon(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitBoldon) {
             listener.exitBoldon(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitBoldon) {
            return visitor.visitBoldon(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BorderContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BORDER(): antlr.TerminalNode {
        return this.getToken(GslParser.BORDER, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_border;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterBorder) {
             listener.enterBorder(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitBorder) {
             listener.exitBorder(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitBorder) {
            return visitor.visitBorder(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BugReportContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BUGREPORT(): antlr.TerminalNode {
        return this.getToken(GslParser.BUGREPORT, 0)!;
    }
    public stringExpression(): StringExpressionContext[];
    public stringExpression(i: number): StringExpressionContext | null;
    public stringExpression(i?: number): StringExpressionContext[] | StringExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringExpressionContext);
        }

        return this.getRuleContext(i, StringExpressionContext);
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public MESSAGE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.MESSAGE, 0);
    }
    public DEBUG(): antlr.TerminalNode | null {
        return this.getToken(GslParser.DEBUG, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_bugReport;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterBugReport) {
             listener.enterBugReport(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitBugReport) {
             listener.exitBugReport(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitBugReport) {
            return visitor.visitBugReport(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CALL(): antlr.TerminalNode {
        return this.getToken(GslParser.CALL, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_call;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCall) {
             listener.enterCall(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCall) {
             listener.exitCall(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCall) {
            return visitor.visitCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallPSContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CALLPS(): antlr.TerminalNode {
        return this.getToken(GslParser.CALLPS, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_callPS;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCallPS) {
             listener.enterCallPS(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCallPS) {
             listener.exitCallPS(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCallPS) {
            return visitor.visitCallPS(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallmatchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CALLMATCH(): antlr.TerminalNode {
        return this.getToken(GslParser.CALLMATCH, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(GslParser.IN, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public MAY_MATCH(): antlr.TerminalNode | null {
        return this.getToken(GslParser.MAY_MATCH, 0);
    }
    public MUST_MATCH(): antlr.TerminalNode | null {
        return this.getToken(GslParser.MUST_MATCH, 0);
    }
    public CHECK(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CHECK, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_callmatch;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCallmatch) {
             listener.enterCallmatch(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCallmatch) {
             listener.exitCallmatch(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCallmatch) {
            return visitor.visitCallmatch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CanDoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CANDO(): antlr.TerminalNode {
        return this.getToken(GslParser.CANDO, 0)!;
    }
    public ACTION(): antlr.TerminalNode {
        return this.getToken(GslParser.ACTION, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_canDo;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCanDo) {
             listener.enterCanDo(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCanDo) {
             listener.exitCanDo(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCanDo) {
            return visitor.visitCanDo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CheckEffectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CHECKEFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.CHECKEFFECT, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_checkEffect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCheckEffect) {
             listener.enterCheckEffect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCheckEffect) {
             listener.exitCheckEffect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCheckEffect) {
            return visitor.visitCheckEffect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClearContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLEAR(): antlr.TerminalNode {
        return this.getToken(GslParser.CLEAR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public nodeFieldRef(): NodeFieldRefContext | null {
        return this.getRuleContext(0, NodeFieldRefContext);
    }
    public numberVariable(): NumberVariableContext | null {
        return this.getRuleContext(0, NumberVariableContext);
    }
    public stringVariable(): StringVariableContext | null {
        return this.getRuleContext(0, StringVariableContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_clear;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterClear) {
             listener.enterClear(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitClear) {
             listener.exitClear(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitClear) {
            return visitor.visitClear(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClearMenuContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLEARMENU(): antlr.TerminalNode {
        return this.getToken(GslParser.CLEARMENU, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_clearMenu;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterClearMenu) {
             listener.enterClearMenu(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitClearMenu) {
             listener.exitClearMenu(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitClearMenu) {
            return visitor.visitClearMenu(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClearTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLEARTABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.CLEARTABLE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_clearTable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterClearTable) {
             listener.enterClearTable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitClearTable) {
             listener.exitClearTable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitClearTable) {
            return visitor.visitClearTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CloseLockerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLOSELOCKER(): antlr.TerminalNode {
        return this.getToken(GslParser.CLOSELOCKER, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public USING(): antlr.TerminalNode {
        return this.getToken(GslParser.USING, 0)!;
    }
    public OBJECT_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.OBJECT_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_closeLocker;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCloseLocker) {
             listener.enterCloseLocker(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCloseLocker) {
             listener.exitCloseLocker(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCloseLocker) {
            return visitor.visitCloseLocker(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CmgrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CMGR(): antlr.TerminalNode {
        return this.getToken(GslParser.CMGR, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_cmgr;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCmgr) {
             listener.enterCmgr(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCmgr) {
             listener.exitCmgr(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCmgr) {
            return visitor.visitCmgr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CompareItemCreatureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMPAREITEM(): antlr.TerminalNode {
        return this.getToken(GslParser.COMPAREITEM, 0)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode[];
    public CREATURE_NODE(i: number): antlr.TerminalNode | null;
    public CREATURE_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.CREATURE_NODE);
    	} else {
    		return this.getToken(GslParser.CREATURE_NODE, i);
    	}
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_compareItemCreature;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCompareItemCreature) {
             listener.enterCompareItemCreature(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCompareItemCreature) {
             listener.exitCompareItemCreature(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCompareItemCreature) {
            return visitor.visitCompareItemCreature(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CompareItemEventContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMPAREITEM(): antlr.TerminalNode {
        return this.getToken(GslParser.COMPAREITEM, 0)!;
    }
    public EVENT_NODE(): antlr.TerminalNode[];
    public EVENT_NODE(i: number): antlr.TerminalNode | null;
    public EVENT_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.EVENT_NODE);
    	} else {
    		return this.getToken(GslParser.EVENT_NODE, i);
    	}
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_compareItemEvent;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCompareItemEvent) {
             listener.enterCompareItemEvent(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCompareItemEvent) {
             listener.exitCompareItemEvent(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCompareItemEvent) {
            return visitor.visitCompareItemEvent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CompareItemObjectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMPAREITEM(): antlr.TerminalNode {
        return this.getToken(GslParser.COMPAREITEM, 0)!;
    }
    public OBJECT_NODE(): antlr.TerminalNode[];
    public OBJECT_NODE(i: number): antlr.TerminalNode | null;
    public OBJECT_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.OBJECT_NODE);
    	} else {
    		return this.getToken(GslParser.OBJECT_NODE, i);
    	}
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_compareItemObject;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCompareItemObject) {
             listener.enterCompareItemObject(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCompareItemObject) {
             listener.exitCompareItemObject(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCompareItemObject) {
            return visitor.visitCompareItemObject(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContributeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONTRIBUTE(): antlr.TerminalNode {
        return this.getToken(GslParser.CONTRIBUTE, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public TOWARDS(): antlr.TerminalNode {
        return this.getToken(GslParser.TOWARDS, 0)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CREATURE_NODE, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(GslParser.BY, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_contribute;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterContribute) {
             listener.enterContribute(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitContribute) {
             listener.exitContribute(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitContribute) {
            return visitor.visitContribute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CopyCreatureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(GslParser.COPY, 0)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode[];
    public CREATURE_NODE(i: number): antlr.TerminalNode | null;
    public CREATURE_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.CREATURE_NODE);
    	} else {
    		return this.getToken(GslParser.CREATURE_NODE, i);
    	}
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_copyCreature;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCopyCreature) {
             listener.enterCopyCreature(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCopyCreature) {
             listener.exitCopyCreature(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCopyCreature) {
            return visitor.visitCopyCreature(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CopyEventContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(GslParser.COPY, 0)!;
    }
    public EVENT_NODE(): antlr.TerminalNode[];
    public EVENT_NODE(i: number): antlr.TerminalNode | null;
    public EVENT_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.EVENT_NODE);
    	} else {
    		return this.getToken(GslParser.EVENT_NODE, i);
    	}
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_copyEvent;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCopyEvent) {
             listener.enterCopyEvent(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCopyEvent) {
             listener.exitCopyEvent(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCopyEvent) {
            return visitor.visitCopyEvent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CopyObjectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(GslParser.COPY, 0)!;
    }
    public OBJECT_NODE(): antlr.TerminalNode[];
    public OBJECT_NODE(i: number): antlr.TerminalNode | null;
    public OBJECT_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.OBJECT_NODE);
    	} else {
    		return this.getToken(GslParser.OBJECT_NODE, i);
    	}
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_copyObject;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCopyObject) {
             listener.enterCopyObject(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCopyObject) {
             listener.exitCopyObject(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCopyObject) {
            return visitor.visitCopyObject(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(GslParser.CREATE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public MODE(): antlr.TerminalNode {
        return this.getToken(GslParser.MODE, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_create;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCreate) {
             listener.enterCreate(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCreate) {
             listener.exitCreate(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCreate) {
            return visitor.visitCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATEITEM(): antlr.TerminalNode {
        return this.getToken(GslParser.CREATEITEM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public OBJECT_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.OBJECT_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_createItem;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCreateItem) {
             listener.enterCreateItem(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCreateItem) {
             listener.exitCreateItem(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCreateItem) {
            return visitor.visitCreateItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateRoomContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATEROOM(): antlr.TerminalNode {
        return this.getToken(GslParser.CREATEROOM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public ROOM_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.ROOM_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_createRoom;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCreateRoom) {
             listener.enterCreateRoom(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCreateRoom) {
             listener.exitCreateRoom(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCreateRoom) {
            return visitor.visitCreateRoom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATETABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.CREATETABLE, 0)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(GslParser.TYPE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public SIZE(): antlr.TerminalNode {
        return this.getToken(GslParser.SIZE, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public nodeFieldRef(): NodeFieldRefContext | null {
        return this.getRuleContext(0, NodeFieldRefContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_createTable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCreateTable) {
             listener.enterCreateTable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCreateTable) {
             listener.exitCreateTable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCreateTable) {
            return visitor.visitCreateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateTextContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATETEXT(): antlr.TerminalNode {
        return this.getToken(GslParser.CREATETEXT, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_createText;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCreateText) {
             listener.enterCreateText(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCreateText) {
             listener.exitCreateText(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCreateText) {
            return visitor.visitCreateText(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CriticalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CRITICAL(): antlr.TerminalNode {
        return this.getToken(GslParser.CRITICAL, 0)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.TABLE, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(GslParser.TYPE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_critical;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterCritical) {
             listener.enterCritical(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitCritical) {
             listener.exitCritical(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitCritical) {
            return visitor.visitCritical(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DecodeAttackContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DECODEATTACK(): antlr.TerminalNode {
        return this.getToken(GslParser.DECODEATTACK, 0)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CREATURE_NODE, 0)!;
    }
    public FIELD(): antlr.TerminalNode {
        return this.getToken(GslParser.FIELD, 0)!;
    }
    public fieldName(): FieldNameContext {
        return this.getRuleContext(0, FieldNameContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_decodeAttack;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterDecodeAttack) {
             listener.enterDecodeAttack(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitDecodeAttack) {
             listener.exitDecodeAttack(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitDecodeAttack) {
            return visitor.visitDecodeAttack(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeleteTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DELETETABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.DELETETABLE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_deleteTable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterDeleteTable) {
             listener.enterDeleteTable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitDeleteTable) {
             listener.exitDeleteTable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitDeleteTable) {
            return visitor.visitDeleteTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeployContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEPLOY(): antlr.TerminalNode {
        return this.getToken(GslParser.DEPLOY, 0)!;
    }
    public CALLBACK(): antlr.TerminalNode {
        return this.getToken(GslParser.CALLBACK, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public REPORT_TO(): antlr.TerminalNode {
        return this.getToken(GslParser.REPORT_TO, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public SCRIPT(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SCRIPT, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.TABLE, 0);
    }
    public SEG(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SEG, 0);
    }
    public VERB(): antlr.TerminalNode | null {
        return this.getToken(GslParser.VERB, 0);
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_deploy;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterDeploy) {
             listener.enterDeploy(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitDeploy) {
             listener.exitDeploy(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitDeploy) {
            return visitor.visitDeploy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DirAddContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIRADD(): antlr.TerminalNode {
        return this.getToken(GslParser.DIRADD, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_dirAdd;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterDirAdd) {
             listener.enterDirAdd(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitDirAdd) {
             listener.exitDirAdd(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitDirAdd) {
            return visitor.visitDirAdd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DirSendContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIRSEND(): antlr.TerminalNode {
        return this.getToken(GslParser.DIRSEND, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_dirSend;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterDirSend) {
             listener.enterDirSend(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitDirSend) {
             listener.exitDirSend(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitDirSend) {
            return visitor.visitDirSend(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DoCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOCREATE(): antlr.TerminalNode {
        return this.getToken(GslParser.DOCREATE, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public EVENT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.EVENT_NODE, 0);
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public OBJECT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.OBJECT_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_doCreate;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterDoCreate) {
             listener.enterDoCreate(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitDoCreate) {
             listener.exitDoCreate(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitDoCreate) {
            return visitor.visitDoCreate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DoLookContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOLOOK(): antlr.TerminalNode {
        return this.getToken(GslParser.DOLOOK, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_doLook;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterDoLook) {
             listener.enterDoLook(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitDoLook) {
             listener.exitDoLook(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitDoLook) {
            return visitor.visitDoLook(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(GslParser.DROP, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_drop;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterDrop) {
             listener.enterDrop(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitDrop) {
             listener.exitDrop(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitDrop) {
            return visitor.visitDrop(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EncodeAttackContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENCODEATTACK(): antlr.TerminalNode {
        return this.getToken(GslParser.ENCODEATTACK, 0)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CREATURE_NODE, 0)!;
    }
    public FIELD(): antlr.TerminalNode {
        return this.getToken(GslParser.FIELD, 0)!;
    }
    public fieldName(): FieldNameContext {
        return this.getRuleContext(0, FieldNameContext)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_encodeAttack;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterEncodeAttack) {
             listener.enterEncodeAttack(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitEncodeAttack) {
             listener.exitEncodeAttack(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitEncodeAttack) {
            return visitor.visitEncodeAttack(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class End2EffectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public END2EFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.END2EFFECT, 0)!;
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public VALUE2(): antlr.TerminalNode {
        return this.getToken(GslParser.VALUE2, 0)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_end2Effect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterEnd2Effect) {
             listener.enterEnd2Effect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitEnd2Effect) {
             listener.exitEnd2Effect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitEnd2Effect) {
            return visitor.visitEnd2Effect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EndEffectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENDEFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.ENDEFFECT, 0)!;
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_endEffect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterEndEffect) {
             listener.enterEndEffect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitEndEffect) {
             listener.exitEndEffect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitEndEffect) {
            return visitor.visitEndEffect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EndNEffectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENDNEFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.ENDNEFFECT, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_endNEffect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterEndNEffect) {
             listener.enterEndNEffect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitEndNEffect) {
             listener.exitEndNEffect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitEndNEffect) {
            return visitor.visitEndNEffect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPAND(): antlr.TerminalNode {
        return this.getToken(GslParser.EXPAND, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public S_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.S_REGISTER, 0);
    }
    public T_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.T_REGISTER, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_expand;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterExpand) {
             listener.enterExpand(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitExpand) {
             listener.exitExpand(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitExpand) {
            return visitor.visitExpand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FastpushContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FASTPUSH(): antlr.TerminalNode {
        return this.getToken(GslParser.FASTPUSH, 0)!;
    }
    public eol(): EolContext[];
    public eol(i: number): EolContext | null;
    public eol(i?: number): EolContext[] | EolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }

        return this.getRuleContext(i, EolContext);
    }
    public FASTPOP(): antlr.TerminalNode {
        return this.getToken(GslParser.FASTPOP, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_fastpush;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterFastpush) {
             listener.enterFastpush(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitFastpush) {
             listener.exitFastpush(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitFastpush) {
            return visitor.visitFastpush(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FeMiscContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FEMISC(): antlr.TerminalNode {
        return this.getToken(GslParser.FEMISC, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_feMisc;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterFeMisc) {
             listener.enterFeMisc(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitFeMisc) {
             listener.exitFeMisc(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitFeMisc) {
            return visitor.visitFeMisc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FeUpdateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FEUPDATE(): antlr.TerminalNode {
        return this.getToken(GslParser.FEUPDATE, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public RIGHTHAND(): antlr.TerminalNode | null {
        return this.getToken(GslParser.RIGHTHAND, 0);
    }
    public LEFTHAND(): antlr.TerminalNode | null {
        return this.getToken(GslParser.LEFTHAND, 0);
    }
    public TMPEXPR(): antlr.TerminalNode | null {
        return this.getToken(GslParser.TMPEXPR, 0);
    }
    public STANCE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.STANCE, 0);
    }
    public MANA(): antlr.TerminalNode | null {
        return this.getToken(GslParser.MANA, 0);
    }
    public MAX_MANA(): antlr.TerminalNode | null {
        return this.getToken(GslParser.MAX_MANA, 0);
    }
    public SPIRIT(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SPIRIT, 0);
    }
    public MAX_SPIRIT(): antlr.TerminalNode | null {
        return this.getToken(GslParser.MAX_SPIRIT, 0);
    }
    public HEALTH(): antlr.TerminalNode | null {
        return this.getToken(GslParser.HEALTH, 0);
    }
    public MAX_HEALTH(): antlr.TerminalNode | null {
        return this.getToken(GslParser.MAX_HEALTH, 0);
    }
    public INJURIES(): antlr.TerminalNode | null {
        return this.getToken(GslParser.INJURIES, 0);
    }
    public SCARS(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SCARS, 0);
    }
    public WSPELL(): antlr.TerminalNode | null {
        return this.getToken(GslParser.WSPELL, 0);
    }
    public ROUNDTIME(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROUNDTIME, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_feUpdate;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterFeUpdate) {
             listener.enterFeUpdate(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitFeUpdate) {
             listener.exitFeUpdate(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitFeUpdate) {
            return visitor.visitFeUpdate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FillTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FILLTABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.FILLTABLE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(GslParser.WITH, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_fillTable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterFillTable) {
             listener.enterFillTable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitFillTable) {
             listener.exitFillTable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitFillTable) {
            return visitor.visitFillTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GatherContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GATHER(): antlr.TerminalNode {
        return this.getToken(GslParser.GATHER, 0)!;
    }
    public node(): NodeContext[];
    public node(i: number): NodeContext | null;
    public node(i?: number): NodeContext[] | NodeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NodeContext);
        }

        return this.getRuleContext(i, NodeContext);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public FIRSTOBJ(): antlr.TerminalNode | null {
        return this.getToken(GslParser.FIRSTOBJ, 0);
    }
    public NEXTOBJ(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NEXTOBJ, 0);
    }
    public FIRSTPLAYER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.FIRSTPLAYER, 0);
    }
    public NEXTPLAYER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NEXTPLAYER, 0);
    }
    public FIRSTWATCH(): antlr.TerminalNode | null {
        return this.getToken(GslParser.FIRSTWATCH, 0);
    }
    public NEXTWATCH(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NEXTWATCH, 0);
    }
    public FIRSTBLOOD(): antlr.TerminalNode | null {
        return this.getToken(GslParser.FIRSTBLOOD, 0);
    }
    public NEXTBLOOD(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NEXTBLOOD, 0);
    }
    public NEXTROOM(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NEXTROOM, 0);
    }
    public ALLPLAYERS(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ALLPLAYERS, 0);
    }
    public EXIST(): antlr.TerminalNode | null {
        return this.getToken(GslParser.EXIST, 0);
    }
    public NONEXIST(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NONEXIST, 0);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ALL, 0);
    }
    public SAMETYPE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SAMETYPE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_gather;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGather) {
             listener.enterGather(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGather) {
             listener.exitGather(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGather) {
            return visitor.visitGather(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GatherFirstContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GATHERFIRST(): antlr.TerminalNode {
        return this.getToken(GslParser.GATHERFIRST, 0)!;
    }
    public node(): NodeContext[];
    public node(i: number): NodeContext | null;
    public node(i?: number): NodeContext[] | NodeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NodeContext);
        }

        return this.getRuleContext(i, NodeContext);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_gatherFirst;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGatherFirst) {
             listener.enterGatherFirst(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGatherFirst) {
             listener.exitGatherFirst(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGatherFirst) {
            return visitor.visitGatherFirst(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GatherFirstRoomContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GATHERFIRSTROOM(): antlr.TerminalNode {
        return this.getToken(GslParser.GATHERFIRSTROOM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public ROOM_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.ROOM_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_gatherFirstRoom;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGatherFirstRoom) {
             listener.enterGatherFirstRoom(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGatherFirstRoom) {
             listener.exitGatherFirstRoom(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGatherFirstRoom) {
            return visitor.visitGatherFirstRoom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GatherNextContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GATHERNEXT(): antlr.TerminalNode {
        return this.getToken(GslParser.GATHERNEXT, 0)!;
    }
    public node(): NodeContext[];
    public node(i: number): NodeContext | null;
    public node(i?: number): NodeContext[] | NodeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NodeContext);
        }

        return this.getRuleContext(i, NodeContext);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_gatherNext;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGatherNext) {
             listener.enterGatherNext(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGatherNext) {
             listener.exitGatherNext(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGatherNext) {
            return visitor.visitGatherNext(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GatherNextRoomContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GATHERNEXTROOM(): antlr.TerminalNode {
        return this.getToken(GslParser.GATHERNEXTROOM, 0)!;
    }
    public ROOM_NODE(): antlr.TerminalNode[];
    public ROOM_NODE(i: number): antlr.TerminalNode | null;
    public ROOM_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.ROOM_NODE);
    	} else {
    		return this.getToken(GslParser.ROOM_NODE, i);
    	}
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_gatherNextRoom;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGatherNextRoom) {
             listener.enterGatherNextRoom(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGatherNextRoom) {
             listener.exitGatherNextRoom(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGatherNextRoom) {
            return visitor.visitGatherNextRoom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GatherPlayerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GATHERPLAYER(): antlr.TerminalNode {
        return this.getToken(GslParser.GATHERPLAYER, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode[];
    public PLAYER_NODE(i: number): antlr.TerminalNode | null;
    public PLAYER_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.PLAYER_NODE);
    	} else {
    		return this.getToken(GslParser.PLAYER_NODE, i);
    	}
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_gatherPlayer;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGatherPlayer) {
             listener.enterGatherPlayer(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGatherPlayer) {
             listener.exitGatherPlayer(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGatherPlayer) {
            return visitor.visitGatherPlayer(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetContributorsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GETCONTRIBUTORS(): antlr.TerminalNode {
        return this.getToken(GslParser.GETCONTRIBUTORS, 0)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CREATURE_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_getContributors;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGetContributors) {
             listener.enterGetContributors(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGetContributors) {
             listener.exitGetContributors(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGetContributors) {
            return visitor.visitGetContributors(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetIndexOfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GETINDEXOF(): antlr.TerminalNode {
        return this.getToken(GslParser.GETINDEXOF, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_getIndexOf;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGetIndexOf) {
             listener.enterGetIndexOf(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGetIndexOf) {
             listener.exitGetIndexOf(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGetIndexOf) {
            return visitor.visitGetIndexOf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetMaxContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GETMAX(): antlr.TerminalNode {
        return this.getToken(GslParser.GETMAX, 0)!;
    }
    public OF(): antlr.TerminalNode {
        return this.getToken(GslParser.OF, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public OBJECT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.OBJECT_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public ENCUM(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ENCUM, 0);
    }
    public BHPT(): antlr.TerminalNode | null {
        return this.getToken(GslParser.BHPT, 0);
    }
    public POWER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.POWER, 0);
    }
    public OBJECTS(): antlr.TerminalNode | null {
        return this.getToken(GslParser.OBJECTS, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_getMax;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGetMax) {
             listener.enterGetMax(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGetMax) {
             listener.exitGetMax(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGetMax) {
            return visitor.visitGetMax(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetNameOfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GETNAMEOF(): antlr.TerminalNode {
        return this.getToken(GslParser.GETNAMEOF, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_getNameOf;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGetNameOf) {
             listener.enterGetNameOf(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGetNameOf) {
             listener.exitGetNameOf(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGetNameOf) {
            return visitor.visitGetNameOf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetPsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GETPS(): antlr.TerminalNode {
        return this.getToken(GslParser.GETPS, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_getPs;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGetPs) {
             listener.enterGetPs(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGetPs) {
             listener.exitGetPs(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGetPs) {
            return visitor.visitGetPs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GETTABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.GETTABLE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public AT(): antlr.TerminalNode {
        return this.getToken(GslParser.AT, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public numberVariable(): NumberVariableContext | null {
        return this.getRuleContext(0, NumberVariableContext);
    }
    public stringVariable(): StringVariableContext | null {
        return this.getRuleContext(0, StringVariableContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_getTable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGetTable) {
             listener.enterGetTable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGetTable) {
             listener.exitGetTable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGetTable) {
            return visitor.visitGetTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetTextCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GETTEXT(): antlr.TerminalNode {
        return this.getToken(GslParser.GETTEXT, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public stringVariable(): StringVariableContext | null {
        return this.getRuleContext(0, StringVariableContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_getTextCommand;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGetTextCommand) {
             listener.enterGetTextCommand(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGetTextCommand) {
             listener.exitGetTextCommand(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGetTextCommand) {
            return visitor.visitGetTextCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetWatchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GETWATCH(): antlr.TerminalNode {
        return this.getToken(GslParser.GETWATCH, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_getWatch;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGetWatch) {
             listener.enterGetWatch(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGetWatch) {
             listener.exitGetWatch(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGetWatch) {
            return visitor.visitGetWatch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GlueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GLUE(): antlr.TerminalNode {
        return this.getToken(GslParser.GLUE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_glue;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGlue) {
             listener.enterGlue(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGlue) {
             listener.exitGlue(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGlue) {
            return visitor.visitGlue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GotoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GOTO(): antlr.TerminalNode {
        return this.getToken(GslParser.GOTO, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_goto;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterGoto) {
             listener.enterGoto(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitGoto) {
             listener.exitGoto(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitGoto) {
            return visitor.visitGoto(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Hash1Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HASH1(): antlr.TerminalNode {
        return this.getToken(GslParser.HASH1, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_hash1;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterHash1) {
             listener.enterHash1(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitHash1) {
             listener.exitHash1(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitHash1) {
            return visitor.visitHash1(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Hash2Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HASH2(): antlr.TerminalNode {
        return this.getToken(GslParser.HASH2, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_hash2;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterHash2) {
             listener.enterHash2(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitHash2) {
             listener.exitHash2(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitHash2) {
            return visitor.visitHash2(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HealContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HEAL(): antlr.TerminalNode {
        return this.getToken(GslParser.HEAL, 0)!;
    }
    public AREA(): antlr.TerminalNode {
        return this.getToken(GslParser.AREA, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(GslParser.BY, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_heal;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterHeal) {
             listener.enterHeal(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitHeal) {
             listener.exitHeal(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitHeal) {
            return visitor.visitHeal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HealPContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HEALP(): antlr.TerminalNode {
        return this.getToken(GslParser.HEALP, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public AREA(): antlr.TerminalNode {
        return this.getToken(GslParser.AREA, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(GslParser.BY, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_healP;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterHealP) {
             listener.enterHealP(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitHealP) {
             listener.exitHealP(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitHealP) {
            return visitor.visitHealP(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HurtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HURT(): antlr.TerminalNode {
        return this.getToken(GslParser.HURT, 0)!;
    }
    public HITS(): antlr.TerminalNode {
        return this.getToken(GslParser.HITS, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_hurt;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterHurt) {
             listener.enterHurt(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitHurt) {
             listener.exitHurt(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitHurt) {
            return visitor.visitHurt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HushContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HUSH(): antlr.TerminalNode {
        return this.getToken(GslParser.HUSH, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_hush;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterHush) {
             listener.enterHush(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitHush) {
             listener.exitHush(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitHush) {
            return visitor.visitHush(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InPhraseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INPHRASE(): antlr.TerminalNode {
        return this.getToken(GslParser.INPHRASE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public stringVariable(): StringVariableContext {
        return this.getRuleContext(0, StringVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_inPhrase;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterInPhrase) {
             listener.enterInPhrase(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitInPhrase) {
             listener.exitInPhrase(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitInPhrase) {
            return visitor.visitInPhrase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IndexContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(GslParser.INDEX, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public OBJECT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.OBJECT_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_index;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterIndex) {
             listener.enterIndex(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitIndex) {
             listener.exitIndex(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitIndex) {
            return visitor.visitIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InfoItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INFOITEM(): antlr.TerminalNode {
        return this.getToken(GslParser.INFOITEM, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public EVENT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.EVENT_NODE, 0);
    }
    public OBJECT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.OBJECT_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_infoItem;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterInfoItem) {
             listener.enterInfoItem(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitInfoItem) {
             listener.exitInfoItem(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitInfoItem) {
            return visitor.visitInfoItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InfoProfileContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INFO(): antlr.TerminalNode {
        return this.getToken(GslParser.INFO, 0)!;
    }
    public PROFILE(): antlr.TerminalNode {
        return this.getToken(GslParser.PROFILE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_infoProfile;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterInfoProfile) {
             listener.enterInfoProfile(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitInfoProfile) {
             listener.exitInfoProfile(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitInfoProfile) {
            return visitor.visitInfoProfile(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InfoScriptContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INFO(): antlr.TerminalNode {
        return this.getToken(GslParser.INFO, 0)!;
    }
    public SCRIPT(): antlr.TerminalNode {
        return this.getToken(GslParser.SCRIPT, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_infoScript;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterInfoScript) {
             listener.enterInfoScript(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitInfoScript) {
             listener.exitInfoScript(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitInfoScript) {
            return visitor.visitInfoScript(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InfoTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INFO(): antlr.TerminalNode {
        return this.getToken(GslParser.INFO, 0)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.TABLE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_infoTable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterInfoTable) {
             listener.enterInfoTable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitInfoTable) {
             listener.exitInfoTable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitInfoTable) {
            return visitor.visitInfoTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InfoVarFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INFO(): antlr.TerminalNode {
        return this.getToken(GslParser.INFO, 0)!;
    }
    public VARFIELD(): antlr.TerminalNode {
        return this.getToken(GslParser.VARFIELD, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_infoVarField;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterInfoVarField) {
             listener.enterInfoVarField(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitInfoVarField) {
             listener.exitInfoVarField(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitInfoVarField) {
            return visitor.visitInfoVarField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InfoVerbContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INFO(): antlr.TerminalNode {
        return this.getToken(GslParser.INFO, 0)!;
    }
    public VERB(): antlr.TerminalNode {
        return this.getToken(GslParser.VERB, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_infoVerb;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterInfoVerb) {
             listener.enterInfoVerb(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitInfoVerb) {
             listener.exitInfoVerb(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitInfoVerb) {
            return visitor.visitInfoVerb(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InjureContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INJURE(): antlr.TerminalNode {
        return this.getToken(GslParser.INJURE, 0)!;
    }
    public AREA(): antlr.TerminalNode {
        return this.getToken(GslParser.AREA, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(GslParser.BY, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_injure;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterInjure) {
             listener.enterInjure(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitInjure) {
             listener.exitInjure(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitInjure) {
            return visitor.visitInjure(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IsInjuredContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ISINJURED(): antlr.TerminalNode {
        return this.getToken(GslParser.ISINJURED, 0)!;
    }
    public AREA(): antlr.TerminalNode {
        return this.getToken(GslParser.AREA, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_isInjured;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterIsInjured) {
             listener.enterIsInjured(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitIsInjured) {
             listener.exitIsInjured(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitIsInjured) {
            return visitor.visitIsInjured(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IsNameFreeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ISNAMEFREE(): antlr.TerminalNode {
        return this.getToken(GslParser.ISNAMEFREE, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_isNameFree;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterIsNameFree) {
             listener.enterIsNameFree(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitIsNameFree) {
             listener.exitIsNameFree(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitIsNameFree) {
            return visitor.visitIsNameFree(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ItemSnapshotContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ITEMSNAPSHOT(): antlr.TerminalNode {
        return this.getToken(GslParser.ITEMSNAPSHOT, 0)!;
    }
    public OBJECT_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.OBJECT_NODE, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_itemSnapshot;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterItemSnapshot) {
             listener.enterItemSnapshot(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitItemSnapshot) {
             listener.exitItemSnapshot(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitItemSnapshot) {
            return visitor.visitItemSnapshot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KillContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KILL(): antlr.TerminalNode {
        return this.getToken(GslParser.KILL, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_kill;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterKill) {
             listener.enterKill(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitKill) {
             listener.exitKill(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitKill) {
            return visitor.visitKill(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KillAllNpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KILLALLNP(): antlr.TerminalNode {
        return this.getToken(GslParser.KILLALLNP, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_killAllNp;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterKillAllNp) {
             listener.enterKillAllNp(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitKillAllNp) {
             listener.exitKillAllNp(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitKillAllNp) {
            return visitor.visitKillAllNp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LabelContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LABEL(): antlr.TerminalNode {
        return this.getToken(GslParser.LABEL, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_label;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLabel) {
             listener.enterLabel(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLabel) {
             listener.exitLabel(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLabel) {
            return visitor.visitLabel(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LaunchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LAUNCH(): antlr.TerminalNode {
        return this.getToken(GslParser.LAUNCH, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public BOOKEDIT(): antlr.TerminalNode | null {
        return this.getToken(GslParser.BOOKEDIT, 0);
    }
    public BOOK(): antlr.TerminalNode | null {
        return this.getToken(GslParser.BOOK, 0);
    }
    public MYSTERY(): antlr.TerminalNode | null {
        return this.getToken(GslParser.MYSTERY, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_launch;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLaunch) {
             listener.enterLaunch(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLaunch) {
             listener.exitLaunch(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLaunch) {
            return visitor.visitLaunch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LaunchURLContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LAUNCHURL(): antlr.TerminalNode {
        return this.getToken(GslParser.LAUNCHURL, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public WEB_CM(): antlr.TerminalNode | null {
        return this.getToken(GslParser.WEB_CM, 0);
    }
    public BBS(): antlr.TerminalNode | null {
        return this.getToken(GslParser.BBS, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_launchURL;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLaunchURL) {
             listener.enterLaunchURL(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLaunchURL) {
             listener.exitLaunchURL(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLaunchURL) {
            return visitor.visitLaunchURL(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOAD(): antlr.TerminalNode {
        return this.getToken(GslParser.LOAD, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_load;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLoad) {
             listener.enterLoad(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLoad) {
             listener.exitLoad(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLoad) {
            return visitor.visitLoad(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoadCharDataContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOADCHARDATA(): antlr.TerminalNode {
        return this.getToken(GslParser.LOADCHARDATA, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public OBJECT_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.OBJECT_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CMGR(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CMGR, 0);
    }
    public MMGR(): antlr.TerminalNode | null {
        return this.getToken(GslParser.MMGR, 0);
    }
    public WORD(): antlr.TerminalNode | null {
        return this.getToken(GslParser.WORD, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_loadCharData;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLoadCharData) {
             listener.enterLoadCharData(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLoadCharData) {
             listener.exitLoadCharData(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLoadCharData) {
            return visitor.visitLoadCharData(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogMsgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOGMSG(): antlr.TerminalNode {
        return this.getToken(GslParser.LOGMSG, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logMsg;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogMsg) {
             listener.enterLogMsg(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogMsg) {
             listener.exitLogMsg(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogMsg) {
            return visitor.visitLogMsg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogStartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOG(): antlr.TerminalNode {
        return this.getToken(GslParser.LOG, 0)!;
    }
    public START(): antlr.TerminalNode {
        return this.getToken(GslParser.START, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logStart;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogStart) {
             listener.enterLogStart(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogStart) {
             listener.exitLogStart(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogStart) {
            return visitor.visitLogStart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogSubmitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOG(): antlr.TerminalNode {
        return this.getToken(GslParser.LOG, 0)!;
    }
    public SUBMIT(): antlr.TerminalNode {
        return this.getToken(GslParser.SUBMIT, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logSubmit;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogSubmit) {
             listener.enterLogSubmit(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogSubmit) {
             listener.exitLogSubmit(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogSubmit) {
            return visitor.visitLogSubmit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogTargetAccountContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOG(): antlr.TerminalNode {
        return this.getToken(GslParser.LOG, 0)!;
    }
    public TARGET_ACCOUNT(): antlr.TerminalNode {
        return this.getToken(GslParser.TARGET_ACCOUNT, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logTargetAccount;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogTargetAccount) {
             listener.enterLogTargetAccount(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogTargetAccount) {
             listener.exitLogTargetAccount(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogTargetAccount) {
            return visitor.visitLogTargetAccount(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogTargetIndexContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOG(): antlr.TerminalNode {
        return this.getToken(GslParser.LOG, 0)!;
    }
    public TARGET_INDEX(): antlr.TerminalNode {
        return this.getToken(GslParser.TARGET_INDEX, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logTargetIndex;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogTargetIndex) {
             listener.enterLogTargetIndex(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogTargetIndex) {
             listener.exitLogTargetIndex(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogTargetIndex) {
            return visitor.visitLogTargetIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogTargetNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOG(): antlr.TerminalNode {
        return this.getToken(GslParser.LOG, 0)!;
    }
    public TARGET_NAME(): antlr.TerminalNode {
        return this.getToken(GslParser.TARGET_NAME, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logTargetName;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogTargetName) {
             listener.enterLogTargetName(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogTargetName) {
             listener.exitLogTargetName(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogTargetName) {
            return visitor.visitLogTargetName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogTargetOtherContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOG(): antlr.TerminalNode {
        return this.getToken(GslParser.LOG, 0)!;
    }
    public TARGET_OTHER(): antlr.TerminalNode {
        return this.getToken(GslParser.TARGET_OTHER, 0)!;
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(GslParser.STRING, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logTargetOther;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogTargetOther) {
             listener.enterLogTargetOther(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogTargetOther) {
             listener.exitLogTargetOther(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogTargetOther) {
            return visitor.visitLogTargetOther(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogTargetUidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOG(): antlr.TerminalNode {
        return this.getToken(GslParser.LOG, 0)!;
    }
    public TARGET_UID(): antlr.TerminalNode {
        return this.getToken(GslParser.TARGET_UID, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logTargetUid;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogTargetUid) {
             listener.enterLogTargetUid(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogTargetUid) {
             listener.exitLogTargetUid(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogTargetUid) {
            return visitor.visitLogTargetUid(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogTextContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOG(): antlr.TerminalNode {
        return this.getToken(GslParser.LOG, 0)!;
    }
    public TEXT(): antlr.TerminalNode {
        return this.getToken(GslParser.TEXT, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logText;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogText) {
             listener.enterLogText(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogText) {
             listener.exitLogText(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogText) {
            return visitor.visitLogText(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogToIndexContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOGTOINDEX(): antlr.TerminalNode {
        return this.getToken(GslParser.LOGTOINDEX, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logToIndex;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogToIndex) {
             listener.enterLogToIndex(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogToIndex) {
             listener.exitLogToIndex(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogToIndex) {
            return visitor.visitLogToIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogtoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOGTO(): antlr.TerminalNode {
        return this.getToken(GslParser.LOGTO, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_logto;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLogto) {
             listener.enterLogto(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLogto) {
             listener.exitLogto(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLogto) {
            return visitor.visitLogto(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LookRoomContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOOKROOM(): antlr.TerminalNode {
        return this.getToken(GslParser.LOOKROOM, 0)!;
    }
    public ROOM_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.ROOM_NODE, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_lookRoom;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLookRoom) {
             listener.enterLookRoom(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLookRoom) {
             listener.exitLookRoom(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLookRoom) {
            return visitor.visitLookRoom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LowercaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOWERCASE(): antlr.TerminalNode {
        return this.getToken(GslParser.LOWERCASE, 0)!;
    }
    public stringVariable(): StringVariableContext {
        return this.getRuleContext(0, StringVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_lowercase;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterLowercase) {
             listener.enterLowercase(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitLowercase) {
             listener.exitLowercase(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitLowercase) {
            return visitor.visitLowercase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchMarkerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(GslParser.COLON, 0)!;
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(GslParser.STRING, 0)!;
    }
    public eol(): EolContext[];
    public eol(i: number): EolContext | null;
    public eol(i?: number): EolContext[] | EolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }

        return this.getRuleContext(i, EolContext);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(GslParser.DOT, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_matchMarker;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMatchMarker) {
             listener.enterMatchMarker(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMatchMarker) {
             listener.exitMatchMarker(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMatchMarker) {
            return visitor.visitMatchMarker(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchSpellContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MATCHSPELL(): antlr.TerminalNode {
        return this.getToken(GslParser.MATCHSPELL, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public SPELL(): antlr.TerminalNode {
        return this.getToken(GslParser.SPELL, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_matchSpell;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMatchSpell) {
             listener.enterMatchSpell(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMatchSpell) {
             listener.exitMatchSpell(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMatchSpell) {
            return visitor.visitMatchSpell(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MmgrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MMGR(): antlr.TerminalNode {
        return this.getToken(GslParser.MMGR, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public MERCHANT(): antlr.TerminalNode {
        return this.getToken(GslParser.MERCHANT, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_mmgr;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMmgr) {
             listener.enterMmgr(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMmgr) {
             listener.exitMmgr(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMmgr) {
            return visitor.visitMmgr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MoveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MOVE(): antlr.TerminalNode {
        return this.getToken(GslParser.MOVE, 0)!;
    }
    public node(): NodeContext[];
    public node(i: number): NodeContext | null;
    public node(i?: number): NodeContext[] | NodeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NodeContext);
        }

        return this.getRuleContext(i, NodeContext);
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public GROUND(): antlr.TerminalNode | null {
        return this.getToken(GslParser.GROUND, 0);
    }
    public INVENTORY(): antlr.TerminalNode | null {
        return this.getToken(GslParser.INVENTORY, 0);
    }
    public BEHIND(): antlr.TerminalNode | null {
        return this.getToken(GslParser.BEHIND, 0);
    }
    public UNDER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.UNDER, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(GslParser.IN, 0);
    }
    public ON(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ON, 0);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_move;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMove) {
             listener.enterMove(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMove) {
             listener.exitMove(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMove) {
            return visitor.visitMove(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSG(): antlr.TerminalNode {
        return this.getToken(GslParser.MSG, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msg;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsg) {
             listener.enterMsg(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsg) {
             listener.exitMsg(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsg) {
            return visitor.visitMsg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgGmContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGGM(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGGM, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgGm;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgGm) {
             listener.enterMsgGm(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgGm) {
             listener.exitMsgGm(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgGm) {
            return visitor.visitMsgGm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgfsysContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGFSYS(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGFSYS, 0)!;
    }
    public WORD(): antlr.TerminalNode {
        return this.getToken(GslParser.WORD, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgfsys;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgfsys) {
             listener.enterMsgfsys(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgfsys) {
             listener.exitMsgfsys(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgfsys) {
            return visitor.visitMsgfsys(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGP(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGP, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgp;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgp) {
             listener.enterMsgp(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgp) {
             listener.exitMsgp(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgp) {
            return visitor.visitMsgp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGR(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGR, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgr;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgr) {
             listener.enterMsgr(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgr) {
             listener.exitMsgr(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgr) {
            return visitor.visitMsgr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgrgmContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGRGM(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGRGM, 0)!;
    }
    public ROOM_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.ROOM_NODE, 0)!;
    }
    public MODE(): antlr.TerminalNode {
        return this.getToken(GslParser.MODE, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public WORD(): antlr.TerminalNode | null {
        return this.getToken(GslParser.WORD, 0);
    }
    public INFO(): antlr.TerminalNode | null {
        return this.getToken(GslParser.INFO, 0);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgrgm;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgrgm) {
             listener.enterMsgrgm(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgrgm) {
             listener.exitMsgrgm(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgrgm) {
            return visitor.visitMsgrgm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Msgrx2Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGRX2(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGRX2, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgrx2;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgrx2) {
             listener.enterMsgrx2(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgrx2) {
             listener.exitMsgrx2(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgrx2) {
            return visitor.visitMsgrx2(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgrxpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGRXP(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGRXP, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgrxp;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgrxp) {
             listener.enterMsgrxp(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgrxp) {
             listener.exitMsgrxp(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgrxp) {
            return visitor.visitMsgrxp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGS(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGS, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgs;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgs) {
             listener.enterMsgs(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgs) {
             listener.exitMsgs(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgs) {
            return visitor.visitMsgs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgsgmContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGSGM(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGSGM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgsgm;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgsgm) {
             listener.enterMsgsgm(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgsgm) {
             listener.exitMsgsgm(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgsgm) {
            return visitor.visitMsgsgm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgsysContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGSYS(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGSYS, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgsys;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgsys) {
             listener.enterMsgsys(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgsys) {
             listener.exitMsgsys(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgsys) {
            return visitor.visitMsgsys(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MsgwContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MSGW(): antlr.TerminalNode {
        return this.getToken(GslParser.MSGW, 0)!;
    }
    public stringExpression(): StringExpressionContext[];
    public stringExpression(i: number): StringExpressionContext | null;
    public stringExpression(i?: number): StringExpressionContext[] | StringExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringExpressionContext);
        }

        return this.getRuleContext(i, StringExpressionContext);
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_msgw;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterMsgw) {
             listener.enterMsgw(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitMsgw) {
             listener.exitMsgw(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitMsgw) {
            return visitor.visitMsgw(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NameEndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NAMEEND(): antlr.TerminalNode {
        return this.getToken(GslParser.NAMEEND, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_nameEnd;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterNameEnd) {
             listener.enterNameEnd(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitNameEnd) {
             listener.exitNameEnd(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitNameEnd) {
            return visitor.visitNameEnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NameStartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NAMESTART(): antlr.TerminalNode {
        return this.getToken(GslParser.NAMESTART, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_nameStart;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterNameStart) {
             listener.enterNameStart(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitNameStart) {
             listener.exitNameStart(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitNameStart) {
            return visitor.visitNameStart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NextEffectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEXTEFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.NEXTEFFECT, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_nextEffect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterNextEffect) {
             listener.enterNextEffect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitNextEffect) {
             listener.exitNextEffect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitNextEffect) {
            return visitor.visitNextEffect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NextNodeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NEXTNODE(): antlr.TerminalNode {
        return this.getToken(GslParser.NEXTNODE, 0)!;
    }
    public node(): NodeContext[];
    public node(i: number): NodeContext | null;
    public node(i?: number): NodeContext[] | NodeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NodeContext);
        }

        return this.getRuleContext(i, NodeContext);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public GROUND(): antlr.TerminalNode | null {
        return this.getToken(GslParser.GROUND, 0);
    }
    public INVENTORY(): antlr.TerminalNode | null {
        return this.getToken(GslParser.INVENTORY, 0);
    }
    public BEHIND(): antlr.TerminalNode | null {
        return this.getToken(GslParser.BEHIND, 0);
    }
    public UNDER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.UNDER, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(GslParser.IN, 0);
    }
    public ON(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ON, 0);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_nextNode;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterNextNode) {
             listener.enterNextNode(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitNextNode) {
             listener.exitNextNode(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitNextNode) {
            return visitor.visitNextNode(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OpenLockerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPENLOCKER(): antlr.TerminalNode {
        return this.getToken(GslParser.OPENLOCKER, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public USING(): antlr.TerminalNode {
        return this.getToken(GslParser.USING, 0)!;
    }
    public OBJECT_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.OBJECT_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_openLocker;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterOpenLocker) {
             listener.enterOpenLocker(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitOpenLocker) {
             listener.exitOpenLocker(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitOpenLocker) {
            return visitor.visitOpenLocker(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OutPhraseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OUTPHRASE(): antlr.TerminalNode {
        return this.getToken(GslParser.OUTPHRASE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public stringVariable(): StringVariableContext {
        return this.getRuleContext(0, StringVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_outPhrase;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterOutPhrase) {
             listener.enterOutPhrase(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitOutPhrase) {
             listener.exitOutPhrase(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitOutPhrase) {
            return visitor.visitOutPhrase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARSE(): antlr.TerminalNode {
        return this.getToken(GslParser.PARSE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_parse;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterParse) {
             listener.enterParse(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitParse) {
             listener.exitParse(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitParse) {
            return visitor.visitParse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParseDecimalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARSEDECIMAL(): antlr.TerminalNode {
        return this.getToken(GslParser.PARSEDECIMAL, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_parseDecimal;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterParseDecimal) {
             listener.enterParseDecimal(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitParseDecimal) {
             listener.exitParseDecimal(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitParseDecimal) {
            return visitor.visitParseDecimal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PauseEffectsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PAUSEEFFECTS(): antlr.TerminalNode {
        return this.getToken(GslParser.PAUSEEFFECTS, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_pauseEffects;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterPauseEffects) {
             listener.enterPauseEffects(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitPauseEffects) {
             listener.exitPauseEffects(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitPauseEffects) {
            return visitor.visitPauseEffects(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PID(): antlr.TerminalNode {
        return this.getToken(GslParser.PID, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public EVENT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.EVENT_NODE, 0);
    }
    public OBJECT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.OBJECT_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_pid;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterPid) {
             listener.enterPid(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitPid) {
             listener.exitPid(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitPid) {
            return visitor.visitPid(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PlayerCountContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PLAYERCOUNT(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYERCOUNT, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public numberVariable(): NumberVariableContext | null {
        return this.getRuleContext(0, NumberVariableContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_playerCount;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterPlayerCount) {
             listener.enterPlayerCount(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitPlayerCount) {
             listener.exitPlayerCount(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitPlayerCount) {
            return visitor.visitPlayerCount(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PremptContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PREMPT(): antlr.TerminalNode {
        return this.getToken(GslParser.PREMPT, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_prempt;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterPrempt) {
             listener.enterPrempt(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitPrempt) {
             listener.exitPrempt(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitPrempt) {
            return visitor.visitPrempt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PushContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PUSH(): antlr.TerminalNode {
        return this.getToken(GslParser.PUSH, 0)!;
    }
    public eol(): EolContext[];
    public eol(i: number): EolContext | null;
    public eol(i?: number): EolContext[] | EolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }

        return this.getRuleContext(i, EolContext);
    }
    public POP(): antlr.TerminalNode {
        return this.getToken(GslParser.POP, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_push;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterPush) {
             listener.enterPush(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitPush) {
             listener.exitPush(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitPush) {
            return visitor.visitPush(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RandomContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RANDOM(): antlr.TerminalNode {
        return this.getToken(GslParser.RANDOM, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_random;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRandom) {
             listener.enterRandom(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRandom) {
             listener.exitRandom(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRandom) {
            return visitor.visitRandom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Rem2effectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REM2EFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.REM2EFFECT, 0)!;
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public VALUE2(): antlr.TerminalNode {
        return this.getToken(GslParser.VALUE2, 0)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_rem2effect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRem2effect) {
             listener.enterRem2effect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRem2effect) {
             listener.exitRem2effect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRem2effect) {
            return visitor.visitRem2effect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RemEffectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REMEFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.REMEFFECT, 0)!;
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_remEffect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRemEffect) {
             listener.enterRemEffect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRemEffect) {
             listener.exitRemEffect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRemEffect) {
            return visitor.visitRemEffect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RemMenuItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REMMENUITEM(): antlr.TerminalNode {
        return this.getToken(GslParser.REMMENUITEM, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_remMenuItem;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRemMenuItem) {
             listener.enterRemMenuItem(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRemMenuItem) {
             listener.exitRemMenuItem(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRemMenuItem) {
            return visitor.visitRemMenuItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RemNEffectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REMNEFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.REMNEFFECT, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_remNEffect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRemNEffect) {
             listener.enterRemNEffect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRemNEffect) {
             listener.exitRemNEffect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRemNEffect) {
            return visitor.visitRemNEffect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RemoveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REMOVE(): antlr.TerminalNode {
        return this.getToken(GslParser.REMOVE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.TABLE, 0);
    }
    public SEG(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SEG, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_remove;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRemove) {
             listener.enterRemove(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRemove) {
             listener.exitRemove(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRemove) {
            return visitor.visitRemove(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RemoveVarFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REMOVEVARFIELD(): antlr.TerminalNode {
        return this.getToken(GslParser.REMOVEVARFIELD, 0)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public fieldName(): FieldNameContext | null {
        return this.getRuleContext(0, FieldNameContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_removeVarField;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRemoveVarField) {
             listener.enterRemoveVarField(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRemoveVarField) {
             listener.exitRemoveVarField(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRemoveVarField) {
            return visitor.visitRemoveVarField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RemoveVarGroupContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REMOVEVARGROUP(): antlr.TerminalNode {
        return this.getToken(GslParser.REMOVEVARGROUP, 0)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public OBJECT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.OBJECT_NODE, 0);
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public EVENT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.EVENT_NODE, 0);
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_removeVarGroup;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRemoveVarGroup) {
             listener.enterRemoveVarGroup(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRemoveVarGroup) {
             listener.exitRemoveVarGroup(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRemoveVarGroup) {
            return visitor.visitRemoveVarGroup(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ResistContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RESIST(): antlr.TerminalNode {
        return this.getToken(GslParser.RESIST, 0)!;
    }
    public VS(): antlr.TerminalNode {
        return this.getToken(GslParser.VS, 0)!;
    }
    public SPELL(): antlr.TerminalNode {
        return this.getToken(GslParser.SPELL, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode[];
    public CREATURE_NODE(i: number): antlr.TerminalNode | null;
    public CREATURE_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.CREATURE_NODE);
    	} else {
    		return this.getToken(GslParser.CREATURE_NODE, i);
    	}
    }
    public PLAYER_NODE(): antlr.TerminalNode[];
    public PLAYER_NODE(i: number): antlr.TerminalNode | null;
    public PLAYER_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.PLAYER_NODE);
    	} else {
    		return this.getToken(GslParser.PLAYER_NODE, i);
    	}
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_resist;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterResist) {
             listener.enterResist(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitResist) {
             listener.exitResist(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitResist) {
            return visitor.visitResist(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ResizeTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RESIZETABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.RESIZETABLE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public X(): antlr.TerminalNode {
        return this.getToken(GslParser.X, 0)!;
    }
    public Y(): antlr.TerminalNode {
        return this.getToken(GslParser.Y, 0)!;
    }
    public Z(): antlr.TerminalNode {
        return this.getToken(GslParser.Z, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_resizeTable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterResizeTable) {
             listener.enterResizeTable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitResizeTable) {
             listener.exitResizeTable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitResizeTable) {
            return visitor.visitResizeTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RestoreFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RESTOREFIELDS(): antlr.TerminalNode {
        return this.getToken(GslParser.RESTOREFIELDS, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public OF(): antlr.TerminalNode {
        return this.getToken(GslParser.OF, 0)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_restoreFields;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRestoreFields) {
             listener.enterRestoreFields(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRestoreFields) {
             listener.exitRestoreFields(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRestoreFields) {
            return visitor.visitRestoreFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ResumeEffectsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RESUMEEFFECTS(): antlr.TerminalNode {
        return this.getToken(GslParser.RESUMEEFFECTS, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_resumeEffects;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterResumeEffects) {
             listener.enterResumeEffects(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitResumeEffects) {
             listener.exitResumeEffects(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitResumeEffects) {
            return visitor.visitResumeEffects(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RmCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RMCALL(): antlr.TerminalNode {
        return this.getToken(GslParser.RMCALL, 0)!;
    }
    public stringExpression(): StringExpressionContext[];
    public stringExpression(i: number): StringExpressionContext | null;
    public stringExpression(i?: number): StringExpressionContext[] | StringExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringExpressionContext);
        }

        return this.getRuleContext(i, StringExpressionContext);
    }
    public CALL(): antlr.TerminalNode {
        return this.getToken(GslParser.CALL, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public CALLBACK(): antlr.TerminalNode {
        return this.getToken(GslParser.CALLBACK, 0)!;
    }
    public DONEMATCH(): antlr.TerminalNode {
        return this.getToken(GslParser.DONEMATCH, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_rmCall;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRmCall) {
             listener.enterRmCall(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRmCall) {
             listener.exitRmCall(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRmCall) {
            return visitor.visitRmCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RndDirContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RNDDIR(): antlr.TerminalNode {
        return this.getToken(GslParser.RNDDIR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_rndDir;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRndDir) {
             listener.enterRndDir(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRndDir) {
             listener.exitRndDir(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRndDir) {
            return visitor.visitRndDir(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RndExitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RNDEXIT(): antlr.TerminalNode {
        return this.getToken(GslParser.RNDEXIT, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_rndExit;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRndExit) {
             listener.enterRndExit(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRndExit) {
             listener.exitRndExit(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRndExit) {
            return visitor.visitRndExit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RndPlyrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RNDPLYR(): antlr.TerminalNode {
        return this.getToken(GslParser.RNDPLYR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_rndPlyr;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRndPlyr) {
             listener.enterRndPlyr(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRndPlyr) {
             listener.exitRndPlyr(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRndPlyr) {
            return visitor.visitRndPlyr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RollInContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ROLLIN(): antlr.TerminalNode {
        return this.getToken(GslParser.ROLLIN, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public CALLBACK(): antlr.TerminalNode {
        return this.getToken(GslParser.CALLBACK, 0)!;
    }
    public REPORT_TO(): antlr.TerminalNode {
        return this.getToken(GslParser.REPORT_TO, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public SCRIPT(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SCRIPT, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.TABLE, 0);
    }
    public SEG(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SEG, 0);
    }
    public VERB(): antlr.TerminalNode | null {
        return this.getToken(GslParser.VERB, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_rollIn;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRollIn) {
             listener.enterRollIn(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRollIn) {
             listener.exitRollIn(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRollIn) {
            return visitor.visitRollIn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RoomEndContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ROOMEND(): antlr.TerminalNode {
        return this.getToken(GslParser.ROOMEND, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_roomEnd;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRoomEnd) {
             listener.enterRoomEnd(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRoomEnd) {
             listener.exitRoomEnd(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRoomEnd) {
            return visitor.visitRoomEnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RoomStartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ROOMSTART(): antlr.TerminalNode {
        return this.getToken(GslParser.ROOMSTART, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_roomStart;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRoomStart) {
             listener.enterRoomStart(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRoomStart) {
             listener.exitRoomStart(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRoomStart) {
            return visitor.visitRoomStart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RootExistOfContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ROOTEXISTOF(): antlr.TerminalNode {
        return this.getToken(GslParser.ROOTEXISTOF, 0)!;
    }
    public node(): NodeContext[];
    public node(i: number): NodeContext | null;
    public node(i?: number): NodeContext[] | NodeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NodeContext);
        }

        return this.getRuleContext(i, NodeContext);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_rootExistOf;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRootExistOf) {
             listener.enterRootExistOf(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRootExistOf) {
             listener.exitRootExistOf(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRootExistOf) {
            return visitor.visitRootExistOf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RoundtimeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ROUNDTIME(): antlr.TerminalNode {
        return this.getToken(GslParser.ROUNDTIME, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_roundtime;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterRoundtime) {
             listener.enterRoundtime(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitRoundtime) {
             listener.exitRoundtime(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitRoundtime) {
            return visitor.visitRoundtime(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SaveFieldsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SAVEFIELDS(): antlr.TerminalNode {
        return this.getToken(GslParser.SAVEFIELDS, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_saveFields;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterSaveFields) {
             listener.enterSaveFields(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitSaveFields) {
             listener.exitSaveFields(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitSaveFields) {
            return visitor.visitSaveFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScanContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SCAN(): antlr.TerminalNode {
        return this.getToken(GslParser.SCAN, 0)!;
    }
    public stringExpression(): StringExpressionContext[];
    public stringExpression(i: number): StringExpressionContext | null;
    public stringExpression(i?: number): StringExpressionContext[] | StringExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringExpressionContext);
        }

        return this.getRuleContext(i, StringExpressionContext);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(GslParser.MATCH, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_scan;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterScan) {
             listener.enterScan(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitScan) {
             listener.exitScan(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitScan) {
            return visitor.visitScan(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScanEffectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SCANEFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.SCANEFFECT, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public VALUE2(): antlr.TerminalNode {
        return this.getToken(GslParser.VALUE2, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_scanEffect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterScanEffect) {
             listener.enterScanEffect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitScanEffect) {
             listener.exitScanEffect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitScanEffect) {
            return visitor.visitScanEffect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(GslParser.SET, 0)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public numberVariable(): NumberVariableContext | null {
        return this.getRuleContext(0, NumberVariableContext);
    }
    public stringVariable(): StringVariableContext | null {
        return this.getRuleContext(0, StringVariableContext);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public PLAYER_NODE(): antlr.TerminalNode[];
    public PLAYER_NODE(i: number): antlr.TerminalNode | null;
    public PLAYER_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.PLAYER_NODE);
    	} else {
    		return this.getToken(GslParser.PLAYER_NODE, i);
    	}
    }
    public CREATURE_NODE(): antlr.TerminalNode[];
    public CREATURE_NODE(i: number): antlr.TerminalNode | null;
    public CREATURE_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.CREATURE_NODE);
    	} else {
    		return this.getToken(GslParser.CREATURE_NODE, i);
    	}
    }
    public ROOM_NODE(): antlr.TerminalNode[];
    public ROOM_NODE(i: number): antlr.TerminalNode | null;
    public ROOM_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.ROOM_NODE);
    	} else {
    		return this.getToken(GslParser.ROOM_NODE, i);
    	}
    }
    public OBJECT_NODE(): antlr.TerminalNode[];
    public OBJECT_NODE(i: number): antlr.TerminalNode | null;
    public OBJECT_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.OBJECT_NODE);
    	} else {
    		return this.getToken(GslParser.OBJECT_NODE, i);
    	}
    }
    public EVENT_NODE(): antlr.TerminalNode[];
    public EVENT_NODE(i: number): antlr.TerminalNode | null;
    public EVENT_NODE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.EVENT_NODE);
    	} else {
    		return this.getToken(GslParser.EVENT_NODE, i);
    	}
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_set;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterSet) {
             listener.enterSet(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitSet) {
             listener.exitSet(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitSet) {
            return visitor.visitSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SETNAME(): antlr.TerminalNode {
        return this.getToken(GslParser.SETNAME, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_setName;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterSetName) {
             listener.enterSetName(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitSetName) {
             listener.exitSetName(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitSetName) {
            return visitor.visitSetName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SETTABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.SETTABLE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public AT(): antlr.TerminalNode {
        return this.getToken(GslParser.AT, 0)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_setTable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterSetTable) {
             listener.enterSetTable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitSetTable) {
             listener.exitSetTable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitSetTable) {
            return visitor.visitSetTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetTextContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SETTEXT(): antlr.TerminalNode {
        return this.getToken(GslParser.SETTEXT, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_setText;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterSetText) {
             listener.enterSetText(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitSetText) {
             listener.exitSetText(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitSetText) {
            return visitor.visitSetText(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SparseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SPARSE(): antlr.TerminalNode {
        return this.getToken(GslParser.SPARSE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_sparse;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterSparse) {
             listener.enterSparse(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitSparse) {
             listener.exitSparse(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitSparse) {
            return visitor.visitSparse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StopCommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STOP(): antlr.TerminalNode {
        return this.getToken(GslParser.STOP, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_stopCommand;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterStopCommand) {
             listener.enterStopCommand(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitStopCommand) {
             listener.exitStopCommand(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitStopCommand) {
            return visitor.visitStopCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StoreCharDataContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STORECHARDATA(): antlr.TerminalNode {
        return this.getToken(GslParser.STORECHARDATA, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public OBJECT_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.OBJECT_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public MMGR(): antlr.TerminalNode | null {
        return this.getToken(GslParser.MMGR, 0);
    }
    public CMGR(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CMGR, 0);
    }
    public WORD(): antlr.TerminalNode | null {
        return this.getToken(GslParser.WORD, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_storeCharData;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterStoreCharData) {
             listener.enterStoreCharData(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitStoreCharData) {
             listener.exitStoreCharData(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitStoreCharData) {
            return visitor.visitStoreCharData(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StovContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STOV(): antlr.TerminalNode {
        return this.getToken(GslParser.STOV, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_stov;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterStov) {
             listener.enterStov(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitStov) {
             listener.exitStov(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitStov) {
            return visitor.visitStov(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SubstringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SUBSTRING(): antlr.TerminalNode {
        return this.getToken(GslParser.SUBSTRING, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(GslParser.FROM, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public stringVariable(): StringVariableContext {
        return this.getRuleContext(0, StringVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_substring;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterSubstring) {
             listener.enterSubstring(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitSubstring) {
             listener.exitSubstring(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitSubstring) {
            return visitor.visitSubstring(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableInfoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TABLEINFO(): antlr.TerminalNode {
        return this.getToken(GslParser.TABLEINFO, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_tableInfo;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterTableInfo) {
             listener.enterTableInfo(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitTableInfo) {
             listener.exitTableInfo(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitTableInfo) {
            return visitor.visitTableInfo(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TellWebContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TELLWEB(): antlr.TerminalNode {
        return this.getToken(GslParser.TELLWEB, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public PRIORITY(): antlr.TerminalNode {
        return this.getToken(GslParser.PRIORITY, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_tellWeb;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterTellWeb) {
             listener.enterTellWeb(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitTellWeb) {
             listener.exitTellWeb(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitTellWeb) {
            return visitor.visitTellWeb(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Test2effectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TEST2EFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.TEST2EFFECT, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public VALUE2(): antlr.TerminalNode {
        return this.getToken(GslParser.VALUE2, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_test2effect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterTest2effect) {
             listener.enterTest2effect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitTest2effect) {
             listener.exitTest2effect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitTest2effect) {
            return visitor.visitTest2effect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TestEffectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TESTEFFECT(): antlr.TerminalNode {
        return this.getToken(GslParser.TESTEFFECT, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public CODE(): antlr.TerminalNode {
        return this.getToken(GslParser.CODE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_testEffect;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterTestEffect) {
             listener.enterTestEffect(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitTestEffect) {
             listener.exitTestEffect(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitTestEffect) {
            return visitor.visitTestEffect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Test_assertContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TEST_ASSERT(): antlr.TerminalNode {
        return this.getToken(GslParser.TEST_ASSERT, 0)!;
    }
    public OR_YELL(): antlr.TerminalNode {
        return this.getToken(GslParser.OR_YELL, 0)!;
    }
    public stringExpression(): StringExpressionContext[];
    public stringExpression(i: number): StringExpressionContext | null;
    public stringExpression(i?: number): StringExpressionContext[] | StringExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringExpressionContext);
        }

        return this.getRuleContext(i, StringExpressionContext);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(GslParser.TO, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_test_assert;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterTest_assert) {
             listener.enterTest_assert(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitTest_assert) {
             listener.exitTest_assert(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitTest_assert) {
            return visitor.visitTest_assert(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TparseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TPARSE(): antlr.TerminalNode {
        return this.getToken(GslParser.TPARSE, 0)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_tparse;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterTparse) {
             listener.enterTparse(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitTparse) {
             listener.exitTparse(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitTparse) {
            return visitor.visitTparse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnderOffContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNDEROFF(): antlr.TerminalNode {
        return this.getToken(GslParser.UNDEROFF, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_underOff;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterUnderOff) {
             listener.enterUnderOff(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitUnderOff) {
             listener.exitUnderOff(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitUnderOff) {
            return visitor.visitUnderOff(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnderOnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNDERON(): antlr.TerminalNode {
        return this.getToken(GslParser.UNDERON, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_underOn;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterUnderOn) {
             listener.enterUnderOn(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitUnderOn) {
             listener.exitUnderOn(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitUnderOn) {
            return visitor.visitUnderOn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnloadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNLOAD(): antlr.TerminalNode {
        return this.getToken(GslParser.UNLOAD, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_unload;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterUnload) {
             listener.enterUnload(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitUnload) {
             listener.exitUnload(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitUnload) {
            return visitor.visitUnload(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UpdateSrvrStuffContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UPDATESRVRSTUFF(): antlr.TerminalNode {
        return this.getToken(GslParser.UPDATESRVRSTUFF, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_updateSrvrStuff;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterUpdateSrvrStuff) {
             listener.enterUpdateSrvrStuff(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitUpdateSrvrStuff) {
             listener.exitUpdateSrvrStuff(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitUpdateSrvrStuff) {
            return visitor.visitUpdateSrvrStuff(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UpdateTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UPDATETABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.UPDATETABLE, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_updateTable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterUpdateTable) {
             listener.enterUpdateTable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitUpdateTable) {
             listener.exitUpdateTable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitUpdateTable) {
            return visitor.visitUpdateTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UppercaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UPPERCASE(): antlr.TerminalNode {
        return this.getToken(GslParser.UPPERCASE, 0)!;
    }
    public stringVariable(): StringVariableContext {
        return this.getRuleContext(0, StringVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_uppercase;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterUppercase) {
             listener.enterUppercase(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitUppercase) {
             listener.exitUppercase(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitUppercase) {
            return visitor.visitUppercase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VtosContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VTOS(): antlr.TerminalNode {
        return this.getToken(GslParser.VTOS, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public stringVariable(): StringVariableContext {
        return this.getRuleContext(0, StringVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_vtos;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterVtos) {
             listener.enterVtos(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitVtos) {
             listener.exitVtos(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitVtos) {
            return visitor.visitVtos(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WatchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WATCH(): antlr.TerminalNode {
        return this.getToken(GslParser.WATCH, 0)!;
    }
    public ROOM(): antlr.TerminalNode {
        return this.getToken(GslParser.ROOM, 0)!;
    }
    public valueExpression(): ValueExpressionContext {
        return this.getRuleContext(0, ValueExpressionContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_watch;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterWatch) {
             listener.enterWatch(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitWatch) {
             listener.exitWatch(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitWatch) {
            return visitor.visitWatch(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(GslParser.WHERE, 0)!;
    }
    public node(): NodeContext[];
    public node(i: number): NodeContext | null;
    public node(i?: number): NodeContext[] | NodeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NodeContext);
        }

        return this.getRuleContext(i, NodeContext);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_where;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterWhere) {
             listener.enterWhere(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitWhere) {
             listener.exitWhere(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitWhere) {
            return visitor.visitWhere(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereAtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHEREAT(): antlr.TerminalNode {
        return this.getToken(GslParser.WHEREAT, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public numberVariable(): NumberVariableContext {
        return this.getRuleContext(0, NumberVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_whereAt;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterWhereAt) {
             listener.enterWhereAt(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitWhereAt) {
             listener.exitWhereAt(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitWhereAt) {
            return visitor.visitWhereAt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHEREITEM(): antlr.TerminalNode {
        return this.getToken(GslParser.WHEREITEM, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(GslParser.FOR, 0)!;
    }
    public stringVariable(): StringVariableContext {
        return this.getRuleContext(0, StringVariableContext)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_whereItem;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterWhereItem) {
             listener.enterWhereItem(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitWhereItem) {
             listener.exitWhereItem(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitWhereItem) {
            return visitor.visitWhereItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WriteCharContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WRITECHAR(): antlr.TerminalNode {
        return this.getToken(GslParser.WRITECHAR, 0)!;
    }
    public PLAYER_NODE(): antlr.TerminalNode {
        return this.getToken(GslParser.PLAYER_NODE, 0)!;
    }
    public eol(): EolContext {
        return this.getRuleContext(0, EolContext)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_writeChar;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterWriteChar) {
             listener.enterWriteChar(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitWriteChar) {
             listener.exitWriteChar(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitWriteChar) {
            return visitor.visitWriteChar(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NUMBER, 0);
    }
    public CARET_OPERATOR(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CARET_OPERATOR, 0);
    }
    public negativeNumber(): NegativeNumberContext | null {
        return this.getRuleContext(0, NegativeNumberContext);
    }
    public numberVariable(): NumberVariableContext | null {
        return this.getRuleContext(0, NumberVariableContext);
    }
    public identityExpression(): IdentityExpressionContext | null {
        return this.getRuleContext(0, IdentityExpressionContext);
    }
    public valueOperation(): ValueOperationContext | null {
        return this.getRuleContext(0, ValueOperationContext);
    }
    public stringOperation(): StringOperationContext | null {
        return this.getRuleContext(0, StringOperationContext);
    }
    public LPARAN(): antlr.TerminalNode | null {
        return this.getToken(GslParser.LPARAN, 0);
    }
    public valueExpression(): ValueExpressionContext | null {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    public RPARAN(): antlr.TerminalNode | null {
        return this.getToken(GslParser.RPARAN, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_valueExpression;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterValueExpression) {
             listener.enterValueExpression(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitValueExpression) {
             listener.exitValueExpression(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitValueExpression) {
            return visitor.visitValueExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NegativeNumberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(GslParser.MINUS, 0)!;
    }
    public NUMBER(): antlr.TerminalNode {
        return this.getToken(GslParser.NUMBER, 0)!;
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_negativeNumber;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterNegativeNumber) {
             listener.enterNegativeNumber(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitNegativeNumber) {
             listener.exitNegativeNumber(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitNegativeNumber) {
            return visitor.visitNegativeNumber(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueOperationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPARAN(): antlr.TerminalNode {
        return this.getToken(GslParser.LPARAN, 0)!;
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public RPARAN(): antlr.TerminalNode {
        return this.getToken(GslParser.RPARAN, 0)!;
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.PLUS);
    	} else {
    		return this.getToken(GslParser.PLUS, i);
    	}
    }
    public MINUS(): antlr.TerminalNode[];
    public MINUS(i: number): antlr.TerminalNode | null;
    public MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.MINUS);
    	} else {
    		return this.getToken(GslParser.MINUS, i);
    	}
    }
    public DIVIDE(): antlr.TerminalNode[];
    public DIVIDE(i: number): antlr.TerminalNode | null;
    public DIVIDE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.DIVIDE);
    	} else {
    		return this.getToken(GslParser.DIVIDE, i);
    	}
    }
    public MULTIPLY(): antlr.TerminalNode[];
    public MULTIPLY(i: number): antlr.TerminalNode | null;
    public MULTIPLY(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.MULTIPLY);
    	} else {
    		return this.getToken(GslParser.MULTIPLY, i);
    	}
    }
    public PERCENT_SYMBOL(): antlr.TerminalNode[];
    public PERCENT_SYMBOL(i: number): antlr.TerminalNode | null;
    public PERCENT_SYMBOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.PERCENT_SYMBOL);
    	} else {
    		return this.getToken(GslParser.PERCENT_SYMBOL, i);
    	}
    }
    public AND(): antlr.TerminalNode[];
    public AND(i: number): antlr.TerminalNode | null;
    public AND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.AND);
    	} else {
    		return this.getToken(GslParser.AND, i);
    	}
    }
    public OR(): antlr.TerminalNode[];
    public OR(i: number): antlr.TerminalNode | null;
    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.OR);
    	} else {
    		return this.getToken(GslParser.OR, i);
    	}
    }
    public COMPARATOR(): antlr.TerminalNode[];
    public COMPARATOR(i: number): antlr.TerminalNode | null;
    public COMPARATOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.COMPARATOR);
    	} else {
    		return this.getToken(GslParser.COMPARATOR, i);
    	}
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_valueOperation;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterValueOperation) {
             listener.enterValueOperation(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitValueOperation) {
             listener.exitValueOperation(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitValueOperation) {
            return visitor.visitValueOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringOperationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPARAN(): antlr.TerminalNode {
        return this.getToken(GslParser.LPARAN, 0)!;
    }
    public stringExpression(): StringExpressionContext[];
    public stringExpression(i: number): StringExpressionContext | null;
    public stringExpression(i?: number): StringExpressionContext[] | StringExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringExpressionContext);
        }

        return this.getRuleContext(i, StringExpressionContext);
    }
    public RPARAN(): antlr.TerminalNode {
        return this.getToken(GslParser.RPARAN, 0)!;
    }
    public AND(): antlr.TerminalNode[];
    public AND(i: number): antlr.TerminalNode | null;
    public AND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.AND);
    	} else {
    		return this.getToken(GslParser.AND, i);
    	}
    }
    public OR(): antlr.TerminalNode[];
    public OR(i: number): antlr.TerminalNode | null;
    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.OR);
    	} else {
    		return this.getToken(GslParser.OR, i);
    	}
    }
    public COMPARATOR(): antlr.TerminalNode[];
    public COMPARATOR(i: number): antlr.TerminalNode | null;
    public COMPARATOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.COMPARATOR);
    	} else {
    		return this.getToken(GslParser.COMPARATOR, i);
    	}
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_stringOperation;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterStringOperation) {
             listener.enterStringOperation(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitStringOperation) {
             listener.exitStringOperation(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitStringOperation) {
            return visitor.visitStringOperation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(GslParser.STRING, 0);
    }
    public stringVariable(): StringVariableContext | null {
        return this.getRuleContext(0, StringVariableContext);
    }
    public stringConcatenation(): StringConcatenationContext | null {
        return this.getRuleContext(0, StringConcatenationContext);
    }
    public LPARAN(): antlr.TerminalNode | null {
        return this.getToken(GslParser.LPARAN, 0);
    }
    public stringExpression(): StringExpressionContext | null {
        return this.getRuleContext(0, StringExpressionContext);
    }
    public RPARAN(): antlr.TerminalNode | null {
        return this.getToken(GslParser.RPARAN, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_stringExpression;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterStringExpression) {
             listener.enterStringExpression(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitStringExpression) {
             listener.exitStringExpression(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitStringExpression) {
            return visitor.visitStringExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringConcatenationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPARAN(): antlr.TerminalNode {
        return this.getToken(GslParser.LPARAN, 0)!;
    }
    public stringExpression(): StringExpressionContext[];
    public stringExpression(i: number): StringExpressionContext | null;
    public stringExpression(i?: number): StringExpressionContext[] | StringExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StringExpressionContext);
        }

        return this.getRuleContext(i, StringExpressionContext);
    }
    public RPARAN(): antlr.TerminalNode {
        return this.getToken(GslParser.RPARAN, 0)!;
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.PLUS);
    	} else {
    		return this.getToken(GslParser.PLUS, i);
    	}
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_stringConcatenation;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterStringConcatenation) {
             listener.enterStringConcatenation(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitStringConcatenation) {
             listener.exitStringConcatenation(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitStringConcatenation) {
            return visitor.visitStringConcatenation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentityExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPARAN(): antlr.TerminalNode {
        return this.getToken(GslParser.LPARAN, 0)!;
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public stringExpression(): StringExpressionContext {
        return this.getRuleContext(0, StringExpressionContext)!;
    }
    public RPARAN(): antlr.TerminalNode {
        return this.getToken(GslParser.RPARAN, 0)!;
    }
    public ISOFTYPE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ISOFTYPE, 0);
    }
    public ISNOTOFTYPE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ISNOTOFTYPE, 0);
    }
    public ISEXACTLY(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ISEXACTLY, 0);
    }
    public ISNOTEXACTLY(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ISNOTEXACTLY, 0);
    }
    public HASFIELD(): antlr.TerminalNode | null {
        return this.getToken(GslParser.HASFIELD, 0);
    }
    public LACKSFIELD(): antlr.TerminalNode | null {
        return this.getToken(GslParser.LACKSFIELD, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_identityExpression;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterIdentityExpression) {
             listener.enterIdentityExpression(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitIdentityExpression) {
             listener.exitIdentityExpression(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitIdentityExpression) {
            return visitor.visitIdentityExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NodeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public OBJECT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.OBJECT_NODE, 0);
    }
    public EVENT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.EVENT_NODE, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_node;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterNode) {
             listener.enterNode(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitNode) {
             listener.exitNode(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitNode) {
            return visitor.visitNode(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumberVariableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public ROOM_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ROOM_NODE, 0);
    }
    public CREATURE_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.CREATURE_NODE, 0);
    }
    public OBJECT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.OBJECT_NODE, 0);
    }
    public EVENT_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.EVENT_NODE, 0);
    }
    public SYS_BREAK(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_BREAK, 0);
    }
    public SYS_CALLBACK(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_CALLBACK, 0);
    }
    public SYS_CALLEDBY(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_CALLEDBY, 0);
    }
    public SYS_DESCMODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_DESCMODE, 0);
    }
    public SYS_ERROR(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_ERROR, 0);
    }
    public SYS_LOADINGFROMSAVE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_LOADINGFROMSAVE, 0);
    }
    public SYS_MAXLOOPS(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_MAXLOOPS, 0);
    }
    public SYS_MAXROOMCREATES(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_MAXROOMCREATES, 0);
    }
    public SYS_MAXTEXTCHANGES(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_MAXTEXTCHANGES, 0);
    }
    public SYS_MAXUOBJS(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_MAXUOBJS, 0);
    }
    public SYS_STRTABLE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_STRTABLE, 0);
    }
    public SYS_INTTABLE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_INTTABLE, 0);
    }
    public SYS_STIME(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_STIME, 0);
    }
    public SYS_THISSCRIPT(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_THISSCRIPT, 0);
    }
    public SYS_TIME(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_TIME, 0);
    }
    public SYS_USERS(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_USERS, 0);
    }
    public nodeFieldRef(): NodeFieldRefContext | null {
        return this.getRuleContext(0, NodeFieldRefContext);
    }
    public tableReference(): TableReferenceContext | null {
        return this.getRuleContext(0, TableReferenceContext);
    }
    public tableAddress(): TableAddressContext | null {
        return this.getRuleContext(0, TableAddressContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_numberVariable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterNumberVariable) {
             listener.enterNumberVariable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitNumberVariable) {
             listener.exitNumberVariable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitNumberVariable) {
            return visitor.visitNumberVariable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringVariableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public S_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.S_REGISTER, 0);
    }
    public T_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.T_REGISTER, 0);
    }
    public PLAYER_NODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.PLAYER_NODE, 0);
    }
    public SYS_BROWSER_BUFFER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_BROWSER_BUFFER, 0);
    }
    public SYS_DONEMATCH(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_DONEMATCH, 0);
    }
    public SYS_GAMECODE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_GAMECODE, 0);
    }
    public SYS_GAMENAME(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_GAMENAME, 0);
    }
    public SYS_LASTMATCH(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_LASTMATCH, 0);
    }
    public SYS_MATCH(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_MATCH, 0);
    }
    public SYS_MENUITEMLABEL(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_MENUITEMLABEL, 0);
    }
    public SYS_REPLYADDRESS(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_REPLYADDRESS, 0);
    }
    public SYS_PARSE_ERROR_1(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_PARSE_ERROR_1, 0);
    }
    public SYS_PARSE_ERROR_2(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_PARSE_ERROR_2, 0);
    }
    public SYS_PARSE_ERROR_3(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_PARSE_ERROR_3, 0);
    }
    public SYS_PARSE_ERROR_4(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_PARSE_ERROR_4, 0);
    }
    public nodeFieldRef(): NodeFieldRefContext | null {
        return this.getRuleContext(0, NodeFieldRefContext);
    }
    public tableAddress(): TableAddressContext | null {
        return this.getRuleContext(0, TableAddressContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_stringVariable;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterStringVariable) {
             listener.enterStringVariable(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitStringVariable) {
             listener.exitStringVariable(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitStringVariable) {
            return visitor.visitStringVariable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableReferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(GslParser.TABLE, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(GslParser.COLON, 0)!;
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NUMBER, 0);
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public SYS_STRTABLE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_STRTABLE, 0);
    }
    public SYS_INTTABLE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_INTTABLE, 0);
    }
    public nodeFieldRef(): NodeFieldRefContext | null {
        return this.getRuleContext(0, NodeFieldRefContext);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_tableReference;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterTableReference) {
             listener.enterTableReference(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitTableReference) {
             listener.exitTableReference(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitTableReference) {
            return visitor.visitTableReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableAddressContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACK(): antlr.TerminalNode | null {
        return this.getToken(GslParser.LBRACK, 0);
    }
    public valueExpression(): ValueExpressionContext[];
    public valueExpression(i: number): ValueExpressionContext | null;
    public valueExpression(i?: number): ValueExpressionContext[] | ValueExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }

        return this.getRuleContext(i, ValueExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.COMMA);
    	} else {
    		return this.getToken(GslParser.COMMA, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(GslParser.RBRACK, 0);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NUMBER, 0);
    }
    public V_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.V_REGISTER, 0);
    }
    public A_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.A_REGISTER, 0);
    }
    public B_REGISTER(): antlr.TerminalNode | null {
        return this.getToken(GslParser.B_REGISTER, 0);
    }
    public SYS_STRTABLE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_STRTABLE, 0);
    }
    public SYS_INTTABLE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SYS_INTTABLE, 0);
    }
    public nodeFieldRef(): NodeFieldRefContext | null {
        return this.getRuleContext(0, NodeFieldRefContext);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.TABLE, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(GslParser.COLON, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_tableAddress;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterTableAddress) {
             listener.enterTableAddress(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitTableAddress) {
             listener.exitTableAddress(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitTableAddress) {
            return visitor.visitTableAddress(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WORD(): antlr.TerminalNode[];
    public WORD(i: number): antlr.TerminalNode | null;
    public WORD(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.WORD);
    	} else {
    		return this.getToken(GslParser.WORD, i);
    	}
    }
    public NUMBER(): antlr.TerminalNode[];
    public NUMBER(i: number): antlr.TerminalNode | null;
    public NUMBER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.NUMBER);
    	} else {
    		return this.getToken(GslParser.NUMBER, i);
    	}
    }
    public UNDERSCORE(): antlr.TerminalNode[];
    public UNDERSCORE(i: number): antlr.TerminalNode | null;
    public UNDERSCORE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.UNDERSCORE);
    	} else {
    		return this.getToken(GslParser.UNDERSCORE, i);
    	}
    }
    public SPELL(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SPELL, 0);
    }
    public HITS(): antlr.TerminalNode | null {
        return this.getToken(GslParser.HITS, 0);
    }
    public SIZE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.SIZE, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(GslParser.TYPE, 0);
    }
    public TYPE_D(): antlr.TerminalNode | null {
        return this.getToken(GslParser.TYPE_D, 0);
    }
    public ENCUM(): antlr.TerminalNode | null {
        return this.getToken(GslParser.ENCUM, 0);
    }
    public NONEXIST(): antlr.TerminalNode | null {
        return this.getToken(GslParser.NONEXIST, 0);
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_fieldName;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterFieldName) {
             listener.enterFieldName(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitFieldName) {
             listener.exitFieldName(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitFieldName) {
            return visitor.visitFieldName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NodeFieldRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public node(): NodeContext {
        return this.getRuleContext(0, NodeContext)!;
    }
    public COLON(): antlr.TerminalNode[];
    public COLON(i: number): antlr.TerminalNode | null;
    public COLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.COLON);
    	} else {
    		return this.getToken(GslParser.COLON, i);
    	}
    }
    public LPARAN(): antlr.TerminalNode[];
    public LPARAN(i: number): antlr.TerminalNode | null;
    public LPARAN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.LPARAN);
    	} else {
    		return this.getToken(GslParser.LPARAN, i);
    	}
    }
    public RPARAN(): antlr.TerminalNode[];
    public RPARAN(i: number): antlr.TerminalNode | null;
    public RPARAN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.RPARAN);
    	} else {
    		return this.getToken(GslParser.RPARAN, i);
    	}
    }
    public AND(): antlr.TerminalNode[];
    public AND(i: number): antlr.TerminalNode | null;
    public AND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.AND);
    	} else {
    		return this.getToken(GslParser.AND, i);
    	}
    }
    public OR(): antlr.TerminalNode[];
    public OR(i: number): antlr.TerminalNode | null;
    public OR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.OR);
    	} else {
    		return this.getToken(GslParser.OR, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.COMMA);
    	} else {
    		return this.getToken(GslParser.COMMA, i);
    	}
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.LBRACK);
    	} else {
    		return this.getToken(GslParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.RBRACK);
    	} else {
    		return this.getToken(GslParser.RBRACK, i);
    	}
    }
    public PLUS(): antlr.TerminalNode[];
    public PLUS(i: number): antlr.TerminalNode | null;
    public PLUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.PLUS);
    	} else {
    		return this.getToken(GslParser.PLUS, i);
    	}
    }
    public MINUS(): antlr.TerminalNode[];
    public MINUS(i: number): antlr.TerminalNode | null;
    public MINUS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.MINUS);
    	} else {
    		return this.getToken(GslParser.MINUS, i);
    	}
    }
    public DIVIDE(): antlr.TerminalNode[];
    public DIVIDE(i: number): antlr.TerminalNode | null;
    public DIVIDE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.DIVIDE);
    	} else {
    		return this.getToken(GslParser.DIVIDE, i);
    	}
    }
    public MULTIPLY(): antlr.TerminalNode[];
    public MULTIPLY(i: number): antlr.TerminalNode | null;
    public MULTIPLY(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.MULTIPLY);
    	} else {
    		return this.getToken(GslParser.MULTIPLY, i);
    	}
    }
    public PERCENT_SYMBOL(): antlr.TerminalNode[];
    public PERCENT_SYMBOL(i: number): antlr.TerminalNode | null;
    public PERCENT_SYMBOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.PERCENT_SYMBOL);
    	} else {
    		return this.getToken(GslParser.PERCENT_SYMBOL, i);
    	}
    }
    public GOTO(): antlr.TerminalNode[];
    public GOTO(i: number): antlr.TerminalNode | null;
    public GOTO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.GOTO);
    	} else {
    		return this.getToken(GslParser.GOTO, i);
    	}
    }
    public LABEL(): antlr.TerminalNode[];
    public LABEL(i: number): antlr.TerminalNode | null;
    public LABEL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.LABEL);
    	} else {
    		return this.getToken(GslParser.LABEL, i);
    	}
    }
    public COMPARATOR(): antlr.TerminalNode[];
    public COMPARATOR(i: number): antlr.TerminalNode | null;
    public COMPARATOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.COMPARATOR);
    	} else {
    		return this.getToken(GslParser.COMPARATOR, i);
    	}
    }
    public STRING(): antlr.TerminalNode[];
    public STRING(i: number): antlr.TerminalNode | null;
    public STRING(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.STRING);
    	} else {
    		return this.getToken(GslParser.STRING, i);
    	}
    }
    public CARET_OPERATOR(): antlr.TerminalNode[];
    public CARET_OPERATOR(i: number): antlr.TerminalNode | null;
    public CARET_OPERATOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.CARET_OPERATOR);
    	} else {
    		return this.getToken(GslParser.CARET_OPERATOR, i);
    	}
    }
    public NEWLINE(): antlr.TerminalNode[];
    public NEWLINE(i: number): antlr.TerminalNode | null;
    public NEWLINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(GslParser.NEWLINE);
    	} else {
    		return this.getToken(GslParser.NEWLINE, i);
    	}
    }
    public override get ruleIndex(): number {
        return GslParser.RULE_nodeFieldRef;
    }
    public override enterRule(listener: GslListener): void {
        if(listener.enterNodeFieldRef) {
             listener.enterNodeFieldRef(this);
        }
    }
    public override exitRule(listener: GslListener): void {
        if(listener.exitNodeFieldRef) {
             listener.exitNodeFieldRef(this);
        }
    }
    public override accept<Result>(visitor: GslVisitor<Result>): Result | null {
        if (visitor.visitNodeFieldRef) {
            return visitor.visitNodeFieldRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
