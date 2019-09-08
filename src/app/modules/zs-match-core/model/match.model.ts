import { IBaseModel } from '../../zs-core';
import { IResultModel } from '../../zs-result-core';
import { IResultStoryModel } from '../../zs-result-core';

export interface IMatchModel extends IBaseModel {
    awayClubName: string;
    category: string;
    creator: string;
    homeClubName: string;
    location: string;
    result?: IResultModel;
    resultStories?: Map<string, IResultStoryModel>;
    round?: string;
    startDate: Date;
    status: string;

    //getPermissions(): Array<string>;
    //isFinished(): boolean;
}
