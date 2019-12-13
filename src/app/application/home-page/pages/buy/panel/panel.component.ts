import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public addingToCart = false;
  public addedToCart = false;

  public data: any = [
    {
      tag: 'Highlights', details: [
        'Language: English',
        'Genre: Fiction',
        'Binding: Paperback',
        'Publisher: Perfection Learning',
        'ISBN: 9781613832776, 9781613832776',
        'Pages: 835',
      ]
    },
    {
      tag: 'Services', details: [
        '10 Days Replacement Policy',
        'Gift Wrap available'
      ]
    }
  ];

  addToCartFn() {
    if(!this.addedToCart) {
      this.addingToCart = true;
      setTimeout(()=>{
        this.addedToCart = true;
        this.addingToCart = false;
      },1000);
    }
    else return;
  }


  
}
