import { ResultStory } from '../model/result-story/result-story.model';
import { ResultStoryImpl } from '../model/result-story/result-story.impl';

export class ResultStoryUtil {
  static createResultStoryFromObject(object:any): ResultStory {
    let resultStory: ResultStory = null;

    if (object) {
      resultStory = new ResultStoryImpl(object);

      resultStory.messages = ResultStoryUtil.createMessagesMapFromObject(object.messages);
    }

    return resultStory;
  }

  static createMessagesMapFromObject(object: any): Map<number, Object> {
    let messages: Map<number, Object> = null;

    if (object) {
      messages = new Map<number, Object>();

      Object.keys(object).forEach(key => {
        messages.set(+key, object[key]);
      });
    }

    return messages;
  }
}