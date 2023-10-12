import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person: Person = {
      givenName: 'givenName',
      surname: 'surname',
      age: 0x0,
      email: 'email@example.com',
      phone: '+00 000 00000000'
    };
}
