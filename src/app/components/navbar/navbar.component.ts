import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DataService } from 'src/app/services/data.service';
import { StandardSite } from 'src/app/models/standard-site';
import { StandardRole } from 'src/app/models/standard-role';
import { EasMediaData } from 'src/app/models/eas-media-data';
import { StandardClassification } from 'src/app/models/standard-classification';
import { ToastrService, Toast } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],

})
export class NavbarComponent implements OnInit {
  stndSite: StandardSite = {
    id: null,
    descriptionTx: null,
    endTs: null,
    lastModifiedTs: null,
    lastModifiedUserId: null,
    nm: null,
    notificationThreshold: null,
    startTs: null
  };
  searchText: any;
  stndRole: StandardRole = {
    id: null,
    descriptionTx: null,
    endTs: null,
    lastModifiedTs: null,
    lastModifiedUserId: null,
    nm: null,
    startTs: null
  };
  standardClassification: StandardClassification = {
    id: null,
    descriptionTx: null,
    endTs: null,
    lastModifiedTs: null,
    lastModifiedUserId: null,
    nm: null,
    startTs: null,
    notificationThreshold: null,
  };
  easMediaDataToCreate: EasMediaData = {
    id: null,
    channelName: "",
    standardClassification: this.standardClassification,
    encodingFormat: null,
    lastModifiedTs: null,
    lastModifiedUserId: null,
    mediaOriginatedIp: null,
    mediaOriginatedPort: null,
    enableIn: "",
    stndSite: this.stndSite,
    stndRole: this.stndRole
  };
  siteIdList: StandardSite[];
  roleIdList: StandardRole[];
  channelList: EasMediaData[];
  classificationList: StandardClassification[];
  loggedIn: boolean = false;
  showUpdateChannelButton: boolean = false;
  showSiteUpdateButton: boolean = false;
  showUpdateRoleButton: boolean = false
  showUpdateClassificationButton: boolean = false;
  validChannel: boolean = true;
  validationMessage: string;
  toastrTimeOut: number = 10000;
  file: File = null;
  newGridData: any;
  credentials = {
    username: null,
    password: null
  };
  guestUser: boolean = false;


  /** Constructor */
  constructor(public ngxSmartModalService: NgxSmartModalService, private spinner: NgxSpinnerService, private dataService: DataService, private sharedService: SharedService, private toastr: ToastrService) { }
  getGridData() {
    this.dataService.getChannelList().subscribe(rowData => {
      this.newGridData = rowData;
      this.sharedService.changeDataSource(rowData);
    });
  }
  addChannel() {
    this.easMediaDataToCreate.lastModifiedTs = new Date();
    this.easMediaDataToCreate.lastModifiedUserId = 'testUser';
    this.dataService.addChannel(this.easMediaDataToCreate)
      .subscribe(createdChannel => {
        console.log(createdChannel);
        this.clearChannelInfo();
        this.getGridData();
        this.invokeDropdowns();
        //this.sharedService.changeDashboardData(true);
        this.toastr.success('Successfully added channel', '', {
          timeOut: this.toastrTimeOut
        });
      });
  };

  addSite() {
    this.stndSite.lastModifiedTs = new Date();
    this.stndSite.lastModifiedUserId = 'testUser';
    this.dataService.addSite(this.stndSite).subscribe(success => {
      this.clearSite();
      this.toastr.success('Successfully added site', '', {
        timeOut: this.toastrTimeOut
      });
      this.dataService.getSiteIdList().subscribe(siteIdList => {
        this.siteIdList = siteIdList;
      });
    });
  };
  checkLogin(loginModel) {
    this.loggedIn = true;
    loginModel.close();
    this.sharedService.changeLoginSource(this.loggedIn);
  }
  checkLogOut() {
    this.loggedIn = false
    this.sharedService.changeLoginSource(false);
    setTimeout(() => {
      document.getElementById('login').click();
    }, 500)
  }
  addRole() {
    this.stndRole.lastModifiedTs = new Date();
    this.stndRole.lastModifiedUserId = 'testUser';
    this.dataService.addRole(this.stndRole).subscribe(success => {
      this.clearRole();
      this.toastr.success('Successfully added role', '', {
        timeOut: this.toastrTimeOut
      });
      this.dataService.getRoleIdList().subscribe(roleIdList => {
        this.roleIdList = roleIdList;
      });
    });
  };

  addClassification() {
    this.standardClassification.lastModifiedTs = new Date();
    this.standardClassification.lastModifiedUserId = 'testUser';
    this.dataService.addClassification(this.standardClassification).subscribe(success => {
      this.clearClassification();
      this.toastr.success('Successfully added classification', '', {
        timeOut: this.toastrTimeOut
      });
      this.dataService.getClassificationList().subscribe(classificationList => {
        this.classificationList = classificationList;
      });
    });
  };


  login(loginModal: any) {
    this.dataService.login(this.credentials).subscribe(response => {
      this.checkLogin(loginModal);
      this.guestUser = response.guestUser;
    },
      error => {
        if (error.status === 401) {
          this.toastr.error('You are not authorized to access this site.', '', {
            timeOut: this.toastrTimeOut
          });
        }
      });
  };


  onChannelChanged(productName) {
    console.log(productName);
    // this.populateChannel(this.getSelectedChannelByName(productName));
    this.populateChannel(productName);
  }

  getSelectedChannelByName(selectedName: string): EasMediaData {
    return this.channelList.find(product => product.channelName === selectedName);
  }
  populateChannel(selectedChannel) {
    //alert(index);
    if (selectedChannel !== "" && selectedChannel !== undefined) {
      this.easMediaDataToCreate.channelName = selectedChannel.channelName;
      this.easMediaDataToCreate.mediaOriginatedIp = selectedChannel.mediaOriginatedIp;
      this.easMediaDataToCreate.stndSite.id = selectedChannel.stndSite.id;
      this.easMediaDataToCreate.mediaOriginatedPort = selectedChannel.mediaOriginatedPort;
      this.easMediaDataToCreate.standardClassification = selectedChannel.standardClassification;
      this.easMediaDataToCreate.stndRole.id = selectedChannel.stndRole.id;
      this.easMediaDataToCreate.enableIn = selectedChannel.enableIn;
      this.easMediaDataToCreate.encodingFormat = selectedChannel.encodingFormat;
      this.easMediaDataToCreate.id = selectedChannel.id;
      this.showUpdateChannelButton = true;
    } else {
      this.clearChannelInfo();
    }
    // console.log("Populate channel: %o", channel);
    // this.channelName = channel.channelName;
  };

  populateSite(selectedSite) {
    // alert(selectedSite);
    if (selectedSite !== "") {
      this.stndSite.nm = selectedSite.nm;
      this.stndSite.descriptionTx = selectedSite.descriptionTx;
      this.stndSite.id = selectedSite.id;
      this.showSiteUpdateButton = true;
    } else {
      this.clearSite();
    }
  };

  populateRole(selectedRole) {
    // alert(selectedSite);
    if (selectedRole !== "") {
      this.stndRole.nm = selectedRole.nm;
      this.stndRole.descriptionTx = selectedRole.descriptionTx;
      this.stndRole.id = selectedRole.id;
      this.showUpdateRoleButton = true;
    } else {
      this.clearRole();
    }
  };

  populateClassification(selectedClassification) {
    // alert(selectedSite);
    if (selectedClassification !== "") {
      this.standardClassification.nm = selectedClassification.nm;
      this.standardClassification.descriptionTx = selectedClassification.descriptionTx;
      this.standardClassification.id = selectedClassification.id;
      this.showUpdateClassificationButton = true;
    } else {
      this.clearClassification();
    }
  };

  clearChannelInfo() {
    this.searchText = null;
    this.easMediaDataToCreate.channelName = "";
    this.easMediaDataToCreate.mediaOriginatedIp = null;
    this.easMediaDataToCreate.stndSite.id = null;
    this.easMediaDataToCreate.mediaOriginatedPort = null;
    this.easMediaDataToCreate.standardClassification.id = null;
    this.easMediaDataToCreate.stndRole.id = null;
    this.easMediaDataToCreate.enableIn = null;
    this.easMediaDataToCreate.encodingFormat = null;
    this.easMediaDataToCreate.id = null;
    this.showUpdateChannelButton = false;
  };

  clearSite() {
    this.stndSite.nm = "";
    this.stndSite.descriptionTx = "";
    // this.showSiteSuccessMsg = false;
    // this.showSiteAddSuccessMsg = false;
    this.showSiteUpdateButton = false;
    this.stndSite.id = null;
  };

  clearRole() {
    this.stndRole.nm = "";
    this.stndRole.descriptionTx = "";
    this.showUpdateRoleButton = false;
    this.stndRole.id=null;

    // this.showRoleSuccessMsg = false;
    // this.showRoleAddSuccessMsg = false;
  };

  clearClassification() {
    this.standardClassification.nm = "";
    this.standardClassification.descriptionTx = "";
    this.standardClassification.id=null;
    // this.showSiteSuccessMsg = false;
    // this.showSiteAddSuccessMsg = false;
    this.showUpdateClassificationButton = false;
  };

  updateSite() {
    this.stndSite.lastModifiedUserId = "testUser";
    this.stndSite.startTs = new Date();
    this.dataService.updateSite(this.stndSite)
      .subscribe(site => {
        this.clearSite();
        this.toastr.success('Successfully updated site', '', {
          timeOut: this.toastrTimeOut
        });
        this.dataService.getSiteIdList()
          .subscribe(siteIdList => {
            this.siteIdList = siteIdList;

          });
      });
  };

  updateRole() {
    this.stndRole.lastModifiedUserId = "testUser";
    this.stndRole.startTs = new Date();
    this.dataService.updateRole(this.stndRole)
      .subscribe(role => {
        this.clearRole();
        this.toastr.success('Successfully updated role', '', {
          timeOut: this.toastrTimeOut
        });
        this.dataService.getRoleIdList()
          .subscribe(roleIdList => {
            this.roleIdList = roleIdList;

          });
      });
  };

  updateClassification() {
    this.standardClassification.lastModifiedUserId = "testUser";
    this.standardClassification.startTs = new Date();
    this.dataService.updateClassification(this.standardClassification)
      .subscribe(role => {
        this.clearClassification();
        this.toastr.success('Successfully updated classification', '', {
          timeOut: this.toastrTimeOut
        });
        this.dataService.getClassificationList()
          .subscribe(classificationList => {
            this.classificationList = classificationList;

          });
      });
  };

  updateChannel() {
    if (this.validateChannel()) {
      this.easMediaDataToCreate.lastModifiedUserId = 'testUser';
      this.dataService.updateChannel(this.easMediaDataToCreate)
        .subscribe(
          response => {
            this.dataService.getChannelList()
              .subscribe(channelList => {
                console.log("Channel list: %o", channelList);
                this.channelList = channelList;
                this.clearChannelInfo();
                this.getGridData();
                this.invokeDropdowns();
                this.toastr.success('Successfully updated channel', '', {
                  timeOut: this.toastrTimeOut
                });
              });
          })
    } else {
      this.toastr.error(this.validationMessage, 'Missing fields:', {
        timeOut: this.toastrTimeOut * 2,
        enableHtml: true
      });
    }
  };

  validateChannel() {
    this.validationMessage = "";
    this.validationMessage += '<ul>';
    if (!this.easMediaDataToCreate.channelName.trim()) {
      this.validChannel = false;
      this.validationMessage += '<li>Channel name</li>';
    }
    if (!this.easMediaDataToCreate.stndSite) {
      this.validChannel = false;
      this.validationMessage += '<li>Site</li>';
    }
    if (!this.easMediaDataToCreate.mediaOriginatedIp.trim()) {
      this.validChannel = false;
      this.validationMessage += '<li>Originated IP</li>';
    }
    if (!this.easMediaDataToCreate.mediaOriginatedPort) {
      this.validChannel = false;
      this.validationMessage += '<li>Originated port</li>';
    }
    if (!this.easMediaDataToCreate.standardClassification) {
      this.validChannel = false;
      this.validationMessage += '<li>Classification</li>';
    }
    if (!this.easMediaDataToCreate.stndRole) {
      this.validChannel = false;
      this.validationMessage += '<li>Role</li>';
    }
    if (!this.easMediaDataToCreate.enableIn) {
      this.validChannel = false;
      this.validationMessage += '<li>Active indicator</li>';
    }
    this.validationMessage += '</ul>';
    return this.validChannel;
  };

  setFile(files: FileList) {
    this.file = files.item(0);
  };

  handleFileInput(modelInstance) {
    // this.file = files.item(0);
    this.spinner.show();
    var fd = new FormData();
    fd.append('file', this.file);
    this.dataService.postFile(fd).subscribe(data => {
      // do something, if upload success
      this.spinner.hide();
      modelInstance.close();
      this.getGridData();
      this.invokeDropdowns();
      this.sharedService.changeDashboardData(true);
      this.toastr.success('Successfully imported file', '', {
        timeOut: this.toastrTimeOut
      });

    }, error => {
      this.spinner.hide();
      console.log(error);
      this.toastr.error('Failed to import file. Please try again later', '', {
        timeOut: this.toastrTimeOut
      });
    });
  };



  /** On init */
  ngOnInit() {

    this.invokeDropdowns();

  }
  invokeDropdowns() {
    this.sharedService.sharedDataSource.subscribe(data => this.newGridData = data)
    this.dataService.getSiteIdList().subscribe(siteIdList => {
      this.siteIdList = siteIdList;
      this.sharedService.changeSiteIdData(siteIdList);
    });

    this.dataService.getRoleIdList().subscribe(roleIdList => {
      this.roleIdList = roleIdList;
      this.sharedService.changeRoleIdData(roleIdList);
    });

    this.dataService.getClassificationList().subscribe(classificationList => {
      this.classificationList = classificationList;
      this.sharedService.changeClassData(classificationList);
    });

    this.dataService.getChannelList().subscribe(channelList => {
      console.log("Channel list: %o", channelList);
      this.channelList = channelList;
    });
  }

}
