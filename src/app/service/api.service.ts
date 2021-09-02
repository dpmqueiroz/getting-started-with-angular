import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Deck, Draw } from '../api.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor( private httpClient: HttpClient ) {
}

  getDeckDraw(deckId: string = "new", numberOfCards: number = 12): Observable<Draw> {
    console.log("entrei no getDeckDraw");
    return this.httpClient.get<Draw>(`${environment.apiUrl}/deck/${deckId}/draw/?count=${numberOfCards}`);
  }

  postDeck() {
    console.log("entrei no PostDeck");
    return this.httpClient.get<Deck>(`${environment.apiUrl}/deck/new?jokers_enabled=true`, {});
  }
}
