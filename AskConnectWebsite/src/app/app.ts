import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AskConnectWebsite');

  private isNavbarOpened: boolean = false;

  @ViewChild("navbar") navbar?: ElementRef;

  @ViewChild("logo") logo?: ElementRef;

  private hoverTimeoutId? : number;

  constructor(private router: Router)
  {

  }


  hoverIn()
  {
    this.hoverTimeoutId = setTimeout(() => {
      this.openNavbar();
    }, 250)

  }

  hoverOut()
  {
    clearTimeout(this.hoverTimeoutId);

    this.closeNavbar();
  }


  OnChangeNavbarState()
  {

    if(this.isNavbarOpened)
    {
      this.closeNavbar();
      return;
    }

    this.openNavbar();
  }


  openNavbar()
  {
      (this.navbar?.nativeElement as HTMLElement).classList.remove('shrink');
      (this.navbar?.nativeElement as HTMLElement).classList.add('expand');
      (this.navbar?.nativeElement as HTMLElement).classList.add('mybgBlue');
      (this.logo?.nativeElement as HTMLElement).classList.add('zoomIn');
      (this.logo?.nativeElement as HTMLElement).classList.remove('zoomOut');

      document.getElementById('navigationMenu')!.style.display = 'block';
      this.isNavbarOpened = true;
  }

closeNavbar()
  {

    (this.navbar?.nativeElement as HTMLElement).classList.add('shrink');
    (this.navbar?.nativeElement as HTMLElement).classList.remove('expand');
    (this.navbar?.nativeElement as HTMLElement).classList.remove('mybgBlue');
    (this.logo?.nativeElement as HTMLElement).classList.add('zoomOut');
    (this.logo?.nativeElement as HTMLElement).classList.remove('zoomIn');

    document.getElementById('navigationMenu')!.style.display = 'none';
    this.isNavbarOpened = false;
  }


  navigatebyUrl(url: string)
  {
    this.router.navigateByUrl(url);
    
    setTimeout(() => {
      this.closeNavbar();
    },100);
  }

  navigateWithFragment(event: Event, url: string, fragment: string)
  {
    this.router.navigate([url], {fragment: fragment});

        setTimeout(() => {
      this.closeNavbar();
    },100);
  }


  stopPropagation(event: Event)
  {
    event.stopImmediatePropagation();
  }
}
