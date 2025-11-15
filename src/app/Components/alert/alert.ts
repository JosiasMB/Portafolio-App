import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
    standalone: true,

})
export class Alert {
  @Input() message: string = '';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeAlert(): void {
    this.close.emit();
  }
}
