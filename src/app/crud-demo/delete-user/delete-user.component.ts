import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsrvService } from 'src/app/appsrv.service';
import { Person } from 'src/app/interfaces/person';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  @Output() userDeleted = new EventEmitter();

  foundUser: Person | undefined;
  userNotFound = false;;

  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>

  constructor(/* private service: AppsrvService = inject(AppsrvService), */
  private http: HttpClient = inject(HttpClient)) {}

  onClick() {
    const id = this.userIdInput.nativeElement.value;
    // this.service.deleteUser(parseInt(id)).subscribe({
    //   next: (user) => {
    //     this.userNotFound = false;
    //     this.userDeleted.emit();
    //   },
    //   error: (err) => {
    //     this.userNotFound = true;
    //     this.foundUser = undefined;
    //     console.log(err);
        
    //   },
    //   complete: () => {
    //     console.log('operation completed.');
    //   }
    // });
    this.http.delete<Person>(`http://localhost:3000/users/${id}`).subscribe({
      next: (user) => {
        this.userNotFound = false;
        this.userDeleted.emit();
      },
      error: (err) => {
        this.userNotFound = true;
        this.foundUser = undefined;
        console.log(err);
      },
      complete: () => {
        console.log('operation completed.');
      }
  })
  }

}
