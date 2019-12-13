import { Component, OnInit } from '@angular/core';

import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

import { InfiniteScrollService } from '../services/infinite-scroll.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {


  public show: Boolean = false;

  public routerLoading: Boolean = false;
  
  constructor(private _scrollService: InfiniteScrollService, private _router: Router) {

    document.addEventListener('keyup', () => {
      console.log('key pressed');
    })
    

    this._router.events.subscribe((event: Event) => {
      switch(true) {
        case event instanceof NavigationStart: {
          this.routerLoading = true;
          break;
        }

        case event instanceof NavigationEnd: {
          this.routerLoading = false;
          break;
        }

        case event instanceof NavigationCancel: {
          this.routerLoading = false;
          break;
        }

        case event instanceof NavigationError: {
          this.routerLoading = false;
          break;
        }

        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
  }

  public poppershow() {
    this.show = true
  }
  public popperhide() {
    this.show = false;
  }

  onScroll() {
    this._scrollService.scrolled();
  }



}
