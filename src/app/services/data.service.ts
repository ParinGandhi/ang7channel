import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { EasMediaData } from '../models/eas-media-data';
import { StandardSite } from '../models/standard-site';
import { StandardRole } from '../models/standard-role';
import { StandardClassification } from '../models/standard-classification';
import { ChannelData } from '../models/channel-data';
import { AudioInputs } from '../models/audio-Inputs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const fileUploadOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // easMediaDataList: EasMediaData[];
  // stndSiteList: StandardSite[];
  // stndRole: StandardRole;
  location: any = window.location;
  baseUrl: string = this.getUrlBase();
  // getChannelListUrl: string = 'http://localhost:8080/eas-media-data';
  // getSiteIdListUrl: string = 'http://localhost:8080/reference-data?type=site';
  // getRoleIdListUrl: string = 'http://localhost:8080/reference-data?type=role';
  // addChannelUrl: string = 'http://localhost:8080/eas-media-data';
  // addSiteUrl: string = 'http://localhost:8080/standard-site';
  // addRoleUrl: string = 'http://localhost:8080/standard-role';
  // historyDataUrl: string = 'http://localhost:8080/eas-media-data-history';
  // archiveChannelsUrl: string = 'http://localhost:8080/eas-media-data/archive';
  // updateSiteUrl: string = 'http://localhost:8080/standard-site';
  // updateRoleUrl: string = 'http://localhost:8080/standard-role';
  // updateChannelUrl: string = 'http://localhost:8080/eas-media-data';
  // getClassificationUrl: string = 'http://localhost:8080/reference-data?type=clsf';
  // addClassificationUrl: string = 'http://localhost:8080/standard-classification';
  // updateClassificationUrl: string = 'http://localhost:8080/standard-classification';
  // dashboardInfoUrl: string = 'http://localhost:8080/dashboard-info';
  // getChannelData: string = 'http://localhost:8080/eas-media-data-activity?channelName=';
  // urlByChannelName: string = 'http://localhost:8080//fetch-audio'
  getChannelListUrl: string = this.baseUrl + '/eas-media-data';
  getSiteIdListUrl: string = this.baseUrl + '/reference-data?type=site';
  getRoleIdListUrl: string = this.baseUrl + '/reference-data?type=role';
  addChannelUrl: string = this.baseUrl + '/eas-media-data';
  addSiteUrl: string = this.baseUrl + '/standard-site';
  addRoleUrl: string = this.baseUrl + '/standard-role';
  historyDataUrl: string = this.baseUrl + '/eas-media-data-history';
  archiveChannelsUrl: string = this.baseUrl + '/eas-media-data/archive';
  updateSiteUrl: string = this.baseUrl + '/standard-site';
  updateRoleUrl: string = this.baseUrl + '/standard-role';
  updateChannelUrl: string = this.baseUrl + '/eas-media-data';
  getClassificationUrl: string = this.baseUrl + '/reference-data?type=clsf';
  addClassificationUrl: string = this.baseUrl + '/standard-classification';
  updateClassificationUrl: string = this.baseUrl + 'standard-classification';
  dashboardInfoUrl: string = this.baseUrl + '/dashboard-info';
  getChannelData: string = this.baseUrl + '/eas-media-data-activity?channelName=';
  getDownloadAudio: string = this.baseUrl + '/downloadClip/';
  urlByChannelName: string = this.baseUrl + '/fetch-audio'
dashboardArray=[];
  constructor(private http: HttpClient) { }

  getChannelList(): Observable<EasMediaData[]> {
    return this.http.get<EasMediaData[]>(this.getChannelListUrl);
  };

  getSiteIdList(): Observable<StandardSite[]> {
    return this.http.get<StandardSite[]>(this.getSiteIdListUrl);
  };

  getRoleIdList(): Observable<StandardRole[]> {
    return this.http.get<StandardRole[]>(this.getRoleIdListUrl);
  };
  getDataByChannelName(channelName: string): Observable<ChannelData[]> {
    return this.http.get<ChannelData[]>(this.getChannelData + channelName);
  };

  downloadAudio(audioFileName:string){
    window.open(this.getDownloadAudio+audioFileName, "_blank");
  }
  getUrlByChannelName(AudioInputs): Observable<String> {
    return this.http.post<string>(this.urlByChannelName, AudioInputs, httpOptions);
  };

  getClassificationList(): Observable<StandardClassification[]> {
    return this.http.get<StandardClassification[]>(this.getClassificationUrl);
  };

  addClassification(newClassification: StandardClassification): Observable<StandardClassification> {
    return this.http.post<any>(this.addClassificationUrl, newClassification, httpOptions);
  };

  addChannel(newChannel: EasMediaData): Observable<EasMediaData> {
    return this.http.post<any>(this.addChannelUrl, newChannel, httpOptions);
  };

  addSite(newSite: StandardSite): Observable<EasMediaData> {
    return this.http.post<any>(this.addSiteUrl, newSite, httpOptions);
  };

  addRole(newRole: StandardRole): Observable<EasMediaData> {
    return this.http.post<any>(this.addRoleUrl, newRole, httpOptions);
  };

  getSearchData(queryString: string): Observable<EasMediaData[]> {
    var url = this.baseUrl + '/eas-media-data?' + queryString;
    return this.http.get<EasMediaData[]>(url);
  };

  getHistoryData(id: any): Observable<any> {
    return this.http.get<any>(this.historyDataUrl + '?easMediaDataId=' + id);
  };

  archiveChannels(channelList: any): Observable<any> {
    return this.http.post<any>(this.archiveChannelsUrl, channelList, httpOptions);
  };

  updateSite(siteInfo: any): Observable<any> {
    return this.http.put<any>(this.updateSiteUrl, siteInfo, httpOptions);
  };

  updateRole(roleInfo: any): Observable<any> {
    return this.http.put<any>(this.updateRoleUrl, roleInfo, httpOptions);
  };

  updateClassification(classificationInfo: StandardClassification): Observable<any> {
    return this.http.put<any>(this.updateClassificationUrl, classificationInfo, httpOptions);
  };

  updateChannel(channelInfo: any): Observable<any> {
    return this.http.put<any>(this.updateChannelUrl, channelInfo, httpOptions);
  };

  getDashboardData(): Observable<any> {
    return this.http.get<any>(this.dashboardInfoUrl);
    
  };

  postFile(fileToUpload: any): Observable<boolean> {
    //const endpoint = 'http://localhost:8080/mass-upload';
    const endpoint = this.getUrlBase() + '/mass-upload';
    // const formData: FormData = new FormData();
    // formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, fileToUpload)
      // .map(() => { return true; });
      .pipe(map(() => { return true; }));
  }

  getUrlBase() {
    if (this.location.port === "4200") {
      return "http://localhost:8080"
    } else {
      return this.location.protocol;
    }
  }

}
