import { Match } from '../model/match.model';
import { MatchImpl } from '../model/match.impl';
import { ResultUtil } from '../../result/util/result.util';

export class MatchUtil {

  static createMatchFromObject(object: any): Match {
    let match: Match = null;

    if (object) {
      match = new MatchImpl(object);

      match.result = ResultUtil.createResultFromObject(object.result);
      match.resultStories = ResultUtil.createResultStoriesFromObject(object.resultStories);
    }

    return match;
  }
}
