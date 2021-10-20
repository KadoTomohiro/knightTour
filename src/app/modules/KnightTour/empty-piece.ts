import {outSideBoard, OutSideBoard, Piece} from './piece';
import {Position} from './types';

export class EmptyPiece implements Piece{
  private _position: Position | OutSideBoard = outSideBoard
  destination(position: Position): Position[] {
    return [];
  }
  toString(): string {
    return ''
  }

  get position() {
    return this._position
  }

  put(position: Position): void {
    this._position = position
  }
}
