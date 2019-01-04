export interface EasMediaDataHistory {
    id: number;
    easMediaDataId: number;
    enableIn: string;
    channelName: string;
    classification: string;
    encodingFormat: string;
    lastModifiedTs: Date;
    lastModifiedUserId: string;
    mediaOriginatedIp: string;
    mediaOriginatedPort: number;
    stndRoleId: number;
    stndSiteId: number;
    effectiveDate: Date;
    endDate: Date;
}
