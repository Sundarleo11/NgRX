import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css',
})
export class CounterButtonComponent {
  @Output() Increment = new EventEmitter<void>();
  @Output() Decrement = new EventEmitter<void>();
  @Output() Reset = new EventEmitter<void>();
  OnIncrement() {
    this.Increment.emit();
  }
  OnDecrement() {
    this.Decrement.emit();
  }
  OnReset() {
    this.Reset.emit();
  }
}
