import {Component, OnInit} from '@angular/core';
import {Board} from "./modules/KnightTour/board";
import {Tour} from "./modules/KnightTour/tour";
import {bindCallback, fromEvent, Observable} from "rxjs";
import {PhaseDiagram} from "./modules/KnightTour/PhaseDiagram";
import {fromPromise} from "rxjs/internal-compatibility";
import {Position} from "./modules/KnightTour/position";

@Component({
  selector: 'kt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  fileSize: number =8
  rankSize: number = 8

  board: Board
  tour: Tour

  log: PhaseDiagram[] = []

  diagram: PhaseDiagram = []


  constructor() {
    this.board= new Board(this.fileSize, this.rankSize)
    this.tour = new Tour(this.board)
  }

  ngOnInit() {

  }

  selectStartPosition(position: Position): void {
    console.log(position)
    const result = this.tour.start(position)
    console.log(result)
    this.diagram = this.board.getPhaseDiagram()
    console.log(this.board.toString())
  }

  resetBoard() {
    this.board = new Board(this.rankSize, this.fileSize)
    this.tour = new Tour(this.board)
    this.diagram = []
  }
}
