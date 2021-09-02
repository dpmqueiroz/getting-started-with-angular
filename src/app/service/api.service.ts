import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Deck, Draw } from '../api.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 urlapi: string;
constructor( private httpClient: HttpClient ) {
  this.urlapi = `${environment.apiUrl}`
}

  getDeckDraw(deckId: string = "new", numberOfCards: number = 5): Observable<Draw> {
    return this.httpClient.get<Draw>(`${this.urlapi}/deck/${deckId}/draw/?count=${numberOfCards}`);
  }

  postDeck() {
    return this.httpClient.get<Deck>(`${this.urlapi}/deck/new?jokers_enabled=true`, {});
  }
}
