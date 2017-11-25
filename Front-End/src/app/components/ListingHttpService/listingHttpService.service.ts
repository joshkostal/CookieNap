import { MainAppService } from '../MainAppService/mainAppService.service';

export class ListingHttpService {
    public url: string = 'http://localhost:5001';
    public mainAppService: MainAppService;
    public $log: any;
    public user: string;
    public $location: any;
    
    /** @ngInject */
    constructor($log: any, private $http: angular.IHttpService, mainAppService: MainAppService, $location) {
        this.$log = $log;
        this.$http = $http;
        this.mainAppService = mainAppService;
        this.$location = $location;
    }
    createListing(price: number, isbn:string, condition: string, userName: string) {
      var self = this;
      this.$http.post(this.url + '/Listings/Create',
        {
            "Price": price,
            "Condition": condition,
            "ISBN": isbn,
            "ListingType": 'Selling',
            "ListingCreatorUserName": userName,
            "JWT": self.mainAppService.currentJwtToken
        })
        .then((response: any): any => {
            this.$log.log(response);
            this.$location.path('/');
          })
          .catch((error: any): any => {
            this.$log.error('XHR Failed for getContributors.\n', error.data);
          });
    }
    getAllListings() {
      this.$http.get('http://localhost:5001/Listings')
      .then((response: any): any => {
        return response.data;
      })
      .catch((error: any): any => {
        this.$log.error('XHR Failed for getContributors.\n', error.data);
        return error;
      });
    }
    deleteListing(id: number){
      var self = this;
      this.$http.post(this.url + '/Listings/Delete',
        {
            "ListingId": id,
            "JWT": self.mainAppService.currentJwtToken
        })
        .then((response: any): any => {
            this.$log.log(response);
            this.$location.path('/');
          })
          .catch((error: any): any => {
            this.$log.error('XHR Failed for getContributors.\n', error.data);
          });
    }
  }