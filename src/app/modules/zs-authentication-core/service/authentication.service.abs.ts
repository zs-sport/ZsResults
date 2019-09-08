import { Injectable } from '@angular/core';

import { IAuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import { IUserModel } from '../../zs-user-core';

@Injectable()
export abstract class AuthenticationServiceAbs implements IAuthenticationService {
    user$: Observable<IUserModel>;

    googleLogin() {
        throw new Error("Method not implemented.");
    }
    oAuthLogin(provider: any) {
        throw new Error("Method not implemented.");
    }
    signOut() {
        throw new Error("Method not implemented.");
    }
};
