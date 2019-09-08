import { Injectable } from '@angular/core';

import { IBaseModel, BaseServiceAbs } from '../../zs-core';
import { IUserService } from './user.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export abstract class UserServiceAbs extends BaseServiceAbs {
   
};
