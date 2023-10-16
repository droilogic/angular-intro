import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from '../interfaces/person';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  @Output() person = new EventEmitter<Person>();

  onSubmit(formData: any) {
    console.log(formData.value as Person);
    this.person.emit(formData.value as Person);
    formData.reset();
  }

}
