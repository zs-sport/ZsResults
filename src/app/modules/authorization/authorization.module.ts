import { NgModule } from '@angular/core';

import { NgxPermissionsService, NgxPermissionsStore} from 'ngx-permissions';

import { AuthorizationService } from './service/authorization.service';

@NgModule({
    exports: [
    ],
    imports: [
    ],
    providers: [
        AuthorizationService,
        NgxPermissionsService,
        NgxPermissionsStore
    ]
})

export class AuthorizationModule { }