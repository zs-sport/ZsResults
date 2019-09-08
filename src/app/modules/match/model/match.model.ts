import { Result } from '../../result/model/result.model';
import { ResultStory } from '../../result/model/result-story/result-story.model';

export interface Match {
    awayClubName: string;
    category: number;
    creator: string;
    homeClubName: string;
    id?: string;
    location: string;
    result?: Result;
    resultStories?: Map<string, ResultStory>;
    startDate: Date;

    getObject(): Object;
    getPermissions(): Array<string>;
    isFinished(): boolean;
}
