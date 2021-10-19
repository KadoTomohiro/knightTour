import {Piece} from "./piece";
import {Position} from "./position";
import {EmptyPiece} from './empty-piece';

export class Square {
  private _piece: Piece
  private _emptyPiece = new EmptyPiece()

  constructor() {
    this._piece = this._emptyPiece
  }

  put(piece: Piece) {
    this._piece = piece
  }

  remove() {
    this._piece = this._emptyPiece
  }

  get piece(): Piece {
    return this._piece
  }

  get empty(): boolean {
    return this._piece === this._emptyPiece
  }
}
