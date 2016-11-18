import { AuthorsServiceInstance } from './services';

export interface MainCtrlInstance {
  authorsService: AuthorsServiceInstance;
}

export interface MainCtrlCtor {
  (a: any, b: AuthorsServiceInstance): MainCtrlInstance;
}

export interface AddAuthorCtrlInstance {
  authorsService: AuthorsServiceInstance;
}

export interface AddAuthorCtrlCtor {
  (a: any, b: AuthorsServiceInstance, c: any): AddAuthorCtrlInstance;
}

export interface EditAuthorCtrlInstance {
  authorsService: AuthorsServiceInstance;
}

export interface EditAuthorCtrlCtor {
  (a: any, b: AuthorsServiceInstance, c: any, d: any): EditAuthorCtrlInstance;
}
