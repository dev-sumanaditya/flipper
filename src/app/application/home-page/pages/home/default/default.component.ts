import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  public headings = [
    {name: 'Continue Reading'},
    {name: 'Trending'},
    {name: 'BestSellers'},
    {name: 'Top Picks for You'},
    {name: 'New Arrival'}
  ];



  carouselOptions: OwlOptions = {
    margin: 0,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  slidesStore = [
    {
      image: "https://i.imgur.com/qPOgFl9.png"
    },
    {
      image: "https://ps.w.org/wp-carousel-free/assets/banner-1544x500.png?rev=2000936"
    },
    {
      image: "https://www.t2template.com/wp-content/uploads/2017/11/3D-jQuery-Carousel.jpg"
    },
    {
      image: "https://ps.w.org/wp-carousel-free/assets/banner-1544x500.png?rev=2000936"
    },
    {
      image: "https://www.t2template.com/wp-content/uploads/2017/11/3D-jQuery-Carousel.jpg"
    },
    {
      image: "https://ps.w.org/wp-carousel-free/assets/banner-1544x500.png?rev=2000936"
    }
  ];

  constructor() { }

  ngOnInit() {
  }


}
