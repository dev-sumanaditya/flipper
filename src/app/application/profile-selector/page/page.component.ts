import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private url: String;
  private state: String;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.url = this.router.url;
    if(this.url === '/en/user') {
      this.state = 'user';
    } else if (this.url === '/en/user/manage') {
      this.state = 'manage';
    } else if (this.url === '/en/user/edit') {
      this.state = 'edit';
    }
  }


  openManage() {
    this.state = 'manage';
  }
  close() {
    this.state = 'user';
  }

}
