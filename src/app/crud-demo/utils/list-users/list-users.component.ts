import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsrvService } from 'src/app/appsrv.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  
  users: Person[] = [];

  constructor(private service: AppsrvService = inject(AppsrvService)) {}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

}
