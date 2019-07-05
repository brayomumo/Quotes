import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  Quotes = [
    new Quotes(1, 'quote 1',  0 , 0, 'Brian', new Date(21 / 6 / 2017)),
    new Quotes(2, 'quote 2',  0 , 0, 'Brian', new Date(21 / 6 / 2017)),
    new Quotes(3, 'quote 3',  0 , 0, 'Brian', new Date(21 / 6 / 2017)),
    new Quotes(4, 'quote 4',  0 , 0, 'Brian', new Date(21 / 6 / 2017)),
    new Quotes(5, 'quote 5',  0 , 0, 'Brian', new Date(21 / 6 / 2017)),
    new Quotes(6, 'quote 6',  0 , 0, 'Brian', new Date(21 / 6 / 2017)),
  ];

  togleDetails(index) {
    this.Quotes[index].showUploader = !this.Quotes[index].showUploader;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      // tslint:disable-next-line: prefer-const
      let toDelete = confirm(`Are you sure you want to delete this ${this.Quotes[index].name}`);
      if (toDelete) {
        this.Quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(Quotes) {
// tslint:disable-next-line: prefer-const
    let quoteLength = this.Quotes.length;
    Quotes.id = quoteLength + 1;
    Quotes.completeDate = new Date(Quotes.completeDate);
    this.Quotes.push(Quotes)
  }

  constructor() { }

  ngOnInit() {
  }

}
