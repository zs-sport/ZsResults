import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgxRolesService} from 'ngx-permissions';
import { AvatarComponent } from 'ngx-avatar';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { User } from './modules/user/model/user.model';
import { PERMISSION } from './modules/authorization/constant/authorization.constant';
import { AuthenticationService } from './modules/authentication/service/authentication.service';
import { AuthorizationService } from './modules/authorization/service/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    @ViewChild('mainMenu') mainMenu:ElementRef;

    private title = 'ZsResults';
    private authenticated: boolean = false ;
    private currentUser: User;

    constructor(
        private angularFirestore: AngularFirestore,
        private authenticationService: AuthenticationService,
        private authorizationService: AuthorizationService, 
        private rolesService: NgxRolesService,
        private router: Router) {

        authenticationService.user$.subscribe(user => {
            if (user) {
                this.currentUser = user;

                this.authorizationService.addPermissionsByRoles(this.currentUser);
            } else {
                this.currentUser = null;
            }
        });
    }

    public signOut() {
      this.authenticationService.signOut();
    }

    public toggleCollapse(event) {
        
        
        this.mainMenu.nativeElement.classList.toggle('is-active');
    }
}
