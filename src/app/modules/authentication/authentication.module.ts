import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthenticationService } from './service/authentication.service';

@NgModule({
    imports: [
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    providers: [
        AuthenticationService
    ]
})

export class AuthenticationModule { }