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
    descriptionTx: "",
    endTs: null,
    lastModifiedTs: null,
    lastModifiedUserId: null,
    nm: "",
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
    enableIn: null,
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

  keyCodeList: number[] = [8, 9, 13, 16, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
  guestUser: boolean = false;
  ipOctetOne: any;
  ipOctetTwo: any;
  ipOctetThree: any;
  ipOctetFour: any;
  TRUE: string = "TRUE";
  FALSE: string = "FALSE";



  /** Constructor */
  constructor(public ngxSmartModalService: NgxSmartModalService, private spinner: NgxSpinnerService, private dataService: DataService, private sharedService: SharedService, private toastr: ToastrService) { }
  getGridData() {
    this.dataService.getChannelList().subscribe(rowData => {
      this.newGridData = rowData;
      this.sharedService.changeDataSource(rowData);
    });
  }
  addChannel() {
    this.validationMessage = "";
    this.validationMessage += '<ul>';
    if (this.validateAllInputs() && this.validateChannel()) {
      this.easMediaDataToCreate.mediaOriginatedIp = this.ipOctetOne + '.' + this.ipOctetTwo + '.' + this.ipOctetThree + '.' + this.ipOctetFour;
      this.easMediaDataToCreate.lastModifiedTs = new Date();
      this.easMediaDataToCreate.lastModifiedUserId = 'testUser';
      this.easMediaDataToCreate.enableIn = this.easMediaDataToCreate.enableIn.toUpperCase();
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
    } else {
      this.validationMessage += '</ul>';
      this.toastr.error(this.validationMessage, 'Missing fields', {
        timeOut: this.toastrTimeOut * 2,
        enableHtml: true
      });
    }
  };

  addSite() {
    if (this.stndSite.nm) {
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
    } else {
      this.toastr.error('Site name is mandatory', '', {
        timeOut: this.toastrTimeOut
      });
    }
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
    if (this.stndRole.nm) {
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
    } else {
      this.toastr.error('Role name is mandatory', '', {
        timeOut: this.toastrTimeOut
      });
    }
  };

  addClassification() {
    if (this.standardClassification.nm.trim() && this.standardClassification.descriptionTx) {
      let validClassificationName = true;
      let classificationMatch = /^[a-zA-Z0-9\\\/ ]*$/g;
      if (!this.standardClassification.nm.match(classificationMatch)) {
        this.toastr.error('Classification name can only contain alphanumeric characters, spaces, and slashes.', '', {
          timeOut: this.toastrTimeOut
        });
        validClassificationName = false;
      }
      if (validClassificationName) {
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
      }
    } else {
      this.toastr.error('Classification name and description are mandatory', '', {
        timeOut: this.toastrTimeOut
      });
    }
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
      let ipArray = selectedChannel.mediaOriginatedIp.split('.');
      this.ipOctetOne = ipArray[0];
      this.ipOctetTwo = ipArray[1];
      this.ipOctetThree = ipArray[2];
      this.ipOctetFour = ipArray[3];
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
    this.ipOctetOne = null;
    this.ipOctetTwo = null;
    this.ipOctetThree = null;
    this.ipOctetFour = null;

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
    this.stndRole.id = null;
    // this.showRoleSuccessMsg = false;
    // this.showRoleAddSuccessMsg = false;
  };

  clearClassification() {
    this.standardClassification.nm = "";
    this.standardClassification.descriptionTx = "";
    this.standardClassification.id = null;
    // this.showSiteSuccessMsg = false;
    // this.showSiteAddSuccessMsg = false;
    this.showUpdateClassificationButton = false;
  };

  updateSite() {
    if (this.stndSite.nm) {
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
    } else {
      this.toastr.error('Site name is mandatory', '', {
        timeOut: this.toastrTimeOut
      });
    }
  };

  updateRole() {
    if (this.stndRole.nm) {
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
    } else {
      this.toastr.error('Role name is mandatory', '', {
        timeOut: this.toastrTimeOut
      });
    }
  };


  updateClassification() {
    if (this.standardClassification.nm.trim() && this.standardClassification.descriptionTx) {
      let validClassificationName = true;
      let classificationMatch = /^[a-zA-Z0-9\\\/ ]*$/g;
      if (!this.standardClassification.nm.match(classificationMatch)) {
        this.toastr.error('Classification name can only contain alphanumeric characters, spaces, and slashes.', '', {
          timeOut: this.toastrTimeOut
        });
        validClassificationName = false;
      }
      if (validClassificationName) {
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
      }
    } else {
      this.toastr.error('Classification name and description are mandatory', '', {
        timeOut: this.toastrTimeOut
      });
    }
  };

  updateChannel() {
    this.validationMessage = "";
    this.validationMessage += '<ul>';
    if (this.validateAllInputs() && this.validateChannel()) {
      this.easMediaDataToCreate.mediaOriginatedIp = this.ipOctetOne + '.' + this.ipOctetTwo + '.' + this.ipOctetThree + '.' + this.ipOctetFour;
      this.easMediaDataToCreate.lastModifiedUserId = 'testUser';
      // this.easMediaDataToCreate.enableIn = this.easMediaDataToCreate.enableIn.toString().toUpperCase();
      this.easMediaDataToCreate.enableIn = this.easMediaDataToCreate.enableIn;
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
      this.validationMessage += '</ul>';
      this.toastr.error(this.validationMessage, 'Missing mandatory fields', {
        timeOut: this.toastrTimeOut * 2,
        enableHtml: true
      });
    }
  };

  validateChannel() {
    this.validChannel = true;

    if (!this.easMediaDataToCreate.channelName.trim()) {
      this.validChannel = false;
      this.validationMessage += '<li>Channel name</li>';
    }
    if (!this.easMediaDataToCreate.stndSite.id) {
      this.validChannel = false;
      this.validationMessage += '<li>Site Id</li>';
    }
    if (!this.ipOctetOne || !this.ipOctetTwo || !this.ipOctetThree || !this.ipOctetFour) {
      this.validChannel = false;
      this.validationMessage += '<li>Originated IP</li>';
    }
    if (!this.easMediaDataToCreate.mediaOriginatedPort) {
      this.validChannel = false;
      this.validationMessage += '<li>Originated port</li>';
    }
    if (!this.easMediaDataToCreate.standardClassification.id) {
      this.validChannel = false;
      this.validationMessage += '<li>Classification</li>';
    }
    if (!this.easMediaDataToCreate.stndRole.id) {
      this.validChannel = false;
      this.validationMessage += '<li>Role Id</li>';
    }
    if (!this.easMediaDataToCreate.enableIn) {
      this.validChannel = false;
      this.validationMessage += '<li>Enabled</li>';
    }

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

  openHelp() {
    window.open('/help');
  };

  validateAllInputs() {
    let inputsAreValid = true;
    if (this.easMediaDataToCreate.mediaOriginatedPort > 65535) {
      this.validationMessage += '<li>Port cannot be larger than 65535</li>';
      // this.toastr.error("Port cannot be larger than 65535");
      inputsAreValid = false;
    }
    // if (parseInt(this.ipOctetOne) > 255 || parseInt(this.ipOctetTwo) > 255 || parseInt(this.ipOctetThree) > 255 || parseInt(this.ipOctetFour) > 255 ||) {
    if (parseInt(this.ipOctetOne) > 255 || parseInt(this.ipOctetTwo) > 255 || parseInt(this.ipOctetThree) > 255 || parseInt(this.ipOctetFour) > 255) {
      // this.toastr.error("Invalid IP address. IP cannot be greater than 255.255.255.255");
      this.validationMessage += '<li> IP address cannot be greater than 255.255.255.255"</li>';
      inputsAreValid = false;
      return inputsAreValid;
    }
    // if (!this.ipOctetOne || !this.ipOctetTwo || !this.ipOctetThree || !this.ipOctetFour) {
    // //  this.toastr.error("Invalid IP address. Please verify and try again");
    //   this.validationMessage += '<li>Invalid IP address. Please verify and try again</li>';
    // }
    return inputsAreValid;
  }

  padIp(octet, modelName) {
    let newIpOctet;
    switch (octet.length) {
      case 1:
        newIpOctet = "00" + octet;
        break;
      case 2:
        newIpOctet = "0" + octet;
        break;
      default:
        break;
    }
    if (newIpOctet) {
      switch (modelName) {
        case "ipOctetOne":
          this.ipOctetOne = newIpOctet;
          break;
        case "ipOctetTwo":
          this.ipOctetTwo = newIpOctet;
          break;
        case "ipOctetThree":
          this.ipOctetThree = newIpOctet;
          break;
        case "ipOctetFour":
          this.ipOctetFour = newIpOctet;
          break;
        default:
          break;
      }
    }
  }
  checkIpValue(fromTextBox, toTextBox, e, modelName) {
    // if (e.keyCode < 48 || e.keyCode > 57 && e.keyCode !== 9) {
    if (!this.keyCodeList.includes(e.keyCode)) {
      switch (modelName) {
        case "ipOctetOne":
          this.ipOctetOne = this.ipOctetOne.substring(0, this.ipOctetOne.length - 1);;
          break;
        case "ipOctetTwo":
          this.ipOctetTwo = this.ipOctetTwo.substring(0, this.ipOctetTwo.length - 1);;
          break;
        case "ipOctetThree":
          this.ipOctetThree = this.ipOctetThree.substring(0, this.ipOctetThree.length - 1);;
          break;
        case "ipOctetFour":
          this.ipOctetFour = this.ipOctetFour.substring(0, this.ipOctetFour.length - 1);;
          break;
        default:
          break;
      }
    }
    // var length = fromTextBox.length;
    // if (length === 3) {
    //   document.getElementById(toTextBox).focus();
    // }
  }

  validateIPValue(ipValue) {
    if (ipValue < 0 || ipValue > 255) {
      this.toastr.error(ipValue + ' is not a valid IP. Please check the value and try again', '', {
        timeOut: this.toastrTimeOut
      });
    }
  }

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
