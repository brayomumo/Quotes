import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  Quotes = [
    new Quotes(1, 'quote1', new Date(21 / 6 / 2017)),
    new Quotes(2, 'quote 2', new Date(21 / 6 / 2017)),
    new Quotes(3, 'quote 3', new Date(21 / 6 / 2017)),
    new Quotes(4, 'quote 4', new Date(21 / 6 / 2017)),
    new Quotes(5, 'quote 5', new Date(21 / 6 / 2017)),
    new Quotes(6, 'quote 6', new Date(21 / 6 / 2017)),
  ];

  constructor() { }

  ngOnInit() {
  }

}
