import { IBaseModel } from '../../../zs-core';
import { IResultStoryModel } from '../result-story';

export interface IResultModel extends IBaseModel {
    homeFirstPartResult: number;
    awayFirstPartResult: number;
    homeSecondPartResult: number;
    awaySecondPartResult: number;
    id?: string;

    //firstPartFinished(): boolean;
    //matchFinished(): boolean;
    //secondPartFinished(): boolean;
}
