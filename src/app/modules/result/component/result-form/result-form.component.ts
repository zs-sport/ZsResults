import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ResultStory } from "../../model/result-story/result-story.model";
import { ResultStoryImpl } from "../../model/result-story/result-story.impl";
import { Match } from "../../../match/model/match.model";
import { MatchService } from "../../../match/service/match.service";
import { MatchImpl } from "../../../match/model/match.impl";
import { ResultImpl } from "../../model/result.impl";
import { MatchUtil } from "../../../match/util/match.util";
import { Result } from "../../model/result.model";

@Component({
  selector: "result-form",
  templateUrl: "./result-form.component.html",
  styleUrls: ["./result-form.component.scss"]
})
export class ResultFormComponent implements OnInit {
    private match: Match = new MatchImpl({});
    private resultStory: ResultStory;
    private resultStories: Map<string, ResultStory>;
    private messages: Array<Object>;
    private temporaryResult: any = {
        homeResult: 0,
        awayResult: 0,
        minutes: 0
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private matchService: MatchService
    ) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            let id = params["id"];

            if (id && id != 0) {
                this.getMatch(id);
            }
        }); 
    }

    getMatch(id: string): void {
        this.matchService
        .getMatchDocument(id)
        .snapshotChanges()
        .subscribe(action => {
            let data = {
            id: action.payload.id,
            ...action.payload.data()
            };

            this.match = MatchUtil.createMatchFromObject(data);

            let resultStories = this.match.resultStories;

            this.resultStory =
                (resultStories && resultStories.get(this.match.creator)) ||
                new ResultStoryImpl({
                    messages: new Map<number, Object>()
                });

            this.messages = Array.from(this.resultStory.messages.values()).reverse();

            this.temporaryResult = this.initTemporaryResult(this.messages);
        });
    }

  submitStoryLine() {
    let match = this.match,
      resultStories = this.resultStories,
      resultStory = this.resultStory;

    if (!resultStory) {
      resultStory = new ResultStoryImpl({
        messages: new Map<number, Object>()
      });
    }

    let storyLine = this.temporaryResult;

    resultStory.messages.set(this.temporaryResult.minutes, storyLine);

    if (!resultStories) {
      resultStories = new Map<string, ResultStory>();
    }

    resultStories.set(match.creator, resultStory);

    match.resultStories = resultStories;

    this.matchService.updateMatch(match);
  }

    initTemporaryResult(messages: Array<Object>): any {
        let lastMessage = messages[0];

        return {...lastMessage};
    }

    awayResultChangeHandler(data) {
        this.temporaryResult.awayResult = data;
    }

    getClassName(message: any): string {
        return +message.homeResult > +message.awayResult ? "is-left" : "is-right";
    }

    homeResultChangeHandler(data) {
        this.temporaryResult.homeResult = data;
    }

    minutesResultChangeHandler(data) {
        this.temporaryResult.minutes = data;
    }

    submitResult() {}

    startMatch(): void {}

    stopMatch(): void {}

    pauseMatch(): void {}
}
