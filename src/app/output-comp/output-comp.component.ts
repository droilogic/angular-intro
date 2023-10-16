import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-output-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output-comp.component.html',
  styleUrls: ['./output-comp.component.css']
})
export class OutputCompComponent {
  @Input() userData: Person[] = [];
  @Output() sendData = new EventEmitter<Person>();
  @Output() deleteData = new EventEmitter<number>();

  onSendData(user: Person) {
    this.sendData.emit(user);
  };

  onDeleteData(id: number) {
    this.deleteData.emit(id);
  };
  
}
