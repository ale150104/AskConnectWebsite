import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ablauf',
  imports: [],
  templateUrl: './ablauf.html',
  styleUrl: './ablauf.css'
})
export class Ablauf {

    
  protected show = signal<boolean>(false);


    ngAfterViewInit(): void {
    setTimeout(() => {
      this.show.update(() => !this.show());
    }, 100);
  }

}
