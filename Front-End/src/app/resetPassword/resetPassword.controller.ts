import { MainAppService } from "../components/MainAppService/mainAppService.service";
import { UserHttpService } from "../components/UserHttpService/userHttpService.service";

export class ResetPasswordController {
    public userHttpService: UserHttpService;
    public mainAppService: MainAppService;
    public creationDate: number;
    public $location: any;
    public $log: any;
    public code: string;
    public password: string;

    /* @ngInject */
    constructor($log, $location, userHttpService: UserHttpService, mainAppService: MainAppService) {
        this.$location = $location;
        this.userHttpService = userHttpService;
        this.mainAppService = mainAppService;
        this.$log = $log;
        this.code = '';
        this.password = '';
    }

    resetPassword() {
        if (this.userHttpService.resetPassword(this.code, this.password)) {
            this.$location.path('/');
        }
    }
}