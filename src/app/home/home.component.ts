import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchVariable: any = ''
  cardsList: Array<any> = [{
    name: 'Name 1', title: 'Title 1', description: `Some quick example text to build on the card title and make up the bulk of the
  card's content.`},
  {
    name: 'Name 2', title: 'Title 2', description: `Some quick example text to build on the card title and make up the bulk of the
  card's content.`},
  {
    name: 'Name 3', title: 'Title 3', description: `Some quick example text to build on the card title and make up the bulk of the
  card's content.`}]
  constructor() { }

  ngOnInit(): void {
  }

}
