// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-player',
//   standalone: true,
//   imports: [],
//   templateUrl: './player.component.html',
//   styleUrl: './player.component.scss'
// })
// export class PlayerComponent {

//   @Input() name;

// }


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']  // Es sollte "styleUrls" anstelle von "styleUrl" sein
})
export class PlayerComponent {
  @Input() name!: string;
  @Input() playerActive:boolean = false;

}
