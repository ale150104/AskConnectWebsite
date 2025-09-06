import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AskConnectWebsite');


  constructor(private router: Router)
  {

  }



  hoverIn(el: any) {
        console.log(el.target);
      el.target.classList.remove('shrink');
      el.target.classList.add('expand');
      document.getElementById('navigationMenu')!.style.display = 'block';
  }
  
  hoverOut(el:any ) {
    console.log(el);
        el.target.classList.add('shrink');
        el.target.classList.remove('expand');
        document.getElementById('navigationMenu')!.style.display = 'none';
  }



  navigatebyUrl(url: string)
  {
    this.router.navigateByUrl(url);
  }

}
