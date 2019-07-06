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

  upVoted(complete: boolean) {

  }
  downVoted(complete: boolean) {

  }
  constructor() { }

  ngOnInit() {


  }
}
