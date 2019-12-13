import { Component, OnInit, ViewChild, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import { AngularEpubViewerComponent } from 'angular-epub-viewer';

import {Location} from '@angular/common';
import * as $ from 'jquery';



export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-epub',
  templateUrl: './epub.component.html',
  styleUrls: ['./epub.component.css']
})
export class EpubComponent implements OnInit, AfterViewInit {


  globalListenFunc: Function;

  constructor(private _location: Location, private renderer: Renderer2) {
    document.addEventListener('keyup', (e) => {
      console.log('key pressed');

      if (e.keyCode == KEY_CODE.RIGHT_ARROW) {
        this.nextpg();
      }
      
      if (e.keyCode == KEY_CODE.LEFT_ARROW) {
        this.previouspg();
      }
    });
  }

  @ViewChild('epubViewer')
  epubViewer: AngularEpubViewerComponent;


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.epubViewer.openLink('assets/file2.epub');
    this.epubViewer.setStyle('background','#ddd');
  }




  public darkmode: boolean = false;
  public displayOverlay: boolean = false;
  public i: number= 0;
  public checkingMovement = false;
  public fontSize: number = 16;
  public fullscr: boolean = false;
  public rWidth:number = 30;


  public elem = document.documentElement;

  trackchange(event) {
    var max = event.target.max;
    var current = event.target.value;
    var width = (current / max)*100;
    this.rWidth = Math.round(width);
    console.log(this.rWidth);
  }

  toggleFullscreen() {
    if (this.elem.requestFullscreen && !this.fullscr) {
      this.elem.requestFullscreen();
      this.fullscr = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        this.fullscr = false;
      }
    }
  }
  closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  nextpg() {
    this.epubViewer.nextPage();
  }
  previouspg() {
    this.epubViewer.previousPage();
  }
  

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    this.displayOverlay = true;
    this.i = 0;
    if(!this.checkingMovement) {
      this.check();
    }
  }

  @HostListener('window:click', ['$event'])
  onMouseClick() {
    this.i = 0;
  }
  

  // @HostListener('window:keyup', ['$event'])
  // keyEvent(event: KeyboardEvent) {
  //   console.log(event);
  
  //   if (event.keyCode == KEY_CODE.RIGHT_ARROW) {
  //     this.epubViewer.nextPage();
  //   }

  //   if (event.keyCode == KEY_CODE.LEFT_ARROW) {
  //     this.epubViewer.previousPage();
  //   }
  // }





  check() {
    this.checkingMovement = true;
    let int = setInterval(() => {
      this.i++;
      if(this.i > 15) {
        this.checkingMovement = false; 
        this.displayOverlay = false;
        clearInterval(int);
      }
    }, 100);
  }

  toggleHide() {
    if(this.displayOverlay) {
      this.displayOverlay = false;
    }
  }

 

  close() {
    this._location.back();
    this.closeFullscreen()
  }

  resetStyle() {
    this.epubViewer.resetStyle('font-weight');
    this.epubViewer.resetStyle('font-size');
    this.epubViewer.resetStyle('color');
    this.epubViewer.resetStyle('font-family');
    this.epubViewer.resetStyle('background');
    this.darkmode = false;
  }

  dark() {
    this.epubViewer.setStyle('background', '#000');
    this.epubViewer.setStyle('color', '#fff');
    this.epubViewer.setStyle('font-size', '18px;');
    this.darkmode = true;
  }

  incrementFont() {
    if (this.fontSize < 25) {
      this.fontSize += 2;
      this.epubViewer.setStyle('font-size',''+this.fontSize+'');
    }
  }

  decrementFont() {
    if (this.fontSize > 16) {
      this.fontSize -= 2;
      this.epubViewer.setStyle('font-size',''+this.fontSize+'');
    }
  }
}
