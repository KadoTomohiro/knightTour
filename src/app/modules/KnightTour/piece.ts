import {Position} from "./types";

export type OutSideBoard = {readonly file: -1, readonly rank:  -1}

export interface Piece {
  destination(position: Position): Position[]
  readonly position: Position | OutSideBoard
  put(position: Position): void
  toString(): string
}

export const  outSideBoard: OutSideBoard = {
  file: -1,
  rank: -1
}
