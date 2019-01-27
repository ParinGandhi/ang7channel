
import {applicationAttributes} from './applicationAttributes';
export interface DashBoardData {
    totalNumberofChannels: number;
    applicationAttributes: applicationAttributes;
    totalNumberofAvaiableChannels:number;
    totalNumberofActiveChannels:number;
    configuredDataByCategory:any;
    avaiableDataByCategory:any;
    siteNames:any;
    siteCount:any;
}
