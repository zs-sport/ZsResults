import { Result } from './result.model'
import { ResultStory } from './result-story/result-story.model';

export class ResultImpl implements Result {
    homeFirstPartResult: number;
    awayFirstPartResult: number;
    homeSecondPartResult: number;
    awaySecondPartResult: number;
    
    id?: string;

    constructor(properties: Object) {
        if (properties["id"]) {
            this.id = properties["id"];
        }

        this.homeFirstPartResult = properties["homeFirstPartResult"] || null;
        this.awayFirstPartResult = properties["awayFirstPartResult"] || null;
        this.homeSecondPartResult = properties["homeSecondPartResult"] || null;
        this.awaySecondPartResult = properties["awaySecondPartResult"] || null;
    }

    getObject(): Object {
        return {
            homeFirstPartResult: this.homeFirstPartResult,
            awayFirstPartResult: this.awayFirstPartResult,
            homeSecondPartResult: this.homeSecondPartResult,
            awaySecondPartResult: this.awaySecondPartResult
        }
    }

    firstPartFinished(): boolean {
        return this.homeFirstPartResult !== undefined
            && this.awayFirstPartResult !== undefined;
    }

    secondPartFinished(): boolean {
        return this.homeSecondPartResult !== undefined
            && this.awaySecondPartResult !== undefined;
    }

    matchFinished(): boolean {
        return this.firstPartFinished() && this.secondPartFinished();
    }
}