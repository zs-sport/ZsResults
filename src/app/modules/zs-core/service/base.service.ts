import { IBaseModel } from '../model';
import { I18NHtmlParser } from '@angular/compiler/src/i18n/i18n_html_parser';
import { Observable } from 'rxjs/Observable';
import { QueryFn } from 'angularfire2/firestore';

export interface IBaseService {
    createModel(baseModel: IBaseModel): Observable<IBaseModel>;
    getModel(id: string): Observable<IBaseModel>;
    listModel(query: QueryFn): Observable<IBaseModel[]>;
    updateModel(baseModel: IBaseModel): Observable<IBaseModel>;
}