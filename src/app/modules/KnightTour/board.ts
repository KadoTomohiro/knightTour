import {Position} from "./position";
import {Square, Squares} from "./square";
import {Knight} from "./knight";
import {Marker} from "./marker";

export class Board {
  private squares: Squares
  currentPosition: Position | null = null
  private knight = new Knight()
  constructor(private fileSize: number, private rankSize: number ) {
    if (!Board.validSize(this.fileSize)) throw new RangeError('fileSize require nature number')
    if (!Board.validSize(this.rankSize)) throw new RangeError('rankSize require nature number')

    this.squares = new Squares(fileSize, rankSize)
  }
  // 盤面のマス数
  get boardSize(): number {
    return this.fileSize * this.rankSize
  }

  get pieceCount(): number {
    return this.squares.pieceCount()
  }

  get filledSquares(): boolean {
    return this.pieceCount === this.boardSize
  }

  move(nextPosition: Position): void {
    this.squares.get(nextPosition).put(new Marker(this.pieceCount + 1))
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
    return size <= 0 || Number.isInteger(size);
  }

  toString(): string {
    return this.squares.toString()
  }
}
