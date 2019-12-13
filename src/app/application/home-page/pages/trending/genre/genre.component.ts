import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InfiniteScrollService } from '../../../services/infinite-scroll.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit, OnDestroy {

  subscription: Subscription;


  constructor(private _scrollService: InfiniteScrollService) { }

  ngOnInit() {
    this.subscription = this._scrollService.getData()
      .subscribe(
        data => {
          console.log(data);
          this.append();
        }
      );
  }
  ngOnDestroy() {   // not called
    this.subscription.unsubscribe();
  }

  public show: Boolean = false;

  public items = [
    {img: "https://image.ebooks.com/previews/209/209531/209531421/209531421-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/095/095928/095928510/095928510-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/096/096353/096353963/096353963-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/002/002417/002417314/002417314-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/000/000946/000946470/000946470-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/000/000357/000357428/000357428-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/001/001711/001711945/001711945-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/096/096034/096034347/096034347-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/096/096359/096359678/096359678-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/002/002417/002417314/002417314-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/000/000946/000946470/000946470-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/000/000357/000357428/000357428-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/001/001711/001711945/001711945-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/096/096034/096034347/096034347-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/096/096359/096359678/096359678-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/002/002417/002417314/002417314-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/000/000946/000946470/000946470-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/000/000357/000357428/000357428-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/001/001711/001711945/001711945-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/096/096034/096034347/096034347-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/096/096359/096359678/096359678-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/002/002417/002417314/002417314-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/000/000946/000946470/000946470-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/000/000357/000357428/000357428-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/001/001711/001711945/001711945-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/096/096034/096034347/096034347-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/096/096359/096359678/096359678-sml-1.jpg"},
    {img: "https://image.ebooks.com/previews/000/000357/000357428/000357428-sml-1.jpg"}
  ];

  append() {
    let its = {img: "https://image.ebooks.com/previews/002/002417/002417314/002417314-sml-1.jpg"};
    for (let i=0; i<28; i++) {
      this.items.push(its);
    }
  }


  public poppershow() {
    this.show = true
  }
  public popperhide() {
    this.show = false;
  }
}
