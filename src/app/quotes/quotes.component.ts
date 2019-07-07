import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes (1, 'quote 1',  0 , 0, 0, 0, 'Brian', new Date(21 / 6 / 2017)),
    new Quotes (2, 'quote 2',  0 , 0, 0, 0, 'Brian', new Date(21 / 6 / 2017)),
    new Quotes (3, 'quote 3',  0 , 0, 0, 0, 'Brian', new Date(21 / 6 / 2017)),
    new Quotes (4, 'quote 4',  0 , 0, 0, 0, 'Brian', new Date(21 / 6 / 2017)),
    new Quotes (5, 'quote 5',  0 , 0, 0, 0, 'Brian', new Date(21 / 6 / 2017)),
    new Quotes (6, 'quote 6',  0 , 0, 0, 0, 'Brian', new Date(21 / 6 / 2017)),
  ];

  togleDetails(index) {
    this.quotes[index].showUploader = !this.quotes[index].showUploader;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      // tslint:disable-next-line: prefer-const
      let toDelete = confirm(`Are you sure you want to delete this ${this.quotes[index].name}`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

// tslint:disable-next-line: no-shadowed-variable
  addNewQuote(Quotes: Quotes) {
// tslint:disable-next-line: prefer-const
    let quoteLength = this.quotes.length;
    Quotes.id = quoteLength + 1;
    Quotes.completeDate = new Date(Quotes.completeDate);
    this.quotes.push(Quotes);
  }
  upVoted() {
    let clicks = 0;
    clicks = clicks + 1;

  }
  downVoted() {
    let clicks = 0;
    clicks = clicks - 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
