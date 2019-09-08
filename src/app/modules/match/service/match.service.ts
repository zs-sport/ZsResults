import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../../authentication/service/authentication.service';
import { AuthorizationService } from '../../authorization/service/authorization.service';
import { ACTION, ROLE} from '../../authorization/constant/authorization.constant';

import { DateUtil } from '../util/date.util';
import { Match } from '../model/match.model';
import { MatchImpl } from '../model/match.impl';

import { User } from '../../user/model/user.model';
import { Result } from '../../result/model/result.model';

@Injectable()
export class MatchService {

    matchCollection: AngularFirestoreCollection<Match>;
    matchDocument:   AngularFirestoreDocument<Match>;
    myMatchesCollection: AngularFirestoreCollection<Match>;
    currentUser: User;

    constructor(
        private angularFirestore: AngularFirestore,
        private authenticationService: AuthenticationService,
        private authorizationService: AuthorizationService,
        private dateUtil: DateUtil
    ) {
        authenticationService.user$.subscribe(user => {
            if (user) {
                this.currentUser = user;

                this.myMatchesCollection = this.angularFirestore.collection('match',
                    ref => ref.where('creator', '==', this.currentUser.uid)
                    .orderBy('startDate', 'asc').limit(10));
            } else {
                this.currentUser = null;
            }
        });

        this.matchCollection = this.angularFirestore.collection('match',
            ref => ref.where('startDate', '>', this.dateUtil.getToday())
            .where('startDate', '<=', this.dateUtil.getTomorrow())
            .orderBy('startDate', 'asc').limit(10));
    }

    getData(): Observable<Match[]> {
        return this.matchCollection.valueChanges();
    }

    getMatchDocument(id: string): AngularFirestoreDocument<Match> {
        return this.angularFirestore.doc<Match>('match/' + id);
    }

    getMatches(baseDate: Date) {
        return this.matchCollection = this.angularFirestore.collection('match',
            ref => ref.where('startDate', '>', baseDate)
            .where('startDate', '<=', this.dateUtil.getNextDay(baseDate))
            .orderBy('startDate', 'asc').limit(10));;
    }

    getMyMatches(userId: string) {
        return this.myMatchesCollection;
    }

    createMatch(data: Match, result: Result, user: User) {
        let resultObject = null;

        if (result && result.matchFinished()) {
            resultObject = result.getObject();
        }

        const match: Match = {
            ...data,
            result: resultObject,
            creator: user.uid
        }

        return this.myMatchesCollection.add(match);
    }

    updateMatch(match) {
        return this.getMatchDocument(match.id).update(match.getObject());
    }

    deleteMatch(id) {
        return this.getMatchDocument(id).delete()
    }
}
