import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from './../../models/game';  // Importiere die Game-Klasse

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game;

  constructor() {
    this.game = new Game();  // Initialisiere das Spiel im Konstruktor
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    this.pickCardAnimation = true;
  }
}
