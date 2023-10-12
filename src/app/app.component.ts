import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
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
}
