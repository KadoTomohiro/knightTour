import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Board} from '../modules/KnightTour/board';
import {PhaseDiagram} from '../modules/KnightTour/PhaseDiagram';
import {Observable} from "rxjs";
import {Position} from '../modules/KnightTour/position';

@Component({
  selector: 'kt-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() fileSize!: number
  @Input() rankSize!:  number
  @Input() diagram: PhaseDiagram = []

  @Output() selectSquare: EventEmitter<Position> =  new EventEmitter<Position>()

  constructor() {}
  ngOnInit(): void {
  }

  onSelect(position: Position) {
    this.selectSquare.emit(position)
  }

  range(size:  number): number[] {
    return [...Array(size).keys()]
  }

  pieceLabel(file: number, rank: number): string {
    const files = this.diagram[rank]
    if (!files) return ''
    const square = files[file]

    return square?.toString() ?? ''
  }

}
