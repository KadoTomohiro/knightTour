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
    const board= new Board(5, 5)
    this.tour = new Tour(board)

    this.tour.start({file: 0, rank: 0})

    this.board = board
  }
}
