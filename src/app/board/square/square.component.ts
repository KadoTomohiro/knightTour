import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'kt-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() file!: number
  @Input() rank!: number
  @Input() pieceLabel!: string
  constructor() { }

  ngOnInit(): void {
  }

  color(): 'light' | 'dark' {
    const fileModulo = this.file % 2
    const rankModulo = this.rank % 2
    return fileModulo === rankModulo ? 'light' : 'dark'
  }
}
