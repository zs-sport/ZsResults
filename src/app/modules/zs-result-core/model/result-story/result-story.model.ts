import { IBaseModel } from '../../../zs-core';

export interface IResultStoryModel extends IBaseModel {
    messages: Map<number, Object>;
    id?: string;
}
