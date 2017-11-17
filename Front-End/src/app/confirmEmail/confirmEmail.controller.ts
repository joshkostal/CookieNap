import { UserHttpService } from '../components/UserHttpService/userHttpService.service';
import { MainAppService } from '../components/MainAppService/mainAppService.service';

export class ConfirmEmailController {
    public userHttpService: UserHttpService;
    public mainAppService: MainAppService;
    public $location: any;
    public $log: any;
    public code: string;
    public $window: any;



    /* @ngInject */
    constructor($window, $log, $location, userHttpService: UserHttpService, mainAppService: MainAppService) {
        this.$location = $location;
        this.userHttpService = userHttpService;
        this.mainAppService = mainAppService;
        this.$log = $log;
        this.$window = $window;
    }

    checkCode() {
        if (this.userHttpService.confirmUser(this.code)) {
            this.$location.path('/');
            this.userHttpService.createUser();
        }else{
            this.$window.alert('Incorrect code, please try again');
        }
    }
}