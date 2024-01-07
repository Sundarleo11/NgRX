import { Component } from '@angular/core';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CounterOutputComponent } from '../counter-output/counter-output.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterButtonComponent, CounterOutputComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public counter: number = 0;

  OnIncrement() {
    this.counter++;
  }
  OnDecrement() {
    this.counter--;
  }
  OnReset() {
    console.log("call")
    this.counter=0;
  }
}
