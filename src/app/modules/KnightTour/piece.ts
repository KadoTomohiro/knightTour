import {Position} from "./position";

export interface Piece {
  destination(position: Position): Position[]
  toString(): string
}
