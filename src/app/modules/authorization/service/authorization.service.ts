import { Injectable } from '@angular/core';

import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';

import { Observable } from 'rxjs/Observable';

import { User } from '../../user/model/user.model';
import { PERMISSION } from '../constant/authorization.constant';

@Injectable()
export class AuthorizationService {

    constructor(
        private permissionsService: NgxPermissionsService,
        private rolesService: NgxRolesService) { }

    public addPermissionsByRoles(user: User) {
        user.roles.map(role => {
            this.rolesService.addRole(
                role, [   
                    PERMISSION.CREATE_MATCH,
                    PERMISSION.EDIT_MATCH,
                    PERMISSION.DELETE_MATCH
                ]
            );
        });
    }

    public addPermissionById(action: string, resourceId: string, userId: string): void {
        this.permissionsService.addPermission(
            this.generatePermission(action, resourceId, userId)
        );
    }

    public addPermissionsById(role: string, actions: Array<string>, resourceId: string) {
        this.rolesService.addRole(
            role, [   
                Observable.create(actions).map(action => {
                    this.generatePermission(action, resourceId);
                })
            ]
        );
    }

    public generatePermission(action: string, resourceId: string, userId?: string): string {
        let permission =  action + '-' + resourceId;

        if (userId) {
            permission = userId + "-" + permission;
        }

        return permission;
    }
}
