import { ResultStory } from './result-story/result-story.model';

export interface Result {
    homeFirstPartResult: number;
    awayFirstPartResult: number;
    homeSecondPartResult: number;
    awaySecondPartResult: number;
    id?: string;

    firstPartFinished(): boolean;
    getObject(): Object;
    matchFinished(): boolean;
    secondPartFinished(): boolean;
}