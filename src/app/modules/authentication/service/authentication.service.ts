import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { NgxRolesService } from 'ngx-permissions';

import * as firebase from 'firebase';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

import { User } from '../../user/model/user.model';
import { AuthorizationService } from '../../authorization/service/authorization.service';
import { ROLE } from '../../authorization/constant/authorization.constant';

@Injectable()
export class AuthenticationService {

    user$: Observable<User>;
    currentUser: User;

    constructor(
        private angularFireAuth: AngularFireAuth,
        private angularFirestore: AngularFirestore,
        private authorizationService: AuthorizationService,
        private rolesService: NgxRolesService,
        private router: Router) {

        this.user$ = this.angularFireAuth.authState.switchMap(user => {
            if (user) {
                return this.angularFirestore.doc<User>(`user/${user.uid}`).valueChanges()
            } else {
                return Observable.of(null)
            }
        });

        this.user$.subscribe(user => {
            if (user) {
                this.currentUser = user;
            } else {
                this.currentUser = null;
            }
        });
    }

    get currentUserObservable(): any {
        return this.angularFireAuth.authState
    }

    public googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();

        return this.oAuthLogin(provider);
    }

    private oAuthLogin(provider) {
        return this.angularFireAuth.auth.signInWithPopup(provider)
        .then((credential) => {
            this.updateUserData(credential.user);
        });
    }

    private updateUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`user/${user.uid}`);

        const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            roles: [ROLE.USER, ROLE.AUTHOR]
        }

        this.authorizationService.addPermissionsByRoles(data);

        return userRef.set(data);
    }

    signOut() {
        this.angularFireAuth.auth.signOut().then(() => {
            this.rolesService.flushRoles();
            this.router.navigate(['/']);
        });
    }

}
