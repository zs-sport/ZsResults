import { IBaseModel } from '../model';
import { IBaseService } from './base.service';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, QueryFn} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export abstract class BaseServiceAbs implements IBaseService {

    protected collection: AngularFirestoreCollection<IBaseModel>;

    constructor(protected angularFirestore: AngularFirestore) {
    }

    protected getCollection(modelType: string): AngularFirestoreCollection<IBaseModel> {
        return this.angularFirestore.collection<any>(modelType);
    }

    protected getDocument(modelType: string, id: string): AngularFirestoreDocument<IBaseModel> {
        return this.angularFirestore.doc<any>(modelType + '/' + id);
    }

    public abstract createModel(baseModel: IBaseModel): Observable<IBaseModel>;

    public abstract getModel(id: string): Observable<IBaseModel>;

    public abstract listModel(query: QueryFn): Observable<IBaseModel[]>;

    public abstract updateModel(baseModel: IBaseModel): Observable<IBaseModel>;
}
