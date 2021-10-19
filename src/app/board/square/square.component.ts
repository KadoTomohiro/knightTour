import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Position} from '../../modules/KnightTour/position';

@Component({
  selector: 'kt-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() file!: number
  @Input() rank!: number
  @Input() pieceLabel!: string

  @Output() select: EventEmitter<Position> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.select.emit({file: this.file, rank: this.rank})
  }

  color(): 'light' | 'dark' {
    const fileModulo = this.file % 2
    const rankModulo = this.rank % 2
    return fileModulo === rankModulo ? 'light' : 'dark'
  }
}
