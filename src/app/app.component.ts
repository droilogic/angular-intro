import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EvtBindComponent } from './evt-bind/evt-bind.component';
import { OutputCompComponent } from './output-comp/output-comp.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppsrvService } from './appsrv.service';
import { CrudDemoComponent } from './crud-demo/crud-demo/crud-demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    PersonComponent,
    PersonAltComponent,
    EvtBindComponent,
    OutputCompComponent,
    PersonCardComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    CrudDemoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '01-intro';
  firstname: string = "John";
  lastname: string = "Doe";
  personData: Person = {
    id: 0,
    givenName: 'John',
    surname: 'Doe',
    age: 0x29,
    email: 'jdoe@foobar.com',
    phone: '+30 210 1234567'
  };
  person2Data: Person = {
    id: 1,
    givenName: 'Santa',
    surname: 'Claus',
    age: 0x43,
    email: 'santa@claus.com',
    phone: '+99 777 1234567'
  };

  users: Person[] = [];

  receivedUser: Person | undefined;

  constructor(private appService: AppsrvService = inject(AppsrvService)) {}

  ngOnInit(): void {
    this.appService.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    })
  }

  onDeleteUser(idx: number) {
    this.users.splice(idx, 1);
  }

  onReceiveUser(user: Person) {
    // alert(user.givenName + ', ' + user.surname);
    this.receivedUser = user;
  }

  onNewPerson(person: Person) {
    this.users.push(person);
  }
}
