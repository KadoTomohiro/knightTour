import {Position, Size} from './types';
import {Square} from './square';
import {Knight} from "./knight";
import {Marker} from "./marker";
import {PhaseDiagram} from './PhaseDiagram';
import {Piece} from './piece';

type Move = {
  from: Position
  to: Position
  piece: Piece
}

type BoardRecord = Move[]

export class Board {
  currentPosition: Position | null = null
  private knight = new Knight()
  private readonly squares: Square[][]
  private record: BoardRecord =  []

  constructor(private size: Size) {
    if (!Board.validSize(this.size.file)) throw new RangeError('fileSize require nature number')
    if (!Board.validSize(this.size.rank)) throw new RangeError('rankSize require nature number')
    this.squares = []
    for (let rank = 0; rank < this.size.rank; rank++) {
      const files = []
      for (let file = 0; file < this.size.file; file++) {
        files.push(new Square())
      }
      this.squares.push(files)
    }
  }

// 盤面のマス数
  get squareCount(): number {
    return this.size.file * this.size.rank
  }

  get filledSquares(): boolean {
    return this.pieceCount() === this.squareCount
  }

  pieceCount(): number {
    return this.flatSquares
      .filter(square => !square.empty)
      .length
  }

  move(piece: Piece, nextPosition: Position): void {
    const currentPosition =  piece.position
    this.record.push({piece, from: currentPosition, to: nextPosition})
    piece.put(nextPosition)

    this.getSquare(currentPosition).put(new Marker(this.pieceCount()))
    this.getSquare(nextPosition).put(piece)

    this.currentPosition = nextPosition

  }

  back(position: Position): void {
    this.getSquare(position).remove()
  }

  nextPosition(currentPosition: Position): Position[] {
    if (!currentPosition) return []
    return this.knight.destination(currentPosition)
      .filter(position => this.insideBoard(position))
      .filter(position => this.getSquare(position).empty)
  }

  insideBoard(position: Position): boolean {
    const {file, rank} =  position
    const insideFile = 0 <= file && file < this.size.file
    const insideRank = 0 <= rank && rank < this.size.rank
    return insideFile && insideRank
  }

  private static validSize(size: number): boolean {
    return size > 0 && Number.isInteger(size);
  }

  getPhaseDiagram(): PhaseDiagram {
    const diagram: PhaseDiagram = []
    for(let rank = 0; rank < this.size.rank; rank++) {
      const rankPieces = []
      for(let file = 0; file < this.size.file; file++) {
        rankPieces.push(this.getSquare({file, rank}).piece)
      }
      diagram.push(rankPieces)
    }
    return diagram
  }

  clearAll() {
    this.flatSquares.forEach((square: Square) => square.remove())
  }

  get flatSquares() {
    return this.squares
      .flat();
  }

  private getSquare(position: Position): Square {
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
