import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home-component',
  imports: [ ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  
})
export class HomeComponent implements AfterViewInit {
  
  protected show = signal<boolean>(false);


  constructor(private router: Router,
    private route: ActivatedRoute
  ){}

    ngAfterViewInit(): void {
    setTimeout(() => {
      this.show.update(() => !this.show());
    }, 100);


    // Wait for the NavigationEnd event and then handle scrolling
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.scrollToFragment();
    });
  }

  // Function to scroll to the fragment (heading) if it exists
  private scrollToFragment(): void {
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        // Scroll to the element with a smooth scroll effect
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
  }
  

}


