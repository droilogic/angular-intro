import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from 'src/app/reactive-form/reactive-form.component';
import { Person } from 'src/app/interfaces/person';
import { AppsrvService } from 'src/app/appsrv.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormComponent],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  @Output() userCreated = new EventEmitter();

  constructor(private service: AppsrvService = inject(AppsrvService)) {}

  onCreate(user: Person) {
    this.service.addUser(user).subscribe(user => {
      console.log(user);
      this.userCreated.emit();
    });
  }

}
