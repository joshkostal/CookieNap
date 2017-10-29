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
    this.$http.get('http://localhost:5001/Listings')
    .then((response: any): any => {
      this.allBooks = response.data;
    })
    .catch((error: any): any => {
      this.$log.error('XHR Failed for getContributors.\n', error.data);
      return error;
    });
  }
}
