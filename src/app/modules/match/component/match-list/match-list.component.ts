import { Component, AfterViewInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { LoadingSpinnerComponent } from '../../../core/components/loading-spinner/loading-spinner.component';
import { MatchService } from '../../service/match.service';
import { Match } from '../../model/match.model';
import { User } from '../../../user/model/user.model';

@Component({
    selector: 'match-list',
    templateUrl: './match-list.component.html',
    styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent {

    @Input() matches: Observable<Match[]>
    @Input() isEdit: boolean;

    constructor() {
    }

}
