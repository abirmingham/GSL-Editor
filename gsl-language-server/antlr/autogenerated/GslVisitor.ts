// Generated from gsl-language-server/antlr/Gsl.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GslParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class GslVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `GslParser.script`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScript?: (ctx: ScriptContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.eol`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEol?: (ctx: EolContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.if`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIf?: (ctx: IfContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.elseIf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElseIf?: (ctx: ElseIfContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.else`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElse?: (ctx: ElseContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.whenStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenStatement?: (ctx: WhenStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.whenCase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenCase?: (ctx: WhenCaseContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.whenCaseDefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenCaseDefault?: (ctx: WhenCaseDefaultContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.loopStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopStatement?: (ctx: LoopStatementContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.earlyPopStop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEarlyPopStop?: (ctx: EarlyPopStopContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.addExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddExpr?: (ctx: AddExprContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.addGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddGroup?: (ctx: AddGroupContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.addMenuItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddMenuItem?: (ctx: AddMenuItemContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.addeffect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddeffect?: (ctx: AddeffectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.altWinOff`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltWinOff?: (ctx: AltWinOffContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.altWinOn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltWinOn?: (ctx: AltWinOnContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.anim`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnim?: (ctx: AnimContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.assert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssert?: (ctx: AssertContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.attack`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttack?: (ctx: AttackContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.bitget`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitget?: (ctx: BitgetContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.bitset`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitset?: (ctx: BitsetContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.boldoff`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoldoff?: (ctx: BoldoffContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.boldon`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoldon?: (ctx: BoldonContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.border`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBorder?: (ctx: BorderContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.bugReport`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBugReport?: (ctx: BugReportContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCall?: (ctx: CallContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.callPS`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallPS?: (ctx: CallPSContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.callmatch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallmatch?: (ctx: CallmatchContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.canDo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCanDo?: (ctx: CanDoContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.checkEffect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheckEffect?: (ctx: CheckEffectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.clear`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClear?: (ctx: ClearContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.clearMenu`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClearMenu?: (ctx: ClearMenuContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.clearTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClearTable?: (ctx: ClearTableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.closeLocker`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCloseLocker?: (ctx: CloseLockerContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.cmgr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCmgr?: (ctx: CmgrContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.compareItemCreature`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompareItemCreature?: (ctx: CompareItemCreatureContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.compareItemEvent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompareItemEvent?: (ctx: CompareItemEventContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.compareItemObject`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompareItemObject?: (ctx: CompareItemObjectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.contribute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContribute?: (ctx: ContributeContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.copyCreature`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyCreature?: (ctx: CopyCreatureContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.copyEvent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyEvent?: (ctx: CopyEventContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.copyObject`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyObject?: (ctx: CopyObjectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate?: (ctx: CreateContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.createItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateItem?: (ctx: CreateItemContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.createRoom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRoom?: (ctx: CreateRoomContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTable?: (ctx: CreateTableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.createText`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateText?: (ctx: CreateTextContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.critical`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCritical?: (ctx: CriticalContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.decodeAttack`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecodeAttack?: (ctx: DecodeAttackContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.deleteTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteTable?: (ctx: DeleteTableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.deploy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeploy?: (ctx: DeployContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.dirAdd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirAdd?: (ctx: DirAddContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.dirSend`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirSend?: (ctx: DirSendContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.doCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoCreate?: (ctx: DoCreateContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.doLook`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoLook?: (ctx: DoLookContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.drop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop?: (ctx: DropContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.encodeAttack`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEncodeAttack?: (ctx: EncodeAttackContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.end2Effect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnd2Effect?: (ctx: End2EffectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.endEffect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEndEffect?: (ctx: EndEffectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.endNEffect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEndNEffect?: (ctx: EndNEffectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.expand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpand?: (ctx: ExpandContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.fastpush`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFastpush?: (ctx: FastpushContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.feMisc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFeMisc?: (ctx: FeMiscContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.feUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFeUpdate?: (ctx: FeUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.fillTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFillTable?: (ctx: FillTableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.gather`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGather?: (ctx: GatherContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.gatherFirst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGatherFirst?: (ctx: GatherFirstContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.gatherFirstRoom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGatherFirstRoom?: (ctx: GatherFirstRoomContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.gatherNext`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGatherNext?: (ctx: GatherNextContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.gatherNextRoom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGatherNextRoom?: (ctx: GatherNextRoomContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.gatherPlayer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGatherPlayer?: (ctx: GatherPlayerContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.getContributors`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetContributors?: (ctx: GetContributorsContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.getIndexOf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetIndexOf?: (ctx: GetIndexOfContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.getMax`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetMax?: (ctx: GetMaxContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.getNameOf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetNameOf?: (ctx: GetNameOfContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.getPs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetPs?: (ctx: GetPsContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.getTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetTable?: (ctx: GetTableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.getTextCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetTextCommand?: (ctx: GetTextCommandContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.getWatch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetWatch?: (ctx: GetWatchContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.glue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGlue?: (ctx: GlueContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.goto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGoto?: (ctx: GotoContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.hash1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash1?: (ctx: Hash1Context) => Result;
    /**
     * Visit a parse tree produced by `GslParser.hash2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash2?: (ctx: Hash2Context) => Result;
    /**
     * Visit a parse tree produced by `GslParser.heal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHeal?: (ctx: HealContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.healP`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHealP?: (ctx: HealPContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.hurt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHurt?: (ctx: HurtContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.hush`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHush?: (ctx: HushContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.inPhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInPhrase?: (ctx: InPhraseContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.index`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex?: (ctx: IndexContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.infoItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInfoItem?: (ctx: InfoItemContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.infoProfile`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInfoProfile?: (ctx: InfoProfileContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.infoScript`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInfoScript?: (ctx: InfoScriptContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.infoTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInfoTable?: (ctx: InfoTableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.infoVarField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInfoVarField?: (ctx: InfoVarFieldContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.infoVerb`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInfoVerb?: (ctx: InfoVerbContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.injure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInjure?: (ctx: InjureContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.isInjured`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsInjured?: (ctx: IsInjuredContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.isNameFree`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsNameFree?: (ctx: IsNameFreeContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.itemSnapshot`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitItemSnapshot?: (ctx: ItemSnapshotContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.kill`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKill?: (ctx: KillContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.killAllNp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKillAllNp?: (ctx: KillAllNpContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.label`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabel?: (ctx: LabelContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.launch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLaunch?: (ctx: LaunchContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.launchURL`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLaunchURL?: (ctx: LaunchURLContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.load`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoad?: (ctx: LoadContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.loadCharData`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadCharData?: (ctx: LoadCharDataContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logMsg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogMsg?: (ctx: LogMsgContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logStart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogStart?: (ctx: LogStartContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logSubmit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogSubmit?: (ctx: LogSubmitContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logTargetAccount`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogTargetAccount?: (ctx: LogTargetAccountContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logTargetIndex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogTargetIndex?: (ctx: LogTargetIndexContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logTargetName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogTargetName?: (ctx: LogTargetNameContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logTargetOther`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogTargetOther?: (ctx: LogTargetOtherContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logTargetUid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogTargetUid?: (ctx: LogTargetUidContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logText`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogText?: (ctx: LogTextContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logToIndex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogToIndex?: (ctx: LogToIndexContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.logto`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogto?: (ctx: LogtoContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.lookRoom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLookRoom?: (ctx: LookRoomContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.lowercase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLowercase?: (ctx: LowercaseContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.matchMarker`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchMarker?: (ctx: MatchMarkerContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.matchSpell`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchSpell?: (ctx: MatchSpellContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.mmgr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMmgr?: (ctx: MmgrContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMove?: (ctx: MoveContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsg?: (ctx: MsgContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgGm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgGm?: (ctx: MsgGmContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgfsys`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgfsys?: (ctx: MsgfsysContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgp?: (ctx: MsgpContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgr?: (ctx: MsgrContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgrgm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgrgm?: (ctx: MsgrgmContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgrx2`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgrx2?: (ctx: Msgrx2Context) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgrxp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgrxp?: (ctx: MsgrxpContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgs?: (ctx: MsgsContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgsgm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgsgm?: (ctx: MsgsgmContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgsys`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgsys?: (ctx: MsgsysContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.msgw`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMsgw?: (ctx: MsgwContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.nameEnd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNameEnd?: (ctx: NameEndContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.nameStart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNameStart?: (ctx: NameStartContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.nextEffect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNextEffect?: (ctx: NextEffectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.nextNode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNextNode?: (ctx: NextNodeContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.openLocker`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpenLocker?: (ctx: OpenLockerContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.outPhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOutPhrase?: (ctx: OutPhraseContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.parse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParse?: (ctx: ParseContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.parseDecimal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParseDecimal?: (ctx: ParseDecimalContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.pauseEffects`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPauseEffects?: (ctx: PauseEffectsContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.pid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPid?: (ctx: PidContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.playerCount`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlayerCount?: (ctx: PlayerCountContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.prempt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrempt?: (ctx: PremptContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.push`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPush?: (ctx: PushContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.random`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRandom?: (ctx: RandomContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.rem2effect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRem2effect?: (ctx: Rem2effectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.remEffect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemEffect?: (ctx: RemEffectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.remMenuItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemMenuItem?: (ctx: RemMenuItemContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.remNEffect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemNEffect?: (ctx: RemNEffectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.remove`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemove?: (ctx: RemoveContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.removeVarField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveVarField?: (ctx: RemoveVarFieldContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.removeVarGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveVarGroup?: (ctx: RemoveVarGroupContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.resist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResist?: (ctx: ResistContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.resizeTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResizeTable?: (ctx: ResizeTableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.restoreFields`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRestoreFields?: (ctx: RestoreFieldsContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.resumeEffects`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResumeEffects?: (ctx: ResumeEffectsContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.rmCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRmCall?: (ctx: RmCallContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.rndDir`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRndDir?: (ctx: RndDirContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.rndExit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRndExit?: (ctx: RndExitContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.rndPlyr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRndPlyr?: (ctx: RndPlyrContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.rollIn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollIn?: (ctx: RollInContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.roomEnd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoomEnd?: (ctx: RoomEndContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.roomStart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoomStart?: (ctx: RoomStartContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.rootExistOf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRootExistOf?: (ctx: RootExistOfContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.roundtime`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoundtime?: (ctx: RoundtimeContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.saveFields`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSaveFields?: (ctx: SaveFieldsContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.scan`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScan?: (ctx: ScanContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.scanEffect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScanEffect?: (ctx: ScanEffectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet?: (ctx: SetContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.setName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetName?: (ctx: SetNameContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.setTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTable?: (ctx: SetTableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.setText`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetText?: (ctx: SetTextContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.sparse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSparse?: (ctx: SparseContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.stopCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStopCommand?: (ctx: StopCommandContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.storeCharData`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStoreCharData?: (ctx: StoreCharDataContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.stov`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStov?: (ctx: StovContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.substring`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstring?: (ctx: SubstringContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.tableInfo`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableInfo?: (ctx: TableInfoContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.tellWeb`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTellWeb?: (ctx: TellWebContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.test2effect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTest2effect?: (ctx: Test2effectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.testEffect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTestEffect?: (ctx: TestEffectContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.test_assert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTest_assert?: (ctx: Test_assertContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.tparse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTparse?: (ctx: TparseContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.underOff`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnderOff?: (ctx: UnderOffContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.underOn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnderOn?: (ctx: UnderOnContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.unload`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnload?: (ctx: UnloadContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.updateSrvrStuff`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateSrvrStuff?: (ctx: UpdateSrvrStuffContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.updateTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateTable?: (ctx: UpdateTableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.uppercase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUppercase?: (ctx: UppercaseContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.vtos`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVtos?: (ctx: VtosContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.watch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWatch?: (ctx: WatchContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.where`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhere?: (ctx: WhereContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.whereAt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereAt?: (ctx: WhereAtContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.whereItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereItem?: (ctx: WhereItemContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.writeChar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWriteChar?: (ctx: WriteCharContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpression?: (ctx: ValueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.negativeNumber`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNegativeNumber?: (ctx: NegativeNumberContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.valueOperation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueOperation?: (ctx: ValueOperationContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.stringOperation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringOperation?: (ctx: StringOperationContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.stringExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringExpression?: (ctx: StringExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.stringConcatenation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringConcatenation?: (ctx: StringConcatenationContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.identityExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentityExpression?: (ctx: IdentityExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.node`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNode?: (ctx: NodeContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.numberVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumberVariable?: (ctx: NumberVariableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.stringVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringVariable?: (ctx: StringVariableContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.tableReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableReference?: (ctx: TableReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.tableAddress`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAddress?: (ctx: TableAddressContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.fieldName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldName?: (ctx: FieldNameContext) => Result;
    /**
     * Visit a parse tree produced by `GslParser.nodeFieldRef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNodeFieldRef?: (ctx: NodeFieldRefContext) => Result;
}

