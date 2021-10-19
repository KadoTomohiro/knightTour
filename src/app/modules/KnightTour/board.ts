import {Position} from "./position";
import {Square} from './square';
import {Knight} from "./knight";
import {Marker} from "./marker";
import {PhaseDiagram} from './PhaseDiagram';

export class Board {
  currentPosition: Position | null = null
  private knight = new Knight()
  private readonly squares: Square[][]

  constructor(private fileSize: number, private rankSize: number) {
    if (!Board.validSize(this.fileSize)) throw new RangeError('fileSize require nature number')
    if (!Board.validSize(this.rankSize)) throw new RangeError('rankSize require nature number')
    this.squares = []
    for (let rank = 0; rank < this.rankSize; rank++) {
      const files = []
      for (let file = 0; file < this.fileSize; file++) {
        files.push(new Square())
      }
      this.squares.push(files)
    }
  }

// 盤面のマス数
  get size(): number {
    return this.fileSize * this.rankSize
  }

  get filledSquares(): boolean {
    return this.pieceCount() === this.size
  }

  pieceCount(): number {
    return this.flatSquares
      .filter(square => !square.empty)
      .length
  }

  move(nextPosition: Position): void {
    this.getSquare(nextPosition).put(new Marker(this.pieceCount() + 1))
    this.currentPosition = nextPosition

  }

  back(position: Position): void {
    this.getSquare(position).remove()

  }

  nextPosition(currentPosition = this.currentPosition): Position[] {
    if (!currentPosition) return []
    return this.knight.destination(currentPosition)
      .filter(position => this.insideBoard(position))
      .filter(position => this.getSquare(position).empty)
  }

  insideBoard(position: Position): boolean {
    const {file, rank} =  position
    const insideFile = 0 <= file && file < this.fileSize
    const insideRank = 0 <= rank && rank < this.rankSize
    return insideFile && insideRank
  }

  private static validSize(size: number): boolean {
    return size > 0 && Number.isInteger(size);
  }

  getPhaseDiagram(): PhaseDiagram {
    const diagram: PhaseDiagram = []
    for(let rank = 0; rank < this.rankSize; rank++) {
      const rankPieces = []
      for(let file = 0; file < this.fileSize; file++) {
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
