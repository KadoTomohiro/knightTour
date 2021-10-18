import {Component, Input, OnInit} from '@angular/core';
import {Board} from '../modules/KnightTour/board';
import {PhaseDiagram} from '../modules/KnightTour/PhaseDiagram';
import {Observable} from "rxjs";

@Component({
  selector: 'kt-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {


  @Input() diagram!: PhaseDiagram
  constructor() {}
  ngOnInit(): void {
  }

}
