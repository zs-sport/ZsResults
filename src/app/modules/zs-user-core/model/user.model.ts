import { IBaseModel } from '../../zs-core';

export interface IUserModel extends IBaseModel {
    email: string;
    displayName: string;
    photoURL: string;
    roles: Array<string>;
};
