import {Component, Input, OnInit} from '@angular/core';
import {Board} from '../modules/KnightTour/board';
import {PhaseDiagram} from '../modules/KnightTour/PhaseDiagram';

@Component({
  selector: 'kt-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {


  @Input() board!: Board
  constructor() {}
  ngOnInit(): void {
  }

  get diagram():  PhaseDiagram {
    return this.board.getPhaseDiagram()
  }

}
