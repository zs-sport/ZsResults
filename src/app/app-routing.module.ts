import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyMatchesComponent } from './components/my-matches/my-matches.component';
import { MatchFormComponent } from './modules/match/component/match-form/match-form.component';
import { ResultFormComponent } from './modules/result/component/result-form/result-form.component';

const routes: Routes = [{
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    }, {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    }, {
        path: 'my-matches',
        component: MyMatchesComponent,
        pathMatch: 'full'
    }, {
        path: 'edit-match/:id',
        component: MatchFormComponent,
        pathMatch: 'full'
    }, {
        path: 'result-form/:id',
        component: ResultFormComponent,
        pathMatch: 'full'
    }, {
        path: 'admin',
        redirectTo: 'admin-countries',
       
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
