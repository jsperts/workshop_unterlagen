import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  users = [{
    name: 'John'
  }, {
    name: 'Jane'
  }];
}
