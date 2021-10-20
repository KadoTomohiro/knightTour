import {outSideBoard, OutSideBoard, Piece} from './piece';
import {Position} from "./types";

export class Knight implements Piece {
  private _position: Position | OutSideBoard
  constructor() {
    this._position = outSideBoard
  }

  static readonly movementRules =  [
    {file: -1, rank: -2},
    {file: 1, rank: -2},
    {file: -2, rank: -1},
    {file: 2, rank: -1},
    {file: -2, rank: 1},
    {file: 2, rank: 1},
    {file: -1, rank: 2},
    {file: 1, rank: 2},
  ]

  destination(position: Position): Position[] {
    const {file, rank} = position
    return Knight.movementRules
      .map(distance => {
        return {
          file: file + distance.file,
          rank: rank + distance.rank
        }
      })
  }

  put(position: Position) {
    this._position = position
  }

  get position() {
    return this._position
  }

  toString(): string {
    return 'N'
  }

}
