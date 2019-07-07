import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() Quotes: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();


  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

// // tslint:disable-next-line: member-ordering
//   upVotes = this.Quotes.uvotes;
// // tslint:disable-next-line: member-ordering
//   downVotes = this.Quotes.dvotes;

//   upVoted() {
//     this.upVotes = this.upVotes + 1;
//   }
//   downVoted() {
//     this.downVotes = this.upVotes + 1;
//   }



  constructor() { }

  ngOnInit() {


  }
}
