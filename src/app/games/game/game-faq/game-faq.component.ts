import { KeyValue } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GamesService } from 'src/app/games/games.service';
import { IGame } from 'src/app/games/games.service.interface';


/**
 * A single project displayed in a box, alongside one or more graphs.
 */
 @Component({
  selector: 'game-faq',
  templateUrl: './game-faq.component.html',
  styleUrls: ['./game-faq.component.scss']
})
export class GameFAQComponent {
  
  constructor(private gamesService: GamesService) { }

  
  @Input() game: IGame = null;

  onLoad(arg) {}
  onError(arg) {}

}