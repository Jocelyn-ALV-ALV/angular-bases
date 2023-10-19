import { Component} from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-counter',
  template: `
  <h3>  Counter: {{counter}} </h3>
  <button (click)="sumarCounter()">+1</button>
  <button (click)="restarCounter()">-1</button>
  <button (click)="resetCounter()">Reset</button>

  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  sumarCounter(): void{
    this.counter++
  }

  restarCounter(): void{
    this.counter--
  }

  resetCounter(): void{
    this.counter = 10;
  }


}
