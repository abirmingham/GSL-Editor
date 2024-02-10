// Generated from gsl-language-server/antlr/Gsl.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ScriptContext } from "./GslParser.js";
import { EolContext } from "./GslParser.js";
import { StatementContext } from "./GslParser.js";
import { IfContext } from "./GslParser.js";
import { ElseIfContext } from "./GslParser.js";
import { ElseContext } from "./GslParser.js";
import { WhenStatementContext } from "./GslParser.js";
import { WhenCaseContext } from "./GslParser.js";
import { WhenCaseDefaultContext } from "./GslParser.js";
import { LoopStatementContext } from "./GslParser.js";
import { EarlyPopStopContext } from "./GslParser.js";
import { AddExprContext } from "./GslParser.js";
import { AddGroupContext } from "./GslParser.js";
import { AddMenuItemContext } from "./GslParser.js";
import { AddeffectContext } from "./GslParser.js";
import { AltWinOffContext } from "./GslParser.js";
import { AltWinOnContext } from "./GslParser.js";
import { AnimContext } from "./GslParser.js";
import { AssertContext } from "./GslParser.js";
import { AttackContext } from "./GslParser.js";
import { BitgetContext } from "./GslParser.js";
import { BitsetContext } from "./GslParser.js";
import { BoldoffContext } from "./GslParser.js";
import { BoldonContext } from "./GslParser.js";
import { BorderContext } from "./GslParser.js";
import { BugReportContext } from "./GslParser.js";
import { CallContext } from "./GslParser.js";
import { CallPSContext } from "./GslParser.js";
import { CallmatchContext } from "./GslParser.js";
import { CanDoContext } from "./GslParser.js";
import { CheckEffectContext } from "./GslParser.js";
import { ClearContext } from "./GslParser.js";
import { ClearMenuContext } from "./GslParser.js";
import { ClearTableContext } from "./GslParser.js";
import { CloseLockerContext } from "./GslParser.js";
import { CmgrContext } from "./GslParser.js";
import { CompareItemCreatureContext } from "./GslParser.js";
import { CompareItemEventContext } from "./GslParser.js";
import { CompareItemObjectContext } from "./GslParser.js";
import { ContributeContext } from "./GslParser.js";
import { CopyCreatureContext } from "./GslParser.js";
import { CopyEventContext } from "./GslParser.js";
import { CopyObjectContext } from "./GslParser.js";
import { CreateContext } from "./GslParser.js";
import { CreateItemContext } from "./GslParser.js";
import { CreateRoomContext } from "./GslParser.js";
import { CreateTableContext } from "./GslParser.js";
import { CreateTextContext } from "./GslParser.js";
import { CriticalContext } from "./GslParser.js";
import { DecodeAttackContext } from "./GslParser.js";
import { DeleteTableContext } from "./GslParser.js";
import { DeployContext } from "./GslParser.js";
import { DirAddContext } from "./GslParser.js";
import { DirSendContext } from "./GslParser.js";
import { DoCreateContext } from "./GslParser.js";
import { DoLookContext } from "./GslParser.js";
import { DropContext } from "./GslParser.js";
import { EncodeAttackContext } from "./GslParser.js";
import { End2EffectContext } from "./GslParser.js";
import { EndEffectContext } from "./GslParser.js";
import { EndNEffectContext } from "./GslParser.js";
import { ExpandContext } from "./GslParser.js";
import { FastpushContext } from "./GslParser.js";
import { FeMiscContext } from "./GslParser.js";
import { FeUpdateContext } from "./GslParser.js";
import { FillTableContext } from "./GslParser.js";
import { GatherContext } from "./GslParser.js";
import { GatherFirstContext } from "./GslParser.js";
import { GatherFirstRoomContext } from "./GslParser.js";
import { GatherNextContext } from "./GslParser.js";
import { GatherNextRoomContext } from "./GslParser.js";
import { GatherPlayerContext } from "./GslParser.js";
import { GetContributorsContext } from "./GslParser.js";
import { GetIndexOfContext } from "./GslParser.js";
import { GetMaxContext } from "./GslParser.js";
import { GetNameOfContext } from "./GslParser.js";
import { GetPsContext } from "./GslParser.js";
import { GetTableContext } from "./GslParser.js";
import { GetTextCommandContext } from "./GslParser.js";
import { GetWatchContext } from "./GslParser.js";
import { GlueContext } from "./GslParser.js";
import { GotoContext } from "./GslParser.js";
import { Hash1Context } from "./GslParser.js";
import { Hash2Context } from "./GslParser.js";
import { HealContext } from "./GslParser.js";
import { HealPContext } from "./GslParser.js";
import { HurtContext } from "./GslParser.js";
import { HushContext } from "./GslParser.js";
import { InPhraseContext } from "./GslParser.js";
import { IndexContext } from "./GslParser.js";
import { InfoItemContext } from "./GslParser.js";
import { InfoProfileContext } from "./GslParser.js";
import { InfoScriptContext } from "./GslParser.js";
import { InfoTableContext } from "./GslParser.js";
import { InfoVarFieldContext } from "./GslParser.js";
import { InfoVerbContext } from "./GslParser.js";
import { InjureContext } from "./GslParser.js";
import { IsInjuredContext } from "./GslParser.js";
import { IsNameFreeContext } from "./GslParser.js";
import { ItemSnapshotContext } from "./GslParser.js";
import { KillContext } from "./GslParser.js";
import { KillAllNpContext } from "./GslParser.js";
import { LabelContext } from "./GslParser.js";
import { LaunchContext } from "./GslParser.js";
import { LaunchURLContext } from "./GslParser.js";
import { LoadContext } from "./GslParser.js";
import { LoadCharDataContext } from "./GslParser.js";
import { LogMsgContext } from "./GslParser.js";
import { LogStartContext } from "./GslParser.js";
import { LogSubmitContext } from "./GslParser.js";
import { LogTargetAccountContext } from "./GslParser.js";
import { LogTargetIndexContext } from "./GslParser.js";
import { LogTargetNameContext } from "./GslParser.js";
import { LogTargetOtherContext } from "./GslParser.js";
import { LogTargetUidContext } from "./GslParser.js";
import { LogTextContext } from "./GslParser.js";
import { LogToIndexContext } from "./GslParser.js";
import { LogtoContext } from "./GslParser.js";
import { LookRoomContext } from "./GslParser.js";
import { LowercaseContext } from "./GslParser.js";
import { MatchMarkerContext } from "./GslParser.js";
import { MatchSpellContext } from "./GslParser.js";
import { MmgrContext } from "./GslParser.js";
import { MoveContext } from "./GslParser.js";
import { MsgContext } from "./GslParser.js";
import { MsgGmContext } from "./GslParser.js";
import { MsgfsysContext } from "./GslParser.js";
import { MsgpContext } from "./GslParser.js";
import { MsgrContext } from "./GslParser.js";
import { MsgrgmContext } from "./GslParser.js";
import { Msgrx2Context } from "./GslParser.js";
import { MsgrxpContext } from "./GslParser.js";
import { MsgsContext } from "./GslParser.js";
import { MsgsgmContext } from "./GslParser.js";
import { MsgsysContext } from "./GslParser.js";
import { MsgwContext } from "./GslParser.js";
import { NameEndContext } from "./GslParser.js";
import { NameStartContext } from "./GslParser.js";
import { NextEffectContext } from "./GslParser.js";
import { NextNodeContext } from "./GslParser.js";
import { OpenLockerContext } from "./GslParser.js";
import { OutPhraseContext } from "./GslParser.js";
import { ParseContext } from "./GslParser.js";
import { ParseDecimalContext } from "./GslParser.js";
import { PauseEffectsContext } from "./GslParser.js";
import { PidContext } from "./GslParser.js";
import { PlayerCountContext } from "./GslParser.js";
import { PremptContext } from "./GslParser.js";
import { PushContext } from "./GslParser.js";
import { RandomContext } from "./GslParser.js";
import { Rem2effectContext } from "./GslParser.js";
import { RemEffectContext } from "./GslParser.js";
import { RemMenuItemContext } from "./GslParser.js";
import { RemNEffectContext } from "./GslParser.js";
import { RemoveContext } from "./GslParser.js";
import { RemoveVarFieldContext } from "./GslParser.js";
import { RemoveVarGroupContext } from "./GslParser.js";
import { ResistContext } from "./GslParser.js";
import { ResizeTableContext } from "./GslParser.js";
import { RestoreFieldsContext } from "./GslParser.js";
import { ResumeEffectsContext } from "./GslParser.js";
import { RmCallContext } from "./GslParser.js";
import { RndDirContext } from "./GslParser.js";
import { RndExitContext } from "./GslParser.js";
import { RndPlyrContext } from "./GslParser.js";
import { RollInContext } from "./GslParser.js";
import { RoomEndContext } from "./GslParser.js";
import { RoomStartContext } from "./GslParser.js";
import { RootExistOfContext } from "./GslParser.js";
import { RoundtimeContext } from "./GslParser.js";
import { SaveFieldsContext } from "./GslParser.js";
import { ScanContext } from "./GslParser.js";
import { ScanEffectContext } from "./GslParser.js";
import { SetContext } from "./GslParser.js";
import { SetNameContext } from "./GslParser.js";
import { SetTableContext } from "./GslParser.js";
import { SetTextContext } from "./GslParser.js";
import { SparseContext } from "./GslParser.js";
import { StopCommandContext } from "./GslParser.js";
import { StoreCharDataContext } from "./GslParser.js";
import { StovContext } from "./GslParser.js";
import { SubstringContext } from "./GslParser.js";
import { TableInfoContext } from "./GslParser.js";
import { TellWebContext } from "./GslParser.js";
import { Test2effectContext } from "./GslParser.js";
import { TestEffectContext } from "./GslParser.js";
import { Test_assertContext } from "./GslParser.js";
import { TparseContext } from "./GslParser.js";
import { UnderOffContext } from "./GslParser.js";
import { UnderOnContext } from "./GslParser.js";
import { UnloadContext } from "./GslParser.js";
import { UpdateSrvrStuffContext } from "./GslParser.js";
import { UpdateTableContext } from "./GslParser.js";
import { UppercaseContext } from "./GslParser.js";
import { VtosContext } from "./GslParser.js";
import { WatchContext } from "./GslParser.js";
import { WhereContext } from "./GslParser.js";
import { WhereAtContext } from "./GslParser.js";
import { WhereItemContext } from "./GslParser.js";
import { WriteCharContext } from "./GslParser.js";
import { ValueExpressionContext } from "./GslParser.js";
import { NegativeNumberContext } from "./GslParser.js";
import { ValueOperationContext } from "./GslParser.js";
import { StringOperationContext } from "./GslParser.js";
import { StringExpressionContext } from "./GslParser.js";
import { StringConcatenationContext } from "./GslParser.js";
import { IdentityExpressionContext } from "./GslParser.js";
import { NodeContext } from "./GslParser.js";
import { NumberVariableContext } from "./GslParser.js";
import { StringVariableContext } from "./GslParser.js";
import { TableReferenceContext } from "./GslParser.js";
import { TableAddressContext } from "./GslParser.js";
import { FieldNameContext } from "./GslParser.js";
import { NodeFieldRefContext } from "./GslParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GslParser`.
 */
export class GslListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `GslParser.script`.
     * @param ctx the parse tree
     */
    enterScript?: (ctx: ScriptContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.script`.
     * @param ctx the parse tree
     */
    exitScript?: (ctx: ScriptContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.eol`.
     * @param ctx the parse tree
     */
    enterEol?: (ctx: EolContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.eol`.
     * @param ctx the parse tree
     */
    exitEol?: (ctx: EolContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.if`.
     * @param ctx the parse tree
     */
    enterIf?: (ctx: IfContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.if`.
     * @param ctx the parse tree
     */
    exitIf?: (ctx: IfContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.elseIf`.
     * @param ctx the parse tree
     */
    enterElseIf?: (ctx: ElseIfContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.elseIf`.
     * @param ctx the parse tree
     */
    exitElseIf?: (ctx: ElseIfContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.else`.
     * @param ctx the parse tree
     */
    enterElse?: (ctx: ElseContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.else`.
     * @param ctx the parse tree
     */
    exitElse?: (ctx: ElseContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.whenStatement`.
     * @param ctx the parse tree
     */
    enterWhenStatement?: (ctx: WhenStatementContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.whenStatement`.
     * @param ctx the parse tree
     */
    exitWhenStatement?: (ctx: WhenStatementContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.whenCase`.
     * @param ctx the parse tree
     */
    enterWhenCase?: (ctx: WhenCaseContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.whenCase`.
     * @param ctx the parse tree
     */
    exitWhenCase?: (ctx: WhenCaseContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.whenCaseDefault`.
     * @param ctx the parse tree
     */
    enterWhenCaseDefault?: (ctx: WhenCaseDefaultContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.whenCaseDefault`.
     * @param ctx the parse tree
     */
    exitWhenCaseDefault?: (ctx: WhenCaseDefaultContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.loopStatement`.
     * @param ctx the parse tree
     */
    enterLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.loopStatement`.
     * @param ctx the parse tree
     */
    exitLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.earlyPopStop`.
     * @param ctx the parse tree
     */
    enterEarlyPopStop?: (ctx: EarlyPopStopContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.earlyPopStop`.
     * @param ctx the parse tree
     */
    exitEarlyPopStop?: (ctx: EarlyPopStopContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.addExpr`.
     * @param ctx the parse tree
     */
    enterAddExpr?: (ctx: AddExprContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.addExpr`.
     * @param ctx the parse tree
     */
    exitAddExpr?: (ctx: AddExprContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.addGroup`.
     * @param ctx the parse tree
     */
    enterAddGroup?: (ctx: AddGroupContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.addGroup`.
     * @param ctx the parse tree
     */
    exitAddGroup?: (ctx: AddGroupContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.addMenuItem`.
     * @param ctx the parse tree
     */
    enterAddMenuItem?: (ctx: AddMenuItemContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.addMenuItem`.
     * @param ctx the parse tree
     */
    exitAddMenuItem?: (ctx: AddMenuItemContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.addeffect`.
     * @param ctx the parse tree
     */
    enterAddeffect?: (ctx: AddeffectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.addeffect`.
     * @param ctx the parse tree
     */
    exitAddeffect?: (ctx: AddeffectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.altWinOff`.
     * @param ctx the parse tree
     */
    enterAltWinOff?: (ctx: AltWinOffContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.altWinOff`.
     * @param ctx the parse tree
     */
    exitAltWinOff?: (ctx: AltWinOffContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.altWinOn`.
     * @param ctx the parse tree
     */
    enterAltWinOn?: (ctx: AltWinOnContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.altWinOn`.
     * @param ctx the parse tree
     */
    exitAltWinOn?: (ctx: AltWinOnContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.anim`.
     * @param ctx the parse tree
     */
    enterAnim?: (ctx: AnimContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.anim`.
     * @param ctx the parse tree
     */
    exitAnim?: (ctx: AnimContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.assert`.
     * @param ctx the parse tree
     */
    enterAssert?: (ctx: AssertContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.assert`.
     * @param ctx the parse tree
     */
    exitAssert?: (ctx: AssertContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.attack`.
     * @param ctx the parse tree
     */
    enterAttack?: (ctx: AttackContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.attack`.
     * @param ctx the parse tree
     */
    exitAttack?: (ctx: AttackContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.bitget`.
     * @param ctx the parse tree
     */
    enterBitget?: (ctx: BitgetContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.bitget`.
     * @param ctx the parse tree
     */
    exitBitget?: (ctx: BitgetContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.bitset`.
     * @param ctx the parse tree
     */
    enterBitset?: (ctx: BitsetContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.bitset`.
     * @param ctx the parse tree
     */
    exitBitset?: (ctx: BitsetContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.boldoff`.
     * @param ctx the parse tree
     */
    enterBoldoff?: (ctx: BoldoffContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.boldoff`.
     * @param ctx the parse tree
     */
    exitBoldoff?: (ctx: BoldoffContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.boldon`.
     * @param ctx the parse tree
     */
    enterBoldon?: (ctx: BoldonContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.boldon`.
     * @param ctx the parse tree
     */
    exitBoldon?: (ctx: BoldonContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.border`.
     * @param ctx the parse tree
     */
    enterBorder?: (ctx: BorderContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.border`.
     * @param ctx the parse tree
     */
    exitBorder?: (ctx: BorderContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.bugReport`.
     * @param ctx the parse tree
     */
    enterBugReport?: (ctx: BugReportContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.bugReport`.
     * @param ctx the parse tree
     */
    exitBugReport?: (ctx: BugReportContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.call`.
     * @param ctx the parse tree
     */
    enterCall?: (ctx: CallContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.call`.
     * @param ctx the parse tree
     */
    exitCall?: (ctx: CallContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.callPS`.
     * @param ctx the parse tree
     */
    enterCallPS?: (ctx: CallPSContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.callPS`.
     * @param ctx the parse tree
     */
    exitCallPS?: (ctx: CallPSContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.callmatch`.
     * @param ctx the parse tree
     */
    enterCallmatch?: (ctx: CallmatchContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.callmatch`.
     * @param ctx the parse tree
     */
    exitCallmatch?: (ctx: CallmatchContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.canDo`.
     * @param ctx the parse tree
     */
    enterCanDo?: (ctx: CanDoContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.canDo`.
     * @param ctx the parse tree
     */
    exitCanDo?: (ctx: CanDoContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.checkEffect`.
     * @param ctx the parse tree
     */
    enterCheckEffect?: (ctx: CheckEffectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.checkEffect`.
     * @param ctx the parse tree
     */
    exitCheckEffect?: (ctx: CheckEffectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.clear`.
     * @param ctx the parse tree
     */
    enterClear?: (ctx: ClearContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.clear`.
     * @param ctx the parse tree
     */
    exitClear?: (ctx: ClearContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.clearMenu`.
     * @param ctx the parse tree
     */
    enterClearMenu?: (ctx: ClearMenuContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.clearMenu`.
     * @param ctx the parse tree
     */
    exitClearMenu?: (ctx: ClearMenuContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.clearTable`.
     * @param ctx the parse tree
     */
    enterClearTable?: (ctx: ClearTableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.clearTable`.
     * @param ctx the parse tree
     */
    exitClearTable?: (ctx: ClearTableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.closeLocker`.
     * @param ctx the parse tree
     */
    enterCloseLocker?: (ctx: CloseLockerContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.closeLocker`.
     * @param ctx the parse tree
     */
    exitCloseLocker?: (ctx: CloseLockerContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.cmgr`.
     * @param ctx the parse tree
     */
    enterCmgr?: (ctx: CmgrContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.cmgr`.
     * @param ctx the parse tree
     */
    exitCmgr?: (ctx: CmgrContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.compareItemCreature`.
     * @param ctx the parse tree
     */
    enterCompareItemCreature?: (ctx: CompareItemCreatureContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.compareItemCreature`.
     * @param ctx the parse tree
     */
    exitCompareItemCreature?: (ctx: CompareItemCreatureContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.compareItemEvent`.
     * @param ctx the parse tree
     */
    enterCompareItemEvent?: (ctx: CompareItemEventContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.compareItemEvent`.
     * @param ctx the parse tree
     */
    exitCompareItemEvent?: (ctx: CompareItemEventContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.compareItemObject`.
     * @param ctx the parse tree
     */
    enterCompareItemObject?: (ctx: CompareItemObjectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.compareItemObject`.
     * @param ctx the parse tree
     */
    exitCompareItemObject?: (ctx: CompareItemObjectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.contribute`.
     * @param ctx the parse tree
     */
    enterContribute?: (ctx: ContributeContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.contribute`.
     * @param ctx the parse tree
     */
    exitContribute?: (ctx: ContributeContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.copyCreature`.
     * @param ctx the parse tree
     */
    enterCopyCreature?: (ctx: CopyCreatureContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.copyCreature`.
     * @param ctx the parse tree
     */
    exitCopyCreature?: (ctx: CopyCreatureContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.copyEvent`.
     * @param ctx the parse tree
     */
    enterCopyEvent?: (ctx: CopyEventContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.copyEvent`.
     * @param ctx the parse tree
     */
    exitCopyEvent?: (ctx: CopyEventContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.copyObject`.
     * @param ctx the parse tree
     */
    enterCopyObject?: (ctx: CopyObjectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.copyObject`.
     * @param ctx the parse tree
     */
    exitCopyObject?: (ctx: CopyObjectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.create`.
     * @param ctx the parse tree
     */
    enterCreate?: (ctx: CreateContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.create`.
     * @param ctx the parse tree
     */
    exitCreate?: (ctx: CreateContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.createItem`.
     * @param ctx the parse tree
     */
    enterCreateItem?: (ctx: CreateItemContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.createItem`.
     * @param ctx the parse tree
     */
    exitCreateItem?: (ctx: CreateItemContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.createRoom`.
     * @param ctx the parse tree
     */
    enterCreateRoom?: (ctx: CreateRoomContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.createRoom`.
     * @param ctx the parse tree
     */
    exitCreateRoom?: (ctx: CreateRoomContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.createTable`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.createTable`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.createText`.
     * @param ctx the parse tree
     */
    enterCreateText?: (ctx: CreateTextContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.createText`.
     * @param ctx the parse tree
     */
    exitCreateText?: (ctx: CreateTextContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.critical`.
     * @param ctx the parse tree
     */
    enterCritical?: (ctx: CriticalContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.critical`.
     * @param ctx the parse tree
     */
    exitCritical?: (ctx: CriticalContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.decodeAttack`.
     * @param ctx the parse tree
     */
    enterDecodeAttack?: (ctx: DecodeAttackContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.decodeAttack`.
     * @param ctx the parse tree
     */
    exitDecodeAttack?: (ctx: DecodeAttackContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.deleteTable`.
     * @param ctx the parse tree
     */
    enterDeleteTable?: (ctx: DeleteTableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.deleteTable`.
     * @param ctx the parse tree
     */
    exitDeleteTable?: (ctx: DeleteTableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.deploy`.
     * @param ctx the parse tree
     */
    enterDeploy?: (ctx: DeployContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.deploy`.
     * @param ctx the parse tree
     */
    exitDeploy?: (ctx: DeployContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.dirAdd`.
     * @param ctx the parse tree
     */
    enterDirAdd?: (ctx: DirAddContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.dirAdd`.
     * @param ctx the parse tree
     */
    exitDirAdd?: (ctx: DirAddContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.dirSend`.
     * @param ctx the parse tree
     */
    enterDirSend?: (ctx: DirSendContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.dirSend`.
     * @param ctx the parse tree
     */
    exitDirSend?: (ctx: DirSendContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.doCreate`.
     * @param ctx the parse tree
     */
    enterDoCreate?: (ctx: DoCreateContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.doCreate`.
     * @param ctx the parse tree
     */
    exitDoCreate?: (ctx: DoCreateContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.doLook`.
     * @param ctx the parse tree
     */
    enterDoLook?: (ctx: DoLookContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.doLook`.
     * @param ctx the parse tree
     */
    exitDoLook?: (ctx: DoLookContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.drop`.
     * @param ctx the parse tree
     */
    enterDrop?: (ctx: DropContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.drop`.
     * @param ctx the parse tree
     */
    exitDrop?: (ctx: DropContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.encodeAttack`.
     * @param ctx the parse tree
     */
    enterEncodeAttack?: (ctx: EncodeAttackContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.encodeAttack`.
     * @param ctx the parse tree
     */
    exitEncodeAttack?: (ctx: EncodeAttackContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.end2Effect`.
     * @param ctx the parse tree
     */
    enterEnd2Effect?: (ctx: End2EffectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.end2Effect`.
     * @param ctx the parse tree
     */
    exitEnd2Effect?: (ctx: End2EffectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.endEffect`.
     * @param ctx the parse tree
     */
    enterEndEffect?: (ctx: EndEffectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.endEffect`.
     * @param ctx the parse tree
     */
    exitEndEffect?: (ctx: EndEffectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.endNEffect`.
     * @param ctx the parse tree
     */
    enterEndNEffect?: (ctx: EndNEffectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.endNEffect`.
     * @param ctx the parse tree
     */
    exitEndNEffect?: (ctx: EndNEffectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.expand`.
     * @param ctx the parse tree
     */
    enterExpand?: (ctx: ExpandContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.expand`.
     * @param ctx the parse tree
     */
    exitExpand?: (ctx: ExpandContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.fastpush`.
     * @param ctx the parse tree
     */
    enterFastpush?: (ctx: FastpushContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.fastpush`.
     * @param ctx the parse tree
     */
    exitFastpush?: (ctx: FastpushContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.feMisc`.
     * @param ctx the parse tree
     */
    enterFeMisc?: (ctx: FeMiscContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.feMisc`.
     * @param ctx the parse tree
     */
    exitFeMisc?: (ctx: FeMiscContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.feUpdate`.
     * @param ctx the parse tree
     */
    enterFeUpdate?: (ctx: FeUpdateContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.feUpdate`.
     * @param ctx the parse tree
     */
    exitFeUpdate?: (ctx: FeUpdateContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.fillTable`.
     * @param ctx the parse tree
     */
    enterFillTable?: (ctx: FillTableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.fillTable`.
     * @param ctx the parse tree
     */
    exitFillTable?: (ctx: FillTableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.gather`.
     * @param ctx the parse tree
     */
    enterGather?: (ctx: GatherContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.gather`.
     * @param ctx the parse tree
     */
    exitGather?: (ctx: GatherContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.gatherFirst`.
     * @param ctx the parse tree
     */
    enterGatherFirst?: (ctx: GatherFirstContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.gatherFirst`.
     * @param ctx the parse tree
     */
    exitGatherFirst?: (ctx: GatherFirstContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.gatherFirstRoom`.
     * @param ctx the parse tree
     */
    enterGatherFirstRoom?: (ctx: GatherFirstRoomContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.gatherFirstRoom`.
     * @param ctx the parse tree
     */
    exitGatherFirstRoom?: (ctx: GatherFirstRoomContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.gatherNext`.
     * @param ctx the parse tree
     */
    enterGatherNext?: (ctx: GatherNextContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.gatherNext`.
     * @param ctx the parse tree
     */
    exitGatherNext?: (ctx: GatherNextContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.gatherNextRoom`.
     * @param ctx the parse tree
     */
    enterGatherNextRoom?: (ctx: GatherNextRoomContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.gatherNextRoom`.
     * @param ctx the parse tree
     */
    exitGatherNextRoom?: (ctx: GatherNextRoomContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.gatherPlayer`.
     * @param ctx the parse tree
     */
    enterGatherPlayer?: (ctx: GatherPlayerContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.gatherPlayer`.
     * @param ctx the parse tree
     */
    exitGatherPlayer?: (ctx: GatherPlayerContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.getContributors`.
     * @param ctx the parse tree
     */
    enterGetContributors?: (ctx: GetContributorsContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.getContributors`.
     * @param ctx the parse tree
     */
    exitGetContributors?: (ctx: GetContributorsContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.getIndexOf`.
     * @param ctx the parse tree
     */
    enterGetIndexOf?: (ctx: GetIndexOfContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.getIndexOf`.
     * @param ctx the parse tree
     */
    exitGetIndexOf?: (ctx: GetIndexOfContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.getMax`.
     * @param ctx the parse tree
     */
    enterGetMax?: (ctx: GetMaxContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.getMax`.
     * @param ctx the parse tree
     */
    exitGetMax?: (ctx: GetMaxContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.getNameOf`.
     * @param ctx the parse tree
     */
    enterGetNameOf?: (ctx: GetNameOfContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.getNameOf`.
     * @param ctx the parse tree
     */
    exitGetNameOf?: (ctx: GetNameOfContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.getPs`.
     * @param ctx the parse tree
     */
    enterGetPs?: (ctx: GetPsContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.getPs`.
     * @param ctx the parse tree
     */
    exitGetPs?: (ctx: GetPsContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.getTable`.
     * @param ctx the parse tree
     */
    enterGetTable?: (ctx: GetTableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.getTable`.
     * @param ctx the parse tree
     */
    exitGetTable?: (ctx: GetTableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.getTextCommand`.
     * @param ctx the parse tree
     */
    enterGetTextCommand?: (ctx: GetTextCommandContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.getTextCommand`.
     * @param ctx the parse tree
     */
    exitGetTextCommand?: (ctx: GetTextCommandContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.getWatch`.
     * @param ctx the parse tree
     */
    enterGetWatch?: (ctx: GetWatchContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.getWatch`.
     * @param ctx the parse tree
     */
    exitGetWatch?: (ctx: GetWatchContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.glue`.
     * @param ctx the parse tree
     */
    enterGlue?: (ctx: GlueContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.glue`.
     * @param ctx the parse tree
     */
    exitGlue?: (ctx: GlueContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.goto`.
     * @param ctx the parse tree
     */
    enterGoto?: (ctx: GotoContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.goto`.
     * @param ctx the parse tree
     */
    exitGoto?: (ctx: GotoContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.hash1`.
     * @param ctx the parse tree
     */
    enterHash1?: (ctx: Hash1Context) => void;
    /**
     * Exit a parse tree produced by `GslParser.hash1`.
     * @param ctx the parse tree
     */
    exitHash1?: (ctx: Hash1Context) => void;
    /**
     * Enter a parse tree produced by `GslParser.hash2`.
     * @param ctx the parse tree
     */
    enterHash2?: (ctx: Hash2Context) => void;
    /**
     * Exit a parse tree produced by `GslParser.hash2`.
     * @param ctx the parse tree
     */
    exitHash2?: (ctx: Hash2Context) => void;
    /**
     * Enter a parse tree produced by `GslParser.heal`.
     * @param ctx the parse tree
     */
    enterHeal?: (ctx: HealContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.heal`.
     * @param ctx the parse tree
     */
    exitHeal?: (ctx: HealContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.healP`.
     * @param ctx the parse tree
     */
    enterHealP?: (ctx: HealPContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.healP`.
     * @param ctx the parse tree
     */
    exitHealP?: (ctx: HealPContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.hurt`.
     * @param ctx the parse tree
     */
    enterHurt?: (ctx: HurtContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.hurt`.
     * @param ctx the parse tree
     */
    exitHurt?: (ctx: HurtContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.hush`.
     * @param ctx the parse tree
     */
    enterHush?: (ctx: HushContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.hush`.
     * @param ctx the parse tree
     */
    exitHush?: (ctx: HushContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.inPhrase`.
     * @param ctx the parse tree
     */
    enterInPhrase?: (ctx: InPhraseContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.inPhrase`.
     * @param ctx the parse tree
     */
    exitInPhrase?: (ctx: InPhraseContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.index`.
     * @param ctx the parse tree
     */
    enterIndex?: (ctx: IndexContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.index`.
     * @param ctx the parse tree
     */
    exitIndex?: (ctx: IndexContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.infoItem`.
     * @param ctx the parse tree
     */
    enterInfoItem?: (ctx: InfoItemContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.infoItem`.
     * @param ctx the parse tree
     */
    exitInfoItem?: (ctx: InfoItemContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.infoProfile`.
     * @param ctx the parse tree
     */
    enterInfoProfile?: (ctx: InfoProfileContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.infoProfile`.
     * @param ctx the parse tree
     */
    exitInfoProfile?: (ctx: InfoProfileContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.infoScript`.
     * @param ctx the parse tree
     */
    enterInfoScript?: (ctx: InfoScriptContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.infoScript`.
     * @param ctx the parse tree
     */
    exitInfoScript?: (ctx: InfoScriptContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.infoTable`.
     * @param ctx the parse tree
     */
    enterInfoTable?: (ctx: InfoTableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.infoTable`.
     * @param ctx the parse tree
     */
    exitInfoTable?: (ctx: InfoTableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.infoVarField`.
     * @param ctx the parse tree
     */
    enterInfoVarField?: (ctx: InfoVarFieldContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.infoVarField`.
     * @param ctx the parse tree
     */
    exitInfoVarField?: (ctx: InfoVarFieldContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.infoVerb`.
     * @param ctx the parse tree
     */
    enterInfoVerb?: (ctx: InfoVerbContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.infoVerb`.
     * @param ctx the parse tree
     */
    exitInfoVerb?: (ctx: InfoVerbContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.injure`.
     * @param ctx the parse tree
     */
    enterInjure?: (ctx: InjureContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.injure`.
     * @param ctx the parse tree
     */
    exitInjure?: (ctx: InjureContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.isInjured`.
     * @param ctx the parse tree
     */
    enterIsInjured?: (ctx: IsInjuredContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.isInjured`.
     * @param ctx the parse tree
     */
    exitIsInjured?: (ctx: IsInjuredContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.isNameFree`.
     * @param ctx the parse tree
     */
    enterIsNameFree?: (ctx: IsNameFreeContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.isNameFree`.
     * @param ctx the parse tree
     */
    exitIsNameFree?: (ctx: IsNameFreeContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.itemSnapshot`.
     * @param ctx the parse tree
     */
    enterItemSnapshot?: (ctx: ItemSnapshotContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.itemSnapshot`.
     * @param ctx the parse tree
     */
    exitItemSnapshot?: (ctx: ItemSnapshotContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.kill`.
     * @param ctx the parse tree
     */
    enterKill?: (ctx: KillContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.kill`.
     * @param ctx the parse tree
     */
    exitKill?: (ctx: KillContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.killAllNp`.
     * @param ctx the parse tree
     */
    enterKillAllNp?: (ctx: KillAllNpContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.killAllNp`.
     * @param ctx the parse tree
     */
    exitKillAllNp?: (ctx: KillAllNpContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.label`.
     * @param ctx the parse tree
     */
    enterLabel?: (ctx: LabelContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.label`.
     * @param ctx the parse tree
     */
    exitLabel?: (ctx: LabelContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.launch`.
     * @param ctx the parse tree
     */
    enterLaunch?: (ctx: LaunchContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.launch`.
     * @param ctx the parse tree
     */
    exitLaunch?: (ctx: LaunchContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.launchURL`.
     * @param ctx the parse tree
     */
    enterLaunchURL?: (ctx: LaunchURLContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.launchURL`.
     * @param ctx the parse tree
     */
    exitLaunchURL?: (ctx: LaunchURLContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.load`.
     * @param ctx the parse tree
     */
    enterLoad?: (ctx: LoadContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.load`.
     * @param ctx the parse tree
     */
    exitLoad?: (ctx: LoadContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.loadCharData`.
     * @param ctx the parse tree
     */
    enterLoadCharData?: (ctx: LoadCharDataContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.loadCharData`.
     * @param ctx the parse tree
     */
    exitLoadCharData?: (ctx: LoadCharDataContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logMsg`.
     * @param ctx the parse tree
     */
    enterLogMsg?: (ctx: LogMsgContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logMsg`.
     * @param ctx the parse tree
     */
    exitLogMsg?: (ctx: LogMsgContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logStart`.
     * @param ctx the parse tree
     */
    enterLogStart?: (ctx: LogStartContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logStart`.
     * @param ctx the parse tree
     */
    exitLogStart?: (ctx: LogStartContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logSubmit`.
     * @param ctx the parse tree
     */
    enterLogSubmit?: (ctx: LogSubmitContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logSubmit`.
     * @param ctx the parse tree
     */
    exitLogSubmit?: (ctx: LogSubmitContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logTargetAccount`.
     * @param ctx the parse tree
     */
    enterLogTargetAccount?: (ctx: LogTargetAccountContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logTargetAccount`.
     * @param ctx the parse tree
     */
    exitLogTargetAccount?: (ctx: LogTargetAccountContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logTargetIndex`.
     * @param ctx the parse tree
     */
    enterLogTargetIndex?: (ctx: LogTargetIndexContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logTargetIndex`.
     * @param ctx the parse tree
     */
    exitLogTargetIndex?: (ctx: LogTargetIndexContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logTargetName`.
     * @param ctx the parse tree
     */
    enterLogTargetName?: (ctx: LogTargetNameContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logTargetName`.
     * @param ctx the parse tree
     */
    exitLogTargetName?: (ctx: LogTargetNameContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logTargetOther`.
     * @param ctx the parse tree
     */
    enterLogTargetOther?: (ctx: LogTargetOtherContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logTargetOther`.
     * @param ctx the parse tree
     */
    exitLogTargetOther?: (ctx: LogTargetOtherContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logTargetUid`.
     * @param ctx the parse tree
     */
    enterLogTargetUid?: (ctx: LogTargetUidContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logTargetUid`.
     * @param ctx the parse tree
     */
    exitLogTargetUid?: (ctx: LogTargetUidContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logText`.
     * @param ctx the parse tree
     */
    enterLogText?: (ctx: LogTextContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logText`.
     * @param ctx the parse tree
     */
    exitLogText?: (ctx: LogTextContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logToIndex`.
     * @param ctx the parse tree
     */
    enterLogToIndex?: (ctx: LogToIndexContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logToIndex`.
     * @param ctx the parse tree
     */
    exitLogToIndex?: (ctx: LogToIndexContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.logto`.
     * @param ctx the parse tree
     */
    enterLogto?: (ctx: LogtoContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.logto`.
     * @param ctx the parse tree
     */
    exitLogto?: (ctx: LogtoContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.lookRoom`.
     * @param ctx the parse tree
     */
    enterLookRoom?: (ctx: LookRoomContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.lookRoom`.
     * @param ctx the parse tree
     */
    exitLookRoom?: (ctx: LookRoomContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.lowercase`.
     * @param ctx the parse tree
     */
    enterLowercase?: (ctx: LowercaseContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.lowercase`.
     * @param ctx the parse tree
     */
    exitLowercase?: (ctx: LowercaseContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.matchMarker`.
     * @param ctx the parse tree
     */
    enterMatchMarker?: (ctx: MatchMarkerContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.matchMarker`.
     * @param ctx the parse tree
     */
    exitMatchMarker?: (ctx: MatchMarkerContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.matchSpell`.
     * @param ctx the parse tree
     */
    enterMatchSpell?: (ctx: MatchSpellContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.matchSpell`.
     * @param ctx the parse tree
     */
    exitMatchSpell?: (ctx: MatchSpellContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.mmgr`.
     * @param ctx the parse tree
     */
    enterMmgr?: (ctx: MmgrContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.mmgr`.
     * @param ctx the parse tree
     */
    exitMmgr?: (ctx: MmgrContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.move`.
     * @param ctx the parse tree
     */
    enterMove?: (ctx: MoveContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.move`.
     * @param ctx the parse tree
     */
    exitMove?: (ctx: MoveContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msg`.
     * @param ctx the parse tree
     */
    enterMsg?: (ctx: MsgContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msg`.
     * @param ctx the parse tree
     */
    exitMsg?: (ctx: MsgContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgGm`.
     * @param ctx the parse tree
     */
    enterMsgGm?: (ctx: MsgGmContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgGm`.
     * @param ctx the parse tree
     */
    exitMsgGm?: (ctx: MsgGmContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgfsys`.
     * @param ctx the parse tree
     */
    enterMsgfsys?: (ctx: MsgfsysContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgfsys`.
     * @param ctx the parse tree
     */
    exitMsgfsys?: (ctx: MsgfsysContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgp`.
     * @param ctx the parse tree
     */
    enterMsgp?: (ctx: MsgpContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgp`.
     * @param ctx the parse tree
     */
    exitMsgp?: (ctx: MsgpContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgr`.
     * @param ctx the parse tree
     */
    enterMsgr?: (ctx: MsgrContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgr`.
     * @param ctx the parse tree
     */
    exitMsgr?: (ctx: MsgrContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgrgm`.
     * @param ctx the parse tree
     */
    enterMsgrgm?: (ctx: MsgrgmContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgrgm`.
     * @param ctx the parse tree
     */
    exitMsgrgm?: (ctx: MsgrgmContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgrx2`.
     * @param ctx the parse tree
     */
    enterMsgrx2?: (ctx: Msgrx2Context) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgrx2`.
     * @param ctx the parse tree
     */
    exitMsgrx2?: (ctx: Msgrx2Context) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgrxp`.
     * @param ctx the parse tree
     */
    enterMsgrxp?: (ctx: MsgrxpContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgrxp`.
     * @param ctx the parse tree
     */
    exitMsgrxp?: (ctx: MsgrxpContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgs`.
     * @param ctx the parse tree
     */
    enterMsgs?: (ctx: MsgsContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgs`.
     * @param ctx the parse tree
     */
    exitMsgs?: (ctx: MsgsContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgsgm`.
     * @param ctx the parse tree
     */
    enterMsgsgm?: (ctx: MsgsgmContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgsgm`.
     * @param ctx the parse tree
     */
    exitMsgsgm?: (ctx: MsgsgmContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgsys`.
     * @param ctx the parse tree
     */
    enterMsgsys?: (ctx: MsgsysContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgsys`.
     * @param ctx the parse tree
     */
    exitMsgsys?: (ctx: MsgsysContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.msgw`.
     * @param ctx the parse tree
     */
    enterMsgw?: (ctx: MsgwContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.msgw`.
     * @param ctx the parse tree
     */
    exitMsgw?: (ctx: MsgwContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.nameEnd`.
     * @param ctx the parse tree
     */
    enterNameEnd?: (ctx: NameEndContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.nameEnd`.
     * @param ctx the parse tree
     */
    exitNameEnd?: (ctx: NameEndContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.nameStart`.
     * @param ctx the parse tree
     */
    enterNameStart?: (ctx: NameStartContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.nameStart`.
     * @param ctx the parse tree
     */
    exitNameStart?: (ctx: NameStartContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.nextEffect`.
     * @param ctx the parse tree
     */
    enterNextEffect?: (ctx: NextEffectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.nextEffect`.
     * @param ctx the parse tree
     */
    exitNextEffect?: (ctx: NextEffectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.nextNode`.
     * @param ctx the parse tree
     */
    enterNextNode?: (ctx: NextNodeContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.nextNode`.
     * @param ctx the parse tree
     */
    exitNextNode?: (ctx: NextNodeContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.openLocker`.
     * @param ctx the parse tree
     */
    enterOpenLocker?: (ctx: OpenLockerContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.openLocker`.
     * @param ctx the parse tree
     */
    exitOpenLocker?: (ctx: OpenLockerContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.outPhrase`.
     * @param ctx the parse tree
     */
    enterOutPhrase?: (ctx: OutPhraseContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.outPhrase`.
     * @param ctx the parse tree
     */
    exitOutPhrase?: (ctx: OutPhraseContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.parse`.
     * @param ctx the parse tree
     */
    enterParse?: (ctx: ParseContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.parse`.
     * @param ctx the parse tree
     */
    exitParse?: (ctx: ParseContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.parseDecimal`.
     * @param ctx the parse tree
     */
    enterParseDecimal?: (ctx: ParseDecimalContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.parseDecimal`.
     * @param ctx the parse tree
     */
    exitParseDecimal?: (ctx: ParseDecimalContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.pauseEffects`.
     * @param ctx the parse tree
     */
    enterPauseEffects?: (ctx: PauseEffectsContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.pauseEffects`.
     * @param ctx the parse tree
     */
    exitPauseEffects?: (ctx: PauseEffectsContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.pid`.
     * @param ctx the parse tree
     */
    enterPid?: (ctx: PidContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.pid`.
     * @param ctx the parse tree
     */
    exitPid?: (ctx: PidContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.playerCount`.
     * @param ctx the parse tree
     */
    enterPlayerCount?: (ctx: PlayerCountContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.playerCount`.
     * @param ctx the parse tree
     */
    exitPlayerCount?: (ctx: PlayerCountContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.prempt`.
     * @param ctx the parse tree
     */
    enterPrempt?: (ctx: PremptContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.prempt`.
     * @param ctx the parse tree
     */
    exitPrempt?: (ctx: PremptContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.push`.
     * @param ctx the parse tree
     */
    enterPush?: (ctx: PushContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.push`.
     * @param ctx the parse tree
     */
    exitPush?: (ctx: PushContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.random`.
     * @param ctx the parse tree
     */
    enterRandom?: (ctx: RandomContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.random`.
     * @param ctx the parse tree
     */
    exitRandom?: (ctx: RandomContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.rem2effect`.
     * @param ctx the parse tree
     */
    enterRem2effect?: (ctx: Rem2effectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.rem2effect`.
     * @param ctx the parse tree
     */
    exitRem2effect?: (ctx: Rem2effectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.remEffect`.
     * @param ctx the parse tree
     */
    enterRemEffect?: (ctx: RemEffectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.remEffect`.
     * @param ctx the parse tree
     */
    exitRemEffect?: (ctx: RemEffectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.remMenuItem`.
     * @param ctx the parse tree
     */
    enterRemMenuItem?: (ctx: RemMenuItemContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.remMenuItem`.
     * @param ctx the parse tree
     */
    exitRemMenuItem?: (ctx: RemMenuItemContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.remNEffect`.
     * @param ctx the parse tree
     */
    enterRemNEffect?: (ctx: RemNEffectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.remNEffect`.
     * @param ctx the parse tree
     */
    exitRemNEffect?: (ctx: RemNEffectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.remove`.
     * @param ctx the parse tree
     */
    enterRemove?: (ctx: RemoveContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.remove`.
     * @param ctx the parse tree
     */
    exitRemove?: (ctx: RemoveContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.removeVarField`.
     * @param ctx the parse tree
     */
    enterRemoveVarField?: (ctx: RemoveVarFieldContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.removeVarField`.
     * @param ctx the parse tree
     */
    exitRemoveVarField?: (ctx: RemoveVarFieldContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.removeVarGroup`.
     * @param ctx the parse tree
     */
    enterRemoveVarGroup?: (ctx: RemoveVarGroupContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.removeVarGroup`.
     * @param ctx the parse tree
     */
    exitRemoveVarGroup?: (ctx: RemoveVarGroupContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.resist`.
     * @param ctx the parse tree
     */
    enterResist?: (ctx: ResistContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.resist`.
     * @param ctx the parse tree
     */
    exitResist?: (ctx: ResistContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.resizeTable`.
     * @param ctx the parse tree
     */
    enterResizeTable?: (ctx: ResizeTableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.resizeTable`.
     * @param ctx the parse tree
     */
    exitResizeTable?: (ctx: ResizeTableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.restoreFields`.
     * @param ctx the parse tree
     */
    enterRestoreFields?: (ctx: RestoreFieldsContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.restoreFields`.
     * @param ctx the parse tree
     */
    exitRestoreFields?: (ctx: RestoreFieldsContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.resumeEffects`.
     * @param ctx the parse tree
     */
    enterResumeEffects?: (ctx: ResumeEffectsContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.resumeEffects`.
     * @param ctx the parse tree
     */
    exitResumeEffects?: (ctx: ResumeEffectsContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.rmCall`.
     * @param ctx the parse tree
     */
    enterRmCall?: (ctx: RmCallContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.rmCall`.
     * @param ctx the parse tree
     */
    exitRmCall?: (ctx: RmCallContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.rndDir`.
     * @param ctx the parse tree
     */
    enterRndDir?: (ctx: RndDirContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.rndDir`.
     * @param ctx the parse tree
     */
    exitRndDir?: (ctx: RndDirContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.rndExit`.
     * @param ctx the parse tree
     */
    enterRndExit?: (ctx: RndExitContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.rndExit`.
     * @param ctx the parse tree
     */
    exitRndExit?: (ctx: RndExitContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.rndPlyr`.
     * @param ctx the parse tree
     */
    enterRndPlyr?: (ctx: RndPlyrContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.rndPlyr`.
     * @param ctx the parse tree
     */
    exitRndPlyr?: (ctx: RndPlyrContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.rollIn`.
     * @param ctx the parse tree
     */
    enterRollIn?: (ctx: RollInContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.rollIn`.
     * @param ctx the parse tree
     */
    exitRollIn?: (ctx: RollInContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.roomEnd`.
     * @param ctx the parse tree
     */
    enterRoomEnd?: (ctx: RoomEndContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.roomEnd`.
     * @param ctx the parse tree
     */
    exitRoomEnd?: (ctx: RoomEndContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.roomStart`.
     * @param ctx the parse tree
     */
    enterRoomStart?: (ctx: RoomStartContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.roomStart`.
     * @param ctx the parse tree
     */
    exitRoomStart?: (ctx: RoomStartContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.rootExistOf`.
     * @param ctx the parse tree
     */
    enterRootExistOf?: (ctx: RootExistOfContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.rootExistOf`.
     * @param ctx the parse tree
     */
    exitRootExistOf?: (ctx: RootExistOfContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.roundtime`.
     * @param ctx the parse tree
     */
    enterRoundtime?: (ctx: RoundtimeContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.roundtime`.
     * @param ctx the parse tree
     */
    exitRoundtime?: (ctx: RoundtimeContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.saveFields`.
     * @param ctx the parse tree
     */
    enterSaveFields?: (ctx: SaveFieldsContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.saveFields`.
     * @param ctx the parse tree
     */
    exitSaveFields?: (ctx: SaveFieldsContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.scan`.
     * @param ctx the parse tree
     */
    enterScan?: (ctx: ScanContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.scan`.
     * @param ctx the parse tree
     */
    exitScan?: (ctx: ScanContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.scanEffect`.
     * @param ctx the parse tree
     */
    enterScanEffect?: (ctx: ScanEffectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.scanEffect`.
     * @param ctx the parse tree
     */
    exitScanEffect?: (ctx: ScanEffectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.set`.
     * @param ctx the parse tree
     */
    enterSet?: (ctx: SetContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.set`.
     * @param ctx the parse tree
     */
    exitSet?: (ctx: SetContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.setName`.
     * @param ctx the parse tree
     */
    enterSetName?: (ctx: SetNameContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.setName`.
     * @param ctx the parse tree
     */
    exitSetName?: (ctx: SetNameContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.setTable`.
     * @param ctx the parse tree
     */
    enterSetTable?: (ctx: SetTableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.setTable`.
     * @param ctx the parse tree
     */
    exitSetTable?: (ctx: SetTableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.setText`.
     * @param ctx the parse tree
     */
    enterSetText?: (ctx: SetTextContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.setText`.
     * @param ctx the parse tree
     */
    exitSetText?: (ctx: SetTextContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.sparse`.
     * @param ctx the parse tree
     */
    enterSparse?: (ctx: SparseContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.sparse`.
     * @param ctx the parse tree
     */
    exitSparse?: (ctx: SparseContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.stopCommand`.
     * @param ctx the parse tree
     */
    enterStopCommand?: (ctx: StopCommandContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.stopCommand`.
     * @param ctx the parse tree
     */
    exitStopCommand?: (ctx: StopCommandContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.storeCharData`.
     * @param ctx the parse tree
     */
    enterStoreCharData?: (ctx: StoreCharDataContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.storeCharData`.
     * @param ctx the parse tree
     */
    exitStoreCharData?: (ctx: StoreCharDataContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.stov`.
     * @param ctx the parse tree
     */
    enterStov?: (ctx: StovContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.stov`.
     * @param ctx the parse tree
     */
    exitStov?: (ctx: StovContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.substring`.
     * @param ctx the parse tree
     */
    enterSubstring?: (ctx: SubstringContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.substring`.
     * @param ctx the parse tree
     */
    exitSubstring?: (ctx: SubstringContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.tableInfo`.
     * @param ctx the parse tree
     */
    enterTableInfo?: (ctx: TableInfoContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.tableInfo`.
     * @param ctx the parse tree
     */
    exitTableInfo?: (ctx: TableInfoContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.tellWeb`.
     * @param ctx the parse tree
     */
    enterTellWeb?: (ctx: TellWebContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.tellWeb`.
     * @param ctx the parse tree
     */
    exitTellWeb?: (ctx: TellWebContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.test2effect`.
     * @param ctx the parse tree
     */
    enterTest2effect?: (ctx: Test2effectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.test2effect`.
     * @param ctx the parse tree
     */
    exitTest2effect?: (ctx: Test2effectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.testEffect`.
     * @param ctx the parse tree
     */
    enterTestEffect?: (ctx: TestEffectContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.testEffect`.
     * @param ctx the parse tree
     */
    exitTestEffect?: (ctx: TestEffectContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.test_assert`.
     * @param ctx the parse tree
     */
    enterTest_assert?: (ctx: Test_assertContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.test_assert`.
     * @param ctx the parse tree
     */
    exitTest_assert?: (ctx: Test_assertContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.tparse`.
     * @param ctx the parse tree
     */
    enterTparse?: (ctx: TparseContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.tparse`.
     * @param ctx the parse tree
     */
    exitTparse?: (ctx: TparseContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.underOff`.
     * @param ctx the parse tree
     */
    enterUnderOff?: (ctx: UnderOffContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.underOff`.
     * @param ctx the parse tree
     */
    exitUnderOff?: (ctx: UnderOffContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.underOn`.
     * @param ctx the parse tree
     */
    enterUnderOn?: (ctx: UnderOnContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.underOn`.
     * @param ctx the parse tree
     */
    exitUnderOn?: (ctx: UnderOnContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.unload`.
     * @param ctx the parse tree
     */
    enterUnload?: (ctx: UnloadContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.unload`.
     * @param ctx the parse tree
     */
    exitUnload?: (ctx: UnloadContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.updateSrvrStuff`.
     * @param ctx the parse tree
     */
    enterUpdateSrvrStuff?: (ctx: UpdateSrvrStuffContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.updateSrvrStuff`.
     * @param ctx the parse tree
     */
    exitUpdateSrvrStuff?: (ctx: UpdateSrvrStuffContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.updateTable`.
     * @param ctx the parse tree
     */
    enterUpdateTable?: (ctx: UpdateTableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.updateTable`.
     * @param ctx the parse tree
     */
    exitUpdateTable?: (ctx: UpdateTableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.uppercase`.
     * @param ctx the parse tree
     */
    enterUppercase?: (ctx: UppercaseContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.uppercase`.
     * @param ctx the parse tree
     */
    exitUppercase?: (ctx: UppercaseContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.vtos`.
     * @param ctx the parse tree
     */
    enterVtos?: (ctx: VtosContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.vtos`.
     * @param ctx the parse tree
     */
    exitVtos?: (ctx: VtosContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.watch`.
     * @param ctx the parse tree
     */
    enterWatch?: (ctx: WatchContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.watch`.
     * @param ctx the parse tree
     */
    exitWatch?: (ctx: WatchContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.where`.
     * @param ctx the parse tree
     */
    enterWhere?: (ctx: WhereContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.where`.
     * @param ctx the parse tree
     */
    exitWhere?: (ctx: WhereContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.whereAt`.
     * @param ctx the parse tree
     */
    enterWhereAt?: (ctx: WhereAtContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.whereAt`.
     * @param ctx the parse tree
     */
    exitWhereAt?: (ctx: WhereAtContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.whereItem`.
     * @param ctx the parse tree
     */
    enterWhereItem?: (ctx: WhereItemContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.whereItem`.
     * @param ctx the parse tree
     */
    exitWhereItem?: (ctx: WhereItemContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.writeChar`.
     * @param ctx the parse tree
     */
    enterWriteChar?: (ctx: WriteCharContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.writeChar`.
     * @param ctx the parse tree
     */
    exitWriteChar?: (ctx: WriteCharContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpression?: (ctx: ValueExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpression?: (ctx: ValueExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.negativeNumber`.
     * @param ctx the parse tree
     */
    enterNegativeNumber?: (ctx: NegativeNumberContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.negativeNumber`.
     * @param ctx the parse tree
     */
    exitNegativeNumber?: (ctx: NegativeNumberContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.valueOperation`.
     * @param ctx the parse tree
     */
    enterValueOperation?: (ctx: ValueOperationContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.valueOperation`.
     * @param ctx the parse tree
     */
    exitValueOperation?: (ctx: ValueOperationContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.stringOperation`.
     * @param ctx the parse tree
     */
    enterStringOperation?: (ctx: StringOperationContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.stringOperation`.
     * @param ctx the parse tree
     */
    exitStringOperation?: (ctx: StringOperationContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.stringExpression`.
     * @param ctx the parse tree
     */
    enterStringExpression?: (ctx: StringExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.stringExpression`.
     * @param ctx the parse tree
     */
    exitStringExpression?: (ctx: StringExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.stringConcatenation`.
     * @param ctx the parse tree
     */
    enterStringConcatenation?: (ctx: StringConcatenationContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.stringConcatenation`.
     * @param ctx the parse tree
     */
    exitStringConcatenation?: (ctx: StringConcatenationContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.identityExpression`.
     * @param ctx the parse tree
     */
    enterIdentityExpression?: (ctx: IdentityExpressionContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.identityExpression`.
     * @param ctx the parse tree
     */
    exitIdentityExpression?: (ctx: IdentityExpressionContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.node`.
     * @param ctx the parse tree
     */
    enterNode?: (ctx: NodeContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.node`.
     * @param ctx the parse tree
     */
    exitNode?: (ctx: NodeContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.numberVariable`.
     * @param ctx the parse tree
     */
    enterNumberVariable?: (ctx: NumberVariableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.numberVariable`.
     * @param ctx the parse tree
     */
    exitNumberVariable?: (ctx: NumberVariableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.stringVariable`.
     * @param ctx the parse tree
     */
    enterStringVariable?: (ctx: StringVariableContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.stringVariable`.
     * @param ctx the parse tree
     */
    exitStringVariable?: (ctx: StringVariableContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.tableReference`.
     * @param ctx the parse tree
     */
    enterTableReference?: (ctx: TableReferenceContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.tableReference`.
     * @param ctx the parse tree
     */
    exitTableReference?: (ctx: TableReferenceContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.tableAddress`.
     * @param ctx the parse tree
     */
    enterTableAddress?: (ctx: TableAddressContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.tableAddress`.
     * @param ctx the parse tree
     */
    exitTableAddress?: (ctx: TableAddressContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.fieldName`.
     * @param ctx the parse tree
     */
    enterFieldName?: (ctx: FieldNameContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.fieldName`.
     * @param ctx the parse tree
     */
    exitFieldName?: (ctx: FieldNameContext) => void;
    /**
     * Enter a parse tree produced by `GslParser.nodeFieldRef`.
     * @param ctx the parse tree
     */
    enterNodeFieldRef?: (ctx: NodeFieldRefContext) => void;
    /**
     * Exit a parse tree produced by `GslParser.nodeFieldRef`.
     * @param ctx the parse tree
     */
    exitNodeFieldRef?: (ctx: NodeFieldRefContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

