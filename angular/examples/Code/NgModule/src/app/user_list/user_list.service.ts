import { Injectable } from '@angular/core';

@Injectable()
export class UserListService {
  users = [{
    name: 'John'
  }, {
    name: 'Jane'
  }];
}
