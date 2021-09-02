import { ApiService } from './../../service/api.service';
import { Deck, Card, Draw } from './../../api.models';
import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnChanges {

  @Input() draw!: Draw;

  public cards: Card[] = [];

  constructor() { }

  ngOnChanges(){
    this.cards = this.draw.cards;
  }

}
