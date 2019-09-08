import { IBaseModel } from '../../zs-core';

export interface IAssociationModel extends IBaseModel {
    category: string;
    country: string;
    name: string;
    id?: string;
}