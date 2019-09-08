import { IBaseModel } from "../../zs-core";

export interface ICompetitionModel extends IBaseModel {
    category: string;
    country: string;
    name: string;
    type: string;
    id?: string;
}
