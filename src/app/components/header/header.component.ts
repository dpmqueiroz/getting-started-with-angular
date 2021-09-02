import { ApiService } from './../../service/api.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Deck } from '../../api.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onNewDeck: EventEmitter<Deck> = new EventEmitter<Deck>();

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

  }

  newDeck() {
    this.onNewDeck.emit();
  }

}
