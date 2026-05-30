export interface InvestigationRequest {
    triggerName: string;
    triggerLine: string;
    contextLines: string[];
    triggerKey: string;
    logFile: string;
    lineNumber: number;
    channelId: string;
    buildPreamble: (instanceName: string, contextLines: string[], existenceData?: string) => string;
}
