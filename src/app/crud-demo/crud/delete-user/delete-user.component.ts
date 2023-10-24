import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsrvService } from 'src/app/appsrv.service';
import { Person } from 'src/app/interfaces/person';
import { HttpClient } from '@angular/common/http';
import { CrudUserSearchComponent } from '../../utils/crud-user-search/crud-user-search.component';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';
import { DangerAreYouSureComponent } from '../../utils/danger-are-you-sure/danger-are-you-sure.component';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [CommonModule, CrudUserSearchComponent, PersonCardComponent, DangerAreYouSureComponent],
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  @Output() userDeleted = new EventEmitter();

  foundUser: Person | undefined;
  userNotFound = false;;

  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>

  constructor(private service: AppsrvService = inject(AppsrvService),
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
  });
  }

  onUserFound(user: Person | undefined) {
    if(user) {
      this.foundUser = user;
    }
  }

  onConfirm(amISure: boolean) {
    if(amISure && this.foundUser) {
      const id = this.foundUser.id ?? -1;
      this.service.deleteUser(id).subscribe({
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
      });
    } else {
      this.foundUser = undefined;
    }
  }

}
