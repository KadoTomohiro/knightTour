import {Piece} from "./piece";
import {Position} from "./position";

export class Square {
  private _piece: Piece | null = null
  constructor(private position: Position) {}

  put(piece: Piece) {
    this._piece = piece
  }

  remove() {
    this._piece = null
  }

  get piece(): Piece | null {
    return this._piece
  }

  get empty(): boolean {
    return this._piece === null
  }
}

export class Squares {
  private readonly squares: Square[][]
  constructor(private fileSize: number, private rankSize: number) {
    this.squares = []
    for (let rank = 0; rank < this.rankSize; rank++) {
      const files = []
      for (let file = 0; file < this.fileSize; file++) {
        files.push(new Square({file, rank}))
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

  getPositionIndex(position: Position): number {
    return position.rank * this.fileSize + position.file
  }

  toString() {
    return this.squares
      .map(files => files
        .map(square => (square.piece?.toString() ?? '').padStart(2, ' '))
        .join(','))
      .join('\n')

  }
}
