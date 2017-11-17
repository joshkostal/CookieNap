export class MainAppService {
    public url: string = 'https://localhost:3000';
    public selectedListingBookName: string = '';
    public selectedListingUser: string = '';
    public selectedListingPrice: number = null;
    public selectedListingCondition: string = '';
    public selectedListingURL: string = '';
    public selectedListingOwnersEmail: string = '';
    public currentUserName: string = '';
    public currentUnlEmail: string = '';
    public currentPersonalEmail: string = '';
    public selectedListingId: number = null;
    public currentPage: string = 'home';
  
    /** @ngInject */
    constructor(private $log: angular.ILogService, private $http: angular.IHttpService) {

    }
    
  }