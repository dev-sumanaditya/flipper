import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fiction = [
    {name: 'Action and Adventure', url:''},
    {name: 'Anthology', url:''},
    {name: 'Classic', url:''},
    {name: 'Comic and Graphic Novel', url:''},
    {name: 'Crime and Detective', url:''},
    {name: 'Drama', url:''},
    {name: 'Fable', url:''},
    {name: 'Fairy tale', url:''},
    {name: 'Fan-Fiction', url:''},
    {name: 'Fantasy', url:''},
    {name: 'Historical Fiction', url:''},
    {name: 'Horror', url:''},
    {name: 'Humor', url:''},
    {name: 'Legend', url:''},
    {name: 'Magical Realism', url:''},
    {name: 'Mystery', url:''},
    {name: 'Mythology', url:''},
    {name: 'Realistic Fiction', url:''},
    {name: 'Romance', url:''},
    {name: 'Satire', url:''},
    {name: 'Sci-Fi', url:''},
    {name: 'Short Story', url:''},
    {name: 'Suspense/Thriller', url:''},
  ];

  nonFiction = [
    {name: 'Biography/Autobiography', url:''},
    {name: 'Essay', url:''},
    {name: 'Memoir', url:''},
    {name: 'Narrative Nonfiction', url:''},
    {name: 'Periodicals', url:''},
    {name: 'Refrence Books', url:''},
    {name: 'Self-help Books', url:''},
    {name: 'Speech', url:''},
    {name: 'Textbook', url:''},
    {name: 'Poetry', url:''},
  ]

}
