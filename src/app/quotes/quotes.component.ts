import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  Quotes = [
    new Quotes(1, 'quote1', 'Brian', new Date(21 / 6 / 2017)),
    new Quotes(2, 'quote 2', 'Brian', new Date(21 / 6 / 2017)),
    new Quotes(3, 'quote 3', 'Brian', new Date(21 / 6 / 2017)),
    new Quotes(4, 'quote 4', 'Brian', new Date(21 / 6 / 2017)),
    new Quotes(5, 'quote 5', 'Brian', new Date(21 / 6 / 2017)),
    new Quotes(6, 'quote 6', 'Brian', new Date(21 / 6 / 2017)),
  ];

  deleteQuote(complete, index) {
    if (complete) {
      this.Quotes.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
