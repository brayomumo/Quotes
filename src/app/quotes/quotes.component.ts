import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
// tslint:disable-next-line: max-line-length
    new Quotes(1, 'Live as if you were to die tomorrow. Learn as if you were to live forever by  Mahatma Gandhi', 0, 0, 'Brian', new Date(7 / 7 / 2019)),
    new Quotes(2, 'That which does not kill us makes us stronger by  Friedrich Nietzsche', 0, 0, 'Brian', new Date(7 / 7 / 2019)),
// tslint:disable-next-line: max-line-length
    new Quotes(3, 'We must not allow other people’s limited perceptions to define us by Virginia Satir', 0, 0, 'Brian', new Date(7 / 7 / 2019)),
    new Quotes(4, 'If you cannot do great things, do small things in a great way by Napoleon Hill', 0, 0, 'Brian', new Date(7 / 7 / 2019)),
  ];



  togleDetails(index) {
    this.quotes[index].showUploader = !this.quotes[index].showUploader;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      // tslint:disable-next-line: prefer-const
      let toDelete = confirm(`Are you sure you want to delete quote ${this.quotes[index].id}`);
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



  constructor() { }

  ngOnInit() {
  }

}
