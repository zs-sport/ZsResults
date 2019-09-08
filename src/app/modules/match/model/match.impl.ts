import { Match } from './match.model';
import { SportCategories } from '../../core/constant/sport-categories.constant';
import { Result } from '../../result/model/result.model';
import { ResultStory } from '../../result/model/result-story/result-story.model';

export class MatchImpl implements Match {
    awayClubName: string;
    category: number;
    creator: string;
    homeClubName: string;
    id?: string;
    location: string;
    result?: Result;
    resultStories?: Map<string, ResultStory>;
    startDate: Date;
    status: string;
   
    constructor(properties: Object) {
        if (properties["id"]) {
            this.id = properties["id"];
        }

        if (properties["result"]) {
            this.result = properties["result"];
        }
        
        this.category = properties["category"];
        this.startDate = properties["startDate"];
        this.location = properties["location"];
        this.homeClubName = properties["homeClubName"];
        this.awayClubName = properties["awayClubName"];
        this.creator = properties["creator"];
        this.resultStories = properties["resultStories"] || null;
    }

    get categoryName() {
        let categoryName: string;

        SportCategories.forEach(element => {
            if (element.value === this.category) {
                categoryName = element.key;
            }
        });

        return categoryName;
    }

    get timestamp() {
        return this.startDate.getTime();
    }

    get timezoneOffset() {
        return this.startDate.getTimezoneOffset();
    }

    getObject(): Object {
        var result = null;

        if (this.result) {
            result = this.result.getObject();
        }

        return {
            category: this.category,
            startDate:  this.startDate,
            location: this.location,
            homeClubName: this.homeClubName,
            awayClubName: this.awayClubName,
            result: result,
            resultStories: this.getStoriesObject(),
            creator: this.creator
        }
    }

    getStoriesObject(): Object {
        let object = null;

        if (this.resultStories && this.resultStories.size > 0) {
            object = {};

            this.resultStories.forEach((value, key) => {
                object[key] = value.getObject();
            });
        }

        return object;
    }

    getPermissions(): Array<string> {
        let permissions = Array<string>();

        permissions.push(this.creator + "-EDIT-" + this.id);

        return permissions;
    }

    isFinished(): boolean {
        return this.result && this.result.matchFinished();
    }
}
