import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchListComponent } from './component/match-list/match-list.component';
import { MatchFormComponent } from './component/match-form/match-form.component'

const routes: Routes = [{
    path: '',
    component: MatchListComponent
}, {
    path: 'edit/:id',
    component: MatchFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }