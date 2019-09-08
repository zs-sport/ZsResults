import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from '../../modules/authentication/service/authentication.service';
import { Match } from '../../modules/match/model/match.model';
import { MatchImpl } from '../../modules/match/model/match.impl';
import { User } from '../../modules/user/model/user.model';

import { MatchService } from '../../modules/match/service/match.service';
import { MatchModule } from '../../modules/match/match.module';
import { ResultImpl } from '../../modules/result/model/result.impl';


@Component({
  selector: 'app-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.scss']
})
export class MyMatchesComponent implements OnInit {

    private currentUser: User;
    private matches: Observable<Match[]>
    private showSpinner = true;

    constructor(
        private authenticationService: AuthenticationService,
        private matchService: MatchService) {
        
        authenticationService.user$.subscribe(user => {
            if (user) {
                this.currentUser = user;

                this.matches = this.getMatches()
            } else {
                this.currentUser = null;

                this.matches = Observable.of(null);
            }

            this.matches.subscribe(x => {
                this.showSpinner = false
            });
        });
    }

    getMatches(): Observable<Match[]> {
        return this.matchService.getMyMatches(this.currentUser.uid).snapshotChanges()
        .map(actions => {
            return actions.map(action => {
                let data = action.payload.doc.data();
                let result = null;

                if (data.result) {
                    result = new ResultImpl(data.result);
                }

                let match = new MatchImpl({
                    id: action.payload.doc.id,
                    ...action.payload.doc.data()
                });

                match.result = result;

                return match;
            });
        });
    }

    ngOnInit() {
    }

}
