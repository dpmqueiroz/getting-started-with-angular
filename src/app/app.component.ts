import { Component, OnInit } from '@angular/core';
import { Deck, Draw } from './api.models';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public draw!: Draw;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.novoDeck();
  }

  novoDeck(){
    this.apiService
      .getDeckDraw()
      .subscribe((draw) => this.draw = draw);
  }
}
