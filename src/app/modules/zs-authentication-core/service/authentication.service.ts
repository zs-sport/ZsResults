import { Observable } from "rxjs/Observable";
import { IUserModel } from "../../zs-user-core";

export interface IAuthenticationService {
    user$: Observable<IUserModel>;

    googleLogin();
    oAuthLogin(provider);
    signOut();
};
