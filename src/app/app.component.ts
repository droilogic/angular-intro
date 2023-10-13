import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
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
    },
    {
      givenName: 'Jane',
      surname: 'Doe',
      age: 28,
      email: 'jane.doe@example.com',
      phone: '123 Main St',
    },
    {
      givenName: 'Jim',
      surname: 'Brown',
      age: 45,
      email: 'jim.brown@example.com',
      phone: '456 Park Ave',
    },
    {
      givenName: 'Jill',
      surname: 'Brown',
      age: 42,
      email: 'jill.brown@example.com',
      phone: '456 Park Ave',
    },
    {
      givenName: 'Jake',
      surname: 'Smith',
      age: 36,
      email: 'jake.smith@example.com',
      phone: '789 Broadway',
    },
    {
      givenName: 'Judy',
      surname: 'Smith',
      age: 34,
      email: 'judy.smith@example.com',
      phone: '789 Broadway',
    },
    {
      givenName: 'Jack',
      surname: 'Johnson',
      age: 50,
      email: 'jack.johnson@example.com',
      phone: '321 Oak St',
    },
    {
      givenName: 'Julie',
      surname: 'Johnson',
      age: 48,
      email: 'julie.johnson@example.com',
      phone: '321 Oak St',
    },
    {
      givenName: 'Jerry',
      surname: 'Davis',
      age: 55,
      email: 'jerry.davis@example.com',
      phone: '654 Pine St',
    },
    {
      givenName: 'June',
      surname: 'Davis',
      age: 53,
      email: 'june.davis@example.com',
      phone: '654 Pine St',
    },
  ]
}
