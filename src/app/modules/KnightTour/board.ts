import {Position} from "./position";
import {Squares} from "./square";
import {Knight} from "./knight";
import {Marker} from "./marker";
import {PhaseDiagram} from './PhaseDiagram';

export class Board {
  private squares: Squares
  currentPosition: Position | null = null
  private knight = new Knight()
  constructor(private fileSize: number, private rankSize: number) {
    if (!Board.validSize(this.fileSize)) throw new RangeError('fileSize require nature number')
    if (!Board.validSize(this.rankSize)) throw new RangeError('rankSize require nature number')

    this.squares = new Squares(fileSize, rankSize)
  }
  // 盤面のマス数
  get size(): number {
    return this.fileSize * this.rankSize
  }

  get filledSquares(): boolean {
    return this.pieceCount() === this.size
  }

  pieceCount(): number {
    return this.squares.pieceCount()
  }

  move(nextPosition: Position): void {
    this.squares.get(nextPosition).put(new Marker(this.pieceCount() + 1))
    this.currentPosition = nextPosition
  }

  back(): void {
    if (!this.currentPosition) return
    this.squares.get(this.currentPosition).remove()
  }

  nextPosition(currentPosition = this.currentPosition): Position[] {
    if (!currentPosition) return []
    return this.knight.destination(currentPosition)
      .filter(position => this.insideBoard(position))
      .filter(position => this.squares.get(position).empty)
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
        rankPieces.push(this.squares.get({file, rank}).piece)
      }
      diagram.push(rankPieces)
    }
      return diagram
  }

  toString(): string {
    return this.squares.toString()
  }
}
