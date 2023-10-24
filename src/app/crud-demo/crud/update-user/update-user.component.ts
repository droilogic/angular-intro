import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { Person } from 'src/app/interfaces/person';
import { CrudUserFormComponent } from '../../utils/crud-user-form/crud-user-form.component';
import { AppsrvService } from 'src/app/appsrv.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, CrudUserSearchComponent, CrudUserFormComponent],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  @Output() userUpdated = new EventEmitter();

  constructor(private service: AppsrvService = inject(AppsrvService)) {}

  foundUser: Person | undefined;

  onUserFound(user: Person | undefined) {
    if(user) {
      this.foundUser = user;
    }
  }

  onUpdate(user: Person) {
    this.service.updateUser(user).subscribe((user) => {
      console.log(user);
      this.userUpdated.emit();
    });
  }

}
