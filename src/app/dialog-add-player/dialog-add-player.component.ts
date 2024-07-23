// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dialog-add-player',
//   standalone: true,
//   imports: [],
//   templateUrl: './dialog-add-player.component.html',
//   styleUrl: './dialog-add-player.component.scss'
// })
// export class DialogAddPlayerComponent {
// name: string = '';
// }

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogModule, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
