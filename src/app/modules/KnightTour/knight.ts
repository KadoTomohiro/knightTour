import {Piece} from "./piece";
import {Position} from "./position";

export class Knight implements Piece {
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


  toString(): string {
    return 'N'
  }

}
