import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Match } from '../../model/match.model';
import { MatchImpl } from '../../model/match.impl';
import { MatchService } from '../../service/match.service';
import { SportCategories } from '../../../core/constant/sport-categories.constant';
import { User } from '../../../user/model/user.model';
import { AuthenticationService } from '../../../authentication/service/authentication.service';
import { Result } from '../../../result/model/result.model';
import { ResultImpl } from '../../../result/model/result.impl';
import { MatchUtil } from '../../util/match.util';

@Component({
    selector: 'match-form',
    templateUrl: './match-form.component.html',
    styleUrls: ['./match-form.component.scss']
})
export class MatchFormComponent implements OnInit {

    private idSubscription: any;
    public match: Match = new MatchImpl({});
    public result: Result = new ResultImpl({});
    public categories = SportCategories;
    private isEdit = false;

    @Input()
    public currentUser: User;

    constructor(
        private activatedRoute: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private matchService: MatchService,
        private router: Router
    ) {
        authenticationService.user$.subscribe(user => {
            if (user) {
                this.currentUser = user;
            } else {
                this.currentUser = null;
            }
        });
    }

    ngOnInit() {
        this.idSubscription = this.activatedRoute.params.subscribe(params => {
            let id = params['id'];

            if (id && id != 0) {
                this.isEdit = true;
                this.getMatch(id);
            }
        });
    }

    createMatch() {
        this.matchService.createMatch(this.match, this.result, this.currentUser);
        
        this.router.navigate(['/']);
    }

    updateMatch() {
      if (this.result && (this.result.homeFirstPartResult != undefined
        && this.result.awayFirstPartResult != undefined && this.result.homeSecondPartResult != undefined
        && this.result.awaySecondPartResult != undefined)) {
          this.match.result = this.result;
      } else {
        this.match.result = null;
      }

        this.matchService.updateMatch(this.match);
        
        this.router.navigate(['/']);
    }

    getMatch(id: string): void {
        this.matchService.getMatchDocument(id).snapshotChanges().subscribe(
            action => {
                let data = action.payload.data();

                let match = MatchUtil.createMatchFromObject({
                    id: action.payload.id,
                    ...action.payload.data()
                });

                this.match = match;
        });
    }
}
