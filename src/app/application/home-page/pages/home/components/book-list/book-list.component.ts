import { Component, OnInit,  ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @ViewChild('Content', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  @Input('head') head: String;

  constructor() { }

  public pos = 0;
  navl = true;
  navr = false;
  right;

  public show: Boolean = false;

  ngOnInit() {
  }

  public poppershow() {
    this.show = true
  }
  public popperhide() {
    this.show = false;
  }

  public scrollRight(): void {
    this.pos += 1000;
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 1000), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.pos -= 1000;
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 1000), behavior: 'smooth' });
  }


  public scroll(data) {
    this.pos = data.target.scrollLeft;
    if (this.pos < 20) {
      this.navl = true;
    } else if (this.pos > 19) {
      this.navl = false;
    }

    var offsetwidth = data.target.offsetWidth;
    var width:Number = data.target.scrollWidth-20;
    this.right = this.pos + offsetwidth;

    if( this.right > (width)) {
      this.navr = true;
    } else if( this.right < (width)) {
      this.navr = false;
    }
  }



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
    {img: "https://image.ebooks.com/previews/096/096359/096359678/096359678-sml-1.jpg"}
  ];

}
