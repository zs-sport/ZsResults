import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { NgxPermissionsModule } from 'ngx-permissions';

import { CoreModule } from '../core/core.module';
import { DateUtil } from './util/date.util';
import { UserModule } from '../user/user.module';
import { MatchService } from './service/match.service';
import { MatchFormComponent } from './component/match-form/match-form.component';
import { MatchListComponent } from './component/match-list/match-list.component';
import { MatchDetailComponent } from './component/match-detail/match-detail.component';
import { MatchRoutingModule } from './match-routing.module';
import { ResultModule } from '../result/result.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
    MatchRoutingModule,
    NgxPermissionsModule,
    ResultModule,
    UserModule
  ],
  declarations: [
    MatchDetailComponent,
    MatchFormComponent,
    MatchListComponent
  ],
  exports: [
      MatchListComponent,
      MatchFormComponent
    ],
  providers: [
    MatchService,
    DateUtil
  ]
})
export class MatchModule { }
