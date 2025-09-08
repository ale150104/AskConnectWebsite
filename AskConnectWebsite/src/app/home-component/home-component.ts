import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, signal } from '@angular/core';

@Component({
  selector: 'app-home-component',
  imports: [ ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  
})
export class HomeComponent implements AfterViewInit {
  
  protected show = signal<boolean>(false);


    ngAfterViewInit(): void {
    setTimeout(() => {
      this.show.update(() => !this.show());
    }, 100);
  }
  

}


