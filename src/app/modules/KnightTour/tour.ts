import {Board} from "./board";
import {Position} from "./position";

type TourResult = 'success' | 'failed'

export class Tour {
  constructor(private board: Board) {}

  start(initialPosition: Position): TourResult {
    return this.search(initialPosition)
  }

  search(currentPosition: Position): TourResult {
    this.board.move(currentPosition)
    if (this.board.filledSquares) {
      return 'success'
    }

    const nextPositions = this.board.nextPosition()
      .sort((first, second) => {
        const firstMovablePositionCount = this.board.nextPosition(first).length
        const secondMovablePositionCount = this.board.nextPosition(second).length
        return firstMovablePositionCount - secondMovablePositionCount
      })

    if (nextPositions.length === 0 && !this.board.filledSquares) return 'failed'
    for (let position of nextPositions){
      const result = this.search(position)
      if (result === 'success') return result
    }

    return 'failed'

  }
}
