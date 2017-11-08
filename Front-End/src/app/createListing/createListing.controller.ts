import { ListingHttpService } from '../components/ListingHttpService/listingHttpService.service';
import { MainAppService } from '../components/MainAppService/mainAppService.service';

export class CreateListingController {
    public listingHttpService: ListingHttpService;
    public mainAppService: MainAppService;
    public creationDate: number;
    public $location: any;
    public $log: any;
    public price: number;
    public isbn: string;
    public condition: string;
    public $window: any;


  
    /* @ngInject */
    constructor ($window, $log, $location, listingHttpService: ListingHttpService, mainAppService: MainAppService) {
      this.$location = $location;
      this.listingHttpService = listingHttpService;
      this.mainAppService = mainAppService;
      this.$log = $log;
      this.$window = $window;
      this.isbn = '';
      this.condition = '';
    }
  
    /** @ngInject */
  
    createListing() {
      if(this.mainAppService.currentUserName != ''){
        this.listingHttpService.createListing(this.price, this.isbn, this.condition, this.mainAppService.currentUserName);
        this.$window.alert('You have created a Listing');        
      }else{
        this.$window.alert('Sign in to create Listing');
      }
    }
  
  }
  