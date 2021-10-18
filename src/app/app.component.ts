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
  title = 'knightTour';
  tour: Tour

  log: PhaseDiagram[] = []

  diagram: PhaseDiagram = []

  observedDiagram: Observable<PhaseDiagram>

  constructor() {
    const board= new Board(5, 5)
    this.tour = new Tour(board)
    this.observedDiagram = bindCallback<PhaseDiagram>(board.subscribe)()

    new Promise<void>(((resolve, reject) => {
      const result = this.tour.start({file: 0, rank: 0})
      if (result === 'success') {
        this.diagram = board.getPhaseDiagram()

        resolve()
      }
      reject()
    })).then()

  }
}
