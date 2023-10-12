import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-intro';
  firstname: string = "Dimitris";
  lastname: string = "A.";
  person = {
    givenName: 'John',
    surname: 'Doe',
    age: 0x29,
    email: 'jdoe@foobar.com'
  };
}
