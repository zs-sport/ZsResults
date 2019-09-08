import { Component, Input, OnInit } from '@angular/core';

import { NgxRolesService } from 'ngx-permissions';

import { AuthorizationService } from '../../../authorization/service/authorization.service';
import { MatchService } from '../../service/match.service';
import { Match } from '../../model/match.model';
import { User } from '../../../user/model/user.model';
import { ACTION, PERMISSION } from '../../../authorization/constant/authorization.constant';
import { ResultViewComponent } from '../../../result/component/result-view/result-view.component';

@Component({
  selector: "match-detail",
  templateUrl: "./match-detail.component.html",
  styleUrls: ["./match-detail.component.scss"]
})
export class MatchDetailComponent implements OnInit {
  
    @Input() isEdit: boolean;
    @Input() isSubscribable: boolean;
    @Input() isCommentable: boolean;
    @Input() match: Match;

    constructor(
        private authorizationService: AuthorizationService,
        private matchService: MatchService,
        private rolesService: NgxRolesService
    ) {}

    ngOnInit(): void {
        if (this.isEdit === undefined) {
            this.isEdit = false; 
        }

        this.isSubscribable = true;
    }

    getClassName() {
        if (this.match.category === 1) {
        return "dark-green";
        } else {
        return "dark-orange";
        }
    }

    deleteMatch() {
        this.matchService.deleteMatch(this.match.id);
    }

    private subscribeClickHandler() {}
    private commentateClickHandler() {}
}
