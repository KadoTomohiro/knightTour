import {Piece} from './piece';
import {Position} from './position';

export class EmptyPiece implements Piece{
  destination(position: Position): Position[] {
    return [];
  }
  toString(): string {
    return ''
  }
}
