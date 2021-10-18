import {Piece} from "./piece";
import {Position} from "./position";
import {EmptyPiece} from './empty-piece';

export class Square {
  private _piece: Piece
  private _emptyPiece = new EmptyPiece()
  constructor() {
    this._piece =  this._emptyPiece
  }

  put(piece: Piece) {
    this._piece = piece
  }

  remove() {
    this._piece = this._emptyPiece
  }

  get piece(): Piece {
    return this._piece
  }

  get empty(): boolean {
    return this._piece === this._emptyPiece
  }
}

export class Squares {
  private readonly squares: Square[][]
  constructor(private fileSize: number, private rankSize: number) {
    this.squares = []
    for (let rank = 0; rank < this.rankSize; rank++) {
      const files = []
      for (let file = 0; file < this.fileSize; file++) {
        files.push(new Square())
      }
      this.squares.push(files)
    }
  }

  pieceCount(): number {
    return this.flatSquares
      .filter(square => !square.empty)
      .length
  }

  get flatSquares() {
    return this.squares
      .flat();
  }

  get(position: Position): Square {
    return this.squares[position.rank][position.file]
  }

  toString() {
    return this.squares
      .map(files => files
        .map(square => (square.piece?.toString() ?? '').padStart(2, ' '))
        .join(','))
      .join('\n')

  }
}
