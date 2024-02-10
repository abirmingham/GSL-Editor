grammar Gsl;
options {
	caseInsensitive = true;
}

/*
 * Parser Rules
 */

script: (matchMarker | statement | NEWLINE)+ EOF;

eol: NEWLINE;

statement:
	NEWLINE
	| attack
	| addeffect
	| addGroup
	| assert
	| bitget
	| bitset
	| boldoff
	| boldon
	| call
	| callmatch
	| canDo
	| checkEffect
	| clear
	| clearMenu
	| clearTable
	| create
	| createTable
	| decodeAttack
	| encodeAttack
	| earlyPopStop
	| expand
	| fastpush
	| gather
	| gatherFirst
	| gatherPlayer
	| getPs
	| getTable
	| glue
	| goto
	| if
	| index
	| infoProfile
	| infoScript
	| infoTable
	| infoVarField
	| infoVerb
	| injure
	| isInjured
	| kill
	| killAllNp
	| label
	| load
	| logMsg
	| logStart
	| logSubmit
	| logTargetAccount
	| logTargetIndex
	| logTargetName
	| logTargetOther
	| logTargetUid
	| logText
	| logto
	| lookRoom
	| loopStatement
	| lowercase
	| matchSpell
	| move
	| msg
	| msgGm
	| msgp
	| msgr
	| msgrgm
	| msgrx2
	| msgrxp
	| nextEffect
	| nextNode
	| parse
	| push
	| random
	| rem2effect
	| remEffect
	| removeVarField
	| resizeTable
	| rmCall
	| rndPlyr
	| rootExistOf
	| roundtime
	| scan
	| scanEffect
	| set
	| setTable
	| sparse
	| stopCommand
	| stov
	| substring
	| tableInfo
	| test2effect
	| testEffect
	| tparse
	| unload
	| updateTable
	| vtos
	| whenStatement
	| where
	| whereAt
	| whereItem
	| watch
	| createItem
	| createRoom
	| createText
	| remove
	| remMenuItem
	| remNEffect
	| removeVarGroup
	| addExpr
	| addMenuItem
	| altWinOff
	| altWinOn
	| anim
	| border
	| bugReport
	| callPS
	| closeLocker
	| cmgr
	| gatherFirstRoom
	| gatherNext
	| gatherNextRoom
	| getWatch
	| getContributors
	| getIndexOf
	| getMax
	| getNameOf
	| getTextCommand // antlr4ng parser has a name conflict with getText()
	| critical
	| drop
	| hush
	| playerCount
	| resist
	| launchURL
	| compareItemObject
	| compareItemEvent
	| compareItemCreature
	| contribute
	| copyCreature
	| copyEvent
	| copyObject
	| deleteTable
	| deploy
	| dirAdd
	| dirSend
	| doCreate
	| doLook
	| end2Effect
	| endEffect
	| endNEffect
	| feMisc
	| feUpdate
	| fillTable
	| hash1
	| hash2
	| healP
	| heal
	| hurt
	| infoItem
	| inPhrase
	| isNameFree
	| itemSnapshot
	| launch
	| loadCharData
	| logToIndex
	| mmgr
	| msgfsys
	| msgsgm
	| msgsys
	| msgs
	| msgw
	| nameEnd
	| nameStart
	| openLocker
	| outPhrase
	| parseDecimal
	| pauseEffects
	| pid
	| prempt
	| restoreFields
	| resumeEffects
	| rndDir
	| rndExit
	| rollIn
	| roomEnd
	| roomStart
	| saveFields
	| setName
	| setText
	| storeCharData
	| tellWeb
	| test_assert
	| underOff
	| underOn
	| updateSrvrStuff
	| uppercase
	| writeChar;

// Control statements
if:
	(IF | IFNOT) (valueExpression | stringExpression) THEN eol statement* elseIf* else? DOT eol;

elseIf: (
		(ELSE_IF | ELSE_IFNOT) (
			valueExpression
			| stringExpression
		) THEN eol statement*
	);

else: (ELSE eol statement*);

whenStatement:
	WHEN (valueExpression | stringExpression) eol (
		whenCase
		| NEWLINE
	)* (whenCaseDefault | NEWLINE)* DOT eol;

whenCase:
	IS (valueExpression | stringExpression) eol statement* DOT eol;

whenCaseDefault: DEFAULT eol statement* DOT eol;

loopStatement:
	LOOP (valueExpression | stringExpression) eol statement+ DOT eol;

earlyPopStop: ((FASTPOP | POP) eol statement*)+ STOP eol;

// Command statements
addExpr: ADDEXPR valueExpression TO PLAYER_NODE eol;
addGroup: ADD_GROUP stringExpression TO node eol;
addMenuItem:
	ADDMENUITEM stringExpression TARGET stringExpression eol;
addeffect:
	ADDEFFECT CODE valueExpression VALUE1 valueExpression VALUE2 valueExpression FLAGS
		valueExpression WITH node IN valueExpression SCRIPT valueExpression eol;
altWinOff: ALTWINOFF PLAYER_NODE eol;
altWinOn: ALTWINON PLAYER_NODE eol;
anim: ANIM valueExpression FOR (ROOM_NODE | PLAYER_NODE) eol;
assert:
	ASSERT (valueExpression | stringExpression) OR_YELL stringExpression eol;
attack:
	ATTACK (CREATURE_NODE | PLAYER_NODE) VS (
		CREATURE_NODE
		| PLAYER_NODE
	) TYPE valueExpression;
bitget:
	BITGET valueExpression FROM valueExpression TO valueExpression FOR numberVariable eol;
bitset:
	BITSET valueExpression FROM valueExpression TO valueExpression FOR numberVariable eol;
boldoff: BOLDOFF (PLAYER_NODE | ROOM_NODE) eol;
boldon: BOLDON (PLAYER_NODE | ROOM_NODE) eol;
border:
	BORDER valueExpression FOR (ROOM_NODE | PLAYER_NODE) eol;
bugReport:
	BUGREPORT (MESSAGE | DEBUG) stringExpression stringExpression eol;
call: CALL valueExpression eol;
callPS: CALLPS PLAYER_NODE eol;
callmatch:
	CALLMATCH (MAY_MATCH | MUST_MATCH | CHECK) stringExpression IN valueExpression eol;
canDo:
	CANDO (CREATURE_NODE | PLAYER_NODE) ACTION valueExpression FOR numberVariable eol;
checkEffect: CHECKEFFECT node CODE valueExpression eol;
clear:
	CLEAR (nodeFieldRef | numberVariable | stringVariable) eol;
clearMenu: CLEARMENU eol;
clearTable: CLEARTABLE valueExpression eol;
closeLocker: CLOSELOCKER PLAYER_NODE USING OBJECT_NODE eol;
cmgr: CMGR PLAYER_NODE eol;
compareItemCreature:
	COMPAREITEM CREATURE_NODE TO CREATURE_NODE eol;
compareItemEvent: COMPAREITEM EVENT_NODE TO EVENT_NODE eol;
compareItemObject: COMPAREITEM OBJECT_NODE TO OBJECT_NODE eol;
contribute:
	CONTRIBUTE PLAYER_NODE TOWARDS CREATURE_NODE BY valueExpression eol;
copyCreature: COPY CREATURE_NODE FOR CREATURE_NODE eol;
copyEvent: COPY EVENT_NODE FOR EVENT_NODE eol;
copyObject: COPY OBJECT_NODE FOR OBJECT_NODE eol;
create:
	CREATE valueExpression MODE valueExpression FOR node eol;
createItem: CREATEITEM valueExpression FOR OBJECT_NODE eol;
createRoom: CREATEROOM valueExpression FOR ROOM_NODE eol;
createTable:
	CREATETABLE TYPE valueExpression SIZE valueExpression valueExpression valueExpression FOR (
		V_REGISTER
		| A_REGISTER
		| B_REGISTER
		| nodeFieldRef
	) eol;
createText: CREATETEXT stringExpression FOR numberVariable eol;
critical:
	CRITICAL (CREATURE_NODE | PLAYER_NODE) TABLE stringExpression TYPE valueExpression eol;
decodeAttack:
	DECODEATTACK CREATURE_NODE FIELD fieldName FOR numberVariable eol;
deleteTable: DELETETABLE valueExpression eol;
deploy:
	DEPLOY (SCRIPT | TABLE | SEG | VERB) (
		stringExpression
		| valueExpression
	) CALLBACK valueExpression REPORT_TO valueExpression eol;
dirAdd: DIRADD valueExpression eol;
dirSend: DIRSEND PLAYER_NODE eol;
doCreate:
	DOCREATE stringExpression FOR (
		EVENT_NODE
		| CREATURE_NODE
		| OBJECT_NODE
	) eol;
doLook: DOLOOK eol;
drop: DROP PLAYER_NODE eol;
encodeAttack:
	ENCODEATTACK CREATURE_NODE FIELD fieldName TO valueExpression eol;
end2Effect:
	END2EFFECT CODE valueExpression VALUE2 valueExpression FROM node eol;
endEffect: ENDEFFECT CODE valueExpression FROM node eol;
endNEffect:
	ENDNEFFECT (V_REGISTER | A_REGISTER | B_REGISTER) eol;
expand: EXPAND (S_REGISTER | T_REGISTER) eol;
fastpush: FASTPUSH eol statement+ FASTPOP eol;
feMisc:
	FEMISC valueExpression FOR (ROOM_NODE | PLAYER_NODE) eol;
feUpdate:
	FEUPDATE PLAYER_NODE (
		RIGHTHAND
		| LEFTHAND
		| TMPEXPR
		| STANCE
		| MANA
		| MAX_MANA
		| SPIRIT
		| MAX_SPIRIT
		| HEALTH
		| MAX_HEALTH
		| INJURIES
		| SCARS
		| WSPELL
		| ROUNDTIME
	) eol;
fillTable:
	FILLTABLE valueExpression WITH (
		valueExpression
		| stringExpression
	) eol;
gather:
	GATHER (
		FIRSTOBJ
		| NEXTOBJ
		| FIRSTPLAYER
		| NEXTPLAYER
		| FIRSTWATCH
		| NEXTWATCH
		| FIRSTBLOOD
		| NEXTBLOOD
		| NEXTROOM
		| ALLPLAYERS
	) node FOR node (EXIST | NONEXIST | ALL | SAMETYPE) eol;
gatherFirst:
	GATHERFIRST node FOR node eol; // TODO could make more safe
gatherFirstRoom:
	GATHERFIRSTROOM valueExpression FOR ROOM_NODE eol;
gatherNext:
	GATHERNEXT node FOR node eol; // TODO could make more safe
gatherNextRoom: GATHERNEXTROOM ROOM_NODE FOR ROOM_NODE eol;
gatherPlayer:
	GATHERPLAYER (PLAYER_NODE | ROOM_NODE) FOR PLAYER_NODE eol;
getContributors: GETCONTRIBUTORS CREATURE_NODE eol;
getIndexOf:
	GETINDEXOF stringExpression FOR (
		V_REGISTER
		| A_REGISTER
		| B_REGISTER
	) eol;
getMax:
	GETMAX (valueExpression | ENCUM | BHPT | POWER | OBJECTS) OF (
		OBJECT_NODE
		| PLAYER_NODE
	) FOR (V_REGISTER | A_REGISTER | B_REGISTER) eol;
getNameOf: GETNAMEOF valueExpression eol;
getPs: GETPS PLAYER_NODE eol;
getTable:
	GETTABLE valueExpression AT valueExpression valueExpression valueExpression FOR (
		numberVariable
		| stringVariable
	) eol;
getTextCommand:
	GETTEXT valueExpression FOR (stringVariable) eol;
getWatch:
	GETWATCH PLAYER_NODE FOR (
		V_REGISTER
		| A_REGISTER
		| B_REGISTER
	) eol;
glue: GLUE valueExpression TO node eol;
goto: GOTO eol;
hash1:
	HASH1 stringExpression FOR (
		V_REGISTER
		| A_REGISTER
		| B_REGISTER
	) eol;
hash2:
	HASH2 stringExpression FOR (
		V_REGISTER
		| A_REGISTER
		| B_REGISTER
	) eol;
heal:
	HEAL (CREATURE_NODE | PLAYER_NODE) AREA valueExpression BY valueExpression eol;
healP:
	HEALP PLAYER_NODE AREA valueExpression BY valueExpression eol;
hurt:
	HURT (CREATURE_NODE | PLAYER_NODE) HITS valueExpression eol;
hush: HUSH PLAYER_NODE eol;
inPhrase: INPHRASE valueExpression FOR stringVariable eol;
index:
	INDEX valueExpression FOR (OBJECT_NODE | PLAYER_NODE) eol;
infoItem:
	INFOITEM (CREATURE_NODE | EVENT_NODE | OBJECT_NODE) eol;
infoProfile:
	INFO PROFILE (stringExpression | valueExpression) eol;
infoScript: INFO SCRIPT valueExpression eol;
infoTable: INFO TABLE valueExpression eol;
infoVarField:
	INFO VARFIELD (stringExpression | valueExpression) eol;
infoVerb: INFO VERB (stringExpression | valueExpression) eol;
injure:
	INJURE (CREATURE_NODE | PLAYER_NODE) AREA valueExpression BY valueExpression eol;
isInjured:
	ISINJURED (CREATURE_NODE | PLAYER_NODE) AREA valueExpression FOR numberVariable eol;
isNameFree: ISNAMEFREE stringExpression eol;
itemSnapshot: ITEMSNAPSHOT OBJECT_NODE FOR numberVariable eol;
kill: KILL node eol;
killAllNp: KILLALLNP node eol;
label: LABEL eol;
launch: LAUNCH (BOOKEDIT | BOOK | MYSTERY) valueExpression eol;
launchURL:
	LAUNCHURL (WEB_CM | BBS) stringExpression FOR PLAYER_NODE eol;
load: LOAD valueExpression eol;
loadCharData:
	LOADCHARDATA (CMGR | MMGR | WORD) FOR valueExpression TO OBJECT_NODE eol;
// TODO could do better than WORD
logMsg: LOGMSG stringExpression eol;
logStart: LOG START stringExpression eol;
logSubmit: LOG SUBMIT stringExpression eol;
logTargetAccount: LOG TARGET_ACCOUNT stringExpression eol;
logTargetIndex: LOG TARGET_INDEX stringExpression eol;
logTargetName: LOG TARGET_NAME stringExpression eol;
logTargetOther: LOG TARGET_OTHER STRING eol;
logTargetUid: LOG TARGET_UID stringExpression eol;
logText: LOG TEXT stringExpression eol;
logToIndex: LOGTOINDEX valueExpression CODE valueExpression eol;
logto: LOGTO PLAYER_NODE CODE valueExpression eol;
lookRoom: LOOKROOM ROOM_NODE FOR PLAYER_NODE eol;
lowercase: LOWERCASE stringVariable eol;
matchMarker: COLON STRING eol statement* DOT eol;
matchSpell: MATCHSPELL PLAYER_NODE SPELL stringExpression eol;
mmgr: MMGR PLAYER_NODE MERCHANT valueExpression eol;
move:
	MOVE node (
		GROUND
		| INVENTORY
		| BEHIND
		| UNDER
		| IN
		| ON
		| valueExpression
	) node eol;
msg: MSG (PLAYER_NODE | ROOM_NODE) stringExpression eol;
msgGm: MSGGM stringExpression eol;
msgfsys:
	MSGFSYS WORD stringExpression eol; // TODO could do better than WORD
msgp: MSGP stringExpression eol;
msgr: MSGR stringExpression eol;
msgrgm:
	MSGRGM ROOM_NODE MODE (WORD | INFO | valueExpression) stringExpression eol;
msgrx2: MSGRX2 stringExpression eol;
msgrxp: MSGRXP stringExpression eol;
msgs: MSGS valueExpression stringExpression eol;
msgsgm: MSGSGM valueExpression stringExpression eol;
msgsys: MSGSYS stringExpression eol;
msgw:
	MSGW (ROOM_NODE | PLAYER_NODE) stringExpression stringExpression eol;
nameEnd: NAMEEND PLAYER_NODE eol;
nameStart: NAMESTART PLAYER_NODE eol;
nextEffect:
	NEXTEFFECT valueExpression node FOR numberVariable eol;
nextNode:
	NEXTNODE (
		GROUND
		| INVENTORY
		| BEHIND
		| UNDER
		| IN
		| ON
		| valueExpression
	) node FOR node eol;
openLocker: OPENLOCKER PLAYER_NODE USING OBJECT_NODE eol;
outPhrase: OUTPHRASE valueExpression FOR stringVariable eol;
parse: PARSE valueExpression eol;
parseDecimal:
	PARSEDECIMAL stringExpression FOR numberVariable eol;
pauseEffects: PAUSEEFFECTS node eol;
pid: PID (CREATURE_NODE | EVENT_NODE | OBJECT_NODE) eol;
playerCount: PLAYERCOUNT (numberVariable) eol;
prempt: PREMPT (PLAYER_NODE | ROOM_NODE) stringExpression eol;
push: PUSH eol statement+ POP eol;
random:
	RANDOM valueExpression TO valueExpression FOR numberVariable eol;
rem2effect:
	REM2EFFECT CODE valueExpression VALUE2 valueExpression FROM node eol;
remEffect: REMEFFECT CODE valueExpression FROM node eol;
remMenuItem: REMMENUITEM stringExpression eol;
remNEffect:
	REMNEFFECT (V_REGISTER | A_REGISTER | B_REGISTER) eol;
remove: REMOVE (TABLE | SEG) valueExpression eol;
removeVarField:
	REMOVEVARFIELD (stringExpression | fieldName) FROM node eol;
removeVarGroup:
	REMOVEVARGROUP (stringExpression | valueExpression) FROM (
		PLAYER_NODE
		| OBJECT_NODE
		| CREATURE_NODE
		| EVENT_NODE
	) eol;
resist:
	RESIST (CREATURE_NODE | PLAYER_NODE) VS (
		CREATURE_NODE
		| PLAYER_NODE
	) SPELL valueExpression eol;
resizeTable:
	RESIZETABLE valueExpression X valueExpression Y valueExpression Z valueExpression eol;
restoreFields:
	RESTOREFIELDS valueExpression OF valueExpression TO PLAYER_NODE eol;
resumeEffects: RESUMEEFFECTS node eol;
rmCall:
	RMCALL stringExpression CALL valueExpression CALLBACK valueExpression DONEMATCH stringExpression
		eol;
rndDir: RNDDIR eol;
rndExit: RNDEXIT eol;
rndPlyr: RNDPLYR eol;
rollIn:
	ROLLIN (SCRIPT | TABLE | SEG | VERB) valueExpression CALLBACK valueExpression REPORT_TO
		valueExpression eol;
roomEnd: ROOMEND PLAYER_NODE eol;
roomStart: ROOMSTART PLAYER_NODE eol;
rootExistOf: ROOTEXISTOF node FOR node eol;
roundtime:
	ROUNDTIME (CREATURE_NODE | PLAYER_NODE) valueExpression eol;
saveFields:
	SAVEFIELDS valueExpression TO valueExpression FROM PLAYER_NODE eol;
scan:
	SCAN stringExpression MATCH stringExpression FOR numberVariable eol;
scanEffect:
	SCANEFFECT node CODE valueExpression VALUE2 valueExpression eol;
set:
	SET (numberVariable | stringVariable) TO (
		valueExpression
		| stringExpression
	) eol
	| SET PLAYER_NODE TO PLAYER_NODE eol
	| SET CREATURE_NODE TO CREATURE_NODE eol
	| SET ROOM_NODE TO ROOM_NODE eol
	| SET OBJECT_NODE TO OBJECT_NODE eol
	| SET EVENT_NODE TO EVENT_NODE eol;
setName: SETNAME PLAYER_NODE TO stringExpression eol;
setTable:
	SETTABLE valueExpression AT valueExpression valueExpression valueExpression TO (
		stringExpression
		| valueExpression
	) eol;
setText: SETTEXT numberVariable TO stringExpression eol;
sparse: SPARSE valueExpression eol;
stopCommand: STOP eol;
storeCharData:
	STORECHARDATA (MMGR | CMGR | WORD) FOR valueExpression FROM OBJECT_NODE eol;
// TODO can do better than WORD here
stov: STOV stringExpression FOR numberVariable eol;
substring:
	SUBSTRING stringExpression FROM valueExpression TO valueExpression FOR stringVariable eol;
tableInfo: TABLEINFO valueExpression eol;
tellWeb:
	TELLWEB stringExpression PRIORITY valueExpression FOR valueExpression eol;
test2effect:
	TEST2EFFECT node CODE valueExpression VALUE2 valueExpression eol;
testEffect: TESTEFFECT node CODE valueExpression eol;
test_assert:
	TEST_ASSERT (valueExpression | stringExpression) OR_YELL stringExpression TO (
		PLAYER_NODE
		| ROOM_NODE
	) eol;
tparse: TPARSE stringExpression valueExpression eol;
underOff: UNDEROFF (PLAYER_NODE | ROOM_NODE) eol;
underOn: UNDERON (PLAYER_NODE | ROOM_NODE) eol;
unload: UNLOAD valueExpression eol;
updateSrvrStuff: UPDATESRVRSTUFF PLAYER_NODE eol;
updateTable: UPDATETABLE valueExpression eol;
uppercase: UPPERCASE stringVariable eol;
vtos: VTOS valueExpression FOR stringVariable eol;
watch: WATCH ROOM valueExpression FOR PLAYER_NODE;
where: WHERE node FOR node eol;
whereAt: WHEREAT node FOR numberVariable eol;
whereItem: WHEREITEM node FOR stringVariable eol;
writeChar: WRITECHAR PLAYER_NODE eol;

// Expressions
valueExpression:
	NUMBER
	| CARET_OPERATOR
	| negativeNumber
	| numberVariable
	| identityExpression
	| valueOperation
	| stringOperation
	| LPARAN valueExpression RPARAN;

negativeNumber: MINUS NUMBER;
valueOperation:
	LPARAN valueExpression (
		(
			PLUS
			| MINUS
			| DIVIDE
			| MULTIPLY
			| PERCENT_SYMBOL
			| AND
			| OR
			| COMPARATOR
		) valueExpression
	)+ RPARAN;

stringOperation:
	LPARAN stringExpression (
		(AND | OR | COMPARATOR) stringExpression
	)+ RPARAN;

stringExpression:
	STRING
	| stringVariable
	| stringConcatenation
	| LPARAN stringExpression RPARAN;

stringConcatenation:
	LPARAN stringExpression (PLUS stringExpression)+ RPARAN;

identityExpression:
	LPARAN node (
		ISOFTYPE
		| ISNOTOFTYPE
		| ISEXACTLY
		| ISNOTEXACTLY
		| HASFIELD
		| LACKSFIELD
	) stringExpression RPARAN;

// variables
node:
	PLAYER_NODE
	| ROOM_NODE
	| CREATURE_NODE
	| OBJECT_NODE
	| EVENT_NODE;

numberVariable:
	V_REGISTER
	| A_REGISTER
	| B_REGISTER
	| ROOM_NODE
	| CREATURE_NODE
	| OBJECT_NODE
	| EVENT_NODE
	| SYS_BREAK
	| SYS_CALLBACK
	| SYS_CALLEDBY
	| SYS_DESCMODE
	| SYS_ERROR
	| SYS_LOADINGFROMSAVE
	| SYS_MAXLOOPS
	| SYS_MAXROOMCREATES
	| SYS_MAXTEXTCHANGES
	| SYS_MAXUOBJS
	| SYS_STRTABLE
	| SYS_INTTABLE
	| SYS_STIME
	| SYS_STRTABLE
	| SYS_INTTABLE
	| SYS_THISSCRIPT
	| SYS_TIME
	| SYS_USERS
	| nodeFieldRef
	| tableReference
	| tableAddress;

stringVariable:
	S_REGISTER
	| T_REGISTER
	| PLAYER_NODE
	| SYS_BROWSER_BUFFER
	| SYS_DONEMATCH
	| SYS_GAMECODE
	| SYS_GAMENAME
	| SYS_LASTMATCH
	| SYS_MATCH
	| SYS_MENUITEMLABEL
	| SYS_REPLYADDRESS
	| SYS_PARSE_ERROR_1
	| SYS_PARSE_ERROR_2
	| SYS_PARSE_ERROR_3
	| SYS_PARSE_ERROR_4
	| nodeFieldRef
	| tableAddress;

tableReference:
	TABLE COLON (
		NUMBER
		| V_REGISTER
		| A_REGISTER
		| B_REGISTER
		| SYS_STRTABLE
		| SYS_INTTABLE
		| nodeFieldRef
	);

tableAddress: (
		(TABLE COLON)? (
			NUMBER
			| V_REGISTER
			| A_REGISTER
			| B_REGISTER
			| SYS_STRTABLE
			| SYS_INTTABLE
			| nodeFieldRef
		) LBRACK valueExpression COMMA valueExpression COMMA valueExpression RBRACK
	);

fieldName: (WORD | NUMBER | UNDERSCORE)+
	| SPELL
	| HITS
	| SIZE
	| TYPE
	| TYPE_D
	| ENCUM
	| NONEXIST;

nodeFieldRef:
	node COLON ~(
		LPARAN
		| RPARAN
		| AND
		| OR
		| COMMA
		| LBRACK
		| RBRACK
		| PLUS
		| MINUS
		| DIVIDE
		| MULTIPLY
		| PERCENT_SYMBOL
		| COLON
		| GOTO
		| LABEL
		| COMPARATOR
		| STRING
		| CARET_OPERATOR
		| NEWLINE
	)+;

/*
 * Lexer Rules
 */

fragment NL: ('\r'? '\n' | '\r');

// recognize strings
STRING: '"' .*? '"';

// treat comments as newlines
EMPTY_COMMENT: '!' NL {this.type=GslLexer.NEWLINE};
COMMENT:
	'!' (~[=\n] | ('=' '='+)) .*? NL {this.type=GslLexer.NEWLINE};

// skip lexing of line continuations, spaces, and tabs
BACKSLASH_NEWLINE: '\\' .*? NL -> skip;
// BACKSLASH_NEWLINE: '\\' [ \t]* ('!' .*?)? NL -> skip;
SPACE: [ ]+ -> skip;
TAB: [\t]+ -> skip;

GOTO: 'goto' [ ]+ LABEL_; // Parse as one token
LABEL: '@' [ ]* LABEL_; // Parse as one token
fragment LABEL_: [\-a-z0-9_?]+;

COMPARATOR: '>=' | '<=' | '!=' | '<>' | '==' | '>' | '<' | '=';

V_REGISTER: 'v' [0-9];
A_REGISTER: 'a' [0-9];
B_REGISTER: 'b' [0-9];
S_REGISTER: 's' [0-9];
T_REGISTER: 't' [0-9];

SYS_BREAK: '$break';
SYS_BROWSER_BUFFER: '$browser_buffer';
SYS_CALLBACK: '$callback';
SYS_CALLEDBY: '$calledby';
SYS_DESCMODE: '$descmode';
SYS_DONEMATCH: '$donematch';
SYS_ERROR: '$error';
SYS_GAMECODE: '$gamecode';
SYS_GAMENAME: '$gamename';
SYS_INTTABLE: '$inttable';
SYS_LASTMATCH: '$lastmatch';
SYS_LOADINGFROMSAVE: '$loadingfromsave';
SYS_MATCH: '$match';
SYS_MAXLOOPS: '$maxloops';
SYS_MAXROOMCREATES: '$maxroomcreates';
SYS_MAXTEXTCHANGES: '$maxtextchanges';
SYS_MAXUOBJS: '$maxuobjs';
SYS_MENUITEMLABEL: '$menuitemlabel';
SYS_PARSE_ERROR_1: '$parse_error_1';
SYS_PARSE_ERROR_2: '$parse_error_2';
SYS_PARSE_ERROR_3: '$parse_error_3';
SYS_PARSE_ERROR_4: '$parse_error_4';
SYS_REPLYADDRESS: '$replyaddress';
SYS_STIME: '$stime';
SYS_STRTABLE: '$strtable';
SYS_THISSCRIPT: '$thisscript';
SYS_TIME: '$time';
SYS_USERS: '$users';

fragment FIELD_CHARS_: ([a-z0-9_])+;
CARET_OPERATOR: '^' FIELD_CHARS_;

PLAYER_NODE: 'np' [0-9];
ROOM_NODE: 'nr' [0-9];
CREATURE_NODE: 'nc' [0-9];
OBJECT_NODE: 'no' [0-9];
EVENT_NODE: 'ne' [0-9];

// blocks
IF: 'if';
IFNOT: 'ifnot';
ELSE_IF: 'else_if';
ELSE_IFNOT: 'else_ifnot';
ELSE: 'else';
LOOP: 'loop';
WHEN: 'when';
IS: 'is';
FASTPOP: 'fastpop';
FASTPUSH: 'fastpush';
POP: 'pop';
PUSH: 'push';
THEN: 'then';
DOT: '.';

// commands:
ACTION: 'action';
ADD_GROUP: 'addgroup';
ADDEFFECT: 'addeffect';
ADDEXPR: 'addexpr';
ADDMENUITEM: 'addmenuitem';
ALTWINOFF: 'altwinoff';
ALTWINON: 'altwinon';
ANIM: 'anim';
ASSERT: 'assert';
ATTACK: 'attack';
BEHIND: 'behind';
BITGET: 'bitget';
BITSET: 'bitset';
BOLDOFF: 'boldoff';
BOLDON: 'boldon';
BORDER: 'border';
BUGREPORT: 'bugreport';
CALL: 'call';
CALLMATCH: 'callmatch';
CALLPS: 'callps';
CANDO: 'cando';
CHECKEFFECT: 'checkeffect';
CLEAR: 'clear';
CLEARMENU: 'clearmenu';
CLEARTABLE: 'cleartable';
CLOSELOCKER: 'closelocker';
CMGR: 'cmgr';
COMPAREITEM: 'compareitem';
CONTRIBUTE: 'contribute';
COPY: 'copy';
CREATE: 'create';
CREATEITEM: 'createitem';
CREATEROOM: 'createroom';
CREATETABLE: 'createtable';
CREATETEXT: 'createtext';
CRITICAL: 'critical';
DECODEATTACK: 'decodeattack';
DEFAULT: 'default';
DELETETABLE: 'deletetable';
DEPLOY: 'deploy';
DIRADD: 'diradd';
DIRSEND: 'dirsend';
DOCREATE: 'docreate';
DOLOOK: 'dolook';
DROP: 'drop';
ENCODEATTACK: 'encodeattack';
END2EFFECT: 'end2effect';
ENDEFFECT: 'endeffect';
ENDNEFFECT: 'endneffect';
EXPAND: 'expand';
FEMISC: 'femisc';
FEUPDATE: 'feupdate';
FILLTABLE: 'filltable';
FIRSTBLOOD: 'firstblood';
FIRSTOBJ: 'firstobj';
FIRSTPLAYER: 'firstplayer';
FIRSTWATCH: 'firstwatch';
GATHER: 'gather';
GATHERFIRST: 'gatherfirst';
GATHERFIRSTROOM: 'gatherfirstroom';
GATHERNEXT: 'gathernext';
GATHERNEXTROOM: 'gathernextroom';
GATHERPLAYER: 'gatherplayer';
GETCONTRIBUTORS: 'getcontributors';
GETINDEXOF: 'getindexof';
GETMAX: 'getmax';
GETNAMEOF: 'getnameof';
GETPS: 'getps';
GETTABLE: 'gettable';
GETTEXT: 'gettext';
GETWATCH: 'getwatch';
GLUE: 'glue';
GROUND: 'ground';
HASH1: 'hash1';
HASH2: 'hash2';
HEAL: 'heal';
HEALP: 'healp';
HURT: 'hurt';
HUSH: 'hush';
INFO: 'info';
INFOITEM: 'infoitem';
INJURE: 'injure';
INPHRASE: 'inphrase';
INVENTORY: 'inventory';
ISINJURED: 'isinjured';
ISNAMEFREE: 'isnamefree';
ITEMSNAPSHOT: 'itemsnapshot';
KILL: 'kill';
KILLALLNP: 'killallnp';
LAUNCH: 'launch';
LAUNCHURL: 'launchurl';
LOAD: 'load';
LOADCHARDATA: 'loadchardata';
LOG: 'log';
LOGMSG: 'logmsg';
LOGTO: 'logto';
LOGTOINDEX: 'logtoindex';
LOOKROOM: 'lookroom';
LOWERCASE: 'lowercase';
MMGR: 'mmgr';
MOVE: 'move';
MSG: 'msg';
MSGFSYS: 'msgfsys';
MSGGM: 'msggm';
MSGP: 'msgp';
MSGR: 'msgr';
MSGRGM: 'msgrgm';
MSGRX2: 'msgrx2';
MSGRXP: 'msgrxp';
MSGS: 'msgs';
MSGSGM: 'msgsgm';
MSGSYS: 'msgsys';
MSGW: 'msgw';
NAMEEND: 'nameend';
NAMESTART: 'namestart';
NEXTBLOOD: 'nextblood';
NEXTEFFECT: 'nexteffect';
NEXTNODE: 'nextnode';
NEXTOBJ: 'nextobj';
NEXTPLAYER: 'nextplayer';
NEXTROOM: 'nextroom';
NEXTWATCH: 'nextwatch';
OPENLOCKER: 'openlocker';
OR_YELL: 'or_yell';
OUTPHRASE: 'outphrase';
PARSE: 'parse';
PARSEDECIMAL: 'parsedecimal';
PAUSEEFFECTS: 'pauseeffects';
PID: 'pid';
PLAYERCOUNT: 'playercount';
PREMPT: 'prempt';
PROFILE: 'profile';
RANDOM: 'random';
REM2EFFECT: 'rem2effect';
REMEFFECT: 'remeffect';
REMMENUITEM: 'remmenuitem';
REMNEFFECT: 'remneffect';
REMOVE: 'remove';
REMOVEVARFIELD: 'removevarfield';
REMOVEVARGROUP: 'removevargroup';
RESIST: 'resist';
RESIZETABLE: 'resizetable';
RESTOREFIELDS: 'restorefields';
RESUMEEFFECTS: 'resumeeffects';
RMCALL: 'rmcall';
RNDDIR: 'rnddir';
RNDEXIT: 'rndexit';
RNDPLYR: 'rndplyr';
ROLLIN: 'rollin';
ROOMEND: 'roomend';
ROOMSTART: 'roomstart';
ROOTEXISTOF: 'rootexistof';
ROUNDTIME: 'roundtime';
SAVEFIELDS: 'savefields';
SCAN: 'scan';
SCANEFFECT: 'scaneffect';
SCRIPT: 'script';
SET: 'set';
SETNAME: 'setname';
SETTABLE: 'settable';
SETTEXT: 'settext';
SPARSE: 'sparse';
START: 'start';
STOP: 'stop';
STORECHARDATA: 'storechardata';
STOV: 'stov';
SUBMIT: 'submit';
SUBSTRING: 'substring';
TABLEINFO: 'tableinfo';
TELLWEB: 'tellweb';
TEST_ASSERT: 'test_assert';
TEST2EFFECT: 'test2effect';
TESTEFFECT: 'testeffect';
TPARSE: 'tparse';
UNDER: 'under';
UNDEROFF: 'underoff';
UNDERON: 'underon';
UNLOAD: 'unload';
UPDATESRVRSTUFF: 'updatesrvrstuff';
UPDATETABLE: 'updatetable';
UPPERCASE: 'uppercase';
VERB: 'verb';
VTOS: 'vtos';
WATCH: 'watch';
WHERE: 'where';
WHEREAT: 'whereat';
WHEREITEM: 'whereitem';
WRITECHAR: 'writechar';

// other
ALL: 'all';
ALLPLAYERS: 'allplayers';
AREA: 'area';
BBS: 'bbs';
BHPT: 'bhpt';
BOOK: 'book';
BOOKEDIT: 'bookedit';
CALLBACK: 'callback';
CHECK: 'check';
CODE: 'code';
DEBUG: 'debug';
DONEMATCH: 'donematch';
ENCUM: 'encum';
EXIST: 'exist';
FIELD: 'field';
FLAGS: 'flags';
FOR: 'for';
FROM: 'from';
HASFIELD: 'hasfield';
HEALTH: 'health';
HITS: 'hits';
INDEX: 'index';
INJURIES: 'injuries';
ISEXACTLY: 'isexactly';
ISNOTEXACTLY: 'isnotexactly';
ISNOTOFTYPE: 'isnotoftype';
ISOFTYPE: 'isoftype';
LACKSFIELD: 'lacksfield';
LEFTHAND: 'lefthand';
MANA: 'mana';
MATCH: 'match';
MATCHSPELL: 'matchspell';
MAX_HEALTH: 'max_health';
MAX_MANA: 'max_mana';
MAX_SPIRIT: 'max_spirit';
MAY_MATCH: 'may_match';
MERCHANT: 'merchant';
MESSAGE: 'message';
MODE: 'mode';
MUST_MATCH: 'must_match';
MYSTERY: 'mystery';
NONEXIST: 'nonexist';
OBJECTS: 'objects';
POWER: 'power';
PRIORITY: 'priority';
REPORT_TO: 'report_to';
RIGHTHAND: 'righthand';
ROOM: 'room';
SAMETYPE: 'sametype';
SCARS: 'scars';
SEG: 'seg';
SIZE: 'size';
SPELL: 'spell';
SPIRIT: 'spirit';
STANCE: 'stance';
TABLE: 'table';
TARGET_ACCOUNT: 'target_account';
TARGET_INDEX: 'target_index';
TARGET_NAME: 'target_name';
TARGET_OTHER: 'target_other';
TARGET_UID: 'target_uid';
TARGET: 'target';
TEXT: 'text';
TMPEXPR: 'tmpexpr';
TOWARDS: 'towards';
TYPE: 'type';
USING: 'using';
VALUE1: 'value1';
VALUE2: 'value2';
VARFIELD: 'varfield';
WEB_CM: 'web_cm';
WITH: 'with';
WSPELL: 'wspell';

TYPE_D: 'type' [0-9];

AT: 'at';
BY: 'by';
IN: 'in';
OF: 'of';
ON: 'on';
TO: 'to';
VS: 'vs';

X: 'x';
Y: 'y';
Z: 'z';

fragment DIGIT_: [0-9];
NUMBER: DIGIT_+ ('_' DIGIT_ DIGIT_ DIGIT_)*;

LPARAN: '(';
RPARAN: ')';
AND: '&&' | '&';
OR: '||' | '|';
COMMA: ',';
LBRACK: '[';
RBRACK: ']';
PLUS: '+';
MINUS: '-';
DIVIDE: '/';
MULTIPLY: '*';
PERCENT_SYMBOL: '%';
COLON: ':';
UNDERSCORE: '_';

WORD: [a-z_]+;
NEWLINE: NL;