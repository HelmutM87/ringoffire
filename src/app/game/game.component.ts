
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from './../../models/game';  // Importiere die Game-Klasse
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PlayerComponent } from '../player/player.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatIconModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose, DialogAddPlayerComponent, GameInfoComponent, MatCardModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor(public dialog: MatDialog) {
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
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() || '';  // Verwende einen Default-Wert
      console.log(this.currentCard);

      this.pickCardAnimation = true;
      console.log('new card:' + this.currentCard);
      console.log('Game is', this.game);

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
    });

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }

}
