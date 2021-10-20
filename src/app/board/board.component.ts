import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhaseDiagram} from '../modules/KnightTour/PhaseDiagram';
import {Position, Size} from '../modules/KnightTour/types';

@Component({
  selector: 'kt-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() size!: Size
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
