import { Result } from '../model/result.model';
import { ResultImpl } from '../model/result.impl';
import { ResultStory } from '../model/result-story/result-story.model';
import { ResultStoryUtil } from './result-story.util';

export class ResultUtil {
    static createResultFromObject(object: any): Result {
        let result: Result = null;

        if (object) {
        result = new ResultImpl(object);
        }

        return result;
    }

    static createResultStoriesFromObject(object: any): Map<string, ResultStory> {
        let resultStories: Map<string, ResultStory> = null;

        if (object) {
            resultStories = new Map<string, ResultStory>();

            Object.keys(object).forEach(key => {
            resultStories.set(key, ResultStoryUtil.createResultStoryFromObject(object[key]));
            });
        }

        return resultStories;
    }
}