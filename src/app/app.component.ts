import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from './counter/state/counter.selector';
import { AppState } from './counter/state/counter.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,CounterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx';

  count$!: Observable<number>;

  constructor(private store: Store<AppState>){
    this.count$=this.store.select(selectCount)
  }
}
