import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from '../../modules/authentication/service/authentication.service';
import { Match } from '../../modules/match/model/match.model';
import { MatchImpl } from '../../modules/match/model/match.impl';
import { MatchService } from '../../modules/match/service/match.service';
import { DateUtil } from '../../modules/match/util/date.util';
import { MatchUtil } from '../../modules/match/util/match.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private matches: Observable<Match[]>
    private currentDate: Date;
    private selectedDate: Date;

    constructor(
        private dateUtil: DateUtil,
        private matchService: MatchService
    ) {
    }

    ngOnInit() {
        this.currentDate = this.dateUtil.getToday();
        this.selectedDate = this.currentDate;

        this.matches = this.getMatches(this.selectedDate);
    }

    getMatches(selectedDate): Observable<Match[]> {
        return this.matchService.getMatches(selectedDate).snapshotChanges().map(actions => {
            return actions.map(action => {
              let match = MatchUtil.createMatchFromObject({
                id: action.payload.doc.id,
                ...action.payload.doc.data()
              });

              return match;
            });
        });
    }

    private previousDay(baseDate: Date): Date {
        return this.dateUtil.getPreviousDay(baseDate);
    }

    private nextDay(baseDate: Date): Date {
        return this.dateUtil.getNextDay(baseDate);
    }

    private toDay(): void {
        this.selectedDate = this.currentDate;
    }

    private previousClickHandler(): void {
        this.selectedDate = this.previousDay(this.selectedDate);

        this.matches = this.getMatches(this.selectedDate);
    }

    private todayClickHandler(): void {
        this.toDay();

        this.matches = this.getMatches(this.selectedDate);
    }

    private nextClickHandler(): void {
        this.selectedDate = this.nextDay(this.selectedDate);

        this.matches = this.getMatches(this.selectedDate);
    }

}
