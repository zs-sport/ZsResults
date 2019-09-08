import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxPermissionsModule } from 'ngx-permissions';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { CoreModule } from './modules/core/core.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchModule } from './modules/match/match.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AvatarModule, AvatarConfig } from 'ngx-avatar';
import { MyMatchesComponent } from './components/my-matches/my-matches.component';
import { DateUtil } from './modules/match/util/date.util';
import { ResultModule } from './modules/result/result.module';

import { ZsResultCounterModule } from 'zs-result-counter';
import { ZsCountryModule, CountryServiceAbs } from 'zs-country';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CountryService } from './services/country.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        MyMatchesComponent
    ],
    imports: [
        BrowserModule,
        AvatarModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AppRoutingModule,
        AuthenticationModule,
        AuthorizationModule,
        CoreModule,
        MatchModule,
        NgxPermissionsModule.forRoot(),
        ResultModule,
        ZsResultCounterModule,
        ZsCountryModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [{ provide: CountryServiceAbs, useClass: CountryService }],
    bootstrap: [AppComponent]
    })
export class AppModule { }
