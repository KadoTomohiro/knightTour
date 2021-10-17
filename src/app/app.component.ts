import { Component } from '@angular/core';
import {Board} from "./modules/KnightTour/board";
import {Tour} from "./modules/KnightTour/tour";

@Component({
  selector: 'kt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'knightTour';

  board: Board
  tour: Tour

  constructor() {
    this.board = new Board(10, 10)
    this.tour = new Tour(this.board)

    this.tour.start({file: 0, rank: 0})

  }
}
