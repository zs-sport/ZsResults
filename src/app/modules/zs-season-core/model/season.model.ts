import { IBaseModel } from '../../zs-core';
import { IRoundModel } from '../../zs-round-core/model/round.model';

export interface ISeasonModel extends IBaseModel {
    endDate: Date;
    startDate: Date;
    title: string;
    competition: string;
    rounds: Array<IRoundModel>;
    id?: string;
}
