import {Component, OnInit} from '@angular/core';
import {Board} from "./modules/KnightTour/board";
import {Tour} from "./modules/KnightTour/tour";
import {bindCallback, fromEvent, Observable} from "rxjs";
import {PhaseDiagram} from "./modules/KnightTour/PhaseDiagram";
import {fromPromise} from "rxjs/internal-compatibility";
import {Position, Size} from './modules/KnightTour/types';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'kt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  fileSize: FormControl
  rankSize: FormControl

  board: Board
  tour: Tour
  size: Size

  log: PhaseDiagram[] = []

  diagram: PhaseDiagram = []


  constructor(private fb: FormBuilder) {
    this.fileSize = fb.control(8)
    this.rankSize = fb.control(8)
    this.board= new Board({file: this.fileSize.value, rank: this.rankSize.value})
    this.tour = new Tour(this.board)
    this.size = {file: this.fileSize.value, rank: this.rankSize.value}
  }

  ngOnInit() {

  }

  selectStartPosition(position: Position): void {
    console.log(this.size)
    console.log(position)
    const result = this.tour.start(position)
    console.log(result)
    this.diagram = this.board.getPhaseDiagram()
    console.log(this.board.toString())
  }

  resetBoard() {
    const size = {file: this.fileSize.value, rank: this.rankSize.value}
    this.board = new Board(size)
    this.tour = new Tour(this.board)
    this.size = size

    this.diagram = []
  }
}
