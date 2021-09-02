import { ApiService } from './../../service/api.service';
import { Deck, Card } from './../../api.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input() deck: Deck = {};

  public cards: Card[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.deckDraw();
  }

  deckDraw(){
    this.apiService
    .getDeckDraw(this.deck.deck_id)
    .subscribe((draw) => this.cards = draw.cards);
  }

}
