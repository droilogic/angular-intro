import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsrvService } from 'src/app/appsrv.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-crud-user-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-user-search.component.html',
  styleUrls: ['./crud-user-search.component.css']
})
export class CrudUserSearchComponent {

  foundUser: Person | undefined;
  userNotFound = false;

  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>
  @Output() userFound = new EventEmitter<Person | undefined>();

  constructor(private service: AppsrvService = inject(AppsrvService)) {}

  onSearch() {
    const id = this.userIdInput.nativeElement.value;
    this.service.getUserById(parseInt(id)).subscribe({
      next: (user) => {
        this.userNotFound = false;
        this.foundUser = user;
        this.userFound.emit(this.foundUser);
      },
      error: (err) => {
        this.userNotFound = true;
        this.foundUser = undefined;
        this.userFound.emit(undefined);
        console.error(err);
      },
      complete: () => {
        console.log('operation completed.');
       }
    });
  }
}
