export interface User {
    uid: string;
    email: string;
    displayName?: string;
    photoURL: string;
    roles: Array<string>;
}