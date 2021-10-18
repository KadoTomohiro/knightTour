import {Board} from "./board";
import {Position} from "./position";

type TourResult = 'success' | 'failed'

export class Tour {
  constructor(private board: Board) {}

  start(initialPosition: Position): TourResult {
    return this.search(initialPosition)
  }

  private search(currentPosition: Position): TourResult {
    this.board.move(currentPosition)
    if (this.board.filledSquares) {
      return 'success'
    }

    const nextPositions = this.board.nextPosition()
      .sort(this.sorter)
      // .sort(this.randomSorter)

    if (nextPositions.length === 0 && !this.board.filledSquares) {
      this.board.back()
      return 'failed'
    }
    for (let position of nextPositions){
      const result = this.search(position)
      if (result === 'success') return result
    }

    this.board.back()


    return 'failed'

  }

  private sorter = (first: Position, second: Position) => {
    const firstMovablePositionCount = this.board.nextPosition(first).length
    const secondMovablePositionCount = this.board.nextPosition(second).length
    return firstMovablePositionCount - secondMovablePositionCount
  }

  private randomSorter = (first: Position, second: Position) => {
    const min = -1;
    const max = 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
