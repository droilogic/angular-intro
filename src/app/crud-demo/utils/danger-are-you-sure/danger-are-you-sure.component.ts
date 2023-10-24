import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-danger-are-you-sure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './danger-are-you-sure.component.html',
  styleUrls: ['./danger-are-you-sure.component.css']
})
export class DangerAreYouSureComponent {
  @Input() header = 'Distructive Action!';
  @Input() title = 'Are you sure?';
  @Input() body = 'Are you sure you want to proceed?';

  @Output() confirm = new EventEmitter<boolean>();

  onClick(amISure: boolean) {
    this.confirm.emit(amISure);
  }
}
