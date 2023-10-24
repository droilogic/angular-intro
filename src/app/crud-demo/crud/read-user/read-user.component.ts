import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsrvService } from 'src/app/appsrv.service';
import { Person } from 'src/app/interfaces/person';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [CommonModule, PersonCardComponent],
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent {

  foundUser: Person | undefined;
  userNotFound = false;

  @ViewChild('userId') userIdInput!: ElementRef<HTMLInputElement>

  constructor(private service: AppsrvService = inject(AppsrvService)) {}

  onClick() {
    const id = this.userIdInput.nativeElement.value;
    this.service.getUserById(parseInt(id)).subscribe({
      next: (user) => {
        this.userNotFound = false;
        this.foundUser = user;
      },
      error: (err) => {
        this.userNotFound = true;
        this.foundUser = undefined;
        console.error(err);
      },
      complete: () => {
        console.log('operation completed.');
       }
    });
  }

}
