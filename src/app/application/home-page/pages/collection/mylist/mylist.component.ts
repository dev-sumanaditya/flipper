import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { InfiniteScrollService } from '../../../services/infinite-scroll.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  constructor(private _scroll: InfiniteScrollService) { }

  subscription: Subscription;

  ngOnInit() {
    this.subscription = this._scroll.getData().subscribe(
      data => {
        this.addToList();
      }
    )
  }

  items = [1,1,1,1,1,1,1];

  addToList() {
    for(let i=0; i<=3; i++) {
      this.items.push(1);
    }
  }
}
