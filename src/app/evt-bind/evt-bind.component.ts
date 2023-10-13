import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evt-bind',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evt-bind.component.html',
  styleUrls: ['./evt-bind.component.css']
})
export class EvtBindComponent {
  times = 0;
  userInput = '';

  increaseCounter() {
    this.times++;
  };

  resetCounter() {
    this.times = 0;
  };

  onUserInput(e: Event) {
    const target = e.target as HTMLInputElement;
  
    this.userInput = target.value;
  }
}
