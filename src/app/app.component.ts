import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EvtBindComponent } from './evt-bind/evt-bind.component';
import { OutputCompComponent } from './output-comp/output-comp.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    PersonComponent,
    PersonAltComponent,
    EvtBindComponent,
    OutputCompComponent,
    PersonCardComponent,
    TemplateDrivenFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-intro';
  firstname: string = "John";
  lastname: string = "Doe";
  personData: Person = {
    givenName: 'John',
    surname: 'Doe',
    age: 0x29,
    email: 'jdoe@foobar.com',
    phone: '+30 210 1234567'
  };
  person2Data: Person = {
    givenName: 'Santa',
    surname: 'Claus',
    age: 0x43,
    email: 'santa@claus.com',
    phone: '+99 777 1234567'
  };

  users: Person[] = [
    {
      givenName: 'John',
      surname: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      phone: '123 Main St',
      photoURL: 'https://i.pravatar.cc/?img=1'
    },
    {
      givenName: 'Jane',
      surname: 'Doe',
      age: 28,
      email: 'jane.doe@example.com',
      phone: '123 Main St',
      photoURL: 'https://i.pravatar.cc/?img=2'
    },
    {
      givenName: 'Jim',
      surname: 'Brown',
      age: 45,
      email: 'jim.brown@example.com',
      phone: '456 Park Ave',
      photoURL: 'https://i.pravatar.cc/?img=3'
    },
    {
      givenName: 'Jill',
      surname: 'Brown',
      age: 42,
      email: 'jill.brown@example.com',
      phone: '456 Park Ave',
      photoURL: 'https://i.pravatar.cc/?img=4'
    },
    {
      givenName: 'Jake',
      surname: 'Smith',
      age: 36,
      email: 'jake.smith@example.com',
      phone: '789 Broadway',
      photoURL: 'https://i.pravatar.cc/?img=5'
    },
    {
      givenName: 'Judy',
      surname: 'Smith',
      age: 34,
      email: 'judy.smith@example.com',
      phone: '789 Broadway',
      photoURL: 'https://i.pravatar.cc/?img=6'
    },
    {
      givenName: 'Jack',
      surname: 'Johnson',
      age: 50,
      email: 'jack.johnson@example.com',
      phone: '321 Oak St',
      photoURL: 'https://i.pravatar.cc/?img=7'
    },
    {
      givenName: 'Julie',
      surname: 'Johnson',
      age: 48,
      email: 'julie.johnson@example.com',
      phone: '321 Oak St',
      photoURL: 'https://i.pravatar.cc/?img=8'
    },
    {
      givenName: 'Jerry',
      surname: 'Davis',
      age: 55,
      email: 'jerry.davis@example.com',
      phone: '654 Pine St',
      photoURL: 'https://i.pravatar.cc/?img=9'
    },
    {
      givenName: 'June',
      surname: 'Davis',
      age: 53,
      email: 'june.davis@example.com',
      phone: '654 Pine St',
      photoURL: 'https://i.pravatar.cc/?img=10'
    },
  ]

  receivedUser: Person | undefined;

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
