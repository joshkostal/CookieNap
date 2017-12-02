import { WebDevTecService, ITecThing } from '../components/webDevTec/webDevTec.service';
import { MainAppService } from '../components/MainAppService/mainAppService.service';
import { ListingHttpService } from '../components/ListingHttpService/listingHttpService.service';


export class MainController {
  public awesomeThings: ITecThing[];
  public webDevTec: WebDevTecService;
  public mainAppService: MainAppService;
  public listingHttpService: ListingHttpService;
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;
  public $location: any;
  public $log: any;
  public allBooks: any;
  public $http: any;
  public $q: any;
  public promises: object[];
  public searchVal: any;
  

  /* @ngInject */
  constructor ($q, $http, $log, $location ,$timeout: angular.ITimeoutService, webDevTec: WebDevTecService, toastr: any, mainAppService: MainAppService, listingHttpService: ListingHttpService) {
    this.listingHttpService = listingHttpService;
    this.$location = $location;
    this.$http = $http;
    this.$log = $log;
    this.awesomeThings = new Array();
    this.webDevTec = webDevTec;
    this.mainAppService = mainAppService;    
    this.classAnimation = '';
    this.creationDate = 1506664725860;
    this.toastr = toastr;
    this.activate($timeout);
    this.promises = [];
    this.searchVal = "";
  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {
    this.getWebDevTec();

    $timeout(() => {

    }, 10000);
  }

  signIn() {
    this.$location.path('/signIn');
  }

  openListing(val) {
    this.mainAppService.selectedListingBookName = val.bookListed.title;
    this.mainAppService.selectedListingUser = val.listingCreator.userName;
    this.mainAppService.selectedListingPrice = val.price;
    this.mainAppService.selectedListingURL = val.bookListed.thumbnailURL;
    this.mainAppService.selectedListingCondition = val.condition;
    this.mainAppService.selectedListingOwnersEmail = val.listingCreator.communicationEmail;
    this.mainAppService.selectedListingId = val.listingID;    
    this.$location.path('/individualListingPage');
  }
  
  getWebDevTec() {
    var self = this;
    this.$http.get('http://localhost:5001/Listings')
    .then((response: any): any => {
      self.allBooks = response.data;
      self.$log.log(self.allBooks);
      for(let i = 0;i<self.allBooks.length;i++){
        if(self.allBooks[i].condition == 0){
          self.allBooks[i].condition = 'Like-new';
        }else if(self.allBooks[i].condition == 1){
          self.allBooks[i].condition = 'Good';      
        }else{
          self.allBooks[i].condition = 'Usable';      
        }
      }
    })
    .catch((error: any): any => {
      this.$log.error('XHR Failed for getContributors.\n', error.data);
      return error;
    });
  }
}
