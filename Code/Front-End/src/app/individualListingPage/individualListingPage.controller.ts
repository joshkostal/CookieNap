import { ListingHttpService } from '../components/ListingHttpService/listingHttpService.service';
import { MainAppService } from '../components/MainAppService/mainAppService.service';

export class IndividualListingPageController {
    public mainAppService: MainAppService;
    public listingHttpService: ListingHttpService;
    public creationDate: number;
    public $location: any;
    public $log: any;
    public price: number;
    public isbn: string;
    public condition: string;
    public url: string = '';
    public bookTitle: string;
    public user: string; 
    public ownersEmail: string;
    public emailAvailable: boolean = false;

    /* @ngInject */
    constructor ($log, $location, listingHttpService: ListingHttpService, mainAppService: MainAppService) {
      this.$location = $location;
      this.listingHttpService = listingHttpService;
      this.mainAppService = mainAppService;
      this.$log = $log;
      if(this.mainAppService.selectedListingURL){
        this.url = this.mainAppService.selectedListingURL;
      }
      this.bookTitle = this.mainAppService.selectedListingBookName;
      this.price = this.mainAppService.selectedListingPrice;
      this.user = this.mainAppService.selectedListingUser;
      this.condition = this.mainAppService.selectedListingCondition;
      this.ownersEmail = this.mainAppService.selectedListingOwnersEmail;
      this.emailAvailable = false;
    }
  
    /** @ngInject */
  
    toggleEmailAvailable() {
      this.emailAvailable = true;
    }
    
    deleteListing() {
      if(this.user === this.mainAppService.currentUserName){
        this.listingHttpService.deleteListing(this.mainAppService.selectedListingId);
      }
    }
  
  }
  