import { StandardRole } from './standard-role';
import { StandardSite } from './standard-site';
import { StandardClassification } from './standard-classification';

export interface EasMediaData {
    id: number;
    channelName: string;
    standardClassification: StandardClassification;
    encodingFormat: string;
    lastModifiedTs: Date;
    lastModifiedUserId: string;
    mediaOriginatedIp: string;
    mediaOriginatedPort: number;
    enableIn: string;
    stndSite: StandardSite;
    stndRole: StandardRole;
}
