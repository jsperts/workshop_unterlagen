import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user_list.component';
import { UserListService } from './user_list.service';

@NgModule({
  providers: [ UserListService ],
  declarations: [ UserListComponent ],
  imports: [ CommonModule ],
  exports: [ UserListComponent ]
})
export class UserListModule {}
