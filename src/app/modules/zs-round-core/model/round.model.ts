import { IBaseModel } from '../../zs-core';

export interface IRoundModel extends IBaseModel {
    week: number;
    id?: string;
}