import { Component } from '@angular/core';
import {Board} from "./modules/KnightTour/board";
import {Tour} from "./modules/KnightTour/tour";
import {bindCallback, fromEvent, Observable} from "rxjs";
import {PhaseDiagram} from "./modules/KnightTour/PhaseDiagram";
import {fromPromise} from "rxjs/internal-compatibility";

@Component({
  selector: 'kt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fileSize: number =8
  rankSize: number = 8

  tour: Tour

  log: PhaseDiagram[] = []

  diagram: PhaseDiagram = []


  constructor() {
    const board= new Board(8, 8)
    this.tour = new Tour(board)
    this.tour.start({file: 0, rank: 0})

    this.diagram = board.getPhaseDiagram()
  }
}
